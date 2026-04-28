import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiCompass, FiCode, FiGlobe, FiTrendingUp } from "react-icons/fi";

export const MisionAndVision = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`vision-section ${isVisible ? "visible" : ""}`}
    >
      <div className="vision-bg-grid"></div>

      <div className="vision-container">
        <div className="vision-eyebrow">
          <FiCompass />
          <span>{t("mision_and_vision.eyebrow")}</span>
        </div>

        <div className="vision-layout">
          <div className="vision-main-card">
            <span className="vision-number">01</span>

            <h2>{t("mision_and_vision.title")}</h2>

            <p>{t("mision_and_vision.paragraph")}</p>
          </div>

          <div className="vision-pillars">
            <article className="vision-pillar-card">
              <FiCode />
              <span>{t("mision_and_vision.pillars.tech.title")}</span>
              <p>{t("mision_and_vision.pillars.tech.text")}</p>
            </article>

            <article className="vision-pillar-card">
              <FiTrendingUp />
              <span>{t("mision_and_vision.pillars.growth.title")}</span>
              <p>{t("mision_and_vision.pillars.growth.text")}</p>
            </article>

            <article className="vision-pillar-card">
              <FiGlobe />
              <span>{t("mision_and_vision.pillars.remote.title")}</span>
              <p>{t("mision_and_vision.pillars.remote.text")}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};