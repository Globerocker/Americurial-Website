"use client";

import Link from "next/link";
import {
  ArrowRight,
  Users,
  Globe,
  Zap,
  BarChart3,
  Shield,
  Code2,
  CheckCircle2,
  TrendingUp,
  CreditCard,
  Layers,
  RefreshCw,
} from "lucide-react";
import { Reveal, AnimatedCounter } from "@/components/Reveal";

const FEATURES = [
  { icon: Globe, title: "Professional Web Presence", desc: "High-performance marketing sites that convert visitors into customers. SEO-optimized, mobile-first, and fast." },
  { icon: Code2, title: "Custom Business Software", desc: "Stop duct-taping spreadsheets. We build custom tools — CRMs, dashboards, portals — that actually fit your workflow." },
  { icon: CreditCard, title: "E-Commerce & Payments", desc: "Stripe-powered checkout, subscription billing, and invoicing built into your platform. Start collecting revenue on day one." },
  { icon: BarChart3, title: "Data & Analytics", desc: "Understand your customers. We build tracking, reporting, and dashboards that give you the insights to grow." },
  { icon: Shield, title: "Government Readiness", desc: "Want to sell to the government? We build the platforms and capability statements that get you contract-ready." },
  { icon: RefreshCw, title: "Ongoing Support", desc: "Software isn't a one-time project. We offer retainer-based support for updates, new features, and optimization." },
];

const PROCESS = [
  { step: "01", title: "Free Consultation", desc: "We learn your business, pain points, and goals. Zero commitment." },
  { step: "02", title: "Custom Proposal", desc: "Detailed scope, timeline, and fixed-price quote. No surprises." },
  { step: "03", title: "Build & Launch", desc: "We build in sprints with regular check-ins. You see progress weekly." },
  { step: "04", title: "Grow & Scale", desc: "Post-launch support, feature iteration, and performance optimization." },
];

export default function SMBPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-[-5%] left-[20%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float" />
        <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <div className="contour-circle w-[600px] h-[600px]" />
        <div className="contour-circle w-[900px] h-[900px]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full mb-8">
            <Users className="w-3 h-3" /> For Small Business
          </div>
          <h1 className="animate-fade-in-up-100 text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            Big Software.<br />
            <span className="gradient-text">SMB Budget.</span>
          </h1>
          <p className="animate-fade-in-up-200 text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            You don&apos;t need a million-dollar IT budget to get million-dollar software.
            Americurial builds enterprise-grade tools sized and priced for small businesses.
          </p>
          <div className="animate-fade-in-up-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://meetings-na2.hubspot.com/americurial/intro-call" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/services" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-stone-900/30 shimmer-bg">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-emerald-400 mb-1"><AnimatedCounter end={90} suffix=" days" /></p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Average project delivery</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-400 mb-1"><AnimatedCounter end={50} suffix="%" duration={1200} /></p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Less than enterprise cost</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-400 mb-1"><AnimatedCounter end={24} suffix="/7" duration={1000} /></p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Uptime monitoring</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-400 mb-1"><AnimatedCounter end={0} suffix="" duration={800} /></p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Hidden fees</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-[30%] right-[-5%] w-[350px] h-[350px] rounded-full bg-emerald-500/[0.03] blur-[120px] animate-orb-float" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">What We Build for You</span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Tools That <span className="gradient-text">Grow With You</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              From your first website to a full SaaS platform. We build what you need now and architect it to scale later.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">Simple Process</span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              How We <span className="gradient-text">Work</span>
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

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <Reveal className="max-w-3xl mx-auto px-6 text-center relative">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6 animate-hero-float" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            Free consultation. Fixed-price quotes. No surprises. Let&apos;s talk about what you need.
          </p>
          <a href="https://meetings-na2.hubspot.com/americurial/intro-call" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all glow-emerald">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </section>
    </>
  );
}
