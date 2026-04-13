import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Generator",
  description: "Internal tool for generating social media content.",
  robots: { index: false, follow: false },
};

export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
