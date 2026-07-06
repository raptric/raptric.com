import ContactForm from "@/components/contact/contact-form";
import { BreadcrumbSchema, ContactPageSchema } from "@/components/seo/json-ld";
import { CtaLink } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import {
  buildMetadata,
  CALENDLY_URL,
  COMPANY_LINKEDIN,
  CONTACT_EMAIL,
  OPERATING_FOOTPRINT,
} from "@/lib/seo";

const TRUST_CUES = [
  { label: "Company", value: "Raptric LLC" },
  { label: "Email", value: CONTACT_EMAIL },
  { label: "Operating footprint", value: OPERATING_FOOTPRINT },
  { label: "Industries", value: "Healthcare, SaaS, marketing, sales, service businesses, and internal operations teams" },
];

export const metadata = buildMetadata({
  title: "Contact Raptric - Book a Discovery Call",
  description:
    "Talk to Raptric about AI automation, support operations, engineering capacity, or solution design. Book a call or send your project context directly.",
  path: "/contact",
  image: "/og/contact-1200x630.png",
  imageAlt: "Raptric contact page social share image inviting visitors to discuss AI automation, support operations, or engineering needs",
});

export default function Contact() {
  return (
    <>
      <ContactPageSchema />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Eyebrow className="mb-6 text-signal-400">Contact</Eyebrow>
              <h1 className="max-w-2xl text-h1 font-semibold text-mist-50">
                Start with the clearest next step.
              </h1>
              <p className="mt-5 max-w-xl text-body-lg text-mist-50/68">
                If you need AI automation, support operations, engineering
                capacity, or a practical systems recommendation, we can start
                with one focused conversation and move from there.
              </p>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                <div className="rounded-[var(--radius-md)] border border-mist-50/12 bg-mist-50/[0.04] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-signal-400">
                    Best for
                  </p>
                  <p className="mt-2 text-sm text-mist-50/72">
                    Teams that need help automating workflows, redesigning support,
                    or shipping platform work with more structure.
                  </p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-mist-50/12 bg-mist-50/[0.04] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-signal-400">
                    Helpful context
                  </p>
                  <p className="mt-2 text-sm text-mist-50/72">
                    Share what the workflow is, where it breaks, and what
                    outcome you need next.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-xs uppercase tracking-[0.18em] text-signal-400">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-block text-display font-semibold text-mist-50 transition-colors hover:text-signal-400"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                {TRUST_CUES.map((item) => (
                  <div key={item.label} className="rounded-[var(--radius-md)] border border-mist-50/12 bg-mist-50/[0.04] px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-signal-400">{item.label}</p>
                    <p className="mt-2 text-sm text-mist-50/72">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <CtaLink href={CALENDLY_URL}>Book a Discovery Call</CtaLink>
                <a
                  href={COMPANY_LINKEDIN}
                  className="inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/18 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/28 hover:bg-mist-50/[0.05]"
                >
                  Visit LinkedIn
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/18 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/28 hover:bg-mist-50/[0.05]"
                >
                  Send project details
                </a>
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-white/[0.03] p-3 shadow-[0_22px_60px_rgba(8,12,24,0.34)]">
              <div className="overflow-hidden rounded-[calc(var(--radius-lg)-6px)] border border-mist-50/10 bg-mist-50">
                <iframe
                  src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
                  title="Schedule a call with Raptric"
                  className="h-[720px] w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact-form" className="bg-mist-100">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Eyebrow className="mb-5">Project Inquiry</Eyebrow>
              <h2 className="max-w-lg text-h2 font-semibold text-ink-900">
                Prefer to send the project context first?
              </h2>
              <p className="mt-4 max-w-lg text-body-lg text-ink-900/65">
                Use the form if you want us to review the workflow, challenge,
                or opportunity before the call. We will respond to{" "}
                <span className="font-medium text-ink-900">{CONTACT_EMAIL}</span>{" "}
                with the clearest next step we recommend.
              </p>

              <div className="mt-8 grid gap-3">
                <div className="rounded-[var(--radius-md)] border border-ink-900/10 bg-white px-4 py-4">
                  <p className="text-sm font-medium text-ink-900">Fastest path</p>
                  <p className="mt-1 text-sm text-ink-900/62">
                    Book the call if you already know you want to move.
                  </p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-ink-900/10 bg-white px-4 py-4">
                  <p className="text-sm font-medium text-ink-900">Best path for detailed projects</p>
                  <p className="mt-1 text-sm text-ink-900/62">
                    Send the form if the workflow, stack, or business context
                    needs explanation first.
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
