import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Americurial builds SaaS platforms, GovTech solutions, AI-powered products, and high-performance web applications. Full-stack development from a veteran-owned digital agency.",
  keywords:
    "SaaS development, GovTech solutions, AI platforms, web development, digital products, veteran-owned agency, software engineering, Americurial services",
  openGraph: {
    title: "Services | Americurial",
    description:
      "Full-stack SaaS, GovTech, AI, and web development from a veteran-owned digital agency that ships production-grade software.",
    url: "https://www.americurial.com/services",
  },
  alternates: { canonical: "https://www.americurial.com/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
