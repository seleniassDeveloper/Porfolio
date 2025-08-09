import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/ProyectosReales.css";
import scalablImg from "../assets/imagenes/scalabl-logo.png";
import sistaskImg from "../assets/imagenes/sistran-logo.png";

export const ProyectosReales = () => {
  const { t } = useTranslation(); // usa el namespace por defecto ("translation") o el que configures
  const navigate = useNavigate();

  // Solo datos no traducibles (rutas, ids e imágenes)
  const proyectos = [
    { id: "scalabl", route: "/experiencia-scalabl", img: scalablImg },
    { id: "sistran", route: "/experiencia-sistran", img: sistaskImg },
  ];

  return (
    <div className="proyectos-reales-container ">
  
      <h2>{t("titulo")}</h2>

      <div className="tarjetas-proyectos">
        {proyectos.map((p) => (
          <div key={p.id} className="tarjeta-proyecto">
            <img
              src={p.img}
              alt={t(`items.${p.id}.alt`)}
              loading="lazy"
            />
            <p>{t(`items.${p.id}.descripcion`)}</p>

            <button onClick={() => navigate(p.route)}>
              {t("verProyecto")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};