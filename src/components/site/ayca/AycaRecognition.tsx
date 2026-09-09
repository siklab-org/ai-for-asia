"use client";

import { Reveal } from "../Reveal";
import { aycaRecognitionItems, aycaSpecialRecognitions } from "@/data/ayca2026";

export function AycaRecognition() {
  return (
    <section id="recognition" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Recognition
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            The 35 Youth <span className="text-gradient">Trailblazers</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            The 35 honorees form a distinguished cohort representing different
            fields, communities, backgrounds, and forms of changemaking. They
            are not necessarily ranked from first to thirty-fifth — the
            program intentionally avoids making the recognition solely a
            competition for a single winner, and celebrates the idea that
            there are many ways to create meaningful change.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The recognition ceremony forms part of the closing activities of
            the Philippine Youth Innovation Summit 2026 and is designed as a
            celebration of stories rather than simply a presentation of
            certificates.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 items-start">
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-6">Each honoree receives</h3>
              <ul className="space-y-4">
                {aycaRecognitionItems.map((item) => (
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

          <div className="space-y-4">
            <Reveal delay={0.25}>
              <div className="px-2">
                <h3 className="text-lg font-bold">Special recognitions</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  The organizers may confer a limited number of special
                  distinctions:
                </p>
              </div>
            </Reveal>
            {aycaSpecialRecognitions.map((sr, i) => (
              <Reveal key={sr.title} delay={0.3 + i * 0.05}>
                <div className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-500">
                  <h4 className="font-bold text-gradient mb-1">{sr.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {sr.description}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.55}>
              <p className="text-xs text-muted-foreground px-2">
                These distinctions remain secondary to the principal
                recognition of the 35 Youth Trailblazers.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
