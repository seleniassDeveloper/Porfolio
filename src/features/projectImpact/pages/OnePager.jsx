import { Link } from "react-router-dom";
import { FiArrowLeft, FiDownload } from "react-icons/fi";
import { PROJECTS } from "../data/projects";
import { PROFILE } from "../data/profile";
import { metricLabel } from "../tracking/metricRegistry";
import { AUDIT } from "../lib/audit";
import "../onePager.css";

const SELECTED = ["drp", "salon-saas"];

function timelineText(timeline) {
  if (!timeline) return null;
  if (timeline.kind === "sequence") return timeline.steps.join(" → ");
  return timeline.phases
    .map((p) => `${p.start === p.end ? `M${p.start}` : `M${p.start}–${p.end}`} ${p.label}`)
    .join(" · ");
}

function Case({ project }) {
  const { story } = project;
  return (
    <article className="op-case">
      <header>
        <h3>{project.name}</h3>
        <span>{project.category}</span>
      </header>
      <dl>
        {(story.problem || AUDIT) && (
          <>
            <dt>Problem</dt>
            <dd>{story.problem ?? <mark>Missing: problem statement</mark>}</dd>
          </>
        )}
        <dt>Solution</dt>
        <dd>{story.solution}</dd>
        <dt>Timeline</dt>
        <dd>{timelineText(project.timeline)}</dd>
        <dt>Impact</dt>
        <dd>
          {story.impact.filter((i) => i.measured).map((i) => i.text).join(". ")}
          {story.impact.some((i) => i.measured) && ". "}
          <span className="op-pending">
            Data being collected: {story.impactTracked.map(metricLabel).join(", ")}.
          </span>
        </dd>
      </dl>
    </article>
  );
}

export default function OnePager() {
  const projects = SELECTED.map((id) => PROJECTS.find((p) => p.id === id));

  return (
    <div className="op-page">
      <div className="op-toolbar">
        <Link to="/#proyectos"><FiArrowLeft /> Back</Link>
        <button type="button" onClick={() => window.print()}>
          <FiDownload /> Download PDF
        </button>
      </div>

      <main className="op-sheet">
        <header className="op-head">
          <div>
            <h1>{PROFILE.name}</h1>
            <p>{PROFILE.title}</p>
          </div>
          <ul className="op-links">
            <li>iamselenia.com</li>
            <li>ssstudio.agency</li>
            <li>{PROFILE.links.linkedin.replace("https://www.", "")}</li>
            <li>{PROFILE.links.email}</li>
          </ul>
        </header>

        <h2>Selected Projects</h2>
        {projects.map((p) => (
          <Case key={p.id} project={p} />
        ))}

        <section className="op-how">
          <h2>How I Work</h2>
          <p className="op-method">{PROFILE.method.join(" → ")}</p>
          <ul>
            {PROFILE.howIWork.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
