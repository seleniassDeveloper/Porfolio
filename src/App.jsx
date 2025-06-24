import React from "react";
import Waves from "../src/components/Waves";
import TrueFocus from "../src/components/TrueFocus";
import YosiendoFeliz from "./assets/imagenes/yosiendoFeliz.jpg";
import Orb from "../src/components/Orb";
import DecryptedText from "../src/components/DecryptedText";
import ScrollReveal from "./components/ScrollReveal";
import Particles from "./components/Particles";
import "./App.css";
import { MisionAndVision } from "./components/misionAndVision";
import { Tecnologias } from "./components/tecnologias";
import { Experiencia } from "./components/experiencia";
import Squares from "./components/Squares";
import { RedesSociales } from "./components/redesSociales";
import { Formulario } from "./components/formulario";

function App() {
  return (
    <>
      <RedesSociales />
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        <div className="seccion-truefocus">
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
              borderColor="red"
              animationDuration={1}
              pauseBetweenAnimations={3}
            />
          </div>
        </div>

        <div className="cajaFocus scroll-transition">
          {/* Columna izquierda */}
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
                <img src={YosiendoFeliz} alt="YosiendoFeliz" />
              </div>
            </div>
          </div>

          {/* Columna derecha con partículas y contenido */}
          <div className="columna-derecha scroll-transition">
            {/* Partículas como fondo */}
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

            {/* Contenido encima */}
            <div className="contenido-derecho">
              <p className="titulo-bienvenida">
                Hello, welcome to my portfolio
              </p>
              <div className="cajaencryted">
                <DecryptedText
                  text="Front-end developer with over three years of professional experience (plus two years of internship) developing modern, scalable, and user-centric web solutions. Specializing in React, she has solid knowledge of UI/UX design, REST APIs, state management, and responsive layout. She's progressively incorporating TypeScript to improve code quality and scalability. Proactive, collaborative, and passionate about creating functional and visually compelling products."
                  speed={100}
                  maxIterations={20}
                  characters="ABCD1234!?"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <MisionAndVision />
        </div>

        <div>
          <Tecnologias />
        </div>

        <div className="seccion-experiencia">
          <div className="fondo-cuadrados">
            <Squares
              speed={0.5}
              squareSize={40}
              direction="diagonal"
              borderColor="#fff"
              hoverFillColor="#222"
            />
          </div>

          <div className="contenido-experiencia mt-5 pt-5">
            <Experiencia />
          </div>

        
        </div>
          <div>
            <Formulario />
          </div>
      </ScrollReveal>
    </>
  );
}

export default App;
