import "../../css/ExperienciaSistran.css";
import logoSistask from "../../assets/imagenes/sistran-logo.png";
import dashboardImg from "../../assets/imagenes/sistask-dashboard.png";
import ticketDetailImg from "../../assets/imagenes/sistask-ticket-detail.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useRef, useState } from "react";

export const Sistran = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [tab, setTab] = useState("summary"); // summary | guide
  const [piAccepted, setPiAccepted] = useState(false);
  const [lightbox, setLightbox] = useState(null); // {src, title}

  const volverAtras = () => navigate(-1);

  // Secciones desde i18n (arrays/objetos)
  const sections = t("sistaskGuide.sections", { returnObjects: true });

  // Enlazamos imágenes locales con las secciones de "views"
  const viewsWithImages = (sections.views?.items || []).map((it) => {
    const src = it.id === "dash" ? dashboardImg : it.id === "ticket" ? ticketDetailImg : null;
    return { ...it, src };
  });

  // Scrollspy
  const [activeId, setActiveId] = useState(sections.overview?.id || "overview");
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
    Object.values(sections).forEach((sec) => {
      const el = sectionRefs.current[sec.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const indexLinks = useMemo(
    () => Object.values(sections).map((s) => ({ id: s.id, label: s.title })),
    [sections]
  );

  const renderImage = (src, alt) => (
    <img
      src={src || ""}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.replaceWith(Object.assign(document.createElement("div"), {
          className: "img-fallback",
          innerText: t("common.imageNotAvailable"),
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
        {/* Índice izquierdo */}
        <aside className="sistran-index" aria-label={t("sistaskGuide.indexAria")}>
          <div className="index-inner">
            <div className="index-header">
              <img src={logoSistask} alt={t("sistran.logoAlt")} className="logo-sistran" loading="lazy" />
              <h2 className="index-title">{t("sistaskGuide.title")}</h2>
            </div>
            <nav className="index-nav">
              {indexLinks.map((l) => (
                <button
                  key={l.id}
                  className={`index-link ${activeId === l.id ? "active" : ""}`}
                  onClick={() => {
                    setTab("guide");
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

        {/* Contenido */}
        <main className="sistran-main">
          <div className="sistran-card fade-in">
            <div className="header-sistran">
              <h1 className="titulo-animado">{t("sistran.titulo")}</h1>

              <div className="tabs-sistran" role="tablist" aria-label={t("sistaskGuide.tabsAria")}>
                <button
                  role="tab"
                  aria-selected={tab === "summary"}
                  className={tab === "summary" ? "tab active" : "tab"}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setTab("summary");
                  }}
                >
                  {t("sistaskGuide.tabs.summary")}
                </button>
                <button
                  role="tab"
                  aria-selected={tab === "guide"}
                  className={tab === "guide" ? "tab active" : "tab"}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setTab("guide");
                  }}
                >
                  {t("sistaskGuide.tabs.guide")}
                </button>
              </div>
            </div>

            {/* TAB: RESUMEN */}
            {tab === "summary" && (
              <div className="info-sistran">
                <div className="kv">
                  <p><strong>{t("sistran.labels.rol")}:</strong> {t("sistran.rol")}</p>
                  <p><strong>{t("sistran.labels.duracion")}:</strong> {t("sistran.duracion")}</p>
                  <p><strong>{t("sistran.labels.proyecto")}:</strong> {t("sistran.proyecto")}</p>
                  <p><strong>{t("sistran.labels.stack")}:</strong> {t("sistran.stack")}</p>
                </div>

                <div className="highlight">
                  <h3>{t("sistaskSummary.valueImpact.title")}</h3>
                  <p>{t("sistaskSummary.valueImpact.p1")}</p>
                  <ul>
                    {t("sistaskSummary.valueImpact.points", { returnObjects: true }).map((li, i) => (
                      <li key={i}><strong>{li.strong}</strong> {li.text}</li>
                    ))}
                  </ul>
                  <p className="mt">{t("sistaskSummary.valueImpact.outcome")}</p>
                </div>
              </div>
            )}

            {/* TAB: GUÍA */}
            {tab === "guide" && (
              <div className="guia-sistask">
                {/* Overview */}
                <section
                  id={sections.overview.id}
                  ref={(el) => (sectionRefs.current[sections.overview.id] = el)}
                  className="guide-section"
                  aria-label={sections.overview.title}
                >
                  <h2 className="guide-title">{sections.overview.title}</h2>
                  <p className="guide-text">{sections.overview.body}</p>
                </section>

                {/* Views (con imágenes locales) */}
                <section
                  id={sections.views.id}
                  ref={(el) => (sectionRefs.current[sections.views.id] = el)}
                  className="guide-section"
                  aria-label={sections.views.title}
                >
                  <h2 className="guide-title">{sections.views.title}</h2>
                  <div className="ip-banner">
                    {t("sistaskGuide.ip_banner.text")}
                    <button className="ip-accept" onClick={() => setPiAccepted((v) => !v)}>
                      {piAccepted ? t("sistaskGuide.ip_banner.hide") : t("sistaskGuide.ip_banner.show")}
                    </button>
                  </div>
                  <div className="gallery-grid">
                    {viewsWithImages.map((g) => (
                      <figure key={g.id} className="gallery-item">
                        <div
                          className={`img-wrap ${piAccepted ? "clear" : "blurred"}`}
                          role="button"
                          aria-label={t("sistaskGuide.aria.enlarge", { title: g.title })}
                          onClick={() => setLightbox({ src: g.src, title: g.title })}
                        >
                          {renderImage(g.src, g.alt)}
                          {!piAccepted && <span className="watermark">{t("sistaskGuide.ip_banner.watermark")}</span>}
                        </div>
                        <figcaption className="caption">
                          <strong className="cap-title">{g.title}</strong>
                          <p>{g.caption}</p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>

                {/* Workflow */}
                <section
                  id={sections.workflow.id}
                  ref={(el) => (sectionRefs.current[sections.workflow.id] = el)}
                  className="guide-section"
                  aria-label={sections.workflow.title}
                >
                  <h2 className="guide-title">{sections.workflow.title}</h2>
                  {sections.workflow.lead && <p className="guide-text">{sections.workflow.lead}</p>}
                  <ul className="guide-list">
                    {sections.workflow.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </section>

                {/* Boards */}
                <section
                  id={sections.boards.id}
                  ref={(el) => (sectionRefs.current[sections.boards.id] = el)}
                  className="guide-section"
                  aria-label={sections.boards.title}
                >
                  <h2 className="guide-title">{sections.boards.title}</h2>
                  <ul className="guide-list">
                    {sections.boards.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  {sections.boards.query && (
                    <div className="code-block">
                      <div className="code-title">{sections.boards.queryLabel}</div>
                      <pre><code>{sections.boards.query}</code></pre>
                    </div>
                  )}
                </section>

                {/* Reports */}
                <section
                  id={sections.reports.id}
                  ref={(el) => (sectionRefs.current[sections.reports.id] = el)}
                  className="guide-section"
                  aria-label={sections.reports.title}
                >
                  <h2 className="guide-title">{sections.reports.title}</h2>
                  <ul className="guide-list">
                    {sections.reports.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </section>

                {/* Roles */}
                <section
                  id={sections.roles.id}
                  ref={(el) => (sectionRefs.current[sections.roles.id] = el)}
                  className="guide-section"
                  aria-label={sections.roles.title}
                >
                  <h2 className="guide-title">{sections.roles.title}</h2>
                  <ul className="guide-list">
                    {sections.roles.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </section>

                {/* Create */}
                <section
                  id={sections.create.id}
                  ref={(el) => (sectionRefs.current[sections.create.id] = el)}
                  className="guide-section"
                  aria-label={sections.create.title}
                >
                  <h2 className="guide-title">{sections.create.title}</h2>
                  <ol className="guide-steps">
                    {sections.create.steps.map((step, i) =>
                      Array.isArray(step) ? (
                        <li key={i}>
                          {t("sistaskGuide.steps.fillFields")}
                          <ul className="guide-sublist">
                            {step.map((sub, k) => <li key={k}>{sub}</li>)}
                          </ul>
                        </li>
                      ) : (
                        <li key={i}>{step}</li>
                      )
                    )}
                  </ol>
                </section>

                {/* SLA */}
                <section
                  id={sections.sla.id}
                  ref={(el) => (sectionRefs.current[sections.sla.id] = el)}
                  className="guide-section"
                  aria-label={sections.sla.title}
                >
                  <h2 className="guide-title">{sections.sla.title}</h2>
                  <ul className="guide-list">
                    {sections.sla.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </section>

                {/* Best practices */}
                <section
                  id={sections.best.id}
                  ref={(el) => (sectionRefs.current[sections.best.id] = el)}
                  className="guide-section"
                  aria-label={sections.best.title}
                >
                  <h2 className="guide-title">{sections.best.title}</h2>
                  <ul className="guide-list">
                    {sections.best.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </section>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Lightbox */}
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