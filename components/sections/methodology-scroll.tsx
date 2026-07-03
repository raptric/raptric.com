"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type MethodologyStep = {
  n: string;
  label: string;
  title: string;
  body: string;
  image: string;
};

export default function MethodologyScroll({ steps }: { steps: MethodologyStep[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div
            key={step.n}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`border-t border-ink-200 py-10 transition-opacity duration-300 first:border-t-0 md:py-16 ${
              active === i ? "opacity-100" : "opacity-40"
            }`}
          >
            <span className="label text-signal-600">{step.n}</span>
            <h3 className="mt-3 text-h2 font-semibold text-ink-900">{step.title}</h3>
            <p className="mt-3 max-w-md text-body-lg text-ink-600">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="sticky top-24 h-[480px] overflow-hidden rounded-[var(--radius-lg)] shadow-2xl">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`absolute inset-0 transition-opacity duration-500 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="label text-signal-300">{step.n}</span>
                <p className="mt-2 text-h3 font-semibold text-mist-50">{step.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile fallback: static image per step, inline */}
      <div className="-mt-6 flex flex-col gap-6 md:hidden">
        {steps.map((step) => (
          <div key={step.n} className="relative h-56 overflow-hidden rounded-[var(--radius-lg)]">
            <Image src={step.image} alt={step.title} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <span className="label text-signal-300">{step.n}</span>
              <p className="mt-1 text-h3 font-semibold text-mist-50">{step.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
