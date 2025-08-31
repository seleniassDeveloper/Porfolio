import "../css/Dinosaurios.css";
import logo from "../../assets/imagenes/logoblancoverDino.jpeg";
import trex from "../../assets/imagenes/trex-right.png";
import apasur from "../../assets/imagenes/logoAPASUR.jpeg";

export default function Dinosaurios() {
  return (
    <main className="dino-page py-5">
      {/* HERO */}
      <section className="dino-hero container">
        <div className="dino-hero-left">
          <div className="dino-badge">
            <img src={logo} alt="APA Sur & LACEV" />
            <img src={apasur} alt="APA Sur" />
            <span>CIENCIA IMPULSADA POR LA EXPLORACIÓN</span>
          </div>

          <h1>
            <span className="dino-orange">Descubramos nuevas especies</span><br />
            <span className="dino-black">en la próxima expedición</span>
          </h1>

          <p className="dino-description">
            Equipo: 11 investigadores, 5 técnicos, 2 educadores y 10+ estudiantes. Con sede en el Museo
            Bernardino Rivadavia (Buenos Aires). 5 portadas en Nature y 400+ publicaciones. En los últimos 20 años:
            35 especies en Argentina y 5 en Antártida/LatAm (40 en total).
          </p>

          <div className="dino-buttons">
            <button className="green">Donar ahora</button>
            <button className="outline">Ver plan de expedición</button>
          </div>
        </div>

        <div className="dino-hero-right">
          <img src={trex} alt="Dinosaurio render" />
        </div>
      </section>

      {/* OBJETIVO */}
      <section className="dino-objetivo container">
        <h3 className="objetivo-label">OBJETIVO 2025</h3>
        <h2>Publicar un nuevo artículo en <em>Nature</em></h2>
        <p>
          Expediciones 2027–2032 en Antártida (IAA & CONICET) para hallar dinosaurios de hace 70 Ma.
        </p>

        <div className="objetivo-tags">
          <span>📺 National Geographic (4)</span>
          <span>🧭 Explorers Club (3)</span>
          <span>🦖 Jurassic Foundation (3)</span>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="dino-metricas container">
        <div className="metric-card"><strong>5×</strong><span>Portadas en Nature</span></div>
        <div className="metric-card"><strong>400+</strong><span>Artículos publicados</span></div>
        <div className="metric-card"><strong>40</strong><span>Nuevas especies (20 años)</span></div>
        <div className="metric-card"><strong>200+</strong><span>Iniciativas de divulgación</span></div>
      </section>
    </main>
  );
}