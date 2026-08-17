"use client";

import { motion } from "motion/react";
import { Reveal } from "../Reveal";
import { pyisPartners } from "@/data/pyis2026";
import Image from "next/image";

export function PyisPartners() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-brand-3 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Partners
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Our <span className="text-gradient">partners</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The Summit is being developed through collaboration with institutions
            and organizations across education, business, government, development,
            youth, and innovation.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {pyisPartners.map((partner, i) => (
            <Reveal key={partner.name} delay={0.3 + i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 flex items-center justify-center h-24"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="max-h-12 w-auto opacity-70 brightness-0 invert"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              And other innovation ecosystem stakeholders
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
