"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function PyisHero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-radial animate-gradient" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-[#0060BA] blur-3xl opacity-30"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-[#C671AF] blur-3xl opacity-30"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-[#E39297] pulse-glow" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            October 9–10, 2026 · De La Salle University Manila
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
        >
          Philippine Youth
          <br />
          Innovation Summit
          <br />
          <span className="text-gradient animate-gradient">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground"
        >
          Empowering the Next Generation of Innovators, Changemakers, and
          Entrepreneurial Leaders
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="https://tinyurl.com/pyis2026register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-brand animate-gradient text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Register Now
          </a>
          <a
            href="#organizers"
            className="glass text-foreground font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            Become a Partner
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Organized by
            </span>
            <span className="h-px w-8 bg-white/10" />
            <div className="flex items-center gap-4">
              <Image
                src="/speaker-logos/siklab.png"
                alt="Siklab Pilipinas"
                width={120}
                height={40}
                className="h-10 w-auto opacity-80 brightness-0 invert"
              />
              <Image
                src="/speaker-logos/enactus.png"
                alt="Enactus Philippines"
                width={120}
                height={40}
                className="h-10 w-auto opacity-80 brightness-0 invert"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Held alongside the{" "}
            <span className="text-foreground font-medium">
              Enactus Philippines National Competition 2026
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
