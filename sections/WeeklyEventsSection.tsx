import { AnimatedText } from "@/components/AnimatedText";
import { StorySection } from "@/components/StorySection";

type EventItem = {
  day: string;
  title: string;
  time: string;
  description: string;
};

type WeeklyEventsSectionProps = {
  events: EventItem[];
};

export function WeeklyEventsSection({ events }: WeeklyEventsSectionProps) {
  return (
    <section data-scene data-horizontal-section className="relative py-20 lg:py-0">
      <div data-parallax data-speed="-0.12" className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-fuchsia-500/16 blur-3xl" />
      <div data-parallax data-speed="0.18" className="absolute bottom-16 right-[8%] h-72 w-72 rounded-full bg-cyan-300/12 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:px-8">
        <div className="mb-8 max-w-2xl lg:mb-12" data-reveal>
          <p className="section-kicker">Weekly events</p>
          <AnimatedText
            as="h2"
            text="Scrolluj przez rytm tygodnia"
            className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl"
          />
          <p className="mt-5 text-sm leading-7 text-smoke sm:text-base">
            Na desktopie sekcja przesuwa się horyzontalnie, żeby poczuć zmianę tempa między karaoke, dance party i najmocniejszą sobotą.
          </p>
        </div>

        <div data-horizontal-track className="flex gap-5 lg:w-max lg:pb-0">
          {events.map((event, index) => (
            <article
              key={event.day}
              data-card
              className="glass-card event-card w-full min-w-0 rounded-[2rem] p-6 sm:p-7 lg:w-[36rem] lg:flex-none"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">{event.day}</p>
                  <h3 className="mt-4 font-display text-4xl uppercase text-white sm:text-5xl">{event.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/78">{event.time}</p>
              <p className="mt-6 max-w-md text-sm leading-7 text-smoke">{event.description}</p>
              <div className="mt-10 h-px bg-gradient-to-r from-cyan-300/60 via-fuchsia-400/20 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
