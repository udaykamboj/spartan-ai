import { animate, inView } from "motion";
import { EFFECTS } from "./effects-config";

// Framer's transformTemplate (e.g. "translate(-50%, -50%)") is written into the SSR transform;
// keep it in front of the animated transform so centred elements stay centred.
function templateOf(el) {
  const t = el.style.transform || "";
  return /%/.test(t) ? t : "";
}

function buildTransform(template, v) {
  const parts = [];
  if (template) parts.push(template);
  if (v.x) parts.push(`translateX(${v.x}px)`);
  if (v.y) parts.push(`translateY(${v.y}px)`);
  if (v.scale !== undefined && v.scale !== 1) parts.push(`scale(${v.scale})`);
  if (v.rotate) parts.push(`rotate(${v.rotate}deg)`);
  return parts.join(" ") || "none";
}

// Scroll-appear: the SSR renders the enter state inline; animate to the resting state once
// `threshold` of the element is in view (Framer __framer__threshold / __framer__animateOnce).
function setupAppear(el, fx) {
  const template = templateOf(el);
  const from = { opacity: 0, x: 0, y: 0, scale: 1, rotate: 0, ...fx.enter };
  const to = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 };
  let controls;
  const stop = inView(
    el,
    () => {
      const state = { ...from };
      controls = animate(state, to, {
        ...fx.transition,
        onUpdate: () => {
          el.style.opacity = String(state.opacity);
          el.style.transform = buildTransform(template, state);
        },
      });
      return fx.once ? undefined : () => controls?.stop();
    },
    { amount: fx.threshold ?? 0.5 }
  );
  return () => {
    stop();
    controls?.stop();
  };
}

// Loop effects (__framer__loop): tween from the resting state to the loop state, repeating.
// Paused while off screen, like Framer's __framer__loopPauseOffscreen.
function setupLoop(el, fx) {
  const template = templateOf(el);
  const state = { x: 0, y: 0, scale: 1, rotate: 0 };
  const { opacity, ...target } = fx.loop;
  const { type, ...timing } = fx.loopTransition;
  const controls = animate(state, target, {
    ...timing,
    repeat: Infinity,
    repeatType: fx.loopRepeatType,
    repeatDelay: fx.loopRepeatDelay || 0,
    onUpdate: () => {
      el.style.transform = buildTransform(template, state);
    },
  });
  const stopView = inView(el, () => {
    controls.play();
    return () => controls.pause();
  });
  return () => {
    stopView();
    controls.stop();
  };
}

export function initEffects() {
  const cleanups = [];
  for (const fx of EFFECTS) {
    document.querySelectorAll(fx.selector).forEach((el) => {
      if (fx.enter) cleanups.push(setupAppear(el, fx));
      if (fx.loop) cleanups.push(setupLoop(el, fx));
    });
  }
  // The logo ticker's appear animation is not in the optimized appear script; Framer runs it on
  // hydration: opacity .001 -> 1, spring { damping: 64, stiffness: 400, mass: 1, delay: 1.6 }.
  document.querySelectorAll('[data-framer-appear-id="15vldg4"]').forEach((el) => {
    const c = animate(el, { opacity: [0.001, 1] }, { type: "spring", damping: 64, stiffness: 400, mass: 1, delay: 1.6 });
    cleanups.push(() => c.stop());
  });
  return () => cleanups.forEach((c) => c());
}
