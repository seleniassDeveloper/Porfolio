const spanLabel = (unit, start, end) =>
  start === end ? `${unit} ${start}` : `${unit}s ${start}–${end}`;

export function Timeline({ timeline }) {
  if (timeline.kind === "sequence") {
    return (
      <section className="pi-card pi-timeline" style={{ gridArea: "timeline" }} aria-labelledby="pi-tl-title">
        <header className="pi-card-head">
          <h4 id="pi-tl-title">{timeline.title ?? "Project Timeline"}</h4>
          <span className="pi-card-meta">Sequence · durations not recorded</span>
        </header>
        <ol className="pi-sequence">
          {timeline.steps.map((step, i) => (
            <li key={step} className={i === timeline.steps.length - 1 ? "is-last" : ""}>
              <span className="pi-seq-dot" aria-hidden="true" />
              <span className="pi-seq-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="pi-seq-label">{step}</span>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  const { total, unit, phases } = timeline;
  return (
    <section className="pi-card pi-timeline" style={{ gridArea: "timeline" }} aria-labelledby="pi-tl-title">
      <header className="pi-card-head">
        <h4 id="pi-tl-title">Project Timeline</h4>
        <span className="pi-card-meta">
          {total} {unit.toLowerCase()}s to production
        </span>
      </header>

      <ol className="pi-phases" style={{ "--pi-total": total }}>
        {phases.map((p) => (
          <li
            key={p.label}
            className={`pi-phase ${p.live ? "is-live" : ""}`}
            style={{ gridColumn: `${p.start} / ${p.end + 1}`, "--pi-w": (p.end - p.start + 1) / total }}
          >
            <span className="pi-phase-bar" aria-hidden="true" />
            <span className="pi-phase-span">{spanLabel(unit, p.start, p.end)}</span>
            <span className="pi-phase-label">{p.label}</span>
          </li>
        ))}
      </ol>

      <div className="pi-ticks" style={{ "--pi-total": total }} aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
    </section>
  );
}
