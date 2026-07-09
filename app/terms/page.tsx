import Container from "@/components/ui/container";
import {
  buildMetadata,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  FULL_ADDRESS,
  LEGAL_NAME,
  SITE_URL,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Raptric LLC covering website use, proposals, services, fees, intellectual property, confidentiality, and liability limits.",
  path: "/terms",
});

const sections = [
  {
    title: "1. Agreement to These Terms",
    body: `These Terms of Service govern your access to and use of ${SITE_URL} and any related services, proposals, discovery work, pilot engagements, or implementation arrangements offered by ${LEGAL_NAME}.`,
  },
  {
    title: "2. Services",
    body: "Raptric provides AI automation, support operations design, engineering services, workflow systems, platform development, and related implementation or advisory work as described on the website or in a signed commercial agreement.",
  },
  {
    title: "3. Client Responsibilities",
    body: "Clients are responsible for providing accurate project details, timely feedback, lawful system access, and any permissions or approvals needed for Raptric to perform the work.",
  },
  {
    title: "4. Fees and Payment",
    body: "Fees, billing schedules, payment methods, and due dates are defined in the applicable proposal, statement of work, or agreement. Unless otherwise stated, invoices are due on receipt.",
  },
  {
    title: "5. Discovery, Pilot, and Strategy Work",
    body: "Discovery work, pilots, or phased implementation may be governed by separate scope documents. Unless otherwise stated in writing, those services are limited to the agreed scope and time frame.",
  },
  {
    title: "6. Refunds and Cancellations",
    body: "Except where required by law or explicitly stated in writing, fees for work already performed, active billing periods, or current project phases are non-refundable.",
  },
  {
    title: "7. Intellectual Property",
    body: "Each party retains ownership of its pre-existing intellectual property. Ownership, licensing, and usage rights for deliverables created during an engagement are governed by the signed commercial agreement for that work.",
  },
  {
    title: "8. Confidentiality",
    body: "Both parties agree to protect non-public business, technical, financial, operational, and customer information using reasonable care and to disclose it only as required to perform the engagement or comply with law.",
  },
  {
    title: "9. Data and Compliance",
    body: "Where Raptric works with client systems, customer information, or third-party tools, the client represents that it has the right and legal basis to provide such access and data for the intended work.",
  },
  {
    title: "10. Disclaimer of Warranties",
    body: "Unless expressly stated in a signed agreement, services are provided on an as-is and as-available basis. Raptric does not guarantee a specific revenue outcome, ranking outcome, or automation outcome unless committed in writing.",
  },
  {
    title: "11. Limitation of Liability",
    body: "To the maximum extent permitted by law, Raptric is not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits or business opportunity. Total liability is limited to the fees paid under the applicable agreement in the period directly preceding the claim, unless a different limit is stated in writing.",
  },
  {
    title: "12. Changes to These Terms",
    body: "We may update these Terms of Service from time to time. The current version will be published on this page and will apply from the listed effective date.",
  },
];

export default function Terms() {
  return (
    <section className="py-20 md:py-24">
      <Container className="max-w-4xl">
        <h1 className="max-w-3xl text-h1 font-semibold text-ink-900">
          Terms of Service
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-ink-600">
          Effective date: July 6, 2026. These Terms of Service explain the basic rules for using the Raptric website and engaging {LEGAL_NAME} for commercial services.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-h3 font-medium text-ink-900">{section.title}</h2>
              <p className="mt-3 text-body text-ink-700">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-100 p-6">
          <h2 className="text-h3 font-medium text-ink-900">Contact Information</h2>
          <div className="mt-4 space-y-2 text-body text-ink-700">
            <p>{LEGAL_NAME}</p>
            <p>{CONTACT_EMAIL}</p>
            <p>{CONTACT_PHONE_DISPLAY}</p>
            <p>{FULL_ADDRESS}</p>
          </div>
          <p className="mt-4 text-sm text-ink-500">
            These terms are a practical business template and not legal advice. Review with qualified counsel before relying on them as your only contractual framework.
          </p>
        </section>
      </Container>
    </section>
  );
}
