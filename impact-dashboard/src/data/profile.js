// Who the dashboard is about. Edit freely — every section reads from here.
// Text is either plain (same in both languages) or { en, es }.

export const PROFILE = {
  name: "Selenia Sánchez",
  initials: "SS",
  title: {
    en: "Full-Stack Developer · Business Systems & Automation",
    es: "Desarrolladora Full-Stack · Sistemas de negocio y automatización",
  },
  headline: {
    lead: { en: "I build business systems from", es: "Construyo sistemas de negocio desde el" },
    accent: { en: "problem to production.", es: "problema hasta producción." },
  },
  intro: {
    en: "Product-focused full-stack developer turning manual operations into scalable systems: SaaS platforms, marketplaces, CRMs, ERPs and custom automations, from the frontend to the business logic, used by teams across multiple countries.",
    es: "Desarrolladora full-stack enfocada en producto: convierto operaciones manuales en sistemas escalables. SaaS, marketplaces, CRMs, ERPs y automatizaciones, del frontend a la lógica de negocio, usados por equipos en varios países.",
  },

  // Headline numbers on the one-pager. Confirmed facts only.
  highlights: [
    { value: "820+", label: { en: "Internal users (Sistask)", es: "Usuarios internos (Sistask)" } },
    { value: "+35%", label: { en: "Course completion rate (Scalabl)", es: "Tasa de finalización de cursos (Scalabl)" } },
    { value: { en: "7 months", es: "7 meses" }, label: { en: "End-to-end to production (AuraDash)", es: "De punta a punta hasta producción (AuraDash)" } },
    { value: { en: "4 months", es: "4 meses" }, label: { en: "Marketplace launched (Más Repuestos)", es: "Marketplace lanzado (Más Repuestos)" } },
  ],

  // The method shown on the one-pager.
  method: {
    en: ["Discovery", "Scope", "Build", "Testing", "Production", "Iteration"],
    es: ["Descubrimiento", "Alcance", "Construcción", "Pruebas", "Producción", "Iteración"],
  },

  contact: {
    email: "seleniadeveloper@gmail.com",
    linkedin: "https://www.linkedin.com/in/selenia-sanchez-300498/",
  },

  // Public address of this dashboard, printed at the foot of the one-pager.
  dashboardUrl: "https://selenia-project-impact.vercel.app",

  // If a designed PDF is placed in /public (e.g. "one-pager.pdf"), set it here and
  // "Save as PDF" serves that file instead of printing the built-in one.
  onePagerPdf: null,
};
