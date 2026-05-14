import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Program } from "@/components/site/Program";
import { UpcomingSpeakers } from "@/components/site/UpcomingSpeakers";
import { Speakers } from "@/components/site/Speakers";
import { Impact } from "@/components/site/Impact";
import { Fellows } from "@/components/site/Fellows";
import { Future } from "@/components/site/Future";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Program />
      <UpcomingSpeakers />
      <Speakers />
      <Impact />
      <Fellows />
      <Future />
      <CTA />
      <Contact />
      <Partners />
      <Footer />
    </main>
  );
}
