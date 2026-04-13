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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
