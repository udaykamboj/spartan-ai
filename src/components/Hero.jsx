import React from 'react';
import styles from './Hero.module.css';

// Exact 5 logos from reference Framer site ticker
const LOGOS = [
  '/assets/images/FIkeNB0CMpKHgxqL0a3aPHKlAyQ.png',
  '/assets/images/nJbNnh8E8FlHfzjwzNY6HTfjGnE.png',
  '/assets/images/3EwtMm1CTn3V13Xu2ufZVUnW4.png',
  '/assets/images/C7otSLQhZagCjkAC4M6MX1Ns.png',
  '/assets/images/PNxA5d1umCQiNSezotkgCnArwqU.png',
];

// Triple the logos so the CSS animation scrolls seamlessly
const TICKER_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS];

export default function Hero() {
  return (
    /**
     * .framer-hmw7d8
     * background-color: #fff
     * height: 100vh
     * overflow: clip
     * z-index: 4
     * flex-flow: row
     * place-content: center
     * align-items: center
     * gap: 12px
     * width: 100%
     * padding: 12px
     * display: flex
     * position: relative
     */
    <section className={styles.root}>

      {/**
       * .framer-1w8qob2
       * background-color: #f0f0f0
       * height: 100%
       * overflow: clip
       * border-radius: 20px
       * flex: 1 0 0
       * place-content: flex-start center
       * align-items: flex-start
       * gap: 26px
       * width: 1px (grows via flex)
       * padding: 190px 0 160px
       * display: flex
       * flex-flow: row
       * position: relative
       */}
      <div className={styles.inner}>

        {/**
         * .framer-1g8n9hz
         * flex: 1 0 0
         * flex-flow: row
         * place-content: center
         * align-items: center
         * gap: 10px
         * padding: 0 40px
         * height: min-content
         * overflow: clip
         * position: relative
         */}
        <div className={styles.contentRow}>

          {/**
           * .framer-1v63p98
           * flex: 1 0 0
           * flex-flow: column
           * place-content: flex-start center
           * align-items: flex-start
           * gap: 26px
           * height: min-content
           * overflow: clip
           * position: relative
           */}
          <div className={styles.leftCol}>

            {/**
             * .framer-vsdi6k
             * flex-flow: column
             * flex: none
             * place-content: flex-start center
             * align-items: flex-start
             * gap: 14px
             * width: 100%
             * height: min-content
             */}
            <div className={styles.textStack}>

              {/**
               * .framer-o1dxza: max-width: 500px
               * h1 preset: font-size:70px, weight:500, letter-spacing:-0.04em,
               *   line-height:1.1em, font-family:"Inter Display"
               * "Scale your ideas." → color: rgba(26,26,26,0.4)  [token-d3bc1994]
               * " Build with AI."   → color: rgb(26,26,26)       [token-2ddcea38]
               */}
              <div className={styles.h1Wrapper}>
                <h1 className={styles.headline}>
                  <span className={styles.headlineMuted}>Scale your ideas.</span>
                  <span className={styles.headlineDark}> Build with AI.</span>
                </h1>
              </div>

              {/**
               * .framer-ifhldj: max-width: 390px
               * preset: font-size:16px, weight:300, letter-spacing:0.02em,
               *   line-height:1.5em, color: rgb(26,26,26) [via inline token override]
               */}
              <div className={styles.subtitleWrapper}>
                <p className={styles.subtitle}>
                  Deploy custom neural agents, LLMs, and automation in one seamless flow.
                </p>
              </div>
            </div>

            {/**
             * CTA button container: .framer-1epupqn-container
             *   flex: none, width: 200px, z-index: 4
             *
             * Button: .framer-vm9ze.framer-1wpq3gf
             *   width: 190px
             *   padding: 3px 24px 3px 3px
             *   gap: 16px
             *   flex-flow: row
             *   place-content: center
             *   align-items: center
             *   cursor: pointer
             *
             * style-ZIjBS (inline):
             *   background-color: rgb(31,31,31)
             *   border-radius: 16px
             */}
            <div className={styles.ctaContainer}>
              <a href="#" className={styles.ctaButton}>
                {/**
                 * .framer-1emdssz (style-LSy8k):
                 *   width: 65px
                 *   height: 59px
                 *   background-color: rgb(255,255,255)
                 *   border-radius: 14px
                 *   flex-flow: row
                 *   place-content: center
                 *   align-items: center
                 */}
                <div className={styles.ctaIconBox}>
                  {/* Spartan logo pill SVG — 30×15 inside 65×59 white box */}
                  <svg width="30" height="15" viewBox="0 0 37 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36.9388" height="15" rx="7.5" fill="#1a1a1a"/>
                    <path d="M12.2891 10.9701V11C12.2891 12.9238 10.7293 14.4836 8.80556 14.4836C6.88179 14.4836 5.32202 12.9238 5.32202 11V3.99998H12.2891V10.9701Z" fill="white"/>
                  </svg>
                </div>

                {/**
                 * .framer-yk1t5j (style-C7xlr):
                 *   height: 59px, flex: 1 0 0
                 *   border-radius: 14px
                 *   flex-flow: row, place-content: center, align-items: center
                 *
                 * Text preset (style-vad88t):
                 *   font-size: 16px, weight: 400, letter-spacing: 0em
                 *   line-height: 1.5em, color: rgb(255,255,255)
                 */}
                <div className={styles.ctaTextBox}>
                  <p className={styles.ctaText}>Start Build</p>
                </div>
              </a>
            </div>
          </div>

          {/**
           * .framer-amm35g-container (style-WESxf):
           *   flex: 1 0 0, width: 1px, max-width: 320px
           *   z-index: 5
           *
           * Card: .framer-ErT1I.framer-1ma2k6s (style-Cgnde):
           *   width: 320px (limited by max-width on container)
           *   padding: 6px
           *   flex-flow: column
           *   place-content: center
           *   align-items: center
           *   gap: 0
           *   border-radius: 24px
           *   background-color: rgb(26,26,26)
           *   border: 1px solid rgba(31,31,31,0.1)
           *   overflow: clip
           *   cursor: pointer
           *   position: relative
           */}
          <a href="#" className={styles.productCard}>

            {/**
             * .framer-1hdq3d6 (style-7jGgl):
             *   height: 220px
             *   width: 100%
             *   overflow: clip
             *   z-index: 3
             *   background-color: rgb(255,255,255)
             *   border-radius: 20px
             *   position: relative
             */}
            <div className={styles.cardMediaWrapper}>
              {/**
               * Video (style-ZECnt):
               *   width:100%, height:100%
               *   object-fit: cover
               *   object-position: 50% 50%
               *   border-radius: 0
               *   display: block
               */}
              <video
                className={styles.cardVideo}
                src="https://framerusercontent.com/assets/2WO0ZC7yTbYNkxdTbPKkcOs30s.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>

            {/**
             * .framer-1ni9jnm (style-fZbmz):
             *   flex-flow: row
             *   flex: none
             *   place-content: center
             *   align-items: center
             *   gap: 10px
             *   width: 100%
             *   padding: 14px
             *   height: min-content
             *   z-index: 3
             */}
            <div className={styles.cardFooter}>

              {/**
               * .framer-1tcmxgl (style-m3DH1):
               *   flex: 1 0 0
               *   flex-flow: column
               *   place-content: flex-start center
               *   align-items: flex-start
               *   gap: 5px
               *   height: min-content
               */}
              <div className={styles.cardFooterText}>
                {/**
                 * "Digital Brain" (style-Bpy1V):
                 *   font-size: 15px, line-height: 1.4em
                 *   color: rgb(31,31,31)
                 *   font-family: "Inter Display"
                 */}
                <p className={styles.cardTitle}>Digital Brain</p>

                {/**
                 * "// Model v4.0.2" preset style-16efy98:
                 *   font-size: 12px, weight: 300, letter-spacing: 0.01em
                 *   line-height: 1.4em, color: rgba(26,26,26,0.7) [#1a1a1ab3]
                 */}
                <p className={styles.cardVersion}>// Model v4.0.2</p>
              </div>

              {/**
               * .framer-1xwwq0h-container (style-v6gso):
               *   width: 26px, height: 26px
               *   position: absolute
               *   top: calc(49.2958% - 13px)
               *   right: 24px
               *   z-index: 1
               */}
              <div className={styles.cardArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="26" height="26"
                  style={{fill: 'rgb(31,31,31)', flexShrink: 0}}>
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"/>
                </svg>
              </div>
            </div>

            {/**
             * .framer-d7tyka: blurry background image overlay
             *   position: absolute, inset: 0
             *   z-index: 2
             *   overflow: clip
             */}
            <div className={styles.cardBgOverlay}>
              <img
                src="https://framerusercontent.com/images/i8M81i0PeB8FDxgPt1GPDik2kA.jpg"
                alt=""
                className={styles.cardBgImage}
              />
            </div>
          </a>
        </div>

        {/**
         * .framer-ksfjr4:
         *   position: absolute
         *   bottom: -10px, left: 0, right: 0
         *   z-index: 3
         *   flex-flow: column
         *   flex: none
         *   place-content: flex-start center
         *   align-items: flex-start
         *   gap: 10px
         *   padding: 0 40px 50px
         *   height: min-content
         *   overflow: clip
         */}
        <div className={styles.bottomBar}>

          {/**
           * .framer-qcg9jg: max-width: 300px
           * text preset g3iomj: font-size:14px, weight:400, letter-spacing:0.02em,
           *   line-height:1.4em, color: rgb(255,255,255) [via inline style override]
           */}
          <p className={styles.statsText}>
            +2,400 active deployments and 8,200 brands trust our high-performance architecture.
          </p>

          {/**
           * .framer-15vldg4 (style-flWC1):
           *   overflow-x: clip
           *   border-radius: 10px
           *   flex-flow: row
           *   flex: none
           *   place-content: center flex-start
           *   align-items: center
           *   gap: 10px
           *   width: 100%
           *   filter: invert(0)
           *   mask: linear-gradient(90deg, transparent 0%, black 8.03% 92.01%, transparent 100%)
           */}
          <div className={styles.tickerOuter}>
            <ul className={styles.tickerList}>
              {TICKER_LOGOS.map((src, idx) => (
                <li key={idx} className={styles.tickerItem}>
                  {/**
                   * .framer-11nj948: aspect-ratio: 3.31373, width: 189px
                   */}
                  <div className={styles.logoFrame}>
                    <img src={src} alt="" className={styles.logoImg} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/**
         * .framer-1ulft50 (style-4BheX):
         *   position: absolute
         *   inset: 0 0 -10px  ← note: extends 10px below
         *   z-index: 1
         *   overflow: clip
         *   flex: none
         *
         * Contains: background image + .framer-1entcjc blur container
         */}
        <div className={styles.bgWrapper}>
          {/* Background landscape image */}
          <img
            src="/assets/images/PXNhr4LbXoJRWLAHfzNTYjvdR5Y.png"
            alt=""
            className={styles.bgImage}
          />

          {/**
           * .framer-1entcjc:
           *   background: linear-gradient(180deg, rgba(31,31,31,0) 0%, rgba(31,31,31,0.6) 100%)
           *   height: 405px
           *   position: absolute
           *   bottom: 0, left: 0, right: 0
           *   overflow: clip
           *   flex: none
           */}
          <div className={styles.blurContainer}>
            {/* 8-layer progressive backdrop blur */}
            <div className={styles.blur1}></div>
            <div className={styles.blur2}></div>
            <div className={styles.blur3}></div>
            <div className={styles.blur4}></div>
            <div className={styles.blur5}></div>
            <div className={styles.blur6}></div>
            <div className={styles.blur7}></div>
            <div className={styles.blur8}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
