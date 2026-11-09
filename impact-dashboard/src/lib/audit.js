// Audit mode shows every missing value instead of hiding it.
// Turn it on by opening the dashboard with ?audit in dev — public builds never show it.
export const AUDIT =
  import.meta.env.DEV &&
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("audit");

export const isKnown = (v) => v != null && v !== "";
