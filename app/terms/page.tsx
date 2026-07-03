import type { Metadata } from "next";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Terms — Raptric",
};

export default function Terms() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Eyebrow className="mb-5">Terms</Eyebrow>
        <h1 className="max-w-2xl text-h1 font-semibold text-ink-900">
          This page is being finalized.
        </h1>
        <p className="mt-5 max-w-xl text-body-lg text-ink-600">
          Our terms of service are being drafted and will be published here
          shortly.
        </p>
      </Container>
    </section>
  );
}
