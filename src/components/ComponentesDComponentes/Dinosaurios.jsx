
import "../css/Dinosaurios.css";

export default function Dinosaurios()  {
  return (
    <main className="with-fixed-nav dinoCase">

      {/* HERO */}
      <section className="dc-hero">
        <div className="dc-veil" />
        <div className="dc-heroInner dc-container">
          <div className="dc-copy">
            <div className="dc-logos">
              <img src="/apa-lacev.png" alt="APA Sur & LACEV" />
              <span className="dc-kicker">Science powered by exploration</span>
            </div>

            <h1 className="dc-title">
              Let’s discover new <span className="dc-brand">species</span>
              <span className="dc-titleBreak" /> in the next expedition
            </h1>

            <p className="dc-sub">
              Team: 11 researchers, 5 technicians, 2 educators and 10+ students.
              Based at the Bernardino Rivadavia Museum (Buenos Aires). 5 Nature
              covers and 400+ publications. In the last 20 years: 35 species in
              Argentina and 5 in Antarctica/LatAm (40 total).
            </p>

            <div className="dc-ctas">
              <a className="dc-btn dc-btn--primary" href="/donate">Donate now</a>
              <a className="dc-btn dc-btn--ghost" href="#plan">See expedition plan</a>
            </div>
          </div>

          {/* Arte con halo */}
          <figure className="dc-art">
            <div className="dc-glow" />
      
          </figure>
        </div>
      </section>

      {/* META / LOGROS */}
      <section className="dc-container dc-padY">
        <div className="dc-highlight">
          <p className="dc-tag">2025 goal</p>
          <h3 className="dc-h3">Publish a new article in <i>Nature</i></h3>
          <p className="dc-muted">
            Antarctic expeditions 2027–2032 (IAA & CONICET) to uncover 70 Ma dinosaurs.
          </p>

          <div className="dc-badges">
            <span className="dc-badge"><span className="dc-dot" /> National Geographic (4)</span>
            <span className="dc-badge"><span className="dc-dot" /> Explorers Club (3)</span>
            <span className="dc-badge"><span className="dc-dot" /> Jurassic Foundation (3)</span>
          </div>

          <div className="dc-kpis">
            <div className="dc-kpi"><div className="dc-kpiN">5×</div><div className="dc-kpiL">Covers in Nature</div></div>
            <div className="dc-kpi"><div className="dc-kpiN">400+</div><div className="dc-kpiL">Published articles</div></div>
            <div className="dc-kpi"><div className="dc-kpiN">40</div><div className="dc-kpiL">New species (20 years)</div></div>
            <div className="dc-kpi"><div className="dc-kpiN">200+</div><div className="dc-kpiL">Outreach initiatives</div></div>
          </div>
        </div>
      </section>

      {/* RESUMEN / HALLAZGOS */}
      <section id="plan" className="dc-container dc-padY">
        <div className="dc-split">
          <div>
            <h2 className="dc-h2">What we do in the field</h2>
            <ul className="dc-checklist">
              <li>Prospecting & mapping: remote sensing + systematic transects.</li>
              <li>Excavation: plaster jackets, detailed logs, context photos/GPS.</li>
              <li>Preparation & curation in our fossil lab with official permits.</li>
              <li>Publication & outreach: 400+ papers, 200+ science actions.</li>
            </ul>
          </div>
          <div className="dc-cards dc-cards--compact">
            <article className="dc-card">
              <h4>Maip macrothorax</h4>
              <p className="dc-meta">10 m predator from the far south with a lethal 30+ cm claw.</p>
            </article>
            <article className="dc-card">
              <h4>Patagorhynchus</h4>
              <p className="dc-meta">Oldest platypus in South America (70 Ma).</p>
            </article>
            <article className="dc-card">
              <h4>Taurovenator violantei</h4>
              <p className="dc-meta">Nearly complete giant theropod, rivaling T. rex.</p>
            </article>
            <article className="dc-card">
              <h4>Oldest tadpole</h4>
              <p className="dc-meta">Unique 200+ Ma fossil from Patagonia.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dc-container dc-padY">
        <div className="dc-ctaWide">
          <h3 className="dc-h3">Partner with the next expedition</h3>
          <p className="dc-muted">Compliant with Argentine National Law. Official permits and in-house prep lab.</p>
          <div className="dc-amounts">
            <span className="dc-amount">Corporate sponsor</span>
            <span className="dc-amount">Research grant</span>
            <span className="dc-amount">Individual donor</span>
          </div>
          <a className="dc-btn dc-btn--primary" href="/donate">Donate now</a>
        </div>
      </section>
    </main>
  );
}