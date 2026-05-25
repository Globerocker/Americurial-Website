import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight, Download, Mail, Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Free Downloads & Playbooks | Americurial",
  description:
    "Field-tested capture frameworks and worksheets we use with every Americurial agency client — packaged into free PDFs you can use on your next federal bid.",
  alternates: {
    canonical: "https://www.americurial.com/downloads",
  },
};

interface DownloadEntry {
  slug: string;
  title: string;
  blurb: string;
  pages: number;
  inside: string[];
  badge?: string;
}

const DOWNLOADS: DownloadEntry[] = [
  {
    slug: "win-your-first-government-contract",
    title: "Win Your First Government Contract",
    blurb:
      "The 24-page playbook we built for agencies and consultants helping first-time federal bidders. Bid/no-bid filter, PWin scoring, RFP skeleton, and the pricing-to-win worksheet — same toolkit we run internally before every capture.",
    pages: 24,
    inside: [
      "Bid / No-Bid Decision Matrix",
      "PWin (Probability of Win) Calculator",
      "RFP Response Framework",
      "Pricing-to-Win Worksheet",
    ],
    badge: "New",
  },
];

export default function DownloadsHub() {
  return (
    <main className="bg-stone-950 text-white min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/15 via-stone-950 to-stone-950 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-16 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-3 h-3" />
              Free downloads
            </div>
            <h1 className="font-black text-4xl sm:text-5xl text-white leading-tight tracking-tighter">
              Playbooks, worksheets &amp; templates we hand our clients.
            </h1>
            <p className="text-stone-400 mt-5 text-base leading-relaxed">
              What we&rsquo;ve learned running capture for agencies, consultants
              and first-time federal bidders — packaged into PDFs you can use
              on your next solicitation. Drop your email; we&rsquo;ll send the
              link.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            {DOWNLOADS.map((d) => (
              <Link
                key={d.slug}
                href={`/downloads/${d.slug}`}
                className="group block bg-stone-900/60 border border-white/10 hover:border-emerald-500/40 rounded-2xl p-6 transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h2 className="font-black text-white text-lg leading-tight">
                          {d.title}
                        </h2>
                        {d.badge && (
                          <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded uppercase tracking-wider">
                            {d.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">
                        PDF · {d.pages} pages · Free
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-stone-400 leading-relaxed">
                    {d.blurb}
                  </p>

                  <ul className="space-y-1 mt-4 pl-1">
                    {d.inside.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="text-xs text-stone-500 flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-stone-500 inline-flex items-center gap-1">
                      <Mail className="w-3 h-3" /> Sent by email
                    </span>
                    <span className="text-sm font-bold text-emerald-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Get it <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 bg-stone-900/40 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <Download className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">How it works</h3>
              <p className="text-sm text-stone-400 mt-2 leading-relaxed">
                Pick a download, drop your work email + company, and the PDF
                link arrives in your inbox within 60 seconds. No credit card.
                We&rsquo;ll occasionally send a fresh framework or new federal
                data &mdash; reply &ldquo;stop&rdquo; any time and we stop.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
