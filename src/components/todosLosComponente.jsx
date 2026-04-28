// src/components/TodosLosComponentes.jsx
import DecryptedText from "./DecryptedText";
import { Experiencia } from "./experiencia";
import { Formulario } from "./formulario";
import { MisionAndVision } from "./misionAndVision";
import Orb from "./Orb";
import Particles from "./Particles";
import { ProyectosReales } from "./proyectosReales";
import { Tecnologias } from "./tecnologias";
import TrueFocus from "./TrueFocus";
import Waves from "./Waves";
import "../../src/App.css";

export const TodosLosComponentes = ({ t, YosiendoFeliz }) => {
  return (
    <>
   <section className="hero-section">
  <Waves
    lineColor="rgba(255,255,255,0.75)"
    backgroundColor="#000"
    waveAmpX={28}
    waveAmpY={14}
    xGap={12}
    yGap={30}
  />

  <div className="scroll-float">
    <TrueFocus />
  </div>
</section>
<section className="cajaFocus scroll-transition">
  <div className="columna-derecha scroll-transition">
    <div className="fondo-particulas">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>

    <div className="columna-izquierda scroll-transition">
      <div className="orb-fondo">
        <div className="orb-wrapper">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>

        <div className="orb-imagen">
          <img src={YosiendoFeliz} alt="Selenia" />
        </div>
      </div>
    </div>

    <div className="contenido-derecho">
      <span className="mobile-about-tag">Hola, soy</span>

      <p className="titulo-bienvenida">{t("hello_welcome")}</p>

      <div className="cajaencryted">
        <DecryptedText
          text={t("portfolio_description")}
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed desktop-description"
          parentClassName="all-letters desktop-description"
          encryptedClassName="encrypted desktop-description"
        />

        <div className="mobile-portfolio-description">
          <strong>
            Desarrolladora Frontend con enfoque en sistemas escalables y visión fullstack.
          </strong>

          <p>
            He construido plataformas SaaS, marketplaces y herramientas internas utilizadas
            por equipos en múltiples países, liderando el desarrollo frontend y participando
            en la arquitectura backend cuando el producto lo requiere.
          </p>

          <p>
            Trabajo con React y TypeScript diseñando interfaces complejas, integrando APIs
            y lógica de negocio, y desarrollando soluciones end-to-end que combinan
            experiencia de usuario, estructura técnica y escalabilidad.
          </p>
        </div>
      </div>

      <div className="mobile-bio-cards">
        <div className="mobile-bio-card">
          <div className="mobile-bio-card-icon">{"</>"}</div>
          <h4>Desarrollo Frontend</h4>
          <p>Interfaces modernas, accesibles y de alto rendimiento.</p>
        </div>

        <div className="mobile-bio-card">
          <div className="mobile-bio-card-icon">▰</div>
          <h4>Enfoque Fullstack</h4>
          <p>Participo en todo el ciclo de vida del producto.</p>
        </div>

        <div className="mobile-bio-card">
          <div className="mobile-bio-card-icon">↗</div>
          <h4>Sistemas Escalables</h4>
          <p>Arquitecturas sólidas pensadas para crecer.</p>
        </div>

        <div className="mobile-bio-card">
          <div className="mobile-bio-card-icon">☷</div>
          <h4>Trabajo en equipo</h4>
          <p>Colaboro con equipos en múltiples países.</p>
        </div>
      </div>
    </div>
  </div>
</section>


       <ProyectosReales />

      {/* <MisionAndVision /> */}

     

      <Tecnologias />

      <section className="seccion-experiencia">
        <div className="contenido-experiencia pt-5">
          <Experiencia />
        </div>
      </section>

      <Formulario />
    </>
  );
};