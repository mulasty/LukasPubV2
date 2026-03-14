import { AnimatedText } from "@/components/AnimatedText";
import { StorySection } from "@/components/StorySection";
import { TodoBlock } from "@/components/TodoBlock";

type EventItem = {
  day: string;
  title: string;
  time: string;
};

type UpcomingEventsSectionProps = {
  events: EventItem[];
};

export function UpcomingEventsSection({ events }: UpcomingEventsSectionProps) {
  return (
    <StorySection sceneClassName="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
      <div data-reveal>
        <p className="section-kicker">Upcoming events</p>
        <AnimatedText
          as="h2"
          text="Najbliższy rytm jest stały, a specjalne daty czekają na potwierdzenie"
          className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl"
        />
        <p className="mt-6 max-w-xl text-sm leading-7 text-smoke sm:text-base">
          Strona ma przygotowane miejsce pod cykliczne zapowiedzi i specjalne wydarzenia, ale bez potwierdzonych dat nie pokazuje wymyślonych informacji.
        </p>
      </div>

      <div className="grid gap-4" data-reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {events.map((event) => (
            <div key={event.day} data-card className="glass-card poster-card rounded-[1.75rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">{event.day}</p>
              <p className="mt-4 font-display text-3xl uppercase text-white">{event.title}</p>
              <p className="mt-3 text-sm text-white/72">{event.time}</p>
            </div>
          ))}
        </div>
        <TodoBlock
          title="TODO / Upcoming"
          items={[
            "Dodać najbliższe datowane wydarzenia specjalne po potwierdzeniu przez klienta.",
            "Uzupełnić grafiki promocyjne i startDate dla event schema."
          ]}
        />
      </div>
    </StorySection>
  );
}
