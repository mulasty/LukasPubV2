import Image from "next/image";
import { AnimatedText } from "@/components/AnimatedText";
import { StorySection } from "@/components/StorySection";

type EventSummary = {
  day: string;
  title: string;
  time: string;
  description: string;
};

type MenuSection = {
  category: string;
  items: {
    name: string;
    price?: string;
  }[];
};

type WeekendPartySectionProps = {
  events: EventSummary[];
  menuSections: MenuSection[];
};

export function WeekendPartySection({ events, menuSections }: WeekendPartySectionProps) {
  return (
    <StorySection sceneClassName="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
      <div className="relative order-2 lg:order-1" data-reveal>
        <p className="section-kicker">Weekend party sequence</p>
        <AnimatedText
          as="h2"
          text="Piątek i sobota grają mocniej"
          className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl"
        />
        <p className="mt-6 max-w-xl text-sm leading-7 text-smoke sm:text-base">
          Weekendowa część strony prowadzi przez dwa różne nastroje: piątek jako wejście w tempo i sobotę jako najmocniejszy punkt tygodnia. Do tego podgląd baru bez odrywania od scroll story.
        </p>

        <div className="mt-8 grid gap-4">
          {events.map((event) => (
            <article key={event.day} data-card className="glass-card rounded-[2rem] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-gold-300/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
                  {event.day}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">{event.time}</span>
              </div>
              <h3 className="mt-4 font-display text-4xl uppercase text-white">{event.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-smoke">{event.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative order-1 min-h-[560px] lg:order-2" data-reveal>
        <div data-parallax data-speed="-0.14" className="absolute left-[5%] top-[8%] h-48 w-48 rounded-full bg-ruby-500/18 blur-3xl" />
        <div className="absolute right-[2%] top-0 h-[58%] w-[86%] overflow-hidden rounded-[2.2rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <Image src="/images/weekend-party.jpg" alt="Weekend party w klubie" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-transparent" />
        </div>
        <div
          data-parallax
          data-speed="0.18"
          className="absolute bottom-[2%] left-0 w-[78%] overflow-hidden rounded-[2rem] border border-white/10 bg-night-950/75 p-6 backdrop-blur"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold-300">Bar preview</p>
            <span className="text-xs uppercase tracking-[0.22em] text-white/55">Data-driven</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {menuSections.slice(0, 2).map((section) => (
              <div key={section.category} className="rounded-[1.5rem] border border-white/8 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">{section.category}</p>
                <div className="mt-4 space-y-3">
                  {section.items.slice(0, 3).map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-3 text-sm">
                      <span className="text-white/84">{item.name}</span>
                      <span className="text-gold-300">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StorySection>
  );
}
