// Premium "AI core" visual: a glowing center with orbiting nodes.
// Pure SVG + CSS, no imagery — the hero's centerpiece.
export default function OrbitalCore({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Abstract diagram of a glowing core with orbiting nodes, representing an AI-driven operating system"
    >
      <style>{`
        @keyframes orbit-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .orbit-ring { transform-origin: 200px 200px; animation: orbit-spin linear infinite; }
        .orbit-1 { animation-duration: 22s; }
        .orbit-2 { animation-duration: 34s; animation-direction: reverse; }
        .orbit-3 { animation-duration: 46s; }
        @media (prefers-reduced-motion: reduce) {
          .orbit-ring { animation: none; }
        }
      `}</style>

      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal-400)" stopOpacity="0.9" />
          <stop offset="55%" stopColor="var(--color-signal-500)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-signal-500)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="node-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-signal-300)" />
          <stop offset="100%" stopColor="var(--color-signal-500)" />
        </linearGradient>
      </defs>

      <circle cx={200} cy={200} r={150} fill="url(#core-glow)" />

      <ellipse cx={200} cy={200} rx={150} ry={60} fill="none" stroke="var(--color-mist-50)" strokeOpacity={0.12} strokeWidth={1} />
      <ellipse cx={200} cy={200} rx={110} ry={110} fill="none" stroke="var(--color-mist-50)" strokeOpacity={0.1} strokeWidth={1} />
      <ellipse cx={200} cy={200} rx={150} ry={60} fill="none" stroke="var(--color-mist-50)" strokeOpacity={0.08} strokeWidth={1} transform="rotate(60 200 200)" />

      <g className="orbit-ring orbit-1">
        <circle cx={350} cy={200} r={6} fill="url(#node-gradient)" />
      </g>
      <g className="orbit-ring orbit-2">
        <circle cx={200} cy={90} r={4.5} fill="var(--color-mist-50)" fillOpacity={0.85} />
      </g>
      <g className="orbit-ring orbit-3">
        <circle cx={340} cy={260} r={5} fill="var(--color-signal-300)" />
      </g>

      <circle cx={200} cy={200} r={34} fill="var(--color-ink-950)" stroke="var(--color-signal-400)" strokeWidth={1} />
      <circle cx={200} cy={200} r={10} fill="url(#node-gradient)" />
    </svg>
  );
}
