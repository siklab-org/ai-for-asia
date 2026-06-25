"use client";

import { useScroll, useTransform, motion } from "motion/react";

interface WashData {
  color: string; w: string; h: string; x: string; y: string;
  side: "left" | "right"; parallax: number;
}

const washes: WashData[] = [
  { color: "rgba(0,96,186,0.12)", w: "65%", h: "55%", x: "10%",  y: "0%",    side: "left",  parallax: 180 },
  { color: "rgba(198,113,175,0.08)", w: "50%", h: "50%", x: "8%",   y: "4%",    side: "right", parallax: 140 },
  { color: "rgba(133,97,197,0.10)", w: "48%", h: "42%", x: "12%",  y: "18%",   side: "right", parallax: 240 },
  { color: "rgba(227,146,151,0.09)", w: "55%", h: "40%", x: "6%",   y: "28%",   side: "left",  parallax: 160 },
  { color: "rgba(51,111,207,0.09)", w: "50%", h: "48%", x: "10%",  y: "40%",   side: "right", parallax: 200 },
  { color: "rgba(198,113,175,0.07)", w: "45%", h: "40%", x: "8%",   y: "48%",   side: "left",  parallax: 170 },
  { color: "rgba(227,146,151,0.07)", w: "50%", h: "50%", x: "12%",  y: "58%",   side: "right", parallax: 220 },
  { color: "rgba(133,97,197,0.07)", w: "50%", h: "48%", x: "10%",  y: "68%",   side: "left",  parallax: 190 },
  { color: "rgba(0,96,186,0.07)", w: "48%", h: "42%", x: "8%",   y: "78%",   side: "right", parallax: 210 },
  { color: "rgba(198,113,175,0.06)", w: "50%", h: "45%", x: "6%",   y: "88%",   side: "left",  parallax: 150 },
  { color: "rgba(227,146,151,0.06)", w: "50%", h: "48%", x: "10%",  y: "96%",   side: "right", parallax: 230 },
];

function Wash({ color, w, h, x, y, side, parallax }: WashData) {
  const { scrollY } = useScroll();
  const offset = useTransform(scrollY, [0, 15000], [0, -parallax], { clamp: true });

  return (
    <motion.div
      style={{ y: offset, top: y, [side]: x, width: w, height: h }}
      className="absolute pointer-events-none"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${color} 0%, transparent 65%)`,
        }}
      />
    </motion.div>
  );
}

export function BackgroundAtmosphere() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 15000], [0, -1800], { clamp: true });
  const streakOpacity = useTransform(scrollY, [0, 3000, 12000, 15000], [1, 1, 0.5, 0.3], { clamp: true });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-background" />

      {/* Micro dot grid — consistent full-page texture */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.025,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Parallax tall container — spans full scroll height */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-0 left-0 right-0"
      >
        <div className="relative w-full" style={{ height: "15000px" }}>
          {washes.map((wash, i) => (
            <Wash key={i} {...wash} />
          ))}

          {/* Color streak running the full length */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-px"
            style={{
              height: "100%",
              background: "linear-gradient(to bottom, transparent 0%, rgba(0,96,186,0.06) 10%, rgba(133,97,197,0.06) 30%, rgba(198,113,175,0.04) 50%, rgba(227,146,151,0.06) 70%, transparent 88%)",
            }}
          />
        </div>
      </motion.div>

      {/* Subtle scan-line texture */}
      <div
        className="absolute inset-0 opacity-[0.012] mix-blend-overlay"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.04) 1px, rgba(255,255,255,0.04) 2px)`,
          backgroundSize: "100% 3px",
        }}
      />

      {/* Edge fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-40" />

      {/* Noise grain */}
      <div className="absolute inset-0 noise opacity-[0.015]" />
    </div>
  );
}
