"use client";

import { motion } from "motion/react";
import { Reveal } from "../Reveal";
import { pyisThemes } from "@/data/pyis2026";

export function PyisThemes() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Three Themes
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Three global{" "}
            <span className="text-gradient">challenges</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pyisThemes.map((theme, i) => (
            <Reveal key={theme.number} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500"
              >
                <div className="text-xs text-muted-foreground mb-4">
                  {theme.number} ·
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {theme.subtitle}
                </p>
                <ul className="space-y-2">
                  {theme.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-gradient mt-1">•</span>
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
