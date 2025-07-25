import React from "react";
import "../../css/ExperienciaSistran.css";
import logoSistask from "../../assets/imagenes/scalabl-logo.png";
import { useNavigate } from "react-router-dom";

export const Sistran = () => {
  const navigate = useNavigate();

  return (
    <div className="scalabl-container">
      <button className="btn-volver" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="scalabl-card fade-in">
        <div className="header-scalabl d-flex align-items-center justify-content-between">
          <h1 className="titulo-scalabl">Experiencia en Scalabl</h1>
          <img src={logoSistask} alt="Logo Scalabl" className="logo-sistran" />
        </div>

        <div className="info-scalabl">
          <p><strong>Rol:</strong> Desarrolladora Frontend</p>
          <p><strong>Duración:</strong> Ene 2022 – Jul 2022</p>
          <p><strong>Proyecto:</strong> Plataforma educativa global presente en más de 50 países</p>
          <p><strong>Stack:</strong> React, jQuery, Python</p>
        </div>

        <div className="tareas-scalabl">
          <h3>Responsabilidades</h3>
          <ul>
            <li>🟣 Desarrollo de interfaces interactivas para usuarios en más de 50 países.</li>
            <li>🧬 Integración eficiente del frontend con backend en Python.</li>
            <li>🎯 Colaboración con equipo UX/UI en accesibilidad y navegación.</li>
            <li>🔄 Refactorización de módulos para mejorar rendimiento y mantenibilidad.</li>
          </ul>
        </div>

        <div className="impacto-scalabl">
          <h3>Impacto</h3>
          <p>
            Scalabl es una plataforma educativa global que promueve el emprendimiento y la innovación. Mi trabajo contribuyó directamente a:
          </p>
          <ul>
            <li>🧠 <strong>Reducción del 30%</strong> en problemas de navegación.</li>
            <li>⚡ Mejora significativa en velocidad de carga y fluidez.</li>
            <li>🌍 Mejor experiencia para miles de usuarios en distintos continentes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};