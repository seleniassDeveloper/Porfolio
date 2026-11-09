import { FileText, Mail } from "lucide-react";
import { PROFILE } from "../data/profile";
import { AUDIT } from "../lib/audit";
import { useT } from "../lib/i18n";
import { LinkedInIcon } from "../lib/icons";

export function Topbar({ onOpenOnePager }) {
  const { lang, setLang, t, x } = useT();
  const { email, linkedin } = PROFILE.contact;
  return (
    <header className="topbar">
      <p className="me" translate="no">
        <span className="me-avatar" aria-hidden="true">
          {PROFILE.initials}
        </span>
        <span className="me-text">
          <strong>{PROFILE.name}</strong>
          <span>{x(PROFILE.title)}</span>
        </span>
      </p>
      {AUDIT && <p className="topbar-pill">{t("auditMode")}</p>}
      <div className="topbar-right">
        <div className="lang-switch" role="group" aria-label={t("language")}>
          {["en", "es"].map((code) => (
            <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)}>
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button type="button" className="btn btn-primary btn-sm" onClick={onOpenOnePager}>
          <FileText aria-hidden="true" size={16} />
          <span>{t("onePager")}</span>
        </button>
        <a className="icon-btn" href={`mailto:${email}?subject=${encodeURIComponent("Project Impact")}`} aria-label={t("emailMe")} title={email}>
          <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
        </a>
        <a className="icon-btn" href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={t("linkedinProfile")} title="LinkedIn">
          <LinkedInIcon />
        </a>
      </div>
    </header>
  );
}
