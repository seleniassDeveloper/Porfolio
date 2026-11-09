// Loads metric points: { project, metric, value, unit, timestamp, source }.
//
// Today:   reads src/features/projectImpact/data/metrics.json (committed, real data only).
// Later:   set VITE_IMPACT_API_URL and the same shape is fetched from your API
//          (see docs/project-impact/TRACKING.md). The UI never changes.

import localPoints from "../data/metrics.json";
import { METRICS, METRIC_SOURCES, PROJECT_IDS } from "./metricRegistry";

const API_URL = import.meta.env.VITE_IMPACT_API_URL;

export function validateMetricPoint(p) {
  const errors = [];
  if (!p || typeof p !== "object") return ["not an object"];
  if (!PROJECT_IDS.includes(p.project)) errors.push(`unknown project "${p.project}"`);
  if (!METRICS[p.metric]) errors.push(`unknown metric "${p.metric}"`);
  else if (METRICS[p.metric].unit !== p.unit) errors.push(`unit "${p.unit}" should be "${METRICS[p.metric].unit}"`);
  if (typeof p.value !== "number" || !Number.isFinite(p.value)) errors.push("value must be a finite number");
  if (!p.timestamp || Number.isNaN(Date.parse(p.timestamp))) errors.push("timestamp must be ISO-8601");
  if (!METRIC_SOURCES.includes(p.source)) errors.push(`source "${p.source}" is not an allowed source`);
  return errors;
}

let cache = null;

export function loadMetricPoints() {
  if (cache) return cache;
  cache = (async () => {
    let raw = localPoints;
    if (API_URL) {
      try {
        const res = await fetch(API_URL, { headers: { Accept: "application/json" } });
        if (res.ok) raw = await res.json();
      } catch {
        // Network failure: fall back to committed data rather than showing nothing.
      }
    }
    return (Array.isArray(raw) ? raw : []).filter((p) => {
      const errors = validateMetricPoint(p);
      if (errors.length && import.meta.env.DEV) {
        console.warn("[project-impact] rejected metric point", p, errors);
      }
      return errors.length === 0;
    });
  })();
  return cache;
}
