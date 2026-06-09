"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Reveal } from "./Reveal";

const areas = [
  { img: "/icons/AI Literacy.svg", title: "AI Literacy", desc: "Foundations of artificial intelligence." },
  { img: "/icons/Policy and Ethics.svg", title: "Policy & Ethics", desc: "Governance for the AI era." },
  { img: "/icons/Entrepeneurship.svg", title: "Entrepreneurship", desc: "Building AI-native ventures." },
  { img: "/icons/Workforce.svg", title: "Workforce", desc: "Future-ready skills." },
  { img: "/icons/Innovation.svg", title: "Innovation", desc: "Real-world capstone projects." },
  { img: "/icons/Community.svg", title: "Community", desc: "Cross-border ASEAN networks." },
];

const RADIUS = 320;
const STEP = 360 / areas.length;

export function Program() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % areas.length), []);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section id="program" className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">/ Program</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-[1.05]">
                Six areas of <span className="text-gradient">work</span>.
              </h2>
            </Reveal>
          </div>
        </div>

        <div
          className="flex items-center justify-center h-[520px]"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative w-[320px] h-[420px]" style={{ transformStyle: "preserve-3d" }}>
            {areas.map((a, i) => {
              const diff = i - current;
              const angle = diff * STEP;
              const absAngle = Math.abs((((angle % 360) + 540) % 360) - 180);

              const opacity = absAngle > 110 ? 0 : 1 - absAngle / 110;
              const scale = absAngle > 110 ? 0.5 : 1 - (absAngle / 180) * 0.5;
              const zIndex = absAngle > 110 ? 0 : Math.round((1 - absAngle / 180) * 10);

              return (
                <button
                  key={a.title}
                  onClick={() => goTo(i)}
                  className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl flex flex-col items-center justify-center p-8 transition-all duration-700 ease-out cursor-pointer disabled:cursor-default focus:outline-none"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                    opacity,
                    scale,
                    zIndex,
                    pointerEvents: absAngle > 100 ? "none" : "auto",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Image src={a.img} alt={a.title} width={120} height={120} className="shrink-0" />
                  <div className="mt-5 text-center">
                    <div className="text-xs text-muted-foreground mb-1">0{i + 1}</div>
                    <h3 className="text-xl font-semibold">{a.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
