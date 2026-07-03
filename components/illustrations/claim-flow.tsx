// Illustrates healthcare/RCM automation: claim intake processed by agentic
// AI (voice + text), branching into auto-adjudication or specialist review.
export default function ClaimFlow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 220"
      className={className}
      role="img"
      aria-label="Diagram of claim intake processed by agentic AI, branching into automatic adjudication or specialist review"
    >
      <defs>
        <radialGradient id="cf-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal-400)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-signal-500)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={310} cy={110} r={70} fill="url(#cf-glow)" />

      {/* claim document intake */}
      <rect x={30} y={78} width={58} height={70} rx={6} fill="var(--color-mist-50)" fillOpacity={0.06} stroke="var(--color-mist-50)" strokeOpacity={0.2} />
      <path d="M42,96 h34 M42,108 h34 M42,120 h22" stroke="var(--color-mist-50)" strokeOpacity={0.45} strokeWidth={1.25} />
      <text x={59} y={164} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.45}>Claim</text>

      <line x1={88} y1={110} x2={272} y2={110} stroke="var(--color-mist-50)" strokeOpacity={0.25} strokeWidth={1} />

      {/* agentic AI node */}
      <circle cx={310} cy={110} r={36} fill="var(--color-ink-900)" stroke="var(--color-signal-400)" strokeWidth={1.25} />
      <circle cx={298} cy={100} r={4} fill="var(--color-signal-300)" />
      <circle cx={322} cy={100} r={4} fill="var(--color-signal-300)" />
      <circle cx={310} cy={122} r={5} fill="var(--color-signal-400)" />
      <path d="M298,100 L310,122 L322,100" fill="none" stroke="var(--color-signal-300)" strokeWidth={1} />
      <text x={310} y={162} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.5}>Agentic AI</text>

      {/* branch: auto-adjudicated */}
      <path d="M346,110 C 400,110 400,66 450,66" fill="none" stroke="var(--color-signal-300)" strokeWidth={1.25} />
      <circle cx={460} cy={66} r={6} fill="var(--color-signal-300)" />
      <text x={474} y={70} className="label" fill="var(--color-mist-50)">Adjudicated</text>

      {/* branch: specialist review */}
      <path d="M346,110 C 400,110 400,154 450,154" fill="none" stroke="var(--color-mist-50)" strokeOpacity={0.5} strokeWidth={1.25} />
      <circle cx={460} cy={154} r={6} fill="var(--color-mist-50)" fillOpacity={0.6} />
      <text x={474} y={158} className="label" fill="var(--color-mist-50)" fillOpacity={0.6}>Specialist review</text>
    </svg>
  );
}
