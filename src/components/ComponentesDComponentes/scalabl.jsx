import React from "react";
import "../../css/ExperienciaSistran.css";

export const Scalabl = () => {
  return (
    <div className="scalabl-container">
      <h1 className="titulo-scalabl">Experiencia en Scalabl</h1>

      <div className="scalabl-card">
        <p><strong>Rol:</strong> Desarrolladora Frontend</p>
        <p><strong>Duración:</strong> Ene 2022 – Jul 2022</p>
        <p><strong>Proyecto:</strong> Plataforma educativa global</p>
        <p><strong>Stack:</strong> React, jQuery, Python</p>

        <ul>
          <li>Interfaces adaptables para usuarios en +50 países.</li>
          <li>Integración con backend en Python.</li>
          <li>Colaboración con UX/UI en accesibilidad y navegación.</li>
          <li>Refactorización de módulos legacy para mejorar rendimiento.</li>
        </ul>

        <p><strong>Impacto:</strong> Mejora de la experiencia de aprendizaje y reducción del 30% en problemas de navegación.</p>
      </div>
    </div>
  );
};