import { AnimatedText } from "@/components/AnimatedText";
import { StorySection } from "@/components/StorySection";

type ScheduleEntry = {
  day: string;
  hours: string;
};

type ContactSectionProps = {
  addressLine1: string;
  addressLine2: string;
  phoneDisplay: string;
  phoneHref: string;
  mapQuery: string;
  schedule: ScheduleEntry[];
};

export function ContactSection({
  addressLine1,
  addressLine2,
  phoneDisplay,
  phoneHref,
  mapQuery,
  schedule
}: ContactSectionProps) {
  return (
    <StorySection id="kontakt" sceneClassName="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div data-reveal>
        <p className="section-kicker">Kontakt</p>
        <AnimatedText
          as="h2"
          text="Wszystko w jednym miejscu: adres, godziny i szybki telefon"
          className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl"
        />

        <div className="mt-8 grid gap-4">
          <div className="glass-card rounded-[1.85rem] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200">Adres</p>
            <p className="mt-4 text-lg font-semibold text-white">{addressLine1}</p>
            <p className="text-sm text-white/72">{addressLine2}</p>
          </div>
          <div className="glass-card rounded-[1.85rem] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-fuchsia-300">Telefon</p>
            <a href={phoneHref} className="mt-4 inline-flex text-lg font-semibold text-white hover:text-cyan-200">
              {phoneDisplay}
            </a>
          </div>
          <div className="glass-card rounded-[1.85rem] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-violet-300">Godziny</p>
            <div className="mt-4 space-y-3">
              {schedule.map((item) => (
                <div key={item.day} className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 last:border-b-0 last:pb-0">
                  <span className="text-sm text-white">{item.day}</span>
                  <span className="text-sm text-white/68">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2.25rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]" data-reveal>
        <iframe
          title="Mapa dojazdu do Lukas Pub Dance Club"
          src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-[480px] w-full border-0"
        />
      </div>
    </StorySection>
  );
}
