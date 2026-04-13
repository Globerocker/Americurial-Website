"use client";

import Link from "next/link";
import { Reveal, AnimatedCounter } from "@/components/Reveal";
import {
  ArrowRight,
  Globe,
  Search,
  LayoutGrid,
  Smartphone,
  BarChart3,
  Users,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  PenTool,
  Clock,
  Paintbrush,
  Code2,
  MonitorPlay,
} from "lucide-react";

/* ── Deliverables ── */
const DELIVERABLES = [
  {
    icon: Search,
    title: "SEO-Optimized Next.js Sites",
    desc: "Server-rendered pages with structured data, sitemaps, and metadata that rank from day one.",
  },
  {
    icon: LayoutGrid,
    title: "Custom CMS Integration",
    desc: "Contentful, Sanity, or headless WordPress — your team edits content without touching code.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect across every device and viewport. Mobile-first, always.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    desc: "Google Analytics, conversion funnels, heatmaps, and event tracking wired from launch.",
  },
  {
    icon: Users,
    title: "Client Portals & Dashboards",
    desc: "Authenticated experiences with role-based access, real-time data, and admin controls.",
  },
  {
    icon: Layers,
    title: "Landing Page Systems",
    desc: "Templatized, audience-specific landing pages that scale campaigns without dev bottlenecks.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Sub-second load times via code splitting, image optimization, edge caching, and Lighthouse 95+.",
  },
  {
    icon: ShieldCheck,
    title: "Accessibility Compliance",
    desc: "WCAG 2.1 AA compliant markup, keyboard navigation, and screen reader support out of the box.",
  },
];

/* ── Timeline Phases ── */
const PHASES = [
  {
    phase: "01",
    title: "Strategy & Wireframes",
    timeline: "Week 1",
    desc: "Stakeholder interviews, competitive analysis, sitemap architecture, and low-fidelity wireframes.",
  },
  {
    phase: "02",
    title: "Design & Prototyping",
    timeline: "Weeks 2-3",
    desc: "High-fidelity Figma designs, interactive prototypes, design system buildout, and client review cycles.",
  },
  {
    phase: "03",
    title: "Development",
    timeline: "Weeks 4-7",
    desc: "Component development, CMS integration, SEO implementation, analytics wiring, and QA testing.",
  },
  {
    phase: "04",
    title: "Launch & Optimization",
    timeline: "Week 8",
    desc: "Staging review, performance audits, DNS cutover, monitoring setup, and post-launch optimization.",
  },
];

/* ── Tech Stack ── */
const TECH = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
  "Contentful",
  "Google Analytics",
  "Lighthouse",
  "Figma",
];

/* ── Case Study Bullets ── */
const CASE_BULLETS = [
  "Conversion-optimized layout with clear CTAs and social proof sections",
  "Scroll-triggered animations and micro-interactions for engagement",
  "Audience-specific landing pages (/for/veterans, /for/agencies, etc.)",
  "SEO structured data with JSON-LD, Open Graph, and canonical URLs",
  "Sub-second load times with Lighthouse performance score 95+",
];

export default function WebServicePage() {
  return (
    <>
      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative overflow-hidden py-28 md:py-40">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />

        {/* Floating orbs */}
        <div className="absolute top-[-100px] left-[-80px] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float" />
        <div className="absolute bottom-[-60px] right-[-100px] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float-slow" />

        {/* Contour circles */}
        <div className="contour-circle w-[400px] h-[400px]" />
        <div
          className="contour-circle w-[650px] h-[650px]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="contour-circle w-[900px] h-[900px]"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
              <Globe className="w-3 h-3" />
              Web & Digital Products
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
              Websites That
              <br />
              <span className="gradient-text">Convert.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
              High-performance marketing sites and digital products engineered
              for speed, SEO, and conversion. We build the web experiences that
              turn visitors into customers and customers into advocates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ Deliverables ═══════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                What You Get
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Full-Spectrum <span className="text-emerald-400">Delivery</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Every engagement includes the full stack of deliverables needed to
              ship a production-grade web product &mdash; no hidden costs, no
              missing pieces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DELIVERABLES.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-7 transition-all hover:bg-stone-900/60 hover-lift h-full">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:bg-emerald-500/20 transition-colors">
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

      {/* ═══════════════ Timeline ═══════════════ */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                Process
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              8-Week <span className="text-emerald-400">Sprint</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              From first call to live site in eight weeks. Every phase has clear
              deliverables and approval gates &mdash; no scope creep, no
              surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PHASES.map((p, i) => (
              <Reveal key={p.phase} delay={i * 120}>
                <div className="relative bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover:bg-stone-900/60 shimmer-bg h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-black">
                      {p.phase}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {p.title}
                      </h3>
                      <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                        {p.timeline}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed pl-14">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Tech Stack ═══════════════ */}
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
              Built With the <span className="text-emerald-400">Best</span>
            </h2>
          </div>

          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {TECH.map((t) => (
                <span
                  key={t}
                  className="bg-stone-900/60 border border-white/5 hover:border-emerald-500/20 text-sm font-semibold text-stone-300 hover:text-emerald-400 px-5 py-2.5 rounded-full transition-all cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ Case Study ═══════════════ */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                Case Study
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              CapturePilot{" "}
              <span className="text-emerald-400">Marketing Site</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              We designed and built the public marketing site for CapturePilot
              &mdash; a federal capture intelligence platform. The goal:
              communicate complex B2G value propositions clearly and convert
              visitors into signups.
            </p>
          </div>

          <Reveal delay={100}>
            <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 md:p-10 shimmer-bg">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Left — Bullets */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">
                    What We Shipped
                  </h3>
                  <ul className="space-y-4">
                    {CASE_BULLETS.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm text-stone-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — Stats + Link */}
                <div className="flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-stone-950/60 border border-white/5 rounded-xl p-5 text-center">
                      <AnimatedCounter
                        end={95}
                        suffix="+"
                        className="text-3xl font-black text-emerald-400"
                      />
                      <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">
                        Lighthouse Score
                      </p>
                    </div>
                    <div className="bg-stone-950/60 border border-white/5 rounded-xl p-5 text-center">
                      <AnimatedCounter
                        end={800}
                        prefix="<"
                        suffix="ms"
                        className="text-3xl font-black text-emerald-400"
                      />
                      <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">
                        Load Time
                      </p>
                    </div>
                    <div className="bg-stone-950/60 border border-white/5 rounded-xl p-5 text-center">
                      <AnimatedCounter
                        end={6}
                        className="text-3xl font-black text-emerald-400"
                      />
                      <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">
                        Landing Pages
                      </p>
                    </div>
                    <div className="bg-stone-950/60 border border-white/5 rounded-xl p-5 text-center">
                      <AnimatedCounter
                        end={100}
                        suffix="%"
                        className="text-3xl font-black text-emerald-400"
                      />
                      <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">
                        Accessible
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://capturepilot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
                  >
                    Visit capturepilot.com{" "}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <Rocket className="w-10 h-10 text-emerald-400 mx-auto mb-6 animate-hero-float" />
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Ready to Launch?
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-stone-400 mb-10 text-lg">
              Tell us about your project. We&apos;ll map the architecture, define
              the timeline, and get your site live in eight weeks or less.
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
    </>
  );
}
