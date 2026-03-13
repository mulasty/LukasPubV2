const particleConfig = [
  { size: "h-2 w-2", top: "top-[12%]", left: "left-[8%]", speed: "-0.18" },
  { size: "h-3 w-3", top: "top-[20%]", left: "left-[78%]", speed: "0.22" },
  { size: "h-2.5 w-2.5", top: "top-[44%]", left: "left-[14%]", speed: "-0.12" },
  { size: "h-4 w-4", top: "top-[58%]", left: "left-[72%]", speed: "0.18" },
  { size: "h-2 w-2", top: "top-[70%]", left: "left-[48%]", speed: "-0.24" },
  { size: "h-2.5 w-2.5", top: "top-[82%]", left: "left-[22%]", speed: "0.16" }
];

type FloatingParticlesProps = {
  className?: string;
};

export function FloatingParticles({ className = "" }: FloatingParticlesProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particleConfig.map((particle, index) => (
        <span
          key={`${particle.top}-${particle.left}-${index}`}
          data-float
          data-parallax
          data-speed={particle.speed}
          className={`absolute ${particle.top} ${particle.left} ${particle.size} rounded-full bg-gold-300/60 blur-[1px]`}
        />
      ))}
    </div>
  );
}
