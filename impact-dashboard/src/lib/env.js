// True when the dashboard runs inside another page (e.g. a sandboxed preview),
// where printing and downloads are usually blocked.
export const FRAMED = (() => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
})();

export const CAN_PRINT = !FRAMED;
