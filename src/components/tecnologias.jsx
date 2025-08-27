import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub, SiPython,
  SiTypescript, SiFigma, SiCanva, SiAdobephotoshop, SiAdobeillustrator, SiPhp
} from "react-icons/si";
import "../css/technologias.css"

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
  { id: "sistask", tituloKey: "cases.sistask.title", descKey: "cases.sistask.desc", stackKey: "cases.sistask.stack", link: "https://sistask.sistran.com" },
  { id: "scalabl", tituloKey: "cases.scalabl.title", descKey: "cases.scalabl.desc", stackKey: "cases.scalabl.stack", link: "https://www.scalabl.com" },
];

export const Tecnologias = () => {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % casosExito.length);
  const prev = () => setIdx((i) => (i - 1 + casosExito.length) % casosExito.length);

  // Soporte teclado (← →) y swipe en mobile
  const carruselRef = useRef(null);
  const touch = useRef({ x: 0, y: 0 });

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const onTouchStart = (e) => {
    const t0 = e.touches?.[0];
    if (!t0) return;
    touch.current = { x: t0.clientX, y: t0.clientY };
  };
  const onTouchEnd = (e) => {
    const t1 = e.changedTouches?.[0];
    if (!t1) return;
    const dx = t1.clientX - touch.current.x;
    const dy = t1.clientY - touch.current.y;
    // Evita disparar en scroll vertical
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
    }
  };

  return (
    <div className="tecnologias-container ">
      <h2 className="titulo-tecnologias">{t("tech.title")}</h2>

      <div className="grid-tecnologias">
        {tecnologias.map((tech) => (
          <div
            className={`carta-tecnologia  ${tech.clase} ${tech.id === "react" ? "destacar-react" : ""}`}
            key={tech.id}
          >
            <div className="icono-tecnologia" aria-hidden>{tech.icono}</div>
            <p className="nombre-tecnologia">{tech.nombre}</p>
            <p className="descripcion-tecnologia">
              {t(`tech.items.${tech.id}.desc`)}
            </p>
          </div>
        ))}
      </div>

      <section
        className="casos-exito"
        ref={carruselRef}
        role="region"
        aria-label={t("cases.title")}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
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