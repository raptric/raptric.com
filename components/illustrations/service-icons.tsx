function IconBase({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
    >
      {children}
    </svg>
  );
}

export function AiAutomationIcon({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx={24} cy={24} r={6} />
      <circle cx={24} cy={24} r={2} fill="var(--color-signal-500)" stroke="none" />
      <line x1={24} y1={8} x2={24} y2={16} />
      <line x1={24} y1={32} x2={24} y2={40} />
      <line x1={8} y1={24} x2={16} y2={24} />
      <line x1={32} y1={24} x2={40} y2={24} />
      <circle cx={24} cy={8} r={2.2} fill="var(--color-signal-400)" stroke="none" />
      <circle cx={8} cy={24} r={2.2} />
      <circle cx={40} cy={24} r={2.2} />
      <circle cx={24} cy={40} r={2.2} />
    </IconBase>
  );
}

export function SaasDevelopmentIcon({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x={10} y={12} width={26} height={20} rx={2.5} />
      <line x1={10} y1={18} x2={36} y2={18} />
      <circle cx={14.5} cy={15} r={0.9} fill="currentColor" stroke="none" />
      <circle cx={18} cy={15} r={0.9} fill="currentColor" stroke="none" />
      <line x1={15} y1={24} x2={28} y2={24} stroke="var(--color-signal-500)" />
      <line x1={15} y1={28} x2={24} y2={28} />
    </IconBase>
  );
}

export function CustomerOperationsIcon({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M10 16 a4 4 0 0 1 4 -4 h20 a4 4 0 0 1 4 4 v10 a4 4 0 0 1 -4 4 H20 l-6 6 v-6 h-0 a4 4 0 0 1 -4 -4 Z" />
      <circle cx={18} cy={21} r={1.3} fill="currentColor" stroke="none" />
      <circle cx={24} cy={21} r={1.3} fill="var(--color-signal-500)" stroke="none" />
      <circle cx={30} cy={21} r={1.3} fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function BusinessOperationsIcon({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x={7} y={20} width={9} height={9} rx={1.5} />
      <rect x={20} y={20} width={9} height={9} rx={1.5} />
      <rect x={33} y={13} width={9} height={9} rx={1.5} stroke="var(--color-signal-500)" />
      <line x1={16} y1={24.5} x2={20} y2={24.5} />
      <line x1={29} y1={22} x2={33} y2={18} />
    </IconBase>
  );
}

export function TechnologyAdvisoryIcon({ className = "" }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx={24} cy={24} r={14} />
      <path d="M29 18 L22 22 L19 30 L26 26 Z" fill="var(--color-signal-500)" stroke="none" />
      <line x1={24} y1={6} x2={24} y2={10} />
      <line x1={24} y1={38} x2={24} y2={42} />
    </IconBase>
  );
}
