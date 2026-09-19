import { animate } from "motion";

// Framer ticker effect settings from the reference bundle (tickerEffectVelocity is px/s,
// tickerEffectHoverModifier 100% = no change on hover, direction left).
const VELOCITY = [
  ["spartan-15vldg4", 25], // hero logos, gap 10px
  ["spartan-12kvm91", 30], // "Our Works" heading, gap 60px
  ["spartan-v83ca8", 30], // "Experiences" heading
  ["spartan-1kcu8ck", 30], // "Pricing" heading
  ["spartan-1h1hczv", 30], // "Insights" heading
  ["spartan-ighnd", 70], // "//SPARTAN" news strip, gap 100px
];

function setupTicker(ul, velocity) {
  const items = [...ul.children];
  let clones = [];
  let controls;
  let lastWidth = -1;

  const build = () => {
    const width = ul.parentElement.getBoundingClientRect().width;
    if (width === lastWidth) return;
    lastWidth = width;
    controls?.stop();
    clones.forEach((c) => c.remove());
    clones = [];
    if (!width) return; // breakpoint variant hidden

    const gap = parseFloat(getComputedStyle(ul).columnGap) || 0;
    const setLength = items.reduce((w, li) => w + li.getBoundingClientRect().width + gap, 0);
    if (!setLength) return;
    // Enough copies to cover the viewport while the first set scrolls out.
    const copies = Math.ceil(width / setLength) + 1;
    for (let i = 0; i < copies; i++) {
      for (const li of items) {
        const clone = li.cloneNode(true);
        clone.className = "clone-item";
        clone.setAttribute("aria-hidden", "true");
        clone.removeAttribute("aria-posinset");
        clone.removeAttribute("aria-setsize");
        ul.appendChild(clone);
        clones.push(clone);
      }
    }
    ul.style.opacity = "1";
    ul.style.willChange = "transform";
    controls = animate(ul, { x: [0, -setLength] }, { duration: setLength / velocity, ease: "linear", repeat: Infinity });
  };

  build();
  const ro = new ResizeObserver(() => build());
  ro.observe(ul.parentElement);
  // Item widths depend on web fonts; re-measure once they are ready.
  document.fonts?.ready.then(() => {
    lastWidth = -1;
    build();
  });
  return () => {
    ro.disconnect();
    controls?.stop();
    clones.forEach((c) => c.remove());
  };
}

export function initTickers() {
  const cleanups = [];
  document.querySelectorAll("ul").forEach((ul) => {
    if (!ul.querySelector(":scope > li.ticker-item")) return;
    const root = ul.parentElement;
    const match = VELOCITY.find(([cls]) => root.classList.contains(cls));
    cleanups.push(setupTicker(ul, match ? match[1] : 100));
  });
  return () => cleanups.forEach((c) => c());
}
