import dynamic from "next/dynamic";
import { motion } from "motion/react";

const InteractiveMap = dynamic(() => import("./InteractiveMap").then((m) => m.InteractiveMap), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] rounded-2xl bg-muted/30 flex items-center justify-center text-sm text-muted-foreground">
      Loading map…
    </div>
  ),
});

const stats = [
  { n: "12", l: "ASEAN Countries + South Korea", s: "Represented" },
  { n: "120", l: "Fellows", s: "Across Asia" },
  { n: "10+", l: "High-Level", s: "Sessions" },
];

export function Impact() {
  return (
    <section id="impact" className="relative py-32 px-6 overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">/ Impact</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              One region.<br />
              <span className="text-gradient">One movement</span>.
            </h2>

            <div className="mt-12 space-y-4">
              {stats.map((s, i) => (
                <div key={s.n + '-' + i} className="flex items-baseline gap-6 border-b border-border pb-4">
                  <div className="text-5xl md:text-6xl font-bold text-gradient w-24">{s.n}</div>
                  <div>
                    <div className="font-semibold">{s.l}</div>
                    <div className="text-sm text-muted-foreground">{s.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-brand blur-3xl opacity-30 rounded-full" />
            <InteractiveMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
