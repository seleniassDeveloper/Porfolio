// Audit mode shows what data is still missing. On in `npm run dev`, or on the
// live site with ?audit (e.g. https://iamselenia.com/?audit#/).
export const AUDIT =
  import.meta.env.DEV ||
  (typeof window !== "undefined" && new URLSearchParams(window.location.search).has("audit"));
