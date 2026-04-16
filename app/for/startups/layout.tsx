import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Startups — Zero to MVP in 90 Days",
  description: "Americurial builds production SaaS products for startups. Full-stack development, Stripe billing, analytics dashboards — shipped in 90 days or less.",
  alternates: { canonical: "https://www.americurial.com/for/startups" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "For", item: "https://www.americurial.com/for/startups" },
    { "@type": "ListItem", position: 3, name: "Startups", item: "https://www.americurial.com/for/startups" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Zero to MVP in 90 Days for Startups",
  url: "https://www.americurial.com/for/startups",
  description:
    "Americurial builds production SaaS products for startups. Full-stack development, Stripe billing, analytics dashboards — shipped in 90 days or less.",
  audience: {
    "@type": "Audience",
    audienceType: "Startups",
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
      name: "Can you really ship a startup MVP in 90 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our average MVP delivery is 90 days from discovery call to production — not a prototype, but a real product with real users. We run 2-week sprint cycles with working software every iteration. Week 1 is scope and architecture; weeks 2-10 are focused build sprints; weeks 11-12 are launch, monitoring setup, and onboarding polish.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a startup MVP build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full-stack product: Next.js, React, Supabase, Stripe, and Vercel — the modern stack that lets you ship fast without technical debt. You get Stripe-ready billing with trials and upgrade flows, event tracking and admin dashboards from day one, CI/CD pipelines with staging and production environments, and error monitoring plus security hardening — not an afterthought.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with pre-seed founders without a technical co-founder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many of our startup clients are non-technical founders going from validated idea to live MVP. We help you prioritize the features that matter, avoid over-engineering, and get to market fast. If you have a validated market and a budget, we can be your technical team for the build — and transition to retainer support after launch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you stay on after the MVP launches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most startup clients transition directly from launch to a Growth Retainer so we can keep shipping. Post-launch iteration is where the real product work happens: A/B testing, feature sprints, performance optimization, and building what your early users actually need. Ship fast, learn fast, iterate fast.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Americurial different from other startup dev shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We built and operate CapturePilot ourselves — a production SaaS with 40K+ users and real federal data processing. That means we build your MVP the way we build our own products: pragmatic, shippable, and designed to scale. No account managers, no fluff, no junior devs on your project. Every engineer writes production code.",
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
