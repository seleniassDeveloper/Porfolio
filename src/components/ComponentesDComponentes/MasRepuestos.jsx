import "../css/MasRepuestos.css";
import { ProjectSection } from "../components/ProjectSection.jsx";

import screen1 from "../../assets/MasRepuestos/masrepuesto.jpg";
import screen2 from "../../assets/MasRepuestos/masrepuestos2.jpg";
import screen3 from "../../assets/MasRepuestos/masrepuestos3.jpg";

export const MasRepuestos = () => {
  const sections = [
    {
      title: "Mas Repuestos",
      subtitle:
        "Marketplace automotriz para buscar, comparar y comprar repuestos más rápido.",
      image: { src: screen1, alt: "Mas Repuestos - Vista general" },
      description:
        "Mas Repuestos es una plataforma digital que conecta vendedores y proveedores de repuestos automotrices con clientes finales. Centraliza ofertas, precios y disponibilidad para facilitar la búsqueda, comparación y compra desde un solo lugar, reduciendo fricción y acelerando la toma de decisiones.",
    },
    {
      title: "Búsqueda y catálogo",
      subtitle: "Exploración rápida por categorías y productos.",
      image: { src: screen2, alt: "Mas Repuestos - Búsqueda" },
      description:
        "El foco está en que el usuario encuentre el repuesto correcto rápidamente. Navegación clara, resultados comparables y acceso directo a info clave para decidir sin perder tiempo.",
    },
    {
      title: "Detalle y decisión",
      subtitle: "Información clara para comparar y contactar.",
      image: { src: screen3, alt: "Mas Repuestos - Detalle de producto" },
      description:
        "La experiencia prioriza transparencia: precio, disponibilidad y opciones. Desde el detalle, el usuario puede avanzar al contacto o compra con menos pasos.",
    },
  ];

  return (
    <section className="mr-page">
      {sections.map((section, index) => (
        <ProjectSection
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
          image={section.image}
        />
      ))}
    </section>
  );
};