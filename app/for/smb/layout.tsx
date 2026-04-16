import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Small Business — Enterprise Software at SMB Budgets",
  description: "Americurial builds custom software, websites, and digital tools for small businesses. Fixed-price quotes, no hidden fees, enterprise-grade quality.",
  alternates: { canonical: "https://www.americurial.com/for/smb" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "For", item: "https://www.americurial.com/for/smb" },
    { "@type": "ListItem", position: 3, name: "Small Business", item: "https://www.americurial.com/for/smb" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Enterprise Software for Small Business Budgets",
  url: "https://www.americurial.com/for/smb",
  description:
    "Americurial builds custom software, websites, and digital tools for small businesses. Fixed-price quotes, no hidden fees, enterprise-grade quality.",
  audience: {
    "@type": "Audience",
    audienceType: "Small and Medium Businesses",
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
      name: "Can small businesses really afford custom software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build enterprise-grade tools sized and priced for SMBs — typically 50% less than traditional enterprise firms. Fixed-price quotes with clear scope and no hidden fees. Average project ships in 90 days, and most clients recoup the investment through time savings or new revenue within the first year.",
      },
    },
    {
      "@type": "Question",
      name: "What do you actually build for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High-performance marketing sites that convert visitors into customers, custom business software (CRMs, dashboards, client portals) that replaces duct-taped spreadsheets, Stripe-powered checkout and subscription billing, analytics and reporting dashboards, and government-readiness platforms if you want to sell to federal or state agencies.",
      },
    },
    {
      "@type": "Question",
      name: "How does pricing work for SMB engagements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project Sprints run $15K-$50K one-time for a defined scope with 6-12 week delivery and 30 days of post-launch support. Growth Retainers start at $5K/month for ongoing development and feature work. Every quote is fixed-price — you know the number up front, and there are no surprise invoices.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses that want to sell to the government?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — government readiness is a specialty. We build the digital presence, capability statements, and contractor platforms that get small businesses contract-ready. We also run CapturePilot, our federal contract intelligence platform, which helps SMBs identify and win the right SAM.gov opportunities from day one.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the project launches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every Project Sprint includes 30 days of post-launch support for bug fixes and small adjustments. After that, most SMB clients move to a Growth Retainer so we can keep shipping features, patch security issues, and iterate on performance. Software isn't a one-time project — we keep your tools alive as your business grows.",
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
