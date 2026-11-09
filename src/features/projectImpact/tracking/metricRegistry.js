// Single source of truth for every metric the dashboard can display.
// A metric point is only accepted if its `metric` key exists here and its
// `unit` matches — this keeps API data and the UI speaking the same language.

export const METRICS = {
  active_users: { label: "Active Users", unit: "users", format: "integer" },
  processes_completed: { label: "Processes Completed", unit: "processes", format: "integer" },
  automations_triggered: { label: "Automations Triggered", unit: "runs", format: "integer" },
  support_requests: { label: "Support Requests / Month", unit: "requests", format: "integer" },
  hours_saved: { label: "Hours Saved / Month", unit: "hours", format: "integer" },
  retention_rate: { label: "Retention", unit: "percent", format: "percent" },
  usage_events: { label: "Usage Over Time", unit: "events", format: "integer" },
};

// Where a number is allowed to come from. Anything else is rejected, so a
// value typed into a demo or a mock can never reach the public dashboard.
export const METRIC_SOURCES = [
  "production_database",
  "product_analytics",
  "billing_system",
  "support_inbox",
  "client_report",
  "manual_audit",
];

export const PROJECT_IDS = ["drp", "salon-saas", "other-systems"];

export const metricLabel = (key) => METRICS[key]?.label ?? key;

export function formatMetricValue(key, value) {
  const def = METRICS[key];
  if (value == null || !Number.isFinite(value)) return null;
  if (def?.format === "percent") return `${Math.round(value)}%`;
  return new Intl.NumberFormat("en", { notation: value >= 10000 ? "compact" : "standard" }).format(value);
}
