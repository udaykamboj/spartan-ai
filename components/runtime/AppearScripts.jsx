import appear from "./appear-animations.json";
import breakpoints from "./breakpoints.json";

// Verbatim trigger from the reference page: on the first frame after parse, run every appear
// animation from __framer__appearAnimationsContent with a shared start time (before hydration).
const TRIGGER = "(()=>{function c(i,o,s){if(window.__framer_disable_appear_effects_optimization__||typeof animator>\"u\")return;let e={detail:{bg:document.hidden}};requestAnimationFrame(()=>{let a=\"framer-appear-start\";performance.mark(a,e),animator.animateAppearEffects(JSON.parse(window.__framer__appearAnimationsContent.text),(m,p,d)=>{let t=document.querySelector(m);if(t)for(let[r,f]of Object.entries(p))animator.startOptimizedAppearAnimation(t,r,f,d[r])},i,o,s&&window.matchMedia(\"(prefers-reduced-motion:reduce)\").matches===!0,animator.getActiveVariantHash(JSON.parse(window.__framer__breakpoints.text)));let n=\"framer-appear-end\";performance.mark(n,e),performance.measure(\"framer-appear\",{start:a,end:n,detail:e.detail})})}return c})()(\"data-framer-appear-id\",\"__Appear_Animation_Transform__\",false)";

export default function AppearScripts() {
  return (
    <>
      <script type="framer/appear" id="__framer__appearAnimationsContent" dangerouslySetInnerHTML={{ __html: JSON.stringify(appear) }} />
      <script type="framer/appear" id="__framer__breakpoints" dangerouslySetInnerHTML={{ __html: JSON.stringify(breakpoints) }} />
      <script src="/framer-appear-runtime.js" />
      <script data-framer-appear-animation="no-preference" dangerouslySetInnerHTML={{ __html: TRIGGER }} />
    </>
  );
}
