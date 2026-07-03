export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV_LINKS: NavItem[] = [
  {
    label: "AI Automation",
    href: "/ai-automation",
    children: [
      { label: "AI Automation Services", href: "/ai-automation/ai-automation-services" },
      { label: "n8n Automation Agency", href: "/ai-automation/n8n-automation-agency" },
      { label: "Business Process Automation", href: "/ai-automation/business-process-automation" },
      { label: "AI Customer Support Services", href: "/ai-automation/ai-customer-support-services" },
      { label: "AI Call Center Solutions", href: "/ai-automation/ai-call-center-solutions" },
      { label: "CRM Automation Services", href: "/ai-automation/crm-automation-services" },
    ],
  },
  {
    label: "Support Operations",
    href: "/support-operations",
    children: [
      { label: "Customer Support Outsourcing", href: "/support-operations/customer-support-outsourcing" },
      { label: "Technical Support Outsourcing", href: "/support-operations/technical-support-outsourcing" },
      { label: "Call Center Outsourcing", href: "/support-operations/call-center-outsourcing-services" },
      { label: "Phone Answering Services", href: "/support-operations/phone-answering-services" },
      { label: "Chat Support Outsourcing", href: "/support-operations/chat-support-outsourcing" },
      { label: "Virtual Assistant Services", href: "/support-operations/virtual-assistant-services" },
      { label: "Human-in-the-Loop Support", href: "/support-operations/human-in-the-loop-support" },
    ],
  },
  {
    label: "Engineering Team",
    href: "/engineering-team",
    children: [
      { label: "Software Development Partner", href: "/engineering-team/software-development-partner" },
      { label: "SaaS Development Services", href: "/engineering-team/saas-development-services" },
      { label: "Staff Augmentation Services", href: "/engineering-team/staff-augmentation-services" },
      { label: "Dedicated Development Team", href: "/engineering-team/dedicated-development-team" },
      { label: "Support Engineering Team", href: "/engineering-team/support-engineering-team" },
      { label: "Custom Internal Tools Development", href: "/engineering-team/custom-internal-tools-development" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "AI Customer Support", href: "/solutions/ai-customer-support" },
      { label: "Technical Support Systems", href: "/solutions/technical-support-systems" },
      { label: "Back Office Operations", href: "/solutions/back-office-operations" },
      { label: "SaaS Product Delivery", href: "/solutions/saas-product-delivery" },
      { label: "Lead Management Automation", href: "/solutions/lead-management-automation" },
      { label: "AI + Human Operations", href: "/solutions/ai-human-operations" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_LINKS = [
  { label: "AI Automation", href: "/ai-automation" },
  { label: "Support Operations", href: "/support-operations" },
  { label: "Engineering Team", href: "/engineering-team" },
  { label: "Solutions", href: "/solutions" },
] as const;

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Insights", href: "/insights" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
