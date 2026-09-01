import type { Metadata } from "next";
import { BackgroundAtmosphere } from "@/components/site/BackgroundAtmosphere";
import { PyisHero } from "@/components/site/pyis/PyisHero";
import { PyisAbout } from "@/components/site/pyis/PyisAbout";
import { PyisThemes } from "@/components/site/pyis/PyisThemes";
import { PyisOrganizers } from "@/components/site/pyis/PyisOrganizers";
import { PyisExperience } from "@/components/site/pyis/PyisExperience";
import { PyisProgram } from "@/components/site/pyis/PyisProgram";
import { PyisJourney } from "@/components/site/pyis/PyisJourney";
import { PyisWhoShouldJoin } from "@/components/site/pyis/PyisWhoShouldJoin";
import { PyisRegistration } from "@/components/site/pyis/PyisRegistration";
import { PyisWhyParticipate } from "@/components/site/pyis/PyisWhyParticipate";
import { PyisHowToRegister } from "@/components/site/pyis/PyisHowToRegister";
import { PyisFaq } from "@/components/site/pyis/PyisFaq";
import { PyisFooter } from "@/components/site/pyis/PyisFooter";

export const metadata: Metadata = {
  title: "Philippine Youth Innovation Summit 2026",
  description:
    "A two-day international youth summit bringing together Filipino and international young people to explore the intersection of artificial intelligence, international cooperation, sustainable development, innovation, and entrepreneurship.",
  openGraph: {
    title: "Philippine Youth Innovation Summit 2026 | AI for ASIA",
    description:
      "October 9–10, 2026 at De La Salle University Manila. Empowering the Next Generation of Innovators, Changemakers, and Entrepreneurial Leaders.",
    images: ["/og-image.png"],
  },
};

export default function Pyis2026Page() {
  return (
    <main className="relative bg-background text-foreground">
      <BackgroundAtmosphere />
      <PyisHero />
      <PyisAbout />
      <PyisThemes />
      <PyisOrganizers />
      <PyisExperience />
      <PyisProgram />
      <PyisJourney />
      <PyisWhoShouldJoin />
      <PyisRegistration />
      <PyisWhyParticipate />
      <PyisHowToRegister />
      <PyisFaq />
      <PyisFooter />
    </main>
  );
}
