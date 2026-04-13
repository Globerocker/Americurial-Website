import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0a09",
};

export const metadata: Metadata = {
  title: {
    default: "Americurial — Veteran-Owned Digital Agency",
    template: "%s | Americurial",
  },
  description:
    "Americurial is a veteran-owned digital agency building software, SaaS platforms, and GovTech solutions. We built CapturePilot. We build what wins.",
  keywords:
    "Americurial, veteran-owned agency, digital agency, SaaS development, GovTech, government technology, CapturePilot, web development, software agency",
  applicationName: "Americurial",
  metadataBase: new URL("https://www.americurial.com"),
  openGraph: {
    title: "Americurial — Veteran-Owned Digital Agency",
    description:
      "We build software that wins. SaaS, GovTech, and digital products — from a veteran-owned team that understands execution.",
    type: "website",
    url: "https://www.americurial.com",
    siteName: "Americurial",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Americurial — Veteran-Owned Digital Agency",
    description:
      "Veteran-owned digital agency building SaaS, GovTech, and digital products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://www.americurial.com" },
  icons: { icon: "/icon-white.png", apple: "/icon-black.png" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Americurial",
  legalName: "Americurial LLC",
  url: "https://www.americurial.com",
  logo: "https://www.americurial.com/logo-white.png",
  description:
    "Veteran-owned digital agency building SaaS platforms, GovTech solutions, and digital products.",
  foundingDate: "2024",
  founder: { "@type": "Person", name: "Andre Schuler" },
  sameAs: ["https://www.capturepilot.com"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://meetings-na2.hubspot.com/americurial/intro-call",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* HubSpot Tracking Code — Portal 245197783 */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/245197783.js"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-stone-950 text-stone-200 dot-grid-bg">
        <SiteNav />
        <main className="flex-1 pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
