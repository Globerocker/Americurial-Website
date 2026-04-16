import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Digital Products — High-Performance Sites",
  description:
    "Americurial builds conversion-focused websites and digital products using Next.js, React, and Tailwind CSS. SEO-optimized, blazing-fast, and designed to turn visitors into customers.",
  keywords:
    "web development, Next.js, React, digital products, SEO, conversion optimization, high-performance websites, Americurial",
  openGraph: {
    title: "Web & Digital Products | Americurial",
    description:
      "High-performance websites and digital products built for conversion. Next.js, React, and Tailwind CSS — engineered by a veteran-owned agency.",
    url: "https://www.americurial.com/services/web",
  },
  alternates: { canonical: "https://www.americurial.com/services/web" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.americurial.com/services" },
    { "@type": "ListItem", position: 3, name: "Web & Digital Products", item: "https://www.americurial.com/services/web" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web & Digital Product Development",
  serviceType: "Web Development",
  description:
    "High-performance marketing sites, client portals, and digital products built with Next.js, React, and Tailwind CSS. SEO-optimized with sub-second load times and Lighthouse 95+ scores.",
  url: "https://www.americurial.com/services/web",
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
    name: "Web Deliverables",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO-Optimized Next.js Sites" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom CMS Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Responsive Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics & Conversion Tracking" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Client Portals & Dashboards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Optimization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "WCAG 2.1 AA Accessibility" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What websites does Americurial build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build high-performance marketing sites, SEO-optimized Next.js sites with structured data and sitemaps, client portals with authenticated experiences and role-based access, internal tools and dashboards with real-time data, and templatized landing-page systems that let marketing teams scale campaigns without dev bottlenecks. Every site is conversion-focused and engineered for Lighthouse 95+.",
      },
    },
    {
      "@type": "Question",
      name: "How fast will my site load?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sub-second on first load, consistently. We hit Lighthouse 95+ on performance, accessibility, and SEO through code splitting, image optimization, edge caching on Vercel, and careful bundle management. Server-rendered Next.js pages plus edge deployment means users see content fast, regardless of location.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a website build take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical marketing site ships in 8 weeks across four phases: Strategy & Wireframes (week 1), Design & Prototyping in Figma (weeks 2-3), Development with CMS integration, SEO, and analytics (weeks 4-7), and Launch & Optimization including staging review, performance audits, and DNS cutover (week 8).",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle SEO and analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — both are wired in from day one. We ship server-rendered pages with structured data (Schema.org JSON-LD), optimized metadata, sitemaps, and robots.txt. Analytics includes Google Analytics, conversion funnels, event tracking, and optional heatmaps. Every page is built to rank and every interaction is measurable.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate a CMS so we can edit content ourselves?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We integrate Contentful, Sanity, or headless WordPress depending on your team's needs. Your marketing team edits content through a clean CMS interface while the site remains blazing fast because it is rendered server-side or statically generated. No more engineering tickets for copy changes.",
      },
    },
    {
      "@type": "Question",
      name: "Is the site accessible and mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every site ships WCAG 2.1 AA compliant with semantic markup, keyboard navigation, and screen reader support out of the box. Responsive design is mobile-first — pixel-perfect across every viewport, from phones to 4K displays — because most traffic is mobile and accessibility is a legal requirement, not a nice-to-have.",
      },
    },
  ],
};

export default function WebServiceLayout({
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
