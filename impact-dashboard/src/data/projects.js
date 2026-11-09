// One object per project. Every module on the page renders from these fields;
// a missing (null / empty) field hides its module. Content comes from Selenia's
// own copy and her published portfolio.
//
// LANGUAGES
// - Any text is either plain (same in both languages) or { en, es }.
//
// RULES
// - Only confirmed facts. Never invent, estimate or infer a metric.
// - summary ≤ 140 characters.
// - A number appears once: deliveryTime lives in the snapshot, scale metrics in
//   Scale, the headline outcome in Result.
// - phases: real phases only. Periods written as "Month 1" / "Months 2–5" (or
//   "Mes 1" / "Meses 2–5") are drawn to scale; otherwise phases are evenly spaced.
//   `live: true` marks the phase that reached production (the final LIVE point).
// - scaleMetrics: 2–4 real numbers, each { value, label, context?, source?, n?, kind? }.
//   context says what the number means ("across 17 countries"); source says how and
//   who measured it — only when confirmed. n/kind feed the catalog lists.
// - built.flow: steps as plain text ({ en: [...], es: [...] }) or as
//   [{ icon, title, text }] for a richer "How it works". engines: [{ name, logo }].
// - decisions: [{ decision, why }] key technical decisions — only from Selenia's own words.
// - beforeAfter: { before: { title, items }, after: { title, items } } what was replaced
//   and what replaced it, from confirmed facts only.
// - architecture: true draws `technology` as a diagram (frontend → backend → database,
//   plus integrations) instead of the collapsed list — only where she built both sides.
// - deliveryDays: time to production in days, only to draw the speed chart.
// - impact: business results with a chart. { savings: { total, label, parts: [{ value, label, icon }],
//   estimated, note },
//   improvements: [{ label, value (0–100), display, note }] }. Missing = hidden.
// - ?audit shows `pending` numbers and the `toConfirm` checklist.
// - screenshots: [{ src, alt }] real screenshots only, in /public/shots. The first one is
//   the catalog thumbnail and the header image; more become a small gallery.
//   logo: a brand logo for the catalog card when there is no screenshot yet.
// - status: { label, live } one honest state (Live, Prototype…); null = no chip.
// - liveSite: { href, label } the real product, opened from the header. Only links that
//   were checked to open publicly.
// - result: { value?, headline, description, metrics, link } the one main result.
// - phases items: { name, period ("M1", "M2–5"), tags (2–3 words), live }.

export const GROUPS = [
  { id: "systems", label: { en: "Business systems", es: "Sistemas de negocio" } },
  { id: "team", label: { en: "Team products", es: "Productos en equipo" } },
  { id: "own", label: { en: "Own products", es: "Productos propios" } },
  { id: "clients", label: { en: "Client projects", es: "Proyectos para clientes" } },
];

const E2E = { en: "End-to-end", es: "De punta a punta" };
const PRODUCT_FULLSTACK = { en: "Product + Full-stack", es: "Producto + Full-stack" };

export const PROJECTS = [
  {
    // AuraDash and DRP are the same system: one entry (old ?project=drp links land here).
    id: "auradash",
    screenshots: [{ src: "shots/auradash.jpg", thumb: "shots/thumbs/auradash.jpg", alt: { en: "AuraDash home dashboard", es: "Panel principal de AuraDash" } }],
    liveSite: { href: "https://auradash.digital/", label: "auradash.digital" },
    group: "systems",
    featured: true,
    name: "AuraDash",
    monogram: "AUR",
    tone: "orange",
    category: { en: "ERP & CRM for Service Businesses", es: "ERP y CRM para negocios de servicios" },
    summary: {
      en: "ERP/CRM for service businesses like salons: appointments, clients, payments, team, inventory and operations.",
      es: "ERP/CRM para negocios de servicios como salones: citas, clientes, pagos, equipo, inventario y operación.",
    },

    scope: E2E,
    role: PRODUCT_FULLSTACK,
    status: { label: { en: "Live", es: "En vivo" }, live: true },
    deliveryTime: { en: "7 months", es: "7 meses" },
    deliveryDays: 210,

    problem: {
      en: "Service businesses ran appointments, clients, payments and inventory across separate tools or by hand. Generic software didn't fit their operation.",
      es: "Los negocios de servicios llevaban citas, clientes, pagos e inventario en herramientas separadas o a mano. El software genérico no encajaba con su operación.",
    },

    built: {
      summary: {
        en: "A subscription SaaS that runs the daily operation of service businesses like salons.",
        es: "Un SaaS por suscripción que lleva la operación diaria de negocios de servicios como salones.",
      },
      items: {
        en: [
          "Scheduling & public booking",
          "Client CRM",
          "Professionals & services",
          "Commissions & payroll",
          "Finance & cash register",
          "FIFO inventory",
          "Multi-location",
          "Dashboards & business metrics",
          "Forms & reports",
          "Roles & permissions",
          "Payments",
          "AI workflows",
          "Google Sheets & WhatsApp sync",
        ],
        es: [
          "Agenda y reservas públicas",
          "CRM de clientes",
          "Profesionales y servicios",
          "Comisiones y nómina",
          "Finanzas y caja",
          "Inventario FIFO",
          "Multi-sucursal",
          "Dashboards y métricas de negocio",
          "Formularios y reportes",
          "Roles y permisos",
          "Pagos",
          "Flujos con IA",
          "Sincronización con Google Sheets y WhatsApp",
        ],
      },
      flow: [],
    },

    scaleMetrics: [
      {
        value: "20",
        label: { en: "Initial users", es: "Usuarios iniciales" },
        context: { en: "their feedback shaped each iteration", es: "su feedback guió cada iteración" },
        n: 20,
        kind: "users",
      },
      {
        value: "8",
        label: { en: "Core product modules", es: "Módulos principales" },
        context: { en: "from scheduling to inventory", es: "de la agenda al inventario" },
      },
      {
        value: "70+",
        label: { en: "Role permissions", es: "Permisos por rol" },
      },
    ],

    phases: {
      title: { en: "From scope to production", es: "Del alcance a producción" },
      items: [
        {
          name: { en: "Discovery & Scope", es: "Descubrimiento y alcance" },
          period: "M1",
          tags: { en: ["Discovery", "Scope", "Requirements"], es: ["Descubrimiento", "Alcance", "Requerimientos"] },
        },
        {
          name: { en: "Build & Iteration", es: "Construcción e iteración" },
          period: "M2–5",
          tags: { en: ["Architecture", "Development", "Iteration"], es: ["Arquitectura", "Desarrollo", "Iteración"] },
        },
        {
          name: { en: "Testing & Validation", es: "Pruebas y validación" },
          period: "M6",
          tags: { en: ["QA", "User testing"], es: ["QA", "Pruebas con usuarios"] },
        },
        {
          name: { en: "Production", es: "Producción" },
          period: "M7",
          tags: { en: ["Launch", "Real users"], es: ["Lanzamiento", "Usuarios reales"] },
          live: true,
        },
      ],
      ongoingWork: { en: "Ongoing evolution", es: "Evolución continua" },
    },

    ownership: {
      product: {
        en: ["Discovery", "Features & scope", "Product decisions", "User feedback"],
        es: ["Descubrimiento", "Funcionalidades y alcance", "Decisiones de producto", "Feedback de usuarios"],
      },
      engineering: {
        en: ["Architecture", "React frontend", "Node backend", "Prisma / PostgreSQL", "Integrations"],
        es: ["Arquitectura", "Frontend en React", "Backend en Node", "Prisma / PostgreSQL", "Integraciones"],
      },
      delivery: {
        en: ["Testing", "Deployment to production", "Onboarding", "Iteration"],
        es: ["Pruebas", "Despliegue a producción", "Onboarding", "Iteración"],
      },
    },

    result: {
      headline: {
        en: "From high-touch onboarding to a lighter support process",
        es: "De un onboarding muy acompañado a un soporte más liviano",
      },
      description: {
        en: "A simple error/question form sends each request straight to email, keeping a direct line to real problems.",
        es: "Un formulario simple de errores y preguntas envía cada solicitud directo al email, con una línea directa a los problemas reales.",
      },
      metrics: [],
      link: null,
    },


    architecture: true,
    technology: {
      frontend: ["React", "Vite"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL", "Prisma"],
      integrations: ["Stripe", "MercadoPago", "SMTP email", "Google Sheets API", "WhatsApp Web"],
    },

    pending: ["Support reduction (exact %)", "Current active users", "Processes automated", "Hours saved / month"],
    toConfirm: [
      "Merged with DRP: is AuraDash the right public name, or should it read DRP?",
      "Status: Live (auradash.digital) or in evolution / testing with users?",
      "What exactly the 20 initial users were, and how many are still active",
      "Update the portfolio: it says you led the frontend; your role is Product + Full-stack",
    ],
  },
  {
    id: "sistask",
    screenshots: [{ src: "shots/sistask.jpg", thumb: "shots/thumbs/sistask.jpg", alt: { en: "Sistask projects dashboard", es: "Panel de proyectos de Sistask" } }],
    group: "team",
    featured: true,
    name: "Sistask",
    monogram: "SIS",
    tone: "black",
    category: { en: "Enterprise Workflow System · Sistran", es: "Sistema de workflows empresarial · Sistran" },
    summary: {
      en: "Workflow and ticket platform that replaced Jira at Sistran for distributed teams across Latin America.",
      es: "Plataforma de workflows y tickets que reemplazó a Jira en Sistran para equipos distribuidos en Latinoamérica.",
    },

    scope: "Frontend",
    role: { en: "Sole frontend developer · in a team", es: "Única desarrolladora frontend · en equipo" },
    status: { label: { en: "Shipped to production", es: "Llevado a producción" } },
    deliveryTime: null,
    period: "2022 – 2025",
    tenure: {
      from: 2022,
      to: 2025,
      label: { en: "At Sistran", es: "En Sistran" },
      highlight: { fromYear: 2, label: { en: "AI to optimize tasks, from year 2", es: "IA para optimizar tareas, desde el 2.º año" } },
    },

    problem: {
      en: "Teams across 17 countries needed one place to centralize and standardize their work and processes.",
      es: "Equipos en 17 países necesitaban un solo lugar para centralizar y estandarizar su trabajo y sus procesos.",
    },

    built: {
      summary: {
        en: "The frontend of one platform for tickets, tasks, hours and statuses, adaptable by country and role.",
        es: "El frontend de una plataforma para tickets, tareas, horas y estados, adaptable por país y rol.",
      },
      items: {
        en: [
          "Ticket & task management",
          "Configurable workflows",
          "Workflow visualization",
          "Drag-and-drop boards",
          "Regional KPI dashboards",
          "Role-based permissions",
          "SLA alerts",
        ],
        es: [
          "Gestión de tickets y tareas",
          "Workflows configurables",
          "Visualización de workflows",
          "Tableros drag-and-drop",
          "Dashboards de KPIs regionales",
          "Permisos por rol",
          "Alertas de SLA",
        ],
      },
      flow: [],
    },

    scaleMetrics: [
      {
        value: "820+",
        label: { en: "Internal users", es: "Usuarios internos" },
        context: { en: "across 17 countries", es: "en 17 países" },
        n: 820,
        kind: "users",
      },
      {
        value: "100%",
        label: { en: "Internal adoption", es: "Adopción interna" },
        context: { en: "it replaced Jira at Sistran", es: "reemplazó a Jira en Sistran" },
      },
    ],

    phases: null,

    ownership: {
      product: { en: ["Requirements into product", "UX & UI"], es: ["Requerimientos a producto", "UX y UI"] },
      engineering: {
        en: ["Frontend architecture", "Components & UI logic", "Backend integration"],
        es: ["Arquitectura frontend", "Componentes y lógica de UI", "Integración con backend"],
      },
      delivery: {
        en: ["Implementation", "Testing & fixes", "Frontend evolution", "AI to optimize tasks (from year 2)"],
        es: ["Implementación", "Pruebas y correcciones", "Evolución del frontend", "IA para optimizar tareas (desde el 2.º año)"],
      },
    },

    result: {
      headline: {
        en: "From an internal multi-country tool to a product for 100+ clients",
        es: "De herramienta interna multi-país a producto para 100+ clientes",
      },
      description: {
        en: "Built multi-tenant so it could scale beyond Sistran.",
        es: "Construida multi-tenant para escalar más allá de Sistran.",
      },
      metrics: [],
      link: null,
    },

    beforeAfter: {
      before: {
        title: "Jira",
        items: {
          en: ["External tool", "Paid license per client", "Dependency on an outside provider", "Work and processes spread across 17 countries"],
          es: ["Herramienta externa", "Licencia paga por cliente", "Dependencia de un proveedor externo", "Trabajo y procesos dispersos en 17 países"],
        },
      },
      after: {
        title: "Sistask",
        items: {
          en: ["Own platform at Sistran", "No license cost per client", "Full control of the system", "Configurable workflows", "Adaptable by country and role"],
          es: ["Plataforma propia en Sistran", "Sin costo de licencia por cliente", "Control total del sistema", "Workflows configurables", "Adaptable por país y rol"],
        },
      },
    },

    impact: {
      savings: {
        total: "$300K+",
        label: { en: "License cost potentially avoided", es: "Costo en licencias potencialmente evitado" },
        estimated: true,
        parts: [
          { value: "100+", icon: "clients", label: { en: "Enterprise clients", es: "Clientes empresariales" } },
          {
            value: "~$3,000",
            icon: "license",
            label: { en: "Reference Jira license per client*", es: "Licencia de Jira de referencia por cliente*" },
          },
        ],
        compareTitle: { en: "Jira license cost", es: "Costo en licencias de Jira" },
        compare: [
          { label: { en: "With Jira", es: "Con Jira" }, value: "$300K+", share: 1, estimated: true },
          { label: { en: "With Sistask", es: "Con Sistask" }, value: "$0", share: 0 },
        ],
        note: {
          en: "Comparative estimate based on Jira's cost per client. Not an audited financial saving.",
          es: "Estimación comparativa basada en el costo de Jira por cliente. No representa un ahorro financiero auditado.",
        },
      },
    },

    technology: {
      frontend: ["React", "MUI", "Bootstrap", "Axios", "ReactFlow", "Cytoscape", "React Beautiful DnD"],
    },

    pending: [],
    toConfirm: [
      "Users: the portfolio says 820+, your notes say 800+. Which one?",
      "$300K+ is shown as an estimate (~$3,000 of Jira per client × 100+ clients, from your portfolio). Confirm the basis",
      "100+ clients in 2 months: confirm the 2 months",
      "Is Sistask still in use?",
    ],
  },
  {
    id: "scalabl",
    logo: "shots/scalabl-logo.png",
    screenshots: [],
    liveSite: { href: "https://www.scalabl.com", label: "scalabl.com" },
    group: "team",
    featured: false,
    name: "Scalabl",
    monogram: "SCL",
    tone: "orange",
    category: { en: "EdTech Platform", es: "Plataforma EdTech" },
    summary: {
      en: "Business learning platform where professionals watch video courses, join sessions and track progress.",
      es: "Plataforma de aprendizaje de negocios donde profesionales ven cursos en video, se unen a sesiones y siguen su progreso.",
    },

    scope: "Frontend",
    role: { en: "Frontend developer", es: "Desarrolladora frontend" },
    status: { label: { en: "Shipped to production", es: "Llevado a producción" } },
    deliveryTime: null,
    period: { en: "Jan – Jul 2022", es: "Ene – Jul 2022" },

    problem: {
      en: "Friction in navigation and video playback was getting in the way of finishing courses.",
      es: "La fricción en la navegación y en la reproducción de video dificultaba terminar los cursos.",
    },

    built: {
      summary: {
        en: "A new content experience inside the existing platform.",
        es: "Una nueva experiencia de contenido dentro de la plataforma existente.",
      },
      items: {
        en: ["Video playback", "Real-time progress tracking", "Content consumption flow", "Navigation"],
        es: ["Reproducción de video", "Seguimiento de progreso en tiempo real", "Flujo de consumo de contenido", "Navegación"],
      },
      flow: [],
    },

    scaleMetrics: [
      {
        value: "2,500+",
        label: { en: "Professionals on the platform", es: "Profesionales en la plataforma" },
        context: { en: "across 50+ countries", es: "en 50+ países" },
        n: 2500,
        kind: "users",
      },
    ],

    phases: null,

    ownership: {
      product: { en: ["UX decisions", "Accessibility with UX/UI"], es: ["Decisiones de UX", "Accesibilidad con UX/UI"] },
      engineering: {
        en: ["Frontend refactor", "Backend integration", "Performance"],
        es: ["Refactor del frontend", "Integración con backend", "Rendimiento"],
      },
      delivery: [],
    },

    result: {
      value: "+35%",
      headline: { en: "Course completion rate", es: "Tasa de finalización de cursos" },
      description: {
        en: "The new video player and progress tracking increased course completion.",
        es: "El nuevo reproductor de video y el seguimiento de progreso aumentaron la finalización de cursos.",
      },
      metrics: [],
      link: null,
    },

    impact: {
      improvements: [
        {
          label: { en: "Course completion rate", es: "Tasa de finalización de cursos" },
          value: 35,
          display: "+35%",
          note: {
            en: "More courses completed after the new video player and progress tracking",
            es: "Más cursos completados tras el nuevo reproductor de video y el seguimiento de progreso",
          },
        },
        {
          label: { en: "Navigation issues on the platform", es: "Problemas de navegación en la plataforma" },
          value: 30,
          display: "−30%",
          note: {
            en: "Fewer issues after the frontend refactor and the navigation and accessibility work with UX/UI",
            es: "Menos problemas tras el refactor del frontend y las mejoras de navegación y accesibilidad con UX/UI",
          },
        },
      ],
    },

    technology: {
      frontend: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      backend: ["PHP"],
      apis: ["REST APIs"],
    },

    pending: [],
    toConfirm: [
      "What +35% and −30% measure exactly, and who measured them (shown until you say otherwise)",
      "Duration: the portfolio says Jan – Jul 2022; your notes say about 4 months",
      "What you built exactly, and the problem before your work",
      "The portfolio still says the backend was Python; it was PHP",
    ],
  },
  {
    id: "ia-visibility",
    screenshots: [{ src: "shots/ia-visibility.jpg", thumb: "shots/thumbs/ia-visibility.jpg", alt: { en: "AI Visibility audit report", es: "Reporte de auditoría de AI Visibility" } }],
    liveSite: { href: "https://iavisibility.vercel.app", label: "iavisibility.vercel.app" },
    group: "own",
    featured: false,
    name: "AI Visibility",
    monogram: "AIV",
    tone: "peach",
    category: { en: "AI Visibility · Competitive Intelligence", es: "Visibilidad en IA · Inteligencia competitiva" },
    summary: {
      en: "Audits how AI engines like ChatGPT, Gemini and Perplexity present, compare and recommend a business.",
      es: "Audita cómo motores de IA como ChatGPT, Gemini y Perplexity presentan, comparan y recomiendan a un negocio.",
    },

    scope: E2E,
    role: PRODUCT_FULLSTACK,
    status: null,
    deliveryTime: null,

    problem: {
      en: "Businesses needed to know whether they showed up when potential buyers searched for what they sell.",
      es: "Los negocios necesitaban saber si aparecían cuando posibles compradores buscaban lo que venden.",
    },

    built: {
      summary: {
        en: "An audit engine that runs real buyer questions through AI engines and turns the answers into a score and reports.",
        es: "Un motor de auditoría que pasa preguntas reales de compradores por motores de IA y convierte las respuestas en un score y reportes.",
      },
      items: {
        en: [
          "Company & competitor onboarding",
          "Buyer question generation",
          "Queries to ChatGPT, Gemini & Perplexity",
          "Mention & citation audit",
          "Competitive analysis",
          "History & charts",
          "SEO / GEO opportunity reports",
          "AI Visibility Score",
        ],
        es: [
          "Onboarding de empresa y competidores",
          "Generación de preguntas de compra",
          "Consultas a ChatGPT, Gemini y Perplexity",
          "Auditoría de menciones y citas",
          "Análisis competitivo",
          "Historial y gráficos",
          "Reportes de oportunidades SEO / GEO",
          "AI Visibility Score",
        ],
      },
      flow: [
        {
          icon: "doc",
          title: { en: "Business", es: "Negocio" },
          text: { en: "Company & competitors", es: "Empresa y competidores" },
        },
        {
          icon: "chat",
          title: { en: "Buyer questions", es: "Preguntas de compra" },
          text: { en: "Real questions from buyers", es: "Preguntas reales de compradores" },
        },
        {
          icon: "spark",
          title: { en: "AI engines", es: "Motores de IA" },
          text: { en: "ChatGPT, Gemini & Perplexity", es: "ChatGPT, Gemini y Perplexity" },
        },
        {
          icon: "analysis",
          title: { en: "Analysis", es: "Análisis" },
          text: { en: "Mentions, sources & competitors", es: "Menciones, fuentes y competidores" },
        },
        {
          icon: "report",
          title: { en: "Report & strategy", es: "Reporte y estrategia" },
          text: { en: "Clear opportunities and next steps", es: "Oportunidades claras y próximos pasos" },
        },
      ],
    },

    // The engines it queries (OpenAI, Gemini and Perplexity APIs). Logos: @lobehub/icons, MIT.
    engines: [
      { name: "ChatGPT", logo: "logos/openai.svg" },
      { name: "Gemini", logo: "logos/gemini.svg" },
      { name: "Perplexity", logo: "logos/perplexity.svg" },
    ],

    scaleMetrics: [
      {
        value: "10",
        label: { en: "Step audit engine", es: "Pasos del motor de auditoría" },
        context: { en: "across ChatGPT, Gemini and Perplexity", es: "en ChatGPT, Gemini y Perplexity" },
      },
    ],

    phases: null,

    ownership: {
      product: {
        en: ["Concept", "Audit methodology", "Questions & metrics", "UX"],
        es: ["Concepto", "Metodología de auditoría", "Preguntas y métricas", "UX"],
      },
      engineering: {
        en: ["Next.js app", "Analysis logic", "AI & search integrations"],
        es: ["App en Next.js", "Lógica de análisis", "Integraciones con IA y búsqueda"],
      },
      delivery: {
        en: ["Tests with real companies", "Iteration", "Reporting"],
        es: ["Pruebas con empresas reales", "Iteración", "Reportes"],
      },
    },

    result: {
      headline: { en: "AI presence turned into business intelligence", es: "Presencia en IA convertida en inteligencia de negocio" },
      description: {
        en: "Turns hard-to-measure presence in AI answers into a clear, actionable strategy.",
        es: "Convierte una presencia difícil de medir dentro de las respuestas de IA en una estrategia clara y accionable.",
      },
      metrics: [],
      link: null,
    },

    technology: {
      frontend: ["Next.js"],
      integrations: ["OpenAI API", "Gemini API", "Perplexity API"],
    },

    pending: ["Audits run", "Clients"],
    toConfirm: [
      "Status: live or prototype? (functional, in active development)",
      "Stack: the portfolio says React + Vite + Python; your notes say Next.js. Which is current?",
      "Database / infrastructure",
      "Public URL or demo",
    ],
  },
  {
    id: "evident",
    screenshots: [{ src: "shots/evident.jpg", thumb: "shots/thumbs/evident.jpg", alt: { en: "Evident weekly content plan", es: "Plan de contenido semanal de Evident" } }],
    group: "own",
    featured: false,
    name: "Evident",
    monogram: "EVD",
    tone: "peach",
    category: { en: "Content Intelligence · Strategy", es: "Inteligencia de contenido · Estrategia" },
    summary: {
      en: "Content strategist that analyzes a business and market conversations to decide what to publish, and why.",
      es: "Estratega de contenido que analiza un negocio y las conversaciones del mercado para decidir qué publicar y por qué.",
    },

    scope: E2E,
    role: PRODUCT_FULLSTACK,
    status: null,
    deliveryTime: null,

    problem: {
      en: "Making content just for the sake of it doesn't make sense.",
      es: "Hacer contenido por hacer contenido no tiene sentido.",
    },

    built: {
      summary: {
        en: "AI with enough context can suggest ideas; Evident gathers and compares the points a business needs to build a marketing strategy for its posts, based on its goals.",
        es: "La IA con mucho contexto puede sugerir ideas; Evident recopila y compara los puntos que un negocio necesita para armar la estrategia de marketing de sus posts, según lo que busca.",
      },
      items: {
        en: [
          "Business & offer analysis",
          "Buyer personas",
          "Market conversation scan",
          "Opportunities tied to revenue goals",
          "Weekly editorial plan",
          "Rationale for every piece",
          "Built to feed PulsePost",
        ],
        es: [
          "Análisis del negocio y la oferta",
          "Buyer personas",
          "Escaneo de conversaciones del mercado",
          "Oportunidades ligadas a objetivos de ingresos",
          "Plan editorial semanal",
          "El porqué de cada pieza",
          "Pensado para alimentar a PulsePost",
        ],
      },
      flow: {
        en: ["Business", "Audience", "Market conversations", "Opportunities", "Strategy", "Content"],
        es: ["Negocio", "Audiencia", "Conversaciones del mercado", "Oportunidades", "Estrategia", "Contenido"],
      },
    },

    scaleMetrics: [],

    phases: null,

    ownership: {
      product: { en: ["Concept", "Methodology", "Strategy"], es: ["Concepto", "Metodología", "Estrategia"] },
      engineering: { en: ["Build"], es: ["Construcción"] },
      delivery: { en: ["Testing & iteration on real content"], es: ["Pruebas e iteración con contenido real"] },
    },

    result: {
      headline: { en: "From random post ideas to a strategy system", es: "De ideas sueltas a un sistema de estrategia" },
      description: {
        en: "Every piece has a reason to exist and a goal it serves.",
        es: "Sabe por qué publicar algo y qué objetivo cumple.",
      },
      metrics: [],
      link: null,
    },

    technology: null,

    pending: [],
    toConfirm: ["Stack for Technical details", "How long it took to build", "Does anyone else use it?"],
  },
  {
    id: "pulsepost",
    screenshots: [{ src: "shots/pulsepost.jpg", thumb: "shots/thumbs/pulsepost.jpg", alt: { en: "PulsePost content calendar", es: "Calendario de contenido de PulsePost" } }],
    liveSite: { href: "https://pulsepost-flame.vercel.app", label: "pulsepost-flame.vercel.app" },
    group: "own",
    featured: false,
    name: "PulsePost",
    monogram: "PLS",
    tone: "peach",
    category: { en: "Content Distribution · Social APIs", es: "Distribución de contenido · APIs sociales" },
    summary: {
      en: "Own publishing infrastructure that posts to LinkedIn, TikTok and YouTube through their official APIs.",
      es: "Infraestructura propia que publica en LinkedIn, TikTok y YouTube a través de sus APIs oficiales.",
    },

    scope: E2E,
    role: PRODUCT_FULLSTACK,
    status: null,
    deliveryTime: { en: "~3 days", es: "~3 días" },
    deliveryDays: 3,

    problem: {
      en: "After an account was compromised, the business couldn't keep handing its credentials and extra token access to third-party publishing tools.",
      es: "Tras el hackeo de una cuenta, el negocio no podía seguir entregando sus credenciales y accesos innecesarios a herramientas de publicación de terceros.",
    },

    built: {
      summary: {
        en: "A secure publishing pipeline on official platform APIs.",
        es: "Un pipeline de publicación seguro sobre las APIs oficiales de cada plataforma.",
      },
      items: {
        en: ["OAuth 2.0 connections", "Encrypted token storage", "Signed CSRF state", "Media upload pipeline", "Connections dashboard"],
        es: ["Conexiones OAuth 2.0", "Almacenamiento cifrado de tokens", "State CSRF firmado", "Pipeline de subida de medios", "Panel de conexiones"],
      },
      flow: {
        en: ["Content", "PulsePost", "OAuth / API layer", "LinkedIn · TikTok · YouTube"],
        es: ["Contenido", "PulsePost", "Capa OAuth / API", "LinkedIn · TikTok · YouTube"],
      },
    },

    scaleMetrics: [
      {
        value: "3",
        label: { en: "Platforms connected", es: "Plataformas conectadas" },
        context: "LinkedIn · TikTok · YouTube",
      },
    ],

    phases: null,

    ownership: {
      product: { en: ["Product definition", "Publishing flow"], es: ["Definición del producto", "Flujo de publicación"] },
      engineering: {
        en: ["Frontend", "Backend", "OAuth & signed CSRF state", "Token encryption", "API integrations"],
        es: ["Frontend", "Backend", "OAuth y state CSRF firmado", "Cifrado de tokens", "Integraciones con APIs"],
      },
      delivery: {
        en: ["Deployment", "OAuth debugging", "Real publishing tests"],
        es: ["Despliegue", "Debugging de OAuth", "Pruebas reales de publicación"],
      },
    },

    result: {
      headline: { en: "Full ownership of access and publishing", es: "Control total del acceso y la publicación" },
      description: {
        en: "No third-party tool holds the credentials: access, encryption and publishing flows stay in-house.",
        es: "Ninguna herramienta de terceros guarda las credenciales: el acceso, el cifrado y la publicación quedan en casa.",
      },
      metrics: [],
      link: null,
    },

    architecture: true,
    technology: {
      frontend: ["React / Next.js"],
      backend: ["Node.js", { en: "AES-256 token encryption", es: "Cifrado de tokens AES-256" }],
      infrastructure: ["Vercel", "Render"],
      apis: ["OAuth 2.0", "LinkedIn API", "TikTok API", "YouTube API"],
    },

    pending: ["Accounts connected", "Posts published"],
    toConfirm: ["Public URL of the frontend", "Framework / backend to show publicly"],
  },
  {
    id: "mas-repuestos",
    screenshots: [{ src: "shots/mas-repuestos.jpg", thumb: "shots/thumbs/mas-repuestos.jpg", alt: { en: "Más Repuestos app screens", es: "Pantallas de la app Más Repuestos" } }],
    liveSite: { href: "https://play.google.com/store/apps/details?id=com.masrepuestos0126.user", label: "Google Play" },
    group: "clients",
    featured: false,
    name: "Más Repuestos",
    monogram: "MRP",
    tone: "orange",
    category: { en: "Mobile Marketplace · Auto Parts", es: "Marketplace móvil · Repuestos" },
    summary: {
      en: "Mobile marketplace to search, compare and buy auto parts, connecting buyers, sellers and drivers.",
      es: "Marketplace móvil para buscar, comparar y comprar repuestos, conectando compradores, vendedores y repartidores.",
    },

    scope: { en: "Mobile app", es: "App móvil" },
    role: { en: "Build + launch", es: "Desarrollo + lanzamiento" },
    status: null,
    deliveryTime: { en: "4 months", es: "4 meses" },
    deliveryDays: 120,

    problem: {
      en: "Buyers had no central place to search and compare auto parts, and sellers lacked visibility.",
      es: "Los compradores no tenían un lugar central para buscar y comparar repuestos, y los vendedores tenían poca visibilidad.",
    },

    built: {
      summary: { en: "A multi-vendor marketplace app for auto parts.", es: "Una app marketplace multi-vendedor de repuestos." },
      items: {
        en: ["Parts search", "Comparison", "Purchase flow", "Delivery coordination", "Buyer, seller & driver roles"],
        es: ["Búsqueda de repuestos", "Comparación", "Flujo de compra", "Coordinación de entregas", "Roles de comprador, vendedor y repartidor"],
      },
      flow: [],
    },

    scaleMetrics: [
      {
        value: "3",
        label: { en: "User types", es: "Tipos de usuario" },
        context: { en: "buyers, sellers and drivers", es: "compradores, vendedores y repartidores" },
      },
    ],

    phases: null,

    ownership: {
      product: [],
      engineering: { en: ["Mobile app", "Firebase backend"], es: ["App móvil", "Backend en Firebase"] },
      delivery: { en: ["Play Store launch"], es: ["Lanzamiento en Play Store"] },
    },

    result: {
      headline: { en: "Marketplace launched on Google Play", es: "Marketplace lanzado en Google Play" },
      description: {
        en: "Buyers, sellers and delivery drivers connected in one app.",
        es: "Compradores, vendedores y repartidores conectados en una sola app.",
      },
      metrics: [],
      link: null,
    },

    architecture: true,
    technology: {
      frontend: ["Flutter"],
      backend: ["Firebase"],
    },

    pending: [],
    toConfirm: [
      "Role: solo or in a team? What was yours?",
      "Problem wording (inferred from the portfolio)",
      "Downloads, sellers or orders",
      "Exact features and stack",
    ],
  },
  {
    id: "dogco",
    screenshots: [{ src: "shots/dogco.jpg", thumb: "shots/thumbs/dogco.jpg", alt: { en: "DogCo dashboard", es: "Panel de DogCo" } }],
    group: "clients",
    featured: false,
    name: "DogCo",
    monogram: "DOG",
    tone: "peach",
    category: { en: "Two-sided Marketplace · Pet care", es: "Marketplace de dos lados · Mascotas" },
    summary: {
      en: "App that matches pet owners with nearby dog walkers: requests, bookings and live walk tracking.",
      es: "App que conecta dueños de mascotas con paseadores cercanos: solicitudes, reservas y seguimiento del paseo en vivo.",
    },

    scope: { en: "Design + core logic", es: "Diseño + lógica central" },
    role: { en: "Design & front-end", es: "Diseño y front-end" },
    status: { label: { en: "Prototype", es: "Prototipo" } },
    deliveryTime: null,

    problem: {
      en: "Pet owners and dog walkers needed one place to post requests, apply, book and track each walk.",
      es: "Dueños y paseadores necesitaban un solo lugar para publicar solicitudes, postularse, reservar y seguir cada paseo.",
    },

    built: {
      summary: { en: "A two-sided marketplace app for dog walking.", es: "Una app marketplace de dos lados para paseos de perros." },
      items: {
        en: ["Owner & walker roles", "Requests & applications", "Chat", "Scheduling", "Live walk log", "Owner & walker dashboards"],
        es: ["Roles de dueño y paseador", "Solicitudes y postulaciones", "Chat", "Agenda", "Registro del paseo en vivo", "Paneles de dueño y paseador"],
      },
      flow: {
        en: ["Create account & role", "Complete profile", "Post or apply", "Live walk"],
        es: ["Crear cuenta y rol", "Completar perfil", "Publicar o postularse", "Paseo en vivo"],
      },
    },

    scaleMetrics: [
      {
        value: "2",
        label: { en: "User roles", es: "Roles de usuario" },
        context: { en: "owners and walkers", es: "dueños y paseadores" },
      },
    ],

    phases: null,

    ownership: {
      product: { en: ["Product design"], es: ["Diseño de producto"] },
      engineering: {
        en: ["Frontend", "Authentication", "Bookings", "Real-time sync"],
        es: ["Frontend", "Autenticación", "Reservas", "Sincronización en tiempo real"],
      },
      delivery: [],
    },

    result: {
      headline: {
        en: "A working two-sided marketplace, ready to validate with users",
        es: "Un marketplace de dos lados funcionando, listo para validar con usuarios",
      },
      description: {
        en: "Authentication, user roles, bookings and real-time sync in place.",
        es: "Autenticación, roles, reservas y sincronización en tiempo real funcionando.",
      },
      metrics: [],
      link: null,
    },

    architecture: true,
    technology: {
      frontend: ["React", "TypeScript", "CSS"],
      backend: ["Firebase"],
    },

    pending: [],
    toConfirm: ["Still a prototype, or launched?", "Problem wording (inferred)"],
  },
  {
    id: "lacev",
    screenshots: [{ src: "shots/lacev.jpg", thumb: "shots/thumbs/lacev.jpg", alt: { en: "LACEV / APASUR campaign landing page", es: "Landing de la campaña LACEV / APASUR" } }],
    group: "clients",
    featured: false,
    name: "LACEV / APASUR",
    monogram: "LCV",
    tone: "black",
    category: { en: "Science Campaign · Multilingual Site", es: "Campaña científica · Sitio multilingüe" },
    summary: {
      en: "Multilingual landing page for a CONICET-linked paleontology campaign in Patagonia.",
      es: "Landing multilingüe para una campaña paleontológica vinculada al CONICET en la Patagonia.",
    },

    scope: "Landing page",
    role: { en: "Development", es: "Desarrollo" },
    status: { label: { en: "Completed", es: "Completado" } },
    deliveryTime: null,

    problem: {
      en: "A world-class Argentine paleontology team needed its campaigns and discoveries visible to an international audience.",
      es: "Un equipo argentino de paleontología de primer nivel necesitaba que sus campañas y descubrimientos fueran visibles para una audiencia internacional.",
    },

    built: {
      summary: {
        en: "A multilingual campaign site for scientific outreach.",
        es: "Un sitio de campaña multilingüe para divulgación científica.",
      },
      items: {
        en: ["Multilingual site (i18n)", "Campaign & discoveries gallery", "Outreach content"],
        es: ["Sitio multilingüe (i18n)", "Galería de campañas y descubrimientos", "Contenido de divulgación"],
      },
      flow: [],
    },

    scaleMetrics: [],

    phases: null,

    ownership: {
      product: [],
      engineering: { en: ["Frontend", "Multilingual (i18n)"], es: ["Frontend", "Multilingüe (i18n)"] },
      delivery: { en: ["Deployment"], es: ["Despliegue"] },
    },

    result: {
      headline: {
        en: "Discoveries visible to an international audience",
        es: "Descubrimientos visibles para una audiencia internacional",
      },
      description: {
        en: "Helped amplify finds such as new dinosaur species and an exceptionally preserved dinosaur egg.",
        es: "Ayudó a amplificar hallazgos como nuevas especies de dinosaurios y un huevo de dinosaurio excepcionalmente conservado.",
      },
      metrics: [],
      link: null,
    },

    technology: {
      frontend: ["React", "i18n", "CSS"],
      infrastructure: ["GitHub", "GoDaddy"],
    },

    pending: [],
    toConfirm: ["Is the site live? Add the URL", "Problem wording (inferred)"],
  },
];

// The catalog's first screen. Each highlight opens its case.
export const OVERVIEW = {
  kicker: { en: "Selenia Sánchez · Catalog of work", es: "Selenia Sánchez · Catálogo de proyectos" },
  intro: {
    en: "Full-stack developer working across product, business systems and automation — from scope to production.",
    es: "Desarrolladora full-stack entre producto, sistemas de negocio y automatización — del alcance a producción.",
  },
  // Confirmed numbers only, each with its context.
  highlights: [
    {
      value: "820+",
      label: { en: "Internal users", es: "Usuarios internos" },
      context: { en: "across 17 countries", es: "en 17 países" },
      project: "sistask",
      icon: "users",
    },
    { value: "+35%", label: { en: "Course completion", es: "Finalización de cursos" }, project: "scalabl", icon: "up" },
    {
      value: { en: "7 months", es: "7 meses" },
      label: { en: "End-to-end to production", es: "De punta a punta hasta producción" },
      project: "auradash",
      icon: "time",
    },
    {
      value: { en: "4 months", es: "4 meses" },
      label: { en: "Marketplace launched", es: "Marketplace lanzado" },
      context: "Google Play",
      project: "mas-repuestos",
      icon: "launch",
    },
  ],
};

// Old links (?project=salon-saas, ?project=drp) keep working.
const ALIASES = { "salon-saas": "auradash", drp: "auradash" };

export const getProject = (id) => PROJECTS.find((p) => p.id === (ALIASES[id] ?? id)) ?? null;

export const nextProject = (project) => PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];

export const catalogNumber = (project) => String(PROJECTS.indexOf(project) + 1).padStart(2, "0");
