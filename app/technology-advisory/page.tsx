import type { Metadata } from "next";
import ServicePage from "@/components/service/service-page";
import { TechnologyAdvisoryIcon } from "@/components/illustrations/service-icons";

export const metadata: Metadata = {
  title: "Technology Advisory — Raptric",
  description:
    "Systems planning, architecture, and automation strategy for teams that need direction before they build.",
};

export default function TechnologyAdvisory() {
  return (
    <ServicePage
      data={{
        eyebrow: "Technology Advisory",
        title: "Direction before you build, from people who also build.",
        intro:
          "Systems planning, architecture, and automation strategy — for teams that need direction before they commit to a build.",
        Icon: TechnologyAdvisoryIcon,
        covers: [
          "Systems and architecture planning",
          "Automation strategy and roadmapping",
          "Technical guidance on build-versus-buy decisions",
          "Independent assessment of existing systems",
        ],
        problems: [
          "Automation and software decisions made without a systems view",
          "Technical direction that changes with whoever's in the room",
          "No clear roadmap for where automation should go next",
          "Uncertainty about what to build in-house versus buy",
        ],
        useCases: [
          "A systems assessment that identifies where automation will actually compound",
          "An architecture plan for a build that hasn't started yet",
          "Technical guidance embedded alongside a non-technical leadership team",
        ],
        credibility:
          "This is the same systems thinking behind everything else we build — offered directly, before or instead of a full build.",
      }}
    />
  );
}
