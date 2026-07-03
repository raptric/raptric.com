// Illustrates a support escalation ladder: most volume resolves at Tier 1
// automation, with a defined handoff for whatever needs Tier 2 or a specialist.
export default function EscalationPath({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 260"
      className={className}
      role="img"
      aria-label="Diagram of a support escalation ladder: Tier 1 automation resolving most volume, with defined handoffs to Tier 2 and a specialist for what needs judgment"
    >
      <defs>
        <radialGradient id="ep-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal-400)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-signal-500)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={460} cy={90} r={90} fill="url(#ep-glow)" />

      {/* incoming request */}
      <circle cx={30} cy={205} r={7} fill="var(--color-mist-50)" fillOpacity={0.15} stroke="var(--color-mist-50)" strokeOpacity={0.4} />
      <text x={30} y={230} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.45}>Request</text>

      <line x1={37} y1={205} x2={100} y2={205} stroke="var(--color-mist-50)" strokeOpacity={0.25} strokeWidth={1} />

      {/* Tier 1 */}
      <rect x={100} y={187} width={130} height={36} rx={7} fill="var(--color-mist-50)" fillOpacity={0.06} stroke="var(--color-signal-400)" strokeOpacity={0.5} strokeWidth={1} />
      <text x={165} y={209} textAnchor="middle" className="label" fill="var(--color-mist-50)">Tier 1 — Automated</text>

      {/* Tier 1 resolved branch (most volume) */}
      <path d="M230,205 C 280,205 280,225 330,225" fill="none" stroke="var(--color-signal-300)" strokeWidth={1.5} />
      <circle cx={340} cy={225} r={5} fill="var(--color-signal-300)" />
      <text x={352} y={229} className="label" fill="var(--color-mist-50)" fillOpacity={0.7}>Resolved</text>

      {/* Tier 1 escalation to Tier 2 */}
      <path d="M230,192 C 260,150 260,145 290,145" fill="none" stroke="var(--color-mist-50)" strokeOpacity={0.3} strokeWidth={1} />

      {/* Tier 2 */}
      <rect x={290} y={127} width={130} height={36} rx={7} fill="var(--color-mist-50)" fillOpacity={0.06} stroke="var(--color-mist-50)" strokeOpacity={0.3} strokeWidth={1} />
      <text x={355} y={149} textAnchor="middle" className="label" fill="var(--color-mist-50)">Tier 2 — Technical</text>

      {/* Tier 2 resolved branch */}
      <path d="M420,145 C 450,145 450,165 480,165" fill="none" stroke="var(--color-signal-300)" strokeWidth={1.5} />
      <circle cx={490} cy={165} r={5} fill="var(--color-signal-300)" />
      <text x={502} y={169} className="label" fill="var(--color-mist-50)" fillOpacity={0.7}>Resolved</text>

      {/* Tier 2 escalation to specialist */}
      <path d="M420,132 C 450,90 450,85 480,85" fill="none" stroke="var(--color-mist-50)" strokeOpacity={0.3} strokeWidth={1} />

      {/* Specialist */}
      <circle cx={520} cy={85} r={30} fill="var(--color-ink-900)" stroke="var(--color-signal-400)" strokeWidth={1.25} />
      <circle cx={520} cy={85} r={7} fill="var(--color-signal-300)" />
      <text x={520} y={130} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.6}>Specialist — human judgment</text>

      <line x1={550} y1={85} x2={600} y2={85} stroke="var(--color-signal-300)" strokeWidth={1.5} />
      <circle cx={608} cy={85} r={6} fill="var(--color-signal-400)" />
    </svg>
  );
}
