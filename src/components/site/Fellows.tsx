"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Reveal } from "./Reveal";

export interface Fellow {
  img: string;
  name: string;
  quote: string;
  country: string;
  x: number;
  y: number;
}

export const fellows: Fellow[] = [
  { img: "/fellows/Carrisa Tehputri.jpeg", name: "Carrisa Tehputri", quote: "ASEAN must decide: act independently — or rise as one.", country: "Indonesia", x: 43, y: 67 },
  { img: "/fellows/Jupiter Cabig Jr.jpg", name: "Jupiter D. Cabig Jr.", quote: "Government can shape vibrant AI startup ecosystems.", country: "Philippines", x: 56, y: 36 },
  { img: "/fellows/Dylan Joseph Gonzales.jpg", name: "Dylan Joseph Gonzales", quote: "AI is multisectoral — and must be ethical for community.", country: "Philippines", x: 50, y: 40 },
  { img: "/fellows/41 Trang Nguyen.jpg", name: "Nguyen Thi Huyen Trang", quote: "Governance and workforce adaptation must move in parallel.", country: "Vietnam", x: 25, y: 24 },
  { img: "/fellows/Shine_Min_Kha_photo.jpg", name: "Shine Min Kha", quote: "Leadership is the key skill of the AI-driven era.", country: "Myanmar", x: 10, y: 14 },
  { img: "/fellows/Ahmad Habibulloh.jpg", name: "Ahmad Habibulloh", quote: "AI governance must serve communities across ASEAN.", country: "Taiwan", x: 12, y: 10 },
  { img: "/fellows/Hanazel Superal.png", name: "Hanazel Superal", quote: "Technology should bridge gaps, not widen them.", country: "Philippines", x: 60, y: 42 },
  { img: "/fellows/Lee Zhao Yi Charles.jpeg", name: "Lee Zhao Yi Charles", quote: "Building AI that reflects our shared humanity.", country: "Singapore", x: 24, y: 57 },
  { img: "/fellows/Rustam Shariq Mujtaba.jpg", name: "Rustam Shariq Mujtaba", quote: "Policy and innovation must evolve together.", country: "Singapore", x: 27, y: 60 },
  { img: "/fellows/Yu Wai Wai Khine.jpeg", name: "Yu Wai Wai Khine", quote: "Inclusive AI starts with diverse voices.", country: "Thailand", x: 15, y: 20 },
];

function FellowRow({ fellow, index }: { fellow: Fellow; index: number }) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} min-h-[500px] lg:min-h-[600px]`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden bg-white/[0.02]">
        <Image
          src={fellow.img}
          alt={fellow.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-[900ms] ease-out group-hover:scale-105"
          style={{ objectPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-1/0 via-brand-3/0 to-brand-5/0 transition-all duration-700 group-hover:from-brand-1/15 group-hover:via-brand-3/10 group-hover:to-brand-5/10" />
      </div>

      {/* Text */}
      <div className="relative w-full md:w-1/2 flex items-center px-8 lg:px-20 xl:px-24 py-16 md:py-20">
        <div className="flex flex-col gap-10 lg:gap-14">
          {/* Quote */}
          <div className="space-y-1">
            <div className="text-[100px] lg:text-[140px] leading-none font-bold bg-gradient-to-b from-white/[0.07] to-white/[0.02] bg-clip-text text-transparent select-none -mb-6 lg:-mb-8">
              &ldquo;
            </div>
            <p className="text-2xl lg:text-4xl leading-[1.15] italic font-[450] max-w-lg text-white/90">
              {fellow.quote}
            </p>
          </div>

          {/* Divider accent */}
          <div className="h-px w-16 bg-gradient-to-r from-brand-1 via-brand-3 to-brand-5 transition-all duration-700 group-hover:w-32 group-hover:shadow-[0_0_25px_-5px_rgba(133,97,197,0.4)]" />

          {/* Name */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white">
              {fellow.name}
            </h3>
            <p className="text-base lg:text-lg text-muted-foreground/80 italic mt-1.5">
              {fellow.country}
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/50 mt-4 font-medium">
              Fellow &middot; 2025
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Fellows() {
  return (
    <section id="fellows" className="relative py-32 md:py-40">
      {/* Header */}
      <div className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Outstanding Fellows &middot; 2025
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
              Voices shaping <span className="text-gradient">tomorrow</span>.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Spreads */}
      <div className="space-y-20 md:space-y-28">
        {fellows.map((f, i) => (
          <FellowRow key={f.name} fellow={f} index={i} />
        ))}
      </div>
    </section>
  );
}
