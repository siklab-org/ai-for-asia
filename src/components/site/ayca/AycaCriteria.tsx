"use client";

import { motion } from "motion/react";
import { Reveal } from "../Reveal";
import { aycaCriteria } from "@/data/ayca2026";

export function AycaCriteria() {
  return (
    <section id="criteria" className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Selection Criteria
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            How nominations are{" "}
            <span className="text-gradient">evaluated</span>.
          </h2>
        </Reveal>

        <div className="mt-16 glass rounded-2xl p-8 md:p-10">
          <div className="space-y-8">
            {aycaCriteria.map((c, i) => (
              <Reveal key={c.label} delay={0.15 + i * 0.05}>
                <div>
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="font-bold">{c.label}</h3>
                    <div className="text-2xl md:text-3xl font-bold text-gradient">
                      {c.weight}%
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground max-w-2xl">
                    {c.description}
                  </p>
                  <div className="mt-4 h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.weight}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-brand"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10 pt-6 border-t border-white/10 flex items-baseline justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Total
              </span>
              <span className="text-2xl md:text-3xl font-bold text-gradient">
                100%
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
