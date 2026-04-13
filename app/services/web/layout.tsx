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

export default function WebServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
