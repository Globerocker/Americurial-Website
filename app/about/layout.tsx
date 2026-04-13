import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Americurial is a veteran-owned digital agency founded by Andre Schuler. We bring military discipline to software engineering — building SaaS, GovTech, and AI-powered products.",
  keywords:
    "Americurial, veteran-owned, digital agency, Andre Schuler, CapturePilot, military, software engineering, about us",
  openGraph: {
    title: "About | Americurial",
    description:
      "Built by veterans. Driven by mission. Learn how Americurial brings military discipline to building production-grade software.",
    url: "https://www.americurial.com/about",
  },
  alternates: { canonical: "https://www.americurial.com/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
