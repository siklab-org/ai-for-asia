"use client";

function RotatingBlur({
  color,
  size,
  top,
  left,
  opacity,
  rotationSpeed,
  scaleMin,
  scaleMax,
  blurAmount,
}: {
  color: string;
  size: number;
  top: string;
  left: string;
  opacity: number;
  rotationSpeed: number;
  scaleMin: number;
  scaleMax: number;
  blurAmount: string;
}) {
  return (
    <div
      className="absolute pointer-events-none will-change-transform"
      style={{ top, left, width: size, height: size, opacity }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${color} 0%, transparent 50%)`,
          filter: `blur(${blurAmount})`,
          animation: `bg-rotate-scale ${rotationSpeed}s linear infinite`,
          ["--scale-min" as string]: scaleMin,
          ["--scale-max" as string]: scaleMax,
        }}
      />
    </div>
  );
}

function StaticWash({
  color,
  size,
  top,
  left,
  opacity,
  blurAmount,
}: {
  color: string;
  size: number;
  top: string;
  left: string;
  opacity: number;
  blurAmount: string;
}) {
  return (
    <div
      className="absolute pointer-events-none rounded-full will-change-transform"
      style={{ top, left, width: size, height: size, opacity }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 50%)`,
          filter: `blur(${blurAmount})`,
        }}
      />
    </div>
  );
}

export function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-background" />

      {/* Large rotating blur elements — CSS keyframes only, no scroll listener */}
      <RotatingBlur color="#0060BA" size={1200} top="-15%" left="-20%" opacity={0.7} rotationSpeed={35} scaleMin={0.85} scaleMax={1.2} blurAmount="80px" />
      <RotatingBlur color="#C671AF" size={1000} top="15%" left="50%" opacity={0.65} rotationSpeed={45} scaleMin={0.8} scaleMax={1.25} blurAmount="70px" />
      <RotatingBlur color="#8561C5" size={950} top="45%" left="-15%" opacity={0.6} rotationSpeed={40} scaleMin={0.85} scaleMax={1.15} blurAmount="75px" />
      <RotatingBlur color="#E39297" size={900} top="60%" left="55%" opacity={0.55} rotationSpeed={50} scaleMin={0.82} scaleMax={1.22} blurAmount="65px" />
      <RotatingBlur color="#336FCF" size={850} top="80%" left="5%" opacity={0.5} rotationSpeed={38} scaleMin={0.88} scaleMax={1.18} blurAmount="70px" />
      <RotatingBlur color="#C671AF" size={800} top="90%" left="60%" opacity={0.45} rotationSpeed={42} scaleMin={0.9} scaleMax={1.1} blurAmount="60px" />

      {/* Static color washes for consistent coverage */}
      <StaticWash color="#0060BA" size={800} top="5%" left="60%" opacity={0.35} blurAmount="90px" />
      <StaticWash color="#8561C5" size={700} top="30%" left="30%" opacity={0.3} blurAmount="80px" />
      <StaticWash color="#E39297" size={650} top="50%" left="80%" opacity={0.3} blurAmount="75px" />
      <StaticWash color="#336FCF" size={600} top="70%" left="40%" opacity={0.28} blurAmount="70px" />
      <StaticWash color="#C671AF" size={550} top="85%" left="25%" opacity={0.25} blurAmount="65px" />

      {/* Full-height brand gradient */}
      <div
        className="absolute inset-x-0 top-0 h-full"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,96,186,0.15) 15%, rgba(133,97,197,0.12) 35%, rgba(198,113,175,0.1) 55%, rgba(227,146,151,0.12) 75%, rgba(133,97,197,0.1) 90%, transparent 100%)",
        }}
      />

      <div className="absolute inset-0 grid-bg opacity-40" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0.05) 2px)",
          backgroundSize: "100% 3px",
        }}
      />

      <div className="absolute inset-0 noise opacity-[0.02] pointer-events-none" />
    </div>
  );
}
