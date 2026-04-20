import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard, Eyebrow } from "@/components/Interactive";

const BASE = "https://www.americurial.com";
const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Americurial Blog",
  description:
    "Federal contracting playbooks for veteran-owned small businesses. SAM.gov, capability statements, set-asides, Sources Sought, proposal writing — all from a veteran-led agency.",
  url: `${BASE}/blog`,
  isPartOf: { "@type": "WebSite", name: "Americurial", url: BASE },
  publisher: {
    "@type": "Organization",
    name: "Americurial",
    logo: { "@type": "ImageObject", url: `${BASE}/logo-white.png` },
  },
};

const POSTS = [
  {
    slug: "sam-gov-registration-for-veterans",
    title: "The SAM.gov Registration Playbook for Veteran-Owned Firms",
    excerpt:
      "18 checkpoints, every gotcha, and the veteran-specific optimization moves most consultants skip. Clear your registration on the first pass.",
    date: "April 20, 2026",
    readTime: "12 min read",
    category: "SAM.gov",
    featured: true,
  },
  {
    slug: "capability-statement-guide",
    title: "The Capability Statement That Actually Wins Contracts",
    excerpt:
      "6 essential sections, the 3 mistakes evaluators use to filter you out fast, and the veteran-positioning angle nobody teaches. With annotated examples.",
    date: "April 18, 2026",
    readTime: "10 min read",
    category: "Capability Statement",
  },
  {
    slug: "set-aside-programs-veteran-guide",
    title: "SDVOSB, VOSB, 8(a), HUBZone, WOSB — The Set-Aside Stack",
    excerpt:
      "The 7 set-aside categories, dollar thresholds, and the optimal stacking strategy for veterans. Triple-certed SDVOSB + HUBZone + WOSB is a real unicorn.",
    date: "April 15, 2026",
    readTime: "14 min read",
    category: "Set-Asides",
  },
  {
    slug: "sources-sought-playbook",
    title: "Sources Sought Is Your Unfair Advantage. Here&apos;s How to Use It.",
    excerpt:
      "80% of federal winners responded to Sources Sought. The 6-month pre-RFP playbook, with templates and a realistic timeline that fits a 10-person firm.",
    date: "April 12, 2026",
    readTime: "11 min read",
    category: "Capture",
  },
  {
    slug: "proposal-writing-for-small-primes",
    title: "Proposal Writing for Small Primes: 10 Rules, 1 Framework",
    excerpt:
      "Compliance matrix, win themes, color team reviews, price-to-win, and the brutal edit pass — even if you&apos;re a one-person proposal shop.",
    date: "April 8, 2026",
    readTime: "13 min read",
    category: "Proposals",
  },
  {
    slug: "veteran-owned-business-growth",
    title: "The Veteran-Owned Growth Playbook",
    excerpt:
      "Leverage SDVOSB/VOSB status, win set-asides, build past performance, and transition from subcontractor to prime. A practical growth playbook.",
    date: "March 27, 2026",
    readTime: "8 min read",
    category: "Growth",
  },
];

export default function BlogIndex() {
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
            Long-form playbooks for veteran-owned firms running federal capture. No fluff,
            no sales pitch — the same plays we run for clients.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <Eyebrow>Featured</Eyebrow>
          </Reveal>

          {/* Featured post */}
          {POSTS.filter((p) => p.featured).map((post) => (
            <Reveal key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-stone-900/40 border border-emerald-500/20 hover:border-emerald-500/40 rounded-3xl p-8 md:p-12 mb-12 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-3 text-xs text-stone-500 mb-4">
                    <span className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-700" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 group-hover:text-emerald-300 transition-colors max-w-3xl">
                    {post.title}
                  </h2>
                  <p className="text-lg text-stone-400 leading-relaxed mb-6 max-w-2xl">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    Read the playbook <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal>
            <Eyebrow>All posts</Eyebrow>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.filter((p) => !p.featured).map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <TiltCard max={4}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-stone-900/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 h-full transition-all hover-lift"
                  >
                    <div className="flex items-center gap-2 text-xs mb-4">
                      <span className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-stone-400 leading-relaxed mb-5">
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
            Prefer we run the plays <span className="gradient-text">for you?</span>
          </h2>
          <p className="text-stone-400 mb-8">
            Every post is self-contained. But if you&apos;d rather not read 80 pages of playbook
            and would rather have a team executing — that&apos;s what we do.
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
