import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Americurial LLC terms of service. Read our terms and conditions for using our website and services.",
  openGraph: {
    title: "Terms of Service | Americurial",
    description:
      "Americurial LLC terms of service. Read our terms and conditions for using our website and services.",
    url: "https://www.americurial.com/terms",
  },
  alternates: { canonical: "https://www.americurial.com/terms" },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
