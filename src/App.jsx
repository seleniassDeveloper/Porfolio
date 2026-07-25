import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollReveal from "./components/ScrollReveal";
import "./App.css";
import { RedesSociales } from "./components/redesSociales";
import "./i18n";
import YosiendoFeliz from "./assets/imagenes/yosiendoFeliz.jpeg";
import { useTranslation } from "react-i18next";
import { TodosLosComponentes } from "./components/todosLosComponente";
import { Sistran } from "./components/ComponentesDComponentes/sistran";
import { Scalabl } from "./components/ComponentesDComponentes/scalabl";
import { ProyectosReales } from "./components/proyectosReales";
import Dogco from "./components/ComponentesDComponentes/Dogco";
import Dinosaurios from "./components/ComponentesDComponentes/Dinosaurios";
import { MasRepuestos } from "./components/ComponentesDComponentes/MasRepuestos";
import ProyectoDashboard from "./pages/ProyectoDashboard";
import { CalendarioAuditoria } from "./components/CalendarioAuditoria";

function App() {
  const { t } = useTranslation();

  return (
    <HashRouter>
      <RedesSociales />

      <ScrollReveal baseOpacity={1} enableBlur={false} baseRotation={0} blurStrength={0}>
        <Routes>
          <Route path="/" element={<TodosLosComponentes t={t} YosiendoFeliz={YosiendoFeliz} />} />
          <Route path="/proyectos" element={<ProyectosReales t={t} />} />

          <Route path="/experiencia-sistran" element={<Sistran />} />
          <Route path="/experiencia-scalabl" element={<Scalabl />} />

          <Route path="/proyecto-dogco" element={<Dogco />} />
          <Route path="/Dinosaurios" element={<Dinosaurios />} />
          <Route path="/proyecto-mas-repuestos" element={<MasRepuestos />} />

          <Route path="/proyecto-dashboard" element={<ProyectoDashboard />} />
          <Route path="/agendar-auditoria" element={<CalendarioAuditoria />} />
        </Routes>
      </ScrollReveal>
    </HashRouter>
  );
}

export default App;