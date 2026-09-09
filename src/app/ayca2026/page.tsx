import type { Metadata } from "next";
import { BackgroundAtmosphere } from "@/components/site/BackgroundAtmosphere";
import { AycaHero } from "@/components/site/ayca/AycaHero";
import { AycaAbout } from "@/components/site/ayca/AycaAbout";
import { AycaTheme } from "@/components/site/ayca/AycaTheme";
import { AycaAreas } from "@/components/site/ayca/AycaAreas";
import { AycaTrailblazer } from "@/components/site/ayca/AycaTrailblazer";
import { AycaEligibility } from "@/components/site/ayca/AycaEligibility";
import { AycaNominate } from "@/components/site/ayca/AycaNominate";
import { AycaCriteria } from "@/components/site/ayca/AycaCriteria";
import { AycaProcess } from "@/components/site/ayca/AycaProcess";
import { AycaRecognition } from "@/components/site/ayca/AycaRecognition";
import { AycaNetwork } from "@/components/site/ayca/AycaNetwork";
import { AycaCta } from "@/components/site/ayca/AycaCta";
import { AycaFooter } from "@/components/site/ayca/AycaFooter";

export const metadata: Metadata = {
  title: "Asian Youth Champion Awards 2026",
  description:
    "A special recognition program of the Philippine Youth Innovation Summit 2026 honoring 35 exceptional young people aged 15–35 who turn ideas into impact.",
  alternates: {
    canonical: "/ayca2026",
  },
  openGraph: {
    title: "Asian Youth Champion Awards 2026 | AI for ASIA",
    description:
      "Celebrating Young People Who Turn Ideas Into Impact — 35 Youth Trailblazers recognized during the Philippine Youth Innovation Summit 2026.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asian Youth Champion Awards 2026 | AI for ASIA",
    description:
      "Celebrating Young People Who Turn Ideas Into Impact — 35 Youth Trailblazers recognized during the Philippine Youth Innovation Summit 2026.",
    images: ["/og-image.png"],
  },
};

export default function Ayca2026Page() {
  return (
    <main className="relative bg-background text-foreground">
      <BackgroundAtmosphere />
      <AycaHero />
      <AycaAbout />
      <AycaTheme />
      <AycaAreas />
      <AycaTrailblazer />
      <AycaEligibility />
      <AycaNominate />
      <AycaCriteria />
      <AycaProcess />
      <AycaRecognition />
      <AycaNetwork />
      <AycaCta />
      <AycaFooter />
    </main>
  );
}
