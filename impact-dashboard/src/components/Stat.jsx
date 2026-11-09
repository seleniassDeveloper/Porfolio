// "7 months" → "7" + "months" · "$300K+" and "−30%" stay whole · "End-to-end" stays text.
const SPLIT = /^([~+\-−$]?\d[\d.,]*[KkMm]?\+?%?)\s*(.*)$/;

export function StatValue({ value }) {
  const m = SPLIT.exec(value);
  if (!m) return <span className="stat-value is-text">{value}</span>;
  return (
    <span className="stat-value">
      {m[1]}
      {m[2] && <small>{m[2]}</small>}
    </span>
  );
}
