import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/ProyectoDashboard.css";

import heroImg from "../assets/imagenes/Dashboard/systemsdash-hero.jpg";
import overviewImg from "../assets/imagenes/Dashboard/systemsdash-overview.png";
import calendarImg from "../assets/imagenes/Dashboard/systemsdash-calendar.png";
import clientsImg from "../assets/imagenes/Dashboard/systemsdash-clients.png";
import teamImg from "../assets/imagenes/Dashboard/systemsdash-team.png";
import financesImg from "../assets/imagenes/Dashboard/systemsdash-finances.png";
import workflowsImg from "../assets/imagenes/Dashboard/systemsdash-workflows.png";
import automationsImg from "../assets/imagenes/Dashboard/systemsdash-automations.png";

const FEATURES = [
  { key: "overview", image: overviewImg, reverse: false },
  { key: "calendar", image: calendarImg, reverse: true },
  { key: "clients", image: clientsImg, reverse: false },
  { key: "team", image: teamImg, reverse: true },
  { key: "finances", image: financesImg, reverse: false },
  { key: "workflows", image: workflowsImg, reverse: true },
  { key: "automations", image: automationsImg, reverse: false },
];

export default function ProyectoDashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const highlights = t("dashboard.highlights", { returnObjects: true });
  const stackItems = t("dashboard.stack.items", { returnObjects: true });

  return (
    <div className="pd-container">
      <section className="pd-hero">
        <div className="pd-hero-text">
          <span className="pd-badge">{t("dashboard.badge")}</span>
          <h1 className="pd-title">{t("dashboard.title")}</h1>
          <p className="pd-subtitle">{t("dashboard.subtitle")}</p>
          <p className="pd-intro">{t("dashboard.intro")}</p>

          <ul className="pd-highlights">
            {(Array.isArray(highlights) ? highlights : []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <button
            type="button"
            className="pd-btn-primary"
            onClick={() => navigate("/proyectos")}
          >
            {t("dashboard.back")}
          </button>
        </div>

        <div className="pd-hero-image">
          <img src={heroImg} alt={t("dashboard.heroAlt")} />
        </div>
      </section>

      <section className="pd-gallery">
        <h2>{t("dashboard.gallery.title")}</h2>
        <p>{t("dashboard.gallery.desc")}</p>
        <div className="pd-gallery-grid">
          {FEATURES.map(({ key, image }) => (
            <figure key={key} className="pd-gallery-card">
              <img
                src={image}
                alt={t(`dashboard.features.${key}.alt`)}
                loading="lazy"
              />
              <figcaption>{t(`dashboard.features.${key}.title`)}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {FEATURES.map(({ key, image, reverse }) => {
        const points = t(`dashboard.features.${key}.points`, {
          returnObjects: true,
        });

        return (
          <section
            key={key}
            className={`pd-section split${reverse ? " reverse" : ""}`}
          >
            <div className="pd-image">
              <img
                src={image}
                alt={t(`dashboard.features.${key}.alt`)}
                loading="lazy"
              />
            </div>

            <div className="pd-text">
              <span className="pd-feature-tag">
                {t(`dashboard.features.${key}.tag`)}
              </span>
              <h2>{t(`dashboard.features.${key}.title`)}</h2>
              <p>{t(`dashboard.features.${key}.desc`)}</p>
              <ul>
                {(Array.isArray(points) ? points : []).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section className="pd-stack">
        <h2>{t("dashboard.stack.title")}</h2>
        <div className="pd-stack-grid">
          {(Array.isArray(stackItems) ? stackItems : []).map((item) => (
            <span key={item} className="pd-stack-pill">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="pd-final">
        <h2>{t("dashboard.architecture.title")}</h2>
        <p>{t("dashboard.architecture.desc")}</p>
      </section>
    </div>
  );
}
