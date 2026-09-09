"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { aycaStats } from "@/data/ayca2026";

export function AycaHero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-radial animate-gradient" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-[#8561C5] blur-3xl opacity-30"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-[#E39297] blur-3xl opacity-30"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8 flex flex-wrap gap-3"
        >
          <Link
            href="/pyis2026"
            className="glass text-foreground text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
          >
            ← Back to PYIS 2026
          </Link>
          <Link
            href="/"
            className="glass text-foreground text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
          >
            AI for ASIA
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-[#E39297] pulse-glow" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            A Special Recognition Program of the Philippine Youth Innovation
            Summit 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
        >
          Asian Youth
          <br />
          Champion Awards
          <br />
          <span className="text-gradient animate-gradient">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground"
        >
          Celebrating young people who turn ideas into impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#nominate"
            className="bg-gradient-brand animate-gradient text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Nominate Now
          </a>
          <a
            href="#about"
            className="glass text-foreground font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
        >
          {aycaStats.map((s) => (
            <div key={s.l} className="glass rounded-2xl px-4 py-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">
                {s.n}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Presented during the closing and recognition activities of the{" "}
            <span className="text-foreground font-medium">
              Philippine Youth Innovation Summit 2026
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
