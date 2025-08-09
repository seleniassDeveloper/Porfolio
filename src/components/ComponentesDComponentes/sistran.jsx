import React from "react";
import "../../css/ExperienciaSistran.css";
import logoSistask from "../../assets/imagenes/sistran-logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Sistran = () => {
  const { t } = useTranslation(); // o useTranslation("portfolio") si usas namespace
  const navigate = useNavigate();
  const volverAtras = () => navigate(-1);

  return (
    <>
      <div className="sistran-container">
        <div className="volver-btn-container my-2">
          <button className="btn-volver" onClick={volverAtras}>
            {t("sistran.volver")}
          </button>
        </div>

        <div className="d-flex justify-content-center">
          <div className="sistran-card fade-in">
            <div className="header-sistran d-flex align-items-center justify-content-between">
              <h1 className="titulo-animado">{t("sistran.titulo")}</h1>
              <img
                src={logoSistask}
                alt={t("sistran.logoAlt")}
                className="logo-sistran"
                loading="lazy"
              />
            </div>

            <div className="info-sistran">
              <p><strong>{t("sistran.labels.rol")}:</strong> {t("sistran.rol")}</p>
              <p><strong>{t("sistran.labels.duracion")}:</strong> {t("sistran.duracion")}</p>
              <p><strong>{t("sistran.labels.proyecto")}:</strong> {t("sistran.proyecto")}</p>
              <p><strong>{t("sistran.labels.stack")}:</strong> {t("sistran.stack")}</p>
            </div>

            <div className="impacto-sistran">
              <h3>{t("sistran.impacto.titulo")}</h3>
              <p>{t("sistran.impacto.p1")}</p>
              <p>{t("sistran.impacto.p2")}</p>

              <ul>
                <li>{t("sistran.impacto.bullets.diseno")}</li>
                <li>{t("sistran.impacto.bullets.xp")}</li>
                <li>{t("sistran.impacto.bullets.componentes")}</li>
                <li>{t("sistran.impacto.bullets.adaptabilidad")}</li>
              </ul>

              <p>{t("sistran.impacto.p3")}</p>

              <ul>
                <li>{t("sistran.impacto.metrics.productividad")}</li>
                <li>{t("sistran.impacto.metrics.visibilidad")}</li>
                <li>{t("sistran.impacto.metrics.colaboracion")}</li>
                <li>{t("sistran.impacto.metrics.escalabilidad")}</li>
              </ul>

              <p>{t("sistran.impacto.cierre")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};