import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "../../src/App.css"

export const Experiencia = () => {
    return (
        <div className="experiencia-container ">

            <div className="d-flex">
                {/* EXPERIENCIA */}
                <div className="tarjeta experiencia">
                    <FaBriefcase className="icono" />
                    <h3>Experiencia Profesional</h3>
                    <div className="item">
                        <h4>Sistran – Frontend Developer</h4>
                        <span className="fecha">2022 – Actualidad</span>
                        <ul>
                            <li>Desarrollo de plataformas internas con React y JavaScript.</li>
                            <li>Diseño de interfaces orientadas a experiencia de usuario.</li>
                            <li>Consumo de APIs REST y trabajo en equipo con backend.</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h4>Scalable Frontend-layout – Práctica</h4>
                        <span className="fecha">2021</span>
                        <ul>
                            <li>Diseño de layouts modulares y responsivos.</li>
                            <li>Corrección de errores y pruebas de componentes.</li>
                        </ul>
                    </div>
                </div>

                {/* ESTUDIOS */}
                <div className="tarjeta estudios">
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

                    <h3 className="subtitulo">Cursos Complementarios</h3>
                    <ul>
                        <li>JavaScript / React – CoderHouse</li>
                        <li>JavaScript Avanzado – EducaciónIT</li>
                        <li>React – EdTeam</li>
                        <li>Diseño UX/UI – Digital House</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}