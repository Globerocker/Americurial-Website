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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://www.americurial.com/terms" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service",
  url: "https://www.americurial.com/terms",
  description:
    "Americurial LLC terms of service. Read our terms and conditions for using our website and services.",
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

export default function TermsLayout({
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
