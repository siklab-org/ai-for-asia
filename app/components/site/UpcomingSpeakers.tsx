"use client";

import { useRef, useCallback, useState } from "react";
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

// When real speakers are announced, replace placeholders with entries
// that include a `bio`. Cards with a bio get the expand-on-hover treatment;
// entries without one render as inert placeholders.

const placeholders: (UpcomingSpeaker | undefined)[] = Array.from({ length: 8 });

/* ─── Card ─────────────────────────────────────────────── */

function UpcomingSpeakerCard({
  speaker,
  index,
}: {
  speaker: UpcomingSpeaker | undefined;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (leaveTimer.current !== null) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setExpanded(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setExpanded(false), 200);
  }, []);

  const handleClick = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const ease = [0.22, 1, 0.36, 1] as const;

  /* Placeholder — no speaker data yet */
  if (!speaker || !speaker.bio) {
    return (
      <Reveal delay={(index % 4) * 0.06}>
        <motion.div
          whileHover={{ y: -4 }}
          className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass border-gradient"
        >
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
        </motion.div>
      </Reveal>
    );
  }

  /* Real speaker — expandable card */
  return (
    <Reveal delay={(index % 4) * 0.06}>
      <motion.div
        layout
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        animate={{
          y: expanded ? -8 : 0,
          boxShadow: expanded
            ? "0 25px 60px -15px rgba(0, 0, 0, 0.5)"
            : "0 0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.5, ease }}
        className={`relative flex flex-col rounded-2xl overflow-hidden glass cursor-pointer ${
          expanded ? "z-20 shadow-2xl" : "z-10"
        }`}
      >
        {/* Portrait */}
        <div className="relative aspect-[3/4] shrink-0 overflow-hidden">
          <Image
            src={speaker.img}
            alt={speaker.name}
            fill
            className={`object-cover transition-all duration-700 ${
              expanded ? "scale-105" : ""
            }`}
          />
          <AnimatePresence>
            {expanded && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Text zone */}
        <div className="p-4 flex flex-col">
          <div className="text-sm font-semibold leading-tight truncate">{speaker.name}</div>
          <div className="text-xs text-muted-foreground mt-1 truncate">{speaker.role}</div>
          <div className="mt-3 relative h-[30px]">
            <Image src={speaker.logo} alt="" fill className="object-contain object-left" />
          </div>

          <AnimatePresence>
            {expanded && speaker.bio && (
              <motion.div
                key="bio"
                initial={{ opacity: 0, y: 8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 8, height: 0 }}
                transition={{ duration: 0.3, delay: 0.15, ease }}
                className="mt-3 pt-3 border-t border-white/10 overflow-hidden"
              >
                <p className="text-xs text-muted-foreground/90 leading-relaxed">
                  {speaker.bio}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Reveal>
  );
}

/* ─── Section ──────────────────────────────────────────── */

export function UpcomingSpeakers() {
  return (
    <section id="upcoming" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
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
                The next cohort welcomes a new lineup of leaders, founders, and policy
                experts shaping AI across the region. Announcements rolling out shortly.
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 overflow-visible">
          {placeholders.map((s, i) => (
            <UpcomingSpeakerCard key={i} speaker={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
