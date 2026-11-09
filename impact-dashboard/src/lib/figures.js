import { tx } from "./i18n";
import { UI } from "../data/ui";

// The project's strongest confirmed figures, in priority order (kind picks the icon):
// measured improvements → time to production → scale. Estimates never appear here;
// they stay, marked, on their own project page.
export function keyFigures(project, lang, limit = 2) {
  const t = (k) => UI[lang]?.[k] ?? UI.en[k];
  const out = [];
  for (const imp of project.impact?.improvements ?? []) {
    out.push({ kind: /^[−-]/.test(imp.display) ? "down" : "up", value: imp.display, label: tx(imp.label, lang) });
  }
  if (project.deliveryTime) out.push({ kind: "time", value: tx(project.deliveryTime, lang), label: t("toProduction") });
  for (const m of project.scaleMetrics) out.push({ kind: m.kind ?? "metric", value: m.value, label: tx(m.label, lang) });
  return out.slice(0, limit);
}

// One line for teasers ("820+ internal users · 17 countries"), else the result headline.
export function keyLine(project, lang) {
  const figures = keyFigures(project, lang);
  if (figures.length) return figures.map((f) => `${f.value} ${f.label.charAt(0).toLowerCase()}${f.label.slice(1)}`).join(" · ");
  return tx(project.result?.headline, lang) ?? "";
}
