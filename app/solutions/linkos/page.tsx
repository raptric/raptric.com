import PackagedSolutionPage from "@/components/service/packaged-solution-page";
import WorkflowGraph from "@/components/illustrations/workflow-graph";
import { SystemsIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "LinkOS — Packaged Operating System",
  description:
    "LinkOS is the first operating system Raptric has built end-to-end — live, with automation carrying volume and specialist operators carrying judgment calls.",
  path: "/solutions/linkos",
  noIndex: true,
});

export default function LinkOSSolution() {
  return (
    <PackagedSolutionPage
      data={{
        name: "LinkOS",
        status: "Live",
        category: "Packaged Operating System",
        title: "The operating system, packaged.",
        intro:
          "The first operating system we've built end-to-end — running live, with automation carrying the volume and specialist operators carrying the judgment calls.",
        Icon: SystemsIcon,
        diagram: <WorkflowGraph className="h-auto w-full" />,
        whatItIs:
          "LinkOS is a single operation, not a stack of point tools — an explicit split between what's automated and what's handled by a specialist, running as one system with one owner.",
        steps: [
          { title: "Input flows in", body: "Requests, records, and routine work enter the system." },
          { title: "Automation absorbs volume", body: "The repeatable steps run without a person deciding anything." },
          { title: "Specialists handle judgment", body: "Anything that shouldn't be automated routes to a person, with context." },
        ],
        whoItsFor: [
          "Businesses running an operation that's outgrown ad hoc tools and manual processes",
          "Teams that want automation and specialist judgment designed together, not bolted on separately",
          "Operations that need one accountable system instead of several disconnected vendors",
        ],
        path: "/solutions/linkos",
        serviceDescription:
          "LinkOS, a packaged operating system combining automation and specialist operators as one live system.",
        related: [
          { label: "AI Automation", href: "/ai-automation" },
          { label: "Engineering Team", href: "/engineering-team" },
          { label: "Solutions overview", href: "/solutions" },
        ],
      }}
    />
  );
}
