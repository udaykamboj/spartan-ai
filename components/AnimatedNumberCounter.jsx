"use client";

import React, { useRef, useState, useEffect } from "react";

export default function AnimatedNumberCounter({
  start = 0,
  end = 100,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  commas = true,
  style = {},
  className = "",
}) {
  const [current, setCurrent] = useState(start);
  const ref = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const startTime = performance.now();

            const frame = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out expo / cubic curve
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const val = start + (end - start) * easeProgress;
              setCurrent(val);

              if (progress < 1) {
                requestAnimationFrame(frame);
              } else {
                setCurrent(end);
              }
            };

            requestAnimationFrame(frame);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [start, end, duration]);

  let numStr = current.toFixed(decimals);
  if (commas) {
    numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <p
        style={{
          margin: 0,
          opacity: 0,
          pointerEvents: "none",
          userSelect: "none",
          textAlign: "center",
          fontFamily: 'Inter, "Inter Placeholder", sans-serif',
          fontFeatureSettings: "'zero' on, 'tnum' on, 'cv06' on, 'cv13' on, 'cv07' on, 'cv05' on, 'cv10' on, 'cv12' on, 'cv08' on, 'cv11' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv09' on",
          fontSize: "43px",
          fontStyle: "normal",
          fontWeight: 400,
          letterSpacing: "-2px",
          lineHeight: "1em",
          ...style,
          color: "rgb(0, 0, 0)",
        }}
      >
        {prefix}{start}{suffix}
      </p>
      <p
        ref={ref}
        className={className}
        style={{
          position: "absolute",
          inset: 0,
          userSelect: "auto",
          margin: 0,
          textDecoration: "none",
          textAlign: "center",
          fontFamily: 'Inter, "Inter Placeholder", sans-serif',
          fontFeatureSettings: "'zero' on, 'tnum' on, 'cv06' on, 'cv13' on, 'cv07' on, 'cv05' on, 'cv10' on, 'cv12' on, 'cv08' on, 'cv11' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv09' on",
          fontSize: "43px",
          fontStyle: "normal",
          fontWeight: 400,
          letterSpacing: "-2px",
          lineHeight: "1em",
          ...style,
        }}
      >
        {prefix}
        {numStr}
        {suffix}
      </p>
    </>
  );
}
