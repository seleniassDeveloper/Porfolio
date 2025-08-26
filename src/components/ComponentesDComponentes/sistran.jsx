import "../../css/ExperienciaSistran.css";
import logoSistask from "../../assets/imagenes/sistran-logo.png";
import dashboardImg from "../../assets/imagenes/sistask-dashboard.png";
import ticketDetailImg from "../../assets/imagenes/sistask-ticket-detail.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useRef, useState } from "react";

/** Contenido mejorado y no repetido */
const SECTIONS = [
  {
    id: "overview",
    title: "¿Qué es Sistask?",
    type: "text",
    body:
      "Sistask es una plataforma para gestionar proyectos e incidencias con foco en trazabilidad, SLA y visibilidad. " +
      "Permite crear tickets, priorizarlos, asignarlos por rol y seguir su ciclo de vida con historial, adjuntos y reportes.",
  },
  {
    id: "vistas",
    title: "Vistas: Dashboard y Detalle de ticket",
    type: "gallery",
    items: [
      {
        id: "dash",
        src: dashboardImg,
        title: "Dashboard",
        caption:
          "Panel principal con gráficos y widgets. " +
          "Permite ver reportes basados en filtros guardados (estado, prioridad, proyecto, fecha, asignado, etc.), " +
          "fijar gadgets con KPIs clave, aplicar filtros rápidos y guardar configuraciones para reutilizarlas.",
        alt: "Dashboard con gráficos y gadgets configurables de Sistask",
      },
      {
        id: "ticket",
        src: ticketDetailImg,
        title: "Detalle del ticket",
        caption:
          "Ficha completa del caso. Incluye historial (quién/cuándo/qué), workflow (según rol: reabrir, resolver, cerrar), " +
          "archivos adjuntos, registro de horas, SLA y estado actual, además de asignación de usuarios y permisos.",
        alt: "Detalle del ticket con historial, workflow, adjuntos y SLA en Sistask",
      },
    ],
  },
  {
    id: "flujo",
    title: "Flujo de trabajo",
    type: "bullets",
    lead:
      "Ciclo típico configurable por proyecto:",
    bullets: [
      "To Do → In Progress → En Revisión/QA → Done.",
      "Estados opcionales: Blocked (Bloqueado), QA Testing (Pruebas), Ready for Release.",
      "Cada transición registra evento en el historial (quién/cuándo/qué).",
    ],
  },
  {
    id: "tableros",
    title: "Tableros",
    type: "bullets",
    bullets: [
      "Scrum: backlog, sprints, estimaciones y velocity.",
      "Kanban: flujo continuo, límites WIP y control visual.",
      "Filtros avanzados y búsquedas guardadas (por estado, prioridad, proyecto, asignado, fechas).",
    ],
    queryLabel: "Ejemplo de consulta de filtro",
    query: `project = HDS
AND status = "In Progress"
AND assignee = currentUser()`,
  },
  {
    id: "reportes",
    title: "Dashboards y Reportes",
    type: "bullets",
    bullets: [
      "Burndown chart: progreso del sprint.",
      "Velocity chart: capacidad de entrega por sprint.",
      "Pie chart: distribución por estado/prioridad/usuario.",
      "Cumulative Flow Diagram: flujo y cuellos de botella.",
    ],
  },
  {
    id: "roles",
    title: "Roles y permisos",
    type: "bullets",
    bullets: [
      "Admin: configura proyectos, flujos, campos y usuarios.",
      "Project Lead: prioriza backlog y gestiona releases.",
      "Agente/Assignee: ejecuta trabajo de los tickets asignados.",
      "Reporter: crea el ticket y valida el cierre.",
    ],
  },
  {
    id: "crear",
    title: "Crear un ticket",
    type: "steps",
    steps: [
      "Haz clic en “Crear”.",
      [
        "Project: proyecto al que pertenece.",
        "Issue type: Epic, Story, Task, Bug, etc.",
        "Summary: título corto y descriptivo.",
        "Description: detalle, pasos y resultado esperado.",
        "Priority: alta / media / baja.",
        "Assignee: responsable.",
        "Labels / Components: etiquetas/categorías.",
        "Adjuntos: evidencias y archivos relevantes.",
      ],
      "Guardar. El ticket inicia en el estado inicial del flujo y notifica al equipo.",
    ],
  },
  {
    id: "sla",
    title: "SLA y notificaciones",
    type: "bullets",
    bullets: [
      "Definición de tiempos objetivo por tipo/prioridad.",
      "Alertas cuando un ticket se acerca o supera el SLA.",
      "Notificaciones por cambios de estado, comentarios y reasignaciones.",
    ],
  },
  {
    id: "buenas",
    title: "Buenas prácticas",
    type: "bullets",
    bullets: [
      "Usar títulos claros y específicos.",
      "Describir pasos para reproducir y resultado esperado.",
      "Adjuntar evidencias (capturas, logs).",
      "Mantener estados al día y cerrar con validación del solicitante.",
    ],
  },
];

export const Sistran = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [tab, setTab] = useState("resumen"); // resumen | guia
  const [piAccepted, setPiAccepted] = useState(false);
  const [lightbox, setLightbox] = useState(null); // {src, title}

  const volverAtras = () => navigate(-1);

  /** Scrollspy: resalta el item del índice según sección visible */
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] }
    );
    SECTIONS.forEach((s) => {
      const el = sectionRefs.current[s.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const indexLinks = useMemo(
    () => SECTIONS.map((s) => ({ id: s.id, label: s.title })),
    []
  );

  const renderImage = (src, alt) => (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.replaceWith(Object.assign(document.createElement("div"), {
          className: "img-fallback",
          innerText: "Imagen no disponible",
        }));
      }}
    />
  );

  return (
    <div className="sistran-container">
      <div className="volver-btn-container">
        <button className="btn-volver" onClick={volverAtras} aria-label={t("sistran.volver")}>
          {t("sistran.volver")}
        </button>
      </div>

      <div className="sistran-layout container">
        {/* ÍNDICE IZQUIERDO */}
        <aside className="sistran-index" aria-label="Índice de la guía">
          <div className="index-inner">
            <div className="index-header">
              <img src={logoSistask} alt={t("sistran.logoAlt")} className="logo-sistran" loading="lazy" />
              <h2 className="index-title">Guía Sistask</h2>
            </div>
            <nav className="index-nav">
              {indexLinks.map((l) => (
                <button
                  key={l.id}
                  className={`index-link ${activeId === l.id ? "active" : ""}`}
                  onClick={() => {
                    setTab("guia");
                    setTimeout(() => {
                      const el = sectionRefs.current[l.id];
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 0);
                  }}
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* CONTENIDO */}
        <main className="sistran-main">
          <div className="sistran-card fade-in">
            <div className="header-sistran">
              <h1 className="titulo-animado">{t("sistran.titulo")}</h1>

              <div className="tabs-sistran" role="tablist" aria-label="Secciones">
                <button
                  role="tab"
                  aria-selected={tab === "resumen"}
                  className={tab === "resumen" ? "tab active" : "tab"}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setTab("resumen");
                  }}
                >
                  Resumen
                </button>
                <button
                  role="tab"
                  aria-selected={tab === "guia"}
                  className={tab === "guia" ? "tab active" : "tab"}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setTab("guia");
                  }}
                >
                  Guía Sistask
                </button>
              </div>
            </div>

            {/* TAB RESUMEN — breve, sin duplicar la guía */}
            {tab === "resumen" && (
              <div className="info-sistran">
                <div className="kv">
                  <p><strong>{t("sistran.labels.rol")}:</strong> {t("sistran.rol")}</p>
                  <p><strong>{t("sistran.labels.duracion")}:</strong> {t("sistran.duracion")}</p>
                  <p><strong>{t("sistran.labels.proyecto")}:</strong> {t("sistran.proyecto")}</p>
                  <p><strong>{t("sistran.labels.stack")}:</strong> {t("sistran.stack")}</p>
                </div>
                <div className="highlight">
                  <h3>Valor</h3>
                  <p>
                    Centraliza tickets, asegura trazabilidad e indicadores (SLA, tiempos por estado, carga por agente) y facilita decisiones con
                    dashboards y filtros guardados.
                  </p>
                </div>
              </div>
            )}

            {/* TAB GUIA — todo en un solo lugar, con índice izq */}
            {tab === "guia" && (
              <div className="guia-sistask">
                {SECTIONS.map((sec) => (
                  <section
                    key={sec.id}
                    id={sec.id}
                    ref={(el) => (sectionRefs.current[sec.id] = el)}
                    className="guide-section"
                    aria-label={sec.title}
                  >
                    <h2 className="guide-title">{sec.title}</h2>

                    {/* TEXT */}
                    {sec.type === "text" && <p className="guide-text">{sec.body}</p>}

                    {/* GALLERY */}
                    {sec.type === "gallery" && (
                      <>
                        <div className="ip-banner">
                          ⚠️ Por propiedad intelectual, las imágenes se muestran con desenfoque parcial.
                          <button className="ip-accept" onClick={() => setPiAccepted((v) => !v)}>
                            {piAccepted ? "Ocultar desenfoque" : "Entiendo y quiero ver"}
                          </button>
                        </div>
                        <div className="gallery-grid">
                          {sec.items.map((g) => (
                            <figure key={g.id} className="gallery-item">
                              <div
                                className={`img-wrap ${piAccepted ? "clear" : "blurred"}`}
                                role="button"
                                aria-label={`Ampliar ${g.title}`}
                                onClick={() => setLightbox({ src: g.src, title: g.title })}
                              >
                                {renderImage(g.src, g.alt)}
                                {!piAccepted && <span className="watermark">Ejemplo | PI</span>}
                              </div>
                              <figcaption className="caption">
                                <strong className="cap-title">{g.title}</strong>
                                <p>{g.caption}</p>
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      </>
                    )}

                    {/* BULLETS */}
                    {sec.type === "bullets" && (
                      <>
                        {sec.lead && <p className="guide-text">{sec.lead}</p>}
                        <ul className="guide-list">
                          {sec.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                        {sec.query && (
                          <div className="code-block">
                            <div className="code-title">{sec.queryLabel || "Consulta ejemplo"}</div>
                            <pre><code>{sec.query}</code></pre>
                          </div>
                        )}
                      </>
                    )}

                    {/* STEPS con sublista */}
                    {sec.type === "steps" && (
                      <ol className="guide-steps">
                        {sec.steps.map((step, i) =>
                          Array.isArray(step) ? (
                            <li key={i}>
                              Completa los campos:
                              <ul className="guide-sublist">
                                {step.map((sub, k) => <li key={k}>{sub}</li>)}
                              </ul>
                            </li>
                          ) : (
                            <li key={i}>{step}</li>
                          )
                        )}
                      </ol>
                    )}
                  </section>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lb-backdrop" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <div className="lb-card" onClick={(e) => e.stopPropagation()}>
            <div className="lb-header">
              <h4>{lightbox.title}</h4>
              <button className="lb-close" onClick={() => setLightbox(null)}>✕</button>
            </div>
            <div className="lb-body">
              <img src={lightbox.src} alt={lightbox.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};