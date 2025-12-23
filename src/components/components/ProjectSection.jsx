import "../../css/ProjectSection.css.css";

export const ProjectSection = (props) => {
  // ✅ destructuring seguro (no falla si props viene raro)
  const {
    title = "",
    subtitle = "",
    description = "",
    image = null,
    reverse = false, // opcional: invierte layout
  } = props || {};

  const imgSrc = image?.src || "";
  const imgAlt = image?.alt || "Project image";

  return (
    <section className={`ps2-section ${reverse ? "is-reverse" : ""}`}>
      {/* Imagen */}
      <div className="ps2-image-wrap">
        {imgSrc ? (
          <img src={imgSrc} alt={imgAlt} className="ps2-image" loading="lazy" />
        ) : (
          <div className="ps2-image-fallback">Imagen no disponible</div>
        )}
      </div>

      {/* Texto */}
      <div className="ps2-content">
        {title ? <h2 className="ps2-title">{title}</h2> : null}
        {subtitle ? <p className="ps2-subtitle">{subtitle}</p> : null}
        {description ? <p className="ps2-description">{description}</p> : null}
      </div>
    </section>
  );
};