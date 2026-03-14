import { AmbientOrb } from "@/components/AmbientOrb";
import { AnimatedText } from "@/components/AnimatedText";
import { FogLayer } from "@/components/FogLayer";
import { LightBeams } from "@/components/LightBeams";
import { StorySection } from "@/components/StorySection";

export function LightShowSection() {
  return (
    <StorySection className="overflow-hidden" sceneClassName="min-h-[78vh]">
      <LightBeams className="opacity-80" />
      <AmbientOrb speed={-0.12} className="left-[8%] top-[8%] h-56 w-56 bg-fuchsia-500/18" />
      <AmbientOrb speed={0.16} className="right-[10%] top-[12%] h-72 w-72 bg-cyan-300/16" />
      <AmbientOrb speed={-0.18} className="left-[38%] bottom-[10%] h-64 w-64 bg-violet-400/16" />
      <FogLayer className="bottom-[-2rem]" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div data-reveal className="max-w-xl">
          <p className="section-kicker">Light show</p>
          <AnimatedText
            as="h2"
            text="Światło prowadzi scroll jak wejście na parkiet"
            className="mt-4 font-display text-5xl uppercase leading-[0.88] text-white sm:text-6xl"
          />
          <p className="mt-6 text-sm leading-7 text-white/74 sm:text-base">
            Neonowe wiązki, mgła i wolno przesuwające się gradients mają dawać wrażenie, że scrollujesz przez światła klubu, a nie przez zwykłe sekcje landing page.
          </p>
        </div>

        <div data-blur-reveal className="relative min-h-[26rem] rounded-[2.3rem] border border-white/10 bg-black/25">
          <div className="absolute inset-0 rounded-[2.3rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-light-pulse className="h-44 w-44 rounded-full bg-fuchsia-500/24 blur-3xl" />
            <div className="light-column absolute left-[18%] top-[8%] h-[120%] rotate-[15deg] opacity-80" />
            <div className="light-column absolute left-[42%] top-[-4%] h-[128%] rotate-[-12deg] bg-[linear-gradient(180deg,rgba(255,56,168,0.28),rgba(144,103,255,0))]" />
            <div className="light-column absolute right-[14%] top-[4%] h-[118%] rotate-[22deg]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="glass-card rounded-[1.8rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">Moving gradients</p>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Światła poruszają się delikatnie w tle, a reszta animacji reaguje na scroll, żeby całość czuła się jak kontrolowane show.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
