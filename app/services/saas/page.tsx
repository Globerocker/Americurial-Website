"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  CreditCard,
  LayoutDashboard,
  UserPlus,
  ShieldCheck,
  GitBranch,
  FileCode2,
  BarChart3,
  Layers,
  Clock,
  Rocket,
  Wrench,
  Zap,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const DELIVERABLES = [
  {
    icon: Layers,
    title: "Multi-Tenant Architecture",
    desc: "Isolated data, shared infrastructure. Each customer gets their own workspace with zero cross-contamination.",
  },
  {
    icon: CreditCard,
    title: "Stripe Billing Integration",
    desc: "Subscription management, usage-based pricing, invoicing, and self-service plan changes out of the box.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    desc: "Internal tools for managing users, monitoring metrics, and operating your platform from day one.",
  },
  {
    icon: UserPlus,
    title: "User Onboarding Flows",
    desc: "Guided signup, profile setup, and activation sequences designed to maximize trial-to-paid conversion.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control",
    desc: "Granular permissions for admins, team members, and end users with row-level security at the database layer.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    desc: "Automated testing, staging environments, and zero-downtime deployments so you ship with confidence.",
  },
  {
    icon: FileCode2,
    title: "API Design & Documentation",
    desc: "RESTful APIs with versioning, rate limiting, and auto-generated docs for internal teams and third-party integrations.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Built-in dashboards tracking MRR, churn, activation, and usage metrics so you always know your numbers.",
  },
];

const TIMELINE = [
  {
    phase: "01",
    title: "Discovery & Design",
    weeks: "Weeks 1–2",
    desc: "Requirements deep-dive, user stories, database schema, wireframes, and architectural decisions locked in.",
  },
  {
    phase: "02",
    title: "Core Build",
    weeks: "Weeks 3–8",
    desc: "Authentication, multi-tenancy, billing, and core product features built in rapid 2-week sprint cycles.",
  },
  {
    phase: "03",
    title: "Integration & Testing",
    weeks: "Weeks 9–10",
    desc: "Third-party integrations, end-to-end testing, security audit, and performance optimization.",
  },
  {
    phase: "04",
    title: "Launch & Optimization",
    weeks: "Weeks 11–12",
    desc: "Production deployment, monitoring setup, onboarding polish, and post-launch iteration based on real data.",
  },
];

const TECH_STACK = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Supabase", category: "Database" },
  { name: "Stripe", category: "Payments" },
  { name: "Vercel", category: "Hosting" },
  { name: "OpenAI", category: "AI" },
  { name: "Python", category: "Backend" },
];

export default function SaaSPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />

        {/* Floating orbs */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float" />
        <div className="absolute bottom-[-5%] right-[15%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />

        {/* Contour circles */}
        <div className="contour-circle w-[500px] h-[500px]" />
        <div className="contour-circle w-[700px] h-[700px]" style={{ animationDelay: "2s" }} />
        <div className="contour-circle w-[900px] h-[900px]" style={{ animationDelay: "4s" }} />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
            <Code2 className="w-3 h-3" />
            SaaS Development
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            From Zero to
            <br />
            <span className="gradient-text">Recurring Revenue.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed mb-12">
            We architect, design, and ship subscription software with the
            infrastructure to scale from day one. Multi-tenant, Stripe-ready,
            and production-grade &mdash; delivered in 12 weeks.
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
              href="/services"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-[30%] right-[-8%] w-[350px] h-[350px] rounded-full bg-emerald-500/[0.03] blur-[120px] animate-orb-float-slow" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                What You Get
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Everything to <span className="gradient-text">Ship & Scale</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Every SaaS build includes the full stack of infrastructure,
              tooling, and product features you need to go live and grow.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERABLES.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover:bg-stone-900/60 hover-lift shimmer-bg h-full">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950 relative overflow-hidden">
        <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                12-Week Timeline
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              From Idea to <span className="gradient-text">Production</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              A proven four-phase process that takes your SaaS from concept to
              live, paying customers in 12 weeks.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6">
            {TIMELINE.map((phase, i) => (
              <Reveal key={phase.phase} delay={i * 120}>
                <div className="relative bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 text-center transition-all hover-lift h-full">
                  <div className="text-4xl font-black gradient-text opacity-40 mb-2">
                    {phase.phase}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-4">
                    <Clock className="w-3 h-3" />
                    {phase.weeks}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                Our Stack
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Battle-Tested <span className="gradient-text">Tools</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Every tool earns its place. We ship with the stack that moves
              fastest and scales best.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {TECH_STACK.map((tech, i) => (
              <Reveal key={tech.name} delay={i * 60}>
                <div className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-4 text-center transition-all hover:bg-stone-900/60 group">
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

      {/* ── Case Study: CapturePilot ── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/15 to-stone-950 relative overflow-hidden">
        <div className="absolute top-[-5%] right-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float" />
        <div className="contour-circle w-[600px] h-[600px]" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-500/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                  Case Study
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                CapturePilot
              </h2>
              <p className="text-stone-400 mb-8 leading-relaxed">
                A federal contract intelligence SaaS platform we built
                end-to-end. 40,000+ opportunities ingested daily, AI-powered
                scoring, multi-tenant architecture, and automated cron pipelines
                &mdash; all shipped in-house using the same stack and process we
                bring to every client engagement.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "40K+ federal opportunities tracked and scored daily",
                  "AI-powered NAICS classification and opportunity matching",
                  "Multi-tenant with role-based access (SaaS, consulting, admin)",
                  "Stripe billing with subscription management and hard paywall",
                  "Automated cron pipelines for ingestion, scoring, and enrichment",
                  "Competitor intelligence via USASpending award data",
                ].map((feat, i) => (
                  <Reveal key={feat} delay={i * 80} direction="left">
                    <li className="flex items-start gap-3 text-sm text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  </Reveal>
                ))}
              </ul>
              <a
                href="https://www.capturepilot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors glow-emerald"
              >
                Visit capturepilot.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <div className="relative">
                <div className="bg-stone-900/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden shimmer-bg">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                  <div className="relative space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">
                          CapturePilot Dashboard
                        </p>
                        <p className="text-stone-500 text-xs">
                          Federal Contract Intelligence
                        </p>
                      </div>
                    </div>
                    {[
                      {
                        title: "Janitorial Services — DoD",
                        score: 95,
                        tier: "HOT" as const,
                      },
                      {
                        title: "HVAC Maintenance — VA",
                        score: 88,
                        tier: "HOT" as const,
                      },
                      {
                        title: "IT Security — DHS",
                        score: 72,
                        tier: "WARM" as const,
                      },
                      {
                        title: "Landscaping — Army Corps",
                        score: 65,
                        tier: "WARM" as const,
                      },
                    ].map((opp, i) => (
                      <Reveal key={opp.title} delay={400 + i * 120} direction="right">
                        <div className="bg-stone-950/60 border border-white/5 rounded-xl p-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-bold text-white">
                              {opp.title}
                            </p>
                            <p className="text-xs text-stone-500 mt-0.5">
                              Match Score: {opp.score}%
                            </p>
                          </div>
                          <div
                            className={`text-[10px] font-bold px-2 py-1 rounded ${
                              opp.tier === "HOT"
                                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            }`}
                          >
                            {opp.tier}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-emerald-500/10 blur-3xl rounded-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20 relative overflow-hidden">
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <div className="contour-circle w-[600px] h-[600px]" />

        <Reveal className="max-w-3xl mx-auto px-6 text-center relative">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Ready to Build Your SaaS?
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            Tell us what you&apos;re building. We&apos;ll scope it, architect
            it, and tell you exactly how fast we can ship it.
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
