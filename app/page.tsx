"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Nav } from "@/app/components/site/Nav";
import { Hero } from "@/app/components/site/Hero";
import { About } from "@/app/components/site/About";
import { Program } from "@/app/components/site/Program";
import { UpcomingSpeakers } from "@/app/components/site/UpcomingSpeakers";
import { Speakers } from "@/app/components/site/Speakers";
import { Impact } from "@/app/components/site/Impact";
import { Fellows } from "@/app/components/site/Fellows";
import { Future } from "@/app/components/site/Future";
import { CTA } from "@/app/components/site/CTA";
import { Contact } from "@/app/components/site/Contact";
import { Partners } from "@/app/components/site/Partners";
import { Footer } from "@/app/components/site/Footer";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}