import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for SaaS development, ongoing retainers, and enterprise GovTech builds. Project sprints from $15K, retainers from $5K/month, and custom enterprise engagements.",
  keywords:
    "SaaS pricing, software development cost, GovTech pricing, retainer, project sprint, Americurial pricing, veteran-owned agency",
  openGraph: {
    title: "Pricing | Americurial",
    description:
      "Transparent pricing for software development. Project sprints, growth retainers, and enterprise GovTech engagements.",
    url: "https://www.americurial.com/pricing",
  },
  alternates: { canonical: "https://www.americurial.com/pricing" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.americurial.com/pricing" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Americurial Development Services",
  serviceType: "Custom Software Development",
  description:
    "Transparent pricing for SaaS development, ongoing retainers, and enterprise GovTech builds from a veteran-owned digital agency.",
  url: "https://www.americurial.com/pricing",
  provider: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "5000",
    highPrice: "50000",
    offerCount: "3",
    offers: [
      {
        "@type": "Offer",
        name: "Project Sprint",
        priceCurrency: "USD",
        price: "15000",
        description:
          "MVP or feature build with a defined scope, clear timeline, and production deployment included. 6-12 week delivery with 30 days of post-launch support.",
        url: "https://meetings-na2.hubspot.com/americurial/intro-call",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Growth Retainer",
        priceCurrency: "USD",
        price: "5000",
        description:
          "Ongoing development and support from a dedicated engineering team. Weekly sprint cycles, priority support, Slack channel access.",
        url: "https://meetings-na2.hubspot.com/americurial/intro-call",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Enterprise / GovTech",
        priceCurrency: "USD",
        price: "custom",
        description:
          "Full platform builds with compliance, security hardening, and federal-grade infrastructure. SAM.gov, USASpending, and multi-tenant deployments.",
        url: "https://meetings-na2.hubspot.com/americurial/intro-call",
        availability: "https://schema.org/InStock",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a typical Americurial project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most MVPs and feature builds ship in 6-12 weeks under our Project Sprint model. Complex platforms with integrations and compliance requirements can take 3-6 months — GovTech builds run roughly 16 weeks, AI platform builds run 12 weeks. You get a precise timeline during the scoping call based on your specific requirements, not a generic estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Project Sprint cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project Sprints run $15K-$50K one-time for a defined scope. The price covers full architecture and system design, UI/UX design and prototyping, frontend and backend engineering, production deployment on Vercel or AWS, and 30 days of post-launch support. The final number is fixed during scoping — no surprise invoices.",
      },
    },
    {
      "@type": "Question",
      name: "How do Growth Retainers work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Growth Retainers run $5K-$15K per month and give you a dedicated engineering team embedded in your product. Includes weekly sprint cycles with demos, priority support and bug fixes, feature development and A/B testing, performance monitoring and optimization, and a Slack channel with direct engineer access. Predictable monthly cost, no ticket queues.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with early-stage startups on a limited budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many of our clients are founders going from idea to MVP. We help you prioritize the features that matter, avoid over-engineering, and get to market fast. If you have a validated idea and a budget, we can build it. Typical startup MVP lands in the $15K-$35K range under the Project Sprint model.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the project launches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every Project Sprint includes 30 days of post-launch support for bug fixes and minor adjustments. For ongoing development, most clients transition to a Growth Retainer so we can continue shipping features and optimizing performance. Retainer clients get priority scheduling for feature sprints, security patches, and dependency management.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with our existing codebase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We regularly take over existing codebases, audit them, and build from there. You get an honest assessment of codebase quality, test coverage, and technical debt, then we recommend refactoring only when it genuinely saves time or money. No rebuild-for-rebuild's-sake proposals — pragmatic work only.",
      },
    },
  ],
};

export default function PricingLayout({
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
