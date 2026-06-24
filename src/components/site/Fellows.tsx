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
  city: string;
  country: string;
  x: number;
  y: number;
  imageScale?: number;
  imagePosition?: string;
}

export const fellows: Fellow[] = [
  { img: "/fellows/Carrisa Tehputri.jpeg", name: "Carrisa Tehputri", quote: "ASEAN must decide: act independently — or rise as one.", city: "Jakarta", country: "Indonesia", x: 43, y: 67 },
  { img: "/fellows/Jupiter Cabig Jr.jpg", name: "Jupiter D. Cabig Jr.", quote: "Government can shape vibrant AI startup ecosystems.", city: "Manila", country: "Philippines", x: 56, y: 36 },
  { img: "/fellows/Dylan Joseph Gonzales.jpg", name: "Dylan Joseph Gonzales", quote: "AI is multisectoral — and must be ethical for community.", city: "Manila", country: "Philippines", x: 50, y: 40 },
  { img: "/fellows/41 Trang Nguyen.jpg", name: "Nguyen Thi Huyen Trang", quote: "Governance and workforce adaptation must move in parallel.", city: "Hanoi", country: "Vietnam", x: 25, y: 24 },
  { img: "/fellows/Shine_Min_Kha_photo.jpg", name: "Shine Min Kha", quote: "Leadership is the key skill of the AI-driven era.", city: "Yangon", country: "Myanmar", x: 10, y: 14 },
  { img: "/fellows/Ahmad Habibulloh.jpg", name: "Ahmad Habibulloh", quote: "AI governance must serve communities across ASEAN.", city: "Taipei", country: "Taiwan", x: 12, y: 10 },
  { img: "/fellows/Hanazel Superal.png", name: "Hanazel Superal", quote: "Technology should bridge gaps, not widen them.", city: "Manila", country: "Philippines", x: 60, y: 42 },
  { img: "/fellows/Lee Zhao Yi Charles.jpeg", name: "Lee Zhao Yi Charles", quote: "Building AI that reflects our shared humanity.", city: "Singapore", country: "Singapore", x: 24, y: 57 },
  { img: "/fellows/Rustam Shariq Mujtaba.jpg", name: "Rustam Shariq Mujtaba", quote: "Policy and innovation must evolve together.", city: "Singapore", country: "Singapore", x: 27, y: 60 },
  { img: "/fellows/Yu Wai Wai Khine.jpeg", name: "Yu Wai Wai Khine", quote: "Inclusive AI starts with diverse voices.", city: "Bangkok", country: "Thailand", x: 15, y: 20, imageScale: 1.5, imagePosition: "center 30%" },
];

export function flagPinSvg(country: string): string {
  const size = 28;
  const flag = (paths: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 28 28" style="flex-shrink:0;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3))">
      <defs><clipPath id="pin-${country}"><circle cx="14" cy="12" r="11" /></clipPath></defs>
      <g clip-path="url(#pin-${country})">${paths}</g>
      <circle cx="14" cy="12" r="11" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
      <path d="M14 24 Q10 18 8 14 Q6 10 8 7 Q10 4 14 4 Q18 4 20 7 Q22 10 20 14 Q18 18 14 24Z" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" transform="translate(0,1)" />
    </svg>`;

  switch (country) {
    case "Indonesia": return flag('<rect x="3" y="7" width="22" height="5" fill="#CE1126"/><rect x="3" y="12" width="22" height="5" fill="#fff"/>');
    case "Philippines": return flag('<rect x="3" y="7" width="22" height="5" fill="#0038A8"/><rect x="3" y="12" width="22" height="5" fill="#CE1126"/><polygon points="3,7 14,12 3,17" fill="#fff"/>');
    case "Vietnam": return flag('<rect x="3" y="7" width="22" height="10" fill="#DA251D"/><polygon points="14,8 15.5,11.5 19,11.5 16.5,14 17.5,17.5 14,15.5 10.5,17.5 11.5,14 9,11.5 12.5,11.5" fill="#FFFF00"/>');
    case "Myanmar": return flag('<rect x="3" y="7" width="22" height="3.33" fill="#FECB00"/><rect x="3" y="10.33" width="22" height="3.33" fill="#34B233"/><rect x="3" y="13.66" width="22" height="3.34" fill="#EA2839"/>');
    case "Taiwan": return flag('<rect x="3" y="7" width="22" height="10" fill="#FE0000"/><rect x="3" y="7" width="11" height="5" fill="#000095"/><circle cx="8.5" cy="9.5" r="2.5" fill="#fff"/><path d="M8.5 7.5 L9 9 L10.5 9 L9.5 10 L10 11.5 L8.5 10.5 L7 11.5 L7.5 10 L6.5 9 L8 9 Z" fill="#fff"/>');
    case "Singapore": return flag('<rect x="3" y="7" width="22" height="5" fill="#ED2939"/><rect x="3" y="12" width="22" height="5" fill="#fff"/><circle cx="8" cy="9.5" r="2.5" fill="#fff"/><circle cx="8" cy="9.5" r="1.8" fill="#ED2939"/>');
    case "Thailand": return flag('<rect x="3" y="7" width="22" height="2" fill="#00247D"/><rect x="3" y="9" width="22" height="2" fill="#fff"/><rect x="3" y="11" width="22" height="2" fill="#CE1126"/><rect x="3" y="13" width="22" height="2" fill="#fff"/><rect x="3" y="15" width="22" height="2" fill="#00247D"/>');
    default: return "";
  }
}

function FlagPin({ country }: { country: string }) {
  const size = 28;
  const cn = (paths: React.ReactNode) => (
    <svg width={size} height={size} viewBox="0 0 28 28" className="shrink-0 drop-shadow-lg">
      <defs>
        <clipPath id={`pin-${country}`}>
          <circle cx={14} cy={12} r={11} />
        </clipPath>
      </defs>
      <g clipPath={`url(#pin-${country})`}>
        {paths}
      </g>
      <circle cx={14} cy={12} r={11} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={1} />
      <path d="M14 24 Q10 18 8 14 Q6 10 8 7 Q10 4 14 4 Q18 4 20 7 Q22 10 20 14 Q18 18 14 24Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={1} transform="translate(0,1)" />
    </svg>
  );

  switch (country) {
    case "Indonesia":
      return cn(
        <><rect x={3} y={7} width={22} height={5} fill="#CE1126" /><rect x={3} y={12} width={22} height={5} fill="#fff" /></>
      );
    case "Philippines":
      return cn(
        <><rect x={3} y={7} width={22} height={5} fill="#0038A8" /><rect x={3} y={12} width={22} height={5} fill="#CE1126" /><polygon points="3,7 14,12 3,17" fill="#fff" /></>
      );
    case "Vietnam":
      return cn(
        <><rect x={3} y={7} width={22} height={10} fill="#DA251D" /><polygon points="14,8 15.5,11.5 19,11.5 16.5,14 17.5,17.5 14,15.5 10.5,17.5 11.5,14 9,11.5 12.5,11.5" fill="#FFFF00" /></>
      );
    case "Myanmar":
      return cn(
        <><rect x={3} y={7} width={22} height={3.33} fill="#FECB00" /><rect x={3} y={10.33} width={22} height={3.33} fill="#34B233" /><rect x={3} y={13.66} width={22} height={3.34} fill="#EA2839" /></>
      );
    case "Taiwan":
      return cn(
        <><rect x={3} y={7} width={22} height={10} fill="#FE0000" /><rect x={3} y={7} width={11} height={5} fill="#000095" /><circle cx={8.5} cy={9.5} r={2.5} fill="#fff" /><path d="M8.5 7.5 L9 9 L10.5 9 L9.5 10 L10 11.5 L8.5 10.5 L7 11.5 L7.5 10 L6.5 9 L8 9 Z" fill="#fff" /></>
      );
    case "Singapore":
      return cn(
        <><rect x={3} y={7} width={22} height={5} fill="#ED2939" /><rect x={3} y={12} width={22} height={5} fill="#fff" /><circle cx={8} cy={9.5} r={2.5} fill="#fff" /><circle cx={8} cy={9.5} r={1.8} fill="#ED2939" /></>
      );
    case "Thailand":
      return cn(
        <><rect x={3} y={7} width={22} height={2} fill="#00247D" /><rect x={3} y={9} width={22} height={2} fill="#fff" /><rect x={3} y={11} width={22} height={2} fill="#CE1126" /><rect x={3} y={13} width={22} height={2} fill="#fff" /><rect x={3} y={15} width={22} height={2} fill="#00247D" /></>
      );
    default:
      return null;
  }
}

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
      style={{ width: "clamp(240px, 28vw, 320px)", scrollSnapStop: "always" }}
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
          <div className="flex items-center gap-1.5 mt-1">
            <FlagPin country={fellow.country} />
            <p className="text-[11px] md:text-xs text-white/60 font-light tracking-wide">{fellow.city}, {fellow.country}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center p-5 bg-black/60 backdrop-blur-[2px]"
        >
          <p className="text-xs md:text-sm text-white/90 italic leading-relaxed text-center font-light max-w-[90%]">
            &ldquo;{fellow.quote}&rdquo;
          </p>
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
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    const card = cards[clamped];
    if (!card) return;
    const target = card.offsetLeft - (el.clientWidth / 2 - card.offsetWidth / 2);
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: Math.max(0, Math.min(maxScroll, target)), behavior: "smooth" });
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
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 cursor-grab select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="shrink-0" style={{ width: spacerWidth }} />
          {fellows.map((f, i) => (
            <FellowCard key={f.name} fellow={f} index={i} isActive={i === activeIndex} />
          ))}
          <div className="shrink-0" style={{ width: spacerWidth }} />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-black via-black/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
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
      </div>
    </section>
  );
}
