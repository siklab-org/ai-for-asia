"use client";

import { BackgroundAtmosphere } from "@/components/site/BackgroundAtmosphere";
import { Nav } from "@/components/site/Nav";
import { UpcomingSpeakers } from "@/components/site/UpcomingSpeakers";
import { Footer } from "@/components/site/Footer";

export default function UpcomingPage() {
  return (
    <main className="relative bg-background text-foreground">
      <BackgroundAtmosphere />
      <Nav />
      <UpcomingSpeakers />
      <Footer />
    </main>
  );
}
