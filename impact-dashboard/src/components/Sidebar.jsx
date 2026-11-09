import { useState } from "react";
import { Check, Copy, FileText, LayoutGrid } from "lucide-react";
import { PROFILE } from "../data/profile";
import { GROUPS, PROJECTS } from "../data/projects";
import { LinkedInIcon } from "../lib/icons";
import { useT } from "../lib/i18n";

export function Sidebar({ activeId, onSelect, onOpenOnePager }) {
  const { t, x } = useT();
  const { email, linkedin } = PROFILE.contact;
  // "copied" | "shown" | null. mailto links often do nothing inside embedded views,
  // so the address is copied; if the clipboard is refused, it is shown instead.
  const [emailState, setEmailState] = useState(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailState("copied");
      setTimeout(() => setEmailState(null), 2000);
    } catch {
      setEmailState("shown");
    }
  };

  return (
    <aside className="sidebar" aria-label="Projects and links">
      <p className="logo" translate="no">
        <span className="logo-mark" aria-hidden="true">
          {PROFILE.initials}
        </span>
        Project Impact
      </p>

      <nav aria-label="Projects">
        <ul className="side-list">
          <li>
            <button
              type="button"
              className="side-item is-overview"
              aria-current={activeId === "catalog" ? "page" : undefined}
              onClick={() => onSelect("catalog")}
            >
              <LayoutGrid aria-hidden="true" size={16} strokeWidth={2} />
              {t("catalog")}
            </button>
          </li>
        </ul>
        {GROUPS.map((g) => (
          <div key={g.id} className="side-group">
            <p className="side-label">{x(g.label)}</p>
            <ul className="side-list">
              {PROJECTS.filter((p) => p.group === g.id).map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className="side-item"
                    aria-current={p.id === activeId ? "page" : undefined}
                    onClick={() => onSelect(p.id)}
                  >
                    <span className="side-dot" aria-hidden="true" />
                    <span className="side-name">{p.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="side-general">
        <p className="side-label">{t("general")}</p>
        <ul className="side-list">
          <li>
            <button type="button" className="side-item" onClick={onOpenOnePager}>
              <FileText aria-hidden="true" size={16} strokeWidth={1.9} />
              {t("onePager")}
            </button>
          </li>
          <li>
            <a className="side-item" href={linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="side-svg" />
              LinkedIn
            </a>
          </li>
          <li>
            <button type="button" className="side-item" onClick={copyEmail} title={email}>
              {emailState === "copied" ? (
                <Check aria-hidden="true" size={16} strokeWidth={2.2} />
              ) : (
                <Copy aria-hidden="true" size={16} strokeWidth={1.9} />
              )}
              <span aria-live="polite" className={emailState === "shown" ? "side-email" : ""}>
                {emailState === "copied" ? t("emailCopied") : emailState === "shown" ? email : t("copyEmail")}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
