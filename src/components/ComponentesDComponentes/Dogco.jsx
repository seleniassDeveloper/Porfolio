// src/components/ComponentesDComponentes/Dogco.jsx
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/Dogco.css";

// Imágenes confirmadas
import homeImg from "../../assets/imagenes/dogco/homeImg.png";
import ownerDashImg from "../../assets/imagenes/dogco/dashboardDueno.png";
import walkerDashImg from "../../assets/imagenes/dogco/dashboardpaseador.png";
import loginImg from "../../assets/imagenes/dogco/loginImg.png";
import ownerProfileImg from "../../assets/imagenes/dogco/paseadorPerfil.png";

export default function Dogco() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const back = () => navigate(-1);

  // i18n helper con fallback
  const tArr = (k, fallback = []) => {
    const v = t(k, { returnObjects: true });
    return Array.isArray(v) ? v : fallback;
  };

  // === Guía/Descripción de lo que TIENE la plataforma (no roadmap) ===
  const guideSections = [
    {
      id: "base",
      title: "Base del proyecto y estructura",
      items: [
        { text: "Navbar y Footer básicos.", done: true },
        { text: "Rutas: Login, Registro, Selección de Rol, HomeDueño, HomePaseador.", done: true },
        { text: "Dependencias instaladas (RRD, MUI/Bootstrap, react-icons, yup/zod).", done: true },
        { text: "Estructura de carpetas (components/, pages/, context/, css/).", done: true },
      ],
      image: homeImg,
      caption: "Arquitectura base y navegación principal",
    },
    {
      id: "auth",
      title: "Autenticación y selección de rol",
      items: [
        { text: "Pantalla de Selección de Rol (Dueño / Paseador).", done: true },
        { text: "UI de Login y Registro con validación en frontend.", done: true },
        { text: "Guardar rol en Context y redirecciones mockeadas.", done: false },
      ],
      image: loginImg,
      caption: "Ingreso y alta de usuarios",
    },
    {
      id: "owner",
      title: "Dashboard Dueño",
      items: [
        { text: "Formulario de crear solicitud (fecha, hora, zona, mascota).", done: true },
        { text: "HomeDueño maquetado (mascotas mock, “Nueva Solicitud”, perfil).", done: true },
        { text: "Lista de solicitudes publicadas (mock).", done: false },
      ],
      image: ownerDashImg,
      caption: "Panel de gestión del dueño",
    },
    {
      id: "walker",
      title: "Dashboard Paseador",
      items: [
        { text: "Perfil paseador estilo social con reseñas.", done: true },
        { text: "Tarjeta de solicitud con datos de dueño y mascota.", done: false },
        { text: "Lista de solicitudes disponibles (mock).", done: false },
        { text: "Botón “Aceptar” (sin lógica real).", done: false },
      ],
      image: walkerDashImg,
      caption: "Panel de gestión del paseador",
    },
    {
      id: "commons",
      title: "Componentes comunes",
      items: [
        { text: "Card de mascota.", done: true },
        { text: "Formulario de perfil (Dueño y Paseador).", done: false },
        { text: "Card de solicitud.", done: false },
        { text: "Modal de calificación (mock).", done: false },
      ],
      image: ownerProfileImg,
      caption: "UI reusable y patrones de diseño",
    },
    {
      id: "chat",
      title: "Chat mock",
      items: [
        { text: "Pantalla de chat con dos usuarios.", done: false },
        { text: "Lista de conversaciones.", done: false },
        { text: "Área de input con envío simulado.", done: false },
      ],
      image: walkerDashImg,
      caption: "Comunicación y coordinación del paseo (mock)",
    },
    {
      id: "ux",
      title: "UX, responsive y mensajes de estado",
      items: [
        { text: "Responsive para móvil y tablet.", done: true },
        { text: "Estilos finales y paleta de colores.", done: true },
        { text: "Mensajes de estado (sin datos).", done: true },
      ],
      image: homeImg,
      caption: "Calidad visual y experiencia consistente",
    },
  ];

  // Fallbacks para overview/features si faltan claves i18n
  const overviewFallback = [
    { title: "Conexión rápida", text: "Match por zona y disponibilidad." },
    { title: "Gestión completa", text: "Dashboards, solicitudes, perfiles, reseñas." },
    { title: "Seguro y claro", text: "Perfiles verificados y seguimiento del paseo (mock)." },
  ];
  const ownerFeaturesFallback = [
    "Publicar solicitud (fecha, hora, zona, mascota).",
    "Recibir postulaciones de paseadores.",
    "Buscar paseadores por zona y calificación.",
    "Ver/editar perfil y mascotas.",
  ];
  const walkerFeaturesFallback = [
    "Perfil público con bio, fotos y reseñas.",
    "Listado de solicitudes disponibles (mock).",
    "Postularse y aceptar paseos (mock).",
    "Historial de paseos y calificaciones.",
  ];

  return (
    <div className="dogco">
      {/* Topbar */}
      <div className="dogco-topbar">
        <button className="dogco-back" onClick={back}>
          {t("dogco.back", "← Volver")}
        </button>
        <span className="dogco-pill">DogCo</span>
      </div>

      <div className="container">
        {/* HERO */}
        <header className="dogco-hero">
          <div className="dogco-hero-content">
            <h1 className="dogco-title">
              {t("dogco.hero.title", "La app para pasear perros")}{" "}
              <span>{t("dogco.hero.highlight", "sin complicaciones")}</span>
            </h1>
            <p className="dogco-sub">
              {t(
                "dogco.hero.subtitle",
                "Conecta dueños responsables con paseadores verificados. Publicá una solicitud o encontrá paseadores cerca tuyo."
              )}
            </p>
            <div className="dogco-cta-row">
              <a
                className="dogco-btn dogco-btn-primary"
                href="#guia"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("guia")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("dogco.hero.cta", "Ver guía")}
              </a>
              <span className="dogco-badge">
                {t("dogco.hero.badge", "Dashboard de Dueño y Paseador")}
              </span>
            </div>
          </div>
          <div className="dogco-hero-media">
            <img src={homeImg} alt={t("dogco.alt.home", "Pantalla de inicio DogCo")} />
          </div>
        </header>

        {/* OVERVIEW */}
        <section className="dogco-section">
          <h2 className="dogco-h2">{t("dogco.overview.title", "¿Qué es DogCo?")}</h2>
          <p className="dogco-p">
            {t(
              "dogco.overview.body",
              "Plataforma que conecta dueños de mascotas con paseadores: como dueño publicás una solicitud o buscás por zona; como paseador, creás tu perfil, aplicás a solicitudes y gestionás tus paseos desde tu panel."
            )}
          </p>

          <div className="dogco-grid-3">
            {tArr("dogco.overview.cards", overviewFallback).map((c, i) => (
              <div className="dogco-card" key={i}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES por rol */}
        <section className="dogco-section">
          <h2 className="dogco-h2">{t("dogco.features.title", "Características principales")}</h2>
          <div className="dogco-feature">
            <div className="dogco-feature-block">
              <h4>{t("dogco.features.owner.title", "Para dueños")}</h4>
              <ul className="dogco-list">
                {tArr("dogco.features.owner.items", ownerFeaturesFallback).map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="dogco-feature-block">
              <h4>{t("dogco.features.walker.title", "Para paseadores")}</h4>
              <ul className="dogco-list">
                {tArr("dogco.features.walker.items", walkerFeaturesFallback).map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DASHBOARDS */}
        <section className="dogco-section">
          <h2 className="dogco-h2">{t("dogco.dashboards.title", "Dashboards")}</h2>
          <div className="dogco-gallery">
            <figure>
              <img src={ownerDashImg} alt={t("dogco.alt.ownerDash", "Dashboard de Dueño")} />
              <figcaption>{t("dogco.dashboards.owner", "Dashboard de Dueño")}</figcaption>
            </figure>
            <figure>
              <img src={walkerDashImg} alt={t("dogco.alt.walkerDash", "Dashboard de Paseador")} />
              <figcaption>{t("dogco.dashboards.walker", "Dashboard de Paseador")}</figcaption>
            </figure>
          </div>
        </section>

        {/* GUÍA DE LA PLATAFORMA (usa la info del “roadmap”, pero como descripción) */}
        <section className="dogco-section" id="guia">
          <h2 className="dogco-h2">Guía de la plataforma</h2>

          <div className="dogco-guide">
            {guideSections.map((sec) => (
              <article key={sec.id} className="dogco-card dogco-guide-block">
                <div className="dogco-guide-media">
                  <img src={sec.image} alt={sec.caption} />
                </div>
                <div className="dogco-guide-body">
                  <h3 className="dogco-guide-title">{sec.title}</h3>
                  <ul className="dogco-checklist">
                    {sec.items.map((it, i) => (
                      <li key={i} className={it.done ? "done" : "pending"}>
                        <span className="status-dot" aria-hidden />
                        <span>{it.text}</span>
                        <span className={`chip ${it.done ? "success" : "warn"}`}>
                          {it.done ? "Listo" : "En progreso"}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {sec.caption && <p className="dogco-muted">{sec.caption}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ROLES */}
        <section className="dogco-section">
          <h2 className="dogco-h2">{t("dogco.roles.title", "Roles y responsabilidades")}</h2>
          <div className="dogco-grid-2">
            <div className="dogco-role">
              <img className="dogco-role-img" src={ownerProfileImg} alt={t("dogco.alt.ownerProfile", "Perfil de dueño")} />
              <h4>{t("dogco.roles.owner.title", "Dueño")}</h4>
              <ul className="dogco-list">
                {tArr("dogco.roles.owner.items", [
                  "Gestionar mascotas y solicitudes.",
                  "Revisar perfiles y calificaciones.",
                  "Aceptar propuestas y coordinar paseos.",
                ]).map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="dogco-role">
              <img className="dogco-role-img" src={ownerProfileImg} alt={t("dogco.alt.walkerProfile", "Perfil de paseador")} />
              <h4>{t("dogco.roles.walker.title", "Paseador")}</h4>
              <ul className="dogco-list">
                {tArr("dogco.roles.walker.items", [
                  "Completar perfil con datos y reseñas.",
                  "Postularse a solicitudes disponibles.",
                  "Confirmar paseo y recibir calificación.",
                ]).map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <footer className="dogco-footer">
          <a className="dogco-btn dogco-btn-primary" href="#top">
            {t("dogco.footer.cta", "Volver arriba")}
          </a>
        </footer>
      </div>
    </div>
  );
}