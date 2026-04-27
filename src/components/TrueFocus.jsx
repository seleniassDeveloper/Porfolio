import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./../css/TrueFocus.css";

const TrueFocus = ({
  manualMode = true,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.25,
  pauseBetweenAnimations = 1.2,
}) => {
  const words = ["Selenia Sanchez,", "Frontend Developer"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState(null);

  // 🔁 AUTO MODE
  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations]);

  // 📐 CALCULAR POSICIÓN DEL FRAME
  const updateFocus = () => {
    const el = wordRefs.current[currentIndex];
    const parent = containerRef.current;

    if (!el || !parent) return;

    const parentRect = parent.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    setFocusRect({
      x: rect.left - parentRect.left,
      y: rect.top - parentRect.top,
      width: rect.width,
      height: rect.height,
    });
  };

  useEffect(() => {
    updateFocus();
    window.addEventListener("resize", updateFocus);

    return () => window.removeEventListener("resize", updateFocus);
  }, [currentIndex]);

  // 🖱️ HOVER
  const handleEnter = (index) => {
    if (manualMode) setCurrentIndex(index);
  };

  return (
    <div className="focus-container" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;

        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className="focus-word"
            onMouseEnter={() => handleEnter(index)}
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
          >
            {word}
          </span>
        );
      })}

      {focusRect && (
        <motion.div
          className="focus-frame"
          animate={{
            x: focusRect.x,
            y: focusRect.y,
            width: focusRect.width,
            height: focusRect.height,
            opacity: 1,
          }}
          transition={{ duration: animationDuration }}
          style={{
            "--border-color": borderColor,
            "--glow-color": glowColor,
          }}
        >
          <span className="corner top-left"></span>
          <span className="corner top-right"></span>
          <span className="corner bottom-left"></span>
          <span className="corner bottom-right"></span>
        </motion.div>
      )}
    </div>
  );
};

export default TrueFocus;