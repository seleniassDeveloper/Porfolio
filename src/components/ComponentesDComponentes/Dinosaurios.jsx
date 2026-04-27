import "../css/Dinosaurios.css";
import { useNavigate } from "react-router-dom";
import trex from "../../assets/imagenes/trex-right.png";
import fondoHero from "../../assets/imagenes/disnoporfolio/decierto.jpg";
import dino2 from "../../assets/imagenes/disnoporfolio/dino2.png";
import dino3 from "../../assets/imagenes/disnoporfolio/dino3.jpg";
import dino4 from "../../assets/imagenes/disnoporfolio/dino4.jpg";
import dino5 from "../../assets/imagenes/disnoporfolio/dino5.jpg";
import dino6 from "../../assets/imagenes/disnoporfolio/dino6.jpg";
import { useTranslation } from "react-i18next";

export default function Dinosaurios() {
  const { t } = useTranslation();
  const navigate = useNavigate();


  const kpis = t("dinosaurios.kpis", { returnObjects: true });
  const achievements = t("dinosaurios.achievements.items", {
    returnObjects: true,
  });

  


  const galleryImages = [dino2, dino3, dino4, dino5, dino6];



  return (
    <main className="dino-page">
       {/* BOTÓN VOLVER */}
      <button
        onClick={() => navigate(-1)}
        className="dino-back-btn"
      >
        {t("dinosaurios.back") || "Back"}
      </button>
      <section
        className="dino-hero-bg"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.78), rgba(0,0,0,.48), rgba(0,0,0,.15)), url(${fondoHero})`,
        }}
      >
        <div className="dino-hero">
          <div className="dino-hero-left">
            <span className="dino-eyebrow">{t("dinosaurios.eyebrow")}</span>

            <h1 className="hero-title">
              {t("dinosaurios.heroTitleLine1")}{" "}
              <span>{t("dinosaurios.heroTitleHighlight")}</span>
              <br />
              {t("dinosaurios.heroTitleLine2")}
            </h1>

            <p className="dino-description">
              {t("dinosaurios.heroDescription")}
            </p>

            <div className="dino-buttons">
              <a
                href="https://apasur.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="green">
                  {t("dinosaurios.exploraBtn")}
                </button>
              </a>
            </div>
          </div>

          <div className="dino-hero-right">
            <img src={trex} alt="Dinosaur render" className="trex-sticker" />
          </div>
        </div>
      </section>

      <section className="dino-about">
        <div className="dino-about-text">
          <span className="dino-label">{t("dinosaurios.about.label")}</span>
          <h2>{t("dinosaurios.about.title")}</h2>
          <p>{t("dinosaurios.about.body")}</p>
        </div>

        <div className="dino-kpis">
          {Array.isArray(kpis) &&
            kpis.map((item, i) => (
              <article className="dino-kpi" key={i}>
                <strong>{item.num}</strong>
                <span>{item.label}</span>
              </article>
            ))}
        </div>
      </section>

      <section className="dino-editorial">
        <div>
          <span className="dino-label light">
            {t("dinosaurios.achievements.label")}
          </span>
          <h2>{t("dinosaurios.achievements.title")}</h2>
          <p>{t("dinosaurios.achievements.body")}</p>
        </div>

        <ul className="dino-achievements">
          {Array.isArray(achievements) &&
            achievements.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </section>

      <section className="dino-galeria">
        <h2 className="galeria-title">{t("dinosaurios.galeriaTitulo")}</h2>

        <div className="galeria-grid">
          {galleryImages.map((img, i) => (
            <div className="galeria-item" key={i}>
              <img
                src={img}
                alt={t("dinosaurios.galleryAlt", { num: i + 1 })}
                className="sticker-image"
              />
              <span className="galeria-label">
                {t("dinosaurios.campañaNumero", { num: i + 1 })}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}