import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GovTech Solutions — Federal-Grade Platforms",
  description:
    "Americurial builds compliance-ready government technology platforms. SAM.gov integration, NAICS classification, opportunity matching, and contractor intelligence for federal contractors and agencies.",
  keywords:
    "GovTech development, SAM.gov integration, federal software, government contractor platforms, NAICS classification, opportunity matching, veteran-owned agency",
  openGraph: {
    title: "GovTech Solutions — Federal-Grade Platforms | Americurial",
    description:
      "Compliance-ready government technology platforms. SAM.gov integration, contractor intelligence, and federal-grade software from a veteran-owned digital agency.",
    url: "https://www.americurial.com/services/govtech",
  },
  alternates: { canonical: "https://www.americurial.com/services/govtech" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.americurial.com/services" },
    { "@type": "ListItem", position: 3, name: "GovTech Solutions", item: "https://www.americurial.com/services/govtech" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GovTech Platform Development",
  serviceType: "Government Technology Software Development",
  description:
    "Americurial builds compliance-ready government technology platforms. SAM.gov integration, NAICS classification, opportunity matching, and contractor intelligence for federal contractors and agencies.",
  url: "https://www.americurial.com/services/govtech",
  provider: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "custom",
    },
    url: "https://meetings-na2.hubspot.com/americurial/intro-call",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "GovTech Deliverables",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SAM.gov & FPDS Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NAICS/PSC Classification Engines" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Opportunity Matching Algorithms" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contractor Readiness Scoring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compliance Dashboards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "USASpending Data Pipelines" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Award & Incumbent Intelligence" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Americurial build for government contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build compliance-ready federal platforms end-to-end: SAM.gov and FPDS ingestion pipelines, AI-powered NAICS and PSC classification, multi-factor opportunity matching engines, contractor readiness scoring across certifications and past performance, compliance dashboards tracking set-aside eligibility and renewal deadlines, USASpending budget-trend pipelines, award and incumbent intelligence, and automated cron workflows running 24/7.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have proven GovTech experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We built CapturePilot, a live federal contract intelligence platform that ingests 37K+ opportunities from SAM.gov daily, maintains an 80K+ contractor database, tracks 91K+ procurement contacts, and runs 6 automated daily cron jobs for ingestion, scoring, enrichment, and lifecycle management. The platform uses a 140-point deterministic scoring algorithm across 6 weighted factors and is in active production use.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a GovTech build take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical timeline is 16 weeks across four phases: Requirements & Compliance (weeks 1-2), Data Architecture with SAM.gov and USASpending integrations (weeks 3-6), full Platform Build including matching engines and cron automation (weeks 7-14), and Testing & Deployment with security hardening and load testing against federal data volumes (weeks 15-16).",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with SAM.gov, FPDS, and USASpending?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — these are core integrations on every GovTech build. We handle SAM.gov entity and opportunity APIs with proper X-Api-Key authentication (not deprecated URL params), FPDS cross-reference for award history, and USASpending for budget trends and obligation tracking. We also scrape award notices for incumbent intelligence and map everything back to the contractor profile.",
      },
    },
    {
      "@type": "Question",
      name: "Is Americurial a veteran-owned business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Americurial is a veteran-owned agency founded by Andre Schuler and based in Jacksonville, FL. We understand the federal contracting landscape from the inside — certifications, set-asides, compliance requirements, and the culture of government procurement — because we live in it ourselves.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build for agencies or only for contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Most of our platforms serve federal contractors — giving them real-time opportunity intelligence and compliance automation — but the same architecture works for agencies that need contractor management dashboards, vendor readiness scoring, or internal procurement analytics. We scope security and compliance requirements up front during the 2-week requirements phase.",
      },
    },
  ],
};

export default function GovTechLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
