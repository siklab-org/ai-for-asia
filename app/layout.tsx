import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "AI for ASEAN — Learn, Lead, Innovate with AI",
  description:
    "A regional fellowship empowering young leaders across ASEAN to thrive in an AI-driven future.",
  openGraph: {
    title: "AI for ASEAN — Learn, Lead, Innovate with AI",
    description:
      "A regional fellowship empowering young leaders across ASEAN to thrive in an AI-driven future.",
    type: "website",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d15e95b6-c733-4d60-9c1b-6797d88ca871/id-preview-6f76078d--dfa418ce-9d9a-43b5-8ad7-388c9e34abd3.lovable.app-1778760594873.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for ASEAN — Learn, Lead, Innovate with AI",
    description:
      "A regional fellowship empowering young leaders across ASEAN to thrive in an AI-driven future.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d15e95b6-c733-4d60-9c1b-6797d88ca871/id-preview-6f76078d--dfa418ce-9d9a-43b5-8ad7-388c9e34abd3.lovable.app-1778760594873.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full">{children}</body>
    </html>
  );
}