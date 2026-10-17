import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI for ASIA bridges the AI skills gap across Southeast Asia — a 12-week fellowship for emerging leaders from 12 ASEAN nations and South Korea.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
