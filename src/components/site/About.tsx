import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { CohortBackdrop } from "./CohortBackdrop";

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Expert Mentors",
    desc: "Live sessions with industry leaders, UN officials, and policy makers shaping AI governance across the region.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Cohort Network",
    desc: "Cross-border connections with emerging leaders from 12 ASEAN nations and South Korea.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Capstone Projects",
    desc: "Ship real AI solutions addressing pressing challenges across Southeast Asian communities.",
  },
];

const stats = [
  { n: "12", l: "Weeks" },
  { n: "12", l: "Nations" },
  { n: "120", l: "Fellows" },
];

export function About() {
  return (
    <section id="about" className="relative isolate py-28 md:py-40 overflow-hidden">
      <CohortBackdrop />

      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/90 to-transparent pointer-events-none z-10" />

      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 40%, #0060BA 0%, #8561C5 40%, #C671AF 65%, transparent 80%)",
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-60 -right-40 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, #C671AF 0%, #E39297 50%, transparent 70%)",
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
            Bridging the AI skills gap across{" "}
            <span className="text-gradient">Southeast Asia</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7" delay={0.15}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
              <div className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full bg-gradient-to-b from-brand-3 via-brand-4 to-brand-5" />
              <p className="pl-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Southeast Asia isn&apos;t waiting for AI to arrive. It&apos;s already here.{" "}
                <span className="font-medium text-foreground">AI for Asia </span>
                trains the next wave of ASEAN leaders to shape how it&apos;s built, governed,
                and deployed across the region.
              </p>
              <p className="mt-5 pl-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Fellows learn from industry leaders, UN officials, and policy makers through
                live sessions, mentorship, and a capstone project they actually ship.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.25}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-white/[0.06] bg-white/[0.02] px-8 py-4 md:px-10 md:py-6">
              {stats.map((s, i) => (
                <Reveal key={s.l} delay={0.3 + i * 0.08}>
                  <div
                    className={`flex items-baseline gap-5 py-5 ${
                      i > 0 ? "border-t border-white/[0.06]" : ""
                    }`}
                  >
                    <span className="text-gradient text-4xl font-bold tracking-tight tabular-nums md:text-5xl">
                      {s.n}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {s.l}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.2 + i * 0.08}>
              <div className="group glass h-full rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.09]">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold md:text-lg">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-20 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="bg-gradient-brand h-1.5 w-1.5 rounded-full" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
