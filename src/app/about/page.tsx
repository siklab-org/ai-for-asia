"use client";

import { BackgroundAtmosphere } from "@/components/site/BackgroundAtmosphere";
import { Nav } from "@/components/site/Nav";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";

export default function AboutPage() {
  return (
    <main className="relative bg-background text-foreground">
      <BackgroundAtmosphere />
      <Nav />
      <About />
      <Footer />
    </main>
  );
}
