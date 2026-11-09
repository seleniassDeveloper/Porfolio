import { defineConfig } from "vite";

// Build used to publish the dashboard as a claude.ai Artifact: one IIFE script with
// React/ReactDOM loaded from cdnjs (globals), plus one CSS file. The regular build
// (vite.config.js) is unaffected.
export default defineConfig({
  esbuild: { jsx: "transform", jsxFactory: "React.createElement", jsxFragment: "React.Fragment" },
  build: {
    outDir: process.env.ARTIFACT_OUT ?? "dist-artifact",
    emptyOutDir: true,
    rollupOptions: {
      input: "src/main.jsx",
      external: ["react", "react-dom", "react-dom/client"],
      output: {
        format: "iife",
        entryFileNames: "app.js",
        assetFileNames: "app[extname]",
        globals: { react: "React", "react-dom": "ReactDOM", "react-dom/client": "ReactDOM" },
      },
    },
  },
});
