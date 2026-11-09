import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Briefcase,
  CalendarClock,
  Coins,
  Globe,
  LayoutDashboard,
  Search,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Rocket,
  Users,
  UsersRound,
} from "lucide-react";
import { PROFILE } from "../data/profile";
import { GROUPS, OVERVIEW, PROJECTS, getProject } from "../data/projects";
import { keyFigures } from "../lib/figures";
import { useT } from "../lib/i18n";
import { FactList, Meters } from "./Charts";
import { StatValue } from "./Stat";

const FIGURE_ICONS = { savings: Coins, up: TrendingUp, down: TrendingDown, time: CalendarClock, users: Users, countries: Globe };
const GROUP_ICONS = { systems: LayoutDashboard, team: UsersRound, own: Sparkles, clients: Briefcase };
const KPI_ICONS = { users: Users, up: TrendingUp, time: CalendarClock, launch: Rocket };

// A real screenshot (a legible close-up, same framing on every card), else the
// brand logo, else a quiet icon tile.
function Thumb({ project }) {
  const shot = project.screenshots?.[0];
  if (shot) {
    return (
      <span className="cat-thumb is-shot">
        <img src={shot.thumb ?? shot.src} alt="" loading="lazy" />
      </span>
    );
  }
  if (project.logo) {
    return (
      <span className="cat-thumb is-logo">
        <img src={project.logo} alt="" loading="lazy" />
      </span>
    );
  }
  const Glyph = GROUP_ICONS[project.group] ?? Boxes;
  return (
    <span className="cat-thumb is-empty" aria-hidden="true">
      <Glyph size={30} strokeWidth={1.6} />
    </span>
  );
}

function CatalogCard({ project, onSelect }) {
  const { lang, t, x } = useT();
  const figures = keyFigures(project, lang);
  return (
    <li>
      <button type="button" className="cat-card" onClick={() => onSelect(project.id)}>
        <Thumb project={project} />
        <span className="cat-body">
          <span className="cat-category">{x(project.category)}</span>
          <strong className="cat-name">{project.name}</strong>
          <span className="cat-summary">{x(project.summary)}</span>
          {figures.length > 0 && (
            <span className="cat-figures">
              {figures.map((f) => {
                const Glyph = FIGURE_ICONS[f.kind] ?? Boxes;
                return (
                  <span key={f.label} className="cat-figure">
                    <Glyph aria-hidden="true" size={14} strokeWidth={2} />
                    <span>
                      <b>{f.value}</b> {f.label}
                    </span>
                  </span>
                );
              })}
            </span>
          )}
          <span className="cat-foot">
            <span className="cat-role">{x(project.role)}</span>
            <span className="cat-cta">
              {t("viewProject")} <ArrowRight aria-hidden="true" size={14} />
            </span>
          </span>
        </span>
      </button>
    </li>
  );
}

const usersOf = (p) => p.scaleMetrics.find((m) => m.kind === "users");
const normalize = (text) =>
  String(text ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

// The first screen: a catalog of the work, then the impact in numbers.
export function CatalogPage({ onSelect }) {
  const { t, x } = useT();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const q = normalize(query.trim());
  const visible = PROJECTS.filter((p) => filter === "all" || p.group === filter).filter(
    (p) => !q || [p.name, x(p.category), x(p.summary), x(p.role)].some((field) => normalize(field).includes(q))
  );

  // Each time and each user count belongs to a different scope, so they are listed
  // with their context instead of drawn on one scale.
  const speed = PROJECTS.filter((p) => p.deliveryDays)
    .sort((a, b) => a.deliveryDays - b.deliveryDays)
    .map((p) => ({
      key: p.id,
      name: p.name,
      value: x(p.deliveryTime),
      context: `${x(p.scope)} · ${x(p.category)}`,
      onClick: () => onSelect(p.id),
    }));

  const reach = PROJECTS.filter(usersOf)
    .map((p) => ({ p, m: usersOf(p) }))
    .sort((a, b) => b.m.n - a.m.n)
    .map(({ p, m }) => ({
      key: p.id,
      name: p.name,
      value: m.value,
      context: [x(m.label), x(m.context)].filter(Boolean).join(" · "),
      role: `${t("myRoleShort")}: ${x(p.role)}`,
      onClick: () => onSelect(p.id),
    }));

  const improvements = PROJECTS.flatMap((p) => (p.impact?.improvements ?? []).map((r) => ({ ...r, project: p.name })));

  return (
    <div className="dashboard catalog">
      <section id="project" className="card cat-hero" aria-labelledby="catalog-title">
        <p className="cat-kicker">{x(OVERVIEW.kicker)}</p>
        <h2 id="catalog-title">
          {x(PROFILE.headline.lead)} <em>{x(PROFILE.headline.accent)}</em>
        </h2>
        <p className="m-summary">{x(OVERVIEW.intro)}</p>
        <ul className="ov-kpis" aria-label={t("headlineResults")}>
          {OVERVIEW.highlights.map((h) => {
            const project = getProject(h.project);
            const Glyph = KPI_ICONS[h.icon] ?? TrendingUp;
            return (
              <li key={x(h.label)}>
                <button type="button" className="ov-kpi" onClick={() => onSelect(project.id)}>
                  <span className="ov-kpi-top">
                    <Glyph aria-hidden="true" size={24} strokeWidth={1.8} />
                    <StatValue value={x(h.value)} />
                  </span>
                  <span className="ov-kpi-label">
                    {x(h.label)}
                    {h.estimated && <em> · {t("estimate")}</em>}
                  </span>
                  <span className="ov-kpi-project">
                    {project.name}
                    {h.context && ` · ${x(h.context)}`} <ArrowUpRight aria-hidden="true" size={13} />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="cat-toolbar">
        <div className="cat-filters" role="tablist" aria-label={t("catalog")}>
          {[{ id: "all", label: t("all") }, ...GROUPS.map((g) => ({ id: g.id, label: x(g.label) }))].map((f) => {
            const count = f.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.group === f.id).length;
            return (
              <button key={f.id} type="button" role="tab" aria-selected={filter === f.id} onClick={() => setFilter(f.id)}>
                {f.label} <span>{count}</span>
              </button>
            );
          })}
        </div>
        <label className="cat-search">
          <Search aria-hidden="true" size={16} />
          <span className="visually-hidden">{t("searchProjects")}</span>
          <input
            id="catalog-search"
            type="search"
            value={query}
            placeholder={t("searchProjects")}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      {visible.length > 0 ? (
        <ul className="cat-grid">
          {visible.map((p) => (
            <CatalogCard key={p.id} project={p} onSelect={onSelect} />
          ))}
        </ul>
      ) : (
        <p className="cat-empty">{t("noMatches")}</p>
      )}

      <h2 className="cat-section">{t("impactInNumbers")}</h2>
      <div className="bento">
        {speed.length > 0 && (
          <section className="card m-chart" aria-labelledby="speed-title">
            <header className="m-head">
              <h3 id="speed-title">{t("timeToProduction")}</h3>
            </header>
            <FactList rows={speed} ariaLabel={t("timeToProduction")} />
            <p className="chart-note">{t("speedNote")}</p>
          </section>
        )}

        {reach.length > 0 && (
          <section className="card m-chart" aria-labelledby="reach-title">
            <header className="m-head">
              <h3 id="reach-title">{t("peopleUsing")}</h3>
            </header>
            <FactList rows={reach} ariaLabel={t("peopleUsing")} />
            <p className="chart-note">{t("reachNote")}</p>
          </section>
        )}

        {improvements.length > 0 && (
          <section className="card m-chart is-wide" aria-labelledby="improve-title">
            <header className="m-head">
              <h3 id="improve-title">{t("measuredImprovements")}</h3>
            </header>
            <Meters rows={improvements} />
          </section>
        )}

      </div>
    </div>
  );
}
