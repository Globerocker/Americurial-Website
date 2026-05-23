import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Manual",
  description:
    "Federal contracting playbooks for veteran-owned firms. SAM.gov, capability statements, set-asides, Sources Sought, proposal writing, growth — the same plays we run for clients.",
  keywords:
    "federal contracting blog, SAM.gov, SDVOSB, capability statement, Sources Sought, proposal writing, set-asides, veteran-owned business",
  openGraph: {
    title: "Field Manual | Americurial",
    description:
      "Federal contracting playbooks for veteran-owned firms. The same plays we run for clients.",
    url: "https://www.americurial.com/blog",
  },
  alternates: { canonical: "https://www.americurial.com/blog" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.americurial.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.americurial.com/blog",
    },
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
