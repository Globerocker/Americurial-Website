import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Content Marketing for Agencies",
  description:
    "How AI is reshaping content strategy for digital agencies — from copywriting automation to personalized campaigns at scale, and why the human touch still matters.",
  keywords:
    "AI content marketing, agency content strategy, AI copywriting, personalized content, SEO automation, digital agency marketing",
  openGraph: {
    title: "AI Content Marketing for Agencies | Americurial",
    description:
      "How AI is reshaping content strategy for digital agencies — from copywriting automation to personalized campaigns at scale.",
    url: "https://www.americurial.com/blog/ai-content-marketing",
  },
  alternates: {
    canonical: "https://www.americurial.com/blog/ai-content-marketing",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
