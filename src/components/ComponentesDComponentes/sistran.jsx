// src/pages/Sistran/Sistran.jsx
import "../../css/ExperienciaSistran.css";
import logoSistask from "../../assets/imagenes/sistran-logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";

const GUIDE_SECTIONS = [
  {
    id: "que-es",
    title: "¿Qué es Sistask?",
    body: `Sistask es una plataforma de gestión de proyectos e incidencias. 
Permite crear tickets, asignarlos, establecer prioridades, adjuntar evidencias y 
seguir el ciclo de vida hasta su cierre, con notificaciones y reportes.`,
  },
  {
    id: "arquitectura",
    title: "Arquitectura y funcionamiento (alto nivel)",
    body: `• Frontend: React + Router + i18n. 
• Estado: Context/API hooks.
• Backend (ejemplo): Node/Express (o serverless) con autenticación JWT.
• Datos: Firestore/SQL (tickets, comentarios, estados, adjuntos).
• Notificaciones: eventos de cambio de estado → cola → email.
• Seguridad: roles/permisos (reporter, agent, admin).`,
  },
  {
    id: "flujo",
    title: "Flujo principal de desarrollo",
    body: `1) Autenticación → 2) Creación de ticket → 3) Asignación a agente → 
4) Trabajo/Comentarios → 5) Revisión de calidad → 6) Resolución → 7) Cierre.
Cada transición queda registrada en el historial (quién, cuándo, qué).`,
  },
  {
    id: "login",
    title: "Inicio de sesión",
    body: `1) Ve a /login. 2) Ingresa correo y contraseña. 3) Accede al Dashboard con tus tickets recientes y accesos rápidos.`,
  },
  {
    id: "crear-ticket",
    title: "Crear un ticket",
    body: `1) Clic en “Crear ticket”.
2) Completa: Proyecto, Tipo (Acceso/Incidente/Petición), Título, Descripción, Prioridad (Alta/Media/Baja), Adjuntos.
3) Guardar. El ticket queda en estado “Registrado” y notifica al equipo.`,
  },
  {
    id: "seguimiento",
    title: "Seguimiento y reportes",
    body: `• Usa filtros por estado, proyecto, prioridad o fecha.
• Abre un ticket para ver descripción, historial, comentarios y adjuntos.
• Panel de reportes para métricas (volumen, SLA, estados).`,
  },
  {
    id: "actualizar",
    title: "Actualizar, comentar y workflow",
    body: `• Comentarios: agrega información o solicita más datos.
• Edición (si tienes permisos): prioridad, descripción, asignación.
• Workflow: reabrir, enviar info, cancelar, mover a revisión, resolver, cerrar.`,
  },
  {
    id: "estados",
    title: "Estados del ticket",
    body: `Registrado → En análisis → En revisión → Resuelto → Cerrado.
Reglas y permisos definen quién puede ejecutar cada transición.`,
  },
  {
    id: "notificaciones",
    title: "Notificaciones",
    body: `Recibirás avisos por mail y en la app con cada cambio relevante (nuevo comentario, actualización de estado, asignación, etc.).`,
  },
  {
    id: "buenas-practicas",
    title: "Buenas prácticas (para usuarios y equipo)",
    body: `• Títulos claros y descriptivos. 
• Describir pasos para reproducir errores. 
• Priorizar correctamente. 
• Adjuntar evidencias (capturas/logs). 
• Cerrar solo cuando el reporter confirma la solución.`,
  },
];

export const Sistran = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [tab, setTab] = useState("resumen"); // resumen | guia | impacto
  const [openGuide, setOpenGuide] = useState(null); // id del item abierto

  const volverAtras = () => navigate(-1);

  const quickLinks = useMemo(
    () => [
      { id: "que-es", label: "¿Qué es?" },
      { id: "arquitectura", label: "Arquitectura" },
      { id: "flujo", label: "Flujo" },
      { id: "login", label: "Login" },
      { id: "crear-ticket", label: "Crear ticket" },
      { id: "seguimiento", label: "Seguimiento" },
      { id: "actualizar", label: "Actualizar" },
      { id: "estados", label: "Estados" },
      { id: "notificaciones", label: "Notificaciones" },
      { id: "buenas-practicas", label: "Buenas prácticas" },
    ],
    []
  );

  return (
    <div className="sistran-container">
      <div className="volver-btn-container">
        <button className="btn-volver" onClick={volverAtras} aria-label={t("sistran.volver")}>
          ← {t("sistran.volver")}
        </button>
      </div>

      <div className="sistran-grid">
        {/* Lado izquierdo: tarjeta principal */}
        <div className="sistran-card fade-in">
          <div className="header-sistran">
            <h1 className="titulo-animado">{t("sistran.titulo")}</h1>
            <img
              src={logoSistask}
              alt={t("sistran.logoAlt")}
              className="logo-sistran"
              loading="lazy"
            />
          </div>

          {/* Tabs */}
          <div className="tabs-sistran" role="tablist" aria-label="Secciones">
            <button
              role="tab"
              aria-selected={tab === "resumen"}
              className={tab === "resumen" ? "tab active" : "tab"}
              onClick={() => setTab("resumen")}
            >
              Resumen
            </button>
            <button
              role="tab"
              aria-selected={tab === "guia"}
              className={tab === "guia" ? "tab active" : "tab"}
              onClick={() => setTab("guia")}
            >
              Guía
            </button>
            <button
              role="tab"
              aria-selected={tab === "impacto"}
              className={tab === "impacto" ? "tab active" : "tab"}
              onClick={() => setTab("impacto")}
            >
              Impacto
            </button>
          </div>

          {/* Contenido por tab */}
          {tab === "resumen" && (
            <div className="info-sistran">
              <div className="kv">
                <p><strong>{t("sistran.labels.rol")}:</strong> {t("sistran.rol")}</p>
                <p><strong>{t("sistran.labels.duracion")}:</strong> {t("sistran.duracion")}</p>
                <p><strong>{t("sistran.labels.proyecto")}:</strong> {t("sistran.proyecto")}</p>
                <p><strong>{t("sistran.labels.stack")}:</strong> {t("sistran.stack")}</p>
              </div>
              <div className="highlight">
                <h3>¿Qué valor aporta?</h3>
                <p>
                  Plataforma centralizada para tickets con trazabilidad, métricas y
                  flujos de aprobación. Menos fricción, más foco en la resolución.
                </p>
              </div>
            </div>
          )}

          {tab === "impacto" && (
            <div className="impacto-sistran">
              <h3>{t("sistran.impacto.titulo")}</h3>
              <p>{t("sistran.impacto.p1")}</p>
              <p>{t("sistran.impacto.p2")}</p>
              <ul className="bullets">
                <li>{t("sistran.impacto.bullets.diseno")}</li>
                <li>{t("sistran.impacto.bullets.xp")}</li>
                <li>{t("sistran.impacto.bullets.componentes")}</li>
                <li>{t("sistran.impacto.bullets.adaptabilidad")}</li>
              </ul>
              <p className="mt">{t("sistran.impacto.p3")}</p>
              <ul className="metrics">
                <li>{t("sistran.impacto.metrics.productividad")}</li>
                <li>{t("sistran.impacto.metrics.visibilidad")}</li>
                <li>{t("sistran.impacto.metrics.colaboracion")}</li>
                <li>{t("sistran.impacto.metrics.escalabilidad")}</li>
              </ul>
              <div className="note">
                {t("sistran.impacto.cierre")}
              </div>
            </div>
          )}

          {tab === "guia" && (
            <div className="guia-sistran">
              <div className="guia-header">
                <div>
                  <h2>Guía de Usuario – Sistask</h2>
                  <p className="muted">
                    Aprende cómo crear, seguir y cerrar tickets. Incluye arquitectura y buenas prácticas.
                  </p>
                </div>
                <div className="guia-cta">
                  <a className="btn-primario" href="/assets/Guia_Sistask.pdf" download>
                    Descargar PDF
                  </a>
                  <button className="btn-secundario" onClick={() => window.print()}>
                    Imprimir
                  </button>
                </div>
              </div>

              <div className="guia-accordion">
                {GUIDE_SECTIONS.map((s) => (
                  <details
                    key={s.id}
                    className="guia-item"
                    open={openGuide === s.id}
                    onToggle={(e) => {
                      if (e.target.open) setOpenGuide(s.id);
                      else if (openGuide === s.id) setOpenGuide(null);
                    }}
                  >
                    <summary id={`sum-${s.id}`} aria-controls={`panel-${s.id}`}>
                      {s.title}
                    </summary>
                    <div id={`panel-${s.id}`} role="region" aria-labelledby={`sum-${s.id}`}>
                      {s.body.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lado derecho: Quick Start / índice anclado */}
        <aside className="sistran-aside">
        

          <div className="aside-card">
            <h4>Índice de la guía</h4>
            <nav className="anchor-nav">
              {quickLinks.map((l) => (
                <button
                  key={l.id}
                  className="anchor-link"
                  onClick={() => {
                    setTab("guia");
                    setTimeout(() => {
                      const el = document.getElementById(`sum-${l.id}`);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      setOpenGuide(l.id);
                    }, 0);
                  }}
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};