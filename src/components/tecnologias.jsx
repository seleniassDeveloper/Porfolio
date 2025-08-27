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
import "../css/technologias.css"; // tu hoja de estilos

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
    tituloKey: "cases.sistask.title",
    descKey: "cases.sistask.desc",
    stackKey: "cases.sistask.stack",
    link: "https://sistask.sistran.com",
  },
  {
    id: "scalabl",
    tituloKey: "cases.scalabl.title",
    descKey: "cases.scalabl.desc",
    stackKey: "cases.scalabl.stack",
    link: "https://www.scalabl.com",
  },
];

// helper para agrupar elementos en slides del carrusel
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export const Tecnologias = () => {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % casosExito.length);
  const prev = () => setIdx((i) => (i - 1 + casosExito.length) % casosExito.length);

  return (
    <div className="tecnologias-container">
      <h2 className="titulo-tecnologias">{t("tech.title")}</h2>

      {/* Desktop/Tablet: GRID (visible >= md) */}
      <div className="d-none d-md-block">
        <div className="grid-tecnologias">
          {tecnologias.map((tech) => (
            <div
              key={tech.id}
              className={`carta-tecnologia ${tech.clase} ${tech.id === "react" ? "destacar-react" : ""}`}
            >
              <div className="icono-tecnologia" aria-hidden>
                {tech.icono}
              </div>
              <p className="nombre-tecnologia">{tech.nombre}</p>
              <p className="descripcion-tecnologia">
                {t(`tech.items.${tech.id}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: CARRUSEL (visible < md) */}
      <div className="d-md-none">
        <Carousel interval={null} indicators={false} controls={true} className="tech-carousel">
          {chunk(tecnologias, 6).map((grupo, slideIndex) => (
            <Carousel.Item key={`slide-${slideIndex}`}>
              <div className="slide-grid">
                {grupo.map((tech) => (
                  <div key={tech.id} className={`slide-icon ${tech.clase}`} role="button" tabIndex={0}>
                    <span className="icono-tecnologia">{tech.icono}</span>
                    <span className="slide-label">{tech.nombre}</span>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Casos de Éxito (queda como lo tenías) */}
      <section className="casos-exito" role="region" aria-label={t("cases.title")} tabIndex={0}>
        <div className="header-casos">
          <h3>{t("cases.title")}</h3>
          <div className="controles-carrusel">
            <button type="button" aria-label={t("cases.prev")} onClick={prev}>‹</button>
            <span className="paginador" aria-live="polite">
              {idx + 1} / {casosExito.length}
            </span>
            <button type="button" aria-label={t("cases.next")} onClick={next}>›</button>
          </div>
        </div>

        <div className="carrusel">
          {casosExito.map((c, i) => (
            <article
              key={c.id}
              className={`tarjeta-caso ${i === idx ? "activo" : "inactivo"}`}
              aria-hidden={i !== idx}
            >
              <h4>{t(c.tituloKey)}</h4>
              <p className="desc">{t(c.descKey)}</p>
              <p className="stack">
                <span className="stack-label">{t("cases.stackLabel")}:</span>{" "}
                {t(c.stackKey)}
              </p>
              <a className="link-proyecto" href={c.link} target="_blank" rel="noopener noreferrer">
                {t("cases.viewProject")}
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};