import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const placeholders = Array.from({ length: 8 });

export function UpcomingSpeakers() {
  return (
    <section id="upcoming" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
                / Upcoming Speakers · 2026
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
                New voices, <span className="text-gradient">soon</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-muted-foreground max-w-xl">
                The next cohort welcomes a new lineup of leaders, founders, and policy
                experts shaping AI across the region. Announcements rolling out shortly.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href="mailto:hello@aiforasean.org?subject=Speaker%20interest"
              className="glass rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Suggest a speaker →
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {placeholders.map((_, i) => (
            <Reveal key={i} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass border-gradient"
              >
                <div className="absolute inset-0 bg-gradient-brand opacity-10 group-hover:opacity-25 transition-opacity duration-500" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 shimmer" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-brand animate-gradient pulse-glow mb-4" />
                  <div className="text-sm font-semibold tracking-wide">To be announced</div>
                  <div className="text-xs text-muted-foreground mt-1">2026 Cohort</div>
                </div>
                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
