import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot — Federal Contract Intelligence",
  description:
    "CapturePilot is Americurial's flagship SaaS platform that matches small businesses with federal government contracts they can actually win. AI-powered scoring, readiness assessments, and competitor intelligence.",
  keywords:
    "CapturePilot, federal contracts, government contracts, AI matching, NAICS classification, GovTech, SAM.gov, small business, veteran-owned, readiness score",
  openGraph: {
    title: "CapturePilot — Federal Contract Intelligence | Americurial",
    description:
      "AI-powered federal contract intelligence. Match with opportunities, score your readiness, and track competitors — all in one dashboard.",
    url: "https://www.americurial.com/capturepilot",
  },
  alternates: { canonical: "https://www.americurial.com/capturepilot" },
};

export default function CapturePilotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
