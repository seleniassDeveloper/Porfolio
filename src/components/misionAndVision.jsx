import React, { useEffect, useRef, useState } from "react";

export const MisionAndVision = () => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="cajaVisionMision">
      <div className="contenedorVisionMision justify-content-center align-items-center">
        <div
          ref={cardRef}
          className={`card-misionvision ${isVisible ? "visible" : ""}`}
        >
          <h1 className="titulo-seccion">Mi Visión</h1>
          <p>
            Quiero seguir creciendo como desarrolladora, participando en proyectos frontend y fullstack que me reten a nivel técnico y personal. Busco crear experiencias digitales que sean funcionales, accesibles y visualmente atractivas. Mi visión es aportar valor real a cada equipo, aplicar buenas prácticas, aprender tecnologías emergentes y formar parte de entornos que valoren la calidad, el diseño y el trabajo colaborativo.
          </p>
        </div>
      </div>
    </div>
  );
};
