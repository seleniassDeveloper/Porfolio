import { useEffect, useRef } from "react";
import { Download, X } from "lucide-react";
import { PROFILE } from "../data/profile";
import { PROJECTS } from "../data/projects";
import { isKnown } from "../lib/audit";
import { CAN_PRINT, FRAMED } from "../lib/env";
import { keyLine } from "../lib/figures";
import { useT } from "../lib/i18n";

function saveOnePager() {
  if (PROFILE.onePagerPdf) {
    const a = document.createElement("a");
    a.href = PROFILE.onePagerPdf;
    a.download = "";
    a.click();
    return;
  }
  // The document title becomes the suggested PDF filename.
  const previous = document.title;
  document.title = `${PROFILE.name.replace(/\s+/g, "-")}-Project-Impact`;
  window.addEventListener("afterprint", () => (document.title = previous), { once: true });
  window.print();
}

const featured = PROJECTS.filter((p) => p.featured);
const others = PROJECTS.filter((p) => !p.featured);

// The one-pager: an on-screen sheet and the layout used when printing / saving as PDF.
export function OnePager({ open, onClose }) {
  const { lang, t, x } = useT();
  const closeRef = useRef(null);
  const { email, linkedin } = PROFILE.contact;
  const url = PROFILE.dashboardUrl ?? (FRAMED ? null : `${window.location.origin}${window.location.pathname}`);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.classList.add("is-locked");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("is-locked");
      previous?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div
      className={`onepager ${open ? "is-open" : ""}`}
      role={open ? "dialog" : undefined}
      aria-modal={open || undefined}
      aria-labelledby="op-name"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="sheet-bar">
        <button ref={closeRef} type="button" className="btn btn-ghost btn-sm" onClick={onClose}>
          <X aria-hidden="true" size={16} /> {t("close")}
        </button>
        {CAN_PRINT && (
          <button type="button" className="btn btn-primary btn-sm" onClick={saveOnePager}>
            <Download aria-hidden="true" size={16} /> {t("savePdf")}
          </button>
        )}
      </div>

      <article className="sheet">
        <header className="op-head">
          <div>
            <h1 id="op-name">{PROFILE.name}</h1>
            <p>{x(PROFILE.title)}</p>
          </div>
          <address>
            <span>{email}</span>
            <span>{linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
          </address>
        </header>

        <p className="op-headline">
          {x(PROFILE.headline.lead)} <em>{x(PROFILE.headline.accent)}</em>
        </p>
        <p className="op-intro">{x(PROFILE.intro)}</p>

        <ul className="op-stats">
          {PROFILE.highlights.map((s) => (
            <li key={x(s.label)}>
              <strong>{x(s.value)}</strong>
              <span>{x(s.label)}</span>
            </li>
          ))}
        </ul>

        <h2>{t("selectedProjects")}</h2>
        <div className="op-projects">
          {featured.map((p) => {
            const facts = [
              [t("scope"), x(p.scope)],
              [t("role"), x(p.role)],
              p.deliveryTime ? [t("timeToProduction"), x(p.deliveryTime)] : [t("period"), x(p.period)],
            ].filter(([, v]) => isKnown(v));
            return (
              <section key={p.id}>
                <h3>{p.name}</h3>
                <p className="op-meta">{x(p.category)}</p>
                <p className="op-summary">{x(p.summary)}</p>
                <dl className="op-facts">
                  {facts.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="op-scale">{keyLine(p, lang)}</p>
                <p className="op-result">
                  <b>{t("result")}</b> {p.result.value && `${p.result.value} `}{x(p.result.headline)}
                </p>
              </section>
            );
          })}
        </div>

        {others.length > 0 && (
          <>
            <h2>{t("alsoBuilt")}</h2>
            <ul className="op-others">
              {others.map((p) => (
                <li key={p.id}>
                  <strong>{p.name}</strong> · {x(p.category)} · {keyLine(p, lang)}
                </li>
              ))}
            </ul>
          </>
        )}

        <section className="op-method">
          <h2>{t("howIWork")}</h2>
          <p>{x(PROFILE.method).join("  →  ")}</p>
        </section>

        {url && (
          <footer>
            {t("fullDashboard")}: {url}
          </footer>
        )}
      </article>
    </div>
  );
}
