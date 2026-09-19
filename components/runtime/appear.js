import { animate } from "motion";
import APPEAR from "./appear-animations.json";
import BREAKPOINTS from "./breakpoints.json";

// The optimized appear script (public/framer-appear-runtime.js) animates only the first element
// per appear id, before hydration. On the reference, the remaining copies (other breakpoint
// variants, repeated slides) are animated by Framer's React runtime on mount with the same config.
// This does the same for any appear element that is visible and has not been animated yet.

// Every matching breakpoint hash (page variants and layer variants such as the nav use different sets).
const activeHashes = () => BREAKPOINTS.filter((b) => window.matchMedia(b.mediaQuery).matches).map((b) => b.hash);

function animateElement(el, config) {
  const { transition, ...target } = config.animate;
  const initial = config.initial;
  const keyframes = { opacity: [initial.opacity, target.opacity] };
  for (const k of ["x", "y", "scale", "rotate"]) {
    if (initial[k] !== target[k]) keyframes[k] = [initial[k], target[k]];
  }
  el.dataset.appeared = "true";
  return animate(el, keyframes, transition);
}

function run(handled) {
  const hashes = activeHashes();
  document.querySelectorAll("[data-framer-appear-id]").forEach((el) => {
    if (handled.has(el) || el.dataset.appeared) return;
    const entry = APPEAR[el.getAttribute("data-framer-appear-id")];
    const hash = hashes.find((h) => entry?.[h]);
    const config = (hash && entry[hash]) || entry?.default;
    if (!config?.initial || !config?.animate) return;
    if (!el.getClientRects().length) return; // hidden breakpoint variant; handled when it shows
    if (el.getAnimations().length) {
      handled.add(el); // started by the optimized appear script
      return;
    }
    handled.add(el);
    animateElement(el, config);
  });
}

export function initAppear() {
  const handled = new WeakSet();
  run(handled);
  const queries = BREAKPOINTS.map((b) => window.matchMedia(b.mediaQuery));
  const onChange = () => run(handled);
  queries.forEach((q) => q.addEventListener("change", onChange));
  return () => queries.forEach((q) => q.removeEventListener("change", onChange));
}
