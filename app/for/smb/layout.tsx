import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Small Business — Enterprise Software at SMB Budgets",
  description: "Americurial builds custom software, websites, and digital tools for small businesses. Fixed-price quotes, no hidden fees, enterprise-grade quality.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
