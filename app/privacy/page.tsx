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
  title: "Privacy Policy",
  description:
    "Privacy Policy for Raptric LLC covering data collected through the website, contact forms, scheduling, and related business conversations.",
  path: "/privacy",
});

const sections = [
  {
    title: "1. Who We Are",
    body: `${LEGAL_NAME} operates the Raptric website and related commercial services. For privacy questions, contact us at ${CONTACT_EMAIL} or ${CONTACT_PHONE_DISPLAY}.`,
  },
  {
    title: "2. Information We Collect",
    body: "We may collect personal information you provide directly, including your name, email address, phone number, company name, job title, workflow details, project requirements, and any other information you share when you contact us or book a call.",
  },
  {
    title: "3. Technical Data and Usage Data",
    body: "We may collect technical information such as IP address, browser type, device information, approximate location, referral source, and pages viewed to improve security, performance, and the website experience.",
  },
  {
    title: "4. How We Use Information",
    body: "We use information to respond to inquiries, schedule calls, evaluate project fit, prepare proposals, deliver services, improve the website, maintain security, and meet legal or operational obligations.",
  },
  {
    title: "5. Cookies and Similar Technologies",
    body: "Raptric may use essential cookies for site functionality and may use analytics or scheduling-related technologies where appropriate. Where required by law, we provide cookie consent choices before non-essential cookies are used.",
  },
  {
    title: "6. Scheduling and Third-Party Tools",
    body: "If you use our contact form or schedule time through Calendly, your information may also be processed by trusted providers that help us operate email, scheduling, hosting, analytics, CRM, or communications systems.",
  },
  {
    title: "7. Sharing and Disclosure",
    body: "We do not sell personal information. We may share data with service providers, professional advisors, and authorities where necessary to operate the business, comply with law, or protect rights, users, or systems.",
  },
  {
    title: "8. International Transfers",
    body: "Raptric works with US and international teams. Information may be processed in the United States or in other jurisdictions where Raptric or its service providers operate, subject to reasonable safeguards where applicable.",
  },
  {
    title: "9. Data Retention",
    body: "We retain information only as long as reasonably necessary to respond to requests, manage commercial relationships, maintain records, resolve disputes, and comply with legal obligations.",
  },
  {
    title: "10. Your Rights",
    body: "Depending on where you are located, you may have rights to access, correct, delete, restrict, or object to certain uses of your personal information, or to request portability of that information.",
  },
  {
    title: "11. Security",
    body: "We use reasonable technical and organizational safeguards to protect personal information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
  },
  {
    title: "12. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. The latest version will always be published on this page with the current effective date.",
  },
];

export default function Privacy() {
  return (
    <section className="py-20 md:py-24">
      <Container className="max-w-4xl">
        <h1 className="max-w-3xl text-h1 font-semibold text-ink-900">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-ink-600">
          Effective date: July 6, 2026. This Privacy Policy explains how {LEGAL_NAME} collects, uses, shares, and protects personal data in connection with the {SITE_URL} website and the business conversations and services offered through Raptric.
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
          <h2 className="text-h3 font-medium text-ink-900">Contact Us</h2>
          <div className="mt-4 space-y-2 text-body text-ink-700">
            <p>{LEGAL_NAME}</p>
            <p>{CONTACT_EMAIL}</p>
            <p>{CONTACT_PHONE_DISPLAY}</p>
            <p>{FULL_ADDRESS}</p>
          </div>
          <p className="mt-4 text-sm text-ink-500">
            This policy is a practical business privacy notice and not legal advice. Review with qualified counsel if you require jurisdiction-specific privacy language.
          </p>
        </section>
      </Container>
    </section>
  );
}
