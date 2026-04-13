import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GovTech Solutions — Federal-Grade Platforms",
  description:
    "Americurial builds compliance-ready government technology platforms. SAM.gov integration, NAICS classification, opportunity matching, and contractor intelligence for federal contractors and agencies.",
  keywords:
    "GovTech development, SAM.gov integration, federal software, government contractor platforms, NAICS classification, opportunity matching, veteran-owned agency",
  openGraph: {
    title: "GovTech Solutions — Federal-Grade Platforms | Americurial",
    description:
      "Compliance-ready government technology platforms. SAM.gov integration, contractor intelligence, and federal-grade software from a veteran-owned digital agency.",
    url: "https://www.americurial.com/services/govtech",
  },
  alternates: { canonical: "https://www.americurial.com/services/govtech" },
};

export default function GovTechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
