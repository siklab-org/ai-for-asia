"use client";

import { BackgroundAtmosphere } from "@/components/site/BackgroundAtmosphere";
import { Nav } from "@/components/site/Nav";
import { Speakers } from "@/components/site/Speakers";
import { Footer } from "@/components/site/Footer";

export default function SpeakersPage() {
  return (
    <main className="relative bg-background text-foreground">
      <BackgroundAtmosphere />
      <Nav />
      <Speakers />
      <Footer />
    </main>
  );
}
