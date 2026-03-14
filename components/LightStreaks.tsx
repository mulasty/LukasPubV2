const streaks = [
  { position: "left-[6%] top-[18%]", angle: "rotate-[18deg]", color: "from-cyan-300/35" },
  { position: "left-[38%] top-[8%]", angle: "rotate-[-12deg]", color: "from-fuchsia-400/30" },
  { position: "right-[18%] top-[16%]", angle: "rotate-[24deg]", color: "from-violet-400/30" }
];

type LightStreaksProps = {
  className?: string;
};

export function LightStreaks({ className = "" }: LightStreaksProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {streaks.map((streak, index) => (
        <span
          key={index}
          data-parallax
          data-speed={String(index % 2 === 0 ? -0.12 : 0.14)}
          className={`absolute ${streak.position} ${streak.angle} h-56 w-[2px] bg-gradient-to-b ${streak.color} to-transparent blur-[1px]`}
        />
      ))}
    </div>
  );
}
