import { AnimatedText } from "@/components/AnimatedText";
import { StorySection } from "@/components/StorySection";

type ReservationSectionProps = {
  phoneDisplay: string;
  phoneHref: string;
  text: string;
};

export function ReservationSection({ phoneDisplay, phoneHref, text }: ReservationSectionProps) {
  return (
    <StorySection id="rezerwacja">
      <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-7 sm:p-10" data-reveal>
        <div data-parallax data-speed="-0.16" className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-ruby-500/20 blur-3xl" />
        <div data-parallax data-speed="0.18" className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-gold-400/16 blur-3xl" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-kicker">Reservation CTA</p>
            <AnimatedText
              as="h2"
              text="Jedno połączenie i wieczór jest ustawiony"
              className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl"
            />
            <p className="mt-6 max-w-2xl text-sm leading-7 text-smoke sm:text-base">{text}</p>
          </div>

          <div className="grid gap-3 lg:min-w-[18rem]">
            <a href={phoneHref} className="cta-primary">
              Zadzwoń: {phoneDisplay}
            </a>
            <a href="#kontakt" className="cta-secondary">
              Sprawdź kontakt
            </a>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
