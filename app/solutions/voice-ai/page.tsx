import PackagedSolutionPage from "@/components/service/packaged-solution-page";
import VoiceFlow from "@/components/illustrations/voice-flow";
import { PhoneIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Voice AI — Packaged Voice Operations System",
  description:
    "A voice AI system that answers, resolves, and routes inbound calls — automating the repeatable conversation and handing off to a specialist when it isn't.",
  path: "/solutions/voice-ai",
  noIndex: true,
});

export default function VoiceAiSolution() {
  return (
    <PackagedSolutionPage
      data={{
        name: "Voice AI",
        status: "Live",
        category: "Packaged Voice Operations System",
        title: "The phone line, automated.",
        intro:
          "A voice system that picks up, understands what's being asked, and either resolves it on the call or hands it to a specialist with full context — instead of a queue and a hold tone.",
        Icon: PhoneIcon,
        diagram: <VoiceFlow className="h-auto w-full" />,
        whatItIs:
          "Voice AI listens to the call, understands intent, and decides in real time whether it's a resolvable request or one that needs a person — with the handoff carrying the conversation's context, not starting the caller over.",
        steps: [
          { title: "Call comes in", body: "The system answers and listens for what the caller actually needs." },
          { title: "AI resolves or routes", body: "Straightforward requests get handled immediately; anything else gets flagged for a person." },
          { title: "Specialist picks up with context", body: "A handoff carries the conversation, not a cold transfer." },
        ],
        whoItsFor: [
          "Teams fielding high call volume with a small fraction that actually needs a specialist",
          "Operations losing callers to hold times instead of resolving them on first contact",
          "Businesses that want a consistent first response without staffing every hour for peak volume",
        ],
        path: "/solutions/voice-ai",
        serviceDescription:
          "Voice AI, a packaged voice operations system that resolves calls automatically or hands off to a specialist with context.",
        related: [
          { label: "AI Automation", href: "/ai-automation" },
          { label: "Support Operations", href: "/support-operations" },
          { label: "Solutions overview", href: "/solutions" },
        ],
      }}
    />
  );
}
