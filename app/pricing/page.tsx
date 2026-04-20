"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  TrendingUp,
  Shield,
  CheckCircle2,
  ChevronDown,
  DollarSign,
  Award,
  FileText,
  Crosshair,
  Target,
  Layers,
  Zap,
  Info,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard, Eyebrow } from "@/components/Interactive";

/* ───────────────────────────────── Retainer tiers ───────────────────────────────── */

type Tier = {
  icon: typeof Rocket;
  name: string;
  tagline: string;
  price: number;
  period: string;
  successFee: string;
  scope: string;
  scopeLine: { label: string; value: string }[];
  features: string[];
  highlight?: boolean;
};

const TIERS: Tier[] = [
  {
    icon: Rocket,
    name: "Starter Capture",
    tagline: "You have 1 location, a clear niche, and want your first $1M in federal revenue.",
    price: 2500,
    period: "/month",
    successFee: "5% success fee on awarded contracts",
    scope: "1 location · 1–3 NAICS · 1 primary certification path",
    scopeLine: [
      { label: "Locations", value: "1" },
      { label: "NAICS Codes", value: "Up to 3" },
      { label: "Match Review", value: "Monthly" },
    ],
    features: [
      "SAM.gov health check + optimization",
      "Capability statement (branded PDF + editable)",
      "Monthly hot-match review (top 10 opps)",
      "1 Sources Sought response per quarter",
      "1 proposal support engagement per quarter",
      "CapturePilot software — agency tier (included)",
      "Shared task board + priority Slack channel",
    ],
  },
  {
    icon: TrendingUp,
    name: "Growth Capture",
    tagline: "Two locations or two distinct service lines. You want a predictable pipeline.",
    price: 4500,
    period: "/month",
    successFee: "5% success fee on awarded contracts",
    scope: "Up to 2 locations · 3–6 NAICS · Multiple cert paths",
    scopeLine: [
      { label: "Locations", value: "Up to 2" },
      { label: "NAICS Codes", value: "3–6" },
      { label: "Match Review", value: "Weekly" },
    ],
    features: [
      "Everything in Starter, plus:",
      "Weekly hot-match review + pipeline scoring",
      "Up to 2 proposals per month (managed writing)",
      "Sources Sought responses — unlimited",
      "Teaming partner shortlist + intro orchestration",
      "Competitor & incumbent intelligence reports",
      "Quarterly capability statement refresh",
      "Dedicated capture lead (named on your account)",
    ],
    highlight: true,
  },
  {
    icon: Layers,
    name: "Full Capture",
    tagline: "Multi-location, multi-vertical operator ready to scale aggressively.",
    price: 8500,
    period: "/month",
    successFee: "5% success fee on awarded contracts",
    scope: "3–5 locations · Unlimited NAICS · High-complexity pursuits",
    scopeLine: [
      { label: "Locations", value: "3–5" },
      { label: "NAICS Codes", value: "Unlimited" },
      { label: "Match Review", value: "Daily" },
    ],
    features: [
      "Everything in Growth, plus:",
      "Daily hot-match review + capture manager",
      "Unlimited proposal writing (our full team)",
      "Price-to-Win + Black Hat review on major pursuits",
      "Executive briefings + monthly pipeline strategy call",
      "GWAC / IDIQ / MAC positioning (OASIS+, etc.)",
      "CPARS optimization + post-award compliance",
      "Custom CapturePilot workflows + API access",
    ],
  },
];

/* ───────────────────────────────── Productized ───────────────────────────────── */

type Product = {
  icon: typeof Award;
  name: string;
  price: number;
  desc: string;
  includes: string[];
};

const PRODUCTS: Product[] = [
  {
    icon: Award,
    name: "SAM.gov Launch Kit",
    price: 2500,
    desc: "For firms not yet registered or underperforming in SAM. We audit, optimize, and hand you a launch-ready presence.",
    includes: [
      "Full SAM.gov registration or rescue",
      "Capability statement (branded PDF + editable)",
      "Template pack (Sources Sought, capability, bio, teaming agreement)",
      "Strengths audit — NAICS + cert recommendations",
      "1-hour strategy + training session",
      "Lifetime discount on CapturePilot software",
    ],
  },
  {
    icon: FileText,
    name: "Single Proposal Writing",
    price: 4500,
    desc: "One-off proposal for a specific RFP (up to 30 pages of narrative). Our team writes, you review.",
    includes: [
      "Solicitation compliance matrix",
      "Win-theme workshop (60 min)",
      "Full narrative writing — up to 30 pages",
      "Graphics + cover + formatting",
      "Color team review (Pink → Red → Gold)",
      "Submission-ready package",
    ],
  },
  {
    icon: Crosshair,
    name: "Capability Statement Pro",
    price: 1200,
    desc: "A capability statement evaluators actually read. Branded, structured, built to NAICS and past-performance specs.",
    includes: [
      "Branded 1-page PDF (print + digital)",
      "Editable master file (InDesign or Figma)",
      "NAICS + PSC mapping to your strengths",
      "Past-performance framing",
      "Differentiators + set-aside cert badges",
      "3 revisions included",
    ],
  },
  {
    icon: Shield,
    name: "Certification Application Support",
    price: 3500,
    desc: "End-to-end help for SDVOSB / VOSB / HUBZone / 8(a). We know the gotchas and ship it in one pass.",
    includes: [
      "Eligibility audit + documentation checklist",
      "Form-by-form guided preparation",
      "Supporting narrative drafting (8(a) most critical)",
      "Submission + one round of responses to SBA inquiries",
      "Post-approval marketing toolkit",
      "Includes re-cert reminder for year 3",
    ],
  },
  {
    icon: Target,
    name: "Sources Sought Sprint",
    price: 1800,
    desc: "A 5-business-day sprint on a single Sources Sought / RFI — the cheapest shot at shaping a future RFP.",
    includes: [
      "Notice analysis + agency intel",
      "Full Sources Sought response drafted",
      "Teaming recommendations",
      "Follow-up questions + email to contracting officer",
      "Intel brief on what the response tells us about RFP timing",
    ],
  },
];

/* ───────────────────────────────── FAQ ───────────────────────────────── */

const FAQS = [
  {
    q: "How does the 5% success fee work?",
    a: "We charge 5% of the awarded contract value (base year + funded options) on any contract we materially helped capture while you were on retainer. Billed in 12 equal monthly installments after award, aligned with your revenue — not before. No win, no fee. This is how we make sure our incentives match yours.",
  },
  {
    q: "What counts as a 'location' in your tier structure?",
    a: "A distinct physical operating location OR a distinct service line requiring its own past-performance narrative. A janitorial firm operating in Dallas and Houston with the same NAICS = 2 locations. A firm doing janitorial in Dallas and HVAC in Dallas = 2 locations because it needs two separate positioning stories.",
  },
  {
    q: "How does the veteran 20% discount work?",
    a: "After you book, we ask for a DD-214 (member copy), a VA benefits letter, or equivalent proof of service. Verified once, applied for life — across every retainer and every productized offer. Upload happens in a secure portal; we delete the file after verification.",
  },
  {
    q: "Can I cancel my retainer anytime?",
    a: "Yes. Month-to-month, no minimum term. We earn the retainer every month or you leave. The only commitment you sign is the success-fee agreement, which survives cancellation for any contracts we helped capture while active.",
  },
  {
    q: "Do you work with non-veteran small businesses?",
    a: "Yes. Veteran status isn&apos;t a requirement — it&apos;s a discount. Non-veteran-owned firms get the same quality of work at the listed rate. Our focus is veteran-owned firms because it&apos;s where we come from and where the federal market has the biggest under-served demand.",
  },
  {
    q: "What's included in 'CapturePilot — agency tier'?",
    a: "A dedicated workspace in our CapturePilot SaaS where you see our work in real time: tasks assigned to you, opportunities we&apos;re tracking, pursuit pipeline, document uploads, and capture intelligence. It&apos;s the same platform we use internally, scoped to your account.",
  },
  {
    q: "What if I already have a capture consultant?",
    a: "We can run in parallel or audit their work. Often we act as the software + analytical layer while they keep the client relationship. Tell us what you have and we&apos;ll tell you honestly whether you need us.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-emerald-500/20">
      <button
        type="button"
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

function formatUSD(n: number) {
  return `$${n.toLocaleString()}`;
}

export default function PricingPage() {
  const [isVet, setIsVet] = useState(false);

  const discounted = (n: number) => Math.round((n * 0.8) / 10) * 10;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="contour-circle w-[600px] h-[600px]" />
        <div className="contour-circle w-[900px] h-[900px]" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <DollarSign className="w-3 h-3" />
            Transparent Pricing · Rare in GovCon
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8 animate-fade-in-up-100">
            Published prices.
            <br />
            <span className="gradient-text">Skin in the game.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-200 mb-10">
            80% of GovCon consultants hide their prices. We don&apos;t. Retainers pay for the work —
            our real profit is the <strong className="text-white">5% success fee</strong> when you win.
          </p>

          {/* Veteran toggle */}
          <div className="animate-fade-in-up-300 inline-flex items-center gap-3 bg-stone-900/60 border border-amber-500/30 rounded-full p-2 pr-5">
            <button
              type="button"
              onClick={() => setIsVet(!isVet)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                isVet
                  ? "bg-amber-500 text-stone-950 glow-emerald"
                  : "bg-white/5 text-stone-300 hover:bg-white/10"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              {isVet ? "Veteran Pricing ON" : "I'm a Veteran"}
            </button>
            <span className="text-xs text-stone-400">
              Toggle to see <strong className="text-amber-300">20% off</strong> everything
            </span>
          </div>
        </div>
      </section>

      {/* ── Retainer tiers ── */}
      <section id="retainers" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <Eyebrow align="center">Retainers</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
              Pick your <span className="gradient-text">mission scope.</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-sm">
              Tiers scale by number of operating locations and NAICS breadth — because that&apos;s
              what drives real complexity, not headcount.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier, i) => {
              const Icon = tier.icon;
              const finalPrice = isVet ? discounted(tier.price) : tier.price;
              return (
                <Reveal key={tier.name} delay={i * 120}>
                  <TiltCard max={4}>
                    <div
                      className={`relative bg-stone-900/40 border rounded-2xl p-8 transition-all flex flex-col h-full ${
                        tier.highlight
                          ? "border-emerald-500/40 ring-1 ring-emerald-500/15 bg-stone-900/60"
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

                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-xs text-stone-500 mb-6 leading-relaxed">
                        {tier.tagline}
                      </p>

                      <div className="mb-5">
                        {isVet && (
                          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                            Veteran Price
                          </p>
                        )}
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-emerald-400 tabular-nums">
                            {formatUSD(finalPrice)}
                          </span>
                          <span className="text-stone-500 text-sm">{tier.period}</span>
                        </div>
                        {isVet && (
                          <p className="text-xs text-stone-500 line-through mt-1 tabular-nums">
                            {formatUSD(tier.price)} standard
                          </p>
                        )}
                        <p className="text-xs text-emerald-300/80 mt-2 flex items-center gap-1.5">
                          <TrendingUp className="w-3 h-3" /> {tier.successFee}
                        </p>
                      </div>

                      <div className="bg-stone-950/50 border border-white/5 rounded-xl p-3 mb-5 grid grid-cols-3 gap-2">
                        {tier.scopeLine.map((s) => (
                          <div key={s.label} className="text-center">
                            <p className="text-xs font-bold text-white">{s.value}</p>
                            <p className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">
                              {s.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <ul className="space-y-2.5 mb-8 flex-1">
                        {tier.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2.5 text-[13px] text-stone-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            {feat}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="https://meetings-na2.hubspot.com/americurial/intro-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full text-center font-bold text-sm px-6 py-4 rounded-full transition-all flex items-center justify-center gap-2 ${
                          tier.highlight
                            ? "bg-emerald-600 hover:bg-emerald-500 text-white glow-emerald"
                            : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                        }`}
                      >
                        Book Scoping Call <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={300} className="mt-10">
            <div className="max-w-3xl mx-auto bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-5 flex gap-4">
              <Info className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-stone-300 leading-relaxed">
                <strong className="text-white">How we think about pricing.</strong> Our retainer
                covers labor and software — breaking even on the month. We make our real
                margin when you win. If that feels unusual, it&apos;s because 80% of the market
                bills by the hour whether you win or not. We don&apos;t.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Productized offers ── */}
      <section id="productized" className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Eyebrow align="center">One-time engagements</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
              Need something <span className="gradient-text">specific?</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-sm">
              Productized offers with published prices. Clear scope, clear deliverable,
              no retainer commitment.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {PRODUCTS.map((p, i) => {
              const Icon = p.icon;
              const final = isVet ? discounted(p.price) : p.price;
              return (
                <Reveal key={p.name} delay={i * 100}>
                  <TiltCard max={4}>
                    <div className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 transition-all hover-lift h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                          {isVet && (
                            <p className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">
                              Veteran
                            </p>
                          )}
                          <p className="text-2xl font-black text-emerald-400 tabular-nums">
                            {formatUSD(final)}
                          </p>
                          {isVet && (
                            <p className="text-xs text-stone-500 line-through tabular-nums">
                              {formatUSD(p.price)}
                            </p>
                          )}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
                      <p className="text-sm text-stone-400 mb-4 leading-relaxed">{p.desc}</p>
                      <ul className="space-y-1.5 mb-6 flex-1">
                        {p.includes.map((inc) => (
                          <li
                            key={inc}
                            className="flex items-start gap-2 text-[13px] text-stone-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="https://meetings-na2.hubspot.com/americurial/intro-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-full bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 text-stone-300 transition-all flex items-center justify-center gap-2"
                      >
                        Book this engagement <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Veteran verification banner ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/20 via-stone-950 to-emerald-950/20" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="bg-stone-900/60 border border-amber-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-emerald-500/5" />
              <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-amber-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-300 mb-2">
                    Veteran Verification
                  </p>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                    20% off. For life. On everything.
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Upload a DD-214 (member copy), VA benefits letter, or equivalent.
                    Verified once, applied to every retainer and every productized service.
                    Stored securely, deleted after verification.
                  </p>
                </div>
                <Link
                  href="/veterans/verify"
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  Start Verification <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Transparency callout ── */}
      <section className="py-20 md:py-28 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8">
              <Eyebrow>Why we publish prices</Eyebrow>
              <p className="text-stone-300 leading-relaxed text-lg">
                We audited 20+ GovCon consulting agencies. <strong className="text-white">
                Only 3 of them publish prices.</strong> Shipley, OST Global, RSM Federal. The
                other 80% hide their rates behind &ldquo;book a demo&rdquo; — because their
                pricing depends on how deep your pockets look.
              </p>
              <p className="text-stone-300 leading-relaxed text-lg mt-4">
                That&apos;s not how veterans should be treated. You get the same number whether
                you&apos;re a 5-person shop or a 50-person firm. The scope flexes; the rate
                card doesn&apos;t.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Eyebrow align="center">FAQ</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Common <span className="gradient-text">questions.</span>
            </h2>
          </Reveal>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6 animate-hero-float" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Let&apos;s scope your capture plan.
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            15-minute call. We look at your NAICS + past performance + current pipeline and
            tell you exactly which tier fits — or if none does.
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
