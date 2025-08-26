// src/components/ProyectosReales.jsx
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/ProyectosReales.css";
import scalablImg from "../assets/imagenes/scalabl-logo.png";
import sistaskImg from "../assets/imagenes/sistran-logo.png";
import logoDogco from "../assets/imagenes/dogco/logoDogco.png";

export const ProyectosReales = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const proyectos = [
    { id: "scalabl", route: "/experiencia-scalabl", img: scalablImg },
    { id: "sistran", route: "/experiencia-sistran", img: sistaskImg },
    { id: "dogco", route: "/proyecto-dogco", img: logoDogco, status: "in-progress" }
  ];

  return (
    <div className="proyectos-reales-container">
      <h2>{t("titulo")}</h2>

      <div className="tarjetas-proyectos">
        {proyectos.map((p) => (
          <div
            key={p.id}
            className={`tarjeta-proyecto ${p.status === "in-progress" ? "en-proceso" : ""}`}
          >
            <div className="proyecto-header">
              <img src={p.img} alt={t(`items.${p.id}.alt`)} loading="lazy" />
              {p.status === "in-progress" && (
                <span className="badge-proceso">{t("enProceso", "En proceso")}</span>
              )}
            </div>

            <p>{t(`items.${p.id}.descripcion`)}</p>

            <button onClick={() => navigate(p.route)}>
              {p.status === "in-progress"
                ? t("verProceso", "Ver proceso")
                : t("verProyecto", "Ver proyecto")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};