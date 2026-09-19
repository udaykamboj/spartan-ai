"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Reusable carousel controller hook for sliding track showcases.
 * Supports automated looping, pause on hover, touch/drag gesture swipe, and index bounding.
 */
export function useCarousel({
  totalSlides = 16,
  cardWidth = 285,
  cardGap = 16,
  autoPlayInterval = 5000,
} = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(0);
  const step = cardWidth + cardGap; // 301px

  const next = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goTo = useCallback(
    (index) => {
      setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)));
    },
    [totalSlides]
  );

  useEffect(() => {
    if (isPaused || autoPlayInterval <= 0) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPaused, autoPlayInterval, next]);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches ? e.touches[0].clientX : e.clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = touchStartXRef.current - endX;
    if (diff > 40) {
      next();
    } else if (diff < -40) {
      prev();
    }
  };

  return {
    currentSlide,
    next,
    prev,
    goTo,
    trackStyle: {
      transform: `translateX(-${currentSlide * step}px)`,
      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    containerProps: {
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
    },
  };
}
