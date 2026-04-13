"use client";

import Link from "next/link";
import { Reveal, AnimatedCounter } from "@/components/Reveal";
import {
  ArrowRight,
  Shield,
  Database,
  Tag,
  Target,
  BarChart3,
  LayoutDashboard,
  TrendingUp,
  Clock,
  CheckCircle2,
  Zap,
  ExternalLink,
  Layers,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const DELIVERABLES = [
  {
    icon: Database,
    title: "SAM.gov & FPDS Integration",
    desc: "Real-time ingestion pipelines that pull opportunities, awards, and entity data directly from federal procurement systems.",
  },
  {
    icon: Tag,
    title: "NAICS/PSC Classification",
    desc: "AI-powered classification engines that map opportunities to the correct industry and product service codes automatically.",
  },
  {
    icon: Target,
    title: "Opportunity Matching Engines",
    desc: "Multi-factor scoring algorithms that surface the highest-probability contracts for each contractor profile.",
  },
  {
    icon: BarChart3,
    title: "Contractor Readiness Scoring",
    desc: "Quantified readiness assessments across certifications, past performance, and compliance posture.",
  },
  {
    icon: LayoutDashboard,
    title: "Compliance Dashboards",
    desc: "Live dashboards tracking set-aside eligibility, registration status, and renewal deadlines.",
  },
  {
    icon: TrendingUp,
    title: "USASpending Data Pipelines",
    desc: "Budget trend analysis, obligation tracking, and agency spending pattern extraction at scale.",
  },
  {
    icon: Shield,
    title: "Award & Incumbent Intelligence",
    desc: "Automated award notice scraping and incumbent identification for competitive landscape mapping.",
  },
  {
    icon: Clock,
    title: "Automated Cron Workflows",
    desc: "Scheduled pipelines for ingestion, scoring, enrichment, and lifecycle management running 24/7.",
  },
];

const TIMELINE = [
  {
    phase: "01",
    title: "Requirements & Compliance",
    weeks: "Weeks 1 - 2",
    desc: "Stakeholder interviews, compliance audit, data source mapping, and federal security requirements scoping.",
  },
  {
    phase: "02",
    title: "Data Architecture",
    weeks: "Weeks 3 - 6",
    desc: "Database schema design, API integrations with SAM.gov and USASpending, ingestion pipeline development, and ETL workflows.",
  },
  {
    phase: "03",
    title: "Platform Build",
    weeks: "Weeks 7 - 14",
    desc: "Full-stack application development including matching engines, dashboards, scoring algorithms, user management, and cron automation.",
  },
  {
    phase: "04",
    title: "Testing & Deployment",
    weeks: "Weeks 15 - 16",
    desc: "End-to-end testing, security hardening, load testing against federal data volumes, staging rollout, and production deployment.",
  },
];

const TECH_PILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "Python",
  "OpenAI",
  "SAM.gov API",
  "USASpending API",
  "Vercel",
];

const CASE_STUDY_BULLETS = [
  "Federal contract intelligence platform processing live SAM.gov data",
  "AI-powered NAICS classification with GPT-4o and keyword fallback",
  "140-point deterministic scoring algorithm across 6 weighted factors",
  "Incumbent tracking via USASpending award data and FPDS cross-reference",
  "6 automated daily cron jobs for ingestion, scoring, enrichment, and lifecycle",
  "80K+ contractor database with readiness scoring and Apollo enrichment",
  "Multi-user SaaS with consulting portal for managed government clients",
  "Compliance dashboards, set-aside filtering, and deadline tracking",
];

const CASE_STUDY_STATS = [
  { label: "Opportunities", value: 37000, suffix: "+" },
  { label: "Contractors", value: 80000, suffix: "+" },
  { label: "Contacts", value: 91000, suffix: "+" },
  { label: "Daily Crons", value: 6, suffix: "" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function GovTechPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-40">
        {/* background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-stone-950 to-stone-950" />

        {/* floating orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float" />
        <div className="absolute -bottom-60 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float-slow" />

        {/* contour circles */}
        <div className="contour-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]" />
        <div className="contour-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
              <Shield className="w-3 h-3" />
              GovTech Solutions
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8">
              Federal-Grade
              <br />
              <span className="gradient-text">Software.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
              We build platforms that give government contractors an unfair
              advantage &mdash; real-time opportunity intelligence, compliance
              automation, and data pipelines engineered for federal-scale
              workloads.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                What We Deliver
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              End-to-End <span className="text-emerald-400">GovTech</span>{" "}
              Engineering
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              From federal data ingestion to compliance dashboards &mdash; every
              component purpose-built for government procurement workflows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERABLES.map((item, i) => (
              <Reveal key={item.title} delay={i * 75}>
                <div className="hover-lift bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 transition-all hover:bg-stone-900/60 h-full">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
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

      {/* ── Timeline ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                Delivery Timeline
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              From Scope to{" "}
              <span className="text-emerald-400">Production</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              A typical GovTech platform build follows a 16-week delivery
              cadence. Each phase has clear milestones and deliverables.
            </p>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent" />

            <div className="space-y-12">
              {TIMELINE.map((step, i) => (
                <Reveal key={step.phase} delay={i * 100}>
                  <div
                    className={`relative flex flex-col md:flex-row items-start gap-8 ${
                      i % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 border-2 border-stone-950 z-10 mt-2" />

                    {/* card */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                        i % 2 === 1 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-6 hover:border-emerald-500/20 transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                            {step.weeks}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-stone-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                Tech Stack
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              Built With <span className="text-emerald-400">Proven</span> Tools
            </h2>
          </div>

          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {TECH_PILLS.map((tech) => (
                <span
                  key={tech}
                  className="bg-stone-900/60 border border-white/5 hover:border-emerald-500/20 text-sm font-semibold text-stone-300 hover:text-emerald-400 px-5 py-2.5 rounded-full transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Case Study: CapturePilot ─────────────────────────────── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                Case Study
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              CapturePilot &mdash;{" "}
              <span className="text-emerald-400">Federal Contract</span>{" "}
              Intelligence
            </h2>
            <p className="text-stone-400 max-w-3xl mx-auto text-lg">
              A full-stack GovTech platform that ingests 37K+ federal
              opportunities from SAM.gov, scores them with a 140-point
              algorithm, and gives contractors the intelligence they need to
              win.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* bullets */}
            <Reveal className="lg:col-span-3">
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">
                    Platform Highlights
                  </h3>
                </div>
                <ul className="space-y-3">
                  {CASE_STUDY_BULLETS.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-stone-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href="https://capturepilot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Visit capturepilot.com
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* stats */}
            <Reveal delay={150} className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 h-full">
                {CASE_STUDY_STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="bg-stone-900/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-emerald-500/20 transition-all"
                  >
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      className="text-3xl md:text-4xl font-black text-white"
                    />
                    <span className="text-xs text-stone-500 uppercase tracking-widest mt-2">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6 animate-hero-float" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Ready to Build for Government?
            </h2>
            <p className="text-stone-400 mb-10 text-lg">
              Whether you need a contractor intelligence platform, compliance
              dashboard, or federal data pipeline &mdash; we&apos;ve done it
              before and we&apos;ll do it faster for you.
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
        </div>
      </section>
    </>
  );
}
