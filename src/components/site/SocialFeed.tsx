"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { socialPosts } from "@/data/social-feed";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function ArrowButton({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  const Icon = dir === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
      style={{ [dir]: "-16px" }}
      aria-label={dir === "left" ? "Previous post" : "Next post"}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

function SocialCard({ post, index, isActive }: { post: typeof socialPosts[number]; index: number; isActive: boolean }) {
  const firstImage = post.images[0];
  const isMultiImage = post.images.length > 1;

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      data-card
      className={`group shrink-0 snap-center px-2 md:px-3 transition-all duration-500 block ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-40"
      }`}
      style={{ width: "clamp(280px, 32vw, 360px)" }}
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/30 transition-all duration-500 hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
          <img
            src={firstImage}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          {isMultiImage && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-white/80 font-medium">
              +{post.images.length - 1} photos
            </div>
          )}
        </div>

        <div className="p-4 md:p-5">
          <p className="text-xs text-white/40 mb-2">{formatDate(post.date)}</p>
          <p className="text-sm md:text-base text-white/80 leading-relaxed line-clamp-3">
            {post.message}
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-xs text-cyan-400/70 font-medium group-hover:text-cyan-400 transition-colors">
            Read on Facebook
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </a>
  );
}

export function SocialFeed() {
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
      requestAnimationFrame(() => {
        const retry = el.querySelectorAll<HTMLElement>("[data-card]");
        const fc = retry[0];
        if (!fc) return;
        setSpacerWidth(Math.max(0, (el.clientWidth - fc.offsetWidth) / 2 - fc.offsetLeft));
        el.scrollLeft = 0;
      });
      return;
    }
    setSpacerWidth(Math.max(0, (el.clientWidth - firstCard.offsetWidth) / 2 - firstCard.offsetLeft));
    el.scrollLeft = 0;
  }, []);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const total = socialPosts.length;
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
    }, 4000);
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
    <section id="social" className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 md:mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Social
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              From the <span className="text-gradient">feed</span>.
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
            {socialPosts.map((post, i) => (
              <SocialCard key={post.id} post={post} index={i} isActive={i === activeIndex} />
            ))}
            <div className="shrink-0" style={{ width: spacerWidth }} />
          </div>

          <div className="pointer-events-none absolute inset-y-0 -left-6 w-12 md:w-20 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 -right-6 w-12 md:w-20 bg-gradient-to-l from-black via-black/80 to-transparent" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
        {socialPosts.map((post, i) => (
          <button
            key={post.id}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to post ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
