// "Text Opacity Letters" code component: scroll offset ["start 0.75", "start 0.15"] on the <p>.
// Each character owns a slice of the progress range; the colours are CSS variables, which motion
// cannot mix, so each character switches to toColor as soon as progress enters its slice
// (motion mixImmediate: p > 0 ? to : from). Characters before transitionStartIndex stay toColor.
const INSTANCES = [
  {
    fromColor: "var(--token-4a25c684-3670-4b2a-bae7-5c23bcc7c2d3, rgba(31, 31, 31, 0.1))",
    toColor: "var(--token-2ddcea38-bb42-4986-8e36-4a45eb0c9596, rgb(31, 31, 31))",
  },
  {
    fromColor: "var(--token-0cf17914-9942-4dff-aad2-e59c848a43bb, rgba(255, 255, 255, 0.1))",
    toColor: "var(--token-7bbf4f4d-a8fb-4fe0-a164-a8cf2fd0048a, rgb(255, 255, 255))",
  },
];
const TRANSITION_START_INDEX = 13;

function setup(p, { fromColor, toColor }) {
  const words = [...p.children];
  const chars = [];
  let index = 0;
  words.forEach((word, w) => {
    const spans = [...word.children];
    const start = w / words.length;
    const step = 1 / words.length / spans.length;
    spans.forEach((span, i) => {
      chars.push({ span, start: start + step * i, fixed: index + i < TRANSITION_START_INDEX });
    });
    index += spans.length + 1;
  });

  let raf = 0;
  const update = () => {
    raf = 0;
    const vh = window.innerHeight;
    const top = p.getBoundingClientRect().top;
    const progress = Math.min(Math.max((vh * 0.75 - top) / (vh * 0.6), 0), 1);
    for (const c of chars) {
      const color = c.fixed || progress > c.start ? toColor : fromColor;
      if (c.span.style.color !== color) c.span.style.color = color;
    }
  };
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    cancelAnimationFrame(raf);
  };
}

export function initLetters() {
  const ps = [...document.querySelectorAll("p")].filter((p) => p.style.flexWrap === "wrap" && p.querySelector(":scope > span > span"));
  return ps.reduce((cleanup, p) => {
    const toColor = p.style.color;
    const inst = INSTANCES.find((i) => i.toColor === toColor) || INSTANCES[0];
    const c = setup(p, inst);
    return () => {
      cleanup();
      c();
    };
  }, () => {});
}
