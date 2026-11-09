import { useEffect, useMemo, useState } from "react";
import { loadMetricPoints } from "./metricsSource";

export function useProjectMetrics(projectId) {
  const [points, setPoints] = useState(null);

  useEffect(() => {
    let alive = true;
    loadMetricPoints().then((all) => alive && setPoints(all));
    return () => {
      alive = false;
    };
  }, []);

  return useMemo(() => {
    const mine = (points ?? [])
      .filter((p) => p.project === projectId)
      .sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp));

    const series = (metric) => mine.filter((p) => p.metric === metric);
    const latest = (metric) => series(metric).at(-1) ?? null;
    // A chart needs at least two real observations; one point is a stat, not a trend.
    const chartable = [...new Set(mine.map((p) => p.metric))].filter((m) => series(m).length >= 2);

    return { loading: points === null, latest, series, chartable };
  }, [points, projectId]);
}
