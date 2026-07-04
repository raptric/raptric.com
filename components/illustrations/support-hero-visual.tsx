export default function SupportHeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 420"
      className={className}
      role="img"
      aria-label="Diagram of a support operations system with AI intake, human review, technical escalation, and resolved outcomes"
    >
      <defs>
        <radialGradient id="sup-glow-main" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal-400)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-signal-500)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sup-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-signal-500)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-signal-300)" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect x="18" y="18" width="724" height="384" rx="28" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />

      <circle cx="318" cy="142" r="86" fill="url(#sup-glow-main)" />
      <circle cx="598" cy="274" r="96" fill="url(#sup-glow-main)" opacity="0.75" />

      <rect x="56" y="58" width="150" height="82" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
      <text x="78" y="86" fill="var(--color-mist-50)" fillOpacity="0.55" fontSize="12" className="font-mono">
        INTAKE
      </text>
      <text x="78" y="115" fill="var(--color-mist-50)" fontSize="22" fontWeight="600">
        Email, chat,
      </text>
      <text x="78" y="139" fill="var(--color-mist-50)" fontSize="22" fontWeight="600">
        voice, tickets
      </text>

      <line x1="206" y1="100" x2="278" y2="100" stroke="url(#sup-line)" strokeWidth="1.5" />
      <line x1="206" y1="100" x2="278" y2="176" stroke="url(#sup-line)" strokeWidth="1.2" strokeOpacity="0.55" />

      <rect x="278" y="76" width="146" height="48" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.13)" />
      <text x="304" y="105" fill="var(--color-mist-50)" fillOpacity="0.72" fontSize="13" className="font-mono">
        AI TRIAGE
      </text>

      <rect x="278" y="152" width="146" height="48" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.13)" />
      <text x="304" y="181" fill="var(--color-mist-50)" fillOpacity="0.72" fontSize="13" className="font-mono">
        HITL REVIEW
      </text>

      <line x1="424" y1="100" x2="512" y2="100" stroke="url(#sup-line)" strokeWidth="1.5" />
      <line x1="424" y1="176" x2="512" y2="176" stroke="url(#sup-line)" strokeWidth="1.4" />
      <line x1="424" y1="176" x2="512" y2="252" stroke="url(#sup-line)" strokeWidth="1.2" strokeDasharray="4 5" />

      <rect x="512" y="76" width="170" height="48" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.13)" />
      <text x="536" y="105" fill="var(--color-mist-50)" fillOpacity="0.72" fontSize="13" className="font-mono">
        CUSTOMER CARE
      </text>

      <rect x="512" y="152" width="170" height="48" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.13)" />
      <text x="536" y="181" fill="var(--color-mist-50)" fillOpacity="0.72" fontSize="13" className="font-mono">
        TECH SUPPORT
      </text>

      <rect x="512" y="228" width="170" height="48" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.13)" />
      <text x="536" y="257" fill="var(--color-mist-50)" fillOpacity="0.72" fontSize="13" className="font-mono">
        SPECIALIST ESCALATION
      </text>

      <rect x="56" y="222" width="206" height="120" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
      <text x="78" y="250" fill="var(--color-mist-50)" fillOpacity="0.55" fontSize="12" className="font-mono">
        SUPPORT POSTURE
      </text>
      <text x="78" y="279" fill="var(--color-mist-50)" fontSize="20" fontWeight="600">
        automate the repeatable
      </text>
      <text x="78" y="303" fill="var(--color-mist-50)" fontSize="20" fontWeight="600">
        preserve the human judgment
      </text>
      <text x="78" y="330" fill="var(--color-mist-50)" fillOpacity="0.6" fontSize="13">
        faster response, cleaner routing,
      </text>
      <text x="78" y="349" fill="var(--color-mist-50)" fillOpacity="0.6" fontSize="13">
        trust preserved where complexity shows up
      </text>

      <rect x="300" y="308" width="382" height="44" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.13)" />
      <text x="324" y="335" fill="var(--color-mist-50)" fillOpacity="0.74" fontSize="13" className="font-mono">
        SHARED CONTEXT ACROSS PRODUCT, SUPPORT, AND OPERATIONS
      </text>
    </svg>
  );
}
