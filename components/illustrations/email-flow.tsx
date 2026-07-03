// Illustrates eOS: a contact profile feeding a personalization engine,
// branching into a sequenced set of touches, converging on a booked meeting.
export default function EmailFlow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 220"
      className={className}
      role="img"
      aria-label="Diagram of a contact profile feeding a personalization engine that sequences outreach toward a booked meeting"
    >
      <defs>
        <radialGradient id="ef-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal-400)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-signal-500)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={210} cy={110} r={64} fill="url(#ef-glow)" />

      {/* profile node */}
      <rect x={20} y={82} width={70} height={56} rx={8} fill="var(--color-mist-50)" fillOpacity={0.06} stroke="var(--color-mist-50)" strokeOpacity={0.2} />
      <circle cx={55} cy={102} r={8} fill="none" stroke="var(--color-mist-50)" strokeOpacity={0.5} strokeWidth={1.5} />
      <path d="M42,124 Q55,110 68,124" fill="none" stroke="var(--color-mist-50)" strokeOpacity={0.5} strokeWidth={1.5} />
      <text x={55} y={152} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.45}>Profile</text>

      <line x1={90} y1={110} x2={172} y2={110} stroke="var(--color-mist-50)" strokeOpacity={0.25} strokeWidth={1} />

      {/* personalization engine */}
      <circle cx={210} cy={110} r={30} fill="var(--color-ink-900)" stroke="var(--color-signal-400)" strokeWidth={1.25} />
      <circle cx={210} cy={110} r={7} fill="var(--color-signal-400)" />
      <text x={210} y={155} textAnchor="middle" className="label" fill="var(--color-mist-50)" fillOpacity={0.45}>Personalize</text>

      {/* sequenced touches */}
      {[60, 110, 160].map((y, i) => (
        <g key={i}>
          <line x1={240} y1={110} x2={330} y2={y} stroke="var(--color-mist-50)" strokeOpacity={0.2} strokeWidth={1} />
          <rect x={330} y={y - 14} width={54} height={28} rx={6} fill="var(--color-mist-50)" fillOpacity={0.05} stroke="var(--color-mist-50)" strokeOpacity={0.18} />
          <path d={`M336,${y - 6} L357,${y + 4} L378,${y - 6}`} fill="none" stroke="var(--color-signal-300)" strokeWidth={1.25} />
        </g>
      ))}

      {[60, 110, 160].map((y, i) => (
        <line key={i} x1={384} y1={y} x2={470} y2={110} stroke="var(--color-mist-50)" strokeOpacity={0.2} strokeWidth={1} />
      ))}

      {/* meeting booked */}
      <line x1={470} y1={110} x2={556} y2={110} stroke="var(--color-signal-400)" strokeWidth={1.5} />
      <rect x={556} y={86} width={64} height={48} rx={8} fill="var(--color-ink-900)" stroke="var(--color-signal-400)" strokeWidth={1} />
      <path d="M568,104 h40 M568,114 h28 M568,124 h20" stroke="var(--color-mist-50)" strokeOpacity={0.5} strokeWidth={1.25} />
      <circle cx={608} cy={96} r={3} fill="var(--color-signal-400)" />
      <text x={588} y={148} textAnchor="middle" className="label" fill="var(--color-mist-50)">Meeting</text>
    </svg>
  );
}
