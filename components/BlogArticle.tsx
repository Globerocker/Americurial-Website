"use client";

import Link from "next/link";
import { ReactNode } from "react";
import {
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
  AlertTriangle,
  Info,
  Lightbulb,
  CheckCircle2,
  Award,
  Shield,
} from "lucide-react";
import { ReadingProgress, TableOfContents, Eyebrow } from "@/components/Interactive";

export function BlogArticle({
  title,
  subtitle,
  date,
  readTime,
  category,
  toc,
  children,
  relatedSlugs = [],
}: {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  toc: { id: string; label: string }[];
  children: ReactNode;
  relatedSlugs?: { slug: string; title: string }[];
}) {
  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="contour-circle w-[600px] h-[600px]" />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-emerald-400 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-300">{category}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
            {category}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.95] mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-8 max-w-3xl">
            {subtitle}
          </p>

          <div className="flex items-center gap-5 text-xs text-stone-500 pb-6 border-b border-white/5">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              By Americurial
            </span>
          </div>
        </div>
      </section>

      {/* Body with TOC */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_280px] gap-12">
          <article className="prose-vet max-w-3xl">{children}</article>
          <aside>
            <TableOfContents items={toc} />

            <div className="hidden lg:block mt-8 sticky top-[420px]">
              <div className="bg-stone-900/60 border border-emerald-500/20 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-amber-400" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-300">
                    Veteran Discount
                  </p>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  20% off every Americurial retainer and productized service. Verified
                  once, applied for life.
                </p>
                <Link
                  href="/veterans/verify"
                  className="text-xs font-bold text-amber-300 hover:text-amber-200 inline-flex items-center gap-1"
                >
                  Verify now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related + CTA */}
      <section className="py-20 md:py-24 border-t border-white/5 bg-gradient-to-b from-stone-950 to-emerald-950/15">
        <div className="max-w-5xl mx-auto px-6">
          {relatedSlugs.length > 0 && (
            <div className="mb-12">
              <Eyebrow>Keep reading</Eyebrow>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedSlugs.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-5 transition-all flex items-center justify-between gap-4"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {r.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="bg-stone-900/60 border border-emerald-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-4">
                Want us to <span className="gradient-text">run this for you?</span>
              </h3>
              <p className="text-stone-400 mb-6 max-w-xl mx-auto">
                Retainer clients get the full Americurial team running capture — with the 5%
                success-fee alignment and CapturePilot software included.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://meetings-na2.hubspot.com/americurial/intro-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2 glow-emerald"
                >
                  Book a Mission Briefing <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/pricing"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
                >
                  See Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: "info" | "warn" | "tip" | "vet";
  title: string;
  children: ReactNode;
}) {
  const styles = {
    info: {
      bg: "bg-emerald-500/5 border-emerald-500/20",
      color: "text-emerald-300",
      icon: Info,
    },
    warn: {
      bg: "bg-amber-500/5 border-amber-500/20",
      color: "text-amber-300",
      icon: AlertTriangle,
    },
    tip: {
      bg: "bg-sky-500/5 border-sky-500/20",
      color: "text-sky-300",
      icon: Lightbulb,
    },
    vet: {
      bg: "bg-amber-500/10 border-amber-500/30",
      color: "text-amber-200",
      icon: Award,
    },
  } as const;
  const s = styles[variant];
  const Icon = s.icon;
  return (
    <div className={`not-prose my-8 rounded-2xl border p-5 ${s.bg}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4 h-4 ${s.color}`} />
        <p className={`font-bold text-sm ${s.color}`}>{title}</p>
      </div>
      <div className="text-sm text-stone-300 leading-relaxed">{children}</div>
    </div>
  );
}

export function Section({
  id,
  number,
  title,
}: {
  id: string;
  number?: string;
  title: string;
}) {
  return (
    <h2 id={id} className="scroll-mt-32">
      {number && (
        <span className="text-emerald-400 font-black tabular-nums mr-3">{number}</span>
      )}
      {title}
    </h2>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="not-prose my-6 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-stone-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
