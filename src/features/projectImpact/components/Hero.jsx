import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { formatMetricValue } from "../tracking/metricRegistry";

// "7 months" → big "7" + small "months"; text values ("End-to-End") get a text size.
function MetricValue({ value }) {
  const m = /^(~?[\d.,]+[%kKmM]?)\s+(.+)$/.exec(value);
  if (m) {
    return (
      <strong className="pi-metric-value">
        {m[1]}
        <small>{m[2]}</small>
      </strong>
    );
  }
  const numeric = /^~?[\d.,]+[%kKmM]?$/.test(value);
  return <strong className={`pi-metric-value ${numeric ? "" : "is-text"}`}>{value}</strong>;
}

function MetricCard({ metric, metrics }) {
  let value = metric.value;
  let verified = metric.type === "fact";

  if (metric.type === "tracked") {
    const point = metrics.latest(metric.metric);
    value = point ? formatMetricValue(metric.metric, point.value) : null;
    verified = Boolean(point);
  }

  return (
    <div className={`pi-metric ${verified ? "is-verified" : "is-pending"}`}>
      {value ? (
        <MetricValue value={value} />
      ) : (
        <strong className="pi-metric-value is-empty">Data being collected</strong>
      )}
      <span className="pi-metric-label">
        <i aria-hidden="true" />
        {metric.label}
      </span>
    </div>
  );
}

export function Hero({ project, metrics, eyebrow, onOpenProject }) {
  const cta = (() => {
    if (onOpenProject) {
      return (
        <button type="button" className="pi-btn pi-btn-primary" onClick={onOpenProject}>
          Open project impact <FiArrowRight />
        </button>
      );
    }
    if (project.caseStudyRoute) {
      return (
        <Link to={project.caseStudyRoute} className="pi-btn pi-btn-primary">
          View Full Case Study <FiArrowRight />
        </Link>
      );
    }
    return (
      <a href="#contacto" className="pi-btn pi-btn-primary">
        Request Full Case Study <FiArrowRight />
      </a>
    );
  })();

  return (
    <section className="pi-card pi-hero" style={{ gridArea: "hero" }} aria-labelledby={`pi-hero-${project.id}`}>
      <div className="pi-hero-art" aria-hidden="true">
        <span className="pi-hero-ring" />
        <span className="pi-hero-ring is-inner" />
        <span className="pi-hero-monogram">{project.monogram}</span>
      </div>

      <div className="pi-hero-copy">
        <span className="pi-eyebrow">{eyebrow ?? project.category}</span>
        <h3 id={`pi-hero-${project.id}`} className="pi-hero-title">
          {project.name}
          {eyebrow && <small>{project.category}</small>}
        </h3>
        <p className="pi-hero-summary">{project.summary}</p>
        <div className="pi-hero-actions">
          {cta}
          <span className="pi-status">
            <i aria-hidden="true" /> {project.status}
          </span>
        </div>
      </div>

      <div className={`pi-metrics cols-${project.keyMetrics.length}`}>
        {project.keyMetrics.map((m) => (
          <MetricCard key={m.id} metric={m} metrics={metrics} />
        ))}
      </div>
    </section>
  );
}
