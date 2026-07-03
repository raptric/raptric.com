// Orchestration diagram, styled for a dark glass panel: input feeding a
// cluster of automated steps, a glowing specialist checkpoint, and an output.
export default function WorkflowGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 220"
      className={className}
      role="img"
      aria-label="Diagram of an automation pipeline: input flowing through automated steps, a specialist checkpoint, and an output"
    >
      <defs>
        <radialGradient id="wf-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal-400)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-signal-500)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wf-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-signal-500)" />
          <stop offset="100%" stopColor="var(--color-signal-300)" />
        </linearGradient>
      </defs>

      <circle cx={350} cy={110} r={70} fill="url(#wf-glow)" />

      <line x1={30} y1={110} x2={110} y2={110} stroke="var(--color-mist-50)" strokeOpacity={0.25} strokeWidth={1} />
      <circle cx={20} cy={110} r={8} fill="var(--color-mist-50)" fillOpacity={0.15} stroke="var(--color-mist-50)" strokeOpacity={0.4} />
      <text x={20} y={140} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.45}>Input</text>

      {[
        [150, 60],
        [150, 110],
        [150, 160],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1={110} y1={110} x2={x} y2={y} stroke="var(--color-mist-50)" strokeOpacity={0.2} strokeWidth={1} />
          <rect x={x} y={y - 16} width={60} height={32} rx={6} fill="var(--color-mist-50)" fillOpacity={0.05} stroke="var(--color-mist-50)" strokeOpacity={0.15} strokeWidth={1} />
          <line x1={x + 10} y1={y} x2={x + 50} y2={y} stroke="var(--color-signal-300)" strokeWidth={1.5} />
        </g>
      ))}

      <line x1={210} y1={60} x2={330} y2={110} stroke="var(--color-mist-50)" strokeOpacity={0.2} strokeWidth={1} />
      <line x1={210} y1={110} x2={330} y2={110} stroke="var(--color-mist-50)" strokeOpacity={0.2} strokeWidth={1} />
      <line x1={210} y1={160} x2={330} y2={110} stroke="var(--color-mist-50)" strokeOpacity={0.2} strokeWidth={1} />

      {/* specialist checkpoint */}
      <circle cx={350} cy={110} r={22} fill="var(--color-ink-900)" stroke="var(--color-signal-400)" strokeWidth={1} />
      <circle cx={350} cy={110} r={6} fill="var(--color-signal-300)" />
      <text x={350} y={148} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.45}>Specialist check</text>

      <line x1={372} y1={110} x2={460} y2={110} stroke="url(#wf-line)" strokeWidth={1.5} />
      <rect x={460} y={88} width={94} height={44} rx={8} fill="var(--color-mist-50)" fillOpacity={0.06} stroke="var(--color-mist-50)" strokeOpacity={0.2} />
      <text x={507} y={114} textAnchor="middle" className="label" fill="var(--color-mist-50)">Outcome</text>

      <line x1={554} y1={110} x2={608} y2={110} stroke="var(--color-mist-50)" strokeOpacity={0.25} strokeWidth={1} />
      <circle cx={616} cy={110} r={6} fill="var(--color-signal-400)" />
    </svg>
  );
}
