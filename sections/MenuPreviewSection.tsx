import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TodoBlock } from "@/components/TodoBlock";

type MenuItem = {
  name: string;
  price?: string;
  note?: string;
};

type MenuSection = {
  category: string;
  items: MenuItem[];
};

type MenuPreviewSectionProps = {
  sections: MenuSection[];
  hasFullMenuAsset: boolean;
};

export function MenuPreviewSection({ sections, hasFullMenuAsset }: MenuPreviewSectionProps) {
  return (
    <section id="menu" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/35 to-transparent" />
            <Image
              src="/images/cocktails.jpg"
              alt="Kolorowe drinki w Lukas Pub Dance Club"
              width={900}
              height={1200}
              className="h-full min-h-[360px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-300">Drinki i przekąski</span>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/85">
                Krótki podgląd oferty na wieczór. Wybrane pozycje pochodzą z danych dostępnych w repo i można je łatwo edytować w JSON-ach.
              </p>
            </div>
          </div>

          <div className="section-panel rounded-[2rem] p-7 sm:p-8">
            <SectionHeading
              eyebrow="Menu Preview"
              title="Kilka mocnych punktów baru"
              description="Bez przeładowania. Wystarczająco dużo, żeby zachęcić do wejścia lub rezerwacji."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {sections.map((section) => (
                <div key={section.category} className="rounded-[1.5rem] border border-white/8 bg-white/2 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">{section.category}</h3>
                  <div className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <div key={item.name} className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">{item.name}</p>
                          {item.note ? <p className="text-xs leading-5 text-smoke">{item.note}</p> : null}
                        </div>
                        {item.price ? <span className="text-sm text-gold-300">{item.price}</span> : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {!hasFullMenuAsset ? (
              <div className="mt-6">
                <TodoBlock
                  title="TODO / Menu"
                  items={[
                    "Dodać pełne menu w formie PDF lub dedykowanej podstrony.",
                    "Dostarczyć aktualne zdjęcia karty i potwierdzić sezonowe pozycje."
                  ]}
                />
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
