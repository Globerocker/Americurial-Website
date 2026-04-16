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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.americurial.com/privacy" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: "https://www.americurial.com/privacy",
  description:
    "Americurial LLC privacy policy. Learn how we collect, use, and protect your personal information.",
  isPartOf: {
    "@type": "WebSite",
    name: "Americurial",
    url: "https://www.americurial.com",
  },
  about: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      {children}
    </>
  );
}
