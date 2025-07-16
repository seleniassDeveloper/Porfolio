// src/components/Scalabl.jsx
import React from "react";
import "../css/Scalabl.css";
import scalablScreenshot from "../assets/imagenes/scalabl-screenshot.png"; // una captura de la web
import scalablLogo from "../assets/imagenes/scalabl-logo.png"; // logo si querés mostrarlo también

export const Scalabl = () => {
  return (
    <section className="scalabl-container">
      <div className="scalabl-content">
        <div className="scalabl-texto">
          <img src={scalablLogo} alt="Scalabl logo" className="logo" />
          <h2>Scalabl – Proyecto Real</h2>
         
          <a
            href="https://www.scalabl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-visitar"
          >
            Ver experiencia
          </a>
        </div>
        <div className="scalabl-img">
          <img
            src={scalablScreenshot}
            alt="Captura de Scalabl"
            className="screenshot"
          />
        </div>
      </div>
    </section>
  );
};