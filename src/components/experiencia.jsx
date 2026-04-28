import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiBookOpen,
  FiAward,
  FiGlobe,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";
import "../../src/App.css";

export const Experiencia = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const courses = t("experience_section.additional_courses_list", {
    returnObjects: true,
  });

  const certifications = t("experience_section.certifications_list", {
    returnObjects: true,
  });

  const languages = t("experience_section.languages_list", {
    returnObjects: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
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
      className={`experience-showcase ${visible ? "is-visible" : ""}`}
    >
      <div className="experience-bg-grid"></div>

      <div className="experience-container">
        <div className="experience-header">
          <span>{t("experience_section.eyebrow", "Education")}</span>
          <h2>{t("experience_section.academic_training")}</h2>
          <p>
            {t(
              "experience_section.subtitle",
              "Formal education, courses and continuous learning that support the way I build real digital products."
            )}
          </p>
        </div>

        <div className="experience-layout">
          <article className="experience-main-card">
            <div className="experience-top">
              <div className="experience-icon">
                <FiBookOpen />
              </div>

              <div>
                <span>{t("experience_section.main_label", "Academic path")}</span>
                <h3>{t("experience_section.academic_training")}</h3>
              </div>
            </div>

            <div className="education-timeline">
              <div className="education-item">
                <div className="timeline-dot"></div>
                <div>
                  <h4>{t("experience_section.teclab_title")}</h4>
                  <p>{t("experience_section.teclab_degree")}</p>
                </div>
              </div>

              <div className="education-item">
                <div className="timeline-dot"></div>
                <div>
                  <h4>{t("experience_section.davinci_title")}</h4>
                  <p>{t("experience_section.davinci_degree")}</p>
                </div>
              </div>
            </div>

            <div className="experience-note">
              <FiArrowUpRight />
              <p>
                {t(
                  "experience_section.note",
                  "I combine formal training with hands-on product experience, learning through real systems, production challenges and continuous practice."
                )}
              </p>
            </div>
          </article>

          <div className="experience-side-grid">
            <article className="experience-mini-card">
              <div className="mini-card-heading">
                <FiCheckCircle />
                <span>{t("experience_section.additional_courses")}</span>
              </div>

              <ul>
                {Array.isArray(courses) &&
                  courses.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </article>

            <article className="experience-mini-card">
              <div className="mini-card-heading">
                <FiAward />
                <span>{t("experience_section.certifications_in_progress")}</span>
              </div>

              <ul>
                {Array.isArray(certifications) &&
                  certifications.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </article>

            <article className="experience-mini-card wide">
              <div className="mini-card-heading">
                <FiGlobe />
                <span>{t("experience_section.languages")}</span>
              </div>

              <ul className="languages-list">
                {Array.isArray(languages) &&
                  languages.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};