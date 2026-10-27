require("dotenv").config();
const path = require("path");
const { once } = require("events");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const cheerio = require("cheerio");
const swaggerUi = require("swagger-ui-express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const spec = require("./swagger");

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET is not set in .env");
  process.exit(1);
}

const UI_LANGS = ["uk", "en", "zh", "ja", "de", "pl"]; // interface languages (admin + site default)
const DESC_LANGS = ["uk", "en"]; // languages of project descriptions
const THEMES = [
  "light",
  "dark",
  "glass",
  "neumorphism",
  "neon",
  "terminal",
  "aurora",
  "brutalism",
  "sunset",
];

/* ===================== MODELS ===================== */
const { Schema, model } = mongoose;
const Admin = model(
  "Admin",
  new Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      passwordHash: { type: String, required: true },
    },
    { timestamps: true },
  ),
);

const Project = model(
  "Project",
  new Schema(
    {
      title: { type: String, required: true, trim: true },
      category: { type: String, default: "" },
      url: { type: String, default: "" },
      demo: { type: String, default: "" },
      code: { type: String, default: "" },
      languages: [String],
      date: Date,
      order: { type: Number, default: 0 },
      description: {
        uk: { type: String, default: "" },
        en: { type: String, default: "" },
      },
      image: { type: String, default: "" },
      featured: { type: Boolean, default: false },
    },
    { timestamps: true },
  ),
);

const Skill = model(
  "Skill",
  new Schema(
    {
      name: { type: String, required: true, trim: true },
      category: { type: String, default: "" },
      level: { type: Number, min: 0, max: 100, default: 50 },
      icon: { type: String, default: "" },
      startedAt: Date,
    },
    { timestamps: true },
  ),
);

const Message = model(
  "Message",
  new Schema(
    {
      name: String,
      email: String,
      text: String,
      read: { type: Boolean, default: false },
    },
    { timestamps: true },
  ),
);

const Subscriber = model(
  "Subscriber",
  new Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      source: { type: String, default: "site" },
    },
    { timestamps: true },
  ),
);

const Visit = model(
  "Visit",
  new Schema(
    {
      visitorId: String,
      ip: String,
      country: String,
      city: String,
      device: String,
      browser: String,
      os: String,
      page: String,
      referrer: String,
      lang: String,
    },
    { timestamps: { createdAt: true, updatedAt: false } },
  ),
);

const ch = (fields) =>
  Object.fromEntries([
    ["enabled", { type: Boolean, default: false }],
    ...fields.map((f) => [f, { type: String, default: "" }]),
  ]);
const Settings = model(
  "Settings",
  new Schema(
    {
      defaultTheme: { type: String, default: "dark" },
      defaultLang: { type: String, default: "uk" },
      excludedIps: [String],
      notify: {
        telegram: ch(["token", "chatId"]),
        email: ch(["to"]),
        discord: ch(["webhook"]),
        slack: ch(["webhook"]),
      },
    },
    { timestamps: true },
  ),
);

/* ===================== HELPERS ===================== */
const httpErr = (status, message) =>
  Object.assign(new Error(message), { status });
const wrap = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const auth = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  try {
    req.adminId = jwt.verify(token, process.env.JWT_SECRET).id;
    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Generic CRUD router; `fields` is a whitelist of writable fields
function crud(Model, fields, sort, router = express.Router()) {
  const pick = (req) =>
    fields.reduce((o, k) => (k in req.body && (o[k] = req.body[k]), o), {});
  router.get(
    "/",
    wrap(async (req, res) => res.json(await Model.find().sort(sort).lean())),
  );
  router.post(
    "/",
    wrap(async (req, res) =>
      res.status(201).json(await Model.create(pick(req))),
    ),
  );
  router.put(
    "/:id",
    wrap(async (req, res) => {
      const d = await Model.findByIdAndUpdate(
        req.params.id,
        { $set: pick(req) },
        { new: true, runValidators: true },
      );
      if (!d) throw httpErr(404, "Not found");
      res.json(d);
    }),
  );
  router.delete(
    "/:id",
    wrap(async (req, res) => {
      if (!(await Model.findByIdAndDelete(req.params.id)))
        throw httpErr(404, "Not found");
      res.json({ ok: true });
    }),
  );
  return router;
}

let regionNames;
try {
  regionNames = new Intl.DisplayNames(["en"], { type: "region" });
} catch {}
const cname = (c) => {
  if (!c) return "Unknown";
  try {
    return regionNames?.of(c) || c;
  } catch {
    return c;
  }
};

/* ===================== SERVICE: link -> project details ===================== */
const PRIVATE =
  /^(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.|0\.|\[?::1)/;

async function gh(p) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-admin",
  };
  if (process.env.GITHUB_TOKEN)
    headers.Authorization = "Bearer " + process.env.GITHUB_TOKEN;
  const r = await fetch("https://api.github.com" + p, {
    headers,
    signal: AbortSignal.timeout(10000),
  });
  if (!r.ok) throw new Error("GitHub " + r.status);
  return r.json();
}

async function getMeta(raw) {
  let u;
  try {
    u = new URL(raw);
  } catch {
    throw httpErr(400, "Invalid URL");
  }
  if (!/^https?:$/.test(u.protocol) || PRIVATE.test(u.hostname))
    throw httpErr(400, "This URL is not allowed");
  const out = {
    title: "",
    description: "",
    image: "",
    languages: [],
    code: "",
  };
  let loaded = false;
  try {
    // Free Render sites can take a while to wake up
    const res = await fetch(u, {
      signal: AbortSignal.timeout(25000),
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0 PortfolioBot",
        Accept: "text/html",
      },
    });
    if (res.ok) {
      const $ = cheerio.load((await res.text()).slice(0, 500000));
      const m = (n) =>
        $(`meta[property="${n}"],meta[name="${n}"]`).attr("content") || "";
      out.title = (m("og:title") || $("title").first().text()).trim();
      out.description = (m("og:description") || m("description")).trim();
      const im = m("og:image");
      if (im) {
        try {
          out.image = new URL(im, u).href;
        } catch {}
      }
      loaded = true;
    }
  } catch {}
  if (u.hostname === "github.com") {
    const [, owner, repo] = u.pathname.split("/");
    if (owner && repo) {
      try {
        const info = await gh(`/repos/${owner}/${repo}`);
        out.code = `https://github.com/${owner}/${repo}`;
        out.title = out.title || info.name;
        if (!out.description || /^GitHub - /.test(out.description))
          out.description = info.description || "";
        out.languages = Object.keys(
          await gh(`/repos/${owner}/${repo}/languages`),
        );
        loaded = true;
      } catch {}
    }
  }
  if (!loaded)
    throw httpErr(
      502,
      "Could not load this page. If it is a free Render site, open it once to wake it up and try again",
    );
  return out;
}

/* ===================== SERVICE: translation (MyMemory) ===================== */
const TR_CODE = { uk: "uk", en: "en", zh: "zh-CN", ja: "ja" };
const decode = (s) =>
  s
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");

function chunks(text, max = 450) {
  // MyMemory accepts ~500 characters per request
  const out = [];
  let cur = "";
  for (const s of text.split(/(?<=[.!?。！？])\s*/)) {
    if ((cur + " " + s).length > max && cur) {
      out.push(cur);
      cur = s;
    } else cur = cur ? cur + " " + s : s;
  }
  if (cur) out.push(cur);
  return out.flatMap((c) => c.match(new RegExp(`.{1,${max}}`, "gs")) || []);
}

async function translateOne(text, from, to) {
  const parts = [];
  for (const c of chunks(text)) {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(c)}&langpair=${TR_CODE[from]}|${TR_CODE[to]}`;
    const j = await (
      await fetch(url, { signal: AbortSignal.timeout(10000) })
    ).json();
    if (j.responseStatus !== 200)
      throw new Error(j.responseDetails || "Translation failed");
    parts.push(decode(j.responseData.translatedText));
  }
  return parts.join(" ");
}

async function translate(text, from) {
  const targets = DESC_LANGS.filter((l) => l !== from);
  const res = await Promise.allSettled(
    targets.map((t) => translateOne(text, from, t)),
  );
  const out = {};
  targets.forEach((t, i) => {
    out[t] = res[i].status === "fulfilled" ? res[i].value : "";
  });
  if (res.every((r) => r.status === "rejected"))
    throw new Error("Translation service is unavailable, try again later");
  return out;
}

/* ===================== APP ===================== */
const app = express();
app.set("trust proxy", 1); // correct client IP behind Render's proxy
app.use(cors({ origin: process.env.CORS_ORIGIN || false }));
app.use(express.json({ limit: "1mb" }));

/* ---- public API ---- */
app.use(
  "/api/auth/login",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    skipSuccessfulRequests: true,
    message: { message: "Too many attempts, try again later" },
  }),
);
app.post(
  "/api/auth/login",
  wrap(async (req, res) => {
    const { email, password } = req.body || {};
    const admin = await Admin.findOne({
      email: String(email || "")
        .toLowerCase()
        .trim(),
    });
    if (!admin)
      console.log(
        'Login failed: no admin with email "' +
          String(email || "")
            .toLowerCase()
            .trim() +
          '"',
      );
    else if (
      !(await bcrypt.compare(String(password || ""), admin.passwordHash))
    )
      console.log(
        "Login failed: email is correct, password is wrong (typed length: " +
          String(password || "").length +
          ")",
      );
    if (
      !admin ||
      !(await bcrypt.compare(String(password || ""), admin.passwordHash))
    )
      throw httpErr(401, "Invalid email or password");
    res.json({
      token: jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      }),
    });
  }),
);

/* ---- images (MongoDB GridFS) ---- */
const OK_IMG = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/avif",
]; // SVG blocked on purpose (XSS)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) =>
    OK_IMG.includes(file.mimetype)
      ? cb(null, true)
      : cb(httpErr(400, "Only PNG, JPG, WebP, GIF or AVIF images are allowed")),
});
const bucket = () =>
  new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "images",
  });

app.post(
  "/api/images",
  auth,
  upload.single("image"),
  wrap(async (req, res) => {
    if (!req.file) throw httpErr(400, "No file uploaded");
    const up = bucket().openUploadStream(req.file.originalname, {
      contentType: req.file.mimetype,
    });
    up.end(req.file.buffer);
    await once(up, "finish");
    res.status(201).json({ url: `/api/images/${up.id}` });
  }),
);
app.get(
  "/api/images/:id",
  wrap(async (req, res) => {
    // public, the client site shows these too
    let id;
    try {
      id = new mongoose.Types.ObjectId(req.params.id);
    } catch {
      throw httpErr(404, "Not found");
    }
    const [file] = await bucket().find({ _id: id }).toArray();
    if (!file) throw httpErr(404, "Not found");
    res.set({
      "Content-Type": file.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    });
    bucket()
      .openDownloadStream(id)
      .on("error", () => res.end())
      .pipe(res);
  }),
);

/* ---- public: newsletter subscription ---- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validEmail = (e) => EMAIL_RE.test(e) && e.length <= 254;
const unsubToken = (e) =>
  crypto
    .createHmac("sha256", process.env.JWT_SECRET)
    .update(e)
    .digest("hex")
    .slice(0, 32);
const baseUrl = (req) =>
  (process.env.PUBLIC_URL || `${req.protocol}://${req.get("host")}`).replace(
    /\/$/,
    "",
  );

// The portfolio site calls this from its "subscribe" form: POST /api/subscribe { email }
app.post(
  "/api/subscribe",
  rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 20,
    message: { message: "Too many attempts, try again later" },
  }),
  wrap(async (req, res) => {
    const email = String(req.body?.email || "")
      .trim()
      .toLowerCase();
    if (!validEmail(email)) throw httpErr(400, "Enter a valid email");
    const r = await Subscriber.updateOne(
      { email },
      { $setOnInsert: { source: "site" } },
      { upsert: true },
    );
    res.status(r.upsertedCount ? 201 : 200).json({ ok: true });
  }),
);
app.get(
  "/api/unsubscribe",
  wrap(async (req, res) => {
    const e = String(req.query.e || "")
        .trim()
        .toLowerCase(),
      tk = String(req.query.t || "");
    const ok =
      /^[0-9a-f]{32}$/.test(tk) &&
      crypto.timingSafeEqual(Buffer.from(tk), Buffer.from(unsubToken(e)));
    if (ok) await Subscriber.deleteOne({ email: e });
    res
      .status(ok ? 200 : 400)
      .type("html")
      .send(
        `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Unsubscribe</title><body style="font:16px/1.5 system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0"><p>${
          ok ? "You have been unsubscribed." : "This link is not valid."
        }</p></body>`,
      );
  }),
);

/* ---- everything below needs a token ---- */
app.use("/api", auth);

const projects = express.Router();
// only the description languages we keep (uk, en)
projects.use((req, res, next) => {
  const d = req.body?.description;
  if (d && typeof d === "object")
    req.body.description = Object.fromEntries(
      DESC_LANGS.map((l) => [l, String(d[l] ?? "")]),
    );
  next();
});
projects.post(
  "/fetch-meta",
  wrap(async (req, res) => {
    // before /:id
    if (!req.body?.url) throw httpErr(400, "Enter a link");
    res.json(await getMeta(req.body.url));
  }),
);
app.use(
  "/api/projects",
  crud(
    Project,
    [
      "title",
      "category",
      "url",
      "demo",
      "code",
      "languages",
      "date",
      "order",
      "description",
      "image",
      "featured",
    ],
    { order: 1, createdAt: -1 },
    projects,
  ),
);
app.use(
  "/api/skills",
  crud(Skill, ["name", "category", "level", "icon", "startedAt"], {
    category: 1,
    level: -1,
  }),
);

app.post(
  "/api/translate",
  wrap(async (req, res) => {
    const { text, from } = req.body || {};
    if (!text || !String(text).trim())
      throw httpErr(400, "Write some text first");
    if (!DESC_LANGS.includes(from)) throw httpErr(400, "Unknown language");
    try {
      res.json(await translate(String(text), from));
    } catch (e) {
      throw httpErr(502, e.message);
    }
  }),
);

/* ---- messages ---- */
app.get(
  "/api/messages",
  wrap(async (req, res) =>
    res.json(await Message.find().sort({ createdAt: -1 }).limit(500).lean()),
  ),
);
app.patch(
  "/api/messages/:id",
  wrap(async (req, res) => {
    if (!(await Message.findByIdAndUpdate(req.params.id, { read: true })))
      throw httpErr(404, "Not found");
    res.json({ ok: true });
  }),
);
app.delete(
  "/api/messages/:id",
  wrap(async (req, res) => {
    if (!(await Message.findByIdAndDelete(req.params.id)))
      throw httpErr(404, "Not found");
    res.json({ ok: true });
  }),
);

/* ---- email (nodemailer) ---- */
const MAX_RECIPIENTS = 300;
const smtpReady = () =>
  !!(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  );
const mailFrom = () => process.env.MAIL_FROM || process.env.SMTP_USER || "";
let transport;
const mailer = () => {
  if (!smtpReady())
    throw httpErr(
      503,
      "SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS in .env",
    );
  const port = +process.env.SMTP_PORT || 587;
  return (transport ||= nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    pool: true,
    maxConnections: 3,
  }));
};
const smtpSend = async (msg) => {
  const t = mailer();
  try {
    return await t.sendMail({ from: mailFrom(), ...msg });
  } catch (e) {
    throw httpErr(502, "SMTP error: " + (e.message || "send failed"));
  }
};
const escH = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const parseEmails = (v) => [
  ...new Set(
    (Array.isArray(v) ? v : String(v || "").split(/[\s,;]+/))
      .map((s) => String(s).trim().toLowerCase())
      .filter(Boolean),
  ),
];

app.get(
  "/api/mail/status",
  wrap(async (req, res) =>
    res.json({ configured: smtpReady(), from: mailFrom() }),
  ),
);
app.post(
  "/api/mail/test",
  wrap(async (req, res) => {
    const to = parseEmails(req.body?.to);
    if (!to.length) throw httpErr(400, "Enter an email first");
    if (to.length > 5 || !to.every(validEmail))
      throw httpErr(400, "Invalid email address");
    await smtpSend({
      to: to.join(", "),
      subject: "Portfolio Admin: test email",
      text: "Nodemailer works. This is a test message from your portfolio admin.",
    });
    res.json({ ok: true, to: to.join(", ") });
  }),
);
app.post(
  "/api/mail/send",
  wrap(async (req, res) => {
    const list = parseEmails(req.body?.recipients),
      subject = String(req.body?.subject || "").trim(),
      text = String(req.body?.text || "").trim();
    if (!list.length) throw httpErr(400, "Add at least one recipient");
    const bad = list.filter((e) => !validEmail(e));
    if (bad.length)
      throw httpErr(400, "Invalid email: " + bad.slice(0, 3).join(", "));
    if (list.length > MAX_RECIPIENTS)
      throw httpErr(400, `Too many recipients (max ${MAX_RECIPIENTS} at once)`);
    if (!subject || subject.length > 200)
      throw httpErr(400, "Enter a subject (max 200 characters)");
    if (!text || text.length > 20000)
      throw httpErr(400, "Enter a message (max 20000 characters)");
    mailer(); // fail early if SMTP is not configured
    const base = baseUrl(req),
      failed = [];
    let sent = 0;
    // one email per person, so nobody sees the other addresses
    for (let i = 0; i < list.length; i += 5) {
      const part = list.slice(i, i + 5);
      const r = await Promise.allSettled(
        part.map((to) => {
          const link = `${base}/api/unsubscribe?e=${encodeURIComponent(to)}&t=${unsubToken(to)}`;
          return smtpSend({
            to,
            subject,
            text: `${text}\n\n--\nUnsubscribe: ${link}`,
            html: `<div style="font:15px/1.6 Arial,sans-serif;color:#222">${escH(text).replace(/\r?\n/g, "<br>")}</div><hr style="border:0;border-top:1px solid #ddd;margin:24px 0 12px"><p style="font:12px Arial,sans-serif;color:#888"><a href="${link}" style="color:#888">Unsubscribe</a></p>`,
            headers: { "List-Unsubscribe": `<${link}>` },
          });
        }),
      );
      r.forEach((x, k) =>
        x.status === "fulfilled" ? sent++ : failed.push(part[k]),
      );
    }
    res.json({ sent, failed });
  }),
);

/* ---- subscribers ---- */
app.get(
  "/api/subscribers",
  wrap(async (req, res) =>
    res.json(await Subscriber.find().sort({ createdAt: -1 }).limit(5000).lean()),
  ),
);
app.post(
  "/api/subscribers",
  wrap(async (req, res) => {
    const email = String(req.body?.email || "")
      .trim()
      .toLowerCase();
    if (!validEmail(email)) throw httpErr(400, "Enter a valid email");
    await Subscriber.updateOne(
      { email },
      { $setOnInsert: { source: "admin" } },
      { upsert: true },
    );
    res.status(201).json({ ok: true });
  }),
);
app.delete(
  "/api/subscribers/:id",
  wrap(async (req, res) => {
    if (!(await Subscriber.findByIdAndDelete(req.params.id)))
      throw httpErr(404, "Not found");
    res.json({ ok: true });
  }),
);

/* ---- visits and statistics ---- */
app.get(
  "/api/visits",
  wrap(async (req, res) => {
    const v = await Visit.find().sort({ createdAt: -1 }).limit(200).lean();
    res.json(v.map((x) => ({ ...x, country: cname(x.country) })));
  }),
);
app.get(
  "/api/visits/stats",
  wrap(async (req, res) => {
    const day = (n) =>
      new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);
    const since = new Date(day(13)),
      todayStart = new Date(day(0));
    const top = (f) =>
      Visit.aggregate([
        {
          $group: {
            _id: { $ifNull: ["$" + f, "Unknown"] },
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
        { $limit: 10 },
      ]);
    const [total, today, uniq, countries, devices, daily, recent] =
      await Promise.all([
        Visit.countDocuments(),
        Visit.countDocuments({ createdAt: { $gte: todayStart } }),
        Visit.aggregate([
          { $group: { _id: { $ifNull: ["$visitorId", "$ip"] } } },
          { $count: "n" },
        ]),
        top("country"),
        top("device"),
        Visit.aggregate([
          { $match: { createdAt: { $gte: since } } },
          {
            $group: {
              _id: { $dateToString: { format: "%m-%d", date: "$createdAt" } },
              count: { $sum: 1 },
            },
          },
        ]),
        Visit.find().sort({ createdAt: -1 }).limit(8).lean(),
      ]);
    const map = Object.fromEntries(daily.map((d) => [d._id, d.count]));
    res.json({
      total,
      today,
      unique: uniq[0]?.n || 0,
      countries: countries.map((c) => ({ name: cname(c._id), count: c.count })),
      devices: devices.map((d) => ({ name: d._id, count: d.count })),
      daily: Array.from({ length: 14 }, (_, i) => {
        const d = day(13 - i).slice(5);
        return { date: d, count: map[d] || 0 };
      }),
      recent: recent.map((x) => ({ ...x, country: cname(x.country) })),
    });
  }),
);

/* ---- settings ---- */
const NOTIFY = {
  telegram: ["token", "chatId"],
  email: ["to"],
  discord: ["webhook"],
  slack: ["webhook"],
};
const getSettings = async () =>
  (await Settings.findOne()) || Settings.create({});
app.get(
  "/api/settings",
  wrap(async (req, res) => res.json(await getSettings())),
);
app.put(
  "/api/settings",
  wrap(async (req, res) => {
    const b = req.body || {},
      set = {};
    if (b.defaultTheme !== undefined) {
      if (!THEMES.includes(b.defaultTheme)) throw httpErr(400, "Unknown theme");
      set.defaultTheme = b.defaultTheme;
    }
    if (b.defaultLang !== undefined) {
      if (!UI_LANGS.includes(b.defaultLang))
        throw httpErr(400, "Unknown language");
      set.defaultLang = b.defaultLang;
    }
    if (Array.isArray(b.excludedIps))
      set.excludedIps = b.excludedIps
        .map(String)
        .map((s) => s.trim())
        .filter(Boolean);
    for (const [c, fields] of Object.entries(NOTIFY)) {
      const n = b.notify?.[c];
      if (!n) continue;
      if (n.enabled !== undefined) set[`notify.${c}.enabled`] = !!n.enabled;
      for (const f of fields)
        if (n[f] !== undefined) set[`notify.${c}.${f}`] = String(n[f]).trim();
    }
    await getSettings();
    res.json(
      await Settings.findOneAndUpdate(
        {},
        { $set: set },
        { new: true, runValidators: true },
      ),
    );
  }),
);
app.post(
  "/api/settings/exclude-me",
  wrap(async (req, res) => {
    const ip = (req.ip || "").replace(/^::ffff:/, "");
    await getSettings();
    await Settings.updateOne({}, { $addToSet: { excludedIps: ip } });
    res.json({ ip });
  }),
);

app.use("/api", (req, res) => res.status(404).json({ message: "Not found" }));

/* ---- Swagger and frontend ---- */
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(spec, { swaggerOptions: { persistAuthorization: true } }),
);
app.use(
  express.static(path.join(__dirname, "public"), { index: "admin.html" }),
);

app.use((err, req, res, next) => {
  let status = err.status || 500;
  if (["ValidationError", "CastError", "MulterError"].includes(err.name))
    status = 400;
  if (status === 500) console.error(err);
  res
    .status(status)
    .json({ message: status === 500 ? "Server error" : err.message });
});

/* ===================== START ===================== */
async function seedAdmin() {
  const email = (process.env.ADMIN_EMAIL || "").toLowerCase().trim(),
    pw = process.env.ADMIN_PASSWORD || "";
  if (!email || pw.length < 8)
    return console.warn(
      "Set ADMIN_EMAIL and ADMIN_PASSWORD (min 8 chars) in .env",
    );
  const admin = await Admin.findOne();
  if (!admin) {
    await Admin.create({ email, passwordHash: await bcrypt.hash(pw, 12) });
    return console.log("Admin account created:", email);
  }
  // .env is the source of truth: if email or password changed there, the account is updated
  if (
    admin.email !== email ||
    !(await bcrypt.compare(pw, admin.passwordHash))
  ) {
    admin.email = email;
    admin.passwordHash = await bcrypt.hash(pw, 12);
    await admin.save();
    console.log("Admin account updated from .env:", email);
  }
  console.log(
    "Admin ready: " + email + " (password length in .env: " + pw.length + ")",
  );
}

(async () => {
  if (!process.env.MONGODB_URI)
    throw new Error("MONGODB_URI is not set in .env");
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected:", mongoose.connection.name);
  await seedAdmin();
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Admin:   http://localhost:${port}`);
    console.log(`Swagger: http://localhost:${port}/api-docs`);
  });
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});