import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Public builds ship without the private review notes (`pending` / `toConfirm`
// in src/data/projects.js); they stay available in dev with ?audit.
const stripAuditNotes = {
  name: "strip-audit-notes",
  apply: "build",
  transform(code, id) {
    if (!id.endsWith("/src/data/projects.js")) return null;
    return code.replace(/\b(pending|toConfirm): \[(?:[^[\]"]|"(?:[^"\\]|\\.)*")*\]/g, "$1: []");
  },
};

// Relative base so the build works on any host: a subdomain, a GitHub Pages
// project page or a plain folder.
export default defineConfig({
  plugins: [react(), stripAuditNotes],
  base: "./",
});
