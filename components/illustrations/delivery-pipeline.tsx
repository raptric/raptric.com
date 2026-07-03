// Illustrates the engineering delivery pipeline: roadmap item moving through
// build and QA as a visible, reported stage, not a black box.
export default function DeliveryPipeline({ className = "" }: { className?: string }) {
  const stages = [
    { x: 60, label: "Roadmap" },
    { x: 230, label: "Build" },
    { x: 400, label: "QA" },
    { x: 570, label: "Shipped" },
  ];

  return (
    <svg
      viewBox="0 0 640 200"
      className={className}
      role="img"
      aria-label="Diagram of an engineering delivery pipeline moving from roadmap through build and QA to a shipped release"
    >
      <defs>
        <linearGradient id="dp-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-signal-500)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--color-signal-300)" />
        </linearGradient>
      </defs>

      <line x1={60} y1={100} x2={570} y2={100} stroke="url(#dp-line)" strokeWidth={1.5} />

      {stages.map((s, i) => (
        <g key={s.label}>
          <circle cx={s.x} cy={100} r={i === stages.length - 1 ? 9 : 26} fill={i === stages.length - 1 ? "var(--color-signal-400)" : "var(--color-ink-900)"} stroke="var(--color-signal-400)" strokeWidth={1.25} />
          {i > 0 && i < stages.length - 1 && (
            <text x={s.x} y={105} textAnchor="middle" className="font-mono" fill="var(--color-mist-50)" fontSize={11} fillOpacity={0.7}>
              {String(i).padStart(2, "0")}
            </text>
          )}
          <text x={s.x} y={140} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.55}>
            {s.label}
          </text>
        </g>
      ))}

      {/* QA loop-back to Build, showing iteration rather than a one-way line */}
      <path d="M400,74 C 340,40 290,40 235,74" fill="none" stroke="var(--color-mist-50)" strokeOpacity={0.25} strokeWidth={1} strokeDasharray="2 3" />
      <text x={317} y={35} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.4}>Iterate</text>
    </svg>
  );
}
