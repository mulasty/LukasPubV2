import { LightStreaks } from "@/components/LightStreaks";
import { StorySection } from "@/components/StorySection";
import { AnimatedText } from "@/components/AnimatedText";

export function LightShowSection() {
  return (
    <StorySection className="overflow-hidden" sceneClassName="min-h-[70vh]">
      <LightStreaks />
      <div data-parallax data-speed="-0.12" className="absolute left-[6%] top-[12%] h-72 w-72 rounded-full bg-fuchsia-500/12 blur-3xl" />
      <div data-parallax data-speed="0.14" className="absolute right-[10%] top-[18%] h-80 w-80 rounded-full bg-cyan-300/12 blur-3xl" />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div data-reveal>
          <p className="section-kicker">Light show</p>
          <AnimatedText
            as="h2"
            text="Światła budują energię zanim wejdziesz na parkiet"
            className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl"
          />
          <p className="mt-6 max-w-xl text-sm leading-7 text-smoke sm:text-base">
            Neonowe streaki, rozproszone światła i powolne beam movement mają sprawić, że scroll czuje się jak przejście przez realny light show w klubie.
          </p>
        </div>

        <div data-glow className="glass-card neon-panel relative min-h-[26rem] overflow-hidden rounded-[2.25rem] p-6">
          <div className="section-mesh" />
          <div data-pulse-light className="absolute left-[16%] top-[20%] h-24 w-24 rounded-full bg-fuchsia-400/28 blur-3xl" />
          <div data-pulse-light className="absolute right-[14%] top-[14%] h-28 w-28 rounded-full bg-cyan-300/24 blur-3xl" />
          <div data-pulse-light className="absolute bottom-[18%] left-[34%] h-20 w-20 rounded-full bg-violet-400/20 blur-3xl" />
          <div className="absolute inset-x-[8%] top-[10%] h-[72%] rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,rgba(10,12,20,0.62),rgba(6,7,10,0.92))]" />
          <div className="absolute left-[18%] top-[8%] h-[74%] w-10 rotate-[12deg] bg-gradient-to-b from-cyan-300/25 to-transparent blur-sm" />
          <div className="absolute left-[50%] top-[4%] h-[82%] w-8 rotate-[-10deg] bg-gradient-to-b from-fuchsia-400/25 to-transparent blur-sm" />
          <div className="absolute right-[20%] top-[10%] h-[76%] w-10 rotate-[16deg] bg-gradient-to-b from-violet-400/24 to-transparent blur-sm" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">Animated lighting</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/76">
              Ruch świateł jest spokojny, ale nie statyczny. Zamiast agresywnej animacji mamy atmosferę, która narasta wraz ze scrollowaniem.
            </p>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
