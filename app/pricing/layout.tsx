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

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
