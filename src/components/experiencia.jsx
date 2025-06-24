import React, { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "../../src/App.css";

export const Experiencia = () => {
  const tarjetasRef = useRef([]);
  const [visible, setVisibles] = useState([false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          setVisibles((prev) => {
            const updated = [...prev];
            updated[index] = entry.isIntersecting;
            return updated;
          });
        });
      },
      { threshold: 0.3 }
    );

    tarjetasRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      tarjetasRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = tarjetasRef.current.indexOf(entry.target);
        if (index !== -1) {
          setVisibles((prev) => {
            const updated = [...prev];
            updated[index] = entry.isIntersecting;
            return updated;
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  tarjetasRef.current.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => {
    tarjetasRef.current.forEach((el) => {
      if (el) observer.unobserve(el);
    });
  };
}, []);



  return (
    <div className="experiencia-container">
      <div className="experiencia-flex">
        {/* EXPERIENCIA */}
      <div
          ref={(el) => (tarjetasRef.current[0] = el)}
          className={`tarjeta animated-side left ${
            visible[0] ? "slide-in" : "slide-out"
          }`}
        >
          <h3>
            <FaBriefcase className="icono" /> Experiencia Profesional
          </h3>

          <div className="item">
            <h4>Sistran – Frontend Developer</h4>
            <span className="fecha">2022 – Actualidad</span>
            <p>
              Stack: React, Axios, Bootstrap, MUI, ReactFlow, Cytoscape, React
              Beautiful DnD
            </p>
            <p>
              Desarrolladora frontend principal y única en el proyecto{" "}
              <strong>Sistask</strong>, una herramienta interna de gestión de
              tareas tipo Jira utilizada por más de 150 usuarios reales en
              equipos de desarrollo, QA, soporte y gestión de Argentina,
              Colombia y Ecuador.
            </p>
            <ul>
              <li>Lideré el frontend desde cero junto al equipo backend.</li>
              <li>
                Interfaz dinámica para configuración por proyecto e issue type.
              </li>
              <li>Lógica condicional según estados del workflow.</li>
              <li>Visualización de flujos con ReactFlow y Cytoscape.</li>
              <li>Sistema de permisos por rol y proyecto.</li>
              <li>
                Mi trabajo fue clave en el éxito y escalabilidad regional del
                sistema.
              </li>
            </ul>
          </div>

          <div className="item">
            <h4>Scalabl – Frontend Developer</h4>
            <span className="fecha">Ene 2022 – Jul 2022</span>
            <p>
              Plataforma educativa global de <strong>Scalabl</strong>, con
              presencia en más de 50 países.
            </p>
            <ul>
              <li>Interfaces en React, jQuery y Python.</li>
              <li>
                Trabajo con equipo UX/UI para accesibilidad y navegación fluida.
              </li>
              <li>Integración de frontend con backend Python.</li>
              <li>
                Refactorización para mejorar performance y mantenibilidad.
              </li>
              <li>
                Impacto directo en miles de usuarios de América, Europa y
                África.
              </li>
            </ul>
          </div>
        </div>

        {/* ESTUDIOS */}
 <div
          ref={(el) => (tarjetasRef.current[1] = el)}
          className={`tarjeta ms-lg-3 animated-side right ${
            visible[1] ? "slide-in" : "slide-out"
          }`}
        >
          <h3>
            <FaGraduationCap className="icono" /> Formación Académica
          </h3>
          <div className="item">
            <h4>Teclab University</h4>
            <span className="fecha">Tecnicatura en Desarrollo Web</span>
          </div>
          <div className="item">
            <h4>Universidad Da Vinci</h4>
            <span className="fecha">Diseño y Desarrollo Web</span>
          </div>

          <div className="d-lg-flex">
            <div>
              <h3 className="subtitulo">Cursos Complementarios</h3>
              <ul>
                <li>JavaScript / React – CoderHouse</li>
                <li>JavaScript Avanzado – EducaciónIT</li>
                <li>React – EdTeam</li>
                <li>Diseño UX/UI – Digital House</li>
              </ul>
            </div>
            <div className="ps-lg-5">
              <h3 className="subtitulo">Certificaciones en curso</h3>
              <ul>
                <li>HarvardX – Intro to Computer Science</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="subtitulo">Idiomas</h3>
            <ul>
              <li>Inglés – Intermedio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
