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
      <section className="seccion-truefocus">
        <Waves
          lineColor="#fff"
          backgroundColor="rgb(0, 0, 0)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />

        <div className="titulo-portafolio">
          <TrueFocus
            manualMode={false}
            blurAmount={2}
            borderColor="#00d4ff"
            animationDuration={1}
            pauseBetweenAnimations={3}
          />
        </div>
      </section>

      <section className="cajaFocus scroll-transition">
        <div className="columna-derecha scroll-transition">
          <div className="contenido-derecho">
            <p className="titulo-bienvenida">{t("hello_welcome")}</p>

            <div className="cajaencryted">
              <DecryptedText
                text={t("portfolio_description")}
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </div>
          </div>

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