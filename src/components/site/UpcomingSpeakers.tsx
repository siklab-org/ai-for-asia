"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface UpcomingSpeaker {
  img: string;
  name: string;
  role?: string;
  logo?: string;
  bio?: string;
}

/* ─── Data ─────────────────────────────────────────────── */

const speakers: UpcomingSpeaker[] = [
  {
    img: "/new-speakers/1.png",
    name: "Rose Sagun",
    role: "Education Specialist, Human and Social Development Sector Office (SG-HSD), Sectors Group (SG), Asian Development Bank",
    logo: "/speaker-logos/adb.png",
    bio: "Rose is an Education Specialist at the Education Practice Team, Sector Group, Asian Development Bank. Before joining ADB, she worked at the Education Commission in Washington D.C., which was co-convened by the former Director-General of UNESCO and the UN Special Envoy for Global Education. She has worked on adaptive, personalized learning; digital learning/EdTech initiatives; and studying the interface between technology and human interaction, learning, and pedagogy. She served as the Co-Chair of Harvard Alumni for Education \u2014 San Francisco Bay Area chapter. She holds a Master\u2019s degree in International Education Policy from Harvard University.",
  },
  {
    img: "/new-speakers/kristoni.png",
    name: "Kristoni Go",
    role: "COO & Country Director, Enactus Philippines",
    logo: "/speaker-logos/enactus-ph.png",
    bio: "Kristoni Go serves as the Chief Operating Officer and Country Director of Enactus Philippines, a global non-profit organization that mobilizes university students to create community impact through entrepreneurial action. In her role, she leads strategic operations, partnership development, and program management across the Philippines. Kristoni is deeply committed to youth empowerment and social innovation, working to equip the next generation of leaders with the skills and mindset to drive sustainable change. Her leadership at Enactus Philippines has expanded the organization's reach to hundreds of students nationwide, fostering a culture of purpose-driven entrepreneurship.",
  },
  {
    img: "/new-speakers/2.png",
    name: "Rustam Shariq Mujtaba",
    role: "Regional Youth Champion, DTH Lab",
    logo: "/speaker-logos/dth-lab.png",
    bio: "Rustam serves as the Southeast and East Asia Regional Youth Champion at the Digital Transformation for Health Lab (DTH-Lab), where he supports youth leadership and regional collaboration on digital health. He has experience working in the digital health ecosystem in startups and as a health regulatory, working as the Manager of Regulatory Affairs & Data Analytics at Peach Health Asia, working on the regulation and deployment of AI-enabled Software Medical Devices across Southeast Asia. Currently, he works as a Data Scientist at Singapore's Health Sciences Authority, developing AI-enabled regulatory solutions for healthcare. His interests lie at the intersection of digital health, AI governance, health diplomacy, and strengthening equitable health systems through responsible innovation.",
  },
  {
    img: "/new-speakers/3.png",
    name: "Edward Yee",
    role: "Co-Founder, AI for Asia & GivFunds",
    logo: "/speaker-logos/aiforasia.png",
    bio: "Edward Yee is a serial social entrepreneur whose career bridges impact, finance, and technology. He co-founded ventures such as Givfunds, an impact fund, and nsave, a fintech focused on financial inclusion. His ventures have attracted funding from prominent backers including Sequoia Capital, the UNDP, and Y Combinator. Today, Edward is the Chief Growth Officer of FAR.AI, an AI Safety non-profit that works to ensure advanced AI is safe and beneficial for everyone. A Rhodes Scholar, Edward holds two master\u2019s degrees from Oxford and was the Valedictorian of his class at Nanyang Technological University. His contributions have earned him recognition as an Obama Leader, the Commonwealth Youth Award for Asia, and a spot on the Forbes 30 Under 30 list. In his free time, Edward enjoys sticking his nose in a book and collecting stories from around the world. He has stood on Bangladeshi train tops, stared down bull sharks, and raced Indian autos.",
  },
  {
    img: "/new-speakers/4.png",
    name: "Cyrus Hodes",
    role: "Founder, AI Safety Connect",
    logo: "/speaker-logos/ai-safety-connect.png",
    bio: "Cyrus is a Venture Partner at Lionheart Ventures, a VC fund investing in early-stage responsible AI and AI Safety. He is a co-founder of Stability AI, a leading global generative AI platform, and the founder of AI Safety Connect, a global gathering on AI Safety as well as an AI policy platform. As an expert in the Global Partnership on AI (GPAI), he has co-led the Safety and Assurance of Generative AI (SAFE) project. Cyrus is a Fellow of Practice at the Mohammed Bin Rashid School of Government in Dubai, where he leads their AI Safety initiative, Global Risk and AI Safety Preparedness (GRASP). Cyrus co-founded The Future Society\u2014a 501(c)3 incubated at Harvard Kennedy School and chaired its AI Initiative\u2014where he engaged early with global stakeholders to study and help shape the governance of AI. He served as an Advisor to the UAE Minister of Artificial Intelligence at the Prime Minister\u2019s Office. Educated at Sciences Po Paris, MA (Hons) Paris II University, M.P.A. Harvard.",
  },
  {
    img: "/new-speakers/6.png",
    name: "Sebastian Felipe Bundoc",
    role: "Senior Data Analyst, Center for AI Research",
    logo: "/speaker-logos/center-for-ai-research.png",
  },
  {
    img: "/new-speakers/7.png",
    name: "Jose Marie Antonio Miñoza",
    role: "Senior Data Analyst, Center for AI Research",
    logo: "/speaker-logos/center-for-ai-research.png",
  },
  {
    img: "/new-speakers/8.png",
    name: "Michelle Kim-Rissi",
    role: "Co-Founder / Programme Manager, JIVAM Foundation / UN Canada / WFUNA",
    logo: "/speaker-logos/jivam.png",
    bio: "Michelle Kim-Rissi is a sustainability, climate, and global development professional working at the intersection of sustainability, education, international cooperation, and community-driven sustainability initiatives. She currently serves in leadership, coordination, and advisory roles with various organizations including the JIVAM Foundation, the United Nations Association in Canada (UNAC), and the World Federation of United Nations Associations (WFUNA). Her broader experience includes collaborations and engagements with UNEP, UNDP initiatives, Harvard sustainability networks, youth climate coalitions, educational institutions, and international civil society organizations focused on climate action, social impact, and sustainable development. Michelle holds a Master\u2019s degree from Harvard University and is a Harvard alumni awardee for social change. Over the past decade, she has led and contributed to projects related to climate resilience, environmental education, sustainable communities, youth leadership, and health equity across local and international contexts. She has spoken, facilitated, or represented organizations at conferences, forums, and UN-related events in countries including Canada, the United States, South Korea, the United Arab Emirates, Switzerland, UK and Mexico, including engagements connected to COP, UNEA, CSW, UNGA, and many other UN advocacy forums, climate leadership events, and multilateral dialogues. Her work has included developing sustainability programs, supporting underserved and Indigenous communities, building international partnerships, and creating initiatives that connect local action to global sustainability goals. Michelle continues to advocate for collaborative and forward-thinking approaches that leverage sustainability and innovation to address global challenges. Her leadership emphasizes the importance of multilateral collaboration, community empowerment, and inclusive sustainability in shaping a more equitable and resilient future.",
  },
  // {
  //   img: "/new-speakers/9.png",
  //   name: "Daniel Eriksson",
  // },
  // {
  //   img: "/new-speakers/10.png",
  //   name: "George Tsiatis",
  // },
  // {
  //   img: "/new-speakers/11.png",
  //   name: "Tiaro Paska Rivo",
  // },
  {
    img: "/new-speakers/12.png",
    name: "Andreas Tjendra",
    role: "AI National Advisor, RMIT Industry Partner",
    logo: "/speaker-logos/rmit.png",
    bio: "Andreas Tjendra is an AI National Advisor whose expertise spans Industry, Government, and Academia, focusing on driving innovation and strategy in artificial intelligence and technology development. He has contributed to major initiatives such as the AI National Roadmap (Ministry of Communication and Digital Affairs). He has also served as a Subject Matter Expert for the Ministry of ICT, the Presidential Advisory Council, and ClimateSmart Indonesia. His work supports the integration of AI, climate, and health data into national policies and development projects. Andreas has advised over 15 governments, 50+ industries, and 5 academic institutions. He was previously with Geotech Australia and has served as a consultant for BHP Billiton, Google.org, and the ASEAN Foundation.",
  },
  {
    img: "/new-speakers/13.png",
    name: "Dr. William Tijhi",
    role: "Deputy Director of AI Products, AI Singapore",
    logo: "/speaker-logos/ai-singapore.png",
    bio: "William Tjhi has nearly two decades of experience in applying machine learning to industry problems. He earned his PhD from NTU in 2008, focusing on unsupervised learning for text data. His career includes time at A*STAR, where he scaled up ML with distributed systems, and at GovTech, where he contributed to early data science efforts. As the lead NLP at Traveloka, he tackled the challenges of NLP in low-resource Bahasa Indonesia, inspiring him to initiate a program for building NLP resources for Southeast Asian languages at AI Singapore. William was a foundational engineer for AI Singapore\u2019s 100 Experiments and AI Apprenticeship Program. Currently, he drives the development of regional and more inclusive LLMs in AI Singapore\u2019s AI Products division. He also provides AI technical advisory to MDDI Translation Technology, and actively participates in regional and global AI discourses including with communities like Data Science Indonesia, Data Science SG, Cambodia\u2019s AI Forum and UNESCO Coalition of Language Diversity.",
  },
];

/* ─── Card ─────────────────────────────────────────────── */

function UpcomingSpeakerCard({
  speaker,
  onSelect,
}: {
  speaker: UpcomingSpeaker;
  onSelect: (s: UpcomingSpeaker) => void;
}) {
  const hasBio = Boolean(speaker.bio);

  return (
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

      {/* CTA pill — only for speakers with bio */}
      {hasBio && (
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
      )}

      {/* Bottom text zone */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="text-sm font-semibold leading-tight truncate text-white">
          {speaker.name}
        </div>
        {speaker.role && (
          <div className="text-xs text-white/60 mt-1 truncate">
            {speaker.role}
          </div>
        )}
        {speaker.logo && (
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
        )}
      </div>
    </motion.div>
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
                {speaker.role && (
                  <p className="text-sm text-white/50 mt-1">{speaker.role}</p>
                )}
              </div>

              {speaker.logo && (
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
              )}

              {speaker.bio && (
                <>
                  <hr className="my-5 border-white/10" />
                  <p className="text-sm text-white/70 leading-relaxed">
                    {speaker.bio}
                  </p>
                </>
              )}
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
              <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
                / Upcoming Speakers · 2026
              </span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
                New voices, <span className="text-gradient">soon</span>.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-xl">
                The 2026 cohort brings in a new class of speakers; founders
                building AI tools in Southeast Asia, policymakers at the table
                where decisions get made, and researchers asking the questions
                that matter.
              </p>
            </div>
            <a
              href="mailto:hello@aiforasean.org?subject=Speaker%20interest"
              className="glass rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Suggest a speaker →
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {speakers.map((s) => (
              <UpcomingSpeakerCard
                key={s.name}
                speaker={s}
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
