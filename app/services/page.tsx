"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  Shield,
  BarChart3,
  Palette,
  RefreshCw,
  CheckCircle2,
  Zap,
  Compass,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const BASE = "https://www.americurial.com";
const servicesCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Americurial Services",
  description: "SaaS Development, Web & Digital Products, GovTech Solutions, and AI & Data Platforms — from a veteran-owned digital agency.",
  url: `${BASE}/services`,
  about: { "@type": "Organization", name: "Americurial", url: BASE },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Done-With-You Coaching", url: `${BASE}/pricing#retainers` } },
      { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "SaaS Development", url: `${BASE}/services/saas` } },
      { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "Web & Digital Products", url: `${BASE}/services/web` } },
      { "@type": "ListItem", position: 4, item: { "@type": "Service", name: "GovTech Solutions", url: `${BASE}/services/govtech` } },
      { "@type": "ListItem", position: 5, item: { "@type": "Service", name: "AI & Data Platforms", url: `${BASE}/services/ai` } },
    ],
  },
};
const servicesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What services does Americurial offer?", acceptedAnswer: { "@type": "Answer", text: "Six service lines: Done-With-You Coaching (federal capture training for in-house teams), SaaS Development, Web & Digital Products, GovTech, AI & Data Platforms, and ongoing engineering retainers. We also run capture work directly for veteran-owned firms — that side is priced on the pricing page." } },
    { "@type": "Question", name: "What tech stack does Americurial use?", acceptedAnswer: { "@type": "Answer", text: "Next.js, React, TypeScript, Tailwind on the front. Supabase (Postgres) for data and auth, Stripe for billing, Vercel for hosting. Python where we need to chew through data. OpenAI for the AI bits, with JSON-mode structured output so the results stay predictable." } },
    { "@type": "Question", name: "How long does a typical project take?", acceptedAnswer: { "@type": "Answer", text: "SaaS MVPs are usually around twelve weeks. Marketing sites six to eight. GovTech platforms run longer — roughly sixteen weeks — because federal data integrations take what they take. AI builds we quote per dataset." } },
    { "@type": "Question", name: "Does Americurial build GovTech platforms?", acceptedAnswer: { "@type": "Answer", text: "Yes — we built CapturePilot, which ingests over 37K SAM.gov opportunities daily and scores them for matching against 80K-plus contractor profiles. Same playbook works for other federal-data products." } },
    { "@type": "Question", name: "Do you offer ongoing support after launch?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every project ships with thirty days of post-launch fixes included. After that, most clients move to a retainer that covers Sentry alerts, dependency upkeep, and new features without re-scoping every time. Pricing scales with monthly engineering hours." } },
  ],
};

const SERVICES = [
  {
    icon: Compass,
    title: "Done-With-You Coaching",
    href: "/pricing#retainers",
    desc: "For founders who want to bring federal capture in-house instead of outsourcing it. Weekly calls, full template library, discounted CapturePilot — we coach, your team executes.",
    bullets: [
      "60-min weekly call with a senior capture lead",
      "Full Starter Kit: Sources Sought, capability, teaming templates",
      "CapturePilot software at 50% off",
      "1 proposal review (Pink Team) per quarter",
    ],
  },
  {
    icon: Code2,
    title: "SaaS Development",
    href: "/services/saas",
    desc: "Subscription software builds, end to end. We've shipped CapturePilot — same playbook here: Next.js + Supabase + Stripe, real auth, real billing, no demo-ware.",
    bullets: [
      "Multi-tenant Postgres with row-level security",
      "Stripe checkout, portal, webhooks, the lot",
      "Admin dashboard you can hand to ops on day one",
      "Staging + production on Vercel with preview URLs per PR",
    ],
  },
  {
    icon: Globe,
    title: "Web & Digital Products",
    href: "/services/web",
    desc: "Marketing sites, client portals, internal tools. Built on the same stack we use for our own — so they actually load fast and rank.",
    bullets: [
      "Next.js with sub-second LCP on the routes that matter",
      "Headless CMS or MDX, depending on what your team writes in",
      "Mobile-first, dark mode, accessible by default",
      "GA4 + GSC wired so you can prove what works",
    ],
  },
  {
    icon: Shield,
    title: "GovTech Solutions",
    href: "/services/govtech",
    desc: "Platforms that have to talk to SAM.gov, USASpending, or FPDS without falling over. We've built one. We know where the rate limits and dead fields are.",
    bullets: [
      "SAM.gov, USASpending, FPDS ingestion that survives schema changes",
      "NAICS/PSC mapping with sane fallbacks for missing codes",
      "Per-tenant scoring and matching, not just keyword search",
      "FedRAMP-aware patterns where the workload calls for it",
    ],
  },
  {
    icon: BarChart3,
    title: "AI & Data Platforms",
    href: "/services/ai",
    desc: "OpenAI in production, not in a demo notebook. Document parsing, scoring, summarisation — wired in where it earns its cost.",
    bullets: [
      "OpenAI + structured output (JSON mode) for predictable results",
      "Python or TypeScript ETL, whatever the data wants",
      "Scoring engines you can actually debug",
      "Attachment readers that pull requirements out of PDFs",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Design Systems",
    href: null,
    desc: "Tokens, components, and a Figma file your engineers can actually use. Less Pinterest, more reusable.",
    bullets: [
      "Logo, type, and a colour system that survives dark mode",
      "Tailwind-token + shadcn-style component library",
      "Light + dark theme out of the gate",
      "Figma handoff that maps 1:1 to the codebase",
    ],
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support & Iteration",
    href: null,
    desc: "Retainer for the stuff that comes up after launch — Sentry alerts, dependency bumps, the feature your CFO suddenly wants in two weeks.",
    bullets: [
      "Weekly sprint with a priority backlog you own",
      "On-call for production incidents",
      "Quarterly dependency + security pass",
      "New features without re-quoting every time",
    ],
  },
];

const TECH_STACK = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Supabase", category: "Database" },
  { name: "Vercel", category: "Hosting" },
  { name: "Stripe", category: "Payments" },
  { name: "OpenAI", category: "AI" },
  { name: "Python", category: "Backend" },
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesCollectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd) }} />
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-[-5%] left-[20%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float" />
        <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <div className="contour-circle w-[500px] h-[500px]" />
        <div className="contour-circle w-[800px] h-[800px]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
            <Code2 className="w-3 h-3" />
            Services
          </div>

          <h1 className="animate-fade-in-up-100 text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            What We <span className="gradient-text">Build</span>
          </h1>

          <p className="animate-fade-in-up-200 text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Software, websites, and the AI bits in between. We pick the work
            we can finish, ship it on Vercel, and stick around to fix it when
            it breaks.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-[50%] left-[-5%] w-[300px] h-[300px] rounded-full bg-emerald-500/[0.03] blur-[120px] animate-orb-float" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 80}>
                <div className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover-lift h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {svc.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-stone-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {svc.href && (
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors mt-auto"
                    >
                      View details <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950 relative overflow-hidden">
        <div className="absolute top-[30%] right-[-5%] w-[350px] h-[350px] rounded-full bg-emerald-500/[0.03] blur-[120px] animate-orb-float-slow" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                Our Tech Stack
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              What we <span className="gradient-text">actually use</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              The same stack that runs CapturePilot in production. Nothing
              here is on the list because it looked good in a slide.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {TECH_STACK.map((tech, i) => (
              <Reveal key={tech.name} delay={i * 50}>
                <div className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-4 text-center transition-all hover-lift group">
                  <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">
                    {tech.category}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20 relative overflow-hidden">
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <Reveal className="max-w-3xl mx-auto px-6 text-center relative">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6 animate-hero-float" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Got something half-built?
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            Send us a Loom, a Figma, or a half-written README. We&apos;ll come
            back with a scope, a price, and a date that won&apos;t slip.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://meetings-na2.hubspot.com/americurial/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald"
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
