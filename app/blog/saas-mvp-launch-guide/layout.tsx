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

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
