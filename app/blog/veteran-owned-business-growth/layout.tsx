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

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
