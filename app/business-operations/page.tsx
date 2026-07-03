import type { Metadata } from "next";
import ServicePage from "@/components/service/service-page";
import { BusinessOperationsIcon } from "@/components/illustrations/service-icons";
import {
  CrmIcon,
  AppIcon,
  QaIcon,
  DevIcon,
  ReportIcon,
  HealthIcon,
  BriefcaseIcon,
} from "@/components/illustrations/concept-icons";

export const metadata: Metadata = {
  title: "Business Operations — Raptric",
  description:
    "CRM administration, application support, QA, development augmentation, and back-office execution — the operational backbone businesses patch together as they grow.",
};

export default function BusinessOperations() {
  return (
    <ServicePage
      data={{
        eyebrow: "Business Operations",
        title: "The internal team and systems, actually run well.",
        intro:
          "CRM administration, application support, QA, development augmentation, and back-office execution — the parts of the business most companies patch together as they grow, staffed and structured as a system instead.",
        Icon: BusinessOperationsIcon,
        specializations: [
          {
            Icon: CrmIcon,
            name: "CRM Support & Administration",
            body: "Pipeline administration, data hygiene, and day-to-day CRM upkeep for your internal team.",
          },
          {
            Icon: AppIcon,
            name: "Application Support",
            body: "Ongoing support and maintenance for internal or product applications — uptime, bug triage, and minor fixes.",
          },
          {
            Icon: QaIcon,
            name: "QA & Testing",
            body: "Embedded QA specialists for release cycles and ongoing quality processes.",
          },
          {
            Icon: DevIcon,
            name: "Development Staff Augmentation",
            body: "Developers embedded inside your existing team and roadmap, not a separate outsourced project.",
          },
          {
            Icon: ReportIcon,
            name: "Admin, Reporting & Process Execution",
            body: "Recurring back-office workflows and reporting pipelines that don't depend on manual assembly.",
          },
        ],
        industries: [
          {
            Icon: HealthIcon,
            name: "Healthcare & RCM",
            body: "Claims processing, billing, collections, and prior-authorization workflows, run on a defined automation-and-specialist split.",
          },
          {
            Icon: BriefcaseIcon,
            name: "Professional Services & Agencies",
            body: "CRM operations, reporting, and back-office execution for services firms scaling past founder-led admin.",
          },
          {
            Icon: DevIcon,
            name: "Technology & SaaS Companies",
            body: "QA and development augmentation, plus internal application support, for product teams that need extra capacity.",
          },
        ],
        problems: [
          "Operational work that depends on one person's availability",
          "Reporting that's manually assembled and always out of date",
          "CRM data that's inconsistent across the team",
          "Engineering and QA capacity that can't flex with the roadmap",
        ],
        useCases: [
          "Structured reporting pipelines that update without manual assembly",
          "CRM workflows with automated data hygiene and specialist review",
          "An embedded QA or development specialist working inside an existing sprint cycle",
        ],
        credibility:
          "We treat operational execution — including the people who run it — as a system to design, not a set of tasks or headcount to hand off.",
      }}
    />
  );
}
