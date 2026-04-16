import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Launch a SaaS MVP in 90 Days",
  description:
    "A battle-tested blueprint for launching a SaaS MVP in 90 days. Validate before you code, pick the right stack, build the core loop, integrate Stripe, and launch.",
  keywords:
    "SaaS MVP, launch SaaS, 90 day MVP, Next.js Supabase, startup launch, SaaS development guide, Stripe integration, Vercel deployment",
  openGraph: {
    title: "How to Launch a SaaS MVP in 90 Days | Americurial",
    description:
      "Validate before you code, pick the right stack, build the core loop first, and launch to 10 users before 10,000. A battle-tested blueprint.",
    url: "https://www.americurial.com/blog/saas-mvp-launch-guide",
  },
  alternates: {
    canonical: "https://www.americurial.com/blog/saas-mvp-launch-guide",
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
      name: "How to Launch a SaaS MVP in 90 Days",
      item: "https://www.americurial.com/blog/saas-mvp-launch-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Launch a SaaS MVP in 90 Days",
  description:
    "A battle-tested blueprint for launching a SaaS MVP in 90 days. Validate before you code, pick the right stack, build the core loop, integrate Stripe, and launch to 10 users before 10,000.",
  image: "https://www.americurial.com/og/saas-mvp-launch-guide.png",
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
  datePublished: "2026-03-20",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.americurial.com/blog/saas-mvp-launch-guide",
  articleSection: "SaaS Development",
  keywords: [
    "SaaS MVP",
    "90 day launch",
    "Next.js",
    "Supabase",
    "Stripe",
    "Vercel",
    "startup launch",
  ],
  wordCount: 1500,
  inLanguage: "en-US",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I validate a SaaS idea before writing code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Build a landing page with a waitlist or pre-order option that describes the problem, the solution, and a pricing section with a call to action. Drive targeted traffic through paid ads, relevant community posts, and direct outreach to your ideal customer profile. If you cannot get fifty waitlist signups or five paid deposits in two weeks, you either have a positioning problem or a product problem. Pair this with five to ten customer discovery conversations — not surveys — to reshape feature priorities before committing months of development.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stack should I use for a fast SaaS MVP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js for the frontend and API layer, Supabase for the Postgres database and authentication, and Vercel for deployment. Next.js gives you server-side rendering, API routes, and React components in one framework. Supabase provides auth, real-time subscriptions, storage, and row-level security out of the box. Vercel handles zero-config CI/CD, preview deployments, and automatic scaling. This combination eliminates the most common time sinks in early-stage development and scales from your first user to your ten-thousandth without touching infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What is the core loop and why build it first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The core loop is the single workflow that delivers your primary value proposition. For a project management tool, it is creating and completing tasks. For CapturePilot, it is entering a company URL and receiving matched federal contracts with readiness scores. Spend your first thirty days building only the core loop — not the settings page, admin dashboard, billing integration, or onboarding wizard. If a user can complete the core loop and experience the value, you have an MVP. Everything else is enhancement that your early users will tell you to prioritize.",
      },
    },
    {
      "@type": "Question",
      name: "When should I integrate Stripe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before you launch, not after. Two reasons: charging money immediately separates interested users from committed users, and payment integration always takes longer than expected — discovering edge cases with ten users is less painful than with a thousand. Stripe Checkout and the Customer Portal handle most subscription needs for an MVP without custom billing pages. A competent developer can integrate Stripe in one to two days. Start with a simple pricing structure of one or two tiers and monthly billing — you can add complexity later.",
      },
    },
    {
      "@type": "Question",
      name: "How many users should I target for my first launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ten paying users. Not free users, not trial signups — ten people who have entered a credit card and are using your product to solve a real problem. These first ten are your most valuable asset because they find bugs your testing missed, request features you did not anticipate, provide testimonials, and demonstrate whether your core loop delivers enough value to justify the price. If you cannot retain ten users, no amount of marketing will fix the underlying product problem.",
      },
    },
    {
      "@type": "Question",
      name: "How did Americurial launch CapturePilot in under 90 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We went from initial commit to live beta users in under ninety days using Next.js, Supabase, Stripe, and Vercel — the exact stack we recommend. The technology was never the bottleneck. Understanding the federal contracting market, validating the core loop of URL-to-matches, and shipping a tight feature set before adding enhancements is what made ninety days achievable. We use the same process for client SaaS products today.",
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
