import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Agencies — White-Label Development Partner",
  description: "Americurial provides white-label SaaS development, overflow engineering capacity, and GovTech specialization for digital agencies. Your brand, our build.",
  alternates: { canonical: "https://www.americurial.com/for/agencies" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "For", item: "https://www.americurial.com/for/agencies" },
    { "@type": "ListItem", position: 3, name: "Agencies", item: "https://www.americurial.com/for/agencies" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "White-Label Development Partner for Digital Agencies",
  url: "https://www.americurial.com/for/agencies",
  description:
    "Americurial provides white-label SaaS development, overflow engineering capacity, and GovTech specialization for digital agencies. Your brand, our build.",
  audience: {
    "@type": "Audience",
    audienceType: "Digital Agencies",
  },
  about: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does a white-label partnership with Americurial work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We ship under your brand. You own the client relationship, we own the build. No watermarks, no co-branding, no introductions to your client. The process: we sign your NDA, learn the project, scope deliverables, assign engineers matched to your tech stack, then build in 2-week sprints with daily progress you can share with your client.",
      },
    },
    {
      "@type": "Question",
      name: "Can Americurial act as overflow engineering capacity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is a core offering. When your in-house team is at capacity, we step in as a seamless extension. Same stack (Next.js, React, TypeScript, Supabase, Stripe), same standards, zero ramp-up. Stop turning down projects because your dev team is booked — use us to keep the sales pipeline moving.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have GovTech expertise most agencies lack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We built CapturePilot — a federal contract intelligence platform processing 37K+ SAM.gov opportunities daily. If your client needs SAM.gov, FPDS, USASpending integration, NAICS classification, compliance dashboards, or any federal data work, we bring production experience your team likely doesn't have in-house.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you turn around design-to-code work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hand us Figma files and we deliver pixel-perfect, production-ready React components fast. Typical design-to-code turnarounds run 2-week sprint cycles for full pages, and we QA against the design system so you don't spend time on pixel-pushing tickets. Average MVP delivery is 90 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer retainer partnerships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Monthly retainers ($5K-$15K/month) give you dedicated engineering capacity with priority scheduling, predictable costs, and an embedded team that knows your client work. Ideal for agencies with consistent build volume who want a stable extension rather than one-off project engagements.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
