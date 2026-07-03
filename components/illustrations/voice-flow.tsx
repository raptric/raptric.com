// Illustrates a voice AI system: a call waveform processed by the AI,
// branching into self-service resolution or a specialist handoff.
export default function VoiceFlow({ className = "" }: { className?: string }) {
  const bars = [10, 22, 14, 30, 18, 26, 12, 20, 16, 24, 10];
  return (
    <svg
      viewBox="0 0 640 220"
      className={className}
      role="img"
      aria-label="Diagram of an inbound call waveform processed by AI, branching into self-service resolution or a specialist handoff"
    >
      <defs>
        <radialGradient id="vf-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal-400)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-signal-500)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={330} cy={110} r={70} fill="url(#vf-glow)" />

      {/* inbound call waveform */}
      <text x={70} y={70} className="label" fill="var(--color-mist-50)" fillOpacity={0.45}>Inbound call</text>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={20 + i * 12}
          y={110 - h / 2}
          width={5}
          height={h}
          rx={2}
          fill="var(--color-mist-50)"
          fillOpacity={0.4}
        />
      ))}

      <line x1={160} y1={110} x2={292} y2={110} stroke="var(--color-mist-50)" strokeOpacity={0.25} strokeWidth={1} />

      {/* AI node */}
      <circle cx={330} cy={110} r={34} fill="var(--color-ink-900)" stroke="var(--color-signal-400)" strokeWidth={1.25} />
      <circle cx={330} cy={110} r={8} fill="var(--color-signal-400)" />
      <text x={330} y={160} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.5}>Voice AI</text>

      {/* branch: resolved */}
      <path d="M364,110 C 420,110 420,66 470,66" fill="none" stroke="var(--color-signal-300)" strokeWidth={1.25} />
      <circle cx={480} cy={66} r={6} fill="var(--color-signal-300)" />
      <text x={494} y={70} className="label" fill="var(--color-mist-50)">Resolved</text>

      {/* branch: specialist */}
      <path d="M364,110 C 420,110 420,154 470,154" fill="none" stroke="var(--color-mist-50)" strokeOpacity={0.5} strokeWidth={1.25} />
      <circle cx={480} cy={154} r={6} fill="var(--color-mist-50)" fillOpacity={0.6} />
      <text x={494} y={158} className="label" fill="var(--color-mist-50)" fillOpacity={0.6}>Specialist</text>
    </svg>
  );
}
