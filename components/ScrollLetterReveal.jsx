"use client";

import React, { useRef, useState, useEffect } from "react";

export default function ScrollLetterReveal({
  text,
  fontSize = 56,
  lineHeight = 60,
  letterSpacing = -2,
  fontFamily = '"Inter Display", "Inter Display Placeholder", sans-serif',
  fontWeight = 500,
  fromColor = "rgba(26, 26, 26, 0.1)",
  toColor = "rgb(26, 26, 26)",
  transitionStartIndex = 0,
}) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Framer offset: ["start 0.75", "start 0.15"]
      // Starts when rect.top is at 75% of viewport, ends when rect.top is at 15% of viewport
      const startY = windowH * 0.75;
      const endY = windowH * 0.15;
      const currentY = rect.top;
      const p = Math.min(Math.max((startY - currentY) / (startY - endY), 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");
  const totalWords = words.length;

  let currentCharacterIndex = 0;

  return (
    <p
      ref={containerRef}
      style={{
        fontFamily,
        fontWeight,
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
        letterSpacing: `${letterSpacing}px`,
        color: toColor,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        margin: 0,
      }}
    >
      {words.map((word, wordIdx) => {
        const wordStart = wordIdx / totalWords;
        const wordEnd = (wordIdx + 1) / totalWords;
        const chars = word.split("");
        const step = (wordEnd - wordStart) / chars.length;
        const wordStartCharIdx = currentCharacterIndex;
        currentCharacterIndex += chars.length + 1;

        return (
          <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {chars.map((char, charIdx) => {
              const charStart = wordStart + step * charIdx;
              const charEnd = wordStart + step * (charIdx + 1);
              const absCharIdx = wordStartCharIdx + charIdx;

              const isPassed = absCharIdx < transitionStartIndex || progress >= charEnd;
              const isBefore = progress < charStart;
              let charColor = fromColor;
              if (isPassed) {
                charColor = toColor;
              } else if (!isBefore) {
                charColor = toColor;
              }

              return (
                <span
                  key={charIdx}
                  style={{
                    color: charColor,
                    transition: "color 0.2s ease-in-out",
                  }}
                >
                  {char}
                </span>
              );
            })}
            <span>&nbsp;</span>
          </span>
        );
      })}
    </p>
  );
}
