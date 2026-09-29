import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiExternalLink,
  FiLayers,
  FiShare2,
  FiShield,
  FiTarget,
  FiX,
  FiZap,
  FiSearch,
  FiDatabase,
  FiLock,
  FiActivity
} from "react-icons/fi";
import "../css/SistemasCreados.css";

export const SistemasCreados = () => {
  const { t, i18n } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);

  const isEn = i18n.language === "en";

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const systems = [
    {
      id: "aiVisibility",
      index: "01",
      category: isEn
        ? "AI Visibility · GEO · SEO · Competitive Intelligence"
        : "AI Visibility · GEO · SEO · Inteligencia Competitiva",
      name: "AI Visibility",
      tagline: isEn
        ? "Understand where your business appears across AI engines."
        : "Descubre dónde aparece tu negocio en los motores de IA.",
      problem: isEn
        ? "Companies know how to check their Google rankings, but have zero clarity on what happens when a buyer asks ChatGPT, Gemini, or Perplexity for recommendations."
        : "Las empresas saben cómo revisar su posición en Google, pero no tienen claridad sobre qué ocurre cuando un comprador pregunta directamente a ChatGPT, Gemini o Perplexity por recomendaciones.",
      flowNodes: [
        "Business",
        "Buyer Questions",
        "AI Engines",
        "Mentions & Sources",
        "Competitors",
        "Opportunities"
      ],
      tags: ["ChatGPT / OpenAI", "Gemini", "Perplexity", "GEO", "LLM Metrics", "AI Score"],
      detail: {
        problemHeader: isEn ? "The Problem" : "El Problema",
        problemDetails: isEn
          ? [
              "The question is not just: 'Does my business show up?'",
              "Which competitors are being recommended instead of you?",
              "What exact sources and articles are AI models citing?",
              "What real questions are buyers asking LLMs?",
              "What SEO & GEO (Generative Engine Optimization) opportunities exist?"
            ]
          : [
              "El problema no es solamente: '¿Mi empresa aparece?'",
              "¿Qué competidores están apareciendo en lugar tuyo?",
              "¿Qué fuentes y artículos están citando los motores de IA?",
              "¿Qué preguntas reales hacen los compradores?",
              "¿Qué oportunidades de SEO y GEO (Generative Engine Optimization) existen?"
            ],
        systemHeader: isEn ? "System Architecture & 10-Step Engine" : "Arquitectura del Sistema en 10 Pasos",
        systemSteps: isEn
          ? [
              "1. Analyzes a business and its target industry.",
              "2. Detects direct and indirect competitors.",
              "3. Generates high-intent buyer questions based on real search behavior.",
              "4. Executes queries simultaneously across multiple AI engines.",
              "5. Parses mentioned companies, products, and brand sentiment.",
              "6. Identifies exact source URLs cited by generative models.",
              "7. Compares Share of Voice against direct market competitors.",
              "8. Detects actionable content, SEO, and GEO gaps.",
              "9. Calculates a proprietary AI Visibility Score.",
              "10. Enables scheduled re-audits to track authority progress over time."
            ]
          : [
              "1. Analiza una empresa y su mercado.",
              "2. Detecta competidores directos e indirectos.",
              "3. Genera preguntas de alta intención basadas en cómo busca un comprador.",
              "4. Ejecuta las consultas simultáneamente en diferentes motores de IA.",
              "5. Analiza qué empresas y marcas son mencionadas.",
              "6. Identifica las fuentes exactas citadas por los modelos.",
              "7. Compara la visibilidad y Share of Voice con competidores.",
              "8. Detecta oportunidades de SEO, GEO y contenido.",
              "9. Genera un AI Visibility Score propietario.",
              "10. Permite repetir auditorías periódicas para medir cambios."
            ],
        enginesList: ["ChatGPT / OpenAI", "Gemini", "Perplexity"],
        result: isEn
          ? "Converts hard-to-measure presence inside AI responses into clear, actionable business intelligence and strategy."
          : "Convierte algo difícil de medir —la presencia de una empresa dentro de respuestas de IA— en información accionable para el negocio."
      }
    },
    {
      id: "evident",
      index: "02",
      category: isEn
        ? "Content Intelligence · Strategy · Market Research"
        : "Inteligencia de Contenido · Estrategia · Investigación de Mercado",
      name: "Evident",
      tagline: isEn
        ? "Content strategy & market intelligence layer before creation."
        : "Capa de estrategia e inteligencia de mercado antes de crear contenido.",
      problem: isEn
        ? "AI can generate 100s of generic content ideas without understanding what the business sells, who it targets, or why a specific piece of content should exist."
        : "El problema no era generar contenido con IA, sino que la IA genera cientos de ideas sin entender realmente qué vende el negocio, a quién busca llegar ni qué objetivo cumple.",
      philosophy: "Context before content.",
      flowNodes: [
        "Business",
        "Audience",
        "Market Conversations",
        "Opportunities",
        "Strategy",
        "Content"
      ],
      tags: [
        "Content Intelligence",
        "Market Research",
        "Context Engine",
        "Positioning",
        "Marketing Strategy"
      ],
      detail: {
        problemHeader: isEn ? "The Problem" : "El Problema",
        problemDetails: isEn
          ? [
              "Generic AI generators output repetitive, shallow LinkedIn posts.",
              "Lack of alignment with commercial objectives and product sales.",
              "No understanding of real-time market conversations or audience pain points.",
              "I didn't want another 'AI content generator'. I built an intelligence layer."
            ]
          : [
              "Los generadores genéricos producen ideas vacías para redes.",
              "Falta de alineación con objetivos comerciales y lo que realmente vende la empresa.",
              "Desconexión de las conversaciones reales del mercado y dolores del comprador.",
              "No quería otro 'AI content generator'. Construí una capa de estrategia."
            ],
        systemHeader: isEn ? "How Evident Operates" : "Cómo funciona Evident",
        systemSteps: isEn
          ? [
              "1. Deeply understands the business model, offer, and positioning.",
              "2. Maps high-value buyer personas and decision triggers.",
              "3. Scans active market conversations, trends, and competitor angles.",
              "4. Identifies high-intent content opportunities.",
              "5. Maps content angles directly to quarterly revenue & marketing goals.",
              "6. Recommends a strategic weekly editorial schedule.",
              "7. Provides clear rationale explaining WHY every piece matters."
            ]
          : [
              "1. Entiende a fondo el negocio, la oferta y su propuesta de valor.",
              "2. Define el público objetivo y sus motivadores de compra.",
              "3. Analiza temas y conversaciones relevantes del mercado.",
              "4. Detecta oportunidades de contenido con alta tracción.",
              "5. Relaciona las oportunidades directamente con objetivos comerciales.",
              "6. Propone qué tiene sentido publicar durante la semana.",
              "7. Explica la razón estratégica detrás de cada publicación."
            ],
        quote: "Context before content.",
        result: isEn
          ? "Moves from asking an AI for random post ideas to having an intelligent strategy system that knows why to publish something and what objective it fulfills."
          : "Pasar de pedirle ideas aleatorias a una IA a tener un sistema que entiende por qué publicar algo y qué objetivo cumple."
      }
    },
    {
      id: "pulsepost",
      index: "03",
      category: isEn
        ? "Content Distribution · Social APIs · Automation"
        : "Distribución de Contenido · Social APIs · Automatización",
      name: "PulsePost",
      tagline: isEn
        ? "Proprietary multi-platform distribution infrastructure built on official APIs."
        : "Infraestructura propia de distribución multiplataforma sobre APIs oficiales.",
      problem: isEn
        ? "Born from personal security needs: after an account compromise, I refused to hand over login credentials or unnecessary token access to third-party publishing tools."
        : "PulsePost nació de un problema personal: tras sufrir un compromiso de cuenta, no quería seguir entregando credenciales o acceso innecesario a herramientas de terceros.",
      flowNodes: [
        "Content",
        "PulsePost",
        "OAuth / API Layer",
        "LinkedIn / TikTok / YouTube"
      ],
      tags: [
        "React / Next.js",
        "Node.js",
        "OAuth 2.0",
        "Encrypted Tokens",
        "Signed CSRF State",
        "Official APIs"
      ],
      detail: {
        problemHeader: isEn ? "Security Context & Need" : "Contexto de Seguridad y Necesidad",
        problemDetails: isEn
          ? [
              "Risk of sharing account credentials with third-party SaaS tools.",
              "Lack of token encryption and state verification in conventional apps.",
              "Need for total ownership over distribution channels and authentication."
            ]
          : [
              "Riesgo de compartir credenciales con SaaS de terceros.",
              "Falta de cifrado estricto y verificación CSRF en herramientas comunes.",
              "Necesidad de control total sobre los canales de distribución y autenticación."
            ],
        systemHeader: isEn ? "Architecture & Security Features" : "Arquitectura y Seguridad",
        systemSteps: isEn
          ? [
              "1. Direct OAuth 2.0 flow with official platform APIs (TikTok, LinkedIn, YouTube).",
              "2. Encrypted token storage at rest with AES-256.",
              "3. Signed state parameter validation to prevent CSRF attacks.",
              "4. Automated media chunking & upload pipeline via official endpoints.",
              "5. Centralized dashboard to manage account connections and status."
            ]
          : [
              "1. Flujos OAuth 2.0 directos con APIs oficiales (TikTok, LinkedIn, YouTube).",
              "2. Almacenamiento cifrado de tokens en reposo.",
              "3. Validación de parámetros de state firmados para prevenir ataques CSRF.",
              "4. Pipeline de procesamiento y publicación directa por endpoints oficiales.",
              "5. Gestión centralizada de conexiones y credenciales de usuario."
            ],
        stackList: [
          "Frontend: React / Next.js",
          "Backend: Node.js",
          "Infrastructure: Vercel + Render",
          "Integrations: LinkedIn API, TikTok API, YouTube API"
        ],
        result: isEn
          ? "Instead of relying on third-party tools to distribute content, I built a custom infrastructure where I maintain total ownership over access, encryption, and publishing flows."
          : "En lugar de depender de otra herramienta para distribuir contenido, construí una infraestructura propia donde controlo las conexiones y el flujo de publicación."
      }
    },
    {
      id: "ssstudio",
      index: "04",
      category: isEn
        ? "Business Systems · Automation · Growth Infrastructure"
        : "Sistemas de Negocio · Automatización · Infraestructura de Crecimiento",
      name: "SSStudio",
      tagline: isEn
        ? "The consultancy & methodology connecting business strategy with custom software."
        : "La consultoría y metodología que conecta estrategia de negocio con software a medida.",
      problem: isEn
        ? "Most agencies push 'AI for the sake of AI' or build software without diagnosing the actual business bottleneck."
        : "SSStudio es el contexto que conecta los sistemas anteriores. No vendo 'IA porque sí': analizo primero el cuello de botella de negocio antes de tocar una sola línea de código.",
      flowNodes: [
        "Understand",
        "Diagnose",
        "Simplify",
        "Automate / Build",
        "Measure"
      ],
      tags: [
        "Business Architecture",
        "Process Automation",
        "Custom Systems",
        "Product Engineering"
      ],
      isAgencyCard: true,
      agencyUrl: "https://ssstudio.agency"
    }
  ];

  return (
    <section className="sistemas-section" id="sistemas">
      <div className="sistemas-bg-glow" />

      <div className="sistemas-container">
        {/* HEADER */}
        <div className="sistemas-header">
          <a
            href="https://ssstudio.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="ssstudio-tag-link"
          >
            <FiZap /> {isEn ? "Built through SSStudio" : "Construido a través de SSStudio"} → ssstudio.agency
          </a>

          <h2 className="sistemas-title">
            {isEn ? "Systems I’ve Built" : "Sistemas que he construido"}
          </h2>

          <p className="sistemas-subtitle">
            {isEn
              ? "Internal systems and automation tools I built through SSStudio to solve problems around visibility, content, distribution, and business growth."
              : "Sistemas internos y herramientas de automatización que construí a través de SSStudio para resolver problemas de visibilidad, contenido, distribución y crecimiento."}
          </p>
        </div>

        {/* NARRATIVE METRICS & METHODOLOGY BANNER */}
        <div className="narrative-banner">
          <div className="narrative-flow-header">
            <div className="narrative-flow-title">
              <FiLayers />
              <span>
                {isEn
                  ? "Engineering Methodology & Framework"
                  : "Metodología de Ingeniería y Sistemas"}
              </span>
            </div>

            <span className="narrative-flow-badge">
              Problem → Analysis → System Design → Automation → Measurement
            </span>
          </div>

          <div className="narrative-steps">
            <div className="narrative-step-node">
              <FiSearch className="node-icon" />
              <span>1. Understand</span>
            </div>
            <span className="narrative-arrow">→</span>

            <div className="narrative-step-node">
              <FiTarget className="node-icon" />
              <span>2. Diagnose</span>
            </div>
            <span className="narrative-arrow">→</span>

            <div className="narrative-step-node">
              <FiLayers className="node-icon" />
              <span>3. Simplify</span>
            </div>
            <span className="narrative-arrow">→</span>

            <div className="narrative-step-node">
              <FiCpu className="node-icon" />
              <span>4. Automate & Build</span>
            </div>
            <span className="narrative-arrow">→</span>

            <div className="narrative-step-node">
              <FiActivity className="node-icon" />
              <span>5. Measure</span>
            </div>
          </div>

          <div className="ecosystem-summary-grid">
            <div className="eco-pillar-card">
              <span className="eco-pillar-stage">DISCOVER</span>
              <span className="eco-pillar-name">01 · AI Visibility</span>
              <p className="eco-pillar-desc">
                {isEn
                  ? "Understand where a business appears in search & AI models."
                  : "Descubre dónde aparece tu negocio en búsquedas y respuestas de IA."}
              </p>
            </div>

            <div className="eco-pillar-card">
              <span className="eco-pillar-stage">DECIDE</span>
              <span className="eco-pillar-name">02 · Evident</span>
              <p className="eco-pillar-desc">
                {isEn
                  ? "Strategy layer: decide what is worth talking about before creating."
                  : "Capa estratégica: decide qué vale la pena comunicar con objetivo."}
              </p>
            </div>

            <div className="eco-pillar-card">
              <span className="eco-pillar-stage">DISTRIBUTE</span>
              <span className="eco-pillar-name">03 · PulsePost</span>
              <p className="eco-pillar-desc">
                {isEn
                  ? "Distribute content across social APIs securely and automatically."
                  : "Distribuye contenido mediante APIs oficiales y cifrado de alta seguridad."}
              </p>
            </div>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="sistemas-grid">
          {systems.map((sys) => (
            <article key={sys.id} className="sistema-card">
              <div>
                <div className="card-top-meta">
                  <span className="card-number">{sys.index}</span>
                  <span className="card-category-badge">{sys.category}</span>
                </div>

                <div className="card-main-info">
                  <h3 className="card-system-name">{sys.name}</h3>
                  <p style={{ color: "#E4E4E7", fontWeight: 600, fontSize: "0.98rem" }}>
                    {sys.tagline}
                  </p>

                  <div style={{ marginTop: "10px" }}>
                    <span className="card-problem-label">
                      {isEn ? "The Business Problem" : "El Problema de Negocio"}
                    </span>
                    <p className="card-problem-statement">{sys.problem}</p>
                  </div>
                </div>

                {sys.philosophy && (
                  <div
                    style={{
                      padding: "8px 14px",
                      background: "rgba(196, 167, 240, 0.1)",
                      borderLeft: "3px solid #C4A7F0",
                      borderRadius: "0 6px 6px 0",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      fontStyle: "italic",
                      color: "#ffffff",
                      marginBottom: "16px"
                    }}
                  >
                    {sys.philosophy}
                  </div>
                )}

                {/* DIAGRAM FLOW INSIDE CARD */}
                <div className="card-diagram-box">
                  <div className="card-diagram-title">
                    {isEn ? "System Flow Architecture" : "Flujo Conceptual del Sistema"}
                  </div>
                  <div className="flow-node-chain">
                    {sys.flowNodes.map((node, i) => (
                      <React.Fragment key={i}>
                        <span className="flow-mini-node">{node}</span>
                        {i < sys.flowNodes.length - 1 && (
                          <span className="flow-mini-arrow">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* TAGS */}
                <div className="card-tech-tags">
                  {sys.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION */}
              <div className="card-actions">
                {sys.isAgencyCard ? (
                  <a
                    href={sys.agencyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-view-system primary-agency"
                  >
                    <span>{isEn ? "Explore SSStudio → ssstudio.agency" : "Explorar SSStudio → ssstudio.agency"}</span>
                    <FiExternalLink className="btn-icon" />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="btn-view-system"
                    onClick={() => setActiveModal(sys.id)}
                  >
                    <span>{isEn ? "View system →" : "Ver sistema →"}</span>
                    <FiArrowRight className="btn-icon" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* DETAILED CASE STUDY MODAL */}
      {activeModal && (
        <div
          className="system-modal-overlay"
          onClick={(e) => {
            if (e.target.className === "system-modal-overlay") setActiveModal(null);
          }}
        >
          <div className="system-modal-container">
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              <FiX />
            </button>

            {(() => {
              const currentSys = systems.find((s) => s.id === activeModal);
              if (!currentSys || !currentSys.detail) return null;

              const d = currentSys.detail;

              return (
                <div>
                  <div className="modal-header">
                    <div className="modal-top-tags">
                      <span className="card-number">{currentSys.index}</span>
                      <span className="card-category-badge">{currentSys.category}</span>
                    </div>

                    <h3 className="modal-title">{currentSys.name}</h3>
                    <p style={{ fontSize: "1.1rem", color: "#F5A9C7", fontWeight: 600 }}>
                      {currentSys.tagline}
                    </p>
                  </div>

                  <div className="modal-grid-sections">
                    {/* PROBLEM */}
                    <div className="modal-block">
                      <div className="modal-block-title">
                        <FiTarget /> {d.problemHeader}
                      </div>
                      <p className="modal-block-text">{currentSys.problem}</p>

                      {d.problemDetails && (
                        <ul className="modal-list">
                          {d.problemDetails.map((item, idx) => (
                            <li key={idx} className="modal-list-item">
                              <FiCheckCircle className="item-check" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {d.quote && (
                      <div className="modal-quote-box">"{d.quote}"</div>
                    )}

                    {/* SYSTEM STEPS */}
                    <div className="modal-block">
                      <div className="modal-block-title">
                        <FiCpu /> {d.systemHeader}
                      </div>

                      <ul className="modal-list">
                        {d.systemSteps.map((step, idx) => (
                          <li key={idx} className="modal-list-item">
                            <FiCheckCircle className="item-check" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* STACK / ENGINES */}
                    {(d.enginesList || d.stackList) && (
                      <div className="modal-block">
                        <div className="modal-block-title">
                          <FiDatabase /> {isEn ? "Engines & Tech Stack" : "Motores y Stack Técnico"}
                        </div>

                        <ul className="modal-list">
                          {(d.enginesList || d.stackList).map((item, idx) => (
                            <li key={idx} className="modal-list-item">
                              <FiCheckCircle className="item-check" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* RESULT */}
                    <div className="modal-block" style={{ borderLeft: "4px solid #F5A9C7" }}>
                      <div className="modal-block-title">
                        <FiActivity /> {isEn ? "Result & Business Impact" : "Resultado e Impacto de Negocio"}
                      </div>
                      <p className="modal-block-text" style={{ fontSize: "1.02rem", fontWeight: 600 }}>
                        {d.result}
                      </p>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="modal-footer-actions">
                    <button
                      type="button"
                      className="btn-view-system"
                      onClick={() => setActiveModal(null)}
                    >
                      {isEn ? "Close case study" : "Cerrar caso de estudio"}
                    </button>

                    <a
                      href="https://ssstudio.agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-view-system primary-agency"
                    >
                      <span>{isEn ? "Explore SSStudio → ssstudio.agency" : "Explorar SSStudio → ssstudio.agency"}</span>
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default SistemasCreados;
