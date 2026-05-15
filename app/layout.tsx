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
  metadataBase: new URL("https://aiforasia.vercel.app"),
  title: {
    default: "AI for ASIA",
    template: "%s | AI for ASIA",
  },
  description:
    "A regional fellowship empowering young leaders across Asia to thrive in an AI-driven future.",
  keywords: [
    "AI",
    "Asia",
    "fellowship",
    "leadership",
    "innovation",
    "technology",
  ],
openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiforasia.vercel.app",
    siteName: "AI for ASIA",
    title: "AI for ASIA — Learn, Lead, Innovate with AI",
    description:
      "A regional fellowship empowering young leaders across Asia to thrive in an AI-driven future.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI for ASIA preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for ASIA — Learn, Lead, Innovate with AI",
    description:
      "A regional fellowship empowering young leaders across Asia to thrive in an AI-driven future.",
    images: ["/og-image.png"],
    site: "@AIforAsia",
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">{children}</body>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AI for ASIA",
          url: "https://aiforasia.vercel.app",
          logo: "https://aiforasia.vercel.app/og-image.png",
        })}
      </Script>
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "AI for ASIA",
          url: "https://aiforasia.vercel.app",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://aiforasia.vercel.app?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>
    </html>
  );
}
