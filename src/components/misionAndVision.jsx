import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const MisionAndVision = () => {
  const { t } = useTranslation();
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
          <h1 className="titulo-seccion">{t("mision_and_vision.title")}</h1>
          <p>{t("mision_and_vision.paragraph")}</p>
        </div>
      </div>
    </div>
  );
};