"use client";

import { Reveal } from "../Reveal";
import { aycaThemeSteps } from "@/data/ayca2026";

export function AycaTheme() {
  return (
    <section id="theme" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Program Theme
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Turning ideas into <span className="text-gradient">impact</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            The Asian Youth Champion Awards is built around a simple
            progression. The Awards recognize young people who demonstrate one
            or more of these dimensions and, particularly, those who have
            transformed ideas into action and action into impact.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {aycaThemeSteps.map((step, i) => (
            <Reveal key={step.word} delay={0.2 + i * 0.1}>
              <div className="relative glass rounded-2xl p-6 h-full hover:bg-white/[0.07] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-brand opacity-60" />
                <div className="text-xs text-muted-foreground mb-4">
                  {step.number}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient uppercase tracking-tight">
                  {step.word}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
