import Image from "next/image";
import { AnimatedText } from "@/components/AnimatedText";
import { StorySection } from "@/components/StorySection";

type AboutSectionProps = {
  description: string;
  highlights: string[];
};

export function AboutSection({ description, highlights }: AboutSectionProps) {
  return (
    <StorySection
      id="o-klubie"
      className="overflow-hidden"
      sceneClassName="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
    >
      <div className="relative" data-reveal>
        <div data-parallax data-speed="-0.18" className="absolute -left-12 top-0 h-44 w-44 rounded-full bg-fuchsia-500/18 blur-3xl" />
        <div className="glass-card relative overflow-hidden rounded-[2.25rem] p-6 sm:p-8">
          <p className="section-kicker">Atmosfera</p>
          <AnimatedText
            as="h2"
            text="Swoboda pubu, energia klubu i nocny rytm Łomży"
            className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl"
          />
          <p className="mt-6 max-w-xl text-sm leading-7 text-smoke sm:text-base">{description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} data-card className="rounded-[1.75rem] border border-white/8 bg-white/5 p-5">
                <p className="text-sm leading-7 text-white/88">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative min-h-[420px]" data-reveal>
        <div
          data-parallax
          data-speed="0.14"
          className="absolute inset-y-[8%] -right-10 w-40 rounded-full bg-cyan-300/15 blur-3xl"
        />
        <div className="absolute inset-0 rotate-[-4deg] overflow-hidden rounded-[2rem] border border-white/10">
          <Image
            src="/images/background.png"
            alt="Nastrojowe tło świetlne lokalu"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-x-[8%] bottom-[6%] top-[16%] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <Image
            src="/images/hero.png"
            alt="Sala Lukas Pub Dance Club"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200">Night sequence</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/82">
              Wieczór przechodzi tu płynnie od stołu i rozmowy do karaoke, tańca i późniejszego wejścia na parkiet.
            </p>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
