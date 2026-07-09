"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface Advisor {
  img: string;
  name: string;
  role: string;
  badge: string;
  logo: string;
  bio: string;
}

const advisors: Advisor[] = [
  {
    img: "",
    name: "Morteza Mollanaghi",
    role: "Strategic Advisor | Technology, Governance & Organisational Transformation",
    badge: "Lead Strategic Advisor",
    logo: "/speaker-logos/oversight-board.svg",
    bio: "Morteza Mollanaghi advises leaders on the intersection of technology, governance, and organisational transformation. Having built and scaled organisations across more than 20 countries, he brings deep expertise in strategy execution, organisational design, leadership, and enterprise risk. Over a 20-year career, he has worked closely with CEOs, Boards, and Founders to help organisations navigate growth, complexity, and change. His particular interest lies in the governance challenges created by emerging technologies, especially artificial intelligence, and the institutional frameworks needed to ensure innovation strengthens rather than weakens democratic society. Morteza is also the author of Help Is On The Way and is currently writing a second book on the opportunities and risks AI presents for democracy, work, and human agency.",
  },
  {
    img: "/sherwin.png",
    name: "Sherwin Pelayo",
    role: "Executive Director, Analytics & AI Association of the Philippines",
    badge: "Board of Adviser",
    logo: "/speaker-logos/aap.svg",
    bio: "Sherwin Pelayo is the Executive Director of the Analytics & Artificial Intelligence Association of the Philippines (AAP) and the Skills Development Lead of the Private Sector Jobs and Skills Corporation (PCORP). He is also the Chair of CHED's Technical Panel on AI and Data Analytics. In these roles, he drives national strategies on AI, analytics, education, and workforce development. He leads initiatives that shape industry standards, support policy development, and position the Philippines as a global leader in technology and innovation. He also champions programs such as the Philippine Skills Framework for Analytics & AI and the National AI Upskilling Roadmap to equip Filipinos with the skills needed to thrive in an AI-powered world.",
  },
];

function AdvisorCard({
  advisor,
  index,
  onSelect,
}: {
  advisor: Advisor;
  index: number;
  onSelect: (a: Advisor) => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onSelect(advisor)}
      className="relative h-[520px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer group"
    >
      {/* Portrait or placeholder */}
      <div className="absolute inset-0">
        {advisor.img ? (
          <Image
            src={advisor.img}
            alt={advisor.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
            <span className="text-6xl font-bold text-white/20 tracking-tighter select-none">
              {advisor.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
        )}
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
        <div className="text-xl font-bold leading-tight text-white">
          {advisor.name}
        </div>
        <div className="text-sm text-white/70 mt-1">
          {advisor.role}
        </div>
        <div className="mt-4">
          <div className="inline-flex items-center bg-white/[0.4] backdrop-blur-md rounded-xl px-4 py-3 border border-white/25 shadow-lg">
            <div className="relative h-10 w-[130px]">
              <Image
                src={advisor.logo}
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
          {advisor.badge}
        </div>
      </div>
    </motion.div>
  );
}

function AdvisorModal({
  advisor,
  onClose,
}: {
  advisor: Advisor | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!advisor) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [advisor]);

  useEffect(() => {
    if (!advisor) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [advisor, onClose]);

  return (
    <AnimatePresence>
      {advisor && (
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
              {advisor.img ? (
                <Image
                  src={advisor.img}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
                  <span className="text-7xl font-bold text-white/10 tracking-tighter select-none">
                    {advisor.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Right — Content */}
            <div className="flex-1 p-7 md:p-9 flex flex-col overflow-y-auto">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                  {advisor.badge}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {advisor.name}
                </h3>
                <p className="text-sm text-white/50 mt-2">{advisor.role}</p>
              </div>

              {/* Logo */}
              <div className="mt-5">
                <div className="inline-flex items-center bg-black/60 rounded-xl px-4 py-3 border border-white/25 shadow-lg">
                  <div className="relative h-10 w-[140px]">
                    <Image
                      src={advisor.logo}
                      alt=""
                      fill
                      sizes="140px"
                      className="object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                    />
                  </div>
                </div>
              </div>

              <hr className="my-6 border-white/10" />

              <p className="text-sm text-white/70 leading-relaxed">
                {advisor.bio}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Advisors() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);

  return (
    <>
      <section id="advisors" className="relative py-32 px-6 overflow-hidden">

        <div className="relative mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
              / Board of Advisers
            </span>
            <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Guided by{" "}
              <span className="text-gradient">experience</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
              Leaders who help shape the direction of AI for Asia.
            </p>
          </div>

          {/* Cards — centered 2-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {advisors.map((a, i) => (
              <AdvisorCard
                key={a.name}
                advisor={a}
                index={i}
                onSelect={setSelectedAdvisor}
              />
            ))}
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
            <div className="w-2 h-2 rounded-full bg-gradient-brand" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>
      </section>

      <AdvisorModal
        advisor={selectedAdvisor}
        onClose={() => setSelectedAdvisor(null)}
      />
    </>
  );
}