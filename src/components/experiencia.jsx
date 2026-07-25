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
      year: "2019 - 2021",
    },
    {
      title: t("experience_section.davinci_title"),
      degree: t("experience_section.davinci_degree"),
      year: "2023",
    },
    {
      title: t("experience_section.utn_title"),
      degree: t("experience_section.utn_degree"),
      year: "2024",
    },
    {
      title: t("experience_section.computer_science_title"),
      degree: t("experience_section.computer_science_degree"),
      year: "4.5 Years",
    },
    {
      title: t("experience_section.career_start_title"),
      degree: t("experience_section.career_start_degree"),
      year: "2022 - Present",
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
      <div className="experience-container">
        {/* EDITORIAL HEADER LINE */}
        <div className="experience-editorial-header">
          <h2>EDUCATION & EXPERIENCE</h2>
          <span>TRAINING & KNOWLEDGE ⟶</span>
        </div>

        <div className="experience-layout">
          {/* MAIN EDUCATION TIMELINE */}
          <article className="experience-main-card">
            <div className="education-timeline">
              {educationItems.map((item, index) => (
                <div className="education-item" key={index}>
                  <div className="timeline-dot" />
                  <div className="education-info">
                    <h4>{item.title}</h4>
                    <p>{item.degree}</p>
                  </div>
                  <span className="education-year">{item.year}</span>
                </div>
              ))}
            </div>

            <div className="experience-note">
              <FiArrowUpRight />
              <p>{t("experience_section.note")}</p>
            </div>
          </article>

          {/* SIDE COURSES & CERTIFICATIONS */}
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