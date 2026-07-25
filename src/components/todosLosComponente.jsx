// src/components/TodosLosComponentes.jsx
import DecryptedText from "./DecryptedText";
import { Experiencia } from "./experiencia";
import { Formulario } from "./formulario";
import Particles from "./Particles";
import { ProyectosReales } from "./proyectosReales";
import { Tecnologias } from "./tecnologias";
import TrueFocus from "./TrueFocus";
import Waves from "./Waves";
import { CalendarioAuditoria } from "./CalendarioAuditoria";
import "../../src/App.css";

export const TodosLosComponentes = ({ t, YosiendoFeliz }) => {
  const bioCards = t("bio_cards", { returnObjects: true });

  return (
    <>
      <section className="hero-section" id="hero">
        <Waves
          lineColor="rgba(245, 169, 199, 0.35)"
          backgroundColor="#0A080D"
          waveAmpX={28}
          waveAmpY={14}
          xGap={12}
          yGap={30}
        />

        <div className="scroll-float" style={{ width: "100%" }}>
          <TrueFocus />
        </div>
      </section>

      <section className="cajaFocus scroll-transition" id="sobre-mi">
        <div className="columna-derecha scroll-transition">
          <div className="fondo-particulas">
            <Particles
              particleColors={["#F5A9C7", "#C4A7F0"]}
              particleCount={150}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          <div className="columna-izquierda scroll-transition">
            <div className="profile-showcase">
              <div className="profile-glow" aria-hidden="true" />
              <div className="profile-portrait">
                <img src={YosiendoFeliz} alt="Selenia Sanchez" loading="eager" />
              </div>
            </div>
          </div>

          <div className="contenido-derecho">
            <span className="mobile-about-tag">
              {t("bio_section.mobile_tag")}
            </span>

            <p className="titulo-bienvenida">{t("hello_welcome")}</p>

            <div className="cajaencryted">
              <DecryptedText
                text={t("portfolio_description_short").replace(/\n/g, "\n")}
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed desktop-description"
                parentClassName="all-letters desktop-description"
                encryptedClassName="encrypted desktop-description"
              />

              <div className="mobile-portfolio-description">
                <strong>{t("bio_section.mobile_intro")}</strong>
                <p>{t("bio_section.mobile_paragraph_1")}</p>
                <p>{t("bio_section.mobile_paragraph_2")}</p>
              </div>
            </div>

            <div className="mobile-bio-cards">
              {Array.isArray(bioCards) &&
                bioCards.map((card, index) => (
                  <div className="mobile-bio-card" key={index}>
                    <div className="mobile-bio-card-icon">{card.icon}</div>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <div id="proyectos">
        <ProyectosReales />
      </div>

      <div id="tecnologias">
        <Tecnologias />
      </div>

      <section className="seccion-experiencia" id="experiencia">
        <div className="contenido-experiencia pt-5">
          <Experiencia />
        </div>
      </section>

      <div id="auditoria">
        <CalendarioAuditoria />
      </div>

      <div id="contacto">
        <Formulario />
      </div>
    </>
  );
};
