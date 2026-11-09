import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiGrid,
  FiFileText,
  FiClock,
  FiUser,
  FiList,
  FiDownload,
  FiArrowUpRight,
} from "react-icons/fi";
import { PROJECTS, FEATURED_PROJECT_ID, getProject } from "../data/projects";
import { PROFILE } from "../data/profile";
import { useProjectMetrics } from "../tracking/useProjectMetrics";
import { Hero } from "./Hero";
import { Story } from "./Story";
import { Timeline } from "./Timeline";
import { ProjectsOverview } from "./ProjectsOverview";
import {
  RoleCard,
  AdoptionCard,
  ComplexityCard,
  DecisionCard,
  HowIWorkCard,
  OtherSystemsCard,
  StudioCta,
  AuditCard,
} from "./SideCards";
import { AUDIT } from "../lib/audit";
import "../projectImpact.css";

const TABS = [{ id: "all", name: "All Projects" }, ...PROJECTS.map((p) => ({ id: p.id, name: p.name }))];

const JUMPS = [
  { target: ".pi-hero", icon: FiGrid, label: "Overview" },
  { target: ".pi-story, .pi-others", icon: FiFileText, label: "Problem → Impact" },
  { target: ".pi-timeline, .pi-others", icon: FiClock, label: "Timeline" },
  { target: ".pi-role, .pi-how", icon: FiUser, label: "Role" },
  { target: ".pi-overview", icon: FiList, label: "All projects" },
];

// Grid areas per layout. Desktop mirrors the reference: wide hero + stacked side cards.
// Rows are only emitted for cards that actually render, so missing data never leaves holes.
const row = (...cells) => `"${cells.join(" ")}"`;

function layoutFor(view, project) {
  const hasAudit = AUDIT && view !== "all" && project.toConfirm?.length > 0;

  if (view === "all") {
    return {
      desktop: [row("hero", "hero", "hero", "role"), row(...Array(4).fill("table")), row(...Array(4).fill("cta"))].join(" "),
      tablet: [row("hero", "hero"), row("role", "role"), row("table", "table"), row("cta", "cta")].join(" "),
    };
  }

  if (!project.story) {
    return {
      desktop: [
        row("hero", "hero", "hero", "role"),
        row(...Array(4).fill("story")),
        hasAudit ? row("audit", "audit", "cta", "cta") : row(...Array(4).fill("cta")),
        row(...Array(4).fill("table")),
      ].join(" "),
      tablet: [row("hero", "hero"), row("role", "role"), row("story", "story"), hasAudit && row("audit", "audit"), row("cta", "cta"), row("table", "table")]
        .filter(Boolean)
        .join(" "),
    };
  }

  const hasCx = AUDIT || Object.values(project.complexity).some((v) => v != null);
  const hasDecision = project.decisions.length > 0;

  return {
    desktop: [
      row("hero", "hero", "hero", "role"),
      row("hero", "hero", "hero", "usage"),
      row(...Array(4).fill("story")),
      hasCx ? row("timeline", "timeline", "timeline", "complexity") : row(...Array(4).fill("timeline")),
      hasDecision ? row("decision", "decision", "decision", "cta") : row(...Array(4).fill("cta")),
      hasAudit && row(...Array(4).fill("audit")),
      row(...Array(4).fill("table")),
    ]
      .filter(Boolean)
      .join(" "),
    tablet: [
      row("hero", "hero"),
      row("story", "story"),
      row("timeline", "timeline"),
      row("role", "usage"),
      hasCx && hasDecision && row("complexity", "decision"),
      hasCx && !hasDecision && row("complexity", "complexity"),
      !hasCx && hasDecision && row("decision", "decision"),
      row("cta", "cta"),
      hasAudit && row("audit", "audit"),
      row("table", "table"),
    ]
      .filter(Boolean)
      .join(" "),
  };
}

export function ProjectImpactDashboard({ initialView = "all" }) {
  const [view, setView] = useState(getProject(initialView) ? initialView : "all");
  const rootRef = useRef(null);

  const project = view === "all" ? getProject(FEATURED_PROJECT_ID) : getProject(view);
  const metrics = useProjectMetrics(project.id);
  const layout = layoutFor(view, project);

  const select = (id) => {
    setView(id);
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jump = (selector) =>
    rootRef.current?.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "center" });

  const onePager = PROFILE.onePagerPdf ? (
    <a href={PROFILE.onePagerPdf} download className="pi-btn pi-btn-ghost">
      Download Project One-Pager <FiDownload />
    </a>
  ) : (
    <Link to="/one-pager" className="pi-btn pi-btn-ghost">
      Download Project One-Pager <FiDownload />
    </Link>
  );

  return (
    <section className="pi-root" ref={rootRef} aria-labelledby="pi-title">
      <div className="pi-shell">
        <nav className="pi-sidebar" aria-label="Dashboard sections">
          <span className="pi-logo" aria-hidden="true">SS</span>
          <ul>
            {JUMPS.map(({ target, icon: Icon, label }) => (
              <li key={label}>
                <button type="button" onClick={() => jump(target)} aria-label={label} title={label}>
                  <Icon />
                </button>
              </li>
            ))}
          </ul>
          <div className="pi-sidebar-foot">
            <Link to="/one-pager" aria-label="Project one-pager" title="Project one-pager">
              <FiDownload />
            </Link>
            <a href={PROFILE.links.studio} target="_blank" rel="noopener" aria-label="SSStudio" title="SSStudio">
              <FiArrowUpRight />
            </a>
          </div>
        </nav>

        <div className="pi-main">
          <header className="pi-header">
            <div>
              <span className="pi-kicker">Case studies</span>
              <h2 id="pi-title">Project Impact</h2>
              <p>Systems I've taken from business problem to production.</p>
            </div>
            <div className="pi-header-actions">
              <div className="pi-tabs" role="tablist" aria-label="Select project">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={view === tab.id}
                    className={view === tab.id ? "is-active" : ""}
                    onClick={() => setView(tab.id)}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              {onePager}
            </div>
          </header>

          <div
            className={`pi-grid view-${view === "all" ? "all" : project.id}`}
            style={{ "--pi-areas-desktop": layout.desktop, "--pi-areas-tablet": layout.tablet }}
          >
            {view === "all" ? (
              <>
                <Hero project={project} metrics={metrics} eyebrow="Featured project" onOpenProject={() => setView(project.id)} />
                <HowIWorkCard />
              </>
            ) : (
              <>
                <Hero project={project} metrics={metrics} />
                <RoleCard role={project.role} />
                {project.story ? (
                  <>
                    <AdoptionCard key={project.id} project={project} metrics={metrics} />
                    <Story project={project} metrics={metrics} />
                    <Timeline timeline={project.timeline} />
                    <ComplexityCard complexity={project.complexity} />
                    {project.decisions.map((d) => (
                      <DecisionCard key={d.title} decision={d} />
                    ))}
                  </>
                ) : (
                  <OtherSystemsCard />
                )}
                {AUDIT && <AuditCard items={project.toConfirm} />}
              </>
            )}
            <StudioCta />
            <ProjectsOverview activeId={view} onSelect={select} />
          </div>
        </div>
      </div>
    </section>
  );
}
