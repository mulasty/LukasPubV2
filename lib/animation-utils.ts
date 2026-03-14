import { gsap } from "@/lib/gsap";

type TriggerConfig = {
  trigger: Element;
  reduceMotion: boolean;
};

export function fadeUp(target: gsap.TweenTarget, { trigger, reduceMotion }: TriggerConfig, delay = 0) {
  return gsap.fromTo(
    target,
    { autoAlpha: 0, y: reduceMotion ? 18 : 56 },
    {
      autoAlpha: 1,
      y: 0,
      duration: reduceMotion ? 0.7 : 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 86%",
        once: true
      }
    }
  );
}

export function textReveal(targets: gsap.TweenTarget, { trigger, reduceMotion }: TriggerConfig) {
  return gsap.fromTo(
    targets,
    { yPercent: 110, autoAlpha: 0 },
    {
      yPercent: 0,
      autoAlpha: 1,
      duration: reduceMotion ? 0.8 : 1.1,
      stagger: reduceMotion ? 0.01 : 0.04,
      ease: "power4.out",
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
    { yPercent: speed * -24, scale: 1 - Math.abs(speed) * 0.06 },
    {
      yPercent: speed * 24,
      scale: 1 + Math.abs(speed) * 0.04,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: reduceMotion ? false : 0.85
      }
    }
  );
}

export function staggerCards(cards: Element[], reduceMotion: boolean) {
  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { autoAlpha: 0, y: reduceMotion ? 20 : 48, scale: 0.96 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: reduceMotion ? 0.75 : 0.95,
        delay: index * (reduceMotion ? 0.02 : 0.05),
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true
        }
      }
    );
  });
}

export function neonGlow(target: gsap.TweenTarget, trigger: Element, delay = 0) {
  return gsap.fromTo(
    target,
    { autoAlpha: 0.24, scale: 0.94 },
    {
      autoAlpha: 1,
      scale: 1,
      delay,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start: "top 86%",
        once: true
      }
    }
  );
}

export function lightPulse(target: gsap.TweenTarget, intensity = 1) {
  return gsap.to(target, {
    opacity: 0.35 + intensity * 0.55,
    scale: 1 + intensity * 0.08,
    duration: 0.72,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

export function floatingMotion(target: gsap.TweenTarget, index: number) {
  return gsap.to(target, {
    y: index % 2 === 0 ? -14 : 14,
    x: index % 3 === 0 ? 7 : -7,
    duration: 3.4 + index * 0.35,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}
