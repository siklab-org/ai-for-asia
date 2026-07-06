"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const areas = [
  { img: "/icons/AI Literacy.svg", title: "AI Literacy", desc: "Foundations of artificial intelligence." },
  { img: "/icons/Policy and Ethics.svg", title: "Policy & Ethics", desc: "Governance for the AI era." },
  { img: "/icons/Entrepeneurship.svg", title: "Entrepreneurship", desc: "Building AI-native ventures." },
  { img: "/icons/Workforce.svg", title: "Workforce", desc: "Future-ready skills." },
  { img: "/icons/Innovation.svg", title: "Innovation", desc: "Real-world capstone projects." },
  { img: "/icons/Community.svg", title: "Community", desc: "Cross-border ASEAN networks." },
];

const STEP = 360 / areas.length;

export function Program() {
  const [counter, setCounter] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);

  const RADIUS = isMobile ? 80 : 320;
  const iconSize = isMobile ? 65 : 130;
  const trackW = isMobile ? 150 : 320;
  const trackH = isMobile ? 300 : 460;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const next = useCallback(() => setCounter((c) => c + 1), []);

  const prev = useCallback(() => setCounter((c) => c - 1), []);

  const goTo = useCallback((target: number) => {
    setCounter((c) => {
      const cur = c % areas.length;
      let diff = target - cur;
      if (diff > areas.length / 2) diff -= areas.length;
      else if (diff < -areas.length / 2) diff += areas.length;
      return c + diff;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next();
        else prev();
      }
    },
    [next, prev],
  );

  return (
    <section id="program" className="relative py-20 md:py-32 px-4 md:px-6">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scaleX(1); }
          50% { opacity: 0.9; transform: scaleX(1.4); }
        }
      `}</style>
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">/ Program</span>
            <h2 className="mt-4 text-3xl md:text-6xl font-bold tracking-tight max-w-2xl leading-[1.05]">
              Six areas of <span className="text-gradient">work</span>.
            </h2>
          </div>
        </div>

        <div
          className="flex items-center justify-center h-[420px] md:h-[560px] select-none max-w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="absolute w-[260px] h-[260px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(133, 97, 197, 0.15) 0%, rgba(198, 113, 175, 0.08) 40%, transparent 65%)",
            }}
          />

          <div
            className="relative"
            style={{ width: trackW, height: trackH }}
          >
            {areas.map((a, i) => {
              const angle = (i - counter) * STEP;
              const norm = Math.abs((((angle % 360) + 540) % 360) - 180);

              let opacity: number;
              let scaleFactor: number;
              let clickable = false;

              if (norm <= 30) {
                opacity = 1;
                scaleFactor = 1;
                clickable = true;
              } else if (norm <= 90) {
                opacity = 0.7 - ((norm - 30) / 60) * 0.35;
                scaleFactor = 0.9 - ((norm - 30) / 60) * 0.2;
                clickable = true;
              } else if (norm <= 150) {
                opacity = 0.35 - ((norm - 90) / 60) * 0.3;
                scaleFactor = 0.7 - ((norm - 90) / 60) * 0.2;
                clickable = false;
              } else {
                opacity = 0;
                scaleFactor = 0.5;
                clickable = false;
              }

              const zIndex = norm > 150 ? 0 : Math.round((1 - norm / 180) * 10);

              return (
                <button
                  key={a.title}
                  onClick={() => goTo(i)}
                  className={`absolute inset-0 flex flex-col items-center justify-center focus:outline-none ${clickable ? "cursor-pointer" : "cursor-default"}`}
                  style={{
                    transform: `perspective(1000px) rotateY(${angle}deg) translateZ(${RADIUS}px) rotateY(${-angle}deg) scale(${scaleFactor})`,
                    opacity,
                    zIndex,
                    pointerEvents: clickable ? "auto" : "none",
                    backfaceVisibility: "hidden",
                    transition: "transform 0.9s ease-in-out, opacity 0.9s ease-in-out",
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center"
                    style={{
                      animation: `float 4s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  >
                    <Image src={a.img} alt={a.title} width={iconSize} height={iconSize} className="shrink-0" />
                    <div className="mt-3 md:mt-5 text-center">
                      <div className="text-[10px] md:text-xs text-muted-foreground mb-0.5 md:mb-1">0{i + 1}</div>
                      <h3 className="text-sm md:text-xl font-semibold leading-tight">{a.title}</h3>
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-5 md:-bottom-6 md:w-36 md:h-7 rounded-full pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(198, 113, 175, 0.5) 0%, transparent 70%)",
                      filter: "blur(3px)",
                      animation: `glow 4s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
