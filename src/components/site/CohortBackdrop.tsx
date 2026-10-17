"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";

const TOTAL = 25;
const DURATION = 6000;
const EASE = [0.4, 0, 0.2, 1] as const;

const frame = (n: number) => `/AIFORASIASLIDESHOW/${(n % TOTAL) + 1}.jpg`;

function ProgressBar({ index, playing }: { index: number; playing: boolean }) {
  const [step, setStep] = useState(0);
  const stepRef = useRef(0);

  useEffect(() => {
    if (!playing) return;
    const startedAt = performance.now() - stepRef.current * DURATION;
    let raf = 0;
    const tick = (now: number) => {
      const value = Math.min(1, (now - startedAt) / DURATION);
      stepRef.current = value;
      setStep(value);
      if (value < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const width = ((index + step) / TOTAL) * 100;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-white/[0.06]">
      <div
        className="bg-gradient-brand absolute inset-y-0 left-0 rounded-full"
        style={{ width: `${width}%` }}
      />
      <span
        className="absolute top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-[0_0_10px_2px_rgba(255,255,255,0.4)]"
        style={{ left: `${width}%` }}
      />
    </div>
  );
}

export function CohortBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { margin: "15% 0px 15% 0px" });
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  const playing = inView && !reduced;

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % TOTAL), DURATION);
    return () => window.clearInterval(id);
  }, [playing]);

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.07 }}
            animate={{ scale: 1 }}
            transition={{ duration: (DURATION + 1800) / 1000, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={frame(index)}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-50 blur-[2px] saturate-[1.15]"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/15 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_45%,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="noise absolute inset-0" />

      <ProgressBar key={index} index={index} playing={playing} />
    </div>
  );
}
