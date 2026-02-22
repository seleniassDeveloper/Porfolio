// src/components/ProyectosReales.jsx
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/ProyectosReales.css";

import scalablImg from "../assets/imagenes/scalabl-logo.png";
import sistaskImg from "../assets/imagenes/sistran-logo.png";
import logoDogco from "../assets/imagenes/dogco/logoDogco.png";
import dinoImg from "../assets/imagenes/logoblancoverDino.jpeg";
import masRepuestosImg from "../assets/MasRepuestos/masrepuesto.jpg";

// ✅ NUEVO
import dashboardImg from "../assets/imagenes/Dashboard/Dashboard1.png"

export const ProyectosReales = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const proyectos = [
    { id: "scalabl", route: "/experiencia-scalabl", img: scalablImg },
    { id: "sistran", route: "/experiencia-sistran", img: sistaskImg },
    { id: "dinosaurios", route: "/Dinosaurios", img: dinoImg },

    // 👇 NUEVO: Dashboard (en proceso)
    {
      id: "dashboard",
      route: "/proyecto-dashboard",
      img: dashboardImg,
      status: "in-progress",
    },

    // 👇 Dogco sigue “en proceso”
    { id: "dogco", route: "/proyecto-dogco", img: logoDogco, status: "in-progress" },

    { id: "masRepuestos", route: "/proyecto-mas-repuestos", img: masRepuestosImg },
  ];

  return (
    <div className="proyectos-reales-container">
      <h2>{t("titulo")}</h2>

      <div className="tarjetas-proyectos">
        {proyectos.map((p) => (
          <div
            key={p.id}
            className={`tarjeta-proyecto ${p.status === "in-progress" ? "en-proceso" : ""}`}
            onClick={() => navigate(p.route)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate(p.route)}
          >
            <div className="proyecto-header">
              <img src={p.img} alt={t(`items.${p.id}.alt`)} loading="lazy" />

              {p.status === "in-progress" && (
                <>
                  <span className="badge-proceso">{t("enProceso", "En proceso")}</span>
                  <div className="overlay-proceso" />
                </>
              )}
            </div>

            <p className="proyecto-desc">{t(`items.${p.id}.descripcion`)}</p>

            <div className="proyecto-actions">
              <button
                className={`btn ${p.status === "in-progress" ? "btn-secondary" : "btn-primary"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(p.route);
                }}
              >
                {p.status === "in-progress"
                  ? t("verProceso", "Ver proceso")
                  : t("verProyecto", "Ver proyecto")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};