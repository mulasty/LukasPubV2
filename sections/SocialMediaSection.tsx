import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TodoBlock } from "@/components/TodoBlock";

type SocialLink = {
  platform: string;
  url: string;
  label: string;
  status: string;
};

type SocialMediaSectionProps = {
  links: SocialLink[];
};

export function SocialMediaSection({ links }: SocialMediaSectionProps) {
  const activeLinks = links.filter((link) => link.status === "active");
  const pendingLinks = links.filter((link) => link.status === "todo");

  return (
    <section id="social" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="section-panel rounded-[2rem] p-7 sm:p-8">
            <SectionHeading
              eyebrow="Social Media"
              title="Ruch z sociali ma trafiać prosto na wejście"
              description="Strona jest przygotowana pod wejścia z Facebooka i Instagrama: szybki skan wydarzeń, numer do rezerwacji i czytelny kontakt bez zbędnych kliknięć."
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {activeLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gold-400/35 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-gold-300 hover:text-gold-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {pendingLinks.length > 0 ? (
            <TodoBlock
              title="TODO / Social"
              items={pendingLinks.map((link) => `${link.platform}: dodać potwierdzony link do oficjalnego profilu.`)}
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
