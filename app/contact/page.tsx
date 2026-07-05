import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import { CtaLink } from "@/components/ui/button";
import { BreadcrumbSchema, ContactPageSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Raptric - Let's Talk",
  description:
    "Talk to Raptric about AI automation, support operations, engineering capacity, or platform development. Start with one conversation and a clear next step.",
  path: "/contact",
});

const CONTACT_EMAIL = "usman@raptric.com";

export default function Contact() {
  return (
    <>
      <ContactPageSchema />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <section className="flex min-h-[70vh] items-center bg-ink-950 text-mist-50">
        <Container className="py-20">
          <Eyebrow className="mb-6 text-signal-400">Contact</Eyebrow>
          <h1 className="max-w-lg text-h1 font-semibold text-mist-50">
            Start the conversation with context, not guesswork.
          </h1>
          <p className="mt-5 max-w-lg text-body-lg text-mist-50/65">
            Tell us what you are trying to automate, support, ship, or fix.
            We will help you figure out the right next step across AI automation,
            support operations, engineering capacity, or platform development.
          </p>
          <div className="mt-8 grid max-w-xl gap-3 text-sm text-mist-50/74">
            <div className="rounded-[var(--radius-md)] border border-mist-50/12 bg-mist-50/[0.04] px-4 py-3">
              Best for: companies that need workflow automation, support-system design, or embedded engineering help.
            </div>
            <div className="rounded-[var(--radius-md)] border border-mist-50/12 bg-mist-50/[0.04] px-4 py-3">
              Include: what the workflow is, where it breaks, and what outcome you need.
            </div>
            <div className="rounded-[var(--radius-md)] border border-mist-50/12 bg-mist-50/[0.04] px-4 py-3">
              Expectation: one clear conversation, then a practical recommendation on next steps.
            </div>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-block text-display font-semibold text-mist-50 transition-colors hover:text-signal-400"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="mt-8">
            <CtaLink href={`mailto:${CONTACT_EMAIL}?subject=Raptric%20Discovery%20Call`}>
              Book a Discovery Call
            </CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
