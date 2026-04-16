import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Development — Full-Stack Product Builds",
  description:
    "We build subscription SaaS platforms from zero to launch. Multi-tenant architecture, Stripe billing, admin dashboards, and CI/CD pipelines — shipped in 12 weeks by a veteran-owned digital agency.",
  keywords:
    "SaaS development, subscription software, multi-tenant architecture, Stripe billing, full-stack product build, veteran-owned agency, Americurial",
  openGraph: {
    title: "SaaS Development — Full-Stack Product Builds | Americurial",
    description:
      "From zero to recurring revenue. We architect, design, and ship subscription software with the infrastructure to scale from day one.",
    url: "https://www.americurial.com/services/saas",
  },
  alternates: { canonical: "https://www.americurial.com/services/saas" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.americurial.com/services" },
    { "@type": "ListItem", position: 3, name: "SaaS Development", item: "https://www.americurial.com/services/saas" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SaaS MVP Development",
  serviceType: "SaaS MVP Development",
  description:
    "Full-stack subscription software builds from zero to launch — multi-tenant architecture, Stripe billing, admin dashboards, RBAC, and CI/CD pipelines, shipped in 12 weeks.",
  url: "https://www.americurial.com/services/saas",
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
    name: "SaaS Deliverables",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Tenant Architecture" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stripe Billing Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Admin Dashboards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "User Onboarding Flows" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Role-Based Access Control" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CI/CD Pipelines" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics & Reporting" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a SaaS MVP take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our standard SaaS build runs 12 weeks across four phases: Discovery & Design (weeks 1-2), Core Build with auth, multi-tenancy, billing, and features in 2-week sprints (weeks 3-8), Integration & Testing (weeks 9-10), and Launch & Optimization (weeks 11-12). You go live with real users on day 90 — not a prototype.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a SaaS build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every build includes multi-tenant architecture with row-level security, Stripe billing with subscriptions and usage-based pricing, admin dashboards for managing users and metrics, guided onboarding flows, role-based access control, CI/CD pipelines with staging and production environments, RESTful API design with versioning and rate limiting, and built-in analytics tracking MRR, churn, and activation.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stack do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js and React on the frontend, TypeScript throughout, Tailwind CSS for styling, Supabase (Postgres) for database and auth with row-level security, Stripe for billing, and Vercel for hosting with zero-downtime deployments. This stack is production-proven — it powers CapturePilot, which we built and operate ourselves with 40K+ opportunities processed daily.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle design and UX or just engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle the full stack: product strategy, UI/UX design, wireframes, high-fidelity prototypes, frontend and backend engineering, deployment, and post-launch iteration. If you already have a designer or a design system, we integrate seamlessly. Either way, you get production-quality design and code from the same team.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every SaaS sprint includes 30 days of post-launch support for bug fixes and minor adjustments. Most clients transition to a Growth Retainer ($5K-$15K/month) for continued feature development, priority bug fixes, A/B testing, performance monitoring, and dedicated engineering capacity with a Slack channel and direct engineer access.",
      },
    },
    {
      "@type": "Question",
      name: "Can you take over an existing SaaS codebase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly audit and take over existing codebases. We give you an honest assessment of code quality, test coverage, infrastructure, and technical debt, then recommend refactoring only where it genuinely saves time or unblocks the roadmap. No rebuild-for-rebuild's-sake proposals.",
      },
    },
  ],
};

export default function SaaSLayout({
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
