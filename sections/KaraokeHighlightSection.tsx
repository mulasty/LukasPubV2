import Image from "next/image";
import { AnimatedText } from "@/components/AnimatedText";
import { StorySection } from "@/components/StorySection";

type KaraokeHighlightSectionProps = {
  title: string;
  time: string;
  description: string;
  phoneHref: string;
};

export function KaraokeHighlightSection({
  title,
  time,
  description,
  phoneHref
}: KaraokeHighlightSectionProps) {
  return (
    <StorySection className="overflow-hidden" sceneClassName="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div className="relative min-h-[500px]" data-reveal>
        <div data-parallax data-speed="-0.16" className="absolute -left-10 top-[10%] h-52 w-52 rounded-full bg-fuchsia-500/16 blur-3xl" />
        <div className="absolute inset-0 overflow-hidden rounded-[2.25rem] border border-white/10">
          <Image
            src="/images/hero.png"
            alt="Klimat karaoke night"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,10,0.12),rgba(6,7,10,0.85))]" />
        </div>
        <div
          data-parallax
          data-speed="0.2"
          className="absolute bottom-8 right-8 max-w-xs rounded-[2rem] border border-cyan-300/25 bg-night-950/70 p-5 backdrop-blur"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200">Mic check</p>
          <p className="mt-3 text-sm leading-7 text-white/84">Wieczór otwarty dla ekip, które chcą śpiewać, kibicować i złapać luźniejszy klimat przed weekendem.</p>
        </div>
      </div>

      <div className="relative" data-reveal>
        <p className="section-kicker">Karaoke spotlight</p>
        <AnimatedText
          as="h2"
          text={title}
          className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl"
        />
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.32em] text-fuchsia-300">{time}</p>
        <p className="mt-6 max-w-xl text-sm leading-7 text-smoke sm:text-base">{description}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div data-card className="glass-card rounded-[1.75rem] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200">Tempo</p>
            <p className="mt-4 text-sm leading-7 text-white/85">Luźny start, szybkie przejście do wspólnego śpiewania i stolików pełnych znajomych.</p>
          </div>
          <div data-card className="glass-card rounded-[1.75rem] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-fuchsia-300">Dla kogo</p>
            <p className="mt-4 text-sm leading-7 text-white/85">Na spontaniczny wypad, celebrację z ekipą albo rozgrzewkę przed weekendem.</p>
          </div>
          <div data-card className="glass-card rounded-[1.75rem] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-violet-300">CTA</p>
            <a href={phoneHref} className="mt-4 inline-flex text-sm font-semibold text-white hover:text-cyan-200">
              Zarezerwuj telefonicznie
            </a>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
