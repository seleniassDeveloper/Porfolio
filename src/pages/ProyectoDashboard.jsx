import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/ProyectoDashboard.css";

import dashboard1 from "../assets/imagenes/Dashboard/Dashboard1.png";
import dashboard2 from "../assets/imagenes/Dashboard/Dasboard2.png";
import dashboard3 from "../assets/imagenes/Dashboard/Dashboard3.png";
import dashboard4 from "../assets/imagenes/Dashboard/Dashboard4.png";

export default function ProyectoDashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="pd-container">

      {/* HERO */}
      <section className="pd-hero">
        <div className="pd-hero-text">
          <span className="pd-badge">
            {t("dashboard.badge")}
          </span>

          <h1 className="pd-title">
            {t("dashboard.title")}
          </h1>

          <p className="pd-subtitle">
            {t("dashboard.subtitle")}
          </p>

          <button
            className="pd-btn-primary"
            onClick={() => navigate("/proyectos")}
          >
            {t("dashboard.back")}
          </button>
        </div>

        <div className="pd-hero-image">
          <img src={dashboard1} alt="Dashboard principal" />
        </div>
      </section>

      {/* GESTIÓN */}
      <section className="pd-section split">
        <div className="pd-image">
          <img src={dashboard2} alt="Sistema de citas" />
        </div>

        <div className="pd-text">
          <h2>{t("dashboard.management.title")}</h2>
          <p>{t("dashboard.management.desc")}</p>

          <ul>
            <li>{t("dashboard.management.points.0")}</li>
            <li>{t("dashboard.management.points.1")}</li>
            <li>{t("dashboard.management.points.2")}</li>
            <li>{t("dashboard.management.points.3")}</li>
          </ul>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="pd-section split reverse">
        <div className="pd-text">
          <h2>{t("dashboard.analytics.title")}</h2>
          <p>{t("dashboard.analytics.desc")}</p>

          <ul>
            <li>{t("dashboard.analytics.points.0")}</li>
            <li>{t("dashboard.analytics.points.1")}</li>
            <li>{t("dashboard.analytics.points.2")}</li>
            <li>{t("dashboard.analytics.points.3")}</li>
          </ul>
        </div>

        <div className="pd-image">
          <img src={dashboard3} alt="Métricas y gráficos" />
        </div>
      </section>

      {/* IA */}
      <section className="pd-section split">
        <div className="pd-image">
          <img src={dashboard4} alt="Chat IA analítico" />
        </div>

        <div className="pd-text">
          <h2>{t("dashboard.ai.title")}</h2>
          <p>{t("dashboard.ai.desc")}</p>

          <ul>
            <li>{t("dashboard.ai.points.0")}</li>
            <li>{t("dashboard.ai.points.1")}</li>
            <li>{t("dashboard.ai.points.2")}</li>
            <li>{t("dashboard.ai.points.3")}</li>
          </ul>
        </div>
      </section>

      {/* ARQUITECTURA */}
      <section className="pd-final">
        <h2>{t("dashboard.architecture.title")}</h2>
        <p>{t("dashboard.architecture.desc")}</p>
      </section>

    </div>
  );
}