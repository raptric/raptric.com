import type { Metadata } from "next";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy — Raptric",
};

export default function Privacy() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Eyebrow className="mb-5">Privacy Policy</Eyebrow>
        <h1 className="max-w-2xl text-h1 font-semibold text-ink-900">
          This page is being finalized.
        </h1>
        <p className="mt-5 max-w-xl text-body-lg text-ink-600">
          Our privacy policy is being drafted and will be published here
          shortly. If you have questions about how your data is handled in
          the meantime, reach out directly.
        </p>
      </Container>
    </section>
  );
}
