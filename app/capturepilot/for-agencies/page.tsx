"use client";

import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Users,
  CheckSquare,
  MessageSquare,
  FolderOpen,
  ShieldCheck,
  Zap,
  Building2,
  FileText,
  Target,
  ExternalLink,
  Handshake,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard, Eyebrow } from "@/components/Interactive";

const FEATURES = [
  {
    icon: Users,
    title: "Multi-client workspace",
    desc: "Run every capture client from one dashboard. Scoped accounts, per-client NAICS feeds, team permissions. No tab-hopping between 6 portals.",
  },
  {
    icon: CheckSquare,
    title: "Assign tasks to clients",
    desc: "Need their W-9, their Joint Venture agreement, their latest past performance? Push a task, they upload, you get notified. No more email ping-pong.",
  },
  {
    icon: MessageSquare,
    title: "Interactive portal for clients",
    desc: "Your clients log in, see their pipeline, see what you&apos;re working on, leave comments, ask questions. Kills 40% of status-update calls.",
  },
  {
    icon: FolderOpen,
    title: "Document vault per client",
    desc: "Client-scoped Supabase storage. Capability statements, past performance, cert letters. Permissioned, versioned, never lost in email.",
  },
  {
    icon: Target,
    title: "Opportunity match feed",
    desc: "40,000+ federal opportunities, scored per-client. You see your whole book of business ranked in one view. No more manual SAM.gov searches.",
  },
  {
    icon: FileText,
    title: "AI proposal drafter",
    desc: "Section-by-section generation with your capability statement in the prompt. Color team review workflow built in. Humans still finish, AI removes 60% of the blank-page time.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-grade storage",
    desc: "Built on Supabase + Vercel. Role-based access, audit trails, RLS policies. Your clients&apos; sensitive docs stay scoped to their row.",
  },
  {
    icon: Layers,
    title: "Attachment deep-reader",
    desc: "Upload a 200-page RFP PDF. Get back extracted requirements, deliverables, and qualifications in structured JSON. Ready for your proposal team.",
  },
];

const COMPARE = [
  {
    feature: "Opportunity match feed",
    cp: "40K+ opps, AI-scored per client",
    govwin: "Deltek GovWin — $$$$, demo-gated",
    generic: "Manual SAM.gov searches",
  },
  {
    feature: "Multi-client pipeline view",
    cp: "Yes, built-in",
    govwin: "No (single-org SaaS)",
    generic: "HubSpot workarounds",
  },
  {
    feature: "Client-facing portal",
    cp: "Yes — your clients log in",
    govwin: "No",
    generic: "ClickUp / Notion hacks",
  },
  {
    feature: "Proposal drafter with your templates",
    cp: "Yes, capability statement + past perf in context",
    govwin: "No",
    generic: "ChatGPT + copy-paste",
  },
  {
    feature: "Attachment deep-reader",
    cp: "PDF + DOCX → structured requirements",
    govwin: "Partial (manual summaries)",
    generic: "Manual reading",
  },
  {
    feature: "Price",
    cp: "Starts at $399/mo (agency tier)",
    govwin: "Enterprise only",
    generic: "$0 (your time)",
  },
];

const TIERS = [
  {
    name: "Agency Starter",
    price: 399,
    desc: "For solo consultants and agencies managing 1–5 capture clients.",
    features: [
      "Up to 5 client workspaces",
      "40K+ opportunity feed per client",
      "Basic task assignment",
      "Document vault (10 GB)",
      "Email support",
    ],
  },
  {
    name: "Agency Growth",
    price: 899,
    desc: "For agencies running 5–15 active capture clients with a small team.",
    features: [
      "Up to 15 client workspaces",
      "Multi-seat team access (up to 5 seats)",
      "AI proposal drafter",
      "Attachment deep-reader",
      "Document vault (50 GB)",
      "Priority support + onboarding",
    ],
    highlight: true,
  },
  {
    name: "Agency Scale",
    price: 1999,
    desc: "For established consulting agencies with 15+ clients and multiple capture leads.",
    features: [
      "Unlimited client workspaces",
      "Unlimited team seats",
      "API access for custom workflows",
      "Custom client-portal branding",
      "Document vault (250 GB)",
      "Dedicated customer success + quarterly strategy",
    ],
  },
];

export default function ForAgenciesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/25 via-stone-950 to-stone-950" />
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.08] blur-[120px] animate-orb-float" />
        <div className="absolute bottom-[-5%] right-[15%] w-[400px] h-[400px] rounded-full bg-amber-500/[0.05] blur-[120px] animate-orb-float-slow" />
        <div className="contour-circle w-[600px] h-[600px]" />
        <div className="contour-circle w-[900px] h-[900px]" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Handshake className="w-3 h-3" />
            CapturePilot for Agencies
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tighter text-white leading-[0.92] mb-8 animate-fade-in-up-100">
            The software we run
            <br />
            our own agency on.{" "}
            <span className="gradient-text">Now yours.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-up-200">
            CapturePilot is the SaaS we built to run Americurial. Multi-client capture
            dashboard, client-facing portal, AI proposal drafter, 40K+ opportunity feed.
            <strong className="text-white"> Not white-label — it&apos;s CapturePilot, and your clients see it.</strong> If you run a
            GovCon consulting practice, this is the ops layer you were duct-taping together in ClickUp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-300">
            <a
              href="https://meetings-na2.hubspot.com/americurial/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald pulse-glow"
            >
              Book a Product Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://app.capturepilot.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors flex items-center gap-2"
            >
              Start 14-Day Trial <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-8 text-xs text-stone-500 animate-fade-in-up-400">
            No credit card for trial · Switch plan anytime · Cancel month-to-month
          </p>
        </div>
      </section>

      {/* ── The pitch ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Eyebrow align="center">The pitch</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              You&apos;re running capture in{" "}
              <span className="gradient-text">6 different tools.</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
              SAM.gov in a browser tab. GovWin in another. Notion for pipeline. Slack for
              client chat. Google Drive for documents. Email for everything else. Your
              capture lead spends more time context-switching than writing proposals.
            </p>
            <p className="text-emerald-300 font-bold mt-6 text-lg">
              CapturePilot collapses all of it into one workspace — and gives your clients a
              portal so they stop asking &ldquo;what are you working on this week?&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Eyebrow align="center">What&apos;s inside</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              Agency-grade <span className="gradient-text">everything.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 100}>
                <TiltCard max={4}>
                  <div className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 h-full transition-all hover-lift">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug">
                      {f.title}
                    </h3>
                    <p
                      className="text-xs text-stone-400 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: f.desc }}
                    />
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Eyebrow align="center">How it stacks up</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Built for <span className="gradient-text">agencies, not primes.</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto bg-stone-900/40 border border-white/5 rounded-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="p-5 text-left text-stone-400 font-bold text-xs uppercase tracking-widest"></th>
                    <th className="p-5 text-left text-emerald-400 font-bold text-xs uppercase tracking-widest">
                      CapturePilot
                    </th>
                    <th className="p-5 text-left text-stone-500 font-bold text-xs uppercase tracking-widest">
                      Deltek GovWin
                    </th>
                    <th className="p-5 text-left text-stone-500 font-bold text-xs uppercase tracking-widest">
                      DIY stack
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i < COMPARE.length - 1 ? "border-b border-white/5" : ""}
                    >
                      <td className="p-5 text-white font-bold">{row.feature}</td>
                      <td className="p-5 text-emerald-300">{row.cp}</td>
                      <td className="p-5 text-stone-400">{row.govwin}</td>
                      <td className="p-5 text-stone-500">{row.generic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <Eyebrow align="center">Agency pricing</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Published. <span className="gradient-text">Always.</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Month-to-month. Cancel any time. Pricing below is indicative — final depends on
              seat count + data volume.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <TiltCard max={4}>
                  <div
                    className={`relative bg-stone-900/40 border rounded-2xl p-8 transition-all flex flex-col h-full ${
                      t.highlight
                        ? "border-emerald-500/40 ring-1 ring-emerald-500/15 bg-stone-900/60"
                        : "border-white/5 hover:border-emerald-500/20"
                    }`}
                  >
                    {t.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{t.name}</h3>
                    <div className="flex items-baseline gap-1.5 mb-4">
                      <span className="text-4xl font-black text-emerald-400 tabular-nums">
                        ${t.price}
                      </span>
                      <span className="text-stone-500 text-sm">/month</span>
                    </div>
                    <p className="text-sm text-stone-400 mb-6 leading-relaxed">{t.desc}</p>
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {t.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm text-stone-300"
                        >
                          <CheckSquare className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://meetings-na2.hubspot.com/americurial/intro-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full text-center font-bold text-sm px-6 py-4 rounded-full transition-all flex items-center justify-center gap-2 ${
                        t.highlight
                          ? "bg-emerald-600 hover:bg-emerald-500 text-white glow-emerald"
                          : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                      }`}
                    >
                      Book a demo <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <Reveal className="max-w-3xl mx-auto px-6 text-center relative">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6 animate-hero-float" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            See it live in 20 minutes.
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            We&apos;ll show you how we run Americurial capture work inside CapturePilot, then
            spin up a trial workspace with your real clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://meetings-na2.hubspot.com/americurial/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald"
            >
              Book Product Demo <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/capturepilot"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors"
            >
              See Consumer CapturePilot
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
