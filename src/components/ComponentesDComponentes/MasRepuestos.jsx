import "../css/MasRepuestos.css";
import { useNavigate } from "react-router-dom";
import { ProjectSection } from "../components/ProjectSection.jsx";
import { useTranslation } from "react-i18next";

import screen1 from "../../assets/MasRepuestos/masrepuesto.jpg";
import screen2 from "../../assets/MasRepuestos/masrepuestos2.jpg";
import screen3 from "../../assets/MasRepuestos/masrepuestos3.jpg";

// Guarda el logo como: src/assets/google-play.png
import playBadge from "../../assets/Google_Play_Store_badge_EN.svg";


export const MasRepuestos = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      title: "Encontrar repuestos ya no es un problema",
      subtitle: "Búsqueda simple, rápida y pensada para clientes reales.",
      image: { src: screen2, alt: "Mas Repuestos - Búsqueda" },
      description:
        "La app permite buscar repuestos por categoría, producto o necesidad, reduciendo el tiempo de búsqueda y mostrando opciones claras en un solo lugar.",
    },
    {
      title: "Comparar y decidir en segundos",
      subtitle: "Precio, disponibilidad y vendedores en un mismo flujo.",
      image: { src: screen3, alt: "Mas Repuestos - Detalle de producto" },
      description:
        "El usuario puede revisar alternativas, comparar información clave y avanzar al contacto o compra sin tener que consultar múltiples comercios por separado.",
    },
    {
      title: "Un marketplace para el ecosistema automotriz",
      subtitle: "Clientes, vendedores y proveedores conectados digitalmente.",
      image: { src: screen1, alt: "Mas Repuestos - Vista general" },
      description:
        "Mas Repuestos ayuda a los comercios a ganar visibilidad y a los clientes a encontrar el repuesto correcto de forma más rápida, clara y ordenada.",
    },
  ];

  return (
    <section className="mr-page">
      <div className="mr-top-actions">
        <button
          className="btn btnmasrepuesto"
          onClick={() => navigate(-1)}
          aria-label="Volver"
        >
          {t("scalabl.volver")}
        </button>

        <a
          href="https://play.google.com/store/apps/details?id=com.masrepuestos0126.user&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-playstore"
        >
      <a
  href="https://play.google.com/store/apps/details?id=com.masrepuestos0126.user&pcampaignid=web_share"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-playstore"
>
  <img src={playBadge} alt="Get it on Google Play" />
</a>
          <div>
            <span>Disponible en</span>
            <strong>Google Play</strong>
          </div>
        </a>
      </div>

      <header className="mr-product-hero">
        <div className="mr-hero-content">
          <span className="mr-eyebrow">Mobile Marketplace · Auto Parts</span>

          <h1>
            Repuestos automotrices, vendedores y clientes conectados en una sola app.
          </h1>

          <p>
            Mas Repuestos digitaliza la búsqueda de autopartes, permitiendo encontrar,
            comparar y comprar repuestos desde una experiencia móvil clara, rápida y
            pensada para el mercado automotriz.
          </p>

          <div className="mr-hero-pills">
            <span>Marketplace</span>
            <span>Mobile App</span>
            <span>Auto Parts</span>
            <span>Google Play</span>
          </div>

          <div className="mr-hero-actions">
            <a
              href="https://play.google.com/store/apps/details?id=com.masrepuestos0126.user&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-primary-cta"
            >
              Descargar app
            </a>

            <button className="mr-secondary-cta" onClick={() => navigate(-1)}>
              Volver a proyectos
            </button>
          </div>
        </div>

        <div className="mr-hero-phone">
          <img src={screen1} alt="Mas Repuestos app preview" />
        </div>
      </header>

      <section className="mr-impact-strip">
        <article>
          <strong>01</strong>
          <span>Búsqueda centralizada de repuestos</span>
        </article>
        <article>
          <strong>02</strong>
          <span>Comparación rápida para tomar mejores decisiones</span>
        </article>
        <article>
          <strong>03</strong>
          <span>Más visibilidad para vendedores y proveedores</span>
        </article>
      </section>

      {sections.map((section, index) => (
        <ProjectSection
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
          image={section.image}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
};