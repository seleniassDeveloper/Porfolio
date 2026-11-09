import { Fragment } from "react";
import { ArrowRight, ArrowUpRight, ChartColumn, FileText, Info, Users } from "lucide-react";
import { useT } from "../lib/i18n";

// Small, honest charts built from confirmed numbers only. Every value carries its
// own label, so color is never the only way to read it.

/* Numbers that don't share a scale: each row keeps its own context and no bars
   suggest a comparison. rows: [{ key, name, value, context, role, onClick }] */
export function FactList({ rows, ariaLabel }) {
  return (
    <ul className="facts" aria-label={ariaLabel}>
      {rows.map((r) => (
        <li key={r.key}>
          <button type="button" className="fact" onClick={r.onClick}>
            <span className="fact-value">{r.value}</span>
            <span className="fact-text">
              <strong>{r.name}</strong>
              {r.context && <span>{r.context}</span>}
              {r.role && <small>{r.role}</small>}
            </span>
            <ArrowUpRight className="fact-go" aria-hidden="true" size={15} />
          </button>
        </li>
      ))}
    </ul>
  );
}

/* Change against the starting point: bars grow from 0, right for up, left for down.
   Both directions can be wins, so they share one hue and the sign carries direction.
   rows: [{ label, value, display }] */
export function ChangeBars({ rows, ariaLabel }) {
  const { x } = useT();
  const max = Math.max(...rows.map((r) => Math.abs(r.value)));
  return (
    <ul className="change" aria-label={ariaLabel}>
      {rows.map((r) => {
        const down = /^[−-]/.test(r.display);
        return (
          <li key={x(r.label)} title={`${x(r.label)}: ${r.display}`}>
            <span className="change-label">{x(r.label)}</span>
            <span className="change-track" aria-hidden="true">
              <span
                className={`change-bar ${down ? "is-down" : ""}`}
                style={{ width: `${(Math.abs(r.value) / max) * 50}%` }}
              />
            </span>
            <span className="change-value">{r.display}</span>
          </li>
        );
      })}
    </ul>
  );
}

/* Before → after on one money scale: the cost bar, then what is left (often nothing).
   rows: [{ label, value, share (0–1), estimated }] */
export function CompareBars({ title, rows }) {
  const { t, x } = useT();
  return (
    <figure className="compare">
      {title && <figcaption>{title}</figcaption>}
      <ul>
        {rows.map((r, i) => (
          <li key={x(r.label)} title={`${x(r.label)}: ${r.value}`}>
            <span className="compare-label">{x(r.label)}</span>
            <span className="compare-track">
              {r.share > 0 && <span className={`compare-bar ${i === 0 ? "is-before" : ""}`} style={{ width: `calc(${r.share * 100}% - ${r.share * 150}px)` }} />}
              <span className="compare-value">
                {r.value}
                {r.estimated && <em> · {t("estimate")}</em>}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}

/* A share of a whole as a ring (a radial meter): the number sits inside. */
export function Ring({ value }) {
  const pct = Math.min(parseFloat(value), 100);
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg className="ring" viewBox="0 0 64 64" aria-hidden="true">
      <circle className="ring-track" cx="32" cy="32" r={r} />
      <circle className="ring-fill" cx="32" cy="32" r={r} strokeDasharray={`${(pct / 100) * c} ${c}`} transform="rotate(-90 32 32)" />
    </svg>
  );
}

/* Time on the project, year by year, with a highlighted stretch (e.g. "from year 2").
   tenure: { from, to, highlight: { fromYear (1-based), label } } */
export function Tenure({ tenure }) {
  const { x } = useT();
  const years = Array.from({ length: tenure.to - tenure.from + 1 }, (_, i) => tenure.from + i);
  const span = years.length - 1;
  const hl = tenure.highlight;
  const start = hl ? ((hl.fromYear - 1) / span) * 100 : null;
  return (
    <figure className="tenure">
      <div className="tenure-track">
        <span className="tenure-bar" />
        {hl && <span className="tenure-highlight" style={{ left: `${start}%` }} />}
      </div>
      <ol className="tenure-ticks">
        {years.map((y, i) => (
          <li key={y} style={{ left: `${(i / span) * 100}%` }}>
            {y}
          </li>
        ))}
      </ol>
      {hl && (
        <figcaption className="tenure-legend">
          <span className="key is-base" aria-hidden="true" /> {x(tenure.label)}
          <span className="key is-highlight" aria-hidden="true" /> {x(hl.label)}
        </figcaption>
      )}
    </figure>
  );
}

/* Percentages on a 0–100% scale. rows: [{ label, value, display, note, project }] */
export function Meters({ rows }) {
  const { x } = useT();
  return (
    <ul className="meters">
      {rows.map((r, i) => (
        <li key={x(r.label)} style={{ "--i": i }} title={`${x(r.label)}: ${r.display}`}>
          <span className="meter-top">
            <span className="meter-label">
              {x(r.label)}
              {r.project && <small>{r.project}</small>}
            </span>
            <strong className="meter-value">{r.display}</strong>
          </span>
          <span className="meter-track" aria-hidden="true">
            <span className="meter-fill" style={{ width: `${Math.min(r.value, 100)}%` }} />
          </span>
          {r.note && <span className="meter-note">{x(r.note)}</span>}
        </li>
      ))}
    </ul>
  );
}

/* How an estimate is built: part × part → total, with its basis underneath. */
const PART_ICONS = { clients: Users, license: FileText };

export function SavingsEquation({ savings }) {
  const { t, x } = useT();
  return (
    <div className="savings">
      <div className="sv-row">
        {savings.parts.map((part, i) => {
          const Icon = PART_ICONS[part.icon];
          return (
            <Fragment key={part.value}>
              {i > 0 && (
                <span className="sv-op" aria-hidden="true">
                  ×
                </span>
              )}
              <div className="sv-term">
                {Icon && (
                  <span className="sv-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                )}
                <strong>{part.value}</strong>
                <span>{x(part.label)}</span>
              </div>
            </Fragment>
          );
        })}
        <span className="sv-op is-arrow" aria-hidden="true">
          <ArrowRight size={20} strokeWidth={2.6} />
        </span>
        <div className="sv-total">
          <span className="sv-icon" aria-hidden="true">
            <ChartColumn size={18} strokeWidth={2.6} />
          </span>
          <strong>{savings.total}</strong>
          <span>
            {x(savings.label)}
            {savings.estimated && <em> · {t("estimate")}</em>}
          </span>
          <svg className="sv-lines" viewBox="0 0 160 120" aria-hidden="true">
            <path d="M40 120 C 80 90, 120 70, 170 10" />
            <path d="M70 120 C 100 96, 130 80, 170 40" />
            <path d="M100 120 C 120 104, 140 94, 170 70" />
          </svg>
        </div>
      </div>
      {savings.compare && <CompareBars title={x(savings.compareTitle)} rows={savings.compare} />}
      {savings.note && (
        <p className="info-note">
          <Info aria-hidden="true" size={16} strokeWidth={2.2} />
          <span>{x(savings.note)}</span>
        </p>
      )}
    </div>
  );
}
