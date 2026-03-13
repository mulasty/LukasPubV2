import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type ReservationSectionProps = {
  phoneDisplay: string;
  phoneHref: string;
  text: string;
};

export function ReservationSection({ phoneDisplay, phoneHref, text }: ReservationSectionProps) {
  return (
    <section id="rezerwacja" className="py-20 sm:py-24">
      <Container>
        <div className="rounded-[2rem] border border-gold-400/20 bg-gradient-to-br from-ruby-600/30 via-night-900 to-night-950 p-7 shadow-glow sm:p-10">
          <SectionHeading
            eyebrow="Rezerwacja"
            title="Zadzwoń i zarezerwuj stolik na wieczór"
            description={text}
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={phoneHref}
              className="rounded-full bg-gold-400 px-6 py-4 text-center text-sm font-semibold text-night-950 transition hover:bg-gold-300"
            >
              Zadzwoń: {phoneDisplay}
            </a>
            <a
              href={phoneHref}
              className="rounded-full border border-gold-400/35 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-gold-300 hover:text-gold-300"
            >
              Rezerwacja telefoniczna
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
