"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BackgroundAtmosphere } from "@/components/site/BackgroundAtmosphere";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Program } from "@/components/site/Program";
import { UpcomingSpeakers } from "@/components/site/UpcomingSpeakers";
import { Speakers } from "@/components/site/Speakers";
import { Founders } from "@/components/site/Founders";
import { Advisors } from "@/components/site/Advisors";
import { Impact } from "@/components/site/Impact";
import { Partners } from "@/components/site/Partners";
import { Fellows } from "@/components/site/Fellows";
import { Future } from "@/components/site/Future";
import { SocialFeed } from "@/components/site/SocialFeed";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="relative bg-background text-foreground">
        <BackgroundAtmosphere />
        <Nav />
        <Hero />
        <About />
        <Program />
        <Impact />
        <Partners />
        <UpcomingSpeakers />
        <Speakers />
        <Founders />
        <Advisors />
        <Fellows />
        <Future />
        <SocialFeed />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
