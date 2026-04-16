import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Veterans — Built by Veterans, for Veterans",
  description: "Americurial is a veteran-owned digital agency helping SDVOSB and VOSB businesses win federal contracts. We built CapturePilot. We build what veterans need to win.",
  alternates: { canonical: "https://www.americurial.com/for/veterans" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "For", item: "https://www.americurial.com/for/veterans" },
    { "@type": "ListItem", position: 3, name: "Veterans", item: "https://www.americurial.com/for/veterans" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Built by Veterans, for Veteran-Owned Businesses",
  url: "https://www.americurial.com/for/veterans",
  description:
    "Americurial is a veteran-owned digital agency helping SDVOSB and VOSB businesses win federal contracts. We built CapturePilot. We build what veterans need to win.",
  audience: {
    "@type": "Audience",
    audienceType: "Veteran-Owned Businesses (SDVOSB / VOSB)",
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
      name: "Is Americurial a veteran-owned business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Americurial is veteran-owned and veteran-operated, founded by Andre Schuler in Jacksonville, FL. We build the digital infrastructure that helps fellow veteran entrepreneurs win federal contracts and scale their businesses. We understand the SDVOSB and VOSB certification process, the set-aside landscape, and how to position a veteran-owned business for VA and DoD contracts.",
      },
    },
    {
      "@type": "Question",
      name: "What is CapturePilot and why does it matter for veterans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot is our flagship GovTech SaaS — a federal contract intelligence platform that ingests 37K+ SAM.gov opportunities daily and uses a 140-point scoring algorithm to surface the right contracts for each contractor. We built it because veteran-owned businesses deserved enterprise-grade capture intelligence without the enterprise price tag. Today it tracks 2,276+ veteran set-asides and serves as the backbone for our veteran clients.",
      },
    },
    {
      "@type": "Question",
      name: "What services do you offer veteran-owned businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom GovTech platforms for pipeline management, teaming partners, and compliance tracking; professional websites and capability statements tailored to government contracting; SDVOSB/VOSB positioning strategy; access to our veteran-owned partner network for teaming and joint ventures; and a growth-stage plan covering everything from first contract to $10M in revenue.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with SDVOSB certification and set-aside strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We understand the 3% federal SDVOSB contracting goal, the $4.5M sole-source threshold, and the full VA/SBA certification process. Our readiness assessments evaluate your digital presence, capabilities, and market position — then we build the tools, website, and capability statement systems you need to compete for set-asides you qualify for.",
      },
    },
    {
      "@type": "Question",
      name: "How do you work with veteran-owned businesses differently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veteran values drive how we operate: integrity, accountability, and mission focus. We run every engagement like a mission — clear objectives, tight timelines, zero wasted effort. No slide decks about what we could build; we build it. And because Andre Schuler is a veteran, every conversation starts with shared language and shared standards.",
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
