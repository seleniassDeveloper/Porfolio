import "../css/MasRepuestos.css";
import { useNavigate } from "react-router-dom";
import { ProjectSection } from "../components/ProjectSection.jsx";
import { useTranslation } from "react-i18next";

import screen1 from "../../assets/MasRepuestos/masrepuesto.jpg";
import screen2 from "../../assets/MasRepuestos/masrepuestos2.jpg";
import screen3 from "../../assets/MasRepuestos/masrepuestos3.jpg";

export const MasRepuestos = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      title: "Mas Repuestos",
      subtitle:
        "Marketplace automotriz para buscar, comparar y comprar repuestos más rápido.",
      image: { src: screen1, alt: "Mas Repuestos - Vista general" },
      description:
        "Conecta vendedores de repuestos con clientes finales para buscar, comparar y comprar desde un solo lugar.",
    },
    {
      title: "Búsqueda y catálogo",
      subtitle: "Exploración rápida por categorías y productos.",
      image: { src: screen2, alt: "Mas Repuestos - Búsqueda" },
      description:
        "Navegación simple y resultados claros para encontrar el repuesto correcto en menos tiempo.",
    },
    {
      title: "Detalle y decisión",
      subtitle: "Información clara para comparar y contactar.",
      image: { src: screen3, alt: "Mas Repuestos - Detalle de producto" },
      description:
        "Precio, disponibilidad y contacto directo para tomar decisiones rápido y sin fricción.",
    },
  ];

  return (
    <section className="mr-page">
      
      {/* Top actions */}
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
          Descargar en Google Play
        </a>
      </div>

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