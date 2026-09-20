import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  FiTrendingUp, 
  FiTarget, 
  FiShoppingCart, 
  FiPieChart, 
  FiSliders, 
  FiPlayCircle, 
  FiCheckCircle, 
  FiCpu, 
  FiEye, 
  FiBarChart2, 
  FiSearch 
} from "react-icons/fi";
import "../css/ProyectoIAVisibility.css";

import reporteSOV from "../assets/iaVisibility/reporteSOV.png";
import diagnosticoCompetitivo from "../assets/iaVisibility/diagnosticoCompetitivo.png";
import intencionCompra from "../assets/iaVisibility/intencionCompra.png";
import posicionamiento from "../assets/iaVisibility/posicionamiento.png";
import identidad from "../assets/iaVisibility/identidad.png";
import demoVideo from "../assets/iaVisibility/demo.mov";

export default function ProyectoIAVisibility() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [activeModule, setActiveModule] = useState("sov");

  const modules = [
    {
      id: "sov",
      icon: <FiTrendingUp />,
      label: t("iaVisibility.modules.sov.title", "Reporte Share of Voice (SOV)"),
      desc: t("iaVisibility.modules.sov.desc", "Monitoreo integral de visibilidad y menciones de marca en respuestas de IA."),
      points: [0, 1, 2, 3].map(i => t(`iaVisibility.modules.sov.points.${i}`)),
      image: reporteSOV,
      isVideo: false
    },
    {
      id: "competitivo",
      icon: <FiTarget />,
      label: t("iaVisibility.modules.competitivo.title", "Diagnóstico Competitivo"),
      desc: t("iaVisibility.modules.competitivo.desc", "Benchmarking y análisis comparativo de ventajas frente a competidores."),
      points: [0, 1, 2, 3].map(i => t(`iaVisibility.modules.competitivo.points.${i}`)),
      image: diagnosticoCompetitivo,
      isVideo: false
    },
    {
      id: "compra",
      icon: <FiShoppingCart />,
      label: t("iaVisibility.modules.compra.title", "Intención de Compra"),
      desc: t("iaVisibility.modules.compra.desc", "Medición de recomendaciones de marca en escenarios de compra."),
      points: [0, 1, 2, 3].map(i => t(`iaVisibility.modules.compra.points.${i}`)),
      image: intencionCompra,
      isVideo: false
    },
    {
      id: "posicionamiento",
      icon: <FiPieChart />,
      label: t("iaVisibility.modules.posicionamiento.title", "Posicionamiento de Marca"),
      desc: t("iaVisibility.modules.posicionamiento.desc", "Matriz de percepciones, atributos y análisis de sentimiento."),
      points: [0, 1, 2, 3].map(i => t(`iaVisibility.modules.posicionamiento.points.${i}`)),
      image: posicionamiento,
      isVideo: false
    },
    {
      id: "identidad",
      icon: <FiSliders />,
      label: t("iaVisibility.modules.identidad.title", "Identidad & Configuración"),
      desc: t("iaVisibility.modules.identidad.desc", "Gestión de marcas, competidores y escenarios de auditoría."),
      points: [0, 1, 2, 3].map(i => t(`iaVisibility.modules.identidad.points.${i}`)),
      image: identidad,
      isVideo: false
    },
    {
      id: "demo",
      icon: <FiPlayCircle />,
      label: t("iaVisibility.modules.demo.title", "Demostración en Video"),
      desc: t("iaVisibility.modules.demo.desc", "Recorrido en directo por las funciones centrales de IA Visibility."),
      points: [0, 1, 2].map(i => t(`iaVisibility.modules.demo.points.${i}`)),
      video: demoVideo,
      isVideo: true
    }
  ];

  const currentModule = modules.find(m => m.id === activeModule) || modules[0];
  const highlights = t("iaVisibility.highlights", { returnObjects: true });

  return (
    <div className="iav-container">
      {/* HERO SECTION */}
      <section className="iav-hero">
        <div className="iav-hero-text">
          <span className="iav-badge">
            <FiCpu className="iav-badge-icon" />
            {t("iaVisibility.badge", "Plataforma de Analytics & Brand Intelligence para IA")}
          </span>
          <h1 className="iav-title">{t("iaVisibility.title", "IA Visibility: Medición y Posicionamiento en Modelos de IA")}</h1>
          <p className="iav-subtitle">
            {t("iaVisibility.subtitle", "Sistema de auditoría y monitoreo continuo de visibilidad de marcas en modelos de inteligencia artificial (ChatGPT, Gemini, Perplexity, Claude y Copilot).")}
          </p>
          <p className="iav-intro">
            {t("iaVisibility.intro", "Plataforma SaaS de inteligencia de marca que audita cómo las principales soluciones de Inteligencia Artificial presentan, comparan y recomiendan a tu empresa.")}
          </p>

          <ul className="iav-highlights">
            {(Array.isArray(highlights) ? highlights : [
              "Monitoreo multi-modelo en tiempo real (ChatGPT, Gemini, Claude, Perplexity y Copilot)",
              "Medición automatizada de Share of Voice (SOV) e Intención de Compra",
              "Diagnóstico competitivo automatizado de fortalezas y debilidades",
              "Detección proactiva de alucinaciones y oportunidades de posicionamiento"
            ]).map((item, idx) => (
              <li key={idx}>
                <FiCheckCircle className="iav-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="iav-action-buttons">
            <button
              className="iav-btn-secondary"
              onClick={() => navigate("/proyectos")}
            >
              {t("iaVisibility.back", "Volver a proyectos")}
            </button>
            <button
              className="iav-btn-primary"
              onClick={() => {
                setActiveModule("demo");
                const el = document.getElementById("iav-modules");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FiPlayCircle style={{ fontSize: "1.1rem" }} />
              {t("iaVisibility.visit", "Ver demo interactiva")}
            </button>
          </div>
        </div>

        <div className="iav-hero-image">
          <img src={reporteSOV} alt="Reporte Share of Voice IA Visibility" />
          <div className="iav-hero-image-overlay">
            <span className="iav-live-tag">
              <span className="iav-pulse-dot"></span> AUDITORÍA EN TIEMPO REAL
            </span>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS GRID */}
      <section className="iav-features-grid">
        <div className="iav-feature-card">
          <div className="iav-feature-icon">
            <FiTrendingUp />
          </div>
          <h3>Share of Voice (SOV) en IA</h3>
          <p>
            Análisis automatizado del porcentaje de presencia de la marca en respuestas generadas por modelos de IA frente a competidores del rubro.
          </p>
          <div className="iav-feature-tags">
            <span className="iav-feature-tag">Share of Voice</span>
            <span className="iav-feature-tag">Métricas LLM</span>
            <span className="iav-feature-tag">% de Mención</span>
          </div>
        </div>

        <div className="iav-feature-card">
          <div className="iav-feature-icon">
            <FiTarget />
          </div>
          <h3>Diagnóstico Competitivo</h3>
          <p>
            Comparación directa de ventajas, fortalezas y debilidades percibidas por los distintos modelos masivos de IA en tiempo real.
          </p>
          <div className="iav-feature-tags">
            <span className="iav-feature-tag">Benchmarking</span>
            <span className="iav-feature-tag">Competencia</span>
            <span className="iav-feature-tag">SWOT IA</span>
          </div>
        </div>

        <div className="iav-feature-card">
          <div className="iav-feature-icon">
            <FiShoppingCart />
          </div>
          <h3>Intención de Compra</h3>
          <p>
            Evaluación de la frecuencia con la que los modelos recomiendan la marca en escenarios de decisión de compra o contratación directa.
          </p>
          <div className="iav-feature-tags">
            <span className="iav-feature-tag">Recomendación Directa</span>
            <span className="iav-feature-tag">Lead Intent</span>
            <span className="iav-feature-tag">Conversión</span>
          </div>
        </div>

        <div className="iav-feature-card">
          <div className="iav-feature-icon">
            <FiPieChart />
          </div>
          <h3>Posicionamiento & Percepción</h3>
          <p>
            Auditoría de atributos clave asociados a la marca, análisis de sentimiento y detección proactiva de alucinaciones conceptuales.
          </p>
          <div className="iav-feature-tags">
            <span className="iav-feature-tag">Percepción</span>
            <span className="iav-feature-tag">Sentiment Analysis</span>
            <span className="iav-feature-tag">Brand Control</span>
          </div>
        </div>
      </section>

      {/* MÓDULOS INTERACTIVOS CON CAPTURAS REALES */}
      <section className="iav-modules-section" id="iav-modules">
        <div className="iav-modules-header">
          <h2>Explora los Módulos de IA Visibility</h2>
          <p>Haz clic en cada sección para visualizar las pantallas reales del sistema de analítica y auditoría.</p>
        </div>

        <div className="iav-modules-layout">
          {/* SIDEBAR DE MÓDULOS */}
          <div className="iav-modules-sidebar">
            {modules.map((mod) => (
              <button
                key={mod.id}
                className={`iav-module-btn ${activeModule === mod.id ? 'active' : ''}`}
                onClick={() => setActiveModule(mod.id)}
              >
                <span className="iav-module-icon">{mod.icon}</span>
                <span className="iav-module-label">{mod.label}</span>
              </button>
            ))}
          </div>

          {/* CONTENIDO DEL MÓDULO */}
          <div className="iav-module-content">
            <div className="iav-module-text">
              <span className="iav-module-tag">{currentModule.label.toUpperCase()}</span>
              <h3>{currentModule.label}</h3>
              <p className="iav-module-desc">{currentModule.desc}</p>
              
              <ul className="iav-module-points">
                {currentModule.points.map((point, idx) => (
                  <li key={idx}>
                    <FiCheckCircle className="iav-check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="iav-module-media">
              {currentModule.isVideo ? (
                <div className="iav-video-wrapper">
                  <video 
                    controls 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="iav-video-player"
                    src={currentModule.video}
                  >
                    Tu navegador no soporta el reproductor de video.
                  </video>
                </div>
              ) : (
                <div className="iav-image-wrapper">
                  <img src={currentModule.image} alt={currentModule.label} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
