import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoScalabl from "../../assets/imagenes/scalabl-logo.png";
import "../../css/ExperienciaScalabl.css";

export const Scalabl = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Helpers seguros para objetos/arrays desde i18n
  const tArr = (key) => {
    const v = t(key, { returnObjects: true });
    return Array.isArray(v) ? v : [];
  };
  const tObj = (key) => {
    const v = t(key, { returnObjects: true });
    return v && typeof v === "object" ? v : {};
  };

  const overviewCards = tObj("scalabl.overview.cards");

  return (
    <div className="scalabl py-5">
      {/* Topbar */}
      <div className="sc-topbar">
        <button className="sc-btn sc-btn-ghost" onClick={() => navigate(-1)}>
          {t("scalabl.volver")}
        </button>

   
      </div>

      {/* HERO */}
      <header className="sc-hero">
        <div className="sc-hero-left">
          <h1 className="sc-title">
            {t("scalabl.hero.title")}{" "}
            <span className="sc-highlight">{t("scalabl.hero.highlight")}</span>
            {t("scalabl.hero.suffix")}
          </h1>

          <p className="sc-subtitle">{t("scalabl.hero.subtitle")}</p>

          <div className="sc-hero-cta">
            <a
              href="https://scalabl.com"
              target="_blank"
              rel="noreferrer"
              className="sc-btn sc-btn-accent sc-btn-lg"
            >
              {t("scalabl.hero.cta")}
            </a>
            <span className="sc-badge">{t("scalabl.hero.badge")}</span>
          </div>
        </div>

        <div className="sc-hero-right">
          <div className="sc-hero-card">
            <img
              src={logoScalabl}
              alt={t("scalabl.logoAlt")}
              className="sc-logo"
            />
            <div className="sc-hero-video">
              {/* slot para video/imagen hero si luego lo integrás */}
              <div className="sc-video-skeleton" />
            </div>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="sc-section">
        <div className="sc-section-header">
          <h2 className="sc-h2">{t("scalabl.overview.title")}</h2>
          <p className="sc-section-lead">{t("scalabl.overview.body")}</p>
        </div>

        <div className="sc-grid-3">
          {Object.entries(overviewCards).map(([k, card]) => (
            <article className="sc-card" key={k}>
              <h3 className="sc-card-title">{card.title}</h3>
              <p className="sc-card-text">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DESARROLLO */}
      <section className="sc-section">
        <h2 className="sc-h2">{t("scalabl.development.title")}</h2>

        <div className="sc-features">
          <div className="sc-feature">
            <h4 className="sc-feature-title">
              {t("scalabl.development.landing.title")}
            </h4>
            <ul className="sc-list">
              {tArr("scalabl.development.landing.items").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="sc-feature">
            <h4 className="sc-feature-title">
              {t("scalabl.development.platform.title")}
            </h4>
            <ul className="sc-list">
              {tArr("scalabl.development.platform.items").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ROL */}
      <section className="sc-section">
        <h2 className="sc-h2">{t("scalabl.role.title")}</h2>
        <ul className="sc-list sc-list-check">
          {tArr("scalabl.role.items").map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* IMPACTO */}
      <section className="sc-section">
        <h2 className="sc-h2">{t("scalabl.impact.title")}</h2>
        <div className="sc-stats">
          {tArr("scalabl.impact.stats").map(({ num, label }, i) => (
            <div className="sc-stat" key={i}>
              <div className="sc-stat-num">{num}</div>
              <div className="sc-stat-label">{label}</div>
            </div>
          ))}
        </div>
        <p className="sc-note">{t("scalabl.impact.note")}</p>
      </section>

      {/* STACK */}
      <section className="sc-section">
        <h2 className="sc-h2">{t("scalabl.stack.title")}</h2>
        <div className="sc-pills">
          {tArr("scalabl.stack.items").map((tech, i) => (
            <span className="sc-pill" key={i}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <footer className="sc-footer">
        <a
          href="https://scalabl.com"
          target="_blank"
          rel="noreferrer"
          className="sc-btn sc-btn-accent sc-btn-lg"
        >
          {t("scalabl.footer.cta")}
        </a>
      </footer>
    </div>
  );
};