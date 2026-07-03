import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Raptric — Let's Talk",
  description:
    "Tell us about the operation you're running. One conversation with Raptric about AI automation, support operations, or engineering capacity — no form, no obligation.",
  path: "/contact",
});

const CONTACT_EMAIL = "usman@raptric.com";

export default function Contact() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <section className="flex min-h-[70vh] items-center bg-ink-950 text-mist-50">
        <Container className="py-20">
          <Eyebrow className="mb-6 text-signal-400">Contact</Eyebrow>
          <h1 className="max-w-lg text-h1 font-semibold text-mist-50">
            Tell us about the operation you&apos;re running.
          </h1>
          <p className="mt-5 max-w-lg text-body-lg text-mist-50/65">
            Whether it&apos;s AI automation, support operations, or engineering
            capacity — one conversation, no form, no obligation.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-block text-display font-semibold text-mist-50 transition-colors hover:text-signal-400"
          >
            {CONTACT_EMAIL}
          </a>
        </Container>
      </section>
    </>
  );
}
