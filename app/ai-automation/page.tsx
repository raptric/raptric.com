import type { Metadata } from "next";
import ServicePage from "@/components/service/service-page";
import { AiAutomationIcon } from "@/components/illustrations/service-icons";

export const metadata: Metadata = {
  title: "AI Automation — Raptric",
  description:
    "AI workflows, AI agents, internal assistants, and process automation built directly into how the business runs.",
};

export default function AiAutomation() {
  return (
    <ServicePage
      data={{
        eyebrow: "AI Automation",
        title: "AI automation built into the operation, not bolted onto it.",
        intro:
          "AI workflows, AI agents, internal assistants, and process automation, built directly into how the business runs — not a side experiment that never leaves the pilot.",
        Icon: AiAutomationIcon,
        covers: [
          "AI workflows and multi-step agents",
          "Internal AI assistants for teams",
          "Process automation across existing tools",
          "Automated decisioning with human checkpoints where judgment is required",
        ],
        problems: [
          "Manual, repetitive work consuming specialist time",
          "Automation that only handles the easy cases and breaks on exceptions",
          "AI pilots that never make it into production",
          "No clear owner for automation once it's built",
        ],
        useCases: [
          "An agent that triages inbound requests and routes exceptions to a specialist",
          "An internal assistant that answers operational questions from existing documentation",
          "Automated data entry and reconciliation across systems that don't talk to each other",
        ],
        credibility:
          "We build automation as a working part of the operation, with a specialist checkpoint wherever judgment is required — not a script that only works in the demo.",
      }}
    />
  );
}
