import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Americurial is a veteran-owned digital agency founded by Andre Schuler. We bring military discipline to software engineering — building SaaS, GovTech, and AI-powered products.",
  keywords:
    "Americurial, veteran-owned, digital agency, Andre Schuler, CapturePilot, military, software engineering, about us",
  openGraph: {
    title: "About | Americurial",
    description:
      "Built by veterans. Driven by mission. Learn how Americurial brings military discipline to building production-grade software.",
    url: "https://www.americurial.com/about",
  },
  alternates: { canonical: "https://www.americurial.com/about" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.americurial.com/about" },
  ],
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Americurial",
  url: "https://www.americurial.com/about",
  description:
    "Americurial is a veteran-owned digital agency founded by Andre Schuler in Jacksonville, FL. We bring military discipline to software engineering — building SaaS, GovTech, and AI-powered products.",
  mainEntity: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
    description:
      "Veteran-owned digital agency specializing in SaaS development, GovTech platforms, AI integration, and high-performance web applications.",
    founder: {
      "@type": "Person",
      name: "Andre Schuler",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: { "@type": "Country", name: "United States" },
    knowsAbout: [
      "SaaS Development",
      "GovTech Software",
      "SAM.gov Integration",
      "AI and Machine Learning",
      "Federal Contract Intelligence",
      "Web Development",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS MVP Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GovTech Platform Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who founded Americurial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Americurial was founded by Andre Schuler, a military veteran who saw small businesses and government contractors getting outpaced by companies with bigger budgets and better technology. The mission was to bring military-grade discipline to software engineering and build technology that gives the underdog an edge. Today, Americurial builds SaaS platforms, GovTech solutions, and AI-powered products from a veteran-owned, engineering-first shop.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Americurial located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Americurial is headquartered in Jacksonville, Florida and serves clients across the United States. We work remotely with clients nationwide, with a concentration on small businesses, startups, veteran-owned firms, digital agencies needing overflow capacity, and federal contractors who need GovTech platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Is Americurial a veteran-owned business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Americurial is veteran-owned and veteran-operated. Veteran values drive everything we do: integrity, accountability, and mission focus — not buzzwords but the standards we held in uniform. Every engagement is run like a mission: clear objectives, tight timelines, and zero wasted effort.",
      },
    },
    {
      "@type": "Question",
      name: "What is CapturePilot and why did Americurial build it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot is our flagship product — a federal contract intelligence platform built because veteran-owned small businesses deserved enterprise-grade contracting intelligence without the enterprise price tag. It processes 40,000+ federal opportunities and delivers AI-powered matching, competitor analysis, and readiness scoring from a single dashboard. It's also a real showcase of what we can build for our clients.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Americurial different from other agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are a veteran-owned, engineering-first shop. No account managers, no fluff. Every person on your project writes production code. We built CapturePilot — a real SaaS platform processing 40K+ data points daily — so we practice what we preach. Execution over talk: we don't do slide decks about what we could build, we build it and ship it.",
      },
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
