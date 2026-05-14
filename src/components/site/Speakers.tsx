import { Reveal } from "./Reveal";
import manuela from "@/assets/scraped/spk-manuela.png";
import ming from "@/assets/scraped/spk-ming.png";
import kalika from "@/assets/scraped/spk-kalika.png";
import roger from "@/assets/scraped/spk-roger.png";
import dinh from "@/assets/scraped/spk-dinh.png";
import geraldine from "@/assets/scraped/spk-geraldine.png";
import sudhanshu from "@/assets/scraped/spk-sudhanshu.png";
import cyrus from "@/assets/scraped/spk-cyrus.png";
import megan from "@/assets/scraped/spk-megan.png";
import katrina from "@/assets/scraped/spk-katrina.png";
import liew from "@/assets/scraped/spk-liew.png";
import hanif from "@/assets/scraped/spk-hanif.png";
import saksham from "@/assets/scraped/spk-saksham.png";
import pin from "@/assets/scraped/spk-pin.png";
import joshua from "@/assets/scraped/spk-joshua.png";
import saje from "@/assets/scraped/spk-saje.png";
import edward from "@/assets/scraped/spk-edward.png";

const speakers = [
  { img: manuela, name: "Manuela Prina", role: "Asian Development Bank" },
  { img: ming, name: "Ming Tan", role: "Tech for Good Institute" },
  { img: kalika, name: "Kalika Bali", role: "Microsoft" },
  { img: roger, name: "Roger Chao", role: "ASEAN Secretariat" },
  { img: dinh, name: "Dinh-Long Pham", role: "UNDP" },
  { img: geraldine, name: "Geraldine Becchi", role: "UN Volunteers" },
  { img: sudhanshu, name: "Sudhanshu Kasewa", role: "80,000 hours" },
  { img: cyrus, name: "Cyrus Hodes", role: "AI Safety Governance" },
  { img: megan, name: "Megan Robert", role: "UNDP" },
  { img: katrina, name: "Katrina Kalcic", role: "University of Oxford" },
  { img: liew, name: "Dr. Liew Voon Kiong", role: "Grafilab · Malaysia" },
  { img: hanif, name: "Muhammad Hanif", role: "AI for Productivity · Indonesia" },
  { img: saksham, name: "Saksham Gupta", role: "EduBild · India" },
  { img: pin, name: "Pin Siang Tan", role: "Embedded LLM · Singapore" },
  { img: joshua, name: "Joshua Lee", role: "Future of Privacy Forum" },
  { img: saje, name: "Saje Molato", role: "Co-Founder, AI for Asia" },
  { img: edward, name: "Edward Yee", role: "Co-Founder, AI for Asia" },
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
                <img
                  src={s.img}
                  alt={s.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
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
