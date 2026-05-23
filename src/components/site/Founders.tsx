"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Reveal } from "./Reveal";

interface Founder {
  img: string;
  name: string;
  role: string;
  logo: string;
  bio: string;
}

const founders: Founder[] = [
  {
    img: "/scraped/spk-saje.png",
    name: "Saje Molato",
    role: "Co-Founder, AI for Asia",
    logo: "/speaker-logos/siklab.png",
    bio: "CEO and Founder of Siklab Pilipinas, empowering Filipino youth through leadership and social entrepreneurship. Having worked with over 6,000 young people in partnership with UNICEF, USAID, and The Asia Foundation, he is a recognized social entrepreneur, Misk 20 under 30 awardee, and co-founder of AI for Asia.",
  },
  {
    img: "/scraped/spk-edward.png",
    name: "Edward Yee",
    role: "Co-Founder, AI for Asia",
    logo: "/speaker-logos/aiforasia.png",
    bio: "Head of Strategy and Growth at FAR.AI, one of the world's leading independent safety testing organizations for frontier AI models. A serial social entrepreneur (Givfunds, nsave), Rhodes Scholar, Forbes 30 Under 30 honoree, Obama Leader, Commonwealth Youth Award recipient, and co-founder of AI for Asia.",
  },
];

/* ─── Founder Card ─────────────────────────────────────── */

function FounderCard({
  founder,
  index,
  onSelect,
}: {
  founder: Founder;
  index: number;
  onSelect: (f: Founder) => void;
}) {
  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        onClick={() => onSelect(founder)}
        className="relative h-[520px] rounded-3xl overflow-hidden glass cursor-pointer group"
      >
        {/* Portrait — fills most of card */}
        <div className="absolute inset-0">
          <Image
            src={founder.img}
            alt={founder.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Strong gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        {/* Subtle brand glow on hover */}
        <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-15 transition-opacity duration-500" />

        {/* Hover dim */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

        {/* CTA pill */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="glass rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 shadow-xl border border-white/20">
              View bio
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom content zone */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Name */}
          <div className="text-xl font-bold leading-tight text-white">
            {founder.name}
          </div>

          {/* Role */}
          <div className="text-sm text-white/70 mt-1">
            {founder.role}
          </div>

          {/* Logo */}
          <div className="mt-4">
            <div className="inline-flex items-center bg-white/[0.4] backdrop-blur-md rounded-xl px-4 py-3 border border-white/25 shadow-lg">
              <div className="relative h-10 w-[130px]">
                <Image
                  src={founder.logo}
                  alt=""
                  fill
                  sizes="130px"
                  className="object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-4 left-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
            Co-Founder
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

/* ─── Founder Modal ────────────────────────────────────── */

function FounderModal({
  founder,
  onClose,
}: {
  founder: Founder | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!founder) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [founder]);

  useEffect(() => {
    if (!founder) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [founder, onClose]);

  return (
    <AnimatePresence>
      {founder && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[85vh] flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/15 bg-[#0a0a0f]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-black/50 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Left — Portrait */}
            <div className="relative w-full md:w-[45%] min-h-[280px] md:min-h-[450px]">
              <Image
                src={founder.img}
                alt={founder.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Right — Content */}
            <div className="flex-1 p-7 md:p-9 flex flex-col overflow-y-auto">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                  Co-Founder
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {founder.name}
                </h3>
                <p className="text-sm text-white/50 mt-2">{founder.role}</p>
              </div>

              {/* Logo */}
              <div className="mt-5">
                <div className="inline-flex items-center bg-white/[0.4] backdrop-blur-md rounded-xl px-4 py-3 border border-white/25 shadow-lg">
                  <div className="relative h-10 w-[140px]">
                    <Image
                      src={founder.logo}
                      alt=""
                      fill
                      sizes="140px"
                      className="object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                    />
                  </div>
                </div>
              </div>

              <hr className="my-6 border-white/10" />

              {/* Bio */}
              <p className="text-sm text-white/70 leading-relaxed">
                {founder.bio}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Section ──────────────────────────────────────────── */

export function Founders() {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  return (
    <>
      <section id="founders" className="relative py-32 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <div className="relative mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
                / Founders
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
                Meet the{" "}
                <span className="text-gradient">Founders</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
                The visionaries driving AI opportunity across Southeast Asia.
              </p>
            </Reveal>
          </div>

          {/* Cards — centered 2-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {founders.map((f, i) => (
              <FounderCard
                key={f.name}
                founder={f}
                index={i}
                onSelect={setSelectedFounder}
              />
            ))}
          </div>

          {/* Decorative divider */}
          <Reveal delay={0.3}>
            <div className="flex items-center justify-center gap-4 mt-16">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
              <div className="w-2 h-2 rounded-full bg-gradient-brand" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </Reveal>
        </div>
      </section>

      <FounderModal
        founder={selectedFounder}
        onClose={() => setSelectedFounder(null)}
      />
    </>
  );
}