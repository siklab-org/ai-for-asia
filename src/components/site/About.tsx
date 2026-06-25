import { motion } from "motion/react";
import { Reveal } from "./Reveal";

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

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
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

        <div className="mt-16 grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          <div className="md:col-span-3 relative">
            <div className="grid grid-cols-3 gap-4 md:gap-8 p-6 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
              {[
                { n: "12", l: "Weeks" },
                { n: "12", l: "Nations" },
                { n: "120", l: "Fellows" },
              ].map((s, i) => (
                <Reveal key={s.n} delay={0.2 + i * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl md:text-7xl font-bold text-gradient tracking-tight">
                      {s.n}
                    </div>
                    <div className="mt-1 text-xs md:text-sm text-muted-foreground tracking-wide uppercase">
                      {s.l}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 relative">
            <Reveal delay={0.2}>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-brand-3 via-brand-4 to-brand-5" />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Southeast Asia isn&apos;t waiting for AI to arrive. It&apos;s already here.{" "}
                  <span className="text-foreground font-medium">AI for Asia </span> trains the next wave of ASEAN leaders to shape how it&apos;s built, governed, and deployed across the region.
                </p>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Fellows learn from industry leaders, UN officials, and policy makers through live sessions, mentorship, and a capstone project they actually ship.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.3 + i * 0.1}>
              <div className="group glass rounded-2xl p-7 hover:bg-white/[0.07] transition-all hover:-translate-y-1 duration-500">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </div>
                <h3 className="mt-5 text-base md:text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
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
