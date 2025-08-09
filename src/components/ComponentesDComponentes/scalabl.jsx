import React from "react";
import { useNavigate } from "react-router-dom";
import logoScalabl from "../../assets/imagenes/scalabl-logo.png";
import "../../css/ExperienciaSistran.css";
import { useTranslation } from "react-i18next";

export const Scalabl = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const volverAtras = () => navigate(-1);

  return (
    <div className="scalabl-container">
      <div className="volver-btn-container mb-5">
        <button className="btn-volverScalabl" onClick={volverAtras}>
          {t("scalabl.volver")}
        </button>
      </div>

      <div className="d-flex justify-content-center">
        <div className="scalabl-card fade-in">
          <div className="header-scalabl d-flex align-items-center justify-content-between">
            <h1 className="titulo-scalabl">{t("scalabl.titulo")}</h1>
            <img
              src={logoScalabl}
              alt={t("scalabl.logoAlt")}
              className="logo-scalabl"
              loading="lazy"
            />
          </div>

          <div className="info-scalabl">
            <p>{t("scalabl.rolLabel")}: {t("scalabl.rol")}</p>
            <p>{t("scalabl.duracionLabel")}: {t("scalabl.duracion")}</p>
            <p>{t("scalabl.proyectoLabel")}: {t("scalabl.proyecto")}</p>
            <p>{t("scalabl.stackLabel")}: {t("scalabl.stack")}</p>
          </div>

          <div className="tareas-scalabl">
            <h3>{t("scalabl.responsabilidades.titulo")}</h3>
            <ul>
              <li>{t("scalabl.responsabilidades.item1")}</li>
              <li>{t("scalabl.responsabilidades.item2")}</li>
              <li>{t("scalabl.responsabilidades.item3")}</li>
              <li>{t("scalabl.responsabilidades.item4")}</li>
            </ul>
          </div>

          <div className="impacto-scalabl">
            <h3>{t("scalabl.impacto.titulo")}</h3>
            <p>{t("scalabl.impacto.descripcion")}</p>
            <ul>
              <li>{t("scalabl.impacto.item1")}</li>
              <li>{t("scalabl.impacto.item2")}</li>
              <li>{t("scalabl.impacto.item3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};