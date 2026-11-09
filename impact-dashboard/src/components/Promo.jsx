import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { PROFILE } from "../data/profile";
import { useT } from "../lib/i18n";

// Contact card (sidebar on desktop, end of the page on phones).
export function Promo({ className = "" }) {
  const { t } = useT();
  const { email } = PROFILE.contact;
  const [copied, setCopied] = useState(false);
  const emailRef = useRef(null);

  // Some embedded views refuse clipboard access: fall back to selecting the address.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.getSelection()?.selectAllChildren(emailRef.current);
    }
  };

  return (
    <section className={`promo ${className}`} aria-label="Contact">
      <svg className="promo-lines" viewBox="0 0 200 160" aria-hidden="true" focusable="false">
        <path d="M-10 120 C 40 60, 90 150, 210 70" />
        <path d="M-10 135 C 40 75, 90 165, 210 85" />
        <path d="M-10 150 C 40 90, 90 180, 210 100" />
      </svg>
      <p className="promo-title">{t("promoTitle")}</p>
      <p className="promo-text">{t("promoText")}</p>
      <p className="promo-email" ref={emailRef}>
        {email.split("@")[0]}
        <wbr />@{email.split("@")[1]}
      </p>
      <button type="button" className="promo-btn" onClick={copyEmail}>
        {copied ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
        <span aria-live="polite">{copied ? t("emailCopied") : t("copyEmail")}</span>
      </button>
    </section>
  );
}
