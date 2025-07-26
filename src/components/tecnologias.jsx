import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
  SiPython,
  SiTypescript,
} from "react-icons/si";



const tecnologias = [
    { nombre: "HTML", icono: <SiHtml5 />, clase: "html" },
    { nombre: "CSS", icono: <SiCss3 />, clase: "css" },
    { nombre: "JavaScript", icono: <SiJavascript />, clase: "javascript" },
    { nombre: "React", icono: <SiReact />, clase: "react" },
    { nombre: "GitHub", icono: <SiGithub />, clase: "github" },
    { nombre: "Python", icono: <SiPython />, clase: "python" },
    { nombre: "TypeScript", icono: <SiTypescript />, clase: "typescript" },
  ];
  

export const Tecnologias = () => {
  return (
   <div className="tecnologias-container">
      <h2 className="titulo-tecnologias">Tecnologías</h2>
      <div className="grid-tecnologias">
        {tecnologias.map((tech, index) => (
          <div
            className={`carta-tecnologia ${tech.clase} ${
              tech.nombre === "React" ? "destacar-react" : ""
            }`}
            key={index}
          >
            <div className="icono-tecnologia">{tech.icono}</div>
            <p>{tech.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
