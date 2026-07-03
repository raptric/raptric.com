import type { Metadata } from "next";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Let's Talk — Raptric",
  description: "Tell us about the operation you're running.",
};

const CONTACT_EMAIL = "usman@raptric.com";

export default function Contact() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink-950 text-mist-50">
      <Container className="py-20">
        <Eyebrow className="mb-6 text-signal-400">Let&apos;s Talk</Eyebrow>
        <p className="max-w-lg text-h3 font-medium text-mist-50">
          Tell us about the operation you&apos;re running.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-block text-display font-semibold text-mist-50 transition-colors hover:text-signal-400"
        >
          {CONTACT_EMAIL}
        </a>
      </Container>
    </section>
  );
}
