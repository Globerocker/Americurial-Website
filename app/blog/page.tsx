"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Award,
  FileText,
  Target,
  Crosshair,
  TrendingUp,
  Shield,
  Filter,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard, Eyebrow } from "@/components/Interactive";

const POSTS = [
  {
    slug: "sam-gov-registration-for-veterans",
    title: "The SAM.gov Registration Playbook for Veteran-Owned Firms",
    excerpt:
      "Eighteen checkpoints, every gotcha, and the veteran-specific moves most consultants skip. Get through registration on the first pass.",
    date: "April 20, 2026",
    readTime: "12 min read",
    category: "SAM.gov",
    icon: Shield,
    accent: "emerald",
    featured: true,
  },
  {
    slug: "capability-statement-guide",
    title: "The Capability Statement That Actually Wins Contracts",
    excerpt:
      "Six sections evaluators read, three mistakes that get you filtered out, and the veteran-positioning angle nobody teaches.",
    date: "April 18, 2026",
    readTime: "10 min read",
    category: "Capability Statement",
    icon: FileText,
    accent: "amber",
  },
  {
    slug: "set-aside-programs-veteran-guide",
    title: "SDVOSB, VOSB, 8(a), HUBZone, WOSB — The Set-Aside Stack",
    excerpt:
      "Seven set-aside categories, the dollar thresholds, and how to stack them. Triple-certed SDVOSB + HUBZone + WOSB is a real unicorn.",
    date: "April 15, 2026",
    readTime: "14 min read",
    category: "Set-Asides",
    icon: Award,
    accent: "emerald",
  },
  {
    slug: "sources-sought-playbook",
    title: "Sources Sought Is Your Unfair Advantage",
    excerpt:
      "Eighty percent of federal winners responded to Sources Sought. Here's the six-month pre-RFP playbook with templates.",
    date: "April 12, 2026",
    readTime: "11 min read",
    category: "Capture",
    icon: Target,
    accent: "sky",
  },
  {
    slug: "proposal-writing-for-small-primes",
    title: "Proposal Writing for Small Primes: 10 Rules, 1 Framework",
    excerpt:
      "Compliance matrix, win themes, color teams, price-to-win, and the brutal edit pass. Built for one-person proposal shops.",
    date: "April 8, 2026",
    readTime: "13 min read",
    category: "Proposals",
    icon: Crosshair,
    accent: "amber",
  },
  {
    slug: "veteran-owned-business-growth",
    title: "The Veteran-Owned Growth Playbook",
    excerpt:
      "How to use SDVOSB/VOSB status to win set-asides, build past performance, and move from subcontractor to prime.",
    date: "March 27, 2026",
    readTime: "8 min read",
    category: "Growth",
    icon: TrendingUp,
    accent: "emerald",
  },
];

const CATEGORIES = [
  "All",
  "SAM.gov",
  "Capability Statement",
  "Set-Asides",
  "Capture",
  "Proposals",
  "Growth",
] as const;

const BASE = "https://www.americurial.com";
const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Americurial Field Manual",
  description:
    "Federal contracting playbooks for veteran-owned small businesses — SAM.gov, capability statements, set-asides, Sources Sought, proposals, growth.",
  url: `${BASE}/blog`,
  isPartOf: { "@type": "WebSite", name: "Americurial", url: BASE },
  publisher: {
    "@type": "Organization",
    name: "Americurial",
    logo: { "@type": "ImageObject", url: `${BASE}/logo-white.png` },
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: POSTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}/blog/${p.slug}`,
      name: p.title,
    })),
  },
};

function BlogCover({
  icon: Icon,
  accent,
  category,
}: {
  icon: typeof BookOpen;
  accent: string;
  category: string;
}) {
  const accentMap: Record<string, { bg: string; ring: string; text: string }> = {
    emerald: {
      bg: "from-emerald-950/80 via-stone-950 to-stone-950",
      ring: "border-emerald-500/30 text-emerald-300",
      text: "text-emerald-400",
    },
    amber: {
      bg: "from-amber-950/60 via-stone-950 to-stone-950",
      ring: "border-amber-500/30 text-amber-300",
      text: "text-amber-400",
    },
    sky: {
      bg: "from-sky-950/60 via-stone-950 to-stone-950",
      ring: "border-sky-500/30 text-sky-300",
      text: "text-sky-400",
    },
  };
  const a = accentMap[accent] ?? accentMap.emerald;

  return (
    <div
      className={`relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-gradient-to-br ${a.bg}`}
    >
      {/* Concentric rings backdrop */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border ${a.ring} opacity-20`}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border ${a.ring} opacity-30`}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border ${a.ring} opacity-40`}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-bg opacity-30" />

      {/* Category chip top-left */}
      <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-stone-950/70 border border-white/10 text-stone-200 px-2.5 py-1 rounded-full">
        {category}
      </span>

      {/* Icon center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-20 h-20 rounded-2xl bg-stone-950/70 backdrop-blur border ${a.ring} flex items-center justify-center`}
        >
          <Icon className={`w-10 h-10 ${a.text}`} />
        </div>
      </div>
    </div>
  );
}

export default function BlogIndex() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return POSTS;
    return POSTS.filter((p) => p.category === active);
  }, [active]);

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="contour-circle w-[600px] h-[600px]" />
        <div className="contour-circle w-[900px] h-[900px]" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
            <BookOpen className="w-3 h-3" />
            Field Manual
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6">
            The Veteran&apos;s
            <br />
            <span className="gradient-text">GovCon Field Manual.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            The same plays we run for clients. No sales pitch, no fluff. Pick
            a category, find the post, run the play.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-16 z-30 bg-stone-950/85 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <Filter className="w-4 h-4 text-stone-500 flex-shrink-0" />
          {CATEGORIES.map((c) => {
            const count = c === "All" ? POSTS.length : POSTS.filter((p) => p.category === c).length;
            const isActive = active === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`flex-shrink-0 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-all border ${
                  isActive
                    ? "bg-emerald-600 border-emerald-500 text-white"
                    : "bg-white/5 border-white/10 text-stone-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {c}
                <span className={`ml-1.5 ${isActive ? "text-emerald-200" : "text-stone-500"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 && (
            <div className="text-center py-20 text-stone-500">
              No posts in this category yet. Check back soon.
            </div>
          )}

          {featured && active === "All" && (
            <>
              <Reveal>
                <Eyebrow>Featured</Eyebrow>
              </Reveal>
              <Reveal>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group block bg-stone-900/40 border border-emerald-500/20 hover:border-emerald-500/40 rounded-3xl overflow-hidden mb-12 transition-all"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <BlogCover
                      icon={featured.icon}
                      accent={featured.accent}
                      category={featured.category}
                    />
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-xs text-stone-500 mb-4">
                        <span>{featured.date}</span>
                        <span className="w-1 h-1 rounded-full bg-stone-700" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {featured.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white mb-4 group-hover:text-emerald-300 transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-stone-400 leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                        Read the playbook <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>

              <Reveal>
                <Eyebrow>All posts</Eyebrow>
              </Reveal>
            </>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(active === "All" ? rest : filtered).map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <TiltCard max={4}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-stone-900/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl overflow-hidden h-full transition-all hover-lift flex flex-col"
                  >
                    <BlogCover icon={post.icon} accent={post.accent} category={post.category} />
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-stone-400 leading-relaxed mb-5 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="flex items-center gap-1 text-xs text-stone-500">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span className="text-xs font-bold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-gradient-to-b from-stone-950 to-emerald-950/15">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
            Rather have us <span className="gradient-text">run the plays?</span>
          </h2>
          <p className="text-stone-400 mb-8">
            The posts are self-contained. If you&apos;d rather not read forty pages
            of playbook and have a team executing instead — that&apos;s what we do.
          </p>
          <a
            href="https://meetings-na2.hubspot.com/americurial/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all inline-flex items-center gap-2 glow-emerald"
          >
            Book a Mission Briefing <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </section>
    </>
  );
}
