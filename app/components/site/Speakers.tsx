import Image from "next/image";
import { Reveal } from "./Reveal";

const speakers = [
  { img: "/scraped/spk-manuela.png", name: "Manuela Prina", role: "Asian Development Bank" },
  { img: "/scraped/spk-ming.png", name: "Ming Tan", role: "Tech for Good Institute" },
  { img: "/scraped/spk-kalika.png", name: "Kalika Bali", role: "Microsoft" },
  { img: "/scraped/spk-roger.png", name: "Roger Chao", role: "ASEAN Secretariat" },
  { img: "/scraped/spk-dinh.png", name: "Dinh-Long Pham", role: "UNDP" },
  { img: "/scraped/spk-geraldine.png", name: "Geraldine Becchi", role: "UN Volunteers" },
  { img: "/scraped/spk-sudhanshu.png", name: "Sudhanshu Kasewa", role: "80,000 hours" },
  { img: "/scraped/spk-cyrus.png", name: "Cyrus Hodes", role: "AI Safety Governance" },
  { img: "/scraped/spk-megan.png", name: "Megan Robert", role: "UNDP" },
  { img: "/scraped/spk-katrina.png", name: "Katrina Kalcic", role: "University of Oxford" },
  { img: "/scraped/spk-liew.png", name: "Dr. Liew Voon Kiong", role: "Grafilab · Malaysia" },
  { img: "/scraped/spk-hanif.png", name: "Muhammad Hanif", role: "AI for Productivity · Indonesia" },
  { img: "/scraped/spk-saksham.png", name: "Saksham Gupta", role: "EduBild · India" },
  { img: "/scraped/spk-pin.png", name: "Pin Siang Tan", role: "Embedded LLM · Singapore" },
  { img: "/scraped/spk-joshua.png", name: "Joshua Lee", role: "Future of Privacy Forum" },
  { img: "/scraped/spk-saje.png", name: "Saje Molato", role: "Co-Founder, AI for Asia" },
  { img: "/scraped/spk-edward.png", name: "Edward Yee", role: "Co-Founder, AI for Asia" },
];

export function Speakers() {
  return (
    <section id="speakers" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">/ Previous Speakers</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
                Past <span className="text-gradient">voices</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="text-sm text-muted-foreground max-w-xs">
              Speakers from previous cohorts — the UN, Microsoft, Oxford, and ASEAN's leading institutions.
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {speakers.map((s, i) => (
            <Reveal key={s.name} delay={(i % 5) * 0.05}>
              <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-sm font-semibold leading-tight">{s.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.role}</div>
                </div>
                <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-[#E39297] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}