import { useCallback, useEffect, useState } from "react";
import { PROFILE } from "./data/profile";
import { getProject } from "./data/projects";
import { scrollToSection } from "./lib/scroll";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { MobileTabs } from "./components/Overview";
import { Dashboard } from "./components/Dashboard";
import { CatalogPage } from "./components/CatalogPage";
import { useT } from "./lib/i18n";
import { Promo } from "./components/Promo";
import { OnePager } from "./components/OnePager";

// The catalog opens first. ?project=sistask (or #sistask) opens straight on one case.
const CATALOG_ID = "catalog";
const initialProjectId = () =>
  getProject(new URLSearchParams(window.location.search).get("project"))?.id ??
  getProject(window.location.hash.slice(1))?.id ??
  CATALOG_ID;

export default function App() {
  const { t } = useT();
  const [projectId, setProjectId] = useState(initialProjectId);
  const project = getProject(projectId);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (projectId === CATALOG_ID) url.searchParams.delete("project");
    else url.searchParams.set("project", projectId);
    try {
      window.history.replaceState(null, "", url);
    } catch {
      // Sandboxed frames may refuse history changes; the dashboard works without it.
    }
  }, [projectId]);

  const [onePagerOpen, setOnePagerOpen] = useState(false);
  const openOnePager = useCallback(() => setOnePagerOpen(true), []);
  const closeOnePager = useCallback(() => setOnePagerOpen(false), []);

  // Switching project always brings its header into view.
  const openProject = (id) => {
    setProjectId(id);
    requestAnimationFrame(() => scrollToSection("project"));
  };

  return (
    <>
      <div className="app">
        <a className="skip-link" href="#project">
          {t("skip")}
        </a>
        <div className="frame">
          <Sidebar activeId={projectId} onSelect={openProject} onOpenOnePager={openOnePager} />
          <div className="workspace">
            <Topbar onOpenOnePager={openOnePager} />
            <main className="main">
              <MobileTabs activeId={projectId} onSelect={setProjectId} />
              {project ? (
                <Dashboard project={project} onSelect={openProject} onBack={() => openProject(CATALOG_ID)} />
              ) : (
                <CatalogPage onSelect={openProject} />
              )}
              <Promo className="promo-bottom" />
              <p className="fineprint">
                © {new Date().getFullYear()} {PROFILE.name} · {t("fineprint")}
              </p>
            </main>
          </div>
        </div>
      </div>
      <OnePager open={onePagerOpen} onClose={closeOnePager} />
    </>
  );
}
