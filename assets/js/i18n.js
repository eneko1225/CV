'use strict';

// English lives in index.html; this file only holds the Spanish version.
// Every element with data-i18n="key" gets swapped when the language changes.

const translations = {
  es: {
    skip_link: "Saltar al contenido",
    headline: "Project Manager y desarrollador backend",
    show_contacts: "Ver contactos",
    contact_email: "Correo",
    contact_phone: "Teléfono",
    contact_birthday: "Fecha de nacimiento",
    contact_location: "Ubicación",
    location: "Bilbao, Bizkaia, España",

    nav_about: "Sobre mí",
    nav_resume: "Currículum",

    about_title: "Sobre mí",
    about_p1: "Tenía cinco años cuando me senté por primera vez delante de un ordenador y empecé a teclear comandos de MS-DOS. Las clases extraescolares de robótica mantuvieron viva esa curiosidad y, cuando escribí mis primeras líneas de código en el instituto, supe que era a lo que quería dedicarme. Así llegué al grado superior de Desarrollo de Aplicaciones Multiplataforma y, desde entonces, no he dejado de construir software.",
    about_p2: "En estos años he trabajado en todo el stack: webs para Metro Bilbao y el Museo de Bellas Artes de Bilbao, APIs para agencias y sus clientes, y tres años desarrollando servicios de datos y cloud en AWS en BBVA Technology. Por el camino completé una especialización en Big Data e Inteligencia Artificial.",
    about_p3: "Hoy soy Project Manager en INDALTER, donde lidero una plataforma SaaS de audio para retail desde la definición del producto hasta el despliegue. Disfruto haciendo de puente entre negocio e ingeniería: entender qué necesita el cliente, convertirlo en un plan claro y asegurarme de que el equipo lo entrega bien.",

    services_title: "A qué me dedico",
    service1_title: "Gestión de producto y proyectos",
    service1_text: "Defino la visión del producto y el roadmap, priorizo junto a negocio y clientes, y acompaño cada versión desde el análisis y el diseño hasta el desarrollo, QA y despliegue.",
    service2_title: "Desarrollo backend",
    service2_text: "Construyo APIs y servicios fiables en Python (Django, Flask, Celery), Rust y PHP sobre PostgreSQL, MySQL, MongoDB y Redis, con tests, principios SOLID y código limpio.",
    service3_title: "Cloud y datos en AWS",
    service3_text: "Diseño pipelines de datos y servicios serverless en AWS (SageMaker, S3, Lambda, Step Functions, EventBridge, CloudWatch), definidos como código con Terraform.",
    service4_title: "DevOps y CI/CD",
    service4_text: "Empaqueto aplicaciones con Docker y automatizo la compilación, los tests y el despliegue con pipelines de CI/CD, para que cada versión sea rápida, repetible y segura.",

    resume_title: "Currículum",
    experience_title: "Experiencia",
    education_title: "Formación",

    exp1_date: "06/2026 — Actualidad",
    exp1_text: "Lidero una <strong>plataforma SaaS de audio para retail</strong>: un único panel desde el que las cadenas de tiendas deciden qué suena en cada establecimiento, desde la música ambiental hasta las campañas publicitarias y los avisos. Me encargo del producto y el roadmap, fijo prioridades con negocio y clientes, dirijo cada versión desde el análisis hasta el despliegue e incorporo nuevos clientes e integraciones.<br/><br/>Lo más destacado de lo que hemos construido: un motor que programa cada día la música y los anuncios de cada tienda, un reproductor web y móvil que sigue sonando sin conexión y emite a altavoces <strong>AirPlay y Chromecast</strong>, un asistente de soporte con IA basado en <strong>Google Gemini</strong> dentro de la app y en WhatsApp, la ingesta del catálogo musical con el estándar <strong>DDEX</strong>, y facturación con <strong>Stripe</strong> con permisos por roles, informes de derechos de autor y analítica.<br/><br/>Stack: <strong>Python, Django, Celery, PostgreSQL, Redis, React, TypeScript, Docker, AWS, CI/CD</strong>.",

    exp2_title: "Desarrollador backend - <span class='company' translate='no'>BBVA Technology</span>",
    exp2_text: "Desarrollé servicios backend y de datos en <strong>Amazon Web Services</strong> (SageMaker, S3, Lambda, Step Functions, EventBridge, CloudWatch), con la infraestructura gestionada en <strong>Terraform</strong>. En el día a día trabajaba con <strong>Python, Rust, Bash y JavaScript</strong>, Flask, Pandas y Docker, sobre <strong>PostgreSQL, MySQL y MongoDB</strong>.<br/><br/>Más allá del código: análisis de datos, mucho foco en testing, patrones de diseño, SOLID y código limpio, investigar y compartir nuevas tecnologías con el equipo, y ayudar a los nuevos compañeros a arrancar.",

    exp3_title: "Desarrollador backend - <span class='company' translate='no'>Zorraquino</span>",
    exp3_text: "Desarrollé APIs en <strong>PHP y Python</strong>, mantuve pipelines de <strong>CI/CD en GitLab</strong>, <strong>diseñé arquitecturas de datos</strong> y lideré migraciones de versión, tanto para clientes como Kutxabank y ALC como para los productos propios de la agencia.",

    exp4_title: "Desarrollador full stack - <span class='company' translate='no'>Jamenet</span>",
    exp4_text: "Mantuve y evolucioné la web de <strong>Metro Bilbao</strong>, con un front end en <strong>Next.js</strong> y un back end en <strong>Drupal / Symfony</strong>, trabajando con <strong>Jira y Git</strong>. También desarrollé proyectos web para pequeñas y medianas empresas.",

    exp5_title: "Desarrollador full stack - <span class='company' translate='no'>NUUK Mobility Solutions</span>",
    exp5_text: "Desarrollé, mantuve y mejoré los productos internos de la empresa, entre ellos una app de geolocalización de motos y un middleware de integración, con <strong>Node.js, Laravel, Django, Vue.js, MySQL y Docker</strong>.",

    exp6_title: "Desarrollador full stack - <span class='company' translate='no'>Interaktell</span>",
    exp6_text: "Desarrollador y jefe de proyecto de los Itinerarios Online del <strong>Museo de Bellas Artes de Bilbao</strong>, construidos con <strong>React, Django y MySQL</strong> durante mi contrato de formación.",

    edu1_title: "Máster en Big Data e Inteligencia Artificial",
    edu1_text: "<strong>Machine learning:</strong> algoritmos supervisados y no supervisados y redes neuronales, en Google Colab con <strong>TensorFlow, Pandas, NumPy, Matplotlib y scikit-learn</strong>, además de la plataforma BigML.<br/><br/><strong>Big Data:</strong> procesamiento distribuido con <strong>Hadoop, Hive y Spark (PySpark)</strong>, NoSQL con <strong>MongoDB</strong> y visualización de datos en <strong>Power BI</strong>, usando Python, <strong>Scala y R</strong>.<br/><br/><strong>IA en la nube:</strong> experiencia práctica con <strong>Google Cloud (Vertex AI, Vision AI), AWS (Rekognition, Textract), IBM Cloud y Microsoft Azure</strong>.",

    edu2_title: "Grado superior en Desarrollo de Aplicaciones Multiplataforma (impartido en inglés)",
    edu2_text: "Programa de dos años impartido íntegramente en inglés, centrado en crear aplicaciones de escritorio, web y móviles con <strong>Java (Hibernate), C++, MySQL, HTML, CSS y XML</strong>."
  }
};

const i18nElements = document.querySelectorAll("[data-i18n]");
const langOptions = document.querySelectorAll("[data-lang-option]");
const englishText = new Map();
const i18nDates = document.querySelectorAll("time[data-i18n-date]");

i18nElements.forEach(function (elem) { englishText.set(elem, elem.innerHTML); });

const setLanguage = function (lang) {
  const dict = translations[lang] || {};

  i18nElements.forEach(function (elem) {
    const key = elem.dataset.i18n;
    elem.innerHTML = dict[key] !== undefined ? dict[key] : englishText.get(elem);
  });

  // dates come from their datetime attribute, formatted for the language
  i18nDates.forEach(function (elem) {
    const date = new Date(elem.getAttribute("datetime") + "T00:00:00Z");
    elem.textContent = new Intl.DateTimeFormat(lang, { dateStyle: "long", timeZone: "UTC" }).format(date);
  });

  document.documentElement.lang = lang;
  langOptions.forEach(function (btn) {
    const isActive = btn.dataset.langOption === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }
};

const getInitialLanguage = function () {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "es" || fromUrl === "en") return fromUrl;

  try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (e) { /* storage unavailable */ }

  return "es";
};

langOptions.forEach(function (btn) {
  btn.addEventListener("click", function () {
    setLanguage(btn.dataset.langOption);

    // keep ?lang= in sync so the address can be shared; the #page hash stays
    const url = new URL(window.location.href);
    url.searchParams.set("lang", btn.dataset.langOption);
    history.replaceState(null, "", url);
  });
});

setLanguage(getInitialLanguage());
