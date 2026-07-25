import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiDownload, FiCalendar, FiMenu, FiX, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "../App.css";

export const RedesSociales = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#proyectos", label: i18n.language === "en" ? "Projects" : "Proyectos" },
    { href: "#tecnologias", label: i18n.language === "en" ? "Stack" : "Tecnologías" },
    { href: "#experiencia", label: i18n.language === "en" ? "Experience" : "Experiencia" },
    { href: "#auditoria", label: i18n.language === "en" ? "Book Call" : "Agendar" },
    { href: "#contacto", label: i18n.language === "en" ? "Contact" : "Contacto" },
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
      href: "#auditoria",
      icon: <FiCalendar />,
      label: i18n.language === "en" ? "Book Call" : "Agendar Cita",
    },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <>
      {/* TOP FIXED NAVIGATION BAR */}
      <header className="top-fixed-nav">
        <div className="nav-brand">
          <a href="/#/">
            <span className="brand-dot" />
            <span className="brand-name">Selenia Sánchez</span>
          </a>
        </div>

        <nav className="desktop-nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-item-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="btn-lang-toggle" onClick={toggleLanguage}>
            {i18n.language === "en" ? "ES" : "EN"}
          </button>

          <a
            href="/cv-selenia-sanchez.pdf"
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/cv-selenia-sanchez.pdf"
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
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                aria-label={l.label}
                data-tooltip={l.label}
              >
                {l.icon}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default RedesSociales;