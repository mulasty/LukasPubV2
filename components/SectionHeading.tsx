type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`mb-8 flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-300">{eyebrow}</span>
      <h2 className="font-display text-4xl uppercase leading-none text-white sm:text-5xl">{title}</h2>
      {description ? <p className="text-sm leading-7 text-smoke sm:text-base">{description}</p> : null}
    </div>
  );
}
