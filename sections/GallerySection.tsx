import Image from "next/image";
import { AnimatedText } from "@/components/AnimatedText";
import { StorySection } from "@/components/StorySection";

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
    <StorySection id="galeria" className="overflow-hidden">
      <div data-reveal className="mb-8 max-w-2xl">
        <p className="section-kicker">Gallery reveal</p>
        <AnimatedText
          as="h2"
          text="Kadry, które pojawiają się w rytmie scrolla"
          className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl"
        />
      </div>

      <div data-gallery-rail className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            data-card
            data-glow
            className={`group poster-card neon-frame relative overflow-hidden rounded-[2rem] border border-white/10 ${
              item.highlight ? "sm:col-span-2 xl:row-span-2 min-h-[340px] xl:min-h-[560px]" : "min-h-[220px] xl:min-h-[270px]"
            }`}
          >
            <div data-parallax data-speed={item.highlight ? "-0.16" : "0.14"} className="absolute inset-0 scale-110 will-change-transform">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.highlight ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 1280px) 50vw, 25vw"}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,10,0.05),rgba(6,7,10,0.84))]" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-sm leading-7 text-white/78 opacity-0 transition duration-500 group-hover:opacity-100">
              {item.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </StorySection>
  );
}
