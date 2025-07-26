import React from "react";
import "../../css/ExperienciaSistran.css";
import logoSistask from "../../assets/imagenes/sistran-logo.png";
import { useNavigate } from "react-router-dom";

export const Sistran = () => {

    const navigate = useNavigate();
    const volverAtras = () => navigate(-1);

    return (
        <>

            <div className="sistran-container">
                <div className="volver-btn-container my-2">
                    <button className="btn-volver" onClick={volverAtras}>← Volver</button>
                </div>
                <div className="d-flex justify-content-center">   <div className="sistran-card fade-in">
                    <div className="header-sistran d-flex align-items-center justify-content-between">
                        <h1 className="titulo-animado">Experiencia en Sistran</h1>
                        <img src={logoSistask} alt="Logo Sistask" className="logo-sistran" />
                    </div>

                    <div className="info-sistran">
                        <p><strong>Rol:</strong> Desarrolladora Frontend</p>
                        <p><strong>Duración:</strong> 2022/06 - 2025/07</p>
                        <p><strong>Proyecto:</strong> Sistask – Sistema interno de gestión de tareas (estilo Jira)</p>
                        <p><strong>Stack:</strong> React, Axios, Bootstrap, MUI, ReactFlow, Cytoscape, React Beautiful DnD</p>
                    </div>




                    <div className="impacto-sistran">
                        <h3>Impacto del Software</h3>
                        <p>
                            <strong>Sistask</strong> está siendo implementado en <strong>17 países de América Latina</strong>, lo que representa un salto estratégico en la digitalización de procesos internos en Sistran. Este sistema permite una gestión más eficiente y estandarizada en equipos distribuidos en Argentina, Colombia, Ecuador y el resto de la región.
                        </p>

                        <p>
                            Formo parte del equipo responsable del desarrollo de <strong>Sistask</strong>, liderando el trabajo del <strong>frontend completo</strong>, desde la construcción técnica hasta la <strong>experiencia de usuario (UX)</strong> y la <strong>interfaz visual (UI)</strong>. Este trabajo incluyó:
                        </p>

                        <ul>
                            <li>🎨 Definición y desarrollo de un diseño limpio, escalable y accesible.</li>
                            <li>🧭 Implementación de una experiencia intuitiva para usuarios técnicos y no técnicos.</li>
                            <li>🛠️ Desarrollo de componentes personalizados con React, MUI y Bootstrap.</li>
                            <li>🌐 Adaptabilidad por país, proyecto y rol de usuario.</li>
                        </ul>

                        <p>
                            El impacto del sistema incluye:
                        </p>

                        <ul>
                            <li>⏱️ <strong>Productividad operativa:</strong> reducción de tiempos en gestión de tareas.</li>
                            <li>📈 <strong>Visibilidad:</strong> seguimiento visual de flujos y estados en tiempo real.</li>
                            <li>🤝 <strong>Colaboración:</strong> unificación de criterios y procesos entre países.</li>
                            <li>🧩 <strong>Escalabilidad:</strong> preparado para soportar múltiples estructuras organizativas.</li>
                        </ul>

                        <p>
                            Gracias a este trabajo en equipo, Sistran cuenta con una herramienta moderna, robusta y adaptable que potencia su expansión regional y fortalece su eficiencia interna.
                        </p>
                    </div>

                </div></div>

            </div>
        </>

    );
};