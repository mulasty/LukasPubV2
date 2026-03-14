import { RefObject, useEffect, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  blurTransition,
  buildSectionProgress,
  fadeUp,
  floatingMotion,
  neonGlow,
  staggerCards,
  textReveal,
  zoomParallax
} from "@/lib/animation-utils";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function getMotionMode() {
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

export function useScrollStory(rootRef: RefObject<HTMLElement>) {
  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const motionMode = document.documentElement.dataset.motion ?? getMotionMode();
    const reduceMotion = motionMode === "reduced";
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const revealTargets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      revealTargets.forEach((element) => {
        fadeUp(element, { trigger: element, reduceMotion });
      });

      const splitTargets = gsap.utils.toArray<HTMLElement>("[data-split]");
      splitTargets.forEach((element) => {
        const words = element.querySelectorAll<HTMLElement>("[data-word]");
        textReveal(words, { trigger: element, reduceMotion });
      });

      const parallaxItems = gsap.utils.toArray<HTMLElement>("[data-parallax]");
      parallaxItems.forEach((element) => {
        const speed = Number(element.dataset.speed ?? 0.18);
        const trigger = element.closest<HTMLElement>("[data-scene]") ?? element;
        zoomParallax(element, trigger, speed, reduceMotion);
      });

      const glowItems = gsap.utils.toArray<HTMLElement>("[data-glow]");
      glowItems.forEach((element) => {
        neonGlow(element, element);
      });

      const blurItems = gsap.utils.toArray<HTMLElement>("[data-blur-reveal]");
      blurItems.forEach((element) => {
        blurTransition(element, element, reduceMotion);
      });

      const hero = root.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const heroBackground = hero.querySelector<HTMLElement>("[data-hero-bg]");
        const heroHeadline = hero.querySelector<HTMLElement>("[data-hero-headline]");
        const heroSubcopy = hero.querySelector<HTMLElement>("[data-hero-copy]");
        const heroBadge = hero.querySelector<HTMLElement>("[data-hero-badge]");
        const heroParticles = hero.querySelectorAll<HTMLElement>("[data-float]");
        const heroCue = hero.querySelector<HTMLElement>("[data-hero-cue]");

        const heroTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: reduceMotion ? false : 1.15
          }
        });

        if (heroBackground) {
          heroTimeline.to(heroBackground, { scale: 1.16, yPercent: 10, ease: "none" }, 0);
        }

        if (heroHeadline) {
          heroTimeline.to(heroHeadline, { yPercent: -26, autoAlpha: 0, ease: "none" }, 0);
        }

        if (heroSubcopy) {
          heroTimeline.to(heroSubcopy, { yPercent: -18, autoAlpha: 0.08, ease: "none" }, 0);
        }

        if (heroBadge) {
          heroTimeline.to(heroBadge, { yPercent: -12, autoAlpha: 0.12, ease: "none" }, 0);
        }

        if (heroCue) {
          heroTimeline.to(heroCue, { yPercent: -22, autoAlpha: 0, ease: "none" }, 0);
        }

        if (heroParticles.length > 0) {
          heroTimeline.to(heroParticles, { yPercent: -45, autoAlpha: 0.25, stagger: 0.02, ease: "none" }, 0);
        }
      }

      if (!reduceMotion) {
        const floaters = gsap.utils.toArray<HTMLElement>("[data-float]");
        floaters.forEach((element, index) => {
          floatingMotion(element, index);
        });

        const beams = gsap.utils.toArray<HTMLElement>("[data-beam]");
        beams.forEach((beam, index) => {
          gsap.to(beam, {
            xPercent: index % 2 === 0 ? 6 : -6,
            opacity: index % 2 === 0 ? 0.88 : 0.56,
            duration: 5 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });

        const soundWaves = gsap.utils.toArray<HTMLElement>("[data-sound-wave]");
        soundWaves.forEach((wave, index) => {
          gsap.to(wave, {
            scaleY: index % 2 === 0 ? 1.65 : 1.25,
            opacity: 0.92,
            duration: 0.8 + index * 0.08,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });

        const lightPulseSections = gsap.utils.toArray<HTMLElement>("[data-light-pulse]");
        lightPulseSections.forEach((section) => {
          gsap.to(section, {
            opacity: 0.9,
            scale: 1.04,
            duration: 2.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });
      }

      mm.add("(min-width: 1024px)", () => {
        const horizontalSection = root.querySelector<HTMLElement>("[data-horizontal-section]");
        const horizontalTrack = root.querySelector<HTMLElement>("[data-horizontal-track]");

        if (horizontalSection && horizontalTrack) {
          const getDistance = () => Math.max(0, horizontalTrack.scrollWidth - horizontalSection.clientWidth + 96);

          gsap.to(horizontalTrack, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: horizontalSection,
              start: "top top",
              end: () => `+=${getDistance()}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true
            }
          });
        }

        const galleryRail = root.querySelector<HTMLElement>("[data-gallery-rail]");
        if (galleryRail) {
          gsap.fromTo(
            galleryRail,
            { xPercent: 8 },
            {
              xPercent: -8,
              ease: "none",
              scrollTrigger: {
                trigger: galleryRail,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
              }
            }
          );
        }
      });

      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
        staggerCards(cards, reduceMotion);
      });

      const progress = root.querySelector<HTMLElement>("[data-page-progress]");
      if (progress) {
        buildSectionProgress(progress, root);
      }
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [rootRef]);
}
