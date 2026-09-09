"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#program", label: "Program" },
  { href: "#upcoming", label: "Upcoming" },
  { href: "#speakers", label: "Past Speakers" },
  { href: "#fellows", label: "Fellows" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass backdrop-blur-sm rounded-full flex items-center justify-between px-3 py-2.5"
        >
          <a href="#top" className="flex items-center gap-2.5 pl-2">
            <Image
              src="/logo.png"
              alt="AI for ASIA"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-semibold tracking-tight text-sm hidden sm:block">
              AI for <span className="text-gradient">ASIA</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="/%5BAI%20for%20Asia%202026%5D%20Program%20Briefer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-brand animate-gradient text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              See More
            </a>
            <div className="relative group">
              <Link
                href="/pyis2026"
                className="glass text-foreground text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-1.5"
              >
                PYIS 2026
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute right-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity duration-200">
                <div className="glass rounded-2xl p-2 w-72">
                  <Link
                    href="/pyis2026"
                    className="block rounded-xl px-4 py-2.5 text-sm text-foreground hover:bg-white/10 transition-colors"
                  >
                    Philippine Youth Innovation Summit
                  </Link>
                  <Link
                    href="/ayca2026"
                    className="block rounded-xl px-4 py-2.5 text-sm text-foreground hover:bg-white/10 transition-colors"
                  >
                    Asian Youth Champion Awards
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
