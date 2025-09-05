// src/pages/Dinosaurios.jsx

import "../css/Dinosaurios.css";
import trex from "../../assets/imagenes/trex-right.png";
import dino1 from "../../assets/imagenes/disnoporfolio/dino1.jpg";
import dino2 from "../../assets/imagenes/disnoporfolio/dino2.png";
import dino3 from "../../assets/imagenes/disnoporfolio/dino3.jpg";
import dino4 from "../../assets/imagenes/disnoporfolio/dino4.jpg";
import dino5 from "../../assets/imagenes/disnoporfolio/dino5.jpg";
import dino6 from "../../assets/imagenes/disnoporfolio/dino6.jpg";

export default function Dinosaurios() {
  return (
    <main className="dino-page">

      {/* HERO */}
      <section className="dino-hero-bg">
        <div className="dino-hero container">
          <div className="dino-hero-left">
            <h1 className="hero-title">
              Sumate a la búsqueda de <span className="watch-live">nuevas especies</span><br />
              en la Patagonia Argentina
            </h1>

            <p className="dino-description">
              Este sitio documenta las campañas paleontológicas del equipo de APASUR & LACEV,
              con base en el Museo Bernardino Rivadavia (Buenos Aires). Desde 2002, han descubierto más
              de 40 nuevas especies y publicado 5 portadas en <em>Nature</em>. Ahora te invitan a
              participar, votar, donar y ver excavaciones en vivo.
            </p>

            <div className="dino-buttons">
              <button className="green">Explorá las campañas</button>
              <button className="outline">Ver hallazgos</button>
            </div>
          </div>

          <div className="dino-hero-right">
            <img src={trex} alt="T-Rex render" className="trex-sticker" />
          </div>
        </div>
      </section>

      {/* GALERÍA EDITORIAL */}
      <section className="dino-galeria container">
        <h2 className="galeria-title">Descubrimientos y campañas destacadas</h2>
        <div className="galeria-grid">
          {[dino1, dino2, dino3, dino4, dino5, dino6].map((img, i) => (
            <div className="galeria-item" key={i}>
              <img src={img} alt={`Imagen ${i + 1}`} className="sticker-image" />
              <span className="galeria-label">Campaña #{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}