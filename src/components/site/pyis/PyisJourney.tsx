"use client";

import { motion } from "motion/react";
import { Reveal } from "../Reveal";
import { pyisJourneyDay1, pyisJourneyDay2 } from "@/data/pyis2026";

export function PyisJourney() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Innovation Journey
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            From ideas to <span className="text-gradient">impact</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-6 text-gradient">
                Day 1 — Understand the Future
              </h3>
              <div className="space-y-4">
                {pyisJourneyDay1.map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white text-sm font-medium shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-sm">{step}</span>
                      {i < pyisJourneyDay1.length - 1 && (
                        <span className="text-muted-foreground">→</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-6 text-gradient">
                Day 2 — Build the Future
              </h3>
              <div className="space-y-4">
                {pyisJourneyDay2.map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white text-sm font-medium shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-sm">{step}</span>
                      {i < pyisJourneyDay2.length - 1 && (
                        <span className="text-muted-foreground">→</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
