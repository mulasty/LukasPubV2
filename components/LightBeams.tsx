const beams = [
  "left-[4%] top-[-10%] h-[150%] w-24 rotate-[16deg] bg-[linear-gradient(180deg,rgba(91,231,255,0.28),transparent_70%)]",
  "left-[22%] top-[-18%] h-[170%] w-20 rotate-[-14deg] bg-[linear-gradient(180deg,rgba(255,56,168,0.22),transparent_72%)]",
  "right-[18%] top-[-12%] h-[160%] w-24 rotate-[20deg] bg-[linear-gradient(180deg,rgba(144,103,255,0.22),transparent_76%)]",
  "right-[2%] top-[-16%] h-[180%] w-16 rotate-[-18deg] bg-[linear-gradient(180deg,rgba(91,231,255,0.2),transparent_74%)]"
];

type LightBeamsProps = {
  className?: string;
};

export function LightBeams({ className = "" }: LightBeamsProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {beams.map((beam, index) => (
        <span
          key={`${beam}-${index}`}
          data-beam
          data-parallax
          data-speed={String(index % 2 === 0 ? -0.12 : 0.16)}
          className={`absolute ${beam} opacity-70 blur-[2px]`}
        />
      ))}
    </div>
  );
}
