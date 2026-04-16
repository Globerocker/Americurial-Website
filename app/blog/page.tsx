import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

const BASE = "https://www.americurial.com";
const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Americurial Blog",
  description: "Expert insights on SaaS development, GovTech, AI content marketing, and growing veteran-owned businesses.",
  url: `${BASE}/blog`,
  isPartOf: { "@type": "WebSite", name: "Americurial", url: BASE },
  publisher: { "@type": "Organization", name: "Americurial", logo: { "@type": "ImageObject", url: `${BASE}/logo.png` } },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 4,
    itemListElement: [
      { "@type": "ListItem", position: 1, url: `${BASE}/blog/ai-content-marketing`, name: "AI Content Marketing for Agencies" },
      { "@type": "ListItem", position: 2, url: `${BASE}/blog/govtech-trends-2026`, name: "GovTech Trends in 2026" },
      { "@type": "ListItem", position: 3, url: `${BASE}/blog/veteran-owned-business-growth`, name: "Growing Your Veteran-Owned Business" },
      { "@type": "ListItem", position: 4, url: `${BASE}/blog/saas-mvp-launch-guide`, name: "How to Launch a SaaS MVP in 90 Days" },
    ],
  },
};

const POSTS = [
  {
    title: "AI Content Marketing for Agencies",
    excerpt:
      "How AI is reshaping content strategy for digital agencies — from copywriting automation to personalized campaigns at scale, and why the human touch still wins.",
    date: "April 8, 2026",
    readTime: "7 min read",
    slug: "/blog/ai-content-marketing",
  },
  {
    title: "GovTech Trends in 2026",
    excerpt:
      "AI in procurement, SAM.gov modernization, cloud-first mandates, and the rise of data-driven capture management. What government contractors need to know this year.",
    date: "April 3, 2026",
    readTime: "8 min read",
    slug: "/blog/govtech-trends-2026",
  },
  {
    title: "Growing Your Veteran-Owned Business",
    excerpt:
      "Leverage SDVOSB and VOSB status, win federal set-asides, build past performance, and transition from subcontractor to prime. A practical growth playbook.",
    date: "March 27, 2026",
    readTime: "8 min read",
    slug: "/blog/veteran-owned-business-growth",
  },
  {
    title: "How to Launch a SaaS MVP in 90 Days",
    excerpt:
      "Validate before you code, pick the right stack, build the core loop first, integrate Stripe, and launch to 10 users before 10,000. A battle-tested blueprint.",
    date: "March 20, 2026",
    readTime: "7 min read",
    slug: "/blog/saas-mvp-launch-guide",
  },
];

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-emerald-500/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-emerald-500/[0.03]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
            <BookOpen className="w-3 h-3" />
            Blog
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6">
            Insights &amp; <span className="text-emerald-400">Intelligence</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Expert perspectives on SaaS development, GovTech, AI, and building
            businesses that win government contracts.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={post.slug}
                className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover:bg-stone-900/60 block"
              >
                <div className="flex items-center gap-3 text-xs text-stone-500 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-700" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-stone-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
            Want to work with us?
          </h2>
          <p className="text-stone-400 mb-8">
            We write about what we build. If you like how we think, imagine what
            we can build for you.
          </p>
          <a
            href="https://meetings-na2.hubspot.com/americurial/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all inline-flex items-center gap-2 glow-emerald"
          >
            Book a Strategy Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
