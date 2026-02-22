import "../../css/ProjectSection.css.css"; // 👈 no ".css.css"

export const ProjectSection = (props) => {
  const { title = "", subtitle = "", description = "", image = null, reverse = false } = props || {};
  const imgSrc = image?.src || "";
  const imgAlt = image?.alt || "Project image";

  return (
    <section className={`ps2-section ${reverse ? "is-reverse" : ""}`}>
      <div className="ps2-image-wrap">
        {imgSrc ? (
          <img src={imgSrc} alt={imgAlt} className="ps2-image" loading="lazy" />
        ) : (
          <div className="ps2-image-fallback">Imagen no disponible</div>
        )}
      </div>

      <div className="ps2-content">
        {title ? <h2 className="ps2-title">{title}</h2> : null}
        {subtitle ? <p className="ps2-subtitle">{subtitle}</p> : null}
        {description ? <p className="ps2-description">{description}</p> : null}
      </div>
    </section>
  );
};