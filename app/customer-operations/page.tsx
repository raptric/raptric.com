import type { Metadata } from "next";
import ServicePage from "@/components/service/service-page";
import { CustomerOperationsIcon } from "@/components/illustrations/service-icons";
import {
  HeadsetIcon,
  TicketIcon,
  OnboardIcon,
  ChatIcon,
  BuildingIcon,
  AppIcon,
  BagIcon,
} from "@/components/illustrations/concept-icons";

export const metadata: Metadata = {
  title: "Customer Operations — Raptric",
  description:
    "Customer support, technical helpdesk, onboarding, and communication — staffed by specialists and backed by automation.",
};

export default function CustomerOperations() {
  return (
    <ServicePage
      data={{
        eyebrow: "Customer Operations",
        title: "Support your customers actually feel good about.",
        intro:
          "Customer support, technical helpdesk, onboarding, and communication — staffed by specialists and backed by automation, so quality doesn't erode as volume grows.",
        Icon: CustomerOperationsIcon,
        specializations: [
          {
            Icon: HeadsetIcon,
            name: "Customer Support",
            body: "Multi-channel support — chat, email, and phone — for the people who use what you sell.",
          },
          {
            Icon: TicketIcon,
            name: "Technical Support",
            body: "Tier 1 and Tier 2 troubleshooting for end users, with clear escalation when it's not routine.",
          },
          {
            Icon: OnboardIcon,
            name: "Onboarding & Activation",
            body: "Guided setup and early-lifecycle support that gets new customers to their first real result.",
          },
          {
            Icon: ChatIcon,
            name: "Communication & Community",
            body: "Proactive updates, status communication, and community management that keeps customers informed.",
          },
        ],
        industries: [
          {
            Icon: BuildingIcon,
            name: "Hospitality",
            body: "Guest services for hotels — reservations, guest communications, and on-property coordination.",
          },
          {
            Icon: AppIcon,
            name: "SaaS & Digital Products",
            body: "Support and onboarding for software users, structured around ticket complexity, not just queue order.",
          },
          {
            Icon: BagIcon,
            name: "E-commerce & Consumer Brands",
            body: "Order support and post-purchase communication that scales with demand instead of falling behind it.",
          },
        ],
        problems: [
          "Support quality that degrades as volume grows",
          "Onboarding that depends on one person's memory",
          "Response times that scale linearly with headcount",
          "Automation and human support that aren't structured together",
        ],
        useCases: [
          "An onboarding flow that combines automated steps with a specialist check-in",
          "A support triage system that routes by complexity, not just by queue",
          "Structured communication processes across support, sales, and operations",
        ],
        credibility:
          "We design customer operations as a system with a defined split between automation and specialist judgment, not headcount thrown at growth.",
      }}
    />
  );
}
