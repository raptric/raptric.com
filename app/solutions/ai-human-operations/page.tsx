import ChildServicePage from "@/components/service/child-service-page";
import { AccountableIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI + Human Operations Solution",
  description:
    "The defined split between what's automated and what's staffed, designed as one operating model across AI Automation, Support Operations, and Engineering Team.",
  path: "/solutions/ai-human-operations",
});

export default function AiHumanOperationsSolution() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Solutions",
        title: "AI + Human Operations",
        intro:
          "The defined split between what's automated and what's staffed, designed as one operating model — not automation, support, and engineering bought as three disconnected vendors.",
        Icon: AccountableIcon,
        parentLabel: "Solutions",
        parentHref: "/solutions",
        path: "/solutions/ai-human-operations",
        serviceDescription:
          "An integrated operating model defining the automation-to-specialist split across AI Automation, Support Operations, and Engineering Team.",
        covers: [
          "A defined automation-and-specialist split across the whole operation",
          "Cross-functional handoff design between support, ops, and engineering",
          "One operating model instead of three disconnected vendors",
          "Ongoing review of where the automation line should sit",
        ],
        problems: [
          "Automation, support, and engineering bought as three disconnected vendors.",
          "No consistent philosophy for what's automated versus staffed.",
          "Teams that \"have AI\" and \"have support\" with nothing tying them together.",
          "Inconsistent judgment calls because there's no shared system.",
        ],
        howItWorks: [
          { title: "Assess the operation", body: "We look across support, engineering, and existing automation as one system." },
          { title: "Design the split", body: "We define what's automated, what's staffed, and where the line sits — consistently." },
          { title: "Operate & adjust", body: "The model gets reviewed and adjusted as the operation changes, not fixed once." },
        ],
        useCases: [
          "A single operating model spanning AI-handled support and human specialist escalation",
          "Consistent automation-versus-specialist logic applied across support and back office work",
          "One accountable structure instead of separate AI, support, and engineering vendors",
        ],
        faq: [
          { q: "Is this a starting point or something we add after other services?", a: "It can be either — some clients start here to design the model first, others build it after starting with a single pillar." },
          { q: "Does this replace the individual service pages?", a: "No — it's the connective layer across AI Automation, Support Operations, and Engineering Team, not a replacement for any one of them." },
          { q: "How is the automation-to-human line decided?", a: "Based on your actual operation — volume, risk, and where judgment genuinely matters — not a generic default." },
        ],
        related: [
          { label: "Human-in-the-Loop Support", href: "/support-operations/human-in-the-loop-support" },
          { label: "AI Customer Support", href: "/solutions/ai-customer-support" },
          { label: "Solutions overview", href: "/solutions" },
        ],
      }}
    />
  );
}
