import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChartPie,
  Check,
  CircleAlert,
  CircleCheck,
  CircleX,
  ClipboardList,
  FileSearch,
  FileText,
  Info,
  MessageCircleMore,
  Plus,
  Sparkles,
} from "lucide-react";
import { GROUPS, PROJECTS, nextProject } from "../data/projects";
import { AUDIT, isKnown } from "../lib/audit";
import { keyLine } from "../lib/figures";
import { useT } from "../lib/i18n";
import { StatValue } from "./Stat";
import { ChangeBars, Ring, SavingsEquation, Tenure } from "./Charts";

const has = (list) => Array.isArray(list) && list.length > 0;
const pad = (n) => String(n).padStart(2, "0");

function ModuleHead({ id, label, children }) {
  return (
    <header className="m-head">
      <h3 id={id}>{label}</h3>
      {children}
    </header>
  );
}

/* The 10-second scan: what it is, scope, role, time, status — and the product itself. */
function ProjectHeader({ project, onBack }) {
  const { t, x } = useT();
  const group = GROUPS.find((g) => g.id === project.group);
  const shot = project.screenshots?.[0];
  const index = PROJECTS.indexOf(project) + 1;
  const chips = [
    { label: t("scope"), value: x(project.scope) },
    { label: t("role"), value: x(project.role) },
    project.deliveryTime
      ? { label: t("timeToProduction"), value: t("toProductionChip", { time: x(project.deliveryTime) }), strong: true }
      : { label: t("period"), value: x(project.period) },
  ].filter((c) => isKnown(c.value));

  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <button type="button" onClick={onBack}>
          <ArrowLeft aria-hidden="true" size={14} /> {t("backToCatalog")}
        </button>
        {group && <span>{x(group.label)}</span>}
        <span aria-current="page">{project.name}</span>
      </nav>
      <section id="project" className={`card m-header ${shot ? "has-shot" : ""}`} aria-labelledby="project-title">
        <div className="m-header-body">
          <p className="m-kicker">
            <span className="m-number" aria-label={t("projectOf", { i: index, n: PROJECTS.length })}>
              {pad(index)} / {pad(PROJECTS.length)}
            </span>
            {group && <span>{x(group.label)}</span>}
          </p>
          <h2 id="project-title">{project.name}</h2>
          <p className="m-category">{x(project.category)}</p>
          <p className="m-summary">{x(project.summary)}</p>
          {project.liveSite && (
            <a className="live-link" href={project.liveSite.href} target="_blank" rel="noopener noreferrer">
              <span>{t("viewLive")}</span>
              <small>{x(project.liveSite.label)}</small>
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.4} />
            </a>
          )}
          {(chips.length > 0 || project.status) && (
            <ul className="m-chips">
              {chips.map((c) => (
                <li key={c.label} className={c.strong ? "is-strong" : ""}>
                  <span className="visually-hidden">{c.label}: </span>
                  {c.value}
                </li>
              ))}
              {project.status && (
                <li className={`m-status ${project.status.live ? "is-live" : ""}`}>
                  <span className="status-dot" aria-hidden="true" />
                  {x(project.status.label)}
                </li>
              )}
            </ul>
          )}
        </div>
        {shot && (
          <figure className="m-shot">
            {project.liveSite ? (
              <a href={project.liveSite.href} target="_blank" rel="noopener noreferrer" title={x(project.liveSite.label)}>
                <img src={shot.src} alt={x(shot.alt)} />
              </a>
            ) : (
              <img src={shot.src} alt={x(shot.alt)} />
            )}
          </figure>
        )}
      </section>
    </>
  );
}

/* The one main result: the strongest card on the page, with the measured change
   drawn when there is one. */
function Result({ result, improvements }) {
  const { t, x } = useT();
  if (!result?.headline) return null;
  const metrics = x(result.metrics) ?? [];
  return (
    <section id="result" className={`m-result ${result.value ? "has-value" : ""}`} aria-labelledby="result-title">
      <p className="m-result-label" id="result-title">
        {t("result")}
      </p>
      {result.value && <p className="result-value">{result.value}</p>}
      <p className="result-headline">{x(result.headline)}</p>
      {result.description && <p className="result-desc">{x(result.description)}</p>}
      {has(improvements) && (
        <div className="result-chart">
          <p className="result-chart-title">{t("measuredChange")}</p>
          <ChangeBars rows={improvements} ariaLabel={t("measuredChange")} />
        </div>
      )}
      {result.source && (
        <p className="source">
          {t("source")}: {x(result.source)}
        </p>
      )}
      {(has(metrics) || result.link) && (
        <ul className="evidence" aria-label={t("evidence")}>
          {metrics.map((m) => (
            <li key={m}>{m}</li>
          ))}
          {result.link && (
            <li className="is-link">
              <a href={result.link.href} target="_blank" rel="noopener noreferrer">
                {x(result.link.label)} <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </li>
          )}
        </ul>
      )}
    </section>
  );
}

/* Confirmed numbers only; as many as exist, none invented to fill a row. */
function Scale({ metrics }) {
  const { t, x } = useT();
  if (!has(metrics)) return null;
  return (
    <section className="card m-scale" aria-labelledby="scale-title">
      <ModuleHead id="scale-title" label={t("scale")} />
      <ul className="scale" style={{ "--count": metrics.length }}>
        {metrics.map((m) => (
          <li key={m.value + x(m.label)}>
            <StatValue value={m.value} />
            <span className="scale-label">{x(m.label)}</span>
            {m.context && <span className="scale-context">{x(m.context)}</span>}
            {/%$/.test(m.value) && <Ring value={m.value} />}
            {m.source && (
              <span className="source">
                {t("source")}: {x(m.source)}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* Problem → solution: the situation before, and what was built to answer it. */
function Problem({ problem, solution }) {
  const { t, x } = useT();
  if (!problem) return null;
  return (
    <section className="card m-problem" aria-labelledby="problem-title">
      <h3 id="problem-title" className="visually-hidden">
        {t("problem")} → {t("solution")}
      </h3>
      <div className={`ps ${solution ? "has-solution" : ""}`}>
        <div className="ps-side is-problem">
          <p className="ps-kicker">
            <CircleAlert aria-hidden="true" size={15} strokeWidth={2} />
            {t("problem")}
          </p>
          <p className="problem-text">
            <mark className="problem-mark">{x(problem)}</mark>
          </p>
        </div>
        {solution && (
          <>
            <span className="ps-arrow" aria-hidden="true">
              <ArrowRight size={22} strokeWidth={2.6} />
            </span>
            <div className="ps-side is-solution">
              <p className="ps-kicker">
                <CircleCheck aria-hidden="true" size={15} strokeWidth={2} />
                {t("solution")}
              </p>
              <p className="solution-text">{x(solution)}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* The parts of the product (the parts of the job are in My ownership). */
function Built({ built }) {
  const { t, x } = useT();
  const items = x(built?.items) ?? [];
  if (!has(items)) return null;
  return (
    <section className="card m-built" aria-labelledby="built-title">
      <ModuleHead id="built-title" label={t("built")} />
      {has(items) && (
        <ul className={`built-list ${items.length > 5 ? "is-columns" : ""}`}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

/* How it works: numbered steps, with an icon and a line each when the data has them. */
const STEP_ICONS = { doc: FileText, chat: MessageCircleMore, spark: Sparkles, analysis: FileSearch, report: ChartPie };

function HowItWorks({ flow }) {
  const { t, x } = useT();
  const steps = (Array.isArray(flow) ? flow : x(flow) ?? []).map((step) =>
    typeof step === "string" ? { title: step } : { ...step, title: x(step.title), text: x(step.text) }
  );
  if (!has(steps)) return null;
  const rich = steps.some((step) => step.icon);
  return (
    <section className="card m-flow" aria-labelledby="flow-title">
      <ModuleHead id="flow-title" label={t("howItWorks")} />
      <ol className={`flow ${rich ? "is-rich" : ""}`}>
        {steps.map((step, i) => {
          const Icon = STEP_ICONS[step.icon];
          return (
            <li key={step.title}>
              <span className={Icon ? "flow-icon" : "flow-num"} aria-hidden="true">
                {Icon ? <Icon size={24} strokeWidth={1.9} /> : i + 1}
              </span>
              <span className="flow-text">
                {rich ? `${i + 1}. ${step.title}` : step.title}
                {step.text && <small>{step.text}</small>}
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

/* The AI engines a product works with, as connected integrations. */
function Engines({ engines }) {
  const { t } = useT();
  if (!has(engines)) return null;
  return (
    <section className="card m-engines" aria-labelledby="engines-title">
      <ModuleHead id="engines-title" label={t("aiEngines")} />
      <ul className="engines">
        {engines.map((engine) => (
          <li key={engine.name}>
            <img src={engine.logo} alt="" width="44" height="44" />
            <strong>{engine.name}</strong>
            <span className="engine-status">
              <CircleCheck aria-hidden="true" size={15} strokeWidth={2.4} />
              {t("connected")}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* What was replaced and what replaced it. Hidden without confirmed items. */
function BeforeAfter({ data }) {
  const { t, x } = useT();
  const before = x(data?.before?.items) ?? [];
  const after = x(data?.after?.items) ?? [];
  if (!has(before) || !has(after)) return null;
  return (
    <section className="card m-before-after" aria-labelledby="ba-title">
      <ModuleHead id="ba-title" label={t("beforeAfter")} />
      <div className="ba">
        <div className="ba-side is-before">
          <p className="ba-kicker">{t("before")}</p>
          <p className="ba-title">{x(data.before.title)}</p>
          <ul>
            {before.map((item) => (
              <li key={item}>
                <CircleX aria-hidden="true" size={16} strokeWidth={2.2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <span className="ba-arrow" aria-hidden="true">
          <ArrowRight size={22} strokeWidth={2.6} />
        </span>
        <div className="ba-side is-after">
          <p className="ba-kicker">{t("after")}</p>
          <p className="ba-title">{x(data.after.title)}</p>
          <ul>
            {after.map((item) => (
              <li key={item}>
                <CircleCheck aria-hidden="true" size={16} strokeWidth={2.2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* An estimate, drawn with its basis. Hidden without one. */
function BusinessImpact({ impact }) {
  const { t } = useT();
  if (!impact?.savings) return null;
  return (
    <section className="card m-impact" aria-labelledby="impact-title">
      <ModuleHead id="impact-title" label={t("howMuchSaved")} />
      <SavingsEquation savings={impact.savings} />
    </section>
  );
}

/* More real screenshots, when there are any beyond the header one. */
function Gallery({ screenshots }) {
  const { t, x } = useT();
  const rest = screenshots?.slice(1) ?? [];
  if (!rest.length) return null;
  return (
    <section className="card m-gallery" aria-labelledby="gallery-title">
      <ModuleHead id="gallery-title" label={t("screenshots")} />
      <ul className="gallery">
        {rest.map((shot) => (
          <li key={shot.src}>
            <a href={shot.src} target="_blank" rel="noopener noreferrer">
              <img src={shot.src} alt={x(shot.alt)} loading="lazy" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* Timeline: one stop per real phase, drawn to scale ("M2–5" spans four months),
   ending on the live point. A few words per phase, never paragraphs. */
const PERIOD = /(?:\bM|months?\s+|mes(?:es)?\s+)(\d+)(?:\s*[–-]\s*(\d+))?/i;
const monthsIn = (period) => {
  const m = PERIOD.exec(period ?? "");
  return m ? Number(m[2] ?? m[1]) - Number(m[1]) + 1 : null;
};

function Delivery({ phases }) {
  const { t, x } = useT();
  if (!phases || !has(phases.items)) return null;
  const weights = phases.items.map((ph) => monthsIn(x(ph.period)));
  const toScale = weights.every(Boolean);
  const columns = phases.items
    .map((ph, i) => (ph.live ? "auto" : toScale ? `minmax(180px, ${weights[i]}fr)` : "minmax(0, 1fr)"))
    .join(" ");
  const ongoing = x(phases.ongoingWork);
  const endsLive = phases.items.at(-1)?.live;

  return (
    <section id="approach" className="card m-phases" aria-labelledby="phases-title">
      <ModuleHead id="phases-title" label={x(phases.title)} />
      <ol className="journey" style={{ "--cols": columns }}>
        {phases.items.map((ph, i) => {
          const tags = x(ph.tags) ?? [];
          return (
            <li key={x(ph.name)} className={`stage ${ph.live ? "is-live" : ""}`} style={{ "--i": i }}>
              <span className="stage-track" aria-hidden="true">
                {ph.live && <span className="live-node" />}
                {ph.live && ongoing && <span className="ongoing-tail">{ongoing}</span>}
              </span>
              <p className="stage-name">
                <span className="stage-index">{pad(i + 1)}</span> {x(ph.name)}
              </p>
              {ph.period ? <p className="stage-period">{x(ph.period)}</p> : <span />}
              {has(tags) ? (
                <p className="stage-tags">{tags.join(" · ")}</p>
              ) : (
                ph.description && <p className="stage-desc">{x(ph.description)}</p>
              )}
            </li>
          );
        })}
      </ol>
      {ongoing && (
        <p className={`ongoing ${endsLive ? "is-tail" : ""}`}>
          <span className="ongoing-line" aria-hidden="true" />
          {ongoing}
        </p>
      )}
      <p className="info-note phases-note">
        <Info aria-hidden="true" size={15} strokeWidth={2.2} />
        <span>{t("timingDepends")}</span>
      </p>
    </section>
  );
}

/* What I was responsible for, grouped — next to the role it sits in, so a team
   project never reads as end-to-end. */
const ROLE_GROUPS = ["product", "engineering", "delivery"];

function MyRole({ ownership, role }) {
  const { t, x } = useT();
  const groups = ROLE_GROUPS.map((key) => [key, x(ownership?.[key]) ?? []]).filter(([, items]) => has(items));
  if (!groups.length) return null;
  return (
    <section id="role" className="card m-ownership" aria-labelledby="ownership-title">
      <ModuleHead id="ownership-title" label={t("myRole")}>
        {isKnown(x(role)) && <span className="m-head-note">{x(role)}</span>}
      </ModuleHead>
      <div className="own-groups" style={{ "--count": groups.length }}>
        {groups.map(([key, items]) => (
          <div key={key} className="own-group">
            <h4>{t(key)}</h4>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <span className="own-check" aria-hidden="true">
                    <Check size={11} strokeWidth={3.4} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Years on the project (team products), drawn on a year ruler. */
function TenureChart({ tenure }) {
  const { t } = useT();
  if (!tenure) return null;
  return (
    <section className="card m-tenure" aria-labelledby="tenure-title">
      <ModuleHead id="tenure-title" label={t("timeOnProject")} />
      <Tenure tenure={tenure} />
    </section>
  );
}

/* Key technical decisions and their trade-offs. Hidden until confirmed. */
function Decisions({ decisions }) {
  const { t, x } = useT();
  if (!has(decisions)) return null;
  return (
    <section className="card m-decisions" aria-labelledby="decisions-title">
      <ModuleHead id="decisions-title" label={t("decisions")} />
      <ul className="decisions">
        {decisions.map((d) => (
          <li key={x(d.decision)}>
            <strong>{x(d.decision)}</strong>
            {d.why && <span>{x(d.why)}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* The stack as a diagram — frontend → backend → database, plus the services it
   talks to — for projects where she built both sides. */
const ARCH_LAYERS = ["frontend", "backend", "database"];

function Architecture({ technology }) {
  const { t, x } = useT();
  const layers = ARCH_LAYERS.filter((key) => has(technology?.[key]));
  const services = [...(technology?.integrations ?? []), ...(technology?.apis ?? [])];
  if (!layers.length) return null;
  return (
    <section className="card m-arch" aria-labelledby="arch-title">
      <ModuleHead id="arch-title" label={t("architecture")} />
      <div className={`arch ${has(services) ? "has-services" : ""}`}>
        <ol className="arch-layers">
          {layers.map((key) => (
            <li key={key} className="arch-node">
              <span className="arch-kind">{t(key)}</span>
              <span className="arch-items">{technology[key].map((item) => x(item)).join(" · ")}</span>
            </li>
          ))}
        </ol>
        {has(services) && (
          <div className="arch-services">
            <span className="arch-kind">{t("integrations")}</span>
            <ul>
              {services.map((item) => (
                <li key={x(item)}>{x(item)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {has(technology.infrastructure) && (
        <p className="arch-hosting">
          {t("infrastructure")}: {technology.infrastructure.map((item) => x(item)).join(" · ")}
        </p>
      )}
    </section>
  );
}

/* Secondary: the stack, collapsed by default. */
const TECH_ROWS = ["frontend", "backend", "database", "infrastructure", "integrations", "apis", "access"];

function Technical({ technology }) {
  const { t, x } = useT();
  const rows = TECH_ROWS.filter((key) => has(technology?.[key]));
  if (!rows.length) return null;
  return (
    <details className="card m-tech">
      <summary>
        {t("technical")}
        <Plus aria-hidden="true" size={16} strokeWidth={2.4} />
      </summary>
      <dl className="tech">
        {rows.map((key) => (
          <div key={key}>
            <dt>{t(key)}</dt>
            <dd>
              <ul className="chips is-quiet">
                {technology[key].map((item) => (
                  <li key={x(item)}>{x(item)}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

function NextCase({ project, onSelect }) {
  const { lang, t, x } = useT();
  const next = nextProject(project);
  return (
    <button type="button" className="card m-next" onClick={() => onSelect(next.id)}>
      <span className="next-label">
        {t("nextCase")} <ArrowRight aria-hidden="true" size={14} />
      </span>
      <span className="next-text">
        <strong>{next.name}</strong>
        <span>{x(next.category)}</span>
      </span>
      <span className="next-result">{keyLine(next, lang)}</span>
    </button>
  );
}

function Audit({ project }) {
  if (!AUDIT || (!has(project.pending) && !has(project.toConfirm))) return null;
  return (
    <section className="card m-audit" aria-labelledby="audit-title">
      <ModuleHead id="audit-title" label="To confirm before this goes public">
        <ClipboardList aria-hidden="true" size={16} />
      </ModuleHead>
      <ul className="audit-list">
        {project.pending.map((p) => (
          <li key={p}>Add when measured: {p}</li>
        ))}
        {project.toConfirm.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="card-note">Only visible with ?audit in dev. Fill these in src/data/projects.js.</p>
    </section>
  );
}

// Reading order: what it is → problem → my role → what I built → scale → result,
// then how it shipped and the details.
export function Dashboard({ project, onSelect, onBack }) {
  return (
    <div className="dashboard" key={project.id}>
      <ProjectHeader project={project} onBack={onBack} />
      <div className="bento">
        <Problem problem={project.problem} solution={project.built?.summary} />
        <MyRole ownership={project.ownership} role={project.role} />
        <Built built={project.built} />
        <Scale metrics={project.scaleMetrics} />
        <HowItWorks flow={project.built?.flow} />
        <Engines engines={project.engines} />
        <Result result={project.result} improvements={project.impact?.improvements} />
        <BeforeAfter data={project.beforeAfter} />
        <BusinessImpact impact={project.impact} />
        <Decisions decisions={project.decisions} />
        <Delivery phases={project.phases} />
        <TenureChart tenure={project.tenure} />
        {project.architecture && <Architecture technology={project.technology} />}
        <Gallery screenshots={project.screenshots} />
        {!project.architecture && <Technical technology={project.technology} />}
        <NextCase project={project} onSelect={onSelect} />
        <Audit project={project} />
      </div>
    </div>
  );
}
