const sec = [{ bearer: [] }];
const ok = { 200: { description: "OK" }, 401: { description: "Unauthorized" } };
const body = (name) => ({
  required: true,
  content: {
    "application/json": { schema: { $ref: `#/components/schemas/${name}` } },
  },
});
const id = [
  { name: "id", in: "path", required: true, schema: { type: "string" } },
];

const crud = (tag, path, schema) => ({
  [`/${path}`]: {
    get: {
      tags: [tag],
      summary: `List ${tag.toLowerCase()}`,
      security: sec,
      responses: ok,
    },
    post: {
      tags: [tag],
      summary: `Create ${tag.toLowerCase().replace(/s$/, "")}`,
      security: sec,
      requestBody: body(schema),
      responses: {
        201: { description: "Created" },
        400: { description: "Validation error" },
      },
    },
  },
  [`/${path}/{id}`]: {
    put: {
      tags: [tag],
      summary: "Update",
      security: sec,
      parameters: id,
      requestBody: body(schema),
      responses: ok,
    },
    delete: {
      tags: [tag],
      summary: "Delete",
      security: sec,
      parameters: id,
      responses: ok,
    },
  },
});

const str = { type: "string" };
module.exports = {
  openapi: "3.0.3",
  info: {
    title: "Portfolio Admin API",
    version: "1.0.0",
    description:
      "Log in with POST /auth/login, copy the token, press Authorize and paste it.",
  },
  servers: [{ url: "/api" }],
  components: {
    securitySchemes: {
      bearer: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
    },
    schemas: {
      Login: {
        type: "object",
        required: ["email", "password"],
        properties: { email: str, password: str },
      },
      Project: {
        type: "object",
        required: ["title"],
        properties: {
          title: str,
          category: str,
          url: str,
          demo: str,
          code: str,
          image: str,
          languages: { type: "array", items: str },
          date: { type: "string", format: "date" },
          order: { type: "integer" },
          featured: { type: "boolean" },
          description: {
            type: "object",
            properties: { uk: str, en: str },
          },
        },
      },
      Skill: {
        type: "object",
        required: ["name"],
        properties: {
          name: str,
          category: str,
          level: { type: "integer", minimum: 0, maximum: 100 },
          icon: str,
          startedAt: { type: "string", format: "date" },
        },
      },
      Settings: {
        type: "object",
        properties: {
          defaultTheme: {
            type: "string",
            enum: [
              "light",
              "dark",
              "glass",
              "neumorphism",
              "neon",
              "terminal",
              "aurora",
              "brutalism",
              "sunset",
            ],
          },
          defaultLang: {
            type: "string",
            enum: ["uk", "en", "zh", "ja", "de", "pl"],
          },
          excludedIps: { type: "array", items: str },
          notify: { type: "object" },
        },
      },
      Url: { type: "object", required: ["url"], properties: { url: str } },
      Translate: {
        type: "object",
        required: ["text", "from"],
        properties: {
          text: str,
          from: { type: "string", enum: ["uk", "en"] },
        },
      },
      Email: { type: "object", required: ["email"], properties: { email: str } },
      MailTest: { type: "object", required: ["to"], properties: { to: str } },
      MailSend: {
        type: "object",
        required: ["recipients", "subject", "text"],
        properties: {
          recipients: { type: "array", items: str },
          subject: str,
          text: str,
        },
      },
    },
  },
  paths: {
    "/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Log in and get a JWT",
        requestBody: body("Login"),
        responses: {
          200: { description: "Token" },
          401: { description: "Wrong credentials" },
        },
      },
    },
    ...crud("Projects", "projects", "Project"),
    "/projects/fetch-meta": {
      post: {
        tags: ["Projects"],
        summary: "Read title, description, image and languages from a link",
        security: sec,
        requestBody: body("Url"),
        responses: ok,
      },
    },
    ...crud("Skills", "skills", "Skill"),
    "/translate": {
      post: {
        tags: ["Tools"],
        summary: "Translate text into the other site languages",
        security: sec,
        requestBody: body("Translate"),
        responses: ok,
      },
    },
    "/images": {
      post: {
        tags: ["Tools"],
        summary: "Upload an image to MongoDB (GridFS)",
        security: sec,
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: { image: { type: "string", format: "binary" } },
              },
            },
          },
        },
        responses: { 201: { description: "Returns { url }" } },
      },
    },
    "/images/{id}": {
      get: {
        tags: ["Tools"],
        summary: "Get an image (public)",
        parameters: id,
        responses: {
          200: { description: "Image" },
          404: { description: "Not found" },
        },
      },
    },
    "/messages": {
      get: {
        tags: ["Messages"],
        summary: "List messages",
        security: sec,
        responses: ok,
      },
    },
    "/messages/{id}": {
      patch: {
        tags: ["Messages"],
        summary: "Mark as read",
        security: sec,
        parameters: id,
        responses: ok,
      },
      delete: {
        tags: ["Messages"],
        summary: "Delete",
        security: sec,
        parameters: id,
        responses: ok,
      },
    },
    "/visits": {
      get: {
        tags: ["Statistics"],
        summary: "Latest 200 visits",
        security: sec,
        responses: ok,
      },
    },
    "/visits/stats": {
      get: {
        tags: ["Statistics"],
        summary: "Dashboard numbers and charts data",
        security: sec,
        responses: ok,
      },
    },
    "/subscribe": {
      post: {
        tags: ["Email"],
        summary: "Public: subscribe an email (used by the portfolio site)",
        requestBody: body("Email"),
        responses: {
          201: { description: "Subscribed" },
          200: { description: "Already subscribed" },
          400: { description: "Invalid email" },
        },
      },
    },
    "/unsubscribe": {
      get: {
        tags: ["Email"],
        summary: "Public: one-click unsubscribe link from emails",
        parameters: [
          { name: "e", in: "query", required: true, schema: str },
          { name: "t", in: "query", required: true, schema: str },
        ],
        responses: { 200: { description: "Unsubscribed" } },
      },
    },
    "/subscribers": {
      get: {
        tags: ["Email"],
        summary: "List subscribers",
        security: sec,
        responses: ok,
      },
      post: {
        tags: ["Email"],
        summary: "Add a subscriber",
        security: sec,
        requestBody: body("Email"),
        responses: { 201: { description: "Added" } },
      },
    },
    "/subscribers/{id}": {
      delete: {
        tags: ["Email"],
        summary: "Remove a subscriber",
        security: sec,
        parameters: id,
        responses: ok,
      },
    },
    "/mail/status": {
      get: {
        tags: ["Email"],
        summary: "Is SMTP (nodemailer) configured",
        security: sec,
        responses: ok,
      },
    },
    "/mail/test": {
      post: {
        tags: ["Email"],
        summary: "Send a test email",
        security: sec,
        requestBody: body("MailTest"),
        responses: ok,
      },
    },
    "/mail/send": {
      post: {
        tags: ["Email"],
        summary: "Send an email to many recipients (one email per person)",
        security: sec,
        requestBody: body("MailSend"),
        responses: ok,
      },
    },
    "/settings": {
      get: {
        tags: ["Settings"],
        summary: "Get settings",
        security: sec,
        responses: ok,
      },
      put: {
        tags: ["Settings"],
        summary: "Update settings",
        security: sec,
        requestBody: body("Settings"),
        responses: ok,
      },
    },
    "/settings/exclude-me": {
      post: {
        tags: ["Settings"],
        summary: "Add the current IP to the excluded list",
        security: sec,
        responses: ok,
      },
    },
  },
};