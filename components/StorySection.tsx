import { PropsWithChildren } from "react";
import { Container } from "@/components/Container";

type StorySectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
  sceneClassName?: string;
}>;

export function StorySection({
  id,
  className = "",
  containerClassName = "",
  sceneClassName = "",
  children
}: StorySectionProps) {
  return (
    <section id={id} data-scene className={`story-section relative py-20 sm:py-28 ${className}`}>
      <Container className={containerClassName}>
        <div className={`relative ${sceneClassName}`}>{children}</div>
      </Container>
    </section>
  );
}
