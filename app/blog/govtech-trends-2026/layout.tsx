import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GovTech Trends in 2026",
  description:
    "AI in procurement, SAM.gov modernization, cloud-first mandates, and data-driven capture management. What government contractors need to know in 2026.",
  keywords:
    "GovTech trends 2026, AI procurement, SAM.gov modernization, cloud-first government, federal technology, government contracting trends",
  openGraph: {
    title: "GovTech Trends in 2026 | Americurial",
    description:
      "AI in procurement, SAM.gov modernization, cloud-first mandates, and the rise of data-driven capture management.",
    url: "https://www.americurial.com/blog/govtech-trends-2026",
  },
  alternates: {
    canonical: "https://www.americurial.com/blog/govtech-trends-2026",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
