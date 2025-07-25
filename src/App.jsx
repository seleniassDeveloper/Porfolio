import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollReveal from "./components/ScrollReveal";
import "./App.css";
import { RedesSociales } from "./components/redesSociales";
import "./i18n";
import YosiendoFeliz from "./assets/imagenes/yosiendoFeliz.jpg";
import { useTranslation } from "react-i18next";
import { ProyectosReales } from "./components/proyectosReales";
import { TodosLosComponentes } from "./components/todosLosComponente";
import { Sistran } from "./components/ComponentesDComponentes/sistran";
import { Scalabl } from "./components/ComponentesDComponentes/scalabl";

function App() {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HashRouter>
      <RedesSociales />

      <div className="language-selector">
        <button
          onClick={() => cambiarIdioma("en")}
          className={i18n.language === "en" ? "idioma-activo" : ""}
        >
          EN
        </button>
        <button
          onClick={() => cambiarIdioma("es")}
          className={i18n.language === "es" ? "idioma-activo" : ""}
        >
          ES
        </button>
      </div>

      <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
        <Routes>
          <Route path="/" element={<TodosLosComponentes t={t} YosiendoFeliz={YosiendoFeliz} />} />
          <Route path="/proyectos" element={<ProyectosReales />} />
          <Route path="/experiencia-sistran" element={<Sistran />} />
          <Route path="/experiencia-scalabl" element={<Scalabl />} />
          
        </Routes>
      </ScrollReveal>
    </HashRouter>
  );
}

export default App;