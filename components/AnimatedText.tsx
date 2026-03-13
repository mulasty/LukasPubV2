import { ElementType, ReactNode } from "react";

type AnimatedTextProps<T extends ElementType> = {
  as?: T;
  text: string;
  className?: string;
  mode?: "words" | "chars";
};

function splitContent(text: string, mode: "words" | "chars"): ReactNode[] {
  if (mode === "chars") {
    return text.split("").map((char, index) => (
      <span
        key={`${char}-${index}`}
        data-word
        className="inline-block will-change-transform"
        aria-hidden="true"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }

  return text.split(" ").map((word, index, list) => (
    <span key={`${word}-${index}`} className="inline-block overflow-hidden align-top">
      <span data-word className="inline-block will-change-transform">
        {word}
        {index < list.length - 1 ? "\u00A0" : ""}
      </span>
    </span>
  ));
}

export function AnimatedText<T extends ElementType = "h2">({
  as,
  text,
  className = "",
  mode = "words"
}: AnimatedTextProps<T>) {
  const Component = (as || "h2") as ElementType;

  return (
    <Component className={className} data-split={mode} aria-label={text}>
      {splitContent(text, mode)}
    </Component>
  );
}
