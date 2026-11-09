import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiActivity, FiArrowUpRight, FiAlertCircle, FiArrowRight } from "react-icons/fi";
import { metricLabel } from "../tracking/metricRegistry";
import { UsageChart } from "./UsageChart";
import { OTHER_SYSTEMS } from "../data/otherSystems";
import { PROFILE } from "../data/profile";
import { AUDIT } from "../lib/audit";

export function RoleCard({ role, area = "role" }) {
  return (
    <section className="pi-card pi-role" style={{ gridArea: area }} aria-labelledby="pi-role-title">
      <header className="pi-card-head">
        <h4 id="pi-role-title">My Role</h4>
      </header>
      <ul className="pi-tags">
        {role.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {(role.workMode || AUDIT) && (
        <p className="pi-role-mode">
          <span>Worked</span>
          {role.workMode ? <strong>{role.workMode}</strong> : <em className="pi-missing">Solo / With team?</em>}
        </p>
      )}
    </section>
  );
}

export function AdoptionCard({ project, metrics }) {
  const [selected, setSelected] = useState(null);
  const chartable = metrics.chartable;
  const metric = selected && chartable.includes(selected) ? selected : chartable[0];
  const { tracking } = project;

  return (
    <section className="pi-card pi-usage" style={{ gridArea: "usage" }} aria-labelledby="pi-usage-title">
      <header className="pi-card-head">
        <h4 id="pi-usage-title">Adoption &amp; Usage</h4>
        <FiActivity aria-hidden="true" />
      </header>

      {metric ? (
        <>
          {chartable.length > 1 && (
            <div className="pi-chips" role="tablist" aria-label="Indicator">
              {chartable.map((m) => (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={m === metric}
                  className={m === metric ? "is-active" : ""}
                  onClick={() => setSelected(m)}
                >
                  {metricLabel(m)}
                </button>
              ))}
            </div>
          )}
          <UsageChart metric={metric} points={metrics.series(metric)} />
        </>
      ) : (
        <div className="pi-usage-empty">
          <p className="pi-usage-status">
            {tracking.startedAt
              ? `Impact tracking started ${new Date(tracking.startedAt).toLocaleDateString("en", { month: "long", year: "numeric" })}`
              : "Impact tracking being set up"}
          </p>
          <p className="pi-usage-help">No usage history is shown until real data exists.</p>
          <ul className="pi-planned">
            {tracking.planned.map((m) => (
              <li key={m}>{metricLabel(m)}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

const COMPLEXITY_ROWS = [
  ["integrations", "Integrations"],
  ["coreWorkflows", "Core workflows"],
  ["userRoles", "User roles"],
  ["locations", "Locations"],
  ["productionSince", "Production since"],
];

export function ComplexityCard({ complexity }) {
  const rows = COMPLEXITY_ROWS.filter(([key]) => complexity[key] != null || AUDIT);
  if (!rows.length) return null;
  return (
    <section className="pi-card pi-complexity" style={{ gridArea: "complexity" }} aria-labelledby="pi-cx-title">
      <header className="pi-card-head">
        <h4 id="pi-cx-title">Project Complexity</h4>
      </header>
      <dl>
        {rows.map(([key, label]) => (
          <div key={key}>
            <dt>{label}</dt>
            <dd>{complexity[key] ?? <span className="pi-missing">—</span>}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function DecisionCard({ decision }) {
  return (
    <section className="pi-card pi-decision" style={{ gridArea: "decision" }}>
      <span className="pi-eyebrow">Product decision</span>
      <h4>{decision.title}</h4>
      <p>{decision.body}</p>
    </section>
  );
}

export function HowIWorkCard() {
  return (
    <section className="pi-card pi-how" style={{ gridArea: "role" }} aria-labelledby="pi-how-title">
      <header className="pi-card-head">
        <h4 id="pi-how-title">How I Work</h4>
      </header>
      <ol className="pi-method">
        {PROFILE.method.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <ul className="pi-how-notes">
        {PROFILE.howIWork.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  );
}

export function OtherSystemsCard() {
  const { t } = useTranslation();
  return (
    <section className="pi-card pi-others" style={{ gridArea: "story" }} aria-labelledby="pi-others-title">
      <header className="pi-card-head">
        <h4 id="pi-others-title">Systems in this group</h4>
        <Link to="/proyectos" className="pi-link">
          All case pages <FiArrowRight />
        </Link>
      </header>
      <ul className="pi-others-list">
        {OTHER_SYSTEMS.map((s) => (
          <li key={s.id}>
            <Link to={s.route}>
              <span className="pi-others-label">{t(s.labelKey)}</span>
              <strong>{t(s.titleKey)}</strong>
              <span className={`pi-others-state ${s.inProgress ? "is-progress" : ""}`}>
                {s.inProgress ? "Building" : "Completed"}
              </span>
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function StudioCta() {
  return (
    <aside className="pi-card pi-studio" style={{ gridArea: "cta" }}>
      <p>Interested in building a system like this?</p>
      <a href={PROFILE.links.studio} target="_blank" rel="noopener" className="pi-link">
        Work with SSStudio <FiArrowRight />
      </a>
    </aside>
  );
}

export function AuditCard({ items }) {
  if (!AUDIT || !items?.length) return null;
  return (
    <aside className="pi-audit" style={{ gridArea: "audit" }}>
      <header>
        <FiAlertCircle aria-hidden="true" /> Audit mode · data still missing for this project
      </header>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <small>Only visible in development or with ?audit in the URL.</small>
    </aside>
  );
}
