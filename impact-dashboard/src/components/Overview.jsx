import { PROJECTS } from "../data/projects";
import { useT } from "../lib/i18n";

export function MobileTabs({ activeId, onSelect }) {
  const { t } = useT();
  return (
    <div className="mobile-tabs" role="tablist" aria-label={t("catalog")}>
      <button type="button" role="tab" aria-selected={activeId === "catalog"} onClick={() => onSelect("catalog")}>
        {t("catalog")}
      </button>
      {PROJECTS.map((p) => (
        <button key={p.id} type="button" role="tab" aria-selected={p.id === activeId} onClick={() => onSelect(p.id)}>
          {p.name}
        </button>
      ))}
    </div>
  );
}
