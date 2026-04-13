import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Startups — Zero to MVP in 90 Days",
  description: "Americurial builds production SaaS products for startups. Full-stack development, Stripe billing, analytics dashboards — shipped in 90 days or less.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
