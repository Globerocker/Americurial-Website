import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growing Your Veteran-Owned Business",
  description:
    "A practical guide to leveraging SDVOSB and VOSB status, winning federal set-asides, building past performance, and transitioning from subcontractor to prime.",
  keywords:
    "veteran-owned business, SDVOSB, VOSB, federal set-asides, government contracting, past performance, teaming agreements, veteran entrepreneur",
  openGraph: {
    title: "Growing Your Veteran-Owned Business | Americurial",
    description:
      "Leverage SDVOSB status, win set-asides, build past performance, and grow from subcontractor to prime. A veteran entrepreneur playbook.",
    url: "https://www.americurial.com/blog/veteran-owned-business-growth",
  },
  alternates: {
    canonical:
      "https://www.americurial.com/blog/veteran-owned-business-growth",
  },
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
      name: "Blog",
      item: "https://www.americurial.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Growing Your Veteran-Owned Business",
      item: "https://www.americurial.com/blog/veteran-owned-business-growth",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Growing Your Veteran-Owned Business",
  description:
    "A practical guide to leveraging SDVOSB and VOSB status, winning federal set-asides, building past performance, using teaming agreements, and transitioning from subcontractor to prime.",
  image:
    "https://www.americurial.com/og/veteran-owned-business-growth.png",
  author: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
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
  datePublished: "2026-03-27",
  dateModified: "2026-04-16",
  mainEntityOfPage:
    "https://www.americurial.com/blog/veteran-owned-business-growth",
  articleSection: "Veteran-Owned Business",
  keywords: [
    "SDVOSB",
    "VOSB",
    "federal set-asides",
    "past performance",
    "teaming agreements",
    "veteran entrepreneur",
    "government contracting",
  ],
  wordCount: 1700,
  inLanguage: "en-US",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between SDVOSB and VOSB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SDVOSB stands for Service-Disabled Veteran-Owned Small Business and requires the owner to have a service-connected disability rating from the VA. VOSB is the broader Veteran-Owned Small Business designation. Both must be verified through the SBA's Veterans Small Business Certification program. The federal government has a statutory goal to award at least 3 percent of all federal prime contracting dollars to SDVOSBs, which creates institutional pressure on agencies to find and fund qualified veteran-owned contractors.",
      },
    },
    {
      "@type": "Question",
      name: "What are SDVOSB set-asides and why do they matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set-aside contracts are opportunities reserved exclusively for specific small business categories. SDVOSB set-asides eliminate competition from large contractors entirely and limit your competition to other service-disabled veteran-owned businesses, dramatically improving your probability of win compared to full and open competitions. The Department of Veterans Affairs operates under the Veterans First Contracting Program, giving SDVOSBs and VOSBs priority for contracts at VA facilities — a concentrated market for healthcare, facilities, IT, and administrative services.",
      },
    },
    {
      "@type": "Question",
      name: "How do new veteran-owned businesses build past performance from zero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with micro-purchases under $10,000, which use simplified acquisition procedures and do not require competitive bidding. Government purchase card holders at every federal installation make these buys regularly, and each one creates documented past performance. Next, pursue Simplified Acquisition Procedure contracts in the $10,000 to $250,000 range — these weight technical approach and price more than past performance. The 8(a) Business Development Program offers sole-source contracts up to $4.5 million for qualifying businesses, which can rapidly build your portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "When should I use teaming agreements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teaming is a strategic tool, not a sign of weakness. A well-structured teaming agreement pairs your veteran-owned status and specific capabilities with a partner who brings complementary strengths — technical expertise in a new domain, facility clearances you do not yet hold, or past performance on similar contracts. The most effective relationships are built on genuine mutual benefit, not transactional pass-through arrangements. Pursue partners who respect your capabilities and share workload fairly, and consider SBA Mentor-Protege programs for joint venture eligibility and access to a mentor's past performance.",
      },
    },
    {
      "@type": "Question",
      name: "How do I transition from subcontractor to prime contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gradually. As a subcontractor you execute a defined scope under someone else's contract. As a prime you own the customer relationship, manage full scope, handle all compliance and reporting, and assume financial risk. The transition requires investing in proposal writing capability, contract management systems, DCAA-compliant financial controls, and a business development function that qualifies opportunities twelve to eighteen months before solicitation. Start by priming small set-asides while maintaining subcontracting revenue. Within two to three years, a veteran-owned business can transition from $500,000 subcontracting to $5 million in prime federal work.",
      },
    },
    {
      "@type": "Question",
      name: "Why are SAM.gov registration and certifications so important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your SAM.gov registration and SDVOSB/VOSB certification are your storefront in the federal marketplace. If they are incomplete, inaccurate, or expired, you are invisible to the contracting officers searching for businesses like yours. The registration must reflect your current NAICS codes, capabilities, and socioeconomic designations. The SBA's Veterans Small Business Certification program verifies your veteran-owned status. Both must be current before you can compete for set-asides or be found in agency market research.",
      },
    },
  ],
};

export default function BlogPostLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
