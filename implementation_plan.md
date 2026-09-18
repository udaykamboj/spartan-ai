# Implementation Plan - Reconstructing Spartan-AI Reference Site

Reconstruct `https://spartanai.framer.website/` using the actual original source code, compiled ES modules, assets, layout structure, and styling discovered and extracted from the reference site and its source maps.

## User Review Required

> [!IMPORTANT]
> Rather than continuing to hand-code visual approximations, this plan transitions the codebase to directly use the reference site's actual production modules, unminified component source files, exact styling tokens, font files, and assets.
>
> All 35 core ES modules and 127 original component sources (including `augiA20Il.js`, `main.js`, `AnimatedNumberCounter`, `ProgressiveBlur`, `Text_Opacity_Letters`, `SlideShow`, `Phosphor`, etc.) were recovered from the reference site's module preloads and source maps.

## Proposed Changes

### Assets & Module Graph Integration

Copy and organize all original media assets, fonts, videos, and self-contained ES modules so they are served directly by the project.

#### [NEW] [public/Spartan-AI_files/](file:///Users/udaykamboj/Documents/site/public/Spartan-AI_files)
- Deploy all 35 self-contained ES modules (`script_main.DmQqDBqv.mjs`, `framer.DfK3OQ0R.mjs`, `motion.DQWp2pFC.mjs`, `react.C1Oj3OU0.mjs`, `rolldown-runtime.Dh6celcD.mjs`, etc.) into `public/Spartan-AI_files/`.
- Deploy all 54 original images (`8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png`, `i8M81i0PeB8FDxgPt1GPDik2kA.jpg`, `PXNhr4LbXoJRWLAHfzNTYjvdR5Y.png`, `FIkeNB0CMpKHgxqL0a3aPHKlAyQ.png`, avatars, etc.).
- Ensure all relative imports (`./react.C1Oj3OU0.mjs`, etc.) and image lookups resolve cleanly.

#### [NEW] [public/videos/2WO0ZC7yTbYNkxdTbPKkcOs30s.mp4](file:///Users/udaykamboj/Documents/site/public/videos/2WO0ZC7yTbYNkxdTbPKkcOs30s.mp4)
- Place the original background/card video asset into `public/videos/`.

#### [NEW] [public/fonts/](file:///Users/udaykamboj/Documents/site/public/fonts)
- Place all 190 original WOFF2 font files (`Geom`, `Livvic`, `Inter Display`, etc.) into `public/fonts/`.

---

### Core Structure & HTML Entry

#### [MODIFY] [index.html](file:///Users/udaykamboj/Documents/site/index.html)
- Replace generic placeholder markup with the reference site's exact HTML document structure:
  - Reference `<head>` with title, favicon, SEO metadata, preconnected font links, and exact SVG symbol templates.
  - Reference layout stylesheet (`framer.css`) and inline animation runtime (`animator` and `framer/appear` data scripts).
  - Pre-rendered SSR markup with `<div id="main" data-framer-hydrate-v2="...">` matching the exact layout hierarchy, classes (`framer-9af1X`, etc.), and breakpoints.
  - Client script entry loading the interactive ES module bundle:
    ```html
    <script type="module" src="/Spartan-AI_files/script_main.DmQqDBqv.mjs"></script>
    ```

---

### Component Source Library

#### [NEW] [src/reference-components/](file:///Users/udaykamboj/Documents/site/src/reference-components)
- Save all 127 unminified original source files extracted from the sourcemaps (e.g. `augiA20Il.js`, `main.js`, `AnimatedNumberCounter_Prod.js`, `ProgressiveBlur.js`, `Text_Opacity_Letters.js`, `SlideShow.js`, `Phosphor.js`, `Video.js`, and all individual card and animation components).
- This establishes the reference implementation as the permanent codebase foundation for inspection, custom modifications, and future feature expansion.

---

### Project Configuration & Clean-up

#### [MODIFY] [tsconfig.json](file:///Users/udaykamboj/Documents/site/tsconfig.json)
- Add `"allowJs": true` so TypeScript compilation (`tsc`) does not fail when checking JS/JSX files.

#### [MODIFY] [package.json](file:///Users/udaykamboj/Documents/site/package.json)
- Ensure build script works seamlessly with the reconstructed architecture.

## Verification Plan

### Automated Verification
- Run `npm run build` to ensure the project builds with zero syntax, bundler, or type errors.
- Verify that all static asset requests (images, video, fonts, modules) return HTTP 200 without 404s.

### Browser Manual & Automated Verification
- Run `browser_subagent` to load `http://localhost:5173/` and inspect:
  - Console logs: verify 0 uncaught errors or failed network requests.
  - Visual verification: take viewport and full-page screenshots to verify pixel-level fidelity against `https://spartanai.framer.website/`.
  - Interaction verification:
    - Test the hero section interactive elements, logos ticker, and buttons.
    - Verify the $45M revenue animated counter spring transition.
    - Test the "Automate the manual..." animated text opacity reveal.
    - Test the Bento grid cards (including video playback in the Digital Brain card).
    - Test FAQ accordions, hover effects, and footer menu transitions.


I've started your development server! It is now running in the background and you can access your site at:

http://localhost:5173/

6:39 PM, 9/16/2026
sokme stuiff seems broken fix
6:46 PM, 9/16/2026
6:46 PM, 9/16/2026
7:24 PM, 9/16/2026
Analyze Source
Analyze Source
Inspect Modules
Inspect Modules
Download Modules
Extract Sources
Check All Imports
Test Server
Verify Assets
Implementation Plan
I have thoroughly inspected the reference site's source code, module preloads, and source maps. All 35 core ES modules, 127 unminified component source files, and 100% of the original media assets and fonts have been located, downloaded, and verified locally.

Please review the 
implementation plan
 for reconstructing the site directly from the reference code and assets. Once approved, I will proceed with executing the implementation.

Auto-proceeded with
Implementation Plan
Analyze Source
Inspect Modules
Download Modules
Extract Sources
Check All Imports
Test Server
Verify Assets
Implementation Plan
Setup Assets
Generate Index Html
7:24 PM, 9/16/2026

Download and inspect as much of the reference site’s source code as possible. I want you to reuse as much of the original source code, structure, components, styling, assets, and implementation patterns as reasonably possible.

The goal is to **reconstruct the reference site**, not simply create a new site that looks vaguely similar. Preserve the original implementation wherever possible, then adapt and reorganize it as needed so it works correctly in our project.

The biggest problem with your current approach is that you are **making something that looks like the reference instead of actually reconstructing it from the reference**. I do not want a visual imitation or a redesign. I want the underlying source and implementation to be reused as much as possible while maintaining the same final output, behavior, layout, interactions, and visual details.

Prioritize:

* Reusing the reference site's actual source code wherever possible
* Reusing its components, CSS, styling, assets, fonts, and layout structure
* Preserving its interactions and behavior
* Maintaining pixel-level visual fidelity
* Only rewriting or replacing code when necessary for compatibility with our project
* Keeping the final result functionally and visually equivalent to the reference

Do **not** build a simplified approximation from scratch just because it produces a similar screenshot. The reference site's actual implementation should be the starting point, and the final project should be reconstructed around that source rather than recreated independently.

https://spartanai.framer.website/

