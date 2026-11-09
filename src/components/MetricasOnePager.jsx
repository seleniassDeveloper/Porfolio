import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiDownload,
  FiCheck,
  FiZap,
  FiClock,
  FiUsers,
  FiCheckCircle,
  FiExternalLink,
  FiLayers,
  FiTrendingUp,
  FiCornerDownRight,
  FiBriefcase
} from "react-icons/fi";
import "../css/MetricasOnePager.css";

// Assets
import YosiendoFeliz from "../assets/imagenes/yosiendoFeliz.jpeg";
import sistaskImg from "../assets/imagenes/sistask-dashboard.png";
import auraInicio from "../Aura Pictures/Inicio.png";
import cvPdf from "../assets/cv-selenia-sanchez.pdf";

export const MetricasOnePager = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const isEn = i18n.language === "en";

  const roleChecklist = [
    { title: "Discovery" },
    { title: "Scope" },
    { title: "Product" },
    { title: "Architecture" },
    { title: "Frontend" },
    { title: "Backend" },
    { title: "Integrations" },
    { title: "Deployment" }
  ];

  const timelineSteps = [
    { num: "01", title: "Discovery" },
    { num: "02", title: "Scope" },
    { num: "03", title: "Build" },
    { num: "04", title: "Testing" },
    { num: "05", title: "Launch" },
    { num: "06", title: "Iteration" }
  ];

  return (
    <section className="project-impact-section" id="metricas-impacto">
      <div className="impact-container">

        {/* 1. TOP HEADER */}
        <header className="impact-header">
          <div className="impact-brand">
            <span className="brand-title">SELENIA SÁNCHEZ</span>
            <span className="brand-badge">PROJECT IMPACT</span>
          </div>

          <div className="impact-header-actions">
            <a href="#selected-projects" className="impact-link-btn">
              {isEn ? "View Case Studies" : "Ver Casos de Estudio"} <FiArrowRight />
            </a>
            <a
              href={cvPdf}
              download="CV_Selenia_Sanchez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="impact-btn-download"
            >
              <FiDownload /> {isEn ? "Download One-Pager" : "Descargar One-Pager"}
            </a>
          </div>
        </header>

        {/* 2. OVERVIEW / HERO BLOCK */}
        <div className="impact-overview-grid">
          {/* HERO LEFT: PITCH & HEADLINE */}
          <div className="overview-pitch">
            <span className="pitch-tag">FULL-STACK DEVELOPER</span>
            <h1 className="pitch-headline">
              I build business systems from <br />
              <span className="headline-gradient">problem → scope → production.</span>
            </h1>
            <p className="pitch-sub">
              {isEn
                ? "I design and develop custom web applications, automate processes, and turn complex ideas into simple, scalable systems that create real impact."
                : "Diseño y desarrollo aplicaciones web a medida, automatizo procesos y transformo ideas complejas en sistemas simples y escalables que generan impacto real."}
            </p>

            <div className="pitch-actions">
              <a href="#selected-projects" className="btn-primary-glow">
                {isEn ? "View my projects" : "Ver proyectos"} <FiArrowRight />
              </a>
              <a
                href={cvPdf}
                download="CV_Selenia_Sanchez.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-border"
              >
                <FiDownload /> {isEn ? "Download One-Pager" : "Descargar One-Pager"}
              </a>
            </div>
          </div>

          {/* HERO CENTER: SELENIA PHOTO & QUOTE */}
          <div className="overview-portrait-box">
            <div className="portrait-frame">
              <img src={YosiendoFeliz} alt="Selenia Sánchez" className="portrait-image" />
            </div>
            <div className="portrait-quote">
              <span className="quote-icon">“</span>
              <p>
                {isEn
                  ? "I combine product thinking, technical execution and automation to deliver systems that work."
                  : "Combino visión de producto, ejecución técnica y automatización para entregar sistemas que funcionan."}
              </p>
            </div>
          </div>

          {/* HERO RIGHT: 4 STAT CARDS */}
          <div className="overview-stats-grid">
            <div className="stat-box">
              <div className="stat-top">
                <FiLayers className="stat-ico" />
                <span className="stat-num">3+</span>
              </div>
              <span className="stat-lbl">{isEn ? "Systems shipped" : "Sistemas entregados"}</span>
            </div>

            <div className="stat-box">
              <div className="stat-top">
                <FiClock className="stat-ico" />
                <span className="stat-num">7 mos</span>
              </div>
              <span className="stat-lbl">{isEn ? "Largest project to production" : "Proyecto más grande a producción"}</span>
            </div>

            <div className="stat-box">
              <div className="stat-top">
                <FiUsers className="stat-ico" />
                <span className="stat-num">20+</span>
              </div>
              <span className="stat-lbl">{isEn ? "Initial SaaS users" : "Usuarias iniciales SaaS"}</span>
            </div>

            <div className="stat-box">
              <div className="stat-top">
                <FiTrendingUp className="stat-ico" />
                <span className="stat-num">100+</span>
              </div>
              <span className="stat-lbl">{isEn ? "Hours saved through automation" : "Horas ahorradas por automatización"}</span>
            </div>
          </div>
        </div>

        {/* 3. SELECTED PROJECTS (2 CARDS SIDE-BY-SIDE) */}
        <div className="selected-projects-block" id="selected-projects">
          <div className="block-title-row">
            <span className="section-label">{isEn ? "SELECTED PROJECTS" : "PROYECTOS SELECCIONADOS"}</span>
          </div>

          <div className="projects-dual-grid">
            {/* CARD 1: DRP */}
            <article className="project-feature-card">
              <div className="pcard-header">
                <span className="pcard-category">OPERATIONS SYSTEM</span>
                <h3 className="pcard-name">DRP</h3>
                <p className="pcard-tagline">
                  {isEn
                    ? "Custom system to manage business operations, automate workflows and centralize information."
                    : "Sistema a medida para gestionar operaciones, automatizar flujos y centralizar información."}
                </p>
                <div className="pcard-meta">
                  <span className="pill-production"><FiCheckCircle /> IN PRODUCTION</span>
                </div>
              </div>

              <div className="pcard-media">
                <img src={sistaskImg} alt="DRP Operations System" />
              </div>

              <div className="pcard-metrics-row">
                <div className="pmetric">
                  <span className="pm-val">50+</span>
                  <span className="pm-lbl">Users</span>
                </div>
                <div className="pmetric">
                  <span className="pm-val">7 mos</span>
                  <span className="pm-lbl">to production</span>
                </div>
                <div className="pmetric">
                  <span className="pm-val">12+</span>
                  <span className="pm-lbl">workflows automated</span>
                </div>
                <div className="pmetric">
                  <span className="pm-val">80%</span>
                  <span className="pm-lbl">reduction in manual work</span>
                </div>
              </div>

              <div className="pcard-action">
                <button className="pcard-btn" onClick={() => navigate("/proyectos")}>
                  {isEn ? "View case study" : "Ver caso de estudio"} <FiArrowRight />
                </button>
              </div>
            </article>

            {/* CARD 2: SALON SAAS */}
            <article className="project-feature-card">
              <div className="pcard-header">
                <span className="pcard-category">SUBSCRIPTION SAAS</span>
                <h3 className="pcard-name">Salon SaaS</h3>
                <p className="pcard-tagline">
                  {isEn
                    ? "Web application for salon owners to manage appointments, clients and payments."
                    : "Aplicación web para salones: gestión de agenda, clientes y pagos."}
                </p>
                <div className="pcard-meta">
                  <span className="pill-production"><FiCheckCircle /> IN PRODUCTION</span>
                </div>
              </div>

              <div className="pcard-media">
                <img src={auraInicio} alt="Salon SaaS Aura Dash" />
              </div>

              <div className="pcard-metrics-row">
                <div className="pmetric">
                  <span className="pm-val">20+</span>
                  <span className="pm-lbl">Initial users</span>
                </div>
                <div className="pmetric">
                  <span className="pm-val">70%</span>
                  <span className="pm-lbl">Active users</span>
                </div>
                <div className="pmetric">
                  <span className="pm-val">85%</span>
                  <span className="pm-lbl">Retention rate</span>
                </div>
                <div className="pmetric">
                  <span className="pm-val">60%</span>
                  <span className="pm-lbl">Fewer support requests</span>
                </div>
              </div>

              <div className="pcard-action">
                <button className="pcard-btn" onClick={() => navigate("/proyecto-dashboard")}>
                  {isEn ? "View case study" : "Ver caso de estudio"} <FiArrowRight />
                </button>
              </div>
            </article>
          </div>
        </div>

        {/* 4. PROBLEM → SYSTEM → RESULT & TIMELINE ROW */}
        <div className="bottom-impact-grid">
          
          {/* PROBLEM -> SYSTEM -> RESULT */}
          <div className="psr-block">
            <span className="section-label">PROBLEM → SYSTEM → RESULT</span>
            <div className="psr-columns-grid">
              <div className="psr-col">
                <span className="psr-step-tag red">PROBLEM</span>
                <p>{isEn ? "Manual & fragmented processes create operational friction." : "Procesos manuales y fragmentados generan fricción operativa."}</p>
              </div>
              <div className="psr-col">
                <span className="psr-step-tag purple">SYSTEM</span>
                <p>{isEn ? "Custom dashboard + automated workflows + API integrations." : "Dashboard a medida + flujos automatizados + integración de APIs."}</p>
              </div>
              <div className="psr-col">
                <span className="psr-step-tag green">RESULT</span>
                <p>{isEn ? "Measurable business impact, 80% manual work cut, zero data loss." : "Impacto de negocio medible, 80% menos trabajo manual, cero pérdida."}</p>
              </div>
            </div>
          </div>

          {/* TIMELINE FROM PROBLEM TO PRODUCTION */}
          <div className="timeline-block">
            <span className="section-label">FROM PROBLEM TO PRODUCTION</span>
            <div className="timeline-steps-track">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="tstep">
                  <span className="tstep-num">{step.num}</span>
                  <span className="tstep-title">{step.title}</span>
                </div>
              ))}
            </div>
            <div className="timeline-duration-bar">
              <div className="dur-line" />
              <span className="dur-tag">7 MONTHS</span>
            </div>
          </div>

        </div>

        {/* 5. MY ROLE & OWNERSHIP BLOCK */}
        <div className="ownership-block">
          <div className="ownership-header">
            <span className="section-label">MY ROLE & OWNERSHIP</span>
            <p className="ownership-sub">
              {isEn
                ? "Worked independently + collaborating directly with client teams."
                : "Trabajo independiente + colaboración directa con equipos de clientes."}
            </p>
          </div>

          <div className="ownership-tags-grid">
            {roleChecklist.map((item, idx) => (
              <div key={idx} className="role-check-tag">
                <FiCheck className="check-ico" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CONVERSION CTA TO SSSTUDIO */}
        <div className="ssstudio-agency-banner">
          <div className="agency-banner-text">
            <h3>{isEn ? "Have a system or process that needs to be built?" : "¿Tienes un sistema o proceso que necesitas construir?"}</h3>
            <p>{isEn ? "SSStudio turns business complexity into production-ready software." : "SSStudio convierte la complejidad de negocio en software listo para producción."}</p>
          </div>
          <a
            href="https://ssstudio.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-agency-work"
          >
            {isEn ? "Work with SSStudio" : "Trabajar con SSStudio"} <FiExternalLink />
          </a>
        </div>

      </div>
    </section>
  );
};

export default MetricasOnePager;


