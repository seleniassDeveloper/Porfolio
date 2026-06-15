import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiHome, FiCalendar, FiUsers, FiBriefcase, FiDollarSign, FiBox, FiCpu, FiSettings, FiCheckCircle } from "react-icons/fi";
import "../css/ProyectoDashboard.css";

import inicio from "../Aura Pictures/Inicio.png";
import agenda from "../Aura Pictures/Agenda.png";
import teamImg from "../Aura Pictures/Gestion de personal .png";
import finanzas from "../Aura Pictures/Finanzas.png";
import workflow from "../Aura Pictures/Worflow.png";
import configuracion from "../Aura Pictures/configuracion .png";
import sheets from "../Aura Pictures/Sincronizar google sheets.png";

export default function ProyectoDashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [activeModule, setActiveModule] = useState("dashboard");

  const modules = [
    {
      id: "dashboard",
      icon: <FiHome />,
      label: t("dashboard.modules.dashboard.title"),
      desc: t("dashboard.modules.dashboard.desc"),
      points: [0,1,2,3].map(i => t(`dashboard.modules.dashboard.points.${i}`)),
      image: inicio
    },
    {
      id: "agenda",
      icon: <FiCalendar />,
      label: t("dashboard.modules.agenda.title"),
      desc: t("dashboard.modules.agenda.desc"),
      points: [0,1,2,3].map(i => t(`dashboard.modules.agenda.points.${i}`)),
      image: agenda
    },
    {
      id: "crm",
      icon: <FiUsers />,
      label: t("dashboard.modules.crm.title"),
      desc: t("dashboard.modules.crm.desc"),
      points: [0,1,2,3].map(i => t(`dashboard.modules.crm.points.${i}`)),
      image: sheets
    },
    {
      id: "team",
      icon: <FiBriefcase />,
      label: t("dashboard.modules.team.title"),
      desc: t("dashboard.modules.team.desc"),
      points: [0,1,2,3].map(i => t(`dashboard.modules.team.points.${i}`)),
      image: teamImg
    },
    {
      id: "finance",
      icon: <FiDollarSign />,
      label: t("dashboard.modules.finance.title"),
      desc: t("dashboard.modules.finance.desc"),
      points: [0,1,2,3].map(i => t(`dashboard.modules.finance.points.${i}`)),
      image: finanzas
    },
    {
      id: "inventory",
      icon: <FiBox />,
      label: t("dashboard.modules.inventory.title"),
      desc: t("dashboard.modules.inventory.desc"),
      points: [0,1,2,3].map(i => t(`dashboard.modules.inventory.points.${i}`)),
      image: finanzas // Sharing image for now as it shows metrics
    },
    {
      id: "automations",
      icon: <FiCpu />,
      label: t("dashboard.modules.automations.title"),
      desc: t("dashboard.modules.automations.desc"),
      points: [0,1,2,3].map(i => t(`dashboard.modules.automations.points.${i}`)),
      image: workflow
    },
    {
      id: "config",
      icon: <FiSettings />,
      label: t("dashboard.modules.config.title"),
      desc: t("dashboard.modules.config.desc"),
      points: [0,1,2,3].map(i => t(`dashboard.modules.config.points.${i}`)),
      image: configuracion
    }
  ];

  const currentModule = modules.find(m => m.id === activeModule) || modules[0];

  const highlights = t("dashboard.highlights", { returnObjects: true });
  const stackItems = t("dashboard.stack.items", { returnObjects: true });

  return (
    <div className="pd-container">
      {/* HERO */}
      <section className="pd-hero">
        <div className="pd-hero-text">
          <span className="pd-badge">{t("dashboard.badge")}</span>
          <h1 className="pd-title">{t("dashboard.title")}</h1>
          <p className="pd-subtitle">{t("dashboard.subtitle")}</p>
          <p className="pd-intro">{t("dashboard.intro")}</p>

          <ul className="pd-highlights">
            {(Array.isArray(highlights) ? highlights : []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <button
              className="pd-btn-secondary"
              onClick={() => navigate("/proyectos")}
            >
              {t("dashboard.back")}
            </button>
            <a 
              href="https://auradash.digital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pd-btn-primary"
            >
              {t("dashboard.visit", "Visitar sitio en vivo")} ↗
            </a>
          </div>
        </div>

        <div className="pd-hero-image">
          <img src={inicio} alt="Dashboard principal" />
        </div>
      </section>

      {/* MÓDULOS INTERACTIVOS */}
      <section className="pd-modules-section">
        <div className="pd-modules-header">
          <h2>Todo lo que necesitas, en un solo lugar</h2>
          <p>Explora los módulos integrados que construí para gestionar y escalar el negocio.</p>
        </div>

        <div className="pd-modules-layout">
          {/* SIDEBAR DE MÓDULOS */}
          <div className="pd-modules-sidebar">
            {modules.map((mod) => (
              <button
                key={mod.id}
                className={`pd-module-btn ${activeModule === mod.id ? 'active' : ''}`}
                onClick={() => setActiveModule(mod.id)}
              >
                <span className="pd-module-icon">{mod.icon}</span>
                <span className="pd-module-label">{mod.label}</span>
              </button>
            ))}
          </div>

          {/* CONTENIDO DEL MÓDULO */}
          <div className="pd-module-content">
            <div className="pd-module-text">
              <span className="pd-module-tag">{currentModule.label.toUpperCase()}</span>
              <h3>{currentModule.label}</h3>
              <p className="pd-module-desc">{currentModule.desc}</p>
              
              <ul className="pd-module-points">
                {currentModule.points.map((point, idx) => (
                  <li key={idx}>
                    <FiCheckCircle className="pd-check-icon" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pd-module-image">
              <img src={currentModule.image} alt={currentModule.label} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
