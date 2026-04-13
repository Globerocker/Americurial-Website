"use client";

import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Code2,
  Zap,
  BarChart3,
  Shield,
  Clock,
  Layers,
  CheckCircle2,
  Target,
  TrendingUp,
  CreditCard,
} from "lucide-react";
import { Reveal, AnimatedCounter } from "@/components/Reveal";

const FEATURES = [
  { icon: Rocket, title: "Zero to MVP in 90 Days", desc: "We scope, design, architect, and ship your first product in a single sprint cycle. Real users on day 90 — not a prototype." },
  { icon: Code2, title: "Full-Stack Product Build", desc: "Next.js, React, Supabase, Stripe, Vercel — the modern stack that lets you move fast without technical debt." },
  { icon: CreditCard, title: "Stripe-Ready Billing", desc: "Subscription management, usage-based pricing, free trials, and upgrade flows built in from day one." },
  { icon: BarChart3, title: "Analytics & Dashboards", desc: "Know what your users do. We build in event tracking, usage analytics, and admin dashboards from the start." },
  { icon: Shield, title: "Production Infrastructure", desc: "CI/CD pipelines, staging environments, error monitoring, and security hardening. Not an afterthought." },
  { icon: TrendingUp, title: "Post-Launch Iteration", desc: "Ship fast, learn fast. We stay on for feature sprints, A/B testing, and performance optimization after launch." },
];

const PROCESS = [
  { step: "01", title: "Discovery Call", desc: "Tell us your vision. We define the scope, timeline, and budget." },
  { step: "02", title: "Design & Architecture", desc: "Wireframes, database schema, and API design in week one." },
  { step: "03", title: "Build Sprints", desc: "2-week development cycles. Working software every iteration." },
  { step: "04", title: "Launch Day", desc: "Deploy, monitor, iterate. You're live with real users." },
];

export default function StartupsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-[-5%] right-[20%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px] animate-orb-float" />
        <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <div className="contour-circle w-[600px] h-[600px]" />
        <div className="contour-circle w-[900px] h-[900px]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full mb-8">
            <Rocket className="w-3 h-3" /> For Startups
          </div>
          <h1 className="animate-fade-in-up-100 text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            Ship Fast.<br />
            <span className="gradient-text">Scale Smart.</span>
          </h1>
          <p className="animate-fade-in-up-200 text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            You have the idea and the market. We have the engineering team to turn it into
            a production SaaS product &mdash; in 90 days or less.
          </p>
          <div className="animate-fade-in-up-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://meetings-na2.hubspot.com/americurial/intro-call" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald">
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/capturepilot" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-all">
              See What We Built
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-stone-900/30 shimmer-bg">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-emerald-400 mb-1"><AnimatedCounter end={90} suffix=" days" /></p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Idea to production</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-400 mb-1"><AnimatedCounter end={40} suffix="K+" duration={1500} /></p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Users on our platforms</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-400 mb-1"><AnimatedCounter end={2} suffix=" wk" duration={1000} /></p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Sprint cycles</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-400 mb-1"><AnimatedCounter end={99} suffix=".9%" duration={1800} /></p>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Uptime SLA</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-[40%] left-[-5%] w-[350px] h-[350px] rounded-full bg-emerald-500/[0.03] blur-[120px] animate-orb-float" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">What You Get</span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              A Real <span className="gradient-text">Engineering Team</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Not freelancers. Not offshore. A dedicated team that ships production software every two weeks.
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
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">The Process</span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              Idea to <span className="gradient-text">Revenue</span>
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
        <div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <Reveal className="max-w-3xl mx-auto px-6 text-center relative">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6 animate-hero-float" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Ready to Launch?
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            Tell us what you&apos;re building. We&apos;ll scope it and give you a timeline.
          </p>
          <a href="https://meetings-na2.hubspot.com/americurial/intro-call" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all glow-emerald">
            Book a Discovery Call <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </section>
    </>
  );
}
