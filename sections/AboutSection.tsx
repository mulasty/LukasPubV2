import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type AboutSectionProps = {
  description: string;
  highlights: string[];
};

export function AboutSection({ description, highlights }: AboutSectionProps) {
  return (
    <section id="o-klubie" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="section-panel rounded-[2rem] p-7 sm:p-8">
            <SectionHeading
              eyebrow="Atmosfera"
              title="Wieczór zaczyna się spokojnie, kończy na parkiecie"
              description={description}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="section-panel rounded-[1.75rem] p-6">
                <p className="text-sm leading-7 text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
