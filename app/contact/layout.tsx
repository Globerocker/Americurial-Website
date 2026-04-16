import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Americurial. Book a strategy call, send us a message, or visit our Jacksonville FL office. Veteran-owned digital agency ready to build.",
  keywords:
    "contact Americurial, book a call, digital agency contact, veteran-owned agency, Jacksonville FL, strategy call",
  openGraph: {
    title: "Contact | Americurial",
    description:
      "Ready to build? Book a strategy call or send us a message. Veteran-owned digital agency in Jacksonville, FL.",
    url: "https://www.americurial.com/contact",
  },
  alternates: { canonical: "https://www.americurial.com/contact" },
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
      name: "Contact",
      item: "https://www.americurial.com/contact",
    },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Americurial",
  url: "https://www.americurial.com/contact",
  inLanguage: "en-US",
  description:
    "Contact Americurial — a veteran-owned digital agency in Jacksonville, Florida specializing in GovTech, SaaS MVPs, AI integration, and web development. Book a strategy call or send a message.",
  isPartOf: {
    "@type": "WebSite",
    name: "Americurial",
    url: "https://www.americurial.com",
  },
  mainEntity: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
    logo: "https://www.americurial.com/logo.png",
    description:
      "Veteran-owned digital agency in Jacksonville, Florida. We build SaaS products, GovTech platforms, and AI-integrated web applications.",
    founder: {
      "@type": "Person",
      name: "Andre Schuler",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@americurial.com",
        url: "https://meetings-na2.hubspot.com/americurial/intro-call",
        areaServed: "US",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://meetings-na2.hubspot.com/americurial/intro-call",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.americurial.com/#organization",
  name: "Americurial",
  url: "https://www.americurial.com",
  logo: "https://www.americurial.com/logo.png",
  image: "https://www.americurial.com/logo.png",
  description:
    "Veteran-owned digital agency specializing in GovTech, SaaS MVP development, AI integration, and web development.",
  founder: {
    "@type": "Person",
    name: "Andre Schuler",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jacksonville",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "GovTech",
    "SaaS MVP Development",
    "AI Integration",
    "Web Development",
    "Next.js",
    "Supabase",
    "Federal Contracting",
  ],
  sameAs: [
    "https://www.capturepilot.com",
  ],
};

export default function ContactLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      {children}
    </>
  );
}
