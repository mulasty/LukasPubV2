import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

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
    <section id="kontakt" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-panel rounded-[2rem] p-7 sm:p-8">
            <SectionHeading
              eyebrow="Kontakt"
              title="W centrum nocnego rytmu Łomży"
              description="Tu znajdziesz szybki kontakt, adres i godziny otwarcia na wieczory z karaoke i tanecznym weekendem."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-300">Adres</p>
                <p className="mt-3 text-base font-semibold text-white">{addressLine1}</p>
                <p className="text-sm text-smoke">{addressLine2}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-300">Telefon</p>
                <a href={phoneHref} className="mt-3 block text-base font-semibold text-white hover:text-gold-300">
                  {phoneDisplay}
                </a>
                <p className="text-sm text-smoke">Kliknij, aby zadzwonić lub potwierdzić rezerwację.</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/8 bg-white/2 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-300">Godziny</p>
              <div className="mt-4 space-y-3">
                {schedule.map((item) => (
                  <div key={item.day} className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-sm text-white">{item.day}</span>
                    <span className="text-sm text-smoke">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <iframe
              title="Mapa dojazdu do Lukas Pub Dance Club"
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[420px] w-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
