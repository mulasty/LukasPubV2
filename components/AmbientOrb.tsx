type AmbientOrbProps = {
  className?: string;
  speed?: number;
};

export function AmbientOrb({ className = "", speed = 0.18 }: AmbientOrbProps) {
  return <div data-parallax data-speed={String(speed)} className={`absolute rounded-full blur-3xl ${className}`} aria-hidden="true" />;
}
