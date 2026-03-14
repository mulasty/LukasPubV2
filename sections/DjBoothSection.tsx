import { StorySection } from "@/components/StorySection";
import { AnimatedText } from "@/components/AnimatedText";

type DjBoothSectionProps = {
  phoneHref: string;
};

export function DjBoothSection({ phoneHref }: DjBoothSectionProps) {
  return (
    <StorySection className="overflow-hidden" sceneClassName="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div data-glow className="glass-card neon-panel relative min-h-[28rem] overflow-hidden rounded-[2.4rem] p-6">
        <div className="section-mesh" />
        <div data-parallax data-speed="-0.1" className="absolute left-[12%] top-[10%] h-40 w-40 rounded-full bg-fuchsia-500/18 blur-3xl" />
        <div data-parallax data-speed="0.12" className="absolute right-[14%] top-[16%] h-48 w-48 rounded-full bg-cyan-300/16 blur-3xl" />
        <div data-pulse-light className="absolute inset-x-[24%] top-[16%] h-24 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-x-[12%] bottom-[18%] top-[22%] rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,18,28,0.4),rgba(6,7,10,0.9))]" />
        <div className="absolute inset-x-[20%] bottom-[12%] h-16 rounded-t-[1.5rem] border border-white/10 bg-black/45" />
        <div className="absolute inset-x-[24%] bottom-[17%] flex justify-center gap-3">
          <span className="h-2 w-10 rounded-full bg-cyan-300/70 shadow-[0_0_14px_rgba(91,231,255,0.45)]" />
          <span className="h-2 w-10 rounded-full bg-fuchsia-400/70 shadow-[0_0_14px_rgba(255,77,184,0.42)]" />
          <span className="h-2 w-10 rounded-full bg-violet-400/70 shadow-[0_0_14px_rgba(138,107,255,0.4)]" />
        </div>
      </div>

      <div data-reveal>
        <p className="section-kicker">DJ booth reveal</p>
        <AnimatedText
          as="h2"
          text="This weekend party"
          className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl"
        />
        <p className="mt-6 max-w-xl text-sm leading-7 text-smoke sm:text-base">
          Sekcja działa jak wejście pod scenę. Mocniejszy headline, burst światła i wyraźne CTA mają przygotować użytkownika na wydarzenia weekendowe.
        </p>
        <a href={phoneHref} className="cta-primary mt-8">
          Rezerwacja na weekend
        </a>
      </div>
    </StorySection>
  );
}
