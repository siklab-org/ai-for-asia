"use client";

import { Reveal } from "../Reveal";
import { aycaAreas } from "@/data/ayca2026";

export function AycaAreas() {
  return (
    <section id="areas" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Areas of Recognition
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Ten areas of <span className="text-gradient">recognition</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {aycaAreas.map((area, i) => (
            <Reveal key={area.title} delay={0.15 + (i % 2) * 0.1}>
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/[0.07] transition-all duration-500 flex gap-6">
                <div className="text-2xl font-bold text-gradient shrink-0">
                  {area.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            These areas guide the selection process rather than restrict it. A
            nominee may demonstrate impact across several areas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
