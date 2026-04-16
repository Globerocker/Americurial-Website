import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Data Platforms — Machine Learning in Production",
  description:
    "Americurial builds ML pipelines, AI-powered automation, and intelligent data systems that run in production. From OpenAI integration to custom scoring engines — we ship AI that works.",
  keywords:
    "AI development, machine learning pipelines, OpenAI integration, data platforms, NLP, scoring engines, ETL pipelines, AI automation, veteran-owned agency, Americurial",
  openGraph: {
    title: "AI & Data Platforms — Machine Learning in Production | Americurial",
    description:
      "ML pipelines, intelligent scoring, and AI-powered automation built into production-grade systems. From OpenAI to custom models — we ship AI that works.",
    url: "https://www.americurial.com/services/ai",
  },
  alternates: { canonical: "https://www.americurial.com/services/ai" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.americurial.com/services" },
    { "@type": "ListItem", position: 3, name: "AI & Data Platforms", item: "https://www.americurial.com/services/ai" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI & Data Platform Development",
  serviceType: "AI & Machine Learning Development",
  description:
    "Americurial builds ML pipelines, AI-powered automation, and intelligent data systems that run in production. From OpenAI integration to custom scoring engines — we ship AI that works.",
  url: "https://www.americurial.com/services/ai",
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
    name: "AI & Data Deliverables",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "OpenAI & GPT-4o Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom ML Pipelines" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Ingestion & ETL" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scoring & Recommendation Engines" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NLP & Document Analysis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Content Generation" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of AI systems does Americurial build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build production-grade AI systems, not proof-of-concept notebooks. Deliverables include OpenAI and GPT-4o integration with structured outputs, custom ML pipelines, data ingestion and ETL flows, deterministic and ML-hybrid scoring engines, NLP and document analysis for extracting structured data from contracts and solicitations, intelligent classification with keyword fallbacks, real-time enrichment workflows, and AI-powered content generation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an AI engagement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical AI engagement runs 12 weeks across four phases: Data Audit & Strategy (weeks 1-2), Pipeline Architecture (weeks 3-5), Model Integration & Training (weeks 6-10), and Production & Monitoring (weeks 11-12). You end with a fully deployed system with cost tracking, alerting, and automated fallback handling — not a demo.",
      },
    },
    {
      "@type": "Question",
      name: "Can you show real AI work you have shipped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — CapturePilot is our flagship showcase. We built its entire AI layer: GPT-4o NAICS classification with keyword fallback for 100% coverage, a 140-point deterministic scoring algorithm across 6 weighted dimensions, automated opportunity enrichment with contractor readiness scoring, NLP-based solicitation requirements extraction, and daily ingestion and scoring of 37K+ federal opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use OpenAI or custom models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use whatever fits the problem. Most production systems start with OpenAI (GPT-4o for classification and extraction, embeddings for search) because it ships fastest and delivers the best accuracy out of the box. Where cost or latency demands it, we fine-tune or swap in custom models built with scikit-learn or lightweight open-source alternatives — always with deterministic fallbacks.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stack do you use for AI builds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Python for data engineering and model training (pandas, scikit-learn), OpenAI and LangChain for LLM work, Supabase/Postgres for storage and vector search, Next.js and TypeScript for the product surface, and Vercel for serverless orchestration. Cron jobs handle scheduled ingestion, scoring, and enrichment pipelines.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle AI cost and reliability in production?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every OpenAI call we ship includes retry logic, structured output validation, cost monitoring, and a deterministic fallback path so the feature keeps working if the model is unavailable or returns invalid JSON. We track cost per request, alert on spend anomalies, and cache aggressively where outputs are stable.",
      },
    },
  ],
};

export default function AIServiceLayout({
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
