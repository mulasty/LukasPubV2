import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type EventItem = {
  day: string;
  title: string;
  time: string;
  description: string;
  accent: string;
};

type WeeklyEventsSectionProps = {
  events: EventItem[];
};

export function WeeklyEventsSection({ events }: WeeklyEventsSectionProps) {
  return (
    <section id="wydarzenia" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Tydzień w klubie"
          title="Każdy wieczór ma swój klimat"
          description="Sekcja zaprojektowana tak, żeby użytkownik po wejściu z Facebooka lub Instagrama od razu wiedział, kiedy przyjść i czego się spodziewać."
          align="center"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.day} className="section-panel rounded-[2rem] p-6 sm:p-7">
              <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
                {event.day}
              </span>
              <h3 className="mt-5 font-display text-4xl uppercase text-white">{event.title}</h3>
              <p className={`mt-2 text-sm font-semibold uppercase tracking-[0.22em] ${event.accent}`}>{event.time}</p>
              <p className="mt-5 text-sm leading-7 text-smoke">{event.description}</p>
              <a href="#rezerwacja" className="mt-6 inline-flex text-sm font-semibold text-gold-300 hover:text-gold-400">
                Rezerwacja i wejście
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
