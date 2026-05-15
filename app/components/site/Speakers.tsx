import Image from "next/image";
import { Reveal } from "./Reveal";

const speakers = [
  { img: "/scraped/spk-manuela.png", name: "Manuela Prina", role: "Asian Development Bank", logo: "/speaker-logos/adb.png" },
  { img: "/scraped/spk-ming.png", name: "Ming Tan", role: "Tech for Good Institute", logo: "/speaker-logos/tgi.png" },
  { img: "/scraped/spk-kalika.png", name: "Kalika Bali", role: "Microsoft", logo: "/speaker-logos/microsoft.png" },
  { img: "/scraped/spk-roger.png", name: "Roger Chao", role: "ASEAN Secretariat", logo: "/speaker-logos/asean.png" },
  { img: "/scraped/spk-dinh.png", name: "Dinh-Long Pham", role: "UNDP", logo: "/speaker-logos/undp.png" },
  { img: "/scraped/spk-geraldine.png", name: "Geraldine Becchi", role: "UN Volunteers", logo: "/speaker-logos/unv.png" },
  { img: "/scraped/spk-sudhanshu.png", name: "Sudhanshu Kasewa", role: "80,000 hours", logo: "/speaker-logos/80000-hours.png" },
  { img: "/scraped/spk-cyrus.png", name: "Cyrus Hodes", role: "AI Safety Governance", logo: "/speaker-logos/aisafety.png" },
  { img: "/scraped/spk-megan.png", name: "Megan Robert", role: "UNDP", logo: "/speaker-logos/undp.png" },
  { img: "/scraped/spk-katrina.png", name: "Katrina Kalcic", role: "University of Oxford", logo: "/speaker-logos/oxford.png" },
  { img: "/scraped/spk-liew.png", name: "Dr. Liew Voon Kiong", role: "Grafilab · Malaysia", logo: "/speaker-logos/grafilab.png" },
  { img: "/scraped/spk-hanif.png", name: "Muhammad Hanif", role: "AI for Productivity · Indonesia", logo: "/speaker-logos/aiproductivity.png" },
  { img: "/scraped/spk-saksham.png", name: "Saksham Gupta", role: "EduBild · India", logo: "/speaker-logos/edubild.png" },
  { img: "/scraped/spk-pin.png", name: "Pin Siang Tan", role: "Embedded LLM · Singapore", logo: "/speaker-logos/embedded-llm.png" },
  { img: "/scraped/spk-joshua.png", name: "Joshua Lee", role: "Future of Privacy Forum", logo: "/speaker-logos/privacy-forum.png" },
  { img: "/scraped/spk-saje.png", name: "Saje Molato", role: "Co-Founder, AI for Asia", logo: "/speaker-logos/siklab.png" },
  { img: "/scraped/spk-edward.png", name: "Edward Yee", role: "Co-Founder, AI for Asia", logo: "/speaker-logos/aiforasia.png" },
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
              <div className="group relative flex flex-col h-[450px] rounded-2xl overflow-hidden glass">
                {/* Portrait */}
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                {/* Text zone */}
                <div className="h-[130px] shrink-0 p-4 flex flex-col">
                  <div className="text-sm font-semibold leading-tight truncate">{s.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 truncate">{s.role}</div>
                  <div className="mt-auto relative h-[30px]">
                    <Image
                      src={s.logo}
                      alt=""
                      fill
                      className="object-contain object-left"
                    />
                  </div>
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