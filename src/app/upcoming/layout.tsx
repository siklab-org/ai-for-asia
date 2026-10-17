import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Speakers",
  description:
    "The 2026 AI for ASIA speaker line-up — founders building AI tools in Southeast Asia, policymakers, and researchers.",
  alternates: {
    canonical: "/upcoming",
  },
};

export default function UpcomingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
