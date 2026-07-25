import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiCalendar, FiArrowRight, FiGlobe } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "../css/TrueFocus.css";

export const TrueFocus = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="editorial-hero-container">
      {/* GIANT BACKGROUND EDITORIAL TITLE */}
      <div className="hero-bg-watermark" aria-hidden="true">
        PORTFOLIO
      </div>

      <div className="editorial-hero-grid">
        {/* LEFT COLUMN: INTRO & NAME */}
        <div className="hero-left-content">
          <motion.span
            className="hero-script-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </motion.span>

          <motion.h1
            className="hero-editorial-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            SELENIA SÁNCHEZ
          </motion.h1>

          <motion.h2
            className="hero-editorial-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            FRONTEND DEVELOPER & DIGITAL PRODUCT CREATOR
          </motion.h2>

          <motion.p
            className="hero-editorial-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {i18n.language === "en"
              ? "I design and build high-performance web applications, SaaS platforms, CRM/ERPs and AI automations that combine technical strategy with seamless user experience."
              : "Diseño y desarrollo aplicaciones web de alto rendimiento, plataformas SaaS, CRM/ERPs y automatizaciones con IA que combinan estrategia técnica con una experiencia de usuario fluida."}
          </motion.p>

          <motion.div
            className="hero-location-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <FiGlobe /> <span>AVAILABLE WORLDWIDE · ARGENTINA (ART)</span>
          </motion.div>

          <motion.div
            className="hero-editorial-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a
              href="/cv-selenia-sanchez.pdf"
              download="CV_Selenia_Sanchez_Frontend_Developer.pdf"
              className="btn-editorial-primary"
            >
              <FiDownload /> {i18n.language === "en" ? "DOWNLOAD CV" : "DESCARGAR CV"}
            </a>

            <a href="#auditoria" className="btn-editorial-secondary">
              <FiCalendar /> {i18n.language === "en" ? "BOOK A CALL" : "AGENDAR CITA"} <FiArrowRight />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: METRICS & STATS */}
        <div className="hero-right-stats">
          <div className="stat-block">
            <span className="stat-number">4.5+</span>
            <span className="stat-label">YEARS FORMATION & EXP</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-block">
            <span className="stat-number">6+</span>
            <span className="stat-label">SELECTED PROJECTS</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-block">
            <span className="stat-number">100%</span>
            <span className="stat-label">PRODUCTION READY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrueFocus;