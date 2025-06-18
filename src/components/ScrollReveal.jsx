// src/components/ScrollReveal.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function ScrollReveal({
  children,
  delay = 0.2,
  duration = 0.90,
  baseOpacity = 0,
  baseRotation = 0,
  blurStrength = 0,
  enableBlur = false,
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: baseOpacity,
      y: 50,
      rotate: baseRotation,
      filter: enableBlur ? `blur(${blurStrength}px)` : "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
