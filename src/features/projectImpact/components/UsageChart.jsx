import { useMemo, useState } from "react";
import { formatMetricValue, metricLabel } from "../tracking/metricRegistry";

const W = 320;
const H = 120;
const PAD = { top: 12, right: 8, bottom: 20, left: 8 };

const shortDate = (iso) =>
  new Date(iso).toLocaleDateString("en", { month: "short", year: "2-digit" });

// Single-series line chart. Only rendered when >= 2 real points exist.
export function UsageChart({ metric, points }) {
  const [active, setActive] = useState(points.length - 1);

  const geo = useMemo(() => {
    const xs = points.map((p) => Date.parse(p.timestamp));
    const ys = points.map((p) => p.value);
    const [x0, x1] = [Math.min(...xs), Math.max(...xs)];
    const yMax = Math.max(...ys) || 1;
    const sx = (x) => PAD.left + ((x - x0) / (x1 - x0 || 1)) * (W - PAD.left - PAD.right);
    const sy = (y) => H - PAD.bottom - (y / yMax) * (H - PAD.top - PAD.bottom);
    const coords = points.map((p, i) => [sx(xs[i]), sy(p.value)]);
    return { coords, d: coords.map(([x, y], i) => `${i ? "L" : "M"}${x},${y}`).join(" ") };
  }, [points]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    let best = 0;
    geo.coords.forEach(([cx], i) => {
      if (Math.abs(cx - x) < Math.abs(geo.coords[best][0] - x)) best = i;
    });
    setActive(best);
  };

  const onKey = (e) => {
    if (e.key === "ArrowLeft") setActive((i) => Math.max(0, i - 1));
    if (e.key === "ArrowRight") setActive((i) => Math.min(points.length - 1, i + 1));
  };

  const [ax, ay] = geo.coords[active];
  const point = points[active];

  return (
    <figure className="pi-chart">
      <div className="pi-chart-readout" aria-live="polite">
        <strong>{formatMetricValue(metric, point.value)}</strong>
        <span>{shortDate(point.timestamp)}</span>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`${metricLabel(metric)} over time`}
        tabIndex={0}
        onPointerMove={onMove}
        onKeyDown={onKey}
      >
        <line className="pi-chart-base" x1={PAD.left} x2={W - PAD.right} y1={H - PAD.bottom} y2={H - PAD.bottom} />
        <line className="pi-chart-cross" x1={ax} x2={ax} y1={PAD.top} y2={H - PAD.bottom} />
        <path className="pi-chart-line" d={geo.d} />
        <circle className="pi-chart-dot" cx={ax} cy={ay} r="4" />
        <text className="pi-chart-axis" x={PAD.left} y={H - 4}>{shortDate(points[0].timestamp)}</text>
        <text className="pi-chart-axis" x={W - PAD.right} y={H - 4} textAnchor="end">
          {shortDate(points.at(-1).timestamp)}
        </text>
      </svg>
      <table className="pi-sr-only">
        <caption>{metricLabel(metric)}</caption>
        <tbody>
          {points.map((p) => (
            <tr key={p.timestamp}>
              <th scope="row">{shortDate(p.timestamp)}</th>
              <td>{formatMetricValue(metric, p.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
