import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on SaaS development, GovTech, AI content marketing, and growing veteran-owned businesses. Expert perspectives from the Americurial team.",
  keywords:
    "Americurial blog, SaaS development, GovTech, AI marketing, veteran-owned business, digital agency insights, government technology",
  openGraph: {
    title: "Blog | Americurial",
    description:
      "Expert insights on building SaaS products, navigating GovTech, and growing veteran-owned businesses.",
    url: "https://www.americurial.com/blog",
  },
  alternates: { canonical: "https://www.americurial.com/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
