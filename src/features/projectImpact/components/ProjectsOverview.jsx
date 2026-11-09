import { FiChevronRight } from "react-icons/fi";
import { PROJECTS } from "../data/projects";

// Tracked numbers are "being collected"; past facts that aren't documented yet are "to be confirmed".
const cell = (value, empty = "Data being collected") => value ?? <span className="pi-dim">{empty}</span>;

export function ProjectsOverview({ activeId, onSelect }) {
  return (
    <section className="pi-card pi-overview" style={{ gridArea: "table" }} aria-labelledby="pi-ov-title">
      <header className="pi-card-head">
        <h4 id="pi-ov-title">Projects Overview</h4>
        <span className="pi-card-meta">Select a row to open its impact view</span>
      </header>

      <table className="pi-table">
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col">Problem</th>
            <th scope="col">My Role</th>
            <th scope="col">Time to Production</th>
            <th scope="col">Users</th>
            <th scope="col">Status</th>
            <th scope="col"><span className="pi-sr-only">Open</span></th>
          </tr>
        </thead>
        <tbody>
          {PROJECTS.map((p) => (
            <tr
              key={p.id}
              className={p.id === activeId ? "is-active" : ""}
              onClick={() => onSelect(p.id)}
            >
              <th scope="row" data-label="Project">
                <button type="button" onClick={(e) => { e.stopPropagation(); onSelect(p.id); }}>
                  <span className="pi-row-mono" aria-hidden="true">{p.monogram}</span>
                  <span>
                    <strong>{p.name}</strong>
                    <small>{p.category}</small>
                  </span>
                </button>
              </th>
              <td data-label="Problem">{p.overview.problem}</td>
              <td data-label="My Role">{p.overview.role}</td>
              <td data-label="Time to Production">{cell(p.overview.timeToProduction, "To be confirmed")}</td>
              <td data-label="Users">{cell(p.overview.users)}</td>
              <td data-label="Status">
                <span className="pi-status"><i aria-hidden="true" /> {p.status}</span>
              </td>
              <td className="pi-row-go" aria-hidden="true"><FiChevronRight /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
