"use client";

import { motion } from "motion/react";
import { Reveal } from "../Reveal";
import { pyisAudiences } from "@/data/pyis2026";

export function PyisWhoShouldJoin() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Who Should Join
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Who should <span className="text-gradient">join</span>?
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {pyisAudiences.map((audience, i) => (
            <Reveal key={audience.title} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500"
              >
                <h3 className="text-lg font-bold mb-3">{audience.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {audience.description}
                </p>
                <ul className="space-y-2">
                  {audience.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-gradient">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
