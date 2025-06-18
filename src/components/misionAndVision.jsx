import React, { useEffect, useRef, useState } from "react";

export const MisionAndVision = () => {
  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState([false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="cajaVisionMision">
      <div className="contenedorVisionMision d-flex flex-column flex-md-row justify-content-around align-items-center">
        {["Visión", "Misión"].map((titulo, index) => (
          <div
            key={titulo}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`card-misionvision ${
              index === 0 ? "left-hidden" : ""
            } ${visibleCards[index] ? "visible" : ""}`}
          >
            <h1 className="titulo-seccion">{titulo}</h1>
            <p>
              {index === 0
                ? "Quiero seguir creciendo como desarrolladora, trabajando en proyectos frontend y fullstack que me reten, me enseñen y me permitan seguir creando experiencias digitales que realmente funcionen y se vean bien. Mi meta es mejorar cada día, aportar valor y seguir aprendiendo en cada línea de código."
                : "Desarrollar aplicaciones web modernas, funcionales y accesibles con enfoque en la experiencia del usuario. Mi misión es aplicar buenas prácticas de desarrollo, aprender constantemente nuevas tecnologías y colaborar con equipos que valoren la calidad, la creatividad y el crecimiento continuo."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
