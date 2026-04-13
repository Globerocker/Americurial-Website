import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Data Platforms — Machine Learning in Production",
  description:
    "Americurial builds ML pipelines, AI-powered automation, and intelligent data systems that run in production. From OpenAI integration to custom scoring engines — we ship AI that works.",
  keywords:
    "AI development, machine learning pipelines, OpenAI integration, data platforms, NLP, scoring engines, ETL pipelines, AI automation, veteran-owned agency, Americurial",
  openGraph: {
    title: "AI & Data Platforms — Machine Learning in Production | Americurial",
    description:
      "ML pipelines, intelligent scoring, and AI-powered automation built into production-grade systems. From OpenAI to custom models — we ship AI that works.",
    url: "https://www.americurial.com/services/ai",
  },
  alternates: { canonical: "https://www.americurial.com/services/ai" },
};

export default function AIServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
