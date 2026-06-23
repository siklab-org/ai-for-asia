"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

function ArrowButton({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  const Icon = dir === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
      style={{ [dir]: "-16px" }}
      aria-label={dir === "left" ? "Previous fellow" : "Next fellow"}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

function FellowCard({ fellow, index, isActive }: { fellow: Fellow; index: number; isActive: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia("(hover: none)").matches;
  }, []);

  const handleClick = useCallback(() => {
    if (isTouch.current) setHovered(p => !p);
  }, []);

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => !isTouch.current && setHovered(true)}
      onMouseLeave={() => !isTouch.current && setHovered(false)}
      data-card
      className={`group shrink-0 snap-center px-2 md:px-3 transition-all duration-500 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-40"
      }`}
      style={{ width: "clamp(240px, 28vw, 320px)" }}
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-xl">
        <Image
          src={fellow.img}
          alt={fellow.name}
          fill
          sizes="(max-width: 768px) 80vw, 320px"
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <p className="text-sm md:text-base font-semibold text-white leading-tight">{fellow.name}</p>
          <p className="text-xs text-white/50 italic mt-0.5">{fellow.country}</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center p-5 bg-black/60 backdrop-blur-[2px]"
        >
          <div className="relative">
            <span className="absolute -top-3 -left-2 text-cyan-400/30 text-2xl font-mono">&gt;</span>
            <p className="text-xs md:text-sm text-white/90 italic leading-relaxed text-center font-light max-w-[90%]">
              &ldquo;{fellow.quote}&rdquo;
            </p>
            <span className="absolute -bottom-3 -right-2 text-cyan-400/30 text-2xl font-mono">&lt;</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Fellows() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [spacerWidth, setSpacerWidth] = useState(0);
  const autoPlayRef = useRef(true);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    const firstCard = cards[0];
    if (!firstCard) {
      // cards not yet rendered, retry
      requestAnimationFrame(() => {
        const retry = el.querySelectorAll<HTMLElement>("[data-card]");
        const fc = retry[0];
        if (!fc) return;
        const w = Math.max(0, (el.clientWidth - fc.offsetWidth) / 2 - fc.offsetLeft);
        setSpacerWidth(w);
        el.scrollLeft = 0;
      });
      return;
    }

    const w = Math.max(0, (el.clientWidth - firstCard.offsetWidth) / 2 - firstCard.offsetLeft);
    setSpacerWidth(w);
    el.scrollLeft = 0;
  }, []);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const total = fellows.length;
    const clamped = ((index % total) + total) % total;
    el.querySelectorAll<HTMLElement>("[data-card]").forEach((card, i) => {
      if (i === clamped) {
        const target = card.offsetLeft - (el.clientWidth / 2 - card.offsetWidth / 2);
        el.scrollTo({ left: target, behavior: "smooth" });
      }
    });
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    const rect = el.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    let closestIdx = 0;
    let closestDist = Infinity;
    cards.forEach((card, i) => {
      const cr = card.getBoundingClientRect();
      const cc = cr.left + cr.width / 2;
      const dist = Math.abs(cc - center);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = i;
      }
    });
    setActiveIndex(closestIdx);
  }, []);

  useEffect(() => {
    if (!autoPlayRef.current) return;
    const id = setInterval(() => {
      if (!autoPlayRef.current) return;
      scrollTo(activeIndex + 1);
    }, 2000);
    return () => clearInterval(id);
  }, [activeIndex, scrollTo]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    const el = scrollRef.current;
    if (!el) return;
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    e.currentTarget.classList.add("cursor-grabbing");
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    el.scrollLeft = dragStart.current.scrollLeft - (e.clientX - dragStart.current.x);
  }, []);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    isDragging.current = false;
    e.currentTarget.classList.remove("cursor-grabbing");
  }, []);

  return (
    <section id="fellows" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 md:mb-20">
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

        <div className="relative">
          <div className="hidden md:block">
            <ArrowButton dir="left" onClick={() => scrollTo(activeIndex - 1)} />
            <ArrowButton dir="right" onClick={() => scrollTo(activeIndex + 1)} />
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={(e) => { handleMouseUp(e); autoPlayRef.current = true; }}
            onMouseEnter={() => { autoPlayRef.current = false; }}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 cursor-grab select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="shrink-0" style={{ width: spacerWidth }} />
            {fellows.map((f, i) => (
              <FellowCard key={f.name} fellow={f} index={i} isActive={i === activeIndex} />
            ))}
            <div className="shrink-0" style={{ width: spacerWidth }} />
          </div>

          <div className="pointer-events-none absolute inset-y-0 -left-6 w-12 md:w-20 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 -right-6 w-12 md:w-20 bg-gradient-to-l from-black via-black/80 to-transparent" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
        {fellows.map((f, i) => (
          <button
            key={f.name}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to fellow ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
