import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "../../src/App.css";

export const Experiencia = () => {
  const { t } = useTranslation();
  const tarjetasRef = useRef([]);
  const [visible, setVisibles] = useState([false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = tarjetasRef.current.indexOf(entry.target);
          if (index !== -1) {
            setVisibles((prev) => {
              const updated = [...prev];
              updated[index] = entry.isIntersecting;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    tarjetasRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      tarjetasRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="experiencia-container d-flex justify-content-center ">
      <div className="experiencia-flex">
   
        <div
          ref={(el) => (tarjetasRef.current[1] = el)}
          className={`tarjeta ms-lg-3 animated-side right ${
            visible[1] ? "slide-in" : "slide-out"
          }`}
        >
          <h3>
            <FaGraduationCap className="icono" /> {t("experience_section.academic_training")}
          </h3>

          <div className="item">
            <h4>{t("experience_section.teclab_title")}</h4>
            <span className="fecha">{t("experience_section.teclab_degree")}</span>
          </div>

          <div className="item">
            <h4>{t("experience_section.davinci_title")}</h4>
            <span className="fecha">{t("experience_section.davinci_degree")}</span>
          </div>

          <div className="d-lg-flex">
            <div>
              <h3 className="subtitulo">{t("experience_section.additional_courses")}</h3>
              <ul>
                {t("experience_section.additional_courses_list", { returnObjects: true }).map(
                  (item, idx) => (
                    <li key={idx}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div className="ps-lg-5">
              <h3 className="subtitulo">{t("experience_section.certifications_in_progress")}</h3>
              <ul>
                {t("experience_section.certifications_list", { returnObjects: true }).map(
                  (item, idx) => (
                    <li key={idx}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="subtitulo">{t("experience_section.languages")}</h3>
            <ul>
              {t("experience_section.languages_list", { returnObjects: true }).map(
                (item, idx) => (
                  <li key={idx}>{item}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};