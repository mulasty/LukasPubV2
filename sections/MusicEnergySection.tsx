import { AnimatedText } from "@/components/AnimatedText";
import { BeatPulseLights } from "@/components/BeatPulseLights";
import { StorySection } from "@/components/StorySection";

export function MusicEnergySection() {
  return (
    <StorySection className="overflow-hidden" sceneClassName="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div data-reveal>
        <p className="section-kicker">Music energy</p>
        <AnimatedText
          as="h2"
          text="Światło pulsuje tak, jakby muzyka już grała"
          className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl"
        />
        <p className="mt-6 max-w-xl text-sm leading-7 text-smoke sm:text-base">
          Bez audio, ale z rytmem. Pulsujące gradienty, beat bars i mocniejsze uderzenia co kilka cykli mają symulować tempo klubowej nocy.
        </p>
        <BeatPulseLights className="mt-8" />
      </div>

      <div data-glow className="glass-card relative min-h-[24rem] overflow-hidden rounded-[2.25rem] p-6">
        <div data-pulse-light className="absolute inset-x-[20%] top-[14%] h-28 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div data-pulse-light className="absolute inset-x-[28%] top-[34%] h-24 rounded-full bg-cyan-300/16 blur-3xl" />
        <div data-pulse-light className="absolute inset-x-[18%] top-[54%] h-24 rounded-full bg-violet-400/18 blur-3xl" />
        <div className="absolute inset-x-[12%] bottom-8 top-8 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(8,10,16,0.8))]" />
        <div className="absolute inset-x-[14%] bottom-12 flex items-end justify-center gap-3">
          {Array.from({ length: 11 }).map((_, index) => (
            <span
              key={index}
              data-beat-bar
              className="beat-bar"
              style={{ height: `${28 + (index % 5) * 14}px`, opacity: 0.42 + index * 0.03 }}
            />
          ))}
        </div>
      </div>
    </StorySection>
  );
}
