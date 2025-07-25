import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProyectosReales.css";
import scalablImg from "../assets/imagenes/scalabl-logo.png";
import sistaskImg from "../assets/imagenes/sistran-logo.png";
import { Sistran } from "../components/ComponentesDComponentes/sistran";

export function ProyectosReales() {

   const navigate = useNavigate();

  const proyectos = [
    {
      nombre: "experiencia-scalabl ",
      url: "https://www.scalabl.com",
      descripcion: "Plataforma educativa global de innovación y emprendimiento.",
      imagen: scalablImg,
    },
    {
      nombre: "/experiencia-sistran",
      url: "https://sistask.sistran.com",
      descripcion: "Sistema de gestión de tareas y workflows para consultoras de seguros.",
      imagen: sistaskImg,
    },
  ];

  const handleNavigate = (dato) => {
    navigate(dato)
    console.log('navegacion', dato)
  }

  return (
    <div className="proyectos-reales-container">
      <h2>Proyectos </h2>
      <div className="tarjetas-proyectos">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="tarjeta-proyecto">
            <img src={proyecto.imagen} alt={proyecto.nombre} />
         
            <p>{proyecto.descripcion}</p>
            <a onClick={() => handleNavigate(proyecto.nombre)} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}