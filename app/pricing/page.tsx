"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  RefreshCw,
  Shield,
  CheckCircle2,
  ChevronDown,
  Zap,
  DollarSign,
} from "lucide-react";

const TIERS = [
  {
    icon: Rocket,
    name: "Project Sprint",
    price: "$15K - $50K",
    period: "one-time",
    desc: "MVP or feature build with a defined scope, clear timeline, and production deployment included.",
    features: [
      "6-12 week delivery timeline",
      "Full architecture and system design",
      "UI/UX design and prototyping",
      "Frontend and backend engineering",
      "Production deployment on Vercel or AWS",
      "30 days post-launch support included",
    ],
    cta: "Book a Scoping Call",
    href: "https://meetings-na2.hubspot.com/americurial/intro-call",
    highlight: false,
  },
  {
    icon: RefreshCw,
    name: "Growth Retainer",
    price: "$5K - $15K",
    period: "/month",
    desc: "Ongoing development, support, and iteration from a dedicated engineering team embedded in your product.",
    features: [
      "Dedicated engineering team",
      "Weekly sprint cycles with demos",
      "Priority support and bug fixes",
      "Feature development and A/B testing",
      "Performance monitoring and optimization",
      "Slack channel with direct engineer access",
    ],
    cta: "Start a Retainer",
    href: "https://meetings-na2.hubspot.com/americurial/intro-call",
    highlight: true,
  },
  {
    icon: Shield,
    name: "Enterprise / GovTech",
    price: "Custom",
    period: "pricing",
    desc: "Full platform builds with compliance, security hardening, and federal-grade infrastructure. Scoped to your mission.",
    features: [
      "End-to-end platform architecture",
      "Security hardening and compliance review",
      "Federal data integration (SAM.gov, USASpending)",
      "Multi-tenant or agency-specific deployments",
      "Ongoing maintenance and SLA options",
      "Dedicated project lead and engineering team",
    ],
    cta: "Book a Call for Scoping",
    href: "https://meetings-na2.hubspot.com/americurial/intro-call",
    highlight: false,
  },
];

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most MVPs and feature builds ship in 6-12 weeks. Complex platforms with integrations and compliance requirements can take 3-6 months. We give you a precise timeline during the scoping call based on your specific requirements.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. Many of our clients are founders going from idea to MVP. We help you prioritize the features that matter, avoid over-engineering, and get to market fast. If you have a validated idea and a budget, we can build it.",
  },
  {
    q: "What happens after the project launches?",
    a: "Every project sprint includes 30 days of post-launch support for bug fixes and minor adjustments. For ongoing development, most clients transition to a Growth Retainer so we can continue shipping features and optimizing performance.",
  },
  {
    q: "Can you work with our existing codebase?",
    a: "Absolutely. We regularly take over existing codebases, audit them, and build from there. We will give you an honest assessment of the codebase quality and recommend refactoring only when it genuinely saves time and money.",
  },
  {
    q: "Do you handle design, or do we need to bring our own?",
    a: "We handle everything: strategy, UI/UX design, frontend, backend, and deployment. If you already have a designer or design system, we integrate seamlessly. Either way, you get production-quality design and code.",
  },
  {
    q: "What makes Americurial different from other agencies?",
    a: "We are a veteran-owned, engineering-first shop. No account managers, no fluff. Every person on your project writes production code. We built CapturePilot — a real SaaS platform processing 40K+ data points daily — so we practice what we preach.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-emerald-500/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
      >
        <span className="text-white font-bold text-sm pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 -mt-1">
          <p className="text-sm text-stone-400 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-emerald-500/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-emerald-500/[0.03]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
            <DollarSign className="w-3 h-3" />
            Pricing
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            Transparent <span className="text-emerald-400">Pricing</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No surprise invoices. Pick the engagement model
            that fits your needs, and we&apos;ll scope it precisely on a
            call.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative group bg-stone-900/40 border rounded-2xl p-8 transition-all hover:bg-stone-900/60 flex flex-col ${
                  tier.highlight
                    ? "border-emerald-500/30 ring-1 ring-emerald-500/10"
                    : "border-white/5 hover:border-emerald-500/20"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <tier.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {tier.name}
                </h3>

                <div className="mb-4">
                  <span className="text-3xl font-black text-emerald-400">
                    {tier.price}
                  </span>
                  <span className="text-stone-500 text-sm ml-1">
                    {tier.period}
                  </span>
                </div>

                <p className="text-sm text-stone-400 leading-relaxed mb-8">
                  {tier.desc}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-stone-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center font-bold text-sm px-6 py-4 rounded-full transition-all flex items-center justify-center gap-2 ${
                    tier.highlight
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white glow-emerald"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                  }`}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                FAQ
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Common <span className="text-emerald-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Let&apos;s Scope Your Project
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            Every engagement starts with a free strategy call. Tell us what
            you need, and we&apos;ll give you a clear scope, timeline, and
            price.
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
        </div>
      </section>
    </>
  );
}
