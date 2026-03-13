import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function getMotionMode() {
  if (typeof window === "undefined") {
    return "reduced";
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const lowCpu = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
  const lowMemory =
    "deviceMemory" in navigator &&
    typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory === "number" &&
    ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4;

  if (reducedMotion || lowCpu || lowMemory) {
    return "reduced";
  }

  return coarsePointer ? "mobile" : "full";
}

export function SmoothScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const motionMode = getMotionMode();
    root.dataset.motion = motionMode;

    if (motionMode === "reduced") {
      return () => {
        delete root.dataset.motion;
      };
    }

    const lenis = new Lenis({
      lerp: motionMode === "mobile" ? 0.12 : 0.08,
      wheelMultiplier: motionMode === "mobile" ? 0.9 : 1,
      smoothWheel: true,
      syncTouch: false
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
