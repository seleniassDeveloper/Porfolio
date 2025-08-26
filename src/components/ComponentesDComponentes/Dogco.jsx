// src/components/ComponentesDComponentes/Dogco.jsx
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../css/Dogco.css' 

// ✅ Si ya tienes las imágenes listas, descomenta e importa.
import homeImg from "../assets/imagenes/dogco/homeImg.png";

// import ownerDashImg from "../../assets/imagenes/dogco/dogco-dashboard-dueno.png";
// import walkerDashImg from "../../assets/imagenes/dogco/dogco-dashboard-paseador.png";
// import loginImg from "../../assets/imagenes/dogco/dogco-login.png";
// import ownerProfileImg from "../../assets/imagenes/dogco/dogco-perfil-dueno.png";
// import walkerProfileImg from "../../assets/imagenes/dogco/dogco-perfil-paseador.png";
// import requestListImg from "../../assets/imagenes/dogco/dogco-dashboard-dueno2.png";
// import liveWalkImg from "../../assets/imagenes/dogco/dogco-dashboard-dueno.png";

export default function Dogco() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const back = () => navigate(-1);

  // Helpers i18n seguros
  const tArr = (k) => {
    const v = t(k, { returnObjects: true });
    return Array.isArray(v) ? v : [];
  };

  // Roadmap (coherente con tu lista de tareas)
  const roadmap = [
    {
      day: "Día 1",
      title: "Base del proyecto y estructura",
      items: [
        { text: "Navbar y Footer básicos.", done: true },
        { text: "Configurar rutas principales: Login, Registro, Selección de Rol, HomeDueño, HomePaseador.", done: true },
        { text: "Instalar dependencias: react-router-dom, bootstrap o MUI, react-icons, yup/zod.", done: true },
        { text: "Crear proyecto React con estructura (components/, pages/, context/, css/).", done: true },
      ],
    },
    {
      day: "Día 2",
      title: "Pantallas de autenticación y rol",
      items: [
        { text: "Guardar rol en estado (Context) y mockear redirecciones.", done: false },
        { text: "Pantalla de Selección de Rol (Dueño / Paseador).", done: true },
        { text: "UI de Login y Registro (formulario validado en frontend).", done: true },
      ],
    },
    {
      day: "Día 3",
      title: "Dashboard Dueño",
      items: [
        { text: "Lista de solicitudes publicadas (mock).", done: false },
        { text: "Formulario de crear solicitud (fecha, hora, zona, mascota).", done: true },
        {
          text: "Maquetar HomeDueño (mascotas mock, botón “Nueva Solicitud”, tarjeta de perfil).",
          done: true,
        },
      ],
    },
    {
      day: "Día 4",
      title: "Dashboard Paseador",
      items: [
        { text: "Tarjeta de solicitud con datos de dueño y mascota.", done: false },
        { text: "Lista de solicitudes disponibles (mock).", done: false },
        { text: "Botón “Aceptar” (sin lógica real).", done: false },
        { text: "Perfil paseador estilo social (reseñas, datos, reviews).", done: true },
      ],
    },
    {
      day: "Día 5",
      title: "Componentes comunes",
      items: [
        { text: "Formulario de perfil (Dueño y Paseador).", done: false },
        { text: "Card de mascota.", done: true },
        { text: "Card de solicitud.", done: false },
        { text: "Modal de calificación (mock).", done: false },
      ],
    },
    {
      day: "Día 6",
      title: "Chat mock",
      items: [
        { text: "Pantalla de chat estático con dos usuarios.", done: false },
        { text: "Lista de conversaciones.", done: false },
        { text: "Área de input con envío simulado.", done: false },
      ],
    },
    {
      day: "Día 7",
      title: "Ajustes y pruebas visuales",
      items: [
        { text: "Responsive para móvil y tablet.", done: true },
        { text: "Estilos finales y paleta de colores.", done: true },
        { text: "Mensajes de estado (sin datos).", done: true },
      ],
    },
  ];

  return (
    <div className="dogco ">

     
    {/* Topbar */}
      <div className="dogco-topbar">
        <button className="dogco-back" onClick={back}>
          {t("dogco.back", "← Volver")}
        </button>
        <span className="dogco-pill">DogCo</span>
      </div>
   <div className="container">
      {/* Hero */}
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
              href="#guias"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("guias")?.scrollIntoView({ behavior: "smooth" });
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
          <div className="dogco-hero-placeholder">
            {/* Placeholder si no tienes imagen aún */}
            <span>DogCo</span>
          </div>
        </div>
      </header>

      {/* Qué es */}
      <section className="dogco-section">
        <h2 className="dogco-h2">{t("dogco.overview.title", "¿Qué es DogCo?")}</h2>
        <p className="dogco-p">
          {t(
            "dogco.overview.body",
            "Una plataforma que conecta dueños de mascotas con paseadores. Como dueño, publicás una solicitud y recibís postulaciones o buscás paseadores por zona. Como paseador, creás tu perfil, aplicás a solicitudes y gestionás tus paseos desde tu dashboard."
          )}
        </p>

        <div className="dogco-grid-3">
          {(tArr("dogco.overview.cards").length
            ? tArr("dogco.overview.cards")
            : [
                { title: "Conexión rápida", text: "Match entre dueños y paseadores por zona y disponibilidad." },
                { title: "Gestión completa", text: "Dashboards para roles, solicitudes, perfiles y reseñas." },
                { title: "Seguro y claro", text: "Perfiles verificados y seguimiento del paseo (mock)." },
              ]
          ).map((c, i) => (
            <div className="dogco-card" key={i}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="dogco-section">
        <h2 className="dogco-h2">{t("dogco.features.title", "Características principales")}</h2>
        <div className="dogco-feature">
          <div className="dogco-feature-block">
            <h4>{t("dogco.features.owner.title", "Para dueños")}</h4>
            <ul className="dogco-list">
              {(tArr("dogco.features.owner.items").length
                ? tArr("dogco.features.owner.items")
                : [
                    "Publicar nueva solicitud (fecha, hora, zona, mascota).",
                    "Recibir postulaciones de paseadores.",
                    "Buscar paseadores por zona y calificación.",
                    "Ver/editar perfil y mascotas.",
                  ]
              ).map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
          <div className="dogco-feature-block">
            <h4>{t("dogco.features.walker.title", "Para paseadores")}</h4>
            <ul className="dogco-list">
              {(tArr("dogco.features.walker.items").length
                ? tArr("dogco.features.walker.items")
                : [
                    "Perfil público con bio, fotos y reseñas.",
                    "Listado de solicitudes disponibles (mock).",
                    "Postularse y aceptar paseos (mock).",
                    "Historial de paseos y calificaciones.",
                  ]
              ).map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dashboards */}
      <section className="dogco-section">
        <h2 className="dogco-h2">{t("dogco.dashboards.title", "Dashboards")}</h2>
        <div className="dogco-gallery">
          <figure>
            {/* <img src={ownerDashImg} alt={t("dogco.alt.ownerDash", "Dashboard de Dueño")} /> */}
            <div className="dogco-img-ph" />
            <figcaption>{t("dogco.dashboards.owner", "Dashboard de Dueño")}</figcaption>
          </figure>
          <figure>
            {/* <img src={walkerDashImg} alt={t("dogco.alt.walkerDash", "Dashboard de Paseador")} /> */}
            <div className="dogco-img-ph" />
            <figcaption>{t("dogco.dashboards.walker", "Dashboard de Paseador")}</figcaption>
          </figure>
        </div>
      </section>

      {/* Guía (paso a paso) */}
      <section className="dogco-section" id="guias">
        <h2 className="dogco-h2">{t("dogco.guide.title", "Guía rápida")}</h2>

        <div className="dogco-steps">
          {[
            {
              // img: loginImg,
              alt: t("dogco.alt.login", "Login"),
              title: t("dogco.guide.steps.0.title", "Creá tu cuenta y elegí tu rol"),
              text: t("dogco.guide.steps.0.text", "Registrate como Dueño o Paseador. Se guarda el rol en estado (mock)."),
            },
            {
              // img: walkerProfileImg,
              alt: t("dogco.alt.walkerProfile", "Perfil paseador"),
              title: t("dogco.guide.steps.1.title", "Completá tu perfil"),
              text: t("dogco.guide.steps.1.text", "Bio, zona, disponibilidad, fotos y preferencia de tamaños de mascotas."),
            },
            {
              // img: requestListImg,
              alt: t("dogco.alt.requests", "Solicitudes"),
              title: t("dogco.guide.steps.2.title", "Publicá o postuláte"),
              text: t("dogco.guide.steps.2.text", "Como dueño, creá una solicitud. Como paseador, postulate a las disponibles."),
            },
            {
              // img: liveWalkImg,
              alt: t("dogco.alt.liveWalk", "Paseo en vivo"),
              title: t("dogco.guide.steps.3.title", "Coordiná y calificá"),
              text: t("dogco.guide.steps.3.text", "Chat mock para coordinar y calificar al finalizar (mock)."),
            },
          ].map((s, i) => (
            <div className="dogco-step" key={i}>
              {/* {s.img && <img src={s.img} alt={s.alt} />} */}
              <div className="dogco-step-ph" aria-hidden />
              <h4>{i + 1}. {s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="dogco-section">
        <h2 className="dogco-h2">{t("dogco.roles.title", "Roles y responsabilidades")}</h2>
        <div className="dogco-grid-2">
          <div className="dogco-role">
            {/* <img src={ownerProfileImg} alt={t("dogco.alt.ownerProfile", "Perfil de dueño")} /> */}
            <div className="dogco-role-ph" />
            <h4>{t("dogco.roles.owner.title", "Dueño")}</h4>
            <ul className="dogco-list">
              {(tArr("dogco.roles.owner.items").length
                ? tArr("dogco.roles.owner.items")
                : [
                    "Gestionar mascotas y solicitudes.",
                    "Revisar perfiles y calificaciones.",
                    "Aceptar propuestas y coordinar paseos.",
                  ]
              ).map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
          <div className="dogco-role">
            {/* <img src={walkerProfileImg} alt={t("dogco.alt.walkerProfile", "Perfil de paseador")} /> */}
            <div className="dogco-role-ph" />
            <h4>{t("dogco.roles.walker.title", "Paseador")}</h4>
            <ul className="dogco-list">
              {(tArr("dogco.roles.walker.items").length
                ? tArr("dogco.roles.walker.items")
                : [
                    "Completar perfil con datos y reseñas.",
                    "Postularse a solicitudes disponibles.",
                    "Confirmar paseo y recibir calificación.",
                  ]
              ).map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap (por días) */}
      <section className="dogco-section">
        <h2 className="dogco-h2">Roadmap (7 días)</h2>

        <div className="dogco-roadmap">
          {roadmap.map((d, idx) => (
            <article className="dogco-day" key={idx}>
              <header className="dogco-day-head">
                <span className="dogco-day-badge">{d.day}</span>
                <h3>{d.title}</h3>
              </header>
              <ul className="dogco-checklist">
                {d.items.map((it, i) => (
                  <li key={i} className={it.done ? "done" : ""}>
                    <span className="box" aria-hidden>{it.done ? "✓" : ""}</span>
                    <span>{it.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
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