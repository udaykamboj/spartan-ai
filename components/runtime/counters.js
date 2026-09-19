import { animate, inView } from "motion";

// "Animated Number Counter" code component instances (reference props):
// trigger layerInView, replay false, transition spring { duration: 2, bounce: 0 }, commas on.
const COUNTERS = [
  { selector: ".spartan-lbcy4s-container", start: 0, end: 45, prefix: "$", suffix: "M" },
  { selector: ".spartan-1njuey2-container", start: 0, end: 5, prefix: "", suffix: "x" },
];

const format = (n) => n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function setupCounter(container, c) {
  const [sizer, visible] = container.querySelectorAll("p");
  if (!sizer || !visible) return () => {};
  let controls;
  const stop = inView(
    visible,
    () => {
      // The hidden sizing copy jumps to the target so the box takes its final width.
      sizer.textContent = c.prefix + format(c.end) + c.suffix;
      controls = animate(c.start, c.end, {
        type: "spring",
        duration: 2,
        bounce: 0,
        onUpdate: (v) => {
          visible.textContent = c.prefix + format(v) + c.suffix;
        },
      });
    },
    { amount: "some" }
  );
  return () => {
    stop();
    controls?.stop();
  };
}

// Segmented progress ring (reference code component): 0 -> 90% over 1500ms, ease-out cubic,
// starts once the ring is fully in view (threshold 1).
function setupRing(container) {
  const lines = [...container.querySelectorAll("svg line")];
  const label = container.querySelector("svg + div");
  if (!lines.length) return () => {};
  const percentage = 90;
  const active = "var(--token-8bd3e8bd-c381-4ace-be55-ac65455a2545, rgba(31, 31, 31, 0.6))";
  const inactive = "var(--token-bbaf1060-f1d7-4624-b075-babee38ad93f, rgba(31, 31, 31, 0.03))";
  let raf;
  const render = (value) => {
    const lit = Math.round((value / 100) * lines.length);
    lines.forEach((line, i) => line.setAttribute("stroke", i < lit ? active : inactive));
    if (label && label.firstChild) label.firstChild.nodeValue = String(Math.round(value));
  };
  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / 1500, 1);
        render((1 - (1 - p) ** 3) * percentage);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    },
    { threshold: 1 }
  );
  io.observe(container.firstElementChild || container);
  return () => {
    io.disconnect();
    cancelAnimationFrame(raf);
  };
}

export function initCounters() {
  const cleanups = [];
  for (const c of COUNTERS) document.querySelectorAll(c.selector).forEach((el) => cleanups.push(setupCounter(el, c)));
  document.querySelectorAll(".spartan-13b715g-container").forEach((el) => cleanups.push(setupRing(el)));
  return () => cleanups.forEach((c) => c());
}
