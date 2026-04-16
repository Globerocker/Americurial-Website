import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Page Not Found — Americurial",
  description:
    "The page you were looking for could not be found. Explore Americurial's services, case studies, and blog.",
  robots: { index: false, follow: true },
};

const popularLinks = [
  { href: "/services", label: "Our Services", description: "SaaS, GovTech, AI, and web development" },
  { href: "/services/saas", label: "SaaS MVP Development", description: "Ship a production SaaS in weeks, not months" },
  { href: "/services/govtech", label: "GovTech Development", description: "Software for government contractors and agencies" },
  { href: "/capturepilot", label: "CapturePilot Case Study", description: "The federal contracting platform we built" },
  { href: "/blog", label: "Blog", description: "GovTech trends, SaaS launches, and veteran business growth" },
  { href: "/contact", label: "Get in Touch", description: "Let's talk about your project" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-3">Error 404</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            We couldn&apos;t find that page.
          </h1>
          <p className="text-lg text-stone-400 max-w-xl mx-auto mb-10">
            The URL may have moved or never existed. Try one of the pages below, or head back to{" "}
            <Link href="/" className="underline underline-offset-4 hover:text-white">the homepage</Link>.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left mt-12">
            {popularLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-xl border border-stone-800 bg-stone-900 p-5 hover:border-stone-600 hover:bg-stone-800 transition"
              >
                <div className="font-semibold text-white group-hover:underline">{l.label}</div>
                <div className="text-sm text-stone-400 mt-1">{l.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
