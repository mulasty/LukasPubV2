import Image from "next/image";
import { AnimatedText } from "@/components/AnimatedText";
import { Container } from "@/components/Container";
import { FloatingParticles } from "@/components/FloatingParticles";

type HeroSectionProps = {
  name: string;
  slogan: string;
  description: string;
  phoneHref: string;
};

export function HeroSection({ name, slogan, description, phoneHref }: HeroSectionProps) {
  return (
    <section
      data-scene
      data-hero
      className="relative flex min-h-screen items-end overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(225,191,111,0.22),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(183,59,83,0.24),transparent_28%),linear-gradient(180deg,rgba(5,6,10,0.3),rgba(5,6,10,0.95))]" />
      <div className="absolute inset-0 overflow-hidden">
        <div
          data-hero-bg
          className="absolute inset-0 scale-105 will-change-transform"
        >
          <Image
            src="/images/hero.png"
            alt="Wnętrze Lukas Pub Dance Club"
            fill
            priority
            className="object-cover object-center opacity-85"
          />
        </div>
        <div
          data-parallax
          data-speed="-0.22"
          className="absolute inset-x-0 top-[8%] h-56 rounded-full bg-ruby-500/20 blur-3xl"
        />
        <div
          data-parallax
          data-speed="0.2"
          className="absolute -left-10 top-[22%] h-72 w-72 rounded-full bg-gold-400/12 blur-3xl"
        />
        <div
          data-parallax
          data-speed="-0.18"
          className="absolute bottom-[6%] right-[8%] h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"
        />
        <FloatingParticles />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,10,0.15),rgba(6,7,10,0.88)_75%,rgba(6,7,10,1))]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

      <Container className="relative z-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div
              data-hero-badge
              data-reveal
              className="inline-flex rounded-full border border-gold-300/25 bg-night-950/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-300 backdrop-blur"
            >
              Lomza nightlife story
            </div>
            <AnimatedText
              as="h1"
              text={name}
              className="mt-6 max-w-4xl font-display text-[4.5rem] uppercase leading-[0.86] text-white sm:text-[6rem] lg:text-[8.5rem]"
            />
            <div data-hero-headline className="will-change-transform">
              <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-white/88 sm:text-2xl">{slogan}</p>
            </div>
            <div data-hero-copy className="will-change-transform">
              <p className="mt-5 max-w-xl text-sm leading-7 text-smoke sm:text-base">{description}</p>
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
              className="glass-card grid max-w-md gap-4 rounded-[2rem] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-300">Neon rhythm</p>
                  <p className="mt-2 font-display text-3xl uppercase">Czw. Pt. Sob.</p>
                </div>
                <span className="rounded-full border border-gold-300/25 px-3 py-1 text-xs text-white/80">Weekly pulse</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
                  <p className="text-gold-300">Czw</p>
                  <p className="mt-3 font-semibold text-white">Karaoke</p>
                </div>
                <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
                  <p className="text-gold-300">Pt</p>
                  <p className="mt-3 font-semibold text-white">Dance</p>
                </div>
                <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
                  <p className="text-gold-300">Sob</p>
                  <p className="mt-3 font-semibold text-white">Club</p>
                </div>
              </div>
            </div>

            <div data-glow className="glass-card max-w-md rounded-[2rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold-300">Adres i rezerwacje</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/82">
                <span className="rounded-full border border-white/10 px-3 py-2">Al. Legionów 60B</span>
                <span className="rounded-full border border-white/10 px-3 py-2">694 760 743</span>
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
        <span className="h-10 w-px bg-gradient-to-b from-gold-300/70 to-transparent" />
      </div>
    </section>
  );
}
