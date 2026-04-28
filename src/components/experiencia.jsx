import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiBookOpen,
  FiAward,
  FiGlobe,
  FiArrowUpRight,
  FiCheckCircle,
  FiBriefcase,
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

  const educationItems = [
    {
      title: t("experience_section.teclab_title"),
      degree: t("experience_section.teclab_degree"),
    },
    {
      title: t("experience_section.davinci_title"),
      degree: t("experience_section.davinci_degree"),
    },
    {
      title: t("experience_section.utn_title"),
      degree: t("experience_section.utn_degree"),
    },
    {
      title: t("experience_section.computer_science_title"),
      degree: t("experience_section.computer_science_degree"),
    },
    {
      title: t("experience_section.career_start_title"),
      degree: t("experience_section.career_start_degree"),
    },
  ];

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
          <p>{t("experience_section.subtitle")}</p>
        </div>

        <div className="experience-layout">
          <article className="experience-main-card">
            <div className="experience-top">
              <div className="experience-icon">
                <FiBookOpen />
              </div>

              <div>
                <span>{t("experience_section.main_label")}</span>
                <h3>{t("experience_section.academic_training")}</h3>
              </div>
            </div>

            <div className="education-timeline">
              {educationItems.map((item, index) => (
                <div className="education-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.degree}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="experience-note">
              <FiArrowUpRight />
              <p>{t("experience_section.note")}</p>
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

            <article className="experience-mini-card">
              <div className="mini-card-heading">
                <FiBriefcase />
                <span>{t("experience_section.learning_focus")}</span>
              </div>

              <p className="mini-card-text">
                {t("experience_section.learning_focus_text")}
              </p>
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