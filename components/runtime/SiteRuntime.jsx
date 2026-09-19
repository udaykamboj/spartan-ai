"use client";

import { useEffect } from "react";
import { initAppear } from "./appear";
import { initTickers } from "./ticker";
import { initEffects } from "./effects";
import { initCounters } from "./counters";
import { initLetters } from "./letters";

// Client-side behaviour for the server-rendered reference markup: what Framer's runtime does
// after hydration (appear effects for non-optimized copies, tickers, scroll/loop effects,
// code components).
export default function SiteRuntime() {
  useEffect(() => {
    const cleanups = [
      initAppear(),
      initTickers(), // before effects: ticker clones contain looping elements
      initEffects(),
      initCounters(),
      initLetters(),
    ];
    return () => cleanups.forEach((c) => c && c());
  }, []);
  return null;
}
