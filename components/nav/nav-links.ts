export type NavItem = { label: string; href: string };

export const NAV_LINKS: NavItem[] = [
  { label: "AI Automation", href: "/ai-automation" },
  { label: "Engineering Team", href: "/engineering-team" },
  { label: "Support Operations", href: "/support-operations" },
  { label: "AI Support Framework", href: "/ai-support-operations" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_LINKS = [
  { label: "AI Automation", href: "/ai-automation" },
  { label: "Engineering Team", href: "/engineering-team" },
  { label: "Support Operations", href: "/support-operations" },
  { label: "AI Support Framework", href: "/ai-support-operations" },
  { label: "Solutions", href: "/solutions" },
] as const;

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Insights", href: "/insights" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
