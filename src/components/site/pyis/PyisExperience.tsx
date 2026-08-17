"use client";

import { motion } from "motion/react";
import { Reveal } from "../Reveal";
import { pyisExperiences } from "@/data/pyis2026";

export function PyisExperience() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / What You&apos;ll Experience
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            An immersive <span className="text-gradient">experience</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {pyisExperiences.map((exp, i) => (
            <Reveal key={exp.title} delay={0.2 + i * 0.05}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-500"
              >
                <div className="text-3xl mb-4">{exp.icon}</div>
                <h3 className="text-sm md:text-base font-semibold mb-2">
                  {exp.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
