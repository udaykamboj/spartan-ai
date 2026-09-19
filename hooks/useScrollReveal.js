"use client";

import { useEffect } from "react";

/**
 * Scroll reveal hook that ensures elements with scroll-reveal selectors
 * are smoothly revealed into view via IntersectionObserver, with a guaranteed
 * visibility fallback so content is never stuck at opacity 0.
 */
export function useScrollReveal(
  selector = ".spartan-15kdlea, .spartan-1qwibo7-container, .spartan-azibb, .spartan-edyuzh-container, .spartan-1p4r474-container, .spartan-fgmqry-container, .spartan-15dji3e-container, .spartan-cq5xb8, .spartan-xjpx3h, .spartan-wuel3w, .spartan-wo3yud"
) {
  useEffect(() => {
    const targets = document.querySelectorAll(selector);
    targets.forEach((target) => {
      target.classList.add("spartan-scroll-reveal", "is-revealed");
    });

    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [selector]);
}
