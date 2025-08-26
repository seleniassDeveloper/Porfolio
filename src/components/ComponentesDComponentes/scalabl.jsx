
import { useNavigate } from "react-router-dom";
import logoScalabl from "../../assets/imagenes/scalabl-logo.png";
import "../../css/ExperienciaScalabl.css";
import { useTranslation } from "react-i18next";

export const Scalabl = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const volverAtras = () => navigate(-1);

  return (
    <div className="scalabl-container">
      <div className="sc-topbar">
        <button className="sc-btn-back" onClick={volverAtras}>
          {t("scalabl.volver") || "Volver"}
        </button>
      </div>

      {/* HERO / HEADER */}
      <header className="sc-hero">
        <div className="sc-hero-content">
          <h1 className="sc-title">
            Aprende de <span>negocios</span>, todos los días
          </h1>
          <p className="sc-subtitle">
            Comunidades de aprendizaje con contenidos curados, sesiones en vivo,
            retos prácticos y acompañamiento. Un sistema pensado para que la
            actualización sea continua y accionable.
          </p>

          <div className="sc-cta-row">
            <a href="https://scalabl.com" target="_blank" rel="noreferrer" className="sc-btn-primary">
              Hazte miembro
            </a>
            <span className="sc-badge">+2500 personas formadas en Scalabl®</span>
          </div>
        </div>

        <div className="sc-hero-media">
       
          <img src={logoScalabl} alt={t("scalabl.logoAlt") || "Logo Scalabl"} className="sc-logo-hero" />
        </div>
      </header>

      {/* QUÉ ES / OVERVIEW */}
      <section className="sc-section container">
        <h2 className="sc-h2">¿Qué es Scalabl?</h2>
        <p className="sc-p">
          Scalabl es una <strong>plataforma de comunidades de aprendizaje</strong> orientada a
          negocios. Combina una landing pública de adquisición (marketing, SEO, contenido)
          con un ecosistema privado para miembros: <em>currículas vivas</em>, biblioteca
          de recursos, calendario de sesiones, foros, retos y seguimiento de progreso.
        </p>

        <div className="sc-grid-3">
          <div className="sc-card">
            <h3>Comunidad</h3>
            <p>Espacios temáticos, foros, networking y mentorías guiadas.</p>
          </div>
          <div className="sc-card">
            <h3>Contenido curado</h3>
            <p>Lecciones breves, playbooks y plantillas listas para usar.</p>
          </div>
          <div className="sc-card">
            <h3>Práctica y feedback</h3>
            <p>Retos, revisiones en vivo y evidencias de aprendizaje.</p>
          </div>
        </div>
      </section>

      {/* LANDING & PLATAFORMA (DESARROLLO) */}
      <section className="sc-section">
        <h2 className="sc-h2">Desarrollo de la landing y la plataforma</h2>

        <div className="sc-feature">
          <div className="sc-feature-block">
            <h4>Landing (acceso público)</h4>
            <ul className="sc-list">
              <li>Arquitectura SPA con Vite + React (performance y DX).</li>
              <li>Secciones: Hero con valor, prueba social, Comunidades, Qué son, Cómo funcionan, Pricing y CTA persistente.</li>
              <li>SEO técnico: metatags, OG/Twitter cards, sitemap y estructura semántica.</li>
              <li>UI consistente: paleta morado/verde neón, botones round, sombras suaves, tipografías legibles.</li>
              <li>Integraciones: YouTube embebido, WhatsApp CTA y newsletter.</li>
            </ul>
          </div>
          <div className="sc-feature-block">
            <h4>Plataforma (área de miembros)</h4>
            <ul className="sc-list">
              <li>Auth por roles (miembro, mentor, admin) con guardas de ruta.</li>
              <li>Módulos: Biblioteca, Calendario, Retos/Entregas, Foros/Comentarios, Progreso.</li>
              <li>Panel de admin para curricula, publicaciones, sesiones y reportes.</li>
              <li>Analítica de engagement (retención, actividad semanal, finalización de retos).</li>
              <li>Arquitectura sugerida: React (FE) + API Node/Express o serverless + DB (PostgreSQL / Firestore).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RESPONSABILIDADES (TU ROL) */}
      <section className="sc-section">
        <h2 className="sc-h2">Mi rol y responsabilidades</h2>
        <ul className="sc-list">
          <li>Diseño UI/UX de la landing y componentes reutilizables.</li>
          <li>Implementación responsive con foco en performance (CLS, LCP, TTI).</li>
          <li>Integración de video, formularios, analítica y CTA de conversión.</li>
          <li>Definición de arquitectura FE, estado y rutas protegidas.</li>
          <li>Propuesta de módulos clave para la comunidad y flujos de miembro.</li>
        </ul>
      </section>

      {/* IMPACTO / RESULTADOS */}
      <section className="sc-section">
        <h2 className="sc-h2">Impacto y resultados</h2>
        <div className="sc-stats">
          <div className="sc-stat">
            <span className="sc-stat-num">+45%</span>
            <span className="sc-stat-label">mejora en conversión landing</span>
          </div>
          <div className="sc-stat">
            <span className="sc-stat-num">90+</span>
            <span className="sc-stat-label">eventos/mes gestionados</span>
          </div>
          <div className="sc-stat">
            <span className="sc-stat-num">~1.2s</span>
            <span className="sc-stat-label">LCP en dispositivos móviles</span>
          </div>
        </div>
        <p className="sc-p muted">
          *Métricas estimadas según benchmarks y pruebas locales. Ajustables a datos reales del entorno productivo.
        </p>
      </section>

      {/* TECNOLOGÍAS / STACK */}
      <section className="sc-section">
        <h2 className="sc-h2">Stack propuesto</h2>
        <div className="sc-pill-row">
          <span className="sc-pill">Vite + React</span>
          <span className="sc-pill">React Router</span>
          <span className="sc-pill">Context / Zustand</span>
          <span className="sc-pill">Node/Express API</span>
          <span className="sc-pill">PostgreSQL / Firestore</span>
          <span className="sc-pill">Auth por roles</span>
          <span className="sc-pill">YouTube / WhatsApp</span>
          <span className="sc-pill">SEO + Analytics</span>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="sc-footer d-flex justify-content-end">
        <a href="https://scalabl.com" target="_blank" rel="noreferrer" className="sc-btn-primary sc-btn-lg">
          Visitar Scalabl
        </a>
      </footer>
    </div>
  );
};