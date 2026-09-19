"use client";

import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const APPEAR_CONFIG = {
  "1qu0ub1": { initial: { opacity: 0.001, x: 0, y: -100, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 500, duration: 800 },
  "1ord3gc": { initial: { opacity: 0.001, x: 0, y: -100, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 500, duration: 800 },
  "1ulft50": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1.1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 200, duration: 1000 },
  "o1dxza": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 500, duration: 600 },
  "ifhldj": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 700, duration: 600 },
  "1epupqn": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 900, duration: 600 },
  "amm35g": { initial: { opacity: 0.001, x: 150, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 1700, duration: 1000 },
  "qcg9jg": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 1400, duration: 600 },
  "1y2bgm": { initial: { opacity: 0.001, x: 150, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 1000, duration: 600 },
  "1pvz1lb": { initial: { opacity: 0.001, x: 150, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 1100, duration: 600 },
  "dnl86t": { initial: { opacity: 0.001, x: 150, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 1200, duration: 600 },
  "m1kaix": { initial: { opacity: 0.001, x: 150, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 1400, duration: 600 },
  "1dbci41": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 500, duration: 400 },
  "1s6g1b1": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 600, duration: 400 },
  "2rrsdc": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 500, duration: 400 },
  "11ns2oi": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 600, duration: 400 },
  "ttblxd": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 500, duration: 400 },
  "1840ean": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 600, duration: 400 },
  "h8tlu6": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 500, duration: 400 },
  "lk56u1": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 600, duration: 400 },
  "qj62i1": { initial: { opacity: 0.001, x: 0, y: 0, scale: 1 }, animate: { opacity: 1, x: 0, y: 0, scale: 1 }, delay: 5000, duration: 400 },
};

/**
 * ClientRuntime activates client-side scroll transitions and restored
 * Framer entrance appear animations via Web Animations API.
 */
export default function ClientRuntime() {
  useScrollReveal();

  useEffect(() => {
    // Execute entrance appear effects with exact Framer runtime spring curves
    if (typeof window === "undefined") return;

    if (window.initFramerAppearAnimations) {
      window.initFramerAppearAnimations();
    } else {
      window.addEventListener("load", () => {
        window.initFramerAppearAnimations && window.initFramerAppearAnimations();
      });
    }

    if (!("animate" in Element.prototype)) return;

    Object.entries(APPEAR_CONFIG).forEach(([id, config]) => {
      const elements = document.querySelectorAll(
        `[data-spartan-appear-id="${id}"], [data-framer-appear-id="${id}"]`
      );

      elements.forEach((el) => {
        const isMobile = window.innerWidth <= 809;
        const initialY = id === "amm35g" && isMobile ? 155 : config.initial.y;
        const initialX = id === "amm35g" && isMobile ? 0 : config.initial.x;

        const keyframes = [
          {
            opacity: config.initial.opacity,
            transform: `translate3d(${initialX}px, ${initialY}px, 0) scale(${config.initial.scale})`,
          },
          {
            opacity: config.animate.opacity,
            transform: `translate3d(${config.animate.x}px, ${config.animate.y}px, 0) scale(${config.animate.scale})`,
          },
        ];

        try {
          el.animate(keyframes, {
            delay: config.delay,
            duration: config.duration,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "both",
          });
        } catch {
          // Fallback handled by CSS animations
        }
      });
    });
  }, []);

  return null;
}
