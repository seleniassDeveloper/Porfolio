import { FiArrowRight, FiCheck, FiClock } from "react-icons/fi";
import { formatMetricValue, metricLabel } from "../tracking/metricRegistry";
import { AUDIT } from "../lib/audit";

function StoryCard({ step, title, tone, children }) {
  return (
    <article className={`pi-story-card tone-${tone}`}>
      <header>
        <span className="pi-step">{step}</span>
        <h4>{title}</h4>
      </header>
      {children}
    </article>
  );
}

export function Story({ project, metrics }) {
  const { story } = project;
  const showProblem = story.problem || AUDIT;
  const tracked = story.impactTracked.filter((m) => !metrics.latest(m));

  return (
    <section className="pi-story" style={{ gridArea: "story" }} aria-label="Problem, solution and impact">
      {showProblem && (
        <StoryCard step="01" title="Problem" tone="problem">
          {story.problem ? (
            <p>{story.problem}</p>
          ) : (
            <p className="pi-missing">Missing data · problem statement</p>
          )}
        </StoryCard>
      )}

      {showProblem && <span className="pi-story-link" aria-hidden="true"><FiArrowRight /></span>}

      <StoryCard step={showProblem ? "02" : "01"} title="Solution" tone="solution">
        <p>{story.solution}</p>
      </StoryCard>

      <span className="pi-story-link" aria-hidden="true"><FiArrowRight /></span>

      <StoryCard step={showProblem ? "03" : "02"} title="Impact" tone="impact">
        {story.impact.length > 0 && (
          <ul className="pi-impact-list">
            {story.impact.map((item) => (
              <li key={item.text} className={item.measured ? "" : "is-unmeasured"}>
                {item.measured ? <FiCheck aria-hidden="true" /> : <FiClock aria-hidden="true" />}
                <span>
                  {item.text}
                  {!item.measured && <em> · measurement pending</em>}
                </span>
              </li>
            ))}
          </ul>
        )}
        {story.impactTracked
          .filter((m) => metrics.latest(m))
          .map((m) => (
            <p key={m} className="pi-impact-metric">
              {metricLabel(m)}: <strong>{formatMetricValue(m, metrics.latest(m).value)}</strong>
            </p>
          ))}
        {tracked.length > 0 && (
          <p className={`pi-impact-note ${story.impact.length ? "" : "is-solo"}`}>
            Being collected: {tracked.map(metricLabel).join(" · ")}
          </p>
        )}
      </StoryCard>
    </section>
  );
}
