import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Development — Full-Stack Product Builds",
  description:
    "We build subscription SaaS platforms from zero to launch. Multi-tenant architecture, Stripe billing, admin dashboards, and CI/CD pipelines — shipped in 12 weeks by a veteran-owned digital agency.",
  keywords:
    "SaaS development, subscription software, multi-tenant architecture, Stripe billing, full-stack product build, veteran-owned agency, Americurial",
  openGraph: {
    title: "SaaS Development — Full-Stack Product Builds | Americurial",
    description:
      "From zero to recurring revenue. We architect, design, and ship subscription software with the infrastructure to scale from day one.",
    url: "https://www.americurial.com/services/saas",
  },
  alternates: { canonical: "https://www.americurial.com/services/saas" },
};

export default function SaaSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
