"use client";

import { Reveal } from "../Reveal";
import { aycaProcessSteps } from "@/data/ayca2026";

export function AycaProcess() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Nomination Process
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Seven steps to <span className="text-gradient">recognition</span>.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-4 max-w-4xl">
          {aycaProcessSteps.map((s, i) => (
            <Reveal key={s.title} delay={0.15 + i * 0.05}>
              <div className="glass rounded-2xl p-6 md:p-8 flex items-start gap-5 hover:bg-white/[0.07] transition-all duration-500">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold">
                  {s.step}
                </div>
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-bold">{s.title}</h3>
                    {s.date && (
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gradient font-medium border border-white/10 rounded-full px-3 py-1">
                        {s.date}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
