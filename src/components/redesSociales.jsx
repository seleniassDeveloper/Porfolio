import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiDownload, FiCalendar, FiMenu, FiX, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "../App.css";
import cvPdf from "../assets/cv-selenia-sanchez.pdf";

export const RedesSociales = () => {
  const { i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { targetId: "proyectos", label: i18n.language === "en" ? "Projects" : "Proyectos" },
    { targetId: "tecnologias", label: i18n.language === "en" ? "Stack" : "Tecnologías" },
    { targetId: "experiencia", label: i18n.language === "en" ? "Experience" : "Experiencia" },
    { targetId: "auditoria", label: i18n.language === "en" ? "Book Call" : "Agendar" },
    { targetId: "contacto", label: i18n.language === "en" ? "Contact" : "Contacto" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/selenia-sanchez-300498/",
      icon: <FiLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/seleniassDeveloper?tab=repositories",
      icon: <FiGithub />,
      label: "GitHub",
    },
    {
      href: "mailto:ssseleniasanchez@gmail.com",
      icon: <FiMail />,
      label: "Email",
    },
    {
      href: "https://wa.me/5491136450378",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
    },
    {
      targetId: "auditoria",
      icon: <FiCalendar />,
      label: i18n.language === "en" ? "Book Call" : "Agendar Cita",
    },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#/#${targetId}`;
      setTimeout(() => {
        const targetEl = document.getElementById(targetId);
        if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <>
      {/* TOP FIXED NAVIGATION BAR */}
      <header className="top-fixed-nav">
        <div className="nav-brand">
          <a href="/#/" onClick={(e) => handleNavClick(e, "hero")}>
            <span className="brand-name">Selenia Sánchez</span>
          </a>
        </div>

        <nav className="desktop-nav-links">
          {navItems.map((item) => (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              className="nav-item-link"
              onClick={(e) => handleNavClick(e, item.targetId)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="btn-lang-toggle" onClick={toggleLanguage}>
            {i18n.language === "en" ? "ES" : "EN"}
          </button>

          <a
            href={cvPdf}
            download="CV_Selenia_Sanchez_Frontend_Developer.pdf"
            className="btn-nav-cv"
          >
            <FiDownload /> <span>CV</span>
          </a>

          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            {navItems.map((item) => (
              <a
                key={item.targetId}
                href={`#${item.targetId}`}
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, item.targetId)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={cvPdf}
              download="CV_Selenia_Sanchez_Frontend_Developer.pdf"
              className="btn-mobile-cv"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiDownload /> {i18n.language === "en" ? "Download CV" : "Descargar CV"}
            </a>
          </div>
        )}
      </header>

      {/* FLOATING SIDEBAR SOCIAL MEDIA */}
      <aside className="redes-sociales">
        <ul>
          {socialLinks.map((l) => (
            <li key={l.label}>
              {l.href ? (
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  data-tooltip={l.label}
                >
                  {l.icon}
                </a>
              ) : (
                <a
                  href={`#${l.targetId}`}
                  onClick={(e) => handleNavClick(e, l.targetId)}
                  aria-label={l.label}
                  data-tooltip={l.label}
                >
                  {l.icon}
                </a>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default RedesSociales;