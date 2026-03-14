type FogLayerProps = {
  className?: string;
};

export function FogLayer({ className = "" }: FogLayerProps) {
  return (
    <div
      data-fog
      data-parallax
      data-speed="-0.08"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_62%)] blur-3xl ${className}`}
      aria-hidden="true"
    />
  );
}
