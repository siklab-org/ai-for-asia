import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-for-asia.vercel.app"),
  title: {
    default: "AI for ASEAN — Learn, Lead, Innovate with AI",
    template: "%s | AI for Asia",
  },
  description:
    "A regional fellowship empowering young leaders across ASEAN to thrive in an AI-driven future.",
  keywords: ["AI", "ASEAN", "fellowship", "leadership", "innovation", "technology"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-for-asia.vercel.app",
    siteName: "AI for Asia",
    title: "AI for ASEAN — Learn, Lead, Innovate with AI",
    description:
      "A regional fellowship empowering young leaders across ASEAN to thrive in an AI-driven future.",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d15e95b6-c733-4d60-9c1b-6797d88ca871/id-preview-6f76078d--dfa418ce-9d9a-43b5-8ad7-388c9e34abd3.lovable.app-1778760594873.png",
        width: 1200,
        height: 630,
        alt: "AI for Asia preview",
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
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
      <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AI for Asia",
          url: "https://ai-for-asia.vercel.app",
          logo: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d15e95b6-c733-4d60-9c1b-6797d88ca871/id-preview-6f76078d--dfa418ce-9d9a-43b5-8ad7-388c9e34abd3.lovable.app-1778760594873.png",
        })}
      </Script>
      <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "AI for Asia",
          url: "https://ai-for-asia.vercel.app",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://ai-for-asia.vercel.app?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>
    </html>
  );
}