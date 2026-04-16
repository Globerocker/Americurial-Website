import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot — Federal Contract Intelligence",
  description:
    "CapturePilot is Americurial's flagship SaaS platform that matches small businesses with federal government contracts they can actually win. AI-powered scoring, readiness assessments, and competitor intelligence.",
  keywords:
    "CapturePilot, federal contracts, government contracts, AI matching, NAICS classification, GovTech, SAM.gov, small business, veteran-owned, readiness score",
  openGraph: {
    title: "CapturePilot — Federal Contract Intelligence | Americurial",
    description:
      "AI-powered federal contract intelligence. Match with opportunities, score your readiness, and track competitors — all in one dashboard.",
    url: "https://www.americurial.com/capturepilot",
  },
  alternates: { canonical: "https://www.americurial.com/capturepilot" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.americurial.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Portfolio",
      item: "https://www.americurial.com/portfolio",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CapturePilot",
      item: "https://www.americurial.com/capturepilot",
    },
  ],
};

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "CapturePilot — Federal Contract Intelligence",
  headline: "CapturePilot — Federal Contract Intelligence Platform",
  description:
    "Case study of CapturePilot, Americurial's flagship SaaS product. An AI-powered federal contract intelligence platform that ingests 40,000+ SAM.gov opportunities daily, scores them against each company's NAICS / PSC / set-aside profile, and delivers readiness assessments and competitor intelligence to small businesses pursuing government work.",
  url: "https://www.americurial.com/capturepilot",
  image: "https://www.americurial.com/og/capturepilot.png",
  inLanguage: "en-US",
  author: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
  },
  creator: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
    founder: {
      "@type": "Person",
      name: "Andre Schuler",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.americurial.com/logo.png",
    },
  },
  about: {
    "@type": "SoftwareApplication",
    name: "CapturePilot",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.capturepilot.com",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "USD",
    },
  },
  datePublished: "2026-02-25",
  dateModified: "2026-04-16",
  keywords: [
    "CapturePilot",
    "federal contracts",
    "SAM.gov",
    "AI matching",
    "readiness score",
    "GovTech SaaS",
    "Americurial portfolio",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who built CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot was designed and built by Americurial, a veteran-owned digital agency in Jacksonville, Florida, founded by Andre Schuler. It is the agency's flagship SaaS product and serves as the reference implementation of our 90-day MVP methodology using Next.js, Supabase, Stripe, and Vercel. The same team that builds CapturePilot designs and ships SaaS products for Americurial clients.",
      },
    },
    {
      "@type": "Question",
      name: "Is Americurial the owner of CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CapturePilot is Americurial's own product, not a client engagement. Americurial owns the intellectual property, operates the platform at capturepilot.com, and uses the product both as a revenue business and as a live portfolio piece demonstrating the agency's GovTech and SaaS capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "What does CapturePilot actually do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot ingests 40,000+ federal opportunities daily from SAM.gov, scores them against each company's NAICS codes, PSC codes, set-aside certifications, geography, and capacity, and surfaces the contracts a business is most likely to win. Additional features include a 0-10 government readiness assessment, AI-powered NAICS classification, competitor intelligence drawn from USASpending.gov award data, AI-assisted proposal drafting, and a pipeline tracker. The goal is to replace 15-20 hours per week of manual SAM.gov searching with a pre-scored opportunity feed.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stack powers CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js 16 with Turbopack for the frontend and API layer, Supabase (Postgres) for the database and authentication, Vercel for serverless deployment and cron scheduling, Stripe for subscription billing, Resend for transactional email, and OpenAI for AI-powered features including proposal drafting and NAICS classification. Python tools handle SAM.gov ingestion and enrichment. This is the same stack Americurial uses for client SaaS builds.",
      },
    },
    {
      "@type": "Question",
      name: "Can Americurial build something like CapturePilot for my company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CapturePilot is the clearest demonstration of what Americurial builds for clients: AI-integrated SaaS platforms with government and enterprise data pipelines, launched in 90 days using Next.js, Supabase, and Vercel. Whether you need a GovTech platform, a vertical SaaS product, or an AI integration on top of an existing system, the same team and the same methodology are available for client engagements through a HubSpot intro call.",
      },
    },
  ],
};

export default function CapturePilotLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
