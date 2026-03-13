import Image from "next/image";
import { Container } from "@/components/Container";

type HeroSectionProps = {
  name: string;
  slogan: string;
  description: string;
  phoneHref: string;
};

export function HeroSection({ name, slogan, description, phoneHref }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden pt-6 sm:pt-8">
      <div className="absolute inset-0 -z-20 bg-noise-overlay" />
      <div className="absolute inset-0 -z-10 opacity-70">
        <Image
          src="/images/hero.png"
          alt="Wnętrze Lukas Pub Dance Club"
          fill
          priority
          className="hero-image object-cover object-center"
        />
      </div>

      <Container className="pb-20 pt-8 sm:pb-28 sm:pt-16">
        <div className="hero-grid gold-outline relative overflow-hidden rounded-[2rem] border border-white/10 px-5 py-6 shadow-glow sm:px-8 sm:py-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-12 lg:py-12">
          <div className="float-in max-w-2xl">
            <span className="inline-flex rounded-full border border-gold-400/35 bg-night-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold-300">
              Pub • Dance • Karaoke • Łomża
            </span>
            <h1 className="mt-6 font-display text-6xl uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              {name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/90 sm:text-xl">{slogan}</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-smoke sm:text-base">{description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#rezerwacja"
                className="rounded-full bg-gold-400 px-6 py-4 text-center text-sm font-semibold text-night-950 transition hover:bg-gold-300"
              >
                Zarezerwuj stolik
              </a>
              <a
                href={phoneHref}
                className="rounded-full border border-gold-400/35 bg-night-900/65 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-gold-300 hover:text-gold-300"
              >
                Zadzwoń
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:mt-0">
            <div className="section-panel rounded-[1.75rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-300">Rytm tygodnia</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <p className="text-base font-semibold text-white">Czwartek</p>
                    <p className="text-sm text-smoke">Karaoke Night</p>
                  </div>
                  <span className="text-sm font-medium text-gold-300">18:00-23:00</span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <p className="text-base font-semibold text-white">Piątek</p>
                    <p className="text-sm text-smoke">Dance Party</p>
                  </div>
                  <span className="text-sm font-medium text-gold-300">18:00-01:00</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-white">Sobota</p>
                    <p className="text-sm text-smoke">Club Night</p>
                  </div>
                  <span className="text-sm font-medium text-gold-300">18:00-03:00</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="section-panel rounded-[1.75rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-300">Adres</p>
                <p className="mt-3 text-base font-semibold text-white">Al. Legionów 60B</p>
                <p className="text-sm text-smoke">18-400 Łomża</p>
              </div>
              <div className="section-panel rounded-[1.75rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-300">Rezerwacje</p>
                <a href={phoneHref} className="mt-3 block text-base font-semibold text-white hover:text-gold-300">
                  694 760 743
                </a>
                <p className="text-sm text-smoke">Kliknij i zadzwoń prosto z telefonu.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
