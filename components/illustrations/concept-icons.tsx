function Base({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

// Why Raptric
export function BuildIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M14.5 6.5 L17.5 9.5 L9 18 L6 18 L6 15 Z" />
      <path d="M13 8 L16 11" />
    </Base>
  );
}

export function SystemsIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x={4} y={4} width={7} height={7} rx={1.5} />
      <rect x={13} y={4} width={7} height={7} rx={1.5} />
      <rect x={4} y={13} width={7} height={7} rx={1.5} />
      <rect x={13} y={13} width={7} height={7} rx={1.5} />
    </Base>
  );
}

export function AccountableIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M12 3 L19 6 V11 C19 16 16 19.5 12 21 C8 19.5 5 16 5 11 V6 Z" />
      <path d="M9 12 L11 14 L15.5 9" />
    </Base>
  );
}

// Problems We Solve
export function StopIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <circle cx={12} cy={12} r={8} />
      <path d="M8 8 L16 16" />
    </Base>
  );
}

export function TangleIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M4 6 Q12 6 12 12 Q12 18 20 18" />
      <path d="M4 18 Q12 18 12 12 Q12 6 20 6" />
    </Base>
  );
}

export function MismatchIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x={4} y={5} width={9} height={14} rx={1.5} />
      <path d="M17 8 L21 12 L17 16" />
      <path d="M15 12 L21 12" />
    </Base>
  );
}

export function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <circle cx={12} cy={12} r={8} />
      <path d="M12 7.5 V12 L15.5 14" />
    </Base>
  );
}

// Generic — service page covers / use cases
export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M5 12.5 L10 17 L19 7" />
    </Base>
  );
}

export function FlowIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <circle cx={5} cy={12} r={2} />
      <path d="M7 12 H13" />
      <rect x={13} y={8} width={6} height={8} rx={1.5} />
    </Base>
  );
}

// Customer Operations specializations
export function HeadsetIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M4 13 V12 a8 8 0 0 1 16 0 v1" />
      <rect x={3} y={13} width={4} height={6} rx={1.5} />
      <rect x={17} y={13} width={4} height={6} rx={1.5} />
      <path d="M19 19 v1 a2 2 0 0 1 -2 2 h-3" />
    </Base>
  );
}

export function TicketIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M4 8 a2 2 0 0 1 2 -2 h12 a2 2 0 0 1 2 2 a2 2 0 0 0 0 8 a2 2 0 0 1 -2 2 H6 a2 2 0 0 1 -2 -2 a2 2 0 0 0 0 -8 Z" />
      <path d="M14 6 V18" strokeDasharray="1.5 2.5" />
    </Base>
  );
}

export function OnboardIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M5 12 H16" />
      <path d="M12 7 L17 12 L12 17" />
      <path d="M5 5 V19" />
    </Base>
  );
}

export function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M4 6 a2 2 0 0 1 2 -2 h12 a2 2 0 0 1 2 2 v8 a2 2 0 0 1 -2 2 H11 l-4 4 v-4 H6 a2 2 0 0 1 -2 -2 Z" />
    </Base>
  );
}

// Business Operations specializations
export function CrmIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <ellipse cx={12} cy={6} rx={7} ry={2.5} />
      <path d="M5 6 V18 a7 2.5 0 0 0 14 0 V6" />
      <path d="M5 12 a7 2.5 0 0 0 14 0" />
    </Base>
  );
}

export function AppIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x={4} y={5} width={16} height={14} rx={2} />
      <path d="M4 9 H20" />
      <circle cx={7} cy={7} r={0.6} fill="currentColor" stroke="none" />
    </Base>
  );
}

export function QaIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x={5} y={4} width={12} height={16} rx={1.5} />
      <path d="M8 9 L9.5 10.5 L12.5 7.5" />
      <path d="M8 14.5 H14" />
    </Base>
  );
}

export function DevIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M9 8 L4.5 12 L9 16" />
      <path d="M15 8 L19.5 12 L15 16" />
    </Base>
  );
}

export function ReportIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M5 19 V9" />
      <path d="M11 19 V5" />
      <path d="M17 19 V13" />
      <path d="M4 19 H20" />
    </Base>
  );
}

// Industries
export function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x={6} y={3} width={12} height={18} rx={1} />
      <path d="M9 7 H10 M14 7 H15 M9 11 H10 M14 11 H15 M9 15 H10 M14 15 H15" />
    </Base>
  );
}

export function HealthIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M12 5 V19 M5 12 H19" />
      <circle cx={12} cy={12} r={9} />
    </Base>
  );
}

export function BriefcaseIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x={3} y={8} width={18} height={12} rx={2} />
      <path d="M8 8 V6 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 v2" />
    </Base>
  );
}

export function BagIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M6 8 H18 L17 20 H7 Z" />
      <path d="M9 8 V6 a3 3 0 0 1 6 0 V8" />
    </Base>
  );
}

// Solutions
export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="M4 7 L12 13 L20 7" />
    </Base>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M6 3 h4 l2 5 -2.5 1.5 a11 11 0 0 0 5 5 L16 12 l5 2 v4 a2 2 0 0 1 -2 2 A16 16 0 0 1 4 5 a2 2 0 0 1 2 -2 Z" />
    </Base>
  );
}
