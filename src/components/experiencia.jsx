import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "../../src/App.css";

export const Experiencia = () => {
  return (
    <div className="experiencia-container  ">
      <div className="experiencia-flex ">
        {/* EXPERIENCIA */}
        <div className="tarjeta  ">
          <div>
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
                tareas y flujos de trabajo tipo Jira, utilizada activamente por
                más de 150 usuarios reales distribuidos en equipos de
                desarrollo, QA, soporte, consultoría y gestión de proyectos en
                filiales de Argentina, Colombia y Ecuador.
              </p>
              <ul>
                <li>
                  Lideré la implementación completa del frontend desde cero, en
                  colaboración directa con el equipo backend y analistas
                  funcionales.
                </li>
                <li>
                  Construí interfaces dinámicas y modulares para configurar
                  campos personalizados, pantallas y flujos por proyecto e issue
                  type.
                </li>
                <li>
                  Implementé interacción avanzada con lógica de negocio
                  condicional basada en estados del workflow (visibilidad,
                  edición, obligatoriedad).
                </li>
                <li>
                  Integré herramientas de visualización como ReactFlow y
                  Cytoscape para renderizar flujos complejos y relaciones de
                  estados.
                </li>
                <li>
                  Diseñé un sistema de permisos por rol y proyecto, con
                  validaciones para prevenir accesos no autorizados.
                </li>
                <li>
                  Participé en decisiones de arquitectura técnica y funcional
                  del sistema, alineando las necesidades del negocio con la
                  experiencia de usuario.
                </li>
                <li>
                  🧠 Impacto: Mi trabajo fue clave para lanzar y evolucionar una
                  plataforma crítica multiusuario, escalable y en uso productivo
                  diario por decenas de equipos en tres países.
                </li>
              </ul>
            </div>

            {/* SCALABL */}
            <div className="item">
              <h4>Scalabl – Frontend Developer</h4>
              <span className="fecha">Ene 2022 – Jul 2022</span>
              <p>
                Desarrollo de funcionalidades para la plataforma educativa
                global de <strong>Scalabl</strong>, presente en +50 países.
              </p>
              <ul>
                <li>
                  💻 Interfaces responsivas con React + Python + HTML/CSS.
                </li>
                <li>
                  🎨 Trabajo conjunto con UX/UI para mejorar navegación y
                  accesibilidad.
                </li>
                <li>
                  🔗 Integración de frontend con servicios y endpoints del
                  backend.
                </li>
                <li>🚀 Refactorización y mejora de performance.</li>
                <li>
                  🌐 Impacto directo en usuarios de América, Europa y África.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ESTUDIOS */}
        <div className="tarjeta ms-lg-3">
          <FaGraduationCap className="icono" />
          <h3>Formación Académica</h3>
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
                <li>HarvardX n to Computer Science</li>
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
