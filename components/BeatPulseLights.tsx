const pulseBars = Array.from({ length: 9 });

type BeatPulseLightsProps = {
  className?: string;
};

export function BeatPulseLights({ className = "" }: BeatPulseLightsProps) {
  return (
    <div className={`pointer-events-none flex items-end gap-2 ${className}`} aria-hidden="true">
      {pulseBars.map((_, index) => (
        <span
          key={index}
          data-beat-bar
          className="beat-bar"
          style={{ height: `${20 + (index % 4) * 14}px`, opacity: 0.45 + index * 0.04 }}
        />
      ))}
    </div>
  );
}
