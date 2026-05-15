"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Reveal } from "./Reveal";

interface Speaker {
  img: string;
  name: string;
  role: string;
  logo: string;
  bio: string;
}

const speakers: Speaker[] = [
  {
    img: "/scraped/spk-manuela.png",
    name: "Manuela Prina",
    role: "Asian Development Bank",
    logo: "/speaker-logos/adb.png",
    bio: "Principal Education Specialist at ADB, driving digital transformation and AI-enabled learning initiatives across Asia-Pacific. Previously Head of Skills Identification at the European Training Foundation, she has two decades shaping education policy, skills development, and human capital investment in over 25 countries.",
  },
  {
    img: "/scraped/spk-ming.png",
    name: "Ming Tan",
    role: "Tech for Good Institute",
    logo: "/speaker-logos/tgi.png",
    bio: "Founding Executive Director of Tech for Good Institute, a non-profit think tank examining the digital economy's social and policy dimensions across Southeast Asia. Also a Senior Fellow at NUS Centre for Governance and Sustainability and Advisor to COMO Group, her work sits at the intersection of technology, society, and sustainable innovation.",
  },
  {
    img: "/scraped/spk-kalika.png",
    name: "Kalika Bali",
    role: "Microsoft",
    logo: "/speaker-logos/microsoft.png",
    bio: "Senior Principal Researcher at Microsoft Research India, named to the TIME100 AI list for pioneering multilingual AI that serves underserved language communities. For over two decades she has advanced speech and NLP technology for low-resource languages, leading inclusive AI initiatives like Project VeLLM and Shiksha Copilot.",
  },
  {
    img: "/scraped/spk-roger.png",
    name: "Roger Chao",
    role: "ASEAN Secretariat",
    logo: "/speaker-logos/asean.png",
    bio: "Assistant Director and Head of Education, Youth, and Sports at the ASEAN Secretariat, driving regional policy on education reform, youth empowerment, and skills development across ten member states. He leads initiatives strengthening ASEAN's higher education space, TVET systems, and youth participation in community building.",
  },
  {
    img: "/scraped/spk-dinh.png",
    name: "Dinh-Long Pham",
    role: "UNDP",
    logo: "/speaker-logos/undp.png",
    bio: "Youth Social Entrepreneurship and Innovation Coordinator at UNDP Asia-Pacific, facilitating Youth Co:Lab — the largest youth social entrepreneurship movement in the region. A French-Vietnamese community builder, podcast host, and climate advocate, he empowers young changemakers across Asia to build social impact ventures.",
  },
  {
    img: "/scraped/spk-geraldine.png",
    name: "Geraldine Becchi",
    role: "UN Volunteers",
    logo: "/speaker-logos/unv.png",
    bio: "Partnerships Team Lead at United Nations Volunteers (UNV) in Bonn, mobilizing volunteerism for peace and development worldwide. With two decades of experience across UNDP and UNV in governance, disaster risk reduction, and partnership strategy across Latin America, Africa, Europe, and Asia.",
  },
  {
    img: "/scraped/spk-sudhanshu.png",
    name: "Sudhanshu Kasewa",
    role: "80,000 hours",
    logo: "/speaker-logos/80000-hours.png",
    bio: "Advisor at 80,000 Hours, helping individuals navigate careers with high positive impact, particularly in AI safety and governance. A former DPhil researcher at the Oxford Robotics Institute specializing in deep reinforcement learning, he now guides the next generation of talent toward the world's most pressing challenges.",
  },
  {
    img: "/scraped/spk-cyrus.png",
    name: "Cyrus Hodes",
    role: "AI Safety Governance",
    logo: "/speaker-logos/aisafety.png",
    bio: "Founder of AI Safety Connect and co-founder of Stability AI, Cyrus is an international AI strategist and governance expert. A Venture Partner at Lionheart Ventures and former Advisor to the UAE Minister of AI, he has shaped global AI governance through the OECD, GPAI, and the Future Society at Harvard Kennedy School.",
  },
  {
    img: "/scraped/spk-megan.png",
    name: "Megan Robert",
    role: "UNDP",
    logo: "/speaker-logos/undp.png",
    bio: "Digital Development Engagement and Positioning Manager at UNDP, driving digital transformation and AI innovation for sustainable development across Asia-Pacific. Previously Interim Managing Director at GMF Digital and Director of Policy Planning at the UN Foundation, she brings deep expertise in technology policy and multilateral cooperation.",
  },
  {
    img: "/scraped/spk-katrina.png",
    name: "Katrina Kalcic",
    role: "University of Oxford",
    logo: "/speaker-logos/oxford.png",
    bio: "Public policy researcher at the University of Oxford specializing in AI governance and its implications for emerging economies. Her work explores the equitable governance of frontier AI technologies — compute, data, and algorithms — to prevent deepening global inequality.",
  },
  {
    img: "/scraped/spk-liew.png",
    name: "Dr. Liew Voon Kiong",
    role: "Grafilab · Malaysia",
    logo: "/speaker-logos/grafilab.png",
    bio: "Founder of Grafilab, Malaysia's GPU cloud platform powering AI compute infrastructure across Southeast Asia. A blockchain architect, author of programming books, and founder of Easywave Technology, he brings deep technical expertise in AI infrastructure, cryptocurrency, and decentralized technologies.",
  },
  {
    img: "/scraped/spk-hanif.png",
    name: "Muhammad Hanif",
    role: "AI for Productivity · Indonesia",
    logo: "/speaker-logos/aiproductivity.png",
    bio: "Founder of AI For Productivity, an education platform and community making AI tools accessible to Indonesian learners and professionals. An AI engineer and product builder, he creates content, automation solutions, and educational resources that help non-technical users harness AI for real-world productivity gains.",
  },
  {
    img: "/scraped/spk-saksham.png",
    name: "Saksham Gupta",
    role: "EduBild · India",
    logo: "/speaker-logos/edubild.png",
    bio: "Founder and CEO of EduBild Technologies, an AI-powered platform bridging education and employment across India. An engineer educated at KIT Germany and former Director at Kamtech Associates leading UN-backed programs reaching over 20 million people, he builds AI solutions for skill development at national scale.",
  },
  {
    img: "/scraped/spk-pin.png",
    name: "Pin Siang Tan",
    role: "Embedded LLM · Singapore",
    logo: "/speaker-logos/embedded-llm.png",
    bio: "Co-Founder and CTO of Embedded LLM, building a no-code platform that simplifies large language model deployment for businesses. With 14 years of AI and data engineering expertise including deep contributions to the vLLM ecosystem, he specializes in high-performance LLM inference and production systems.",
  },
  {
    img: "/scraped/spk-joshua.png",
    name: "Joshua Lee",
    role: "Future of Privacy Forum",
    logo: "/speaker-logos/privacy-forum.png",
    bio: "Managing Director for Asia-Pacific at the Future of Privacy Forum, advancing data protection and AI governance best practices across the region. Former Legal Policy Manager for AI Governance at Singapore's PDPC where he helped draft the Model AI Governance Framework, and co-founder of LawTech.Asia.",
  },
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

/* ─── Speaker Card ─────────────────────────────────────── */

function SpeakerCard({
  speaker,
  index,
  onSelect,
}: {
  speaker: Speaker;
  index: number;
  onSelect: (s: Speaker) => void;
}) {
  return (
    <Reveal delay={(index % 5) * 0.05}>
      <motion.div
        whileHover={{ y: -6 }}
        onClick={() => onSelect(speaker)}
        className="relative h-[450px] rounded-2xl overflow-hidden glass cursor-pointer group"
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

        {/* Hover dim — makes the CTA pill pop */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

        {/* CTA pill — "View bio" fades in on hover */}
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
  speaker: Speaker | null;
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
                <div className="inline-flex items-center bg-white/[0.35] backdrop-blur-md rounded-lg px-3 py-2.5 border border-white/20 shadow-sm">
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

export function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <>
      <section id="speakers" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <Reveal>
                <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
                  / Previous Speakers
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
                  Past <span className="text-gradient">voices</span>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="text-sm text-muted-foreground max-w-xs">
                Speakers from previous cohorts — the UN, Microsoft, Oxford, and
                ASEAN&aposs leading institutions.
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {speakers.map((s, i) => (
              <SpeakerCard
                key={s.name}
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
