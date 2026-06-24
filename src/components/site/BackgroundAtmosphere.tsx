"use client";

import { useScroll, useTransform, motion } from "motion/react";

const orbs = [
  { color: "#0060BA", size: 480, top: "8%", left: "3%", dx: 50, dy: -40, dur: 14, shift: 40 },
  { color: "#8561C5", size: 384, top: "20%", left: "68%", dx: -45, dy: 35, dur: 18, shift: 60 },
  { color: "#C671AF", size: 400, top: "35%", left: "8%", dx: 40, dy: 45, dur: 16, shift: 30 },
  { color: "#336fCF", size: 320, top: "50%", left: "78%", dx: -35, dy: -30, dur: 20, shift: 80 },
  { color: "#E39297", size: 480, top: "65%", left: "2%", dx: 50, dy: 35, dur: 15, shift: 50 },
  { color: "#8561C5", size: 400, top: "82%", left: "70%", dx: -40, dy: -45, dur: 17, shift: 35 },
  { color: "#0060BA", size: 240, top: "45%", left: "45%", dx: 20, dy: -20, dur: 22, shift: 55 },
  { color: "#C671AF", size: 340, top: "95%", left: "20%", dx: 35, dy: 30, dur: 15, shift: 40 },
  { color: "#336fCF", size: 420, top: "110%", left: "80%", dx: -30, dy: -35, dur: 19, shift: 50 },
  { color: "#E39297", size: 360, top: "125%", left: "5%", dx: 45, dy: 40, dur: 13, shift: 45 },
  { color: "#8561C5", size: 300, top: "140%", left: "65%", dx: -50, dy: 25, dur: 18, shift: 35 },
  { color: "#0060BA", size: 440, top: "155%", left: "35%", dx: 30, dy: -45, dur: 16, shift: 55 },
  { color: "#C671AF", size: 380, top: "170%", left: "88%", dx: -25, dy: 35, dur: 21, shift: 40 },
  { color: "#E39297", size: 320, top: "185%", left: "12%", dx: 40, dy: -30, dur: 14, shift: 50 },
  { color: "#336fCF", size: 400, top: "200%", left: "55%", dx: -35, dy: 40, dur: 17, shift: 30 },
  { color: "#8561C5", size: 360, top: "215%", left: "75%", dx: 30, dy: -25, dur: 20, shift: 45 },
  { color: "#0060BA", size: 280, top: "230%", left: "25%", dx: -20, dy: 30, dur: 22, shift: 35 },
  { color: "#E39297", size: 380, top: "245%", left: "60%", dx: 35, dy: -35, dur: 15, shift: 50 },
  { color: "#C671AF", size: 340, top: "260%", left: "10%", dx: -40, dy: 25, dur: 18, shift: 40 },
];

const streaks = [
  { top: "15%", width: "40%", left: "10%", delay: 0 },
  { top: "45%", width: "30%", left: "55%", delay: 3 },
  { top: "75%", width: "35%", left: "20%", delay: 6 },
  { top: "105%", width: "28%", left: "70%", delay: 2 },
  { top: "130%", width: "38%", left: "15%", delay: 5 },
  { top: "160%", width: "32%", left: "60%", delay: 1 },
  { top: "190%", width: "36%", left: "30%", delay: 4 },
  { top: "215%", width: "30%", left: "80%", delay: 7 },
];

function Orb({
  color, size, top, left, dx, dy, dur, shift,
}: {
  color: string; size: number; top: string; left: string;
  dx: number; dy: number; dur: number; shift: number;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 12000], [0, shift * 2], { clamp: true });
  const opacity = useTransform(scrollY, [0, 6000, 12000], [0.35, 0.35, 0.18], { clamp: true });

  return (
    <motion.div style={{ y, top, left }} className="absolute">
      <motion.div
        animate={{ x: [0, dx, 0], y: [0, dy, 0] }}
        transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, ${color}00 70%)`,
          opacity,
          willChange: "transform",
        }}
      />
    </motion.div>
  );
}

function LightStreak({ top, width, left, delay }: { top: string; width: string; left: string; delay: number }) {
  return (
    <motion.div
      className="absolute h-px"
      style={{ top, left, width }}
      animate={{ opacity: [0, 0.15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent" />
    </motion.div>
  );
}

export function BackgroundAtmosphere() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 12000], [0, -2000], { clamp: true });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 grid-bg opacity-30" />

      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[1500vh] bg-gradient-to-b from-transparent via-[#0060BA]/[0.12] via-[#8561C5]/[0.10] via-[#336fCF]/[0.08] via-[#C671AF]/[0.10] via-[#E39297]/[0.12] to-transparent pointer-events-none" />

        {orbs.map((orb, i) => (
          <Orb key={i} {...orb} />
        ))}

        {streaks.map((s, i) => (
          <LightStreak key={i} {...s} />
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-40" />

      <div className="absolute inset-0 noise opacity-[0.03]" />
    </div>
  );
}
