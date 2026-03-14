import { gsap, ScrollTrigger } from "@/lib/gsap";

type ScrollOptions = {
  trigger: Element;
  reduceMotion: boolean;
};

export function fadeUp(target: gsap.TweenTarget, { trigger, reduceMotion }: ScrollOptions, config?: gsap.TweenVars) {
  return gsap.fromTo(
    target,
    { autoAlpha: 0, y: reduceMotion ? 24 : 64 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 85%",
        once: true
      },
      ...config
    }
  );
}

export function textReveal(words: gsap.TweenTarget, { trigger, reduceMotion }: ScrollOptions) {
  return gsap.fromTo(
    words,
    { yPercent: 110, autoAlpha: 0 },
    {
      yPercent: 0,
      autoAlpha: 1,
      duration: 1.1,
      ease: "power4.out",
      stagger: reduceMotion ? 0.01 : 0.035,
      scrollTrigger: {
        trigger,
        start: "top 88%",
        once: true
      }
    }
  );
}

export function zoomParallax(target: gsap.TweenTarget, trigger: Element, speed: number, reduceMotion: boolean) {
  return gsap.fromTo(
    target,
    { yPercent: speed * -28 },
    {
      yPercent: speed * 28,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: reduceMotion ? false : 0.9
      }
    }
  );
}

export function staggerCards(cards: Element[], reduceMotion: boolean) {
  return cards.map((card, index) =>
    gsap.fromTo(
      card,
      { autoAlpha: 0, y: reduceMotion ? 18 : 52, scale: 0.96, filter: "blur(8px)" },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        delay: index * (reduceMotion ? 0.02 : 0.06),
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true
        }
      }
    )
  );
}

export function neonGlow(target: gsap.TweenTarget, trigger: Element) {
  return gsap.fromTo(
    target,
    { autoAlpha: 0.2, scale: 0.92 },
    {
      autoAlpha: 1,
      scale: 1,
      duration: 1.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start: "top 86%",
        once: true
      }
    }
  );
}

export function blurTransition(target: gsap.TweenTarget, trigger: Element, reduceMotion: boolean) {
  return gsap.fromTo(
    target,
    { autoAlpha: 0, filter: "blur(26px)" },
    {
      autoAlpha: 1,
      filter: "blur(0px)",
      duration: reduceMotion ? 0.7 : 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start: "top 82%",
        once: true
      }
    }
  );
}

export function floatingMotion(target: gsap.TweenTarget, index: number) {
  return gsap.to(target, {
    y: index % 2 === 0 ? -16 : 16,
    x: index % 3 === 0 ? 8 : -8,
    duration: 3 + index * 0.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

export function buildSectionProgress(target: gsap.TweenTarget, trigger: Element) {
  return gsap.fromTo(
    target,
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    }
  );
}

export { gsap, ScrollTrigger };
