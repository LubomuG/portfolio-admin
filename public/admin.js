/* Admin interface translations. To add a language: add a block here,
   then add its code to UI_LANGS / LANG_NAMES in admin.js and to UI_LANGS in serveradmin.js */
const I18N = {
  uk: {
    "login.sub": "Увійдіть, щоб керувати портфоліо.",
    "login.email": "Електронна пошта",
    "login.pw": "Пароль",
    "login.btn": "Увійти",
    "nav.dash": "Панель",
    "nav.projects": "Проєкти",
    "nav.skills": "Навички",
    "nav.messages": "Повідомлення",
    "nav.settings": "Налаштування",
    "nav.email": "Пошта",
    "nav.out": "Вийти",
    "pk.lang": "Мова",
    "pk.theme": "Тема",
    "err.session": "Сесія завершилась",
    "err.req": "Помилка запиту",
    "dash.latest": "Останні повідомлення",
    "dash.unread": "Непрочитані",
    "msg.none": "Повідомлень ще немає. Вони з’являться тут, коли хтось скористається формою зв’язку.",
    "p.fromLink": "Додати за посиланням",
    "p.linkPh": "https://my-project.onrender.com або посилання на GitHub",
    "p.fetch": "Отримати дані",
    "p.hint": "Назва, опис, зображення та мови заповнюються автоматично. Перед збереженням усе можна змінити.",
    "p.details": "Дані проєкту",
    "p.title": "Назва",
    "p.cat": "Категорія",
    "p.catPh": "Веб-застосунок, Бот, Гра…",
    "p.live": "Сайт (Render)",
    "p.demo": "Демо-посилання",
    "p.code": "Код (GitHub)",
    "p.langs": "Мови та технології (через кому)",
    "p.date": "Дата",
    "p.order": "Порядок",
    "p.desc": "Опис",
    "p.tr": "Перекласти на іншу мову",
    "p.img": "Зображення",
    "p.imgPh": "URL зображення або завантажте файл",
    "p.choose": "Вибрати файл",
    "p.noFile": "Файл не вибрано",
    "p.save": "Зберегти проєкт",
    "p.clear": "Очистити форму",
    "p.yours": "Ваші проєкти",
    "p.none": "Проєктів ще немає. Вставте посилання вище, щоб додати перший.",
    "p.editing": "Редагування: {x}",
    "p.loaded": "Дані завантажено",
    "p.translated": "Перекладено. Перевірте результат на вкладках",
    "p.uploaded": "Зображення завантажено",
    "p.enterTitle": "Введіть назву проєкту",
    "p.saved": "Проєкт збережено",
    "p.confirm": "Видалити цей проєкт?",
    "p.deleted": "Проєкт видалено",
    "btn.edit": "Редагувати",
    "btn.del": "Видалити",
    "s.add": "Додати навичку",
    "s.name": "Назва",
    "s.cat": "Категорія",
    "s.catPh": "Frontend, Backend, Інструменти…",
    "s.lvl": "Рівень (0–100%)",
    "s.icon": "Іконка (емодзі, URL або файл)",
    "s.since": "Вивчаю з",
    "s.save": "Зберегти навичку",
    "s.clear": "Очистити форму",
    "s.yours": "Ваші навички",
    "s.none": "Навичок ще немає. Додайте першу вище.",
    "s.meta": "{lvl}% · вивчаю {since}",
    "s.enter": "Введіть назву навички",
    "s.saved": "Навичку збережено",
    "s.confirm": "Видалити цю навичку?",
    "s.deleted": "Навичку видалено",
    "s.uploaded": "Іконку завантажено",
    "u.d": "дн.",
    "u.y": "р.",
    "u.m": "міс.",
    "m.read": "Позначити прочитаним",
    "m.confirm": "Видалити це повідомлення?",
    "set.site": "Сайт",
    "set.theme": "Тема за замовчуванням",
    "set.lang": "Мова за замовчуванням",
    "set.langHint": "Також змінює мову цієї адмінки.",
    "set.ips": "Виключені IP",
    "set.ipsHint": "Візити з цих IP не рахуються. По одному в рядок.",
    "set.me": "Виключити мій IP",
    "set.meDone": "IP додано: {ip}",
    "set.notify": "Сповіщення",
    "set.save": "Зберегти налаштування",
    "set.saved": "Налаштування збережено",
    "tg.token": "Токен бота",
    "tg.tokenPh": "Від @BotFather",
    "tg.chat": "ID чату",
    "tg.chatPh": "Ваш ID чату",
    "wh.url": "URL вебхука",
    "e.server": "Поштовий сервер (nodemailer)",
    "e.ok": "Підключено. Листи надсилаються від {from}",
    "e.no": "Не налаштовано. Додайте SMTP_HOST, SMTP_USER і SMTP_PASS у .env",
    "e.notify": "Сповіщення про нові повідомлення",
    "e.enable": "Надсилати на пошту",
    "e.to": "Куди надсилати",
    "e.save": "Зберегти",
    "e.saved": "Збережено",
    "e.test": "Тестовий лист",
    "e.testDone": "Тестовий лист надіслано: {to}",
    "e.compose": "Написати листа",
    "e.rcpt": "Отримувачі (через кому, пробіл або новий рядок)",
    "e.rcptPh": "Типово — усі підписники",
    "e.noRcpt": "Додайте хоча б одного отримувача",
    "e.bad": "Некоректна адреса: {x}",
    "e.all": "Усі підписники ({n})",
    "e.clr": "Очистити",
    "e.cnt": "Отримувачів: {n}",
    "e.subj": "Тема листа",
    "e.body": "Текст листа",
    "e.send": "Надіслати",
    "e.sent": "Надіслано: {n}",
    "e.failed": "Не вдалося: {list}",
    "e.confirm": "Надіслати лист ({n})?",
    "e.hint": "До кожного листа автоматично додається посилання для відписки.",
    "e.subs": "Підписники ({n})",
    "e.subAdd": "Додати",
    "e.subPh": "name@example.com",
    "e.subNone": "Підписників ще немає. Форма на вашому сайті має надсилати email на POST /api/subscribe.",
    "e.subAdded": "Підписника додано",
    "e.subDel": "Видалити цього підписника?",
  },
  en: {
    "login.sub": "Sign in to manage your portfolio.",
    "login.email": "Email",
    "login.pw": "Password",
    "login.btn": "Sign in",
    "nav.dash": "Dashboard",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.messages": "Messages",
    "nav.settings": "Settings",
    "nav.email": "Email",
    "nav.out": "Sign out",
    "pk.lang": "Language",
    "pk.theme": "Theme",
    "err.session": "Session expired",
    "err.req": "Request failed",
    "dash.latest": "Latest messages",
    "dash.unread": "Unread",
    "msg.none": "No messages yet. They will appear here when someone uses your contact form.",
    "p.fromLink": "Add from link",
    "p.linkPh": "https://my-project.onrender.com or a GitHub URL",
    "p.fetch": "Fetch details",
    "p.hint": "Title, description, image and languages are filled in automatically. You can edit everything before saving.",
    "p.details": "Project details",
    "p.title": "Title",
    "p.cat": "Category",
    "p.catPh": "Web app, Bot, Game…",
    "p.live": "Live site (Render)",
    "p.demo": "Demo link",
    "p.code": "Code (GitHub)",
    "p.langs": "Languages and tech (comma separated)",
    "p.date": "Date",
    "p.order": "Order",
    "p.desc": "Description",
    "p.tr": "Translate to the other language",
    "p.img": "Image",
    "p.imgPh": "Image URL, or upload a file",
    "p.choose": "Choose file",
    "p.noFile": "No file chosen",
    "p.save": "Save project",
    "p.clear": "Clear form",
    "p.yours": "Your projects",
    "p.none": "No projects yet. Paste a link above to add the first one.",
    "p.editing": "Editing: {x}",
    "p.loaded": "Details loaded",
    "p.translated": "Translated. Check the result in each tab",
    "p.uploaded": "Image uploaded",
    "p.enterTitle": "Enter a project title",
    "p.saved": "Project saved",
    "p.confirm": "Delete this project?",
    "p.deleted": "Project deleted",
    "btn.edit": "Edit",
    "btn.del": "Delete",
    "s.add": "Add skill",
    "s.name": "Name",
    "s.cat": "Category",
    "s.catPh": "Frontend, Backend, Tools…",
    "s.lvl": "Level (0–100%)",
    "s.icon": "Icon (emoji, URL or file)",
    "s.since": "Learning since",
    "s.save": "Save skill",
    "s.clear": "Clear form",
    "s.yours": "Your skills",
    "s.none": "No skills yet. Add the first one above.",
    "s.meta": "{lvl}% · learning {since}",
    "s.enter": "Enter a skill name",
    "s.saved": "Skill saved",
    "s.confirm": "Delete this skill?",
    "s.deleted": "Skill deleted",
    "s.uploaded": "Icon uploaded",
    "u.d": "days",
    "u.y": "y",
    "u.m": "m",
    "m.read": "Mark as read",
    "m.confirm": "Delete this message?",
    "set.site": "Site",
    "set.theme": "Default theme",
    "set.lang": "Default language",
    "set.langHint": "Also changes the language of this admin.",
    "set.ips": "Excluded IPs",
    "set.ipsHint": "Visits from these IPs are not counted. One per line.",
    "set.me": "Exclude my IP",
    "set.meDone": "IP added: {ip}",
    "set.notify": "Notifications",
    "set.save": "Save settings",
    "set.saved": "Settings saved",
    "tg.token": "Bot token",
    "tg.tokenPh": "From @BotFather",
    "tg.chat": "Chat ID",
    "tg.chatPh": "Your chat ID",
    "wh.url": "Webhook URL",
    "e.server": "Mail server (nodemailer)",
    "e.ok": "Connected. Emails are sent from {from}",
    "e.no": "Not configured. Add SMTP_HOST, SMTP_USER and SMTP_PASS to .env",
    "e.notify": "New message notification",
    "e.enable": "Send to email",
    "e.to": "Send notifications to",
    "e.save": "Save",
    "e.saved": "Saved",
    "e.test": "Send test email",
    "e.testDone": "Test email sent to {to}",
    "e.compose": "Write an email",
    "e.rcpt": "Recipients (comma, space or new line separated)",
    "e.rcptPh": "By default: all subscribers",
    "e.noRcpt": "Add at least one recipient",
    "e.bad": "Invalid email: {x}",
    "e.all": "All subscribers ({n})",
    "e.clr": "Clear",
    "e.cnt": "Recipients: {n}",
    "e.subj": "Subject",
    "e.body": "Message",
    "e.send": "Send",
    "e.sent": "Sent: {n}",
    "e.failed": "Failed: {list}",
    "e.confirm": "Send this email ({n})?",
    "e.hint": "An unsubscribe link is added to every email automatically.",
    "e.subs": "Subscribers ({n})",
    "e.subAdd": "Add",
    "e.subPh": "name@example.com",
    "e.subNone": "No subscribers yet. The form on your site should send the email to POST /api/subscribe.",
    "e.subAdded": "Subscriber added",
    "e.subDel": "Remove this subscriber?",
  },
  pl: {
    "login.sub": "Zaloguj się, aby zarządzać portfolio.",
    "login.email": "E-mail",
    "login.pw": "Hasło",
    "login.btn": "Zaloguj",
    "nav.dash": "Pulpit",
    "nav.projects": "Projekty",
    "nav.skills": "Umiejętności",
    "nav.messages": "Wiadomości",
    "nav.settings": "Ustawienia",
    "nav.email": "Poczta",
    "nav.out": "Wyloguj",
    "pk.lang": "Język",
    "pk.theme": "Motyw",
    "err.session": "Sesja wygasła",
    "err.req": "Błąd żądania",
    "dash.latest": "Ostatnie wiadomości",
    "dash.unread": "Nieprzeczytane",
    "msg.none": "Brak wiadomości. Pojawią się tutaj, gdy ktoś użyje formularza kontaktowego.",
    "p.fromLink": "Dodaj z linku",
    "p.linkPh": "https://my-project.onrender.com lub link do GitHuba",
    "p.fetch": "Pobierz dane",
    "p.hint": "Tytuł, opis, obraz i języki uzupełniają się automatycznie. Przed zapisem wszystko można zmienić.",
    "p.details": "Dane projektu",
    "p.title": "Tytuł",
    "p.cat": "Kategoria",
    "p.catPh": "Aplikacja www, Bot, Gra…",
    "p.live": "Strona (Render)",
    "p.demo": "Link do dema",
    "p.code": "Kod (GitHub)",
    "p.langs": "Języki i technologie (po przecinku)",
    "p.date": "Data",
    "p.order": "Kolejność",
    "p.desc": "Opis",
    "p.tr": "Przetłumacz na drugi język",
    "p.img": "Obraz",
    "p.imgPh": "URL obrazu lub wgraj plik",
    "p.choose": "Wybierz plik",
    "p.noFile": "Nie wybrano pliku",
    "p.save": "Zapisz projekt",
    "p.clear": "Wyczyść formularz",
    "p.yours": "Twoje projekty",
    "p.none": "Brak projektów. Wklej link powyżej, aby dodać pierwszy.",
    "p.editing": "Edycja: {x}",
    "p.loaded": "Dane pobrane",
    "p.translated": "Przetłumaczono. Sprawdź wynik w zakładkach",
    "p.uploaded": "Obraz wgrany",
    "p.enterTitle": "Wpisz tytuł projektu",
    "p.saved": "Projekt zapisany",
    "p.confirm": "Usunąć ten projekt?",
    "p.deleted": "Projekt usunięty",
    "btn.edit": "Edytuj",
    "btn.del": "Usuń",
    "s.add": "Dodaj umiejętność",
    "s.name": "Nazwa",
    "s.cat": "Kategoria",
    "s.catPh": "Frontend, Backend, Narzędzia…",
    "s.lvl": "Poziom (0–100%)",
    "s.icon": "Ikona (emoji, URL lub plik)",
    "s.since": "Uczę się od",
    "s.save": "Zapisz umiejętność",
    "s.clear": "Wyczyść formularz",
    "s.yours": "Twoje umiejętności",
    "s.none": "Brak umiejętności. Dodaj pierwszą powyżej.",
    "s.meta": "{lvl}% · uczę się {since}",
    "s.enter": "Wpisz nazwę umiejętności",
    "s.saved": "Umiejętność zapisana",
    "s.confirm": "Usunąć tę umiejętność?",
    "s.deleted": "Umiejętność usunięta",
    "s.uploaded": "Ikona wgrana",
    "u.d": "dni",
    "u.y": "l.",
    "u.m": "mies.",
    "m.read": "Oznacz jako przeczytane",
    "m.confirm": "Usunąć tę wiadomość?",
    "set.site": "Strona",
    "set.theme": "Domyślny motyw",
    "set.lang": "Domyślny język",
    "set.langHint": "Zmienia też język tego panelu.",
    "set.ips": "Wykluczone IP",
    "set.ipsHint": "Wizyty z tych IP nie są liczone. Jedno w wierszu.",
    "set.me": "Wyklucz moje IP",
    "set.meDone": "Dodano IP: {ip}",
    "set.notify": "Powiadomienia",
    "set.save": "Zapisz ustawienia",
    "set.saved": "Ustawienia zapisane",
    "tg.token": "Token bota",
    "tg.tokenPh": "Od @BotFather",
    "tg.chat": "ID czatu",
    "tg.chatPh": "Twoje ID czatu",
    "wh.url": "URL webhooka",
    "e.server": "Serwer poczty (nodemailer)",
    "e.ok": "Połączono. Maile wysyłane z {from}",
    "e.no": "Nie skonfigurowano. Dodaj SMTP_HOST, SMTP_USER i SMTP_PASS do .env",
    "e.notify": "Powiadomienie o nowych wiadomościach",
    "e.enable": "Wysyłaj na e-mail",
    "e.to": "Wysyłaj powiadomienia do",
    "e.save": "Zapisz",
    "e.saved": "Zapisano",
    "e.test": "Wyślij test",
    "e.testDone": "Testowy mail wysłano do {to}",
    "e.compose": "Napisz e-mail",
    "e.rcpt": "Odbiorcy (po przecinku, spacji lub w nowych wierszach)",
    "e.rcptPh": "Domyślnie: wszyscy subskrybenci",
    "e.noRcpt": "Dodaj co najmniej jednego odbiorcę",
    "e.bad": "Nieprawidłowy adres: {x}",
    "e.all": "Wszyscy subskrybenci ({n})",
    "e.clr": "Wyczyść",
    "e.cnt": "Odbiorców: {n}",
    "e.subj": "Temat",
    "e.body": "Treść",
    "e.send": "Wyślij",
    "e.sent": "Wysłano: {n}",
    "e.failed": "Nie udało się: {list}",
    "e.confirm": "Wysłać tego maila ({n})?",
    "e.hint": "Link do wypisania jest dodawany do każdego maila automatycznie.",
    "e.subs": "Subskrybenci ({n})",
    "e.subAdd": "Dodaj",
    "e.subPh": "name@example.com",
    "e.subNone": "Brak subskrybentów. Formularz na stronie powinien wysyłać e-mail na POST /api/subscribe.",
    "e.subAdded": "Subskrybent dodany",
    "e.subDel": "Usunąć tego subskrybenta?",
  },
  de: {
    "login.sub": "Melde dich an, um dein Portfolio zu verwalten.",
    "login.email": "E-Mail",
    "login.pw": "Passwort",
    "login.btn": "Anmelden",
    "nav.dash": "Übersicht",
    "nav.projects": "Projekte",
    "nav.skills": "Skills",
    "nav.messages": "Nachrichten",
    "nav.settings": "Einstellungen",
    "nav.email": "E-Mail",
    "nav.out": "Abmelden",
    "pk.lang": "Sprache",
    "pk.theme": "Design",
    "err.session": "Sitzung abgelaufen",
    "err.req": "Anfrage fehlgeschlagen",
    "dash.latest": "Neueste Nachrichten",
    "dash.unread": "Ungelesen",
    "msg.none": "Noch keine Nachrichten. Sie erscheinen hier, sobald jemand das Kontaktformular nutzt.",
    "p.fromLink": "Per Link hinzufügen",
    "p.linkPh": "https://my-project.onrender.com oder GitHub-URL",
    "p.fetch": "Daten abrufen",
    "p.hint": "Titel, Beschreibung, Bild und Sprachen werden automatisch ausgefüllt. Vor dem Speichern kannst du alles ändern.",
    "p.details": "Projektdetails",
    "p.title": "Titel",
    "p.cat": "Kategorie",
    "p.catPh": "Web-App, Bot, Spiel…",
    "p.live": "Live-Seite (Render)",
    "p.demo": "Demo-Link",
    "p.code": "Code (GitHub)",
    "p.langs": "Sprachen und Technik (kommagetrennt)",
    "p.date": "Datum",
    "p.order": "Reihenfolge",
    "p.desc": "Beschreibung",
    "p.tr": "In die andere Sprache übersetzen",
    "p.img": "Bild",
    "p.imgPh": "Bild-URL oder Datei hochladen",
    "p.choose": "Datei wählen",
    "p.noFile": "Keine Datei gewählt",
    "p.save": "Projekt speichern",
    "p.clear": "Formular leeren",
    "p.yours": "Deine Projekte",
    "p.none": "Noch keine Projekte. Füge oben einen Link ein, um das erste hinzuzufügen.",
    "p.editing": "Bearbeiten: {x}",
    "p.loaded": "Daten geladen",
    "p.translated": "Übersetzt. Prüfe das Ergebnis in den Tabs",
    "p.uploaded": "Bild hochgeladen",
    "p.enterTitle": "Projekttitel eingeben",
    "p.saved": "Projekt gespeichert",
    "p.confirm": "Dieses Projekt löschen?",
    "p.deleted": "Projekt gelöscht",
    "btn.edit": "Bearbeiten",
    "btn.del": "Löschen",
    "s.add": "Skill hinzufügen",
    "s.name": "Name",
    "s.cat": "Kategorie",
    "s.catPh": "Frontend, Backend, Tools…",
    "s.lvl": "Level (0–100%)",
    "s.icon": "Icon (Emoji, URL oder Datei)",
    "s.since": "Lerne seit",
    "s.save": "Skill speichern",
    "s.clear": "Formular leeren",
    "s.yours": "Deine Skills",
    "s.none": "Noch keine Skills. Füge oben den ersten hinzu.",
    "s.meta": "{lvl}% · lerne seit {since}",
    "s.enter": "Skill-Namen eingeben",
    "s.saved": "Skill gespeichert",
    "s.confirm": "Diesen Skill löschen?",
    "s.deleted": "Skill gelöscht",
    "s.uploaded": "Icon hochgeladen",
    "u.d": "Tage",
    "u.y": "J.",
    "u.m": "Mon.",
    "m.read": "Als gelesen markieren",
    "m.confirm": "Diese Nachricht löschen?",
    "set.site": "Website",
    "set.theme": "Standard-Design",
    "set.lang": "Standardsprache",
    "set.langHint": "Ändert auch die Sprache dieses Admin-Bereichs.",
    "set.ips": "Ausgeschlossene IPs",
    "set.ipsHint": "Besuche von diesen IPs werden nicht gezählt. Eine pro Zeile.",
    "set.me": "Meine IP ausschließen",
    "set.meDone": "IP hinzugefügt: {ip}",
    "set.notify": "Benachrichtigungen",
    "set.save": "Einstellungen speichern",
    "set.saved": "Einstellungen gespeichert",
    "tg.token": "Bot-Token",
    "tg.tokenPh": "Von @BotFather",
    "tg.chat": "Chat-ID",
    "tg.chatPh": "Deine Chat-ID",
    "wh.url": "Webhook-URL",
    "e.server": "Mailserver (nodemailer)",
    "e.ok": "Verbunden. E-Mails werden von {from} gesendet",
    "e.no": "Nicht konfiguriert. Füge SMTP_HOST, SMTP_USER und SMTP_PASS in .env hinzu",
    "e.notify": "Benachrichtigung bei neuen Nachrichten",
    "e.enable": "Per E-Mail senden",
    "e.to": "Benachrichtigungen senden an",
    "e.save": "Speichern",
    "e.saved": "Gespeichert",
    "e.test": "Test-Mail senden",
    "e.testDone": "Test-Mail gesendet an {to}",
    "e.compose": "E-Mail schreiben",
    "e.rcpt": "Empfänger (getrennt durch Komma, Leerzeichen oder Zeilenumbruch)",
    "e.rcptPh": "Standard: alle Abonnenten",
    "e.noRcpt": "Füge mindestens einen Empfänger hinzu",
    "e.bad": "Ungültige Adresse: {x}",
    "e.all": "Alle Abonnenten ({n})",
    "e.clr": "Leeren",
    "e.cnt": "Empfänger: {n}",
    "e.subj": "Betreff",
    "e.body": "Nachricht",
    "e.send": "Senden",
    "e.sent": "Gesendet: {n}",
    "e.failed": "Fehlgeschlagen: {list}",
    "e.confirm": "Diese E-Mail senden ({n})?",
    "e.hint": "Ein Abmelde-Link wird jeder E-Mail automatisch hinzugefügt.",
    "e.subs": "Abonnenten ({n})",
    "e.subAdd": "Hinzufügen",
    "e.subPh": "name@example.com",
    "e.subNone": "Noch keine Abonnenten. Das Formular deiner Seite soll die E-Mail an POST /api/subscribe senden.",
    "e.subAdded": "Abonnent hinzugefügt",
    "e.subDel": "Diesen Abonnenten entfernen?",
  },
  zh: {
    "login.sub": "登录以管理你的作品集。",
    "login.email": "邮箱",
    "login.pw": "密码",
    "login.btn": "登录",
    "nav.dash": "仪表盘",
    "nav.projects": "项目",
    "nav.skills": "技能",
    "nav.messages": "消息",
    "nav.settings": "设置",
    "nav.email": "邮件",
    "nav.out": "退出登录",
    "pk.lang": "语言",
    "pk.theme": "主题",
    "err.session": "会话已过期",
    "err.req": "请求失败",
    "dash.latest": "最新消息",
    "dash.unread": "未读",
    "msg.none": "暂无消息。有人使用联系表单后会显示在这里。",
    "p.fromLink": "通过链接添加",
    "p.linkPh": "https://my-project.onrender.com 或 GitHub 链接",
    "p.fetch": "获取信息",
    "p.hint": "标题、描述、图片和语言会自动填写。保存前可以修改所有内容。",
    "p.details": "项目详情",
    "p.title": "标题",
    "p.cat": "分类",
    "p.catPh": "网页应用、机器人、游戏…",
    "p.live": "线上网站 (Render)",
    "p.demo": "演示链接",
    "p.code": "代码 (GitHub)",
    "p.langs": "语言与技术（逗号分隔）",
    "p.date": "日期",
    "p.order": "排序",
    "p.desc": "描述",
    "p.tr": "翻译成另一种语言",
    "p.img": "图片",
    "p.imgPh": "图片链接，或上传文件",
    "p.choose": "选择文件",
    "p.noFile": "未选择文件",
    "p.save": "保存项目",
    "p.clear": "清空表单",
    "p.yours": "你的项目",
    "p.none": "还没有项目。在上方粘贴链接来添加第一个。",
    "p.editing": "正在编辑：{x}",
    "p.loaded": "信息已加载",
    "p.translated": "已翻译。请在各标签页检查结果",
    "p.uploaded": "图片已上传",
    "p.enterTitle": "请输入项目标题",
    "p.saved": "项目已保存",
    "p.confirm": "删除这个项目？",
    "p.deleted": "项目已删除",
    "btn.edit": "编辑",
    "btn.del": "删除",
    "s.add": "添加技能",
    "s.name": "名称",
    "s.cat": "分类",
    "s.catPh": "前端、后端、工具…",
    "s.lvl": "水平 (0–100%)",
    "s.icon": "图标（表情、链接或文件）",
    "s.since": "学习起始",
    "s.save": "保存技能",
    "s.clear": "清空表单",
    "s.yours": "你的技能",
    "s.none": "还没有技能。在上方添加第一个。",
    "s.meta": "{lvl}% · 已学习 {since}",
    "s.enter": "请输入技能名称",
    "s.saved": "技能已保存",
    "s.confirm": "删除这个技能？",
    "s.deleted": "技能已删除",
    "s.uploaded": "图标已上传",
    "u.d": "天",
    "u.y": "年",
    "u.m": "个月",
    "m.read": "标为已读",
    "m.confirm": "删除这条消息？",
    "set.site": "网站",
    "set.theme": "默认主题",
    "set.lang": "默认语言",
    "set.langHint": "同时会切换此后台的语言。",
    "set.ips": "排除的 IP",
    "set.ipsHint": "来自这些 IP 的访问不会被统计。每行一个。",
    "set.me": "排除我的 IP",
    "set.meDone": "已添加 IP：{ip}",
    "set.notify": "通知",
    "set.save": "保存设置",
    "set.saved": "设置已保存",
    "tg.token": "机器人令牌",
    "tg.tokenPh": "来自 @BotFather",
    "tg.chat": "聊天 ID",
    "tg.chatPh": "你的聊天 ID",
    "wh.url": "Webhook 地址",
    "e.server": "邮件服务器 (nodemailer)",
    "e.ok": "已连接。邮件将从 {from} 发送",
    "e.no": "未配置。请在 .env 中添加 SMTP_HOST、SMTP_USER 和 SMTP_PASS",
    "e.notify": "新消息通知",
    "e.enable": "发送到邮箱",
    "e.to": "通知发送至",
    "e.save": "保存",
    "e.saved": "已保存",
    "e.test": "发送测试邮件",
    "e.testDone": "测试邮件已发送至 {to}",
    "e.compose": "写邮件",
    "e.rcpt": "收件人（用逗号、空格或换行分隔）",
    "e.rcptPh": "默认：所有订阅者",
    "e.noRcpt": "请至少添加一位收件人",
    "e.bad": "邮箱地址无效：{x}",
    "e.all": "所有订阅者 ({n})",
    "e.clr": "清空",
    "e.cnt": "收件人：{n}",
    "e.subj": "主题",
    "e.body": "内容",
    "e.send": "发送",
    "e.sent": "已发送：{n}",
    "e.failed": "失败：{list}",
    "e.confirm": "发送这封邮件（{n}）？",
    "e.hint": "每封邮件都会自动附带退订链接。",
    "e.subs": "订阅者 ({n})",
    "e.subAdd": "添加",
    "e.subPh": "name@example.com",
    "e.subNone": "还没有订阅者。你网站的表单应把邮箱提交到 POST /api/subscribe。",
    "e.subAdded": "订阅者已添加",
    "e.subDel": "移除这位订阅者？",
  },
  ja: {
    "login.sub": "ログインしてポートフォリオを管理します。",
    "login.email": "メールアドレス",
    "login.pw": "パスワード",
    "login.btn": "ログイン",
    "nav.dash": "ダッシュボード",
    "nav.projects": "プロジェクト",
    "nav.skills": "スキル",
    "nav.messages": "メッセージ",
    "nav.settings": "設定",
    "nav.email": "メール",
    "nav.out": "ログアウト",
    "pk.lang": "言語",
    "pk.theme": "テーマ",
    "err.session": "セッションの期限が切れました",
    "err.req": "リクエストに失敗しました",
    "dash.latest": "最新のメッセージ",
    "dash.unread": "未読",
    "msg.none": "メッセージはまだありません。問い合わせフォームが使われるとここに表示されます。",
    "p.fromLink": "リンクから追加",
    "p.linkPh": "https://my-project.onrender.com または GitHub の URL",
    "p.fetch": "情報を取得",
    "p.hint": "タイトル、説明、画像、言語は自動で入力されます。保存前にすべて編集できます。",
    "p.details": "プロジェクトの詳細",
    "p.title": "タイトル",
    "p.cat": "カテゴリ",
    "p.catPh": "Webアプリ、Bot、ゲーム…",
    "p.live": "公開サイト (Render)",
    "p.demo": "デモのリンク",
    "p.code": "コード (GitHub)",
    "p.langs": "言語と技術（カンマ区切り）",
    "p.date": "日付",
    "p.order": "順序",
    "p.desc": "説明",
    "p.tr": "もう一方の言語に翻訳",
    "p.img": "画像",
    "p.imgPh": "画像の URL、またはファイルをアップロード",
    "p.choose": "ファイルを選択",
    "p.noFile": "ファイル未選択",
    "p.save": "プロジェクトを保存",
    "p.clear": "フォームをクリア",
    "p.yours": "あなたのプロジェクト",
    "p.none": "プロジェクトはまだありません。上にリンクを貼って最初の1件を追加しましょう。",
    "p.editing": "編集中：{x}",
    "p.loaded": "情報を読み込みました",
    "p.translated": "翻訳しました。各タブで結果を確認してください",
    "p.uploaded": "画像をアップロードしました",
    "p.enterTitle": "プロジェクト名を入力してください",
    "p.saved": "プロジェクトを保存しました",
    "p.confirm": "このプロジェクトを削除しますか？",
    "p.deleted": "プロジェクトを削除しました",
    "btn.edit": "編集",
    "btn.del": "削除",
    "s.add": "スキルを追加",
    "s.name": "名前",
    "s.cat": "カテゴリ",
    "s.catPh": "フロントエンド、バックエンド、ツール…",
    "s.lvl": "レベル (0–100%)",
    "s.icon": "アイコン（絵文字、URL、ファイル）",
    "s.since": "学習開始日",
    "s.save": "スキルを保存",
    "s.clear": "フォームをクリア",
    "s.yours": "あなたのスキル",
    "s.none": "スキルはまだありません。上から最初の1件を追加しましょう。",
    "s.meta": "{lvl}% · 学習期間 {since}",
    "s.enter": "スキル名を入力してください",
    "s.saved": "スキルを保存しました",
    "s.confirm": "このスキルを削除しますか？",
    "s.deleted": "スキルを削除しました",
    "s.uploaded": "アイコンをアップロードしました",
    "u.d": "日",
    "u.y": "年",
    "u.m": "か月",
    "m.read": "既読にする",
    "m.confirm": "このメッセージを削除しますか？",
    "set.site": "サイト",
    "set.theme": "デフォルトのテーマ",
    "set.lang": "デフォルトの言語",
    "set.langHint": "この管理画面の言語も切り替わります。",
    "set.ips": "除外する IP",
    "set.ipsHint": "これらの IP からの訪問はカウントされません。1行に1つ。",
    "set.me": "自分の IP を除外",
    "set.meDone": "IP を追加しました：{ip}",
    "set.notify": "通知",
    "set.save": "設定を保存",
    "set.saved": "設定を保存しました",
    "tg.token": "Bot トークン",
    "tg.tokenPh": "@BotFather から取得",
    "tg.chat": "チャット ID",
    "tg.chatPh": "あなたのチャット ID",
    "wh.url": "Webhook URL",
    "e.server": "メールサーバー (nodemailer)",
    "e.ok": "接続済み。送信元は {from} です",
    "e.no": "未設定です。.env に SMTP_HOST、SMTP_USER、SMTP_PASS を追加してください",
    "e.notify": "新着メッセージの通知",
    "e.enable": "メールで送信",
    "e.to": "通知の送信先",
    "e.save": "保存",
    "e.saved": "保存しました",
    "e.test": "テストメールを送信",
    "e.testDone": "{to} にテストメールを送信しました",
    "e.compose": "メールを書く",
    "e.rcpt": "宛先（カンマ、スペース、改行区切り）",
    "e.rcptPh": "デフォルト：全購読者",
    "e.noRcpt": "宛先を1件以上追加してください",
    "e.bad": "無効なアドレス：{x}",
    "e.all": "全購読者 ({n})",
    "e.clr": "クリア",
    "e.cnt": "宛先：{n}件",
    "e.subj": "件名",
    "e.body": "本文",
    "e.send": "送信",
    "e.sent": "送信済み：{n}件",
    "e.failed": "失敗：{list}",
    "e.confirm": "このメールを送信しますか？（{n}件）",
    "e.hint": "すべてのメールに配信停止リンクが自動で追加されます。",
    "e.subs": "購読者 ({n})",
    "e.subAdd": "追加",
    "e.subPh": "name@example.com",
    "e.subNone": "購読者はまだいません。サイトのフォームから POST /api/subscribe にメールを送信してください。",
    "e.subAdded": "購読者を追加しました",
    "e.subDel": "この購読者を削除しますか？",
  },
};

/* ---------- basics ---------- */
const $ = (s) => document.querySelector(s),
  esc = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
const UI_LANGS = ["uk", "en", "pl", "de", "zh", "ja"]; // admin interface languages (see i18n.js)
const DESC_LANGS = ["uk", "en"]; // project description languages
const LANG_NAMES = {
  uk: "Українська",
  en: "English",
  pl: "Polski",
  de: "Deutsch",
  zh: "中文",
  ja: "日本語",
};
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
// [background, accent] for the little swatches in the theme menu
const THEME_SW = {
  light: ["#eef0ff", "#5b4be0"],
  dark: ["#070816", "#8b7cff"],
  glass: ["#0a1c2c", "#4cc9f0"],
  neumorphism: ["#e0e5ec", "#6c63ff"],
  neon: ["#05010f", "#ff2bd6"],
  terminal: ["#020a03", "#00ff66"],
  aurora: ["#04121a", "#34d399"],
  brutalism: ["#fff3b0", "#ff4d4d"],
  sunset: ["#1a0b16", "#ff7a45"],
};
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const ls = {
  get: (k) => {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set: (k, v) => {
    try {
      localStorage.setItem(k, v);
    } catch {}
  },
  del: (k) => {
    try {
      localStorage.removeItem(k);
    } catch {}
  },
};
let TOKEN = ls.get("token");
let LANG = UI_LANGS.includes(ls.get("lang")) ? ls.get("lang") : "uk";

const t = (k, v) =>
  String(I18N[LANG]?.[k] ?? I18N.en[k] ?? k).replace(
    /\{(\w+)\}/g,
    (_, x) => v?.[x] ?? "",
  );

async function api(p, o = {}) {
  const h = {};
  if (TOKEN) h.Authorization = "Bearer " + TOKEN;
  let b = o.body;
  if (b && !(b instanceof FormData)) {
    h["Content-Type"] = "application/json";
    b = JSON.stringify(b);
  }
  const r = await fetch("/api" + p, {
    method: o.method || "GET",
    headers: h,
    body: b,
  });
  const d = await r.json().catch(() => ({}));
  if (r.status === 401 && p !== "/auth/login") {
    logout();
    throw Error(t("err.session"));
  }
  if (!r.ok) throw Error(d.message || t("err.req"));
  return d;
}
function toast(m, e) {
  const el = $("#toast");
  el.textContent = m;
  el.className = "show" + (e ? " err" : "");
  clearTimeout(el._t);
  el._t = setTimeout(() => (el.className = ""), 3200);
}
const run = (fn) => fn().catch((e) => toast(e.message, 1));
const fdate = (d) => (d ? new Date(d).toLocaleString(LANG) : "");

/* ---------- theme + language ---------- */
const curTheme = () => document.documentElement.dataset.theme;
function paintPickers() {
  $("#lg-v").textContent = LANG_NAMES[LANG];
  $("#th-v").textContent = cap(curTheme());
}
function applyStatic() {
  document.documentElement.lang = LANG;
  document
    .querySelectorAll("[data-i18n]")
    .forEach((e) => (e.textContent = t(e.dataset.i18n)));
  paintPickers();
}
function applyTheme(th, persist) {
  if (!THEMES.includes(th)) return;
  document.documentElement.dataset.theme = th;
  if (persist) ls.set("theme", th);
  paintPickers();
}
function setLang(l, rerender = true) {
  if (!UI_LANGS.includes(l)) return;
  LANG = l;
  ls.set("lang", l);
  applyStatic();
  if (rerender && $("#app").style.display === "block") go(curView);
}

// floating menu used by the language / theme buttons in the sidebar
const pm = document.createElement("div");
pm.id = "pmenu";
pm.setAttribute("role", "listbox");
document.body.append(pm);
let pmFor = null;
function closeMenu() {
  pm.classList.remove("open");
  pmFor = null;
}
function openMenu(btn, items, cur, pick) {
  if (pmFor === btn) return closeMenu();
  pm.innerHTML = "";
  items.forEach((it) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pm-o" + (it.v === cur ? " on" : "");
    b.setAttribute("role", "option");
    b.innerHTML =
      (it.sw
        ? `<i class="pm-sw" style="background:linear-gradient(135deg,${it.sw[0]} 50%,${it.sw[1]} 50%)"></i>`
        : "") + `<span>${esc(it.label)}</span>`;
    b.onclick = () => {
      closeMenu();
      pick(it.v);
      btn.focus();
    };
    pm.append(b);
  });
  const r = btn.getBoundingClientRect();
  pm.style.minWidth = Math.max(r.width, 190) + "px";
  pm.classList.add("open");
  const h = pm.offsetHeight,
    w = pm.offsetWidth,
    up = r.top > h + 16 || r.top > innerHeight - r.bottom;
  pm.style.left = Math.max(8, Math.min(r.left, innerWidth - w - 8)) + "px";
  pm.style.top =
    (up
      ? Math.max(8, r.top - h - 6)
      : Math.min(r.bottom + 6, innerHeight - h - 8)) + "px";
  pmFor = btn;
}
$("#lg-b").onclick = () =>
  openMenu(
    $("#lg-b"),
    UI_LANGS.map((l) => ({ v: l, label: LANG_NAMES[l] })),
    LANG,
    (l) => setLang(l),
  );
$("#th-b").onclick = () =>
  openMenu(
    $("#th-b"),
    THEMES.map((x) => ({ v: x, label: cap(x), sw: THEME_SW[x] })),
    curTheme(),
    (x) => applyTheme(x, true),
  );

/* ---------- custom <select> ---------- */
function closeSelects(except) {
  document
    .querySelectorAll(".sel.open")
    .forEach((x) => x !== except && x.classList.remove("open"));
}
function fancySelect(sel) {
  const w = document.createElement("div"),
    b = document.createElement("button"),
    l = document.createElement("div");
  w.className = "sel";
  b.type = "button";
  b.className = "sel-b";
  b.setAttribute("aria-haspopup", "listbox");
  l.className = "sel-l";
  l.setAttribute("role", "listbox");
  sel.parentNode.insertBefore(w, sel);
  sel.classList.add("sel-n");
  w.append(sel, b, l);
  const paint = () => {
    b.textContent = sel.options[sel.selectedIndex]?.text || "";
    [...l.children].forEach((o) =>
      o.classList.toggle("on", o.dataset.v === sel.value),
    );
  };
  [...sel.options].forEach((o) => {
    const i = document.createElement("button");
    i.type = "button";
    i.className = "sel-o";
    i.dataset.v = o.value;
    i.textContent = o.text;
    i.setAttribute("role", "option");
    i.onclick = () => {
      sel.value = o.value;
      sel.dispatchEvent(new Event("change"));
      paint();
      w.classList.remove("open");
      b.focus();
    };
    l.append(i);
  });
  b.onclick = () => {
    closeSelects(w);
    w.classList.toggle("open");
  };
  paint();
}
document.addEventListener("click", (e) => {
  document
    .querySelectorAll(".sel.open")
    .forEach((x) => !x.contains(e.target) && x.classList.remove("open"));
  if (pmFor && !pm.contains(e.target) && !pmFor.contains(e.target)) closeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSelects();
    closeMenu();
  }
});
addEventListener("resize", closeMenu);

/* ---------- auth + routing ---------- */
function showApp() {
  $("#login").style.display = "none";
  $("#app").style.display = "block";
  api("/settings")
    .then((s) => {
      // the choice made in the sidebar wins; otherwise use the defaults from Settings
      if (!ls.get("theme")) applyTheme(s.defaultTheme);
      if (!ls.get("lang") && s.defaultLang !== LANG) setLang(s.defaultLang);
    })
    .catch(() => {});
  go(location.hash.slice(1) || "dash");
}
function logout() {
  TOKEN = null;
  ls.del("token");
  $("#app").style.display = "none";
  $("#login").style.display = "grid";
}
$("#lcard").onsubmit = (e) => {
  e.preventDefault();
  run(async () => {
    const d = await api("/auth/login", {
      method: "POST",
      body: { email: $("#em").value, password: $("#pw").value },
    });
    TOKEN = d.token;
    ls.set("token", TOKEN);
    showApp();
  });
};
$("#lo").onclick = logout;
document
  .querySelectorAll(".nav[data-v]")
  .forEach((b) => (b.onclick = () => go(b.dataset.v)));
let curView = "dash";
function go(v) {
  if (!views[v]) v = "dash";
  curView = v;
  location.hash = v;
  document
    .querySelectorAll(".nav[data-v]")
    .forEach((b) => b.classList.toggle("on", b.dataset.v === v));
  run(() => views[v]($("#view")));
}
function badge(list) {
  const u = list.filter((m) => !m.read).length,
    tag = $("#unread");
  tag.style.display = u ? "inline-block" : "none";
  tag.textContent = u;
  return u;
}
async function uploadImage(file) {
  const f = new FormData();
  f.append("image", file);
  return (await api("/images", { method: "POST", body: f })).url;
}

/* ---------- dashboard ---------- */
async function dash(el) {
  const [p, s, m] = await Promise.all([
    api("/projects"),
    api("/skills"),
    api("/messages"),
  ]);
  const u = badge(m);
  el.innerHTML = `<h1>${t("nav.dash")}</h1>
  <div class="cards">${[
    [t("nav.projects"), p.length],
    [t("nav.skills"), s.length],
    [t("nav.messages"), m.length],
    [t("dash.unread"), u],
  ]
    .map(
      ([l, v]) =>
        `<div class="stat glass"><b>${v}</b><span>${esc(l)}</span></div>`,
    )
    .join("")}</div>
  <div class="panel glass"><h3>${t("dash.latest")}</h3>${
    m.length
      ? m
          .slice(0, 5)
          .map(
            (x) =>
              `<div class="item" style="${x.read ? "opacity:.6" : ""}"><div class="t"><b>${esc(x.name)}</b> <span class="tag">${esc(x.email)}</span><small>${esc(x.text)}</small></div><small style="color:var(--mut)">${fdate(x.createdAt)}</small></div>`,
          )
          .join("")
      : `<div class="empty">${t("msg.none")}</div>`
  }</div>`;
}

/* ---------- projects ---------- */
let editing = null,
  desc = {},
  curLang = "uk";
async function projects(el) {
  const list = await api("/projects");
  editing = null;
  desc = {};
  curLang = "uk";
  el.innerHTML = `<h1>${t("nav.projects")}</h1>
  <div class="panel glass"><h3>${t("p.fromLink")}</h3>
    <div class="row"><input id="p-link" placeholder="${esc(t("p.linkPh"))}"><button class="btn pri" id="p-fetch">${t("p.fetch")}</button></div>
    <p style="color:var(--mut);font-size:13px;margin-top:8px">${t("p.hint")}</p></div>
  <div class="panel glass"><h3 id="p-head">${t("p.details")}</h3>
    <div class="grid2"><div><label>${t("p.title")}</label><input id="p-title"></div><div><label>${t("p.cat")}</label><input id="p-cat" placeholder="${esc(t("p.catPh"))}"></div>
    <div><label>${t("p.live")}</label><input id="p-url"></div><div><label>${t("p.demo")}</label><input id="p-demo"></div>
    <div><label>${t("p.code")}</label><input id="p-code"></div><div><label>${t("p.langs")}</label><input id="p-langs" placeholder="JavaScript, Node.js, MongoDB"></div>
    <div><label>${t("p.date")}</label><input id="p-date" type="date"></div><div><label>${t("p.order")}</label><input id="p-order" type="number" value="0"></div></div>
    <label>${t("p.desc")}</label><div class="tabs" id="p-tabs">${DESC_LANGS.map((l) => `<button type="button" data-l="${l}">${l.toUpperCase()}</button>`).join("")}</div>
    <textarea id="p-desc"></textarea>
    <div class="row" style="margin-top:8px"><button class="btn" id="p-tr" type="button">${t("p.tr")}</button></div>
    <label>${t("p.img")}</label><div class="row"><input id="p-img" placeholder="${esc(t("p.imgPh"))}"><div class="file"><input type="file" id="p-file" accept="image/*"><label class="btn" for="p-file" style="margin:0;color:var(--tx);font-size:inherit">${t("p.choose")}</label><span id="p-fn">${t("p.noFile")}</span></div></div>
    <div class="row" style="margin-top:18px"><button class="btn pri" id="p-save">${t("p.save")}</button><button class="btn" id="p-reset">${t("p.clear")}</button></div></div>
  <div class="panel glass"><h3>${t("p.yours")} (${list.length})</h3>${list.length ? list.map((p) => `<div class="item"><img src="${esc(p.image)}" alt="" onerror="this.style.visibility='hidden'"><div class="t"><b>${esc(p.title)}</b><small>${esc(p.url || p.code)}</small>${(p.languages || []).map((l) => `<span class="tag">${esc(l)}</span>`).join("")}</div><button class="btn" data-e="${p._id}">${t("btn.edit")}</button><button class="btn del" data-d="${p._id}">${t("btn.del")}</button></div>`).join("") : `<div class="empty">${t("p.none")}</div>`}</div>`;
  const tabs = () => {
    document
      .querySelectorAll("#p-tabs button")
      .forEach((b) => b.classList.toggle("on", b.dataset.l === curLang));
    $("#p-desc").value = desc[curLang] || "";
  };
  tabs();
  $("#p-tabs").onclick = (e) => {
    const l = e.target.dataset.l;
    if (!l) return;
    desc[curLang] = $("#p-desc").value;
    curLang = l;
    tabs();
  };
  $("#p-fetch").onclick = () =>
    run(async () => {
      const m = await api("/projects/fetch-meta", {
        method: "POST",
        body: { url: $("#p-link").value },
      });
      $("#p-url").value = $("#p-link").value;
      $("#p-title").value = m.title || "";
      desc.uk = m.description || "";
      curLang = "uk";
      tabs();
      $("#p-img").value = m.image || "";
      $("#p-langs").value = (m.languages || []).join(", ");
      if (m.code) $("#p-code").value = m.code;
      toast(t("p.loaded"));
    });
  $("#p-tr").onclick = () =>
    run(async () => {
      desc[curLang] = $("#p-desc").value;
      const tr = await api("/translate", {
        method: "POST",
        body: { text: desc[curLang], from: curLang },
      });
      Object.assign(desc, tr, { [curLang]: desc[curLang] });
      tabs();
      toast(t("p.translated"));
    });
  $("#p-file").onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    $("#p-fn").textContent = file.name;
    run(async () => {
      $("#p-img").value = await uploadImage(file);
      toast(t("p.uploaded"));
    });
  };
  $("#p-save").onclick = () =>
    run(async () => {
      desc[curLang] = $("#p-desc").value;
      const b = {
        title: $("#p-title").value,
        category: $("#p-cat").value,
        url: $("#p-url").value,
        demo: $("#p-demo").value,
        code: $("#p-code").value,
        languages: $("#p-langs")
          .value.split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        date: $("#p-date").value || null,
        order: +$("#p-order").value || 0,
        description: { uk: desc.uk || "", en: desc.en || "" },
        image: $("#p-img").value,
      };
      if (!b.title) throw Error(t("p.enterTitle"));
      await api("/projects" + (editing ? "/" + editing : ""), {
        method: editing ? "PUT" : "POST",
        body: b,
      });
      toast(t("p.saved"));
      projects(el);
    });
  $("#p-reset").onclick = () => projects(el);
  el.querySelectorAll("[data-e]").forEach(
    (b) =>
      (b.onclick = () => {
        const p = list.find((x) => x._id === b.dataset.e);
        editing = p._id;
        desc = { uk: p.description?.uk || "", en: p.description?.en || "" };
        curLang = "uk";
        $("#p-head").textContent = t("p.editing", { x: p.title });
        $("#p-title").value = p.title || "";
        $("#p-cat").value = p.category || "";
        $("#p-url").value = p.url || "";
        $("#p-demo").value = p.demo || "";
        $("#p-code").value = p.code || "";
        $("#p-langs").value = (p.languages || []).join(", ");
        $("#p-date").value = (p.date || "").slice(0, 10);
        $("#p-order").value = p.order || 0;
        $("#p-img").value = p.image || "";
        tabs();
        scrollTo({ top: 0, behavior: "smooth" });
      }),
  );
  el.querySelectorAll("[data-d]").forEach(
    (b) =>
      (b.onclick = () =>
        confirm(t("p.confirm")) &&
        run(async () => {
          await api("/projects/" + b.dataset.d, { method: "DELETE" });
          toast(t("p.deleted"));
          projects(el);
        })),
  );
}

/* ---------- skills ---------- */
function since(d) {
  if (!d) return "";
  const days = Math.floor((Date.now() - new Date(d)) / 864e5),
    y = Math.floor(days / 365),
    m = Math.floor((days % 365) / 30);
  return (
    `${days} ${t("u.d")}` +
    (y || m ? ` (${y ? y + t("u.y") + " " : ""}${m}${t("u.m")})` : "")
  );
}
const isImg = (s) => /^(https?:\/\/|\/api\/images\/)/.test(s || "");
const iconHtml = (s, px = 36) =>
  isImg(s)
    ? `<img src="${esc(s)}" alt="" style="width:${px}px;height:${px}px;object-fit:contain">`
    : esc(s);
let skEdit = null;
async function skills(el) {
  const list = await api("/skills");
  skEdit = null;
  el.innerHTML = `<h1>${t("nav.skills")}</h1>
  <div class="panel glass"><h3 id="s-head">${t("s.add")}</h3><div class="grid2">
    <div><label for="s-name">${t("s.name")}</label><input id="s-name"></div><div><label for="s-cat">${t("s.cat")}</label><input id="s-cat" placeholder="${esc(t("s.catPh"))}"></div>
    <div><label for="s-lvl">${t("s.lvl")}</label><input id="s-lvl" type="number" min="0" max="100" value="50"></div>
    <div><label>${t("s.icon")}</label><div class="row"><span class="ico-prev" id="s-prev"></span><input type="hidden" id="s-icon"><div class="file"><input type="file" id="s-file" accept="image/*"><label class="btn" for="s-file" style="margin:0;color:var(--tx);font-size:inherit">${t("p.choose")}</label></div></div></div>
    <div><label for="s-since">${t("s.since")}</label><input id="s-since" type="date"></div></div>
    <div class="row" style="margin-top:18px"><button class="btn pri" id="s-save">${t("s.save")}</button><button class="btn" id="s-reset">${t("s.clear")}</button></div></div>
  <div class="panel glass"><h3>${t("s.yours")} (${list.length})</h3>${list.length ? list.map((s) => `<div class="item"><span style="font-size:28px;width:48px;text-align:center;flex:0 0 48px">${iconHtml(s.icon)}</span><div class="t"><b>${esc(s.name)}</b> <span class="tag">${esc(s.category)}</span><small>${t("s.meta", { lvl: s.level, since: esc(since(s.startedAt)) })}</small></div><button class="btn" data-e="${s._id}">${t("btn.edit")}</button><button class="btn del" data-d="${s._id}">${t("btn.del")}</button></div>`).join("") : `<div class="empty">${t("s.none")}</div>`}</div>`;
  const prev = () => ($("#s-prev").innerHTML = iconHtml($("#s-icon").value, 28));
  prev();
  $("#s-file").onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    run(async () => {
      $("#s-icon").value = await uploadImage(file);
      prev();
      toast(t("s.uploaded"));
    });
  };
  $("#s-save").onclick = () =>
    run(async () => {
      const b = {
        name: $("#s-name").value,
        category: $("#s-cat").value,
        level: +$("#s-lvl").value,
        icon: $("#s-icon").value,
        startedAt: $("#s-since").value || null,
      };
      if (!b.name) throw Error(t("s.enter"));
      await api("/skills" + (skEdit ? "/" + skEdit : ""), {
        method: skEdit ? "PUT" : "POST",
        body: b,
      });
      toast(t("s.saved"));
      skills(el);
    });
  $("#s-reset").onclick = () => skills(el);
  el.querySelectorAll("[data-e]").forEach(
    (b) =>
      (b.onclick = () => {
        const s = list.find((x) => x._id === b.dataset.e);
        skEdit = s._id;
        $("#s-head").textContent = t("p.editing", { x: s.name });
        $("#s-name").value = s.name;
        $("#s-cat").value = s.category || "";
        $("#s-lvl").value = s.level;
        $("#s-icon").value = s.icon || "";
        $("#s-since").value = (s.startedAt || "").slice(0, 10);
        prev();
        scrollTo({ top: 0, behavior: "smooth" });
      }),
  );
  el.querySelectorAll("[data-d]").forEach(
    (b) =>
      (b.onclick = () =>
        confirm(t("s.confirm")) &&
        run(async () => {
          await api("/skills/" + b.dataset.d, { method: "DELETE" });
          toast(t("s.deleted"));
          skills(el);
        })),
  );
}

/* ---------- messages ---------- */
async function messages(el) {
  const list = await api("/messages");
  badge(list);
  el.innerHTML = `<h1>${t("nav.messages")}</h1><div class="panel glass">${list.length ? list.map((m) => `<div class="item" style="align-items:flex-start;${m.read ? "opacity:.6" : ""}"><div class="t" style="white-space:normal"><b>${esc(m.name)}</b> <a href="mailto:${esc(m.email)}" style="color:var(--ac2)">${esc(m.email)}</a><small>${fdate(m.createdAt)}</small><p style="margin-top:6px">${esc(m.text)}</p></div>${m.read ? "" : `<button class="btn" data-r="${m._id}">${t("m.read")}</button>`}<button class="btn del" data-d="${m._id}">${t("btn.del")}</button></div>`).join("") : `<div class="empty">${t("msg.none")}</div>`}</div>`;
  el.querySelectorAll("[data-r]").forEach(
    (b) =>
      (b.onclick = () =>
        run(async () => {
          await api("/messages/" + b.dataset.r, { method: "PATCH" });
          messages(el);
        })),
  );
  el.querySelectorAll("[data-d]").forEach(
    (b) =>
      (b.onclick = () =>
        confirm(t("m.confirm")) &&
        run(async () => {
          await api("/messages/" + b.dataset.d, { method: "DELETE" });
          messages(el);
        })),
  );
}

/* ---------- email (nodemailer + subscribers) ---------- */
let mailDraft = null; // keeps the letter if you switch tab or language
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const parseList = (v) => [
  ...new Set(
    v
      .split(/[\s,;]+/)
      .map((x) => x.trim().toLowerCase())
      .filter(Boolean),
  ),
];
async function email(el) {
  const [st, subs, s] = await Promise.all([
    api("/mail/status"),
    api("/subscribers"),
    api("/settings"),
  ]);
  const n = s.notify?.email || {},
    all = subs.map((x) => x.email);
  const d = (mailDraft ||= { to: all.join(", "), sub: "", body: "" });
  el.innerHTML = `<h1>${t("nav.email")}</h1>
  <div class="panel glass"><h3>${t("e.server")}</h3><p class="note ${st.configured ? "good" : "bad"}">${st.configured ? t("e.ok", { from: esc(st.from) }) : t("e.no")}</p></div>

  <div class="panel glass"><h3>${t("e.compose")}</h3>
    <label for="m-to">${t("e.rcpt")}</label>
    <textarea id="m-to" spellcheck="false" placeholder="${esc(t("e.rcptPh"))}">${esc(d.to)}</textarea>
    <div class="row" style="margin-top:8px"><button class="btn" id="m-all" type="button">${t("e.all", { n: all.length })}</button><button class="btn" id="m-clr" type="button">${t("e.clr")}</button><span class="note" id="m-cnt" style="margin:0;text-align:right"></span></div>
    <label for="m-sub">${t("e.subj")}</label><input id="m-sub" maxlength="200" value="${esc(d.sub)}">
    <label for="m-body">${t("e.body")}</label><textarea id="m-body" style="min-height:190px">${esc(d.body)}</textarea>
    <p class="note">${t("e.hint")}</p>
    <div class="row" style="margin-top:14px"><button class="btn pri" id="m-send" type="button">${t("e.send")}</button></div></div>

  <div class="panel glass"><h3>${t("e.subs", { n: subs.length })}</h3>
    <div class="row"><input id="sb-email" type="email" placeholder="${esc(t("e.subPh"))}"><button class="btn pri" id="sb-add" type="button">${t("e.subAdd")}</button></div>
    ${subs.length ? subs.map((x) => `<div class="item"><div class="t"><b>${esc(x.email)}</b><small>${fdate(x.createdAt)}</small></div><button class="btn del" data-d="${x._id}">${t("btn.del")}</button></div>`).join("") : `<div class="empty">${t("e.subNone")}</div>`}</div>

  <div class="panel glass"><h3>${t("e.notify")}</h3>
    <div class="sw" style="margin:0 0 6px"><input type="checkbox" id="en-on" ${n.enabled ? "checked" : ""}><label for="en-on" style="margin:0;color:var(--tx);font-weight:700;cursor:pointer">${t("e.enable")}</label></div>
    <label for="en-to">${t("e.to")}</label><input id="en-to" placeholder="you@example.com" value="${esc(n.to)}">
    <div class="row" style="margin-top:14px"><button class="btn pri" id="en-save" type="button">${t("e.save")}</button><button class="btn" id="en-test" type="button">${t("e.test")}</button></div></div>`;

  const count = () => ($("#m-cnt").textContent = t("e.cnt", { n: parseList($("#m-to").value).length }));
  const keep = () => {
    d.to = $("#m-to").value;
    d.sub = $("#m-sub").value;
    d.body = $("#m-body").value;
  };
  ["#m-to", "#m-sub", "#m-body"].forEach((q) => ($(q).oninput = () => (keep(), count())));
  count();
  $("#m-all").onclick = () => {
    $("#m-to").value = all.join(", ");
    keep();
    count();
  };
  $("#m-clr").onclick = () => {
    $("#m-to").value = "";
    keep();
    count();
  };
  $("#m-send").onclick = () =>
    run(async () => {
      keep();
      const list = parseList(d.to);
      if (!list.length) throw Error(t("e.noRcpt"));
      const bad = list.find((x) => !EMAIL_RE.test(x));
      if (bad) throw Error(t("e.bad", { x: bad }));
      if (!confirm(t("e.confirm", { n: list.length }))) return;
      const b = $("#m-send");
      b.disabled = true;
      try {
        const r = await api("/mail/send", {
          method: "POST",
          body: { recipients: list, subject: d.sub, text: d.body },
        });
        if (r.failed.length)
          toast(
            t("e.sent", { n: r.sent }) +
              " · " +
              t("e.failed", { list: r.failed.slice(0, 3).join(", ") }),
            1,
          );
        else toast(t("e.sent", { n: r.sent }));
        if (!r.failed.length) {
          d.sub = "";
          d.body = "";
          $("#m-sub").value = "";
          $("#m-body").value = "";
        }
      } finally {
        b.disabled = false;
      }
    });
  $("#sb-add").onclick = () =>
    run(async () => {
      await api("/subscribers", {
        method: "POST",
        body: { email: $("#sb-email").value },
      });
      toast(t("e.subAdded"));
      email(el);
    });
  el.querySelectorAll("[data-d]").forEach(
    (b) =>
      (b.onclick = () =>
        confirm(t("e.subDel")) &&
        run(async () => {
          await api("/subscribers/" + b.dataset.d, { method: "DELETE" });
          email(el);
        })),
  );
  const notifyBody = () => ({
    notify: { email: { enabled: $("#en-on").checked, to: $("#en-to").value.trim() } },
  });
  $("#en-save").onclick = () =>
    run(async () => {
      await api("/settings", { method: "PUT", body: notifyBody() });
      toast(t("e.saved"));
    });
  $("#en-test").onclick = () =>
    run(async () => {
      const r = await api("/mail/test", {
        method: "POST",
        body: { to: $("#en-to").value },
      });
      toast(t("e.testDone", { to: r.to }));
    });
}

const views = { dash, projects, skills, messages, email };

/* ---------- start ---------- */
if (ls.get("theme")) applyTheme(ls.get("theme"));
else applyTheme("dark");
applyStatic();
if (TOKEN) showApp();