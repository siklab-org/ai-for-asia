"use client";

import { motion } from "motion/react";
import { Reveal } from "../Reveal";
import { pyisStats } from "@/data/pyis2026";

const journeySteps = [
  "LEARN",
  "CONNECT",
  "IDENTIFY",
  "CREATE",
  "PITCH",
  "COLLABORATE",
];

export function PyisAbout() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/90 to-transparent pointer-events-none z-10" />

      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #0060BA 0%, #8561C5 40%, #C671AF 65%, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / About
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            A new generation of{" "}
            <span className="text-gradient">innovators</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            More than a conference, an immersive learning and innovation
            experience designed to help young people move through a simple but
            powerful journey.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {journeySteps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="glass px-4 py-2 rounded-full text-sm font-medium">
                  {step}
                </span>
                {i < journeySteps.length - 1 && (
                  <span className="text-muted-foreground">→</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-4 gap-4">
          {pyisStats.map((s, i) => (
            <Reveal key={s.l} delay={0.4 + i * 0.1}>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient tracking-tight">
                  {s.n}
                </div>
                <div className="mt-1 text-sm text-muted-foreground tracking-wide uppercase">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6}>
          <div className="flex items-center justify-center gap-4 mt-20">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
