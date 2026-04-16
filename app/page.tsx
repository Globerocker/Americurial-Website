"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  Shield,
  Rocket,
  BarChart3,
  Zap,
  CheckCircle2,
  ExternalLink,
  Building2,
  Users,
  Star,
  Target,
} from "lucide-react";
import { Reveal, AnimatedCounter } from "@/components/Reveal";

const SERVICES = [
  {
    icon: Code2,
    title: "SaaS Development",
    desc: "Full-stack product builds from zero to launch. We design, build, and ship subscription software with the infrastructure to scale.",
    href: "/services/saas",
  },
  {
    icon: Globe,
    title: "Web & Digital Products",
    desc: "High-performance marketing sites, dashboards, and portals. Conversion-focused design meets bulletproof engineering.",
    href: "/services/web",
  },
  {
    icon: Shield,
    title: "GovTech Solutions",
    desc: "Federal-grade platforms for government contractors. Compliance-ready, data-rich, built to handle 40K+ data points.",
    href: "/services/govtech",
  },
  {
    icon: BarChart3,
    title: "AI & Data Platforms",
    desc: "Machine learning pipelines, intelligent matching, and AI-powered automation built into production-grade systems.",
    href: "/services/ai",
  },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "We learn your business, market, and users. No assumptions." },
  { step: "02", title: "Architecture", desc: "We design the system — database, APIs, frontend, infra." },
  { step: "03", title: "Build Sprint", desc: "Rapid development in 2-week cycles. You see progress daily." },
  { step: "04", title: "Launch & Scale", desc: "Deploy to production, monitor, iterate. We stay in the fight." },
];

const AUDIENCES = [
  { href: "/for/agencies", icon: Building2, title: "Agencies", desc: "White-label dev power for your clients" },
  { href: "/for/startups", icon: Rocket, title: "Startups", desc: "Zero to MVP in 90 days or less" },
  { href: "/for/veterans", icon: Shield, title: "Veterans", desc: "Fellow vets building for vet-owned businesses" },
  { href: "/for/smb", icon: Users, title: "Small Business", desc: "Enterprise-grade software at SMB budgets" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />

        {/* Floating orbs */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.07] blur-[120px] animate-orb-float" />
        <div className="absolute bottom-[-5%] right-[15%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.05] blur-[120px] animate-orb-float-slow" />
        <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-fast" />

        {/* Contour circles */}
        <div className="contour-circle w-[500px] h-[500px]" />
        <div className="contour-circle w-[700px] h-[700px]" style={{ animationDelay: "2s" }} />
        <div className="contour-circle w-[900px] h-[900px]" style={{ animationDelay: "4s" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full mb-8">
            <Shield className="w-3 h-3" />
            Veteran-Owned Digital Agency
          </div>

          <h1 className="animate-fade-in-up-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            We Build.
            <br />
            <span className="gradient-text">You Win.</span>
          </h1>

          <p className="animate-fade-in-up-200 text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Americurial is a veteran-owned digital agency building SaaS platforms,
            GovTech solutions, and AI-powered products. We don&apos;t just design
            websites &mdash; we engineer systems that generate revenue.
          </p>

          <div className="animate-fade-in-up-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://meetings-na2.hubspot.com/americurial/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald pulse-glow"
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/capturepilot"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2"
            >
              See CapturePilot <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar with animated counters ── */}
      <section className="border-y border-white/5 bg-stone-900/30 shimmer-bg">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">
              <AnimatedCounter end={40} suffix="K+" />
            </p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Data points processed daily</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">
              <AnimatedCounter end={700} prefix="$" suffix="B" duration={1800} />
            </p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Federal market we serve</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">
              <AnimatedCounter end={4} suffix="/5" prefix="" duration={1200} />
            </p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Client satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">
              <AnimatedCounter end={90} suffix=" days" duration={1500} />
            </p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Average time to MVP</p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background orb */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.03] blur-[120px] animate-orb-float-slow" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">What We Build</span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Software That <span className="gradient-text">Scales</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              From concept to production. We handle architecture, design, engineering, deployment, and ongoing iteration.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 100}>
                <Link
                  href={svc.href}
                  className="group block bg-stone-900/40 border border-white/5 hover:border-emerald-500/40 rounded-2xl p-8 transition-all hover:bg-stone-900/60 hover-lift shimmer-bg"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">{svc.title}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed mb-4">{svc.desc}</p>
                  <span className="text-xs font-bold text-emerald-400 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400} className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Who We Serve (Audience Cards) ── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/5 to-stone-950 relative overflow-hidden">
        <div className="absolute bottom-[-10%] left-[10%] w-[350px] h-[350px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">Who We Serve</span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Built for <span className="gradient-text">Builders</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Whether you&apos;re a funded startup, a growing agency, a veteran entrepreneur, or a small business ready to level up.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.href} delay={i * 100}>
                <Link
                  href={a.href}
                  className="group block bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 text-center transition-all hover-lift"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-5 group-hover:bg-emerald-500/20 transition-colors">
                    <a.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
                  <p className="text-sm text-stone-400 mb-4">{a.desc}</p>
                  <span className="text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors inline-flex items-center gap-1">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CapturePilot Showcase ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-500/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">Flagship Product</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">CapturePilot</h2>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Our flagship SaaS platform matches small businesses with federal government contracts they can actually win. 40,000+ opportunities, AI-powered scoring, and a readiness assessment &mdash; all in one dashboard.
              </p>
              <ul className="space-y-3 mb-8">
                {["AI-powered opportunity matching", "Government readiness scoring (0-10)", "Competitor intelligence via USASpending", "Automated NAICS classification", "Premium PDF intelligence reports"].map((feat, i) => (
                  <Reveal key={feat} delay={i * 80} direction="left">
                    <li className="flex items-center gap-3 text-sm text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feat}
                    </li>
                  </Reveal>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.capturepilot.com" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2">
                  Visit CapturePilot <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://app.capturepilot.com/check" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors">
                  Try Quick Checker (Free)
                </a>
              </div>
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
                        <p className="text-white font-bold text-sm">CapturePilot Pro</p>
                        <p className="text-stone-500 text-xs">Federal Contract Intelligence</p>
                      </div>
                    </div>
                    {["Janitorial Services — DoD", "HVAC Maintenance — VA", "IT Security — DHS"].map((opp, i) => (
                      <Reveal key={opp} delay={400 + i * 120} direction="right">
                        <div className="bg-stone-950/60 border border-white/5 rounded-xl p-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-bold text-white">{opp}</p>
                            <p className="text-xs text-stone-500 mt-0.5">Match Score: {95 - i * 5}%</p>
                          </div>
                          <div className={`text-[10px] font-bold px-2 py-1 rounded ${i === 0 ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"}`}>
                            {i === 0 ? "HOT" : "WARM"}
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

      {/* ── Process ── */}
      <section className="py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-[50%] right-[-5%] w-[300px] h-[300px] rounded-full bg-emerald-500/[0.03] blur-[120px] animate-orb-float" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">How We Work</span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              Zero to <span className="gradient-text">Deployed</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 120}>
                <div className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 text-center transition-all hover-lift">
                  <div className="text-4xl font-black gradient-text opacity-40 mb-4">{p.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-stone-400">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <div className="contour-circle w-[600px] h-[600px]" />

        <Reveal className="max-w-3xl mx-auto px-6 text-center relative">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6 animate-hero-float" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">Ready to Build?</h2>
          <p className="text-stone-400 mb-10 text-lg">
            Tell us what you&apos;re building. We&apos;ll tell you how fast we can ship it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://meetings-na2.hubspot.com/americurial/intro-call" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald">
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors">
              Send a Message
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
