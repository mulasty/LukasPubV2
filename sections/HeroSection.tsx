import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatedText } from "@/components/AnimatedText";
import { Container } from "@/components/Container";
import { FloatingParticles } from "@/components/FloatingParticles";

type HeroSectionProps = {
  name: string;
  slogan: string;
  description: string;
  phoneHref: string;
  heroVideos: string[];
  posterImage: string;
};

export function HeroSection({
  name,
  slogan,
  description,
  phoneHref,
  heroVideos,
  posterImage
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [videoEnabled, setVideoEnabled] = useState(heroVideos.length > 0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const saveData =
      "connection" in navigator &&
      Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    const lowCpu = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
    const lowMemory =
      "deviceMemory" in navigator &&
      typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory === "number" &&
      ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4;

    setHasMounted(true);
    setVideoEnabled(!prefersReducedMotion && !saveData && !coarsePointer && !lowCpu && !lowMemory && heroVideos.length > 0);
  }, [heroVideos.length]);

  useEffect(() => {
    if (!videoEnabled || !videoRef.current) {
      return;
    }

    const playPromise = videoRef.current.play();
    if (playPromise) {
      playPromise.catch(() => {
        setVideoEnabled(false);
      });
    }
  }, [activeVideoIndex, videoEnabled]);

  useEffect(() => {
    if (!videoEnabled || !videoRef.current) {
      return;
    }

    const element = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          void element.play().catch(() => setVideoEnabled(false));
        } else {
          element.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [activeVideoIndex, videoEnabled]);

  const handleVideoEnded = () => {
    if (heroVideos.length <= 1) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        void videoRef.current.play().catch(() => setVideoEnabled(false));
      }
      return;
    }

    setActiveVideoIndex((currentIndex) => (currentIndex + 1) % heroVideos.length);
  };

  return (
    <section
      data-scene
      data-hero
      className="relative flex min-h-screen items-end overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_18%_22%,rgba(37,99,235,0.14),transparent_20%),radial-gradient(circle_at_82%_18%,rgba(236,72,153,0.16),transparent_24%),linear-gradient(180deg,rgba(2,3,6,0.86),rgba(5,6,10,0.96))]" />
      <div className="absolute inset-0 overflow-hidden">
        <div data-hero-bg className="absolute inset-0 scale-105 will-change-transform">
          {videoEnabled ? (
            <video
              key={heroVideos[activeVideoIndex]}
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster={posterImage}
              onEnded={handleVideoEnded}
              onError={() => setVideoEnabled(false)}
              className="hero-video opacity-80"
            >
              <source src={heroVideos[activeVideoIndex]} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={posterImage}
              alt="Wnetrze Lukas Pub Dance Club"
              fill
              priority
              className="object-cover object-center opacity-85"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(236,72,153,0.08),transparent)]" />
        <div
          data-parallax
          data-speed="-0.22"
          className="absolute inset-x-0 top-[8%] h-56 rounded-full bg-fuchsia-500/18 blur-3xl"
        />
        <div
          data-parallax
          data-speed="0.2"
          className="absolute -left-10 top-[22%] h-72 w-72 rounded-full bg-cyan-300/12 blur-3xl"
        />
        <div
          data-parallax
          data-speed="-0.18"
          className="absolute bottom-[6%] right-[8%] h-64 w-64 rounded-full bg-violet-400/12 blur-3xl"
        />
        <div data-pulse-light className="absolute left-[18%] top-[14%] h-20 w-20 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div data-pulse-light className="absolute right-[20%] top-[12%] h-24 w-24 rounded-full bg-cyan-300/16 blur-3xl" />
        <FloatingParticles />
        <div className="fog-strip" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,10,0.2),rgba(6,7,10,0.84)_72%,rgba(6,7,10,1))]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <Container className="relative z-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div
              data-hero-badge
              data-reveal
              className="inline-flex rounded-full border border-cyan-300/25 bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.42em] text-cyan-200 backdrop-blur"
            >
              Dark intro
            </div>
            <AnimatedText
              as="h1"
              text={name}
              className="mt-6 max-w-4xl font-display text-[4.5rem] uppercase leading-[0.82] text-white sm:text-[6rem] lg:text-[8.8rem]"
            />
            <div data-hero-headline className="will-change-transform">
              <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-white/88 sm:text-2xl">{slogan}</p>
            </div>
            <div data-hero-copy className="will-change-transform">
              <p className="mt-5 max-w-xl text-sm leading-7 text-smoke sm:text-base">{description}</p>
              {videoEnabled && heroVideos.length > 1 ? (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {heroVideos.map((video, index) => (
                    <button
                      key={video}
                      type="button"
                      aria-label={`Przelacz film hero ${index + 1}`}
                      onClick={() => setActiveVideoIndex(index)}
                      data-active={index === activeVideoIndex}
                      className={`hero-control h-2.5 rounded-full border border-white/10 transition-all ${
                        index === activeVideoIndex ? "w-10 bg-cyan-300/15 shadow-[0_0_16px_rgba(34,211,238,0.45)]" : "w-2.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              ) : null}
              {hasMounted && !videoEnabled ? (
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                  Static mode for smoother playback
                </p>
              ) : null}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#rezerwacja" className="cta-primary">
                  Zarezerwuj stolik
                </a>
                <a href={phoneHref} className="cta-secondary">
                  Zadzwoń teraz
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:justify-items-end">
            <div
              data-glow
              className="glass-card neon-panel grid max-w-md gap-4 rounded-[2rem] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">Club pulse</p>
                  <p className="mt-2 font-display text-3xl uppercase">Czw. Pt. Sob.</p>
                </div>
                <span className="rounded-full border border-fuchsia-400/25 px-3 py-1 text-xs text-white/80">Weekly pulse</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="club-chip rounded-3xl p-4">
                  <p className="text-cyan-200">Czw</p>
                  <p className="mt-3 font-semibold text-white">Karaoke</p>
                </div>
                <div className="club-chip rounded-3xl p-4">
                  <p className="text-fuchsia-300">Pt</p>
                  <p className="mt-3 font-semibold text-white">Dance</p>
                </div>
                <div className="club-chip rounded-3xl p-4">
                  <p className="text-violet-300">Sob</p>
                  <p className="mt-3 font-semibold text-white">Club</p>
                </div>
              </div>
            </div>

            <div data-glow className="glass-card max-w-md rounded-[2rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200">Adres i rezerwacje</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/82">
                <span className="club-chip rounded-full px-3 py-2">Al. Legionów 60B</span>
                <span className="club-chip rounded-full px-3 py-2">694 760 743</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div
        data-hero-cue
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/60"
      >
        Scroll story
        <span className="h-10 w-px bg-gradient-to-b from-cyan-300/70 to-transparent" />
      </div>
    </section>
  );
}
