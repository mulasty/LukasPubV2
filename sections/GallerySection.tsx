import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type GalleryItem = {
  src: string;
  alt: string;
  highlight?: boolean;
};

type GallerySectionProps = {
  items: GalleryItem[];
};

export function GallerySection({ items }: GallerySectionProps) {
  return (
    <section id="galeria" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title="Kilka kadrów z klimatu miejsca"
          description="Siatka działa mobilnie od pierwszego ekranu i ładuje obrazy leniwie poza pierwszym widokiem."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className={`relative overflow-hidden rounded-[1.75rem] ${item.highlight ? "col-span-2 row-span-2 min-h-[360px]" : "min-h-[180px] sm:min-h-[240px]"}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.highlight ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                className="object-cover transition duration-700 hover:scale-105"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-night-950/10 to-transparent" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
