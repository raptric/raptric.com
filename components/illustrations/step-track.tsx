// Decorative progress track for a numbered step sequence.
export default function StepTrack({
  steps,
  className = "",
}: {
  steps: number;
  className?: string;
}) {
  const width = 640;
  const y = 20;
  const positions = Array.from({ length: steps }, (_, i) =>
    steps === 1 ? width / 2 : (i / (steps - 1)) * (width - 40) + 20
  );

  return (
    <svg viewBox={`0 0 ${width} 40`} className={className} preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="track-fill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-signal-300)" />
          <stop offset="100%" stopColor="var(--color-signal-600)" />
        </linearGradient>
      </defs>
      <line x1={20} y1={y} x2={width - 20} y2={y} stroke="var(--color-ink-200)" strokeWidth={2} />
      <line x1={20} y1={y} x2={width - 20} y2={y} stroke="url(#track-fill)" strokeWidth={2} strokeOpacity={0.7} />
      {positions.map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === positions.length - 1 ? 7 : 5}
          fill={i === positions.length - 1 ? "var(--color-signal-500)" : "var(--color-mist-50)"}
          stroke="var(--color-signal-500)"
          strokeWidth={1.5}
        />
      ))}
    </svg>
  );
}
