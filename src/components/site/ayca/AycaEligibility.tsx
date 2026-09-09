"use client";

import { Reveal } from "../Reveal";
import { aycaEligibility, aycaEligibilityNotes } from "@/data/ayca2026";

export function AycaEligibility() {
  return (
    <section id="eligibility" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Eligibility
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Who can be <span className="text-gradient">nominated</span>?
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-6 items-start">
          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-6">A nominee must</h3>
              <ul className="space-y-4">
                {aycaEligibility.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="text-gradient font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="lg:col-span-2 space-y-6">
            {aycaEligibilityNotes.map((note, i) => (
              <Reveal key={note} delay={0.3 + i * 0.1}>
                <div className="glass border-gradient rounded-2xl p-8">
                  <p className="text-sm md:text-base leading-relaxed">
                    {note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
