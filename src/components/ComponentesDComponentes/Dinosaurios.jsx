import "../css/Dinosaurios.css";
import trex from "../../assets/imagenes/trex-right.png";
import fondoHero from "../../assets/imagenes/disnoporfolio/decierto.jpg";
// import dino1 from "../../assets/imagenes/disnoporfolio/dino1.jpg";
import dino2 from "../../assets/imagenes/disnoporfolio/dino2.png";
import dino3 from "../../assets/imagenes/disnoporfolio/dino3.jpg";
import dino4 from "../../assets/imagenes/disnoporfolio/dino4.jpg";
import dino5 from "../../assets/imagenes/disnoporfolio/dino5.jpg";
import dino6 from "../../assets/imagenes/disnoporfolio/dino6.jpg";

import { useTranslation } from "react-i18next";

export default function Dinosaurios() {
  const { t } = useTranslation();

  return (
    <main className="dino-page">
      {/* HERO */}
      <section
        className="dino-hero-bg"
        style={{ backgroundImage: `url(${fondoHero})` }}
      >
        <div className="dino-hero px-5">
          {/* TEXTO */}
          <div className="dino-hero-left py-3">
            <h1 className="hero-title">
              {t("dinosaurios.heroTitleLine1")}{" "}
              <span className="watch-live">{t("dinosaurios.heroTitleHighlight")}</span>
              <br />
              {t("dinosaurios.heroTitleLine2")}
            </h1>

            <p className="dino-description">{t("dinosaurios.heroDescription")}</p>

            <div className="dino-buttons">
              <a
                href="https://apasur.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="green">{t("dinosaurios.exploraBtn")}</button>
              </a>
            </div>
          </div>

          {/* IMAGEN DINOSAURIO */}
          <div className="dino-hero-right">
            <img src={trex} alt="T-Rex render" className="trex-sticker" />
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="dino-galeria container pb-5">
        <h2 className="galeria-title">{t("dinosaurios.galeriaTitulo")}</h2>
        <div className="galeria-grid">
          {[dino2, dino3, dino4, dino5, dino6].map((img, i) => (
            <div className="galeria-item" key={i}>
              <img
                src={img}
                alt={`Imagen ${i + 1}`}
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