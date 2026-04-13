import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Americurial LLC privacy policy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Americurial",
    description:
      "Americurial LLC privacy policy. Learn how we collect, use, and protect your personal information.",
    url: "https://www.americurial.com/privacy",
  },
  alternates: { canonical: "https://www.americurial.com/privacy" },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
