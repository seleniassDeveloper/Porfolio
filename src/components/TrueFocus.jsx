import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiCalendar, FiArrowRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "../css/TrueFocus.css";

export const TrueFocus = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="hero-hero-wrapper">
      <motion.div
        className="hero-badge-pill"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge-dot" />
        <span>{i18n.language === "en" ? "Available for New Projects & Roles" : "Disponible para Proyectos y Roles Frontend"}</span>
      </motion.div>

      <motion.h1
        className="hero-main-title"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Selenia Sánchez
      </motion.h1>

      <motion.p
        className="hero-role-title"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {i18n.language === "en"
          ? "Frontend Developer & Digital Product Specialist"
          : "Desarrolladora Frontend & Especialista en Productos Digitales"}
      </motion.p>

      <motion.p
        className="hero-description-tag"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {i18n.language === "en"
          ? "Specialized in React, TypeScript, SaaS platforms, ERPs & AI Automations."
          : "Especializada en React, TypeScript, plataformas SaaS, ERPs y automatizaciones con Inteligencia Artificial."}
      </motion.p>

      <motion.div
        className="hero-actions-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <a
          href="/cv-selenia-sanchez.pdf"
          download="CV_Selenia_Sanchez_Frontend_Developer.pdf"
          className="btn-hero-cv"
        >
          <FiDownload /> {i18n.language === "en" ? "Download CV (PDF)" : "Descargar CV (PDF)"}
        </a>

        <a href="#auditoria" className="btn-hero-book">
          <FiCalendar /> {i18n.language === "en" ? "Schedule a Call" : "Agendar una Cita"} <FiArrowRight />
        </a>
      </motion.div>
    </div>
  );
};

export default TrueFocus;