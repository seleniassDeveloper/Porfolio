import React from "react";
import "../css/ProyectosReales.css";
import scalablImg from "../assets/imagenes/scalabl-logo.png";
import sistaskImg from "../assets/imagenes/sistran-logo.png";

export function ProyectosReales() {
  const proyectos = [
    {
      nombre: "Scalabl",
      url: "https://www.scalabl.com",
      descripcion: "Plataforma educativa global de innovación y emprendimiento.",
      imagen: scalablImg,
    },
    {
      nombre: "Sistask (Sistran)",
      url: "https://sistask.sistran.com",
      descripcion: "Sistema de gestión de tareas y workflows para consultoras de seguros.",
      imagen: sistaskImg,
    },
  ];

  return (
    <div className="proyectos-reales-container">
      <h2>Proyectos Reales</h2>
      <div className="tarjetas-proyectos">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="tarjeta-proyecto">
            <img src={proyecto.imagen} alt={proyecto.nombre} />
         
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}