import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated gradient backdrop */}
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
            Fellowship · 2026 Cohort
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
        >
          Shape
          <br />
          <span className="text-gradient animate-gradient">
            what comes
          </span>
          <br />
          <span className="text-muted-foreground/60">next.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground"
        >
          A 12-week fully online fellowship for emerging leaders across ASEAN,
          where AI meets policy, community, and real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="https://form.typeform.com/to/NOTrA2Qg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-brand animate-gradient text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Become a Fellow
          </a>
          <a
            href="#about"
            className="glass text-foreground font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            Learn more
          </a>
          <a
            href="https://drive.google.com/drive/folders/1Kl_hC26m6liwJu4yaK9B_j0A_6DdoN3R"
            target="_blank"
            rel="noopener noreferrer"
            className="glass text-foreground font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            Program Briefer →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Supported by
          </span>
          <span className="h-px w-8 bg-white/10" />
          <img
            src="/partners/nyc-white.png"
            alt="National Youth Council Singapore"
            className="h-9 w-auto opacity-70"
          />
        </motion.div>

        {/* Floating logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 animate-float"
        >
          <Image
            src="/logo.png"
            alt=""
            width={288}
            height={288}
            className="h-72 w-72 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
