import PackagedSolutionPage from "@/components/service/packaged-solution-page";
import ClaimFlow from "@/components/illustrations/claim-flow";
import { HealthIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Healthcare & RCM Operations — Packaged Voice & Agentic AI System",
  description:
    "A voice and agentic AI system for healthcare revenue cycle operations — automating claim intake and routine adjudication, with specialist review for anything that needs a person.",
  path: "/solutions/healthcare-rcm-operations",
});

export default function HealthcareRcmSolution() {
  return (
    <PackagedSolutionPage
      data={{
        name: "Healthcare & RCM Operations",
        status: "Live",
        category: "Packaged Voice & Agentic AI System",
        title: "Revenue cycle work, automated.",
        intro:
          "A voice and agentic AI system built for healthcare revenue cycle operations — handling claim intake, eligibility, and routine adjudication automatically, and routing anything that needs judgment to a specialist with full context.",
        Icon: HealthIcon,
        diagram: <ClaimFlow className="h-auto w-full" />,
        whatItIs:
          "Built on the same voice and agentic AI foundation as our other systems, applied to the specific demands of healthcare RCM — claim intake, eligibility checks, and adjudication, with a specialist checkpoint wherever a claim needs a human decision.",
        steps: [
          { title: "Claim intake", body: "Claims and calls come in through voice or document intake, structured automatically." },
          { title: "Agentic AI processes", body: "Routine eligibility and adjudication logic runs without a person touching each claim." },
          { title: "Specialist review where it matters", body: "Anything ambiguous or high-stakes routes to a specialist with the full claim context." },
        ],
        whoItsFor: [
          "Healthcare and RCM teams buried in repetitive claim and eligibility work",
          "Operations that need consistent first-pass processing without adding headcount for every volume spike",
          "Teams that want automation and specialist review designed as one system, not bolted together",
        ],
        path: "/solutions/healthcare-rcm-operations",
        serviceDescription:
          "A packaged voice and agentic AI system for healthcare revenue cycle operations, automating claim intake and adjudication with specialist review.",
        related: [
          { label: "AI Automation", href: "/ai-automation" },
          { label: "Support Operations", href: "/support-operations" },
          { label: "Solutions overview", href: "/solutions" },
        ],
      }}
    />
  );
}
