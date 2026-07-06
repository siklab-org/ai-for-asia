"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Reveal } from "./Reveal";

interface UpcomingSpeaker {
  img: string;
  name: string;
  role: string;
  logo: string;
  bio: string;
}

/* ─── Data ─────────────────────────────────────────────── */

const placeholders: (UpcomingSpeaker | undefined)[] = Array.from({ length: 8 });

/* ─── Card ─────────────────────────────────────────────── */

function UpcomingSpeakerCard({
  speaker,
  index,
  onSelect,
}: {
  speaker: UpcomingSpeaker | undefined;
  index: number;
  onSelect: (s: UpcomingSpeaker) => void;
}) {
  /* Placeholder — no speaker data yet */
  if (!speaker || !speaker.bio) {
    return (
      <Reveal delay={(index % 4) * 0.06}>
        <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass border-gradient hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-brand opacity-10 group-hover:opacity-25 transition-opacity duration-500" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 shimmer" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="h-12 w-12 rounded-full bg-gradient-brand animate-gradient pulse-glow mb-4" />
            <div className="text-sm font-semibold tracking-wide">To be announced</div>
            <div className="text-xs text-muted-foreground mt-1">2026 Cohort</div>
          </div>
          <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            0{index + 1}
          </div>
        </div>
      </Reveal>
    );
  }

  /* Real speaker */
  return (
    <Reveal delay={(index % 4) * 0.06}>
      <motion.div
        whileHover={{ y: -6 }}
        onClick={() => onSelect(speaker)}
        className="relative h-[450px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer group"
      >
        {/* Portrait */}
        <div className="absolute inset-0">
          <Image
            src={speaker.img}
            alt={speaker.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Hover dim */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

        {/* CTA pill — "View bio" */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <div className="glass rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 shadow-lg">
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

        {/* Bottom text zone */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="text-sm font-semibold leading-tight truncate text-white">
            {speaker.name}
          </div>
          <div className="text-xs text-white/60 mt-1 truncate">
            {speaker.role}
          </div>
          <div className="mt-3">
            <div className="inline-flex items-center bg-white/[0.35] backdrop-blur-md rounded-lg px-3 py-2.5 border border-white/20 shadow-sm">
              <div className="relative h-10 w-[130px]">
                <Image
                  src={speaker.logo}
                  alt=""
                  fill
                  sizes="130px"
                  className="object-contain drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.3)]"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

/* ─── Speaker Modal ────────────────────────────────────── */

function SpeakerModal({
  speaker,
  onClose,
}: {
  speaker: UpcomingSpeaker | null;
  onClose: () => void;
}) {
  /* Lock body scroll while open */
  useEffect(() => {
    if (!speaker) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [speaker]);

  /* Close on Escape */
  useEffect(() => {
    if (!speaker) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [speaker, onClose]);

  return (
    <AnimatePresence>
      {speaker && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[85vh] flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-black/40 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-colors"
              aria-label="Close modal"
            >
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Left — Portrait */}
            <div className="relative w-full md:w-[45%] min-h-[260px] md:min-h-[400px]">
              <Image
                src={speaker.img}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Right — Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {speaker.name}
                </h3>
                <p className="text-sm text-white/50 mt-1">{speaker.role}</p>
              </div>

{/* Logo */}
              <div className="mt-4">
            <div className="inline-flex items-center bg-black/60 rounded-lg px-3 py-2.5 border border-white/20 shadow-sm">
                  <div className="relative h-9 w-[140px]">
                    <Image
                      src={speaker.logo}
                      alt=""
                      fill
                      sizes="140px"
                      className="object-contain drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                </div>
              </div>

              <hr className="my-5 border-white/10" />

              {/* Bio */}
              <p className="text-sm text-white/70 leading-relaxed">
                {speaker.bio}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Section ──────────────────────────────────────────── */

export function UpcomingSpeakers() {
  const [selectedSpeaker, setSelectedSpeaker] =
    useState<UpcomingSpeaker | null>(null);

  return (
    <>
      <section id="upcoming" className="relative py-32 px-6 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <Reveal>
                <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
                  / Upcoming Speakers · 2026
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
                  New voices, <span className="text-gradient">soon</span>.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-muted-foreground max-w-xl">
                  The 2026 cohort brings in a new class of speakers; founders
                  building AI tools in Southeast Asia, policymakers at the table
                  where decisions get made, and researchers asking the questions
                  that matter. Lineup dropping soon.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <a
                href="mailto:hello@aiforasean.org?subject=Speaker%20interest"
                className="glass rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Suggest a speaker →
              </a>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {placeholders.map((s, i) => (
              <UpcomingSpeakerCard
                key={i}
                speaker={s}
                index={i}
                onSelect={setSelectedSpeaker}
              />
            ))}
          </div>
        </div>
      </section>

      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </>
  );
}
