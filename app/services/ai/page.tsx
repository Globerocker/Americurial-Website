"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Cpu,
  Database,
  Gauge,
  FileSearch,
  Tags,
  RefreshCw,
  PenTool,
  CheckCircle2,
  Zap,
  Clock,
  Layers,
  Rocket,
} from "lucide-react";
import { Reveal, AnimatedCounter } from "@/components/Reveal";

const DELIVERABLES = [
  {
    icon: Brain,
    title: "OpenAI Integration",
    desc: "Production-grade GPT-4o and embeddings integration with structured outputs, retry logic, and cost monitoring.",
  },
  {
    icon: Cpu,
    title: "Custom ML Pipelines",
    desc: "End-to-end machine learning workflows — from feature engineering to model serving — built for your specific domain.",
  },
  {
    icon: Database,
    title: "Data Ingestion & ETL",
    desc: "Automated pipelines that pull, clean, transform, and load data from APIs, files, and databases on schedule.",
  },
  {
    icon: Gauge,
    title: "Scoring & Recommendation Engines",
    desc: "Deterministic and ML-hybrid scoring systems that rank, match, and prioritize entities based on your business logic.",
  },
  {
    icon: FileSearch,
    title: "NLP & Document Analysis",
    desc: "Extract structured data from solicitations, contracts, and unstructured text using natural language processing.",
  },
  {
    icon: Tags,
    title: "Intelligent Classification",
    desc: "AI-first classification systems with deterministic fallbacks. Accurate categorization at scale with human-level precision.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Enrichment Workflows",
    desc: "Automated data enrichment pipelines that augment records with third-party intelligence from SAM.gov, Apollo, USASpending, and more.",
  },
  {
    icon: PenTool,
    title: "AI-Powered Content Generation",
    desc: "Templated and dynamic content generation for reports, emails, summaries, and documentation using fine-tuned prompts.",
  },
];

const TIMELINE = [
  {
    phase: "01",
    title: "Data Audit & Strategy",
    weeks: "Weeks 1-2",
    desc: "Map existing data sources, define model requirements, identify integration points, and establish success metrics.",
  },
  {
    phase: "02",
    title: "Pipeline Architecture",
    weeks: "Weeks 3-5",
    desc: "Design ETL flows, build data schemas, set up staging environments, and architect the processing infrastructure.",
  },
  {
    phase: "03",
    title: "Model Integration & Training",
    weeks: "Weeks 6-10",
    desc: "Integrate AI models, build scoring algorithms, train on your data, and iterate on accuracy with real-world validation.",
  },
  {
    phase: "04",
    title: "Production & Monitoring",
    weeks: "Weeks 11-12",
    desc: "Deploy to production with monitoring, alerting, cost tracking, and automated fallback handling for reliability.",
  },
];

const TECH_STACK = [
  "Python",
  "OpenAI",
  "LangChain",
  "Supabase",
  "Next.js",
  "TypeScript",
  "Vercel",
  "pandas",
  "scikit-learn",
];

const CASE_STUDY_BULLETS = [
  "GPT-4o NAICS classification — AI-first with keyword fallback for 100% coverage",
  "140-point deterministic scoring algorithm across 6 weighted dimensions",
  "Automated opportunity enrichment pipeline with contractor readiness scoring",
  "Natural language processing for solicitation requirements extraction",
  "Daily automated ingestion and scoring of 37K+ federal opportunities",
  "Real-time competitor intelligence from USASpending award data",
];

export default function AIServicePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />

        {/* Floating orbs */}
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float" />
        <div className="absolute bottom-[-5%] right-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float-slow" />
        <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-fast" />

        {/* Contour circles */}
        <div className="contour-circle w-[500px] h-[500px]" />
        <div className="contour-circle w-[700px] h-[700px]" style={{ animationDelay: "2s" }} />
        <div className="contour-circle w-[900px] h-[900px]" style={{ animationDelay: "4s" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
              <Brain className="w-3 h-3" />
              AI & Data Platforms
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
              Intelligence<br />
              <span className="gradient-text">Built In.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed mb-12">
              We build ML pipelines, scoring engines, and AI-powered automation
              that run in production &mdash; not in notebooks. From OpenAI integration
              to custom classification systems, we ship intelligence that scales
              with your business.
            </p>
          </Reveal>

          <Reveal delay={300}>
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
          </Reveal>
        </div>
      </section>

      {/* ── Deliverables ── */}
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
              AI That <span className="gradient-text">Ships</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Production-grade intelligence systems &mdash; not proof-of-concept
              demos. Every deliverable is built for reliability, monitoring, and
              scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERABLES.map((item, i) => (
              <Reveal key={item.title} delay={i * 75}>
                <div className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover:bg-stone-900/60 hover-lift h-full">
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
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                Engagement Timeline
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              From Data to{" "}
              <span className="gradient-text">Production</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              A typical AI engagement runs 12 weeks from discovery to production
              deployment. Here is how the phases break down.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((phase, i) => (
              <Reveal key={phase.phase} delay={i * 100}>
                <div className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover:bg-stone-900/60 relative h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl font-black text-emerald-500/20">
                      {phase.phase}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                      <Clock className="w-3 h-3" />
                      {phase.weeks}
                    </div>
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
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                Tech Stack
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Battle-Tested <span className="gradient-text">Tools</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <Reveal key={tech} delay={i * 50} direction="scale">
                <div className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-full px-6 py-3 text-sm font-bold text-white hover:text-emerald-400 transition-all cursor-default">
                  {tech}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study: CapturePilot AI ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-500/40" />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                    Case Study
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                  CapturePilot{" "}
                  <span className="gradient-text">AI Systems</span>
                </h2>
                <p className="text-stone-400 leading-relaxed mb-8">
                  CapturePilot is our flagship GovTech SaaS &mdash; and a showcase for
                  every AI capability we offer. We built the full intelligence
                  layer: classification, scoring, enrichment, NLP extraction, and
                  automated daily pipelines processing tens of thousands of
                  federal opportunities.
                </p>
                <ul className="space-y-4">
                  {CASE_STUDY_BULLETS.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-stone-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="relative">
                <div className="bg-stone-900/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                  <div className="relative space-y-5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                        <Layers className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">
                          AI Intelligence Layer
                        </p>
                        <p className="text-stone-500 text-xs">
                          CapturePilot Production Systems
                        </p>
                      </div>
                    </div>

                    {[
                      { label: "Opportunities Ingested", value: "37K+", sub: "daily from SAM.gov" },
                      { label: "Scoring Dimensions", value: "140pt", sub: "deterministic algorithm" },
                      { label: "NAICS Accuracy", value: "98%+", sub: "GPT-4o with fallback" },
                      { label: "Enrichment Sources", value: "5", sub: "SAM, USASpending, Apollo, FPDS, web" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-stone-950/60 border border-white/5 rounded-xl p-4 flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-bold text-white">{stat.label}</p>
                          <p className="text-xs text-stone-500 mt-0.5">{stat.sub}</p>
                        </div>
                        <div className="text-lg font-black text-emerald-400">
                          {stat.value}
                        </div>
                      </div>
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
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Ready to Add Intelligence?
            </h2>
            <p className="text-stone-400 mb-10 text-lg">
              Tell us about your data and your goals. We will design an AI
              system that fits your business &mdash; and actually ships to production.
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
