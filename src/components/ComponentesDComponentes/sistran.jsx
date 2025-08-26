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
    body: `Sistask es una plataforma para gestionar proyectos e incidencias. Permite crear tickets, definir prioridad, adjuntar evidencias, asignar responsables y seguir el ciclo de vida hasta el cierre, con notificaciones y reportes.`,
  },
  {
    id: "arquitectura",
    title: "Arquitectura y funcionamiento",
    body: `• Frontend: React + React Router + i18n.\n• Estado: Context/RTK Query (o hooks hacia la API).\n• Backend (ejemplo): Node/Express o serverless con JWT.\n• Datos: Firestore o SQL (tickets, comentarios, adjuntos, estados).\n• Notificaciones: Eventos de cambio de estado → cola → email/in-app.\n• Seguridad: roles/permisos (reporter, agent, admin).`,
  },
  {
    id: "flujo",
    title: "Flujo de un ticket",
    body: `1) Login → 2) Crear ticket → 3) Asignar (automático o manual) → 4) Trabajo/Comentarios → 5) Revisión → 6) Resolución → 7) Cierre.\nCada transición queda registrada (quién/cuándo/qué) en el historial.`,
  },
  {
    id: "login",
    title: "Inicio de sesión",
    body: `1) Ve a /login.\n2) Ingresa correo y contraseña.\n3) Accedes al Dashboard con accesos rápidos y tus tickets recientes.`,
  },
  {
    id: "crear-ticket",
    title: "Crear un ticket",
    body: `1) Clic en “Crear ticket”.\n2) Completa: Proyecto, Tipo (Acceso/Incidente/Petición), Título, Descripción, Prioridad (Alta/Media/Baja), Adjuntos.\n3) Guardar. El ticket inicia en “Registrado” y notifica al equipo.`,
  },
  {
    id: "seguimiento",
    title: "Seguimiento y reportes",
    body: `• Filtra por estado, proyecto, prioridad, fecha.\n• Abre un ticket para ver descripción, historial, comentarios y adjuntos.\n• Reportes: volumen, cumplimiento SLA, tiempos por estado.`,
  },
  {
    id: "actualizar",
    title: "Actualizar, comentar y workflow",
    body: `• Comentarios: solicita/añade información.\n• Edición (si hay permisos): prioridad, descripción, asignación.\n• Workflow: reabrir, enviar info, cancelar, mover a revisión, resolver, cerrar.`,
  },
  {
    id: "estados",
    title: "Estados del ticket",
    body: `Registrado → En análisis → En revisión → Resuelto → Cerrado.\nLas reglas/roles definen quién puede ejecutar cada transición.`,
  },
  {
    id: "notificaciones",
    title: "Notificaciones",
    body: `Avisos por email e in-app ante cambios relevantes: nuevo comentario, actualización de estado, reasignación, etc.`,
  },
  {
    id: "buenas-practicas",
    title: "Buenas prácticas",
    body: `• Títulos claros y específicos.\n• Describir pasos para reproducir.\n• Priorizar correctamente.\n• Adjuntar evidencias.\n• Cerrar sólo con confirmación del solicitante.`,
  },
];

export const Sistran = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [tab, setTab] = useState("guia"); // iniciamos en "guia" para destacar la documentación
  const [openGuide, setOpenGuide] = useState("que-es");

  const volverAtras = () => navigate(-1);

  const indexLinks = useMemo(
    () =>
      GUIDE_SECTIONS.map((s) => ({
        id: s.id,
        label: s.title,
      })),
    []
  );

  return (
    <div className="sistran-container">
      {/* Volver */}
      <div className="volver-btn-container">
        <button className="btn-volver" onClick={volverAtras} aria-label={t("sistran.volver")}>
          {t("sistran.volver")}
        </button>
      </div>

      {/* Layout: izquierda índice / centro contenido */}
      <div className="sistran-layout container">
        {/* Índice izquierda */}
        <aside className="sistran-index" aria-label="Índice de la guía">
          <div className="index-inner">
            <div className="index-header">
              <img
                src={logoSistask}
                alt={t("sistran.logoAlt")}
                className="logo-sistran"
                loading="lazy"
              />
              <h2 className="index-title">Guía Sistask</h2>
            </div>

            <nav className="index-nav">
              {indexLinks.map((l) => (
                <button
                  key={l.id}
                  className={`index-link ${openGuide === l.id ? "active" : ""}`}
                  onClick={() => {
                    setTab("guia");
                    setTimeout(() => {
                      const summary = document.getElementById(`sum-${l.id}`);
                      if (summary) summary.scrollIntoView({ behavior: "smooth", block: "start" });
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

        {/* Contenido central */}
        <main className="sistran-main">
          <div className="sistran-card fade-in">
            <div className="header-sistran">
              <h1 className="titulo-animado">{t("sistran.titulo")}</h1>

              {/* Tabs arriba del contenido */}
              <div className="tabs-sistran" role="tablist" aria-label="Secciones">
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
                  aria-selected={tab === "resumen"}
                  className={tab === "resumen" ? "tab active" : "tab"}
                  onClick={() => setTab("resumen")}
                >
                  Resumen
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
            </div>

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
                    Centraliza tickets, asegura trazabilidad y facilita métricas/SLA. Menos fricción, más resolución.
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
                      Cómo crear, seguir y cerrar tickets; arquitectura; buenas prácticas.
                    </p>
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
        </main>
      </div>
    </div>
  );
};