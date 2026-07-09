export default function EngineeringHeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 420"
      className={className}
      role="img"
      aria-label="Diagram of an engineering delivery system with backlog, build lanes, QA, release, and observability signals"
    >
      <defs>
        <radialGradient id="eng-glow-main" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal-400)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--color-signal-500)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="eng-glow-soft" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal-300)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--color-signal-500)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="eng-panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.07)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
        <linearGradient id="eng-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-signal-500)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--color-signal-300)" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      <rect x="16" y="16" width="728" height="388" rx="28" fill="url(#eng-panel)" stroke="rgba(255,255,255,0.14)" />

      <circle cx="560" cy="108" r="84" fill="url(#eng-glow-soft)" />
      <circle cx="604" cy="310" r="96" fill="url(#eng-glow-main)" />

      <rect x="54" y="58" width="168" height="90" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
      <text x="76" y="86" fill="var(--color-mist-50)" fillOpacity="0.55" fontSize="12" className="font-mono">
        ROADMAP
      </text>
      <text x="76" y="118" fill="var(--color-mist-50)" fontSize="24" fontWeight="600">
        Backlog
      </text>
      <text x="76" y="142" fill="var(--color-mist-50)" fillOpacity="0.55" fontSize="13">
        scope, priorities, tradeoffs
      </text>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={280}
            y={78 + i * 70}
            width={126}
            height={42}
            rx={12}
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.14)"
          />
          <text
            x={303}
            y={104 + i * 70}
            fill="var(--color-mist-50)"
            fillOpacity="0.72"
            fontSize="13"
            className="font-mono"
          >
            {i === 0 ? "BUILD LANE" : i === 1 ? "QA LOOP" : "SUPPORT BRIDGE"}
          </text>
        </g>
      ))}

      <line x1="222" y1="103" x2="280" y2="99" stroke="url(#eng-line)" strokeWidth="1.4" />
      <line x1="222" y1="103" x2="280" y2="169" stroke="url(#eng-line)" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="222" y1="103" x2="280" y2="239" stroke="url(#eng-line)" strokeWidth="1.2" strokeOpacity="0.45" />

      <line x1="406" y1="99" x2="520" y2="99" stroke="url(#eng-line)" strokeWidth="1.4" />
      <line x1="406" y1="169" x2="520" y2="169" stroke="url(#eng-line)" strokeWidth="1.2" strokeDasharray="4 5" />
      <line x1="406" y1="239" x2="520" y2="239" stroke="url(#eng-line)" strokeWidth="1.2" strokeDasharray="4 5" />

      <rect x="520" y="66" width="168" height="66" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
      <text x="542" y="92" fill="var(--color-mist-50)" fillOpacity="0.55" fontSize="12" className="font-mono">
        RELEASE
      </text>
      <text x="542" y="117" fill="var(--color-mist-50)" fontSize="22" fontWeight="600">
        Visible Ship
      </text>

      <rect x="520" y="152" width="168" height="118" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
      <text x="542" y="180" fill="var(--color-mist-50)" fillOpacity="0.55" fontSize="12" className="font-mono">
        OBSERVABILITY
      </text>
      {[
        ["roadmap fit", 208],
        ["qa readiness", 238],
        ["release confidence", 268],
      ].map(([label, y]) => (
        <g key={label}>
          <circle cx="548" cy={Number(y) - 5} r="4" fill="var(--color-signal-400)" />
          <text x="562" y={Number(y)} fill="var(--color-mist-50)" fillOpacity="0.75" fontSize="13">
            {label}
          </text>
        </g>
      ))}

      <rect x="54" y="192" width="168" height="126" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
      <text x="76" y="220" fill="var(--color-mist-50)" fillOpacity="0.55" fontSize="12" className="font-mono">
        DELIVERY POSTURE
      </text>
      <text x="76" y="251" fill="var(--color-mist-50)" fontSize="18" fontWeight="600">
        Shared delivery view
      </text>
      <text x="76" y="277" fill="var(--color-mist-50)" fillOpacity="0.62" fontSize="13">
        product, engineering, QA,
      </text>
      <text x="76" y="297" fill="var(--color-mist-50)" fillOpacity="0.62" fontSize="13">
        and support aligned on one
      </text>
      <text x="76" y="317" fill="var(--color-mist-50)" fillOpacity="0.62" fontSize="13">
        picture before release risk lands.
      </text>

      <line x1="222" y1="255" x2="308" y2="255" stroke="url(#eng-line)" strokeWidth="1.4" />
      <circle cx="318" cy="255" r="12" fill="var(--color-ink-900)" stroke="var(--color-signal-400)" strokeWidth="1.3" />
      <circle cx="318" cy="255" r="4" fill="var(--color-signal-300)" />
      <line x1="330" y1="255" x2="520" y2="255" stroke="url(#eng-line)" strokeWidth="1.4" />

      <text x="340" y="328" fill="var(--color-mist-50)" fillOpacity="0.45" fontSize="12" className="font-mono">
        RELEASE QUALITY
      </text>
      <text x="340" y="352" fill="var(--color-mist-50)" fillOpacity="0.78" fontSize="20" fontWeight="600">
        engineering that ships with context
      </text>
    </svg>
  );
}
