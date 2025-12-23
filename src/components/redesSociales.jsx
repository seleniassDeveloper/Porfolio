import "../App.css";

export const RedesSociales = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/selenia-sanchez-300498/",
      icon: "fab fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/seleniassDeveloper?tab=repositories",
      icon: "fab fa-github",
      label: "GitHub",
    },
    {
      href: "mailto:seleniadeveloper.com",
      icon: "fas fa-envelope",
      label: "Email",
    },
    {
      href: "https://www.upwork.com/freelancers/~019eee23ae575cea8a?viewMode=1",
      icon: "fas fa-briefcase",
      label: "Upwork",
    },
  ];

  return (
    <div className="redes-sociales">
      <ul>
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              data-tooltip={l.label}
            >
              <i className={l.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};