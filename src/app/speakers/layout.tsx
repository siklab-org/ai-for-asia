import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past Speakers",
  description:
    "Past AI for ASIA speakers — leaders from ADB, Microsoft, UNDP, ASEAN, and beyond who mentored our fellows.",
  alternates: {
    canonical: "/speakers",
  },
};

export default function SpeakersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
