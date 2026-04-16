import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Generator",
  description: "Internal tool for generating social media content.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.americurial.com/tools/social" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.americurial.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.americurial.com/tools/social" },
    { "@type": "ListItem", position: 3, name: "Social Media Generator", item: "https://www.americurial.com/tools/social" },
  ],
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Americurial Social Media Generator",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Social Media Content Generator",
  operatingSystem: "Web",
  url: "https://www.americurial.com/tools/social",
  description:
    "Free AI-powered social media content generator. Produces LinkedIn Company Page, LinkedIn Personal, and Twitter/X posts tailored to goals like Informative, Engagement, Lead Generation, and Thought Leadership.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "Americurial",
    url: "https://www.americurial.com",
  },
  featureList: [
    "LinkedIn Company Page post generation",
    "LinkedIn Personal post generation",
    "Twitter/X post generation",
    "Goal-based content (Informative, Engagement, Lead Gen, Thought Leadership)",
    "One-click copy to clipboard",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Americurial Social Media Generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Social Media Generator is a free tool built by Americurial to help founders, marketers, and solopreneurs quickly produce high-quality social posts for LinkedIn and Twitter/X. No signup, no credit card, no limits — just paste context, pick a channel and goal, and generate.",
      },
    },
    {
      "@type": "Question",
      name: "Which platforms does the generator support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The generator currently produces content optimized for LinkedIn Company Pages, LinkedIn Personal profiles, and Twitter/X. Each platform uses its own tone and length conventions — LinkedIn posts run longer and more narrative, while Twitter/X output stays concise and punchy within platform character limits.",
      },
    },
    {
      "@type": "Question",
      name: "What content goals can I target?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can target four goals: Informative (explain an idea or insight), Engagement (drive comments and reactions), Lead Generation (surface a clear CTA to book a call or visit a page), and Thought Leadership (position yourself as an expert in your field). The prompt structure and tone shift based on which goal you select.",
      },
    },
  ],
};

export default function SocialLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
