import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { UI } from "../data/ui";

const LangContext = createContext({ lang: "en", setLang: () => {} });
const STORAGE_KEY = "project-impact-lang";
const LANGS = ["en", "es"];

// ?lang=es wins (shareable), then the visitor's last choice, then the browser language.
function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    // Storage can be blocked; the browser language decides.
  }
  return (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Not persisting is fine.
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// A content value is either plain text (same in both languages) or { en, es }.
export const tx = (value, lang) => {
  if (value && typeof value === "object" && !Array.isArray(value) && ("en" in value || "es" in value)) {
    return value[lang] ?? value.en;
  }
  return value;
};

// t("key", { n: 3 }) for interface text, x(value) for content.
export function useT() {
  const { lang, setLang } = useContext(LangContext);
  const t = (key, vars) => {
    let text = UI[lang]?.[key] ?? UI.en[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) text = text.replace(`{${k}}`, v);
    return text;
  };
  const x = (value) => tx(value, lang);
  return { lang, setLang, t, x };
}
