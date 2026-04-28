// src/components/Tecnologias.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
  SiPython,
  SiTypescript,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiPhp,
} from "react-icons/si";
import {
  FiArrowRight,
  FiArrowLeft,
  FiTrendingUp,
  FiGlobe,
  FiUsers,
  FiZap,
  FiTarget,
} from "react-icons/fi";
import "../css/technologias.css";

const tecnologias = [
  { id: "html", nombre: "HTML", icono: <SiHtml5 />, clase: "html" },
  { id: "css", nombre: "CSS", icono: <SiCss3 />, clase: "css" },
  { id: "javascript", nombre: "JavaScript", icono: <SiJavascript />, clase: "javascript" },
  { id: "react", nombre: "React", icono: <SiReact />, clase: "react" },
  { id: "github", nombre: "GitHub", icono: <SiGithub />, clase: "github" },
  { id: "python", nombre: "Python", icono: <SiPython />, clase: "python" },
  { id: "typescript", nombre: "TypeScript", icono: <SiTypescript />, clase: "typescript" },
  { id: "php", nombre: "PHP", icono: <SiPhp />, clase: "php" },
  { id: "figma", nombre: "Figma", icono: <SiFigma />, clase: "figma" },
  { id: "canva", nombre: "Canva", icono: <SiCanva />, clase: "canva" },
  { id: "photoshop", nombre: "Photoshop", icono: <SiAdobephotoshop />, clase: "photoshop" },
  { id: "illustrator", nombre: "Illustrator", icono: <SiAdobeillustrator />, clase: "illustrator" },
];

const casosExito = [
  {
    id: "sistask",
    theme: "blue",
    icon: <FiTarget />,
    labelKey: "cases.sistask.label",
    metricBigKey: "cases.sistask.metricBig",
    metricSmallKey: "cases.sistask.metricSmall",
    detailOneKey: "cases.sistask.detailOne",
    detailTwoKey: "cases.sistask.detailTwo",
    detailThreeKey: "cases.sistask.detailThree",
    tituloKey: "cases.sistask.title",
    descKey: "cases.sistask.desc",
    impactKey: "cases.sistask.impact",
    stackKey: "cases.sistask.stack",
    link: "/#/experiencia-sistran",
  },
  {
    id: "scalabl",
    theme: "green",
    icon: <FiTrendingUp />,
    labelKey: "cases.scalabl.label",
    metricBigKey: "cases.scalabl.metricBig",
    metricSmallKey: "cases.scalabl.metricSmall",
    detailOneKey: "cases.scalabl.detailOne",
    detailTwoKey: "cases.scalabl.detailTwo",
    detailThreeKey: "cases.scalabl.detailThree",
    tituloKey: "cases.scalabl.title",
    descKey: "cases.scalabl.desc",
    impactKey: "cases.scalabl.impact",
    stackKey: "cases.scalabl.stack",
    link: "/#/experiencia-scalabl",
  },
  {
    id: "masRepuestos",
    theme: "orange",
    icon: <FiZap />,
    labelKey: "cases.masRepuestos.label",
    metricBigKey: "cases.masRepuestos.metricBig",
    metricSmallKey: "cases.masRepuestos.metricSmall",
    detailOneKey: "cases.masRepuestos.detailOne",
    detailTwoKey: "cases.masRepuestos.detailTwo",
    detailThreeKey: "cases.masRepuestos.detailThree",
    tituloKey: "cases.masRepuestos.title",
    descKey: "cases.masRepuestos.desc",
    impactKey: "cases.masRepuestos.impact",
    stackKey: "cases.masRepuestos.stack",
    link: "/#/proyecto-mas-repuestos",
  },
  {
    id: "lacev",
    theme: "gold",
    icon: <FiGlobe />,
    labelKey: "cases.lacev.label",
    metricBigKey: "cases.lacev.metricBig",
    metricSmallKey: "cases.lacev.metricSmall",
    detailOneKey: "cases.lacev.detailOne",
    detailTwoKey: "cases.lacev.detailTwo",
    detailThreeKey: "cases.lacev.detailThree",
    tituloKey: "cases.lacev.title",
    descKey: "cases.lacev.desc",
    impactKey: "cases.lacev.impact",
    stackKey: "cases.lacev.stack",
    link: "/#/Dinosaurios",
  },
  {
    id: "dogco",
    theme: "pink",
    icon: <FiUsers />,
    labelKey: "cases.dogco.label",
    metricBigKey: "cases.dogco.metricBig",
    metricSmallKey: "cases.dogco.metricSmall",
    detailOneKey: "cases.dogco.detailOne",
    detailTwoKey: "cases.dogco.detailTwo",
    detailThreeKey: "cases.dogco.detailThree",
    tituloKey: "cases.dogco.title",
    descKey: "cases.dogco.desc",
    impactKey: "cases.dogco.impact",
    stackKey: "cases.dogco.stack",
    link: "/#/proyecto-dogco",
  },
  {
    id: "dashboard",
    theme: "purple",
    icon: <FiTrendingUp />,
    labelKey: "cases.dashboard.label",
    metricBigKey: "cases.dashboard.metricBig",
    metricSmallKey: "cases.dashboard.metricSmall",
    detailOneKey: "cases.dashboard.detailOne",
    detailTwoKey: "cases.dashboard.detailTwo",
    detailThreeKey: "cases.dashboard.detailThree",
    tituloKey: "cases.dashboard.title",
    descKey: "cases.dashboard.desc",
    impactKey: "cases.dashboard.impact",
    stackKey: "cases.dashboard.stack",
    link: "/#/proyecto-dashboard",
  },
];

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export const Tecnologias = () => {
  const { t } = useTranslation();
  const [activeCase, setActiveCase] = useState(0);
  const active = casosExito[activeCase];

  const prevCase = () => {
    setActiveCase((prev) => (prev === 0 ? casosExito.length - 1 : prev - 1));
  };

  const nextCase = () => {
    setActiveCase((prev) => (prev === casosExito.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="tecnologias-container">
      <section className="tech-section">
        <div className="tech-header">
          <span>{t("tech.eyebrow")}</span>
          <h2 className="titulo-tecnologias">{t("tech.title")}</h2>
     
        </div>

        <div className="d-none d-md-block">
          <div className="grid-tecnologias">
            {tecnologias.map((tech) => (
              <div
                key={tech.id}
                className={`carta-tecnologia ${tech.clase} ${
                  tech.id === "react" ? "destacar-react" : ""
                }`}
              >
                <div className="icono-tecnologia">{tech.icono}</div>
                <p className="nombre-tecnologia">{tech.nombre}</p>
                <p className="descripcion-tecnologia">
                  {t(`tech.items.${tech.id}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="d-md-none tech-carousel">
          <Carousel interval={null} indicators={false} controls>
            {chunk(tecnologias, 6).map((grupo, slideIndex) => (
              <Carousel.Item key={`slide-${slideIndex}`}>
                <div className="slide-grid">
                  {grupo.map((tech) => (
                    <div key={tech.id} className={`slide-icon ${tech.clase}`}>
                      <span className="icono-tecnologia">{tech.icono}</span>
                      <span className="slide-label">{tech.nombre}</span>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      <section className={`impact-deck-section theme-${active.theme}`}>
        <div className="impact-deck-bg"></div>

        <div className="impact-deck-container">
          <div className="impact-deck-header">
            <span>{t("cases.eyebrow")}</span>
            <h2>{t("cases.title")}</h2>
            <p>{t("cases.subtitle")}</p>
          </div>

          <div className="impact-deck-stage">
            <button className="deck-arrow left" type="button" onClick={prevCase}>
              <FiArrowLeft />
            </button>

            <div className="deck-stack">
              {casosExito.map((item, index) => {
                const offset = index - activeCase;

                return (
                  <div
                    key={item.id}
                    className={`deck-back-card theme-${item.theme} ${
                      index === activeCase ? "is-hidden" : ""
                    }`}
                    style={{
                      "--i": offset,
                      "--abs": Math.abs(offset),
                    }}
                  />
                );
              })}

              <article className="deck-main-card" key={active.id}>
                <div className="deck-top-row">
                  <div className="deck-number">
                    {String(activeCase + 1).padStart(2, "0")}
                  </div>

                  <div className="deck-label">
                    {t(active.labelKey)}
                    <span></span>
                  </div>

                  <div className="deck-stack-pill">{t(active.stackKey)}</div>
                </div>

                <div className="deck-hero-row">
                  <div className="deck-project-hero">
                    {/* <div className="deck-icon-box">{active.icon}</div> */}
                    <span>{t("cases.projectLabel")}</span>
                    <h3>{t(active.tituloKey)}</h3>
                    <p>{t(active.descKey)}</p>
                  </div>

                  <div className="deck-side-metric">
                    <FiTrendingUp />
                    <span>{t("cases.metricLabel")}</span>
                    <strong>{t(active.metricBigKey)}</strong>
                    <p>{t(active.metricSmallKey)}</p>
                  </div>
                </div>

                <div className="deck-divider"></div>

                <div className="deck-bottom-grid">
                  <div className="deck-impact-card">
                    <div className="impact-card-heading">
                      <FiTarget />
                      <span>{t("cases.impactLabel")}</span>
                    </div>
                    <p>{t(active.impactKey)}</p>
                  </div>

                  <div className="deck-detail-list">
                    <div>
                      <FiGlobe />
                      <p>
                        {t("cases.reachLabel")}
                        <strong>{t(active.detailOneKey)}</strong>
                      </p>
                    </div>

                    <div>
                      <FiUsers />
                      <p>
                        {t("cases.resultLabel")}
                        <strong>{t(active.detailTwoKey)}</strong>
                      </p>
                    </div>

                    <div>
                      <FiZap />
                      <p>
                        {t("cases.techLabel")}
                        <strong>{t(active.detailThreeKey)}</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <a className="deck-btn" href={active.link}>
                  {t("cases.viewProject")}
                  <span>
                    <FiArrowRight />
                  </span>
                </a>
              </article>
            </div>

            <button className="deck-arrow right" type="button" onClick={nextCase}>
              <FiArrowRight />
            </button>
          </div>

          <div className="impact-deck-controls">
            {casosExito.map((c, index) => (
              <button
                key={c.id}
                type="button"
                className={`deck-dot ${activeCase === index ? "active" : ""}`}
                onClick={() => setActiveCase(index)}
                aria-label={t("cases.viewCase", { project: t(c.tituloKey) })}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};