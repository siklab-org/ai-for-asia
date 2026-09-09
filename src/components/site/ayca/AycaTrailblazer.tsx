"use client";

import { Reveal } from "../Reveal";
import { aycaTrailblazerMyths, aycaCommitteeQuestions } from "@/data/ayca2026";

export function AycaTrailblazer() {
  return (
    <section id="trailblazer" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / The Trailblazer
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            What does it mean to be a{" "}
            <span className="text-gradient">Trailblazer</span>?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            The Awards prioritize impact, initiative, and inspiration over
            credentials and popularity.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 items-stretch">
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-lg font-bold mb-6">
                A Trailblazer does not have to be
              </h3>
              <ul className="space-y-4">
                {aycaTrailblazerMyths.map((myth) => (
                  <li
                    key={myth}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="text-muted-foreground/50 mt-0.5">✕</span>
                    {myth}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="glass border-gradient rounded-2xl p-8 h-full">
              <h3 className="text-lg font-bold mb-6">
                Instead, the selection committee will ask
              </h3>
              <ul className="space-y-5">
                {aycaCommitteeQuestions.map((q, i) => (
                  <li key={q} className="flex items-start gap-4">
                    <span className="text-xl font-bold text-gradient shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-sm md:text-base">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 glass rounded-2xl p-8 md:p-10 text-center">
            <p className="text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
              A Trailblazer may have created national impact — or transformed a
              single school, neighborhood, community, or group of people.{" "}
              <span className="text-gradient font-semibold">
                Both forms of impact matter.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
