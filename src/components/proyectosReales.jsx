// src/components/ProyectosReales.jsx
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiClock, FiCheckCircle } from "react-icons/fi";
import "../css/ProyectosReales.css";

import scalablImg from "../assets/imagenes/scalabl-logo.png";
import sistaskImg from "../assets/imagenes/sistran-logo.png";
import logoDogco from "../assets/imagenes/dogco/logoDogco.png";
import dinoImg from "../assets/imagenes/logoblancoverDino.jpeg";
import masRepuestosImg from "../assets/MasRepuestos/masrepuesto.jpg";
import dashboardImg from "../assets/imagenes/Dashboard/Dashboard1.png";

export const ProyectosReales = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const proyectos = [
    {
      id: "scalabl",
      route: "/experiencia-scalabl",
      img: scalablImg,
      type: "EdTech",
      theme: "green",
    },
    {
      id: "sistran",
      route: "/experiencia-sistran",
      img: sistaskImg,
      type: "Enterprise",
      theme: "blue",
    },
    {
      id: "dinosaurios",
      route: "/Dinosaurios",
      img: dinoImg,
      type: "Science",
      theme: "gold",
    },
    {
      id: "dashboard",
      route: "/proyecto-dashboard",
      img: dashboardImg,
      type: "SaaS + AI",
      theme: "purple",
      status: "in-progress",
    },
    {
      id: "dogco",
      route: "/proyecto-dogco",
      img: logoDogco,
      type: "Marketplace",
      theme: "pink",
      status: "in-progress",
    },
    {
      id: "masRepuestos",
      route: "/proyecto-mas-repuestos",
      img: masRepuestosImg,
      type: "Mobile App",
      theme: "orange",
    },
  ];

  return (
    <section className="projects-showcase-section">
      <div className="projects-bg-grid"></div>

      <div className="projects-showcase-container">
        <div className="projects-showcase-header">
          <span>{t("projects.eyebrow", "Real work")}</span>
          <h2>{t("titulo")}</h2>
          <p>
            {t(
              "projects.subtitle",
              "A selection of products, platforms and digital systems I’ve built across SaaS, marketplaces, enterprise tools and public-facing experiences."
            )}
          </p>
        </div>

        <div className="projects-card-grid">
          {proyectos.map((p, index) => {
            const isProgress = p.status === "in-progress";

            return (
              <article
                key={p.id}
                className={`project-glass-card theme-${p.theme} ${
                  isProgress ? "is-progress" : ""
                }`}
                onClick={() => navigate(p.route)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(p.route)}
                style={{ "--delay": `${index * 0.07}s` }}
              >
                <div className="project-card-top">
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-type">{p.type}</span>
                </div>

                <div className="project-image-frame">
                  <img src={p.img} alt={t(`items.${p.id}.alt`)} loading="lazy" />

                  {isProgress && (
                    <div className="project-status-badge">
                      <FiClock />
                      {t("enProceso", "En proceso")}
                    </div>
                  )}
                </div>

                <div className="project-card-content">
                  <div className="project-state">
                    {isProgress ? <FiClock /> : <FiCheckCircle />}
                    <span>
                      {isProgress
                        ? t("projects.inProgressLabel", "Building")
                        : t("projects.liveLabel", "Completed")}
                    </span>
                  </div>

                  <h3>{t(`items.${p.id}.title`, p.id)}</h3>

                  <p>{t(`items.${p.id}.descripcion`)}</p>
                </div>

                <button
                  className="project-card-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(p.route);
                  }}
                >
                  {isProgress
                    ? t("verProceso", "Ver proceso")
                    : t("verProyecto", "Ver proyecto")}

                  <span>
                    <FiArrowUpRight />
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};