import { StorySection } from "@/components/StorySection";
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
  const pendingLinks = links.filter((link) => link.status !== "active");

  return (
    <StorySection id="social" className="pt-0">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div data-reveal className="glass-card rounded-[2rem] p-6">
          <p className="section-kicker">Social flow</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82">
            Strona jest przygotowana do ruchu z Facebooka i Instagrama: szybkie skanowanie programu, mocny CTA do rezerwacji i jedno miejsce z kontaktem.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {activeLinks.map((link) => (
              <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="cta-secondary">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {pendingLinks.length > 0 ? (
          <div data-reveal>
            <TodoBlock
              title="TODO / Social"
              items={pendingLinks.map((link) => `${link.platform}: dodać potwierdzony oficjalny profil.`)}
            />
          </div>
        ) : null}
      </div>
    </StorySection>
  );
}
