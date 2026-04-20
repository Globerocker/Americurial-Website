"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Target,
  Award,
  Anchor,
  Flag,
  CheckCircle2,
  ExternalLink,
  Rocket,
  Users,
  FileText,
  TrendingUp,
  Handshake,
  Crosshair,
  BookOpen,
  Layers,
} from "lucide-react";
import { Reveal, AnimatedCounter } from "@/components/Reveal";
import {
  TiltCard,
  Marquee,
  LiveTicker,
  RadarRings,
  Eyebrow,
} from "@/components/Interactive";

const SERVICES = [
  {
    icon: Crosshair,
    title: "Capture & Bid Strategy",
    desc: "Sources Sought → Award. We run the full capture lifecycle for you — 6 months early, not 6 weeks late.",
    href: "/services/govcon",
  },
  {
    icon: FileText,
    title: "Proposal Writing",
    desc: "Compliant, win-themed, executive-grade proposals. Human writers + our own AI platform. Skin in the game via success fee.",
    href: "/services/govcon",
  },
  {
    icon: Award,
    title: "SAM + Certifications",
    desc: "SAM.gov registration, SDVOSB / VOSB / HUBZone / 8(a) applications, capability statement design.",
    href: "/services/govcon",
  },
  {
    icon: Layers,
    title: "CapturePilot Software",
    desc: "The same platform we use to run our agency, available to you. Opportunity matching, AI scoring, contract radar.",
    href: "/capturepilot",
  },
];

const MISSION = [
  { phase: "01", title: "Recon", desc: "We audit your SAM presence, past performance, NAICS fit. You see gaps in 48 hours." },
  { phase: "02", title: "Position", desc: "Capability statement, SDVOSB/VOSB cert path, teaming shortlist — all inside CapturePilot." },
  { phase: "03", title: "Capture", desc: "Daily match feed, Sources Sought responses, intel on incumbents. Quiet 6-month lead on competitors." },
  { phase: "04", title: "Win", desc: "Proposal team mobilizes. 5% success fee aligns our incentives with yours. No win → no fee." },
];

const CERTS = [
  "SDVOSB",
  "VOSB",
  "HUBZone",
  "8(a)",
  "WOSB",
  "EDWOSB",
  "SDB",
  "Veteran-Owned",
  "Tribal 8(a)",
];

const LIVE_FEED = [
  { agency: "Dept. of Veterans Affairs", title: "Facility O&M — Medical Centers, Region 5", score: 94 },
  { agency: "Army Corps of Engineers", title: "Environmental Remediation Support", score: 88 },
  { agency: "DHS / FEMA", title: "Logistics & Warehousing — IDIQ", score: 91 },
  { agency: "GSA", title: "Professional Services BPA — SDVOSB Set-Aside", score: 96 },
  { agency: "Navy NAVFAC", title: "HVAC Maintenance — Naval Station", score: 85 },
  { agency: "DoD / DLA", title: "Medical Supplies Staging", score: 89 },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/25 via-stone-950 to-stone-950" />

        {/* Radar rings behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]">
          <RadarRings className="w-full h-full" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.08] blur-[120px] animate-orb-float" />
        <div className="absolute bottom-[-5%] right-[10%] w-[420px] h-[420px] rounded-full bg-amber-500/[0.05] blur-[120px] animate-orb-float-slow" />
        <div className="absolute top-[20%] right-[25%] w-[280px] h-[280px] rounded-full bg-emerald-500/[0.05] blur-[100px] animate-orb-float-fast" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="animate-fade-in-up inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
                <Shield className="w-3 h-3" />
                Veteran-Led GovCon Agency · Est. 2024
              </div>

              <h1 className="animate-fade-in-up-100 text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black tracking-tighter text-white leading-[0.92] mb-8">
                Win the contracts
                <br />
                you <span className="gradient-text">deserve.</span>
              </h1>

              <p className="animate-fade-in-up-200 text-lg md:text-xl text-stone-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                We&apos;re a veteran-owned capture agency that helps veteran-owned
                businesses win federal contracts. Built by veterans, backed by our
                own software. <strong className="text-white">Retainer covers the work. We profit when you win.</strong>
              </p>

              <div className="animate-fade-in-up-300 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10">
                <a
                  href="https://meetings-na2.hubspot.com/americurial/intro-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald pulse-glow"
                >
                  Book a 15-Min Mission Briefing <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/for/veterans"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2"
                >
                  Veterans Save 20% <Award className="w-4 h-4 text-amber-400" />
                </Link>
              </div>

              <div className="animate-fade-in-up-400 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start text-xs text-stone-500">
                <span className="flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5 text-emerald-500" />
                  German Navy Boarding Team · Atalanta
                </span>
                <span className="flex items-center gap-1.5">
                  <Flag className="w-3.5 h-3.5 text-emerald-500" />
                  Canadian Army · Afghanistan
                </span>
              </div>
            </div>

            {/* Right: live feed card */}
            <div className="lg:col-span-5 animate-fade-in-up-300">
              <TiltCard className="bg-stone-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden shimmer-bg">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-amber-500/5" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                        <Rocket className="w-4 h-4 text-emerald-300" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">CapturePilot</p>
                        <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">
                          Live Opportunity Radar
                        </p>
                      </div>
                    </div>
                    <span className="kbd-pill">LIVE</span>
                  </div>

                  <LiveTicker items={LIVE_FEED} />

                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {[
                      { l: "Tracked", v: "40K+" },
                      { l: "Avg Match", v: "87%" },
                      { l: "SB Eligible", v: "62%" },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="bg-stone-950/60 border border-white/5 rounded-lg p-3 text-center"
                      >
                        <p className="text-lg font-black text-emerald-400 tabular-nums">
                          {s.v}
                        </p>
                        <p className="text-[9px] uppercase tracking-widest font-bold text-stone-500">
                          {s.l}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>

              <div className="mt-3 text-center">
                <Link
                  href="/capturepilot"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  See inside CapturePilot <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cert marquee ── */}
      <section className="border-y border-white/5 bg-stone-950/80 py-8 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none" />
        <Marquee speed="slow">
          {CERTS.concat(CERTS).map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="flex items-center gap-2 text-stone-500 whitespace-nowrap"
            >
              <Award className="w-4 h-4 text-emerald-500/60" />
              <span className="text-sm font-bold tracking-widest">{c}</span>
              <span className="text-emerald-500/20 ml-4">◆</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b border-white/5 bg-stone-900/30 shimmer-bg">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Reveal>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black gradient-text mb-1 tabular-nums">
                <AnimatedCounter end={700} prefix="$" suffix="B" />
              </p>
              <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                Federal market we target
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black gradient-text mb-1 tabular-nums">
                <AnimatedCounter end={40} suffix="K+" />
              </p>
              <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                Opportunities in our feed
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black gradient-text-amber mb-1 tabular-nums">
                <AnimatedCounter end={20} suffix="%" />
              </p>
              <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                Veteran discount on everything
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black gradient-text mb-1 tabular-nums">
                <AnimatedCounter end={5} suffix="%" />
              </p>
              <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                Success fee — skin in the game
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <Eyebrow align="center">What we do</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Your full GovCon <span className="gradient-text">capture team.</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              We don&apos;t just write proposals after the RFP drops. We position
              you 6 months earlier, find the right teaming partners, and close.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 100}>
                <TiltCard max={5}>
                  <Link
                    href={svc.href}
                    className="group block bg-stone-900/40 border border-white/5 hover:border-emerald-500/40 rounded-2xl p-8 transition-all hover:bg-stone-900/60 shimmer-bg h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                      <svc.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-stone-400 leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                    <span className="text-xs font-bold text-emerald-400 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400} className="text-center mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              See transparent pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Mission Timeline ── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950 relative overflow-hidden">
        <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-20">
            <Eyebrow align="center">How we run it</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              A <span className="gradient-text">mission framework</span>, not a service menu.
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Four phases, one plan, one team. You see every step in CapturePilot in real time.
            </p>
          </Reveal>

          {/* Vertical line for timeline on desktop */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent hidden md:block" />
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-20 relative">
              {MISSION.map((p, i) => (
                <Reveal
                  key={p.phase}
                  delay={i * 120}
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={i % 2 === 0 ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"}
                >
                  <div className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-8 relative transition-all hover-lift">
                    <div
                      className={`hidden md:block absolute top-8 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-stone-950 ${
                        i % 2 === 0 ? "-right-[50px]" : "-left-[50px]"
                      }`}
                    />
                    <div className="text-4xl font-black gradient-text opacity-40 mb-3">
                      {p.phase}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-stone-400 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Veteran-first positioning ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] rounded-full bg-amber-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal direction="left" className="lg:col-span-5">
              <Eyebrow>Why veterans, by veterans</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                The government reserves <span className="gradient-text-amber">contracts for you.</span>
                <br />We help you claim them.
              </h2>
              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  The federal government targets <strong className="text-white">3% of contract dollars</strong> for SDVOSBs — over <strong className="text-white">$25 billion a year</strong>. Another
                  $180B+ flows to small business set-asides where veteran status is a tiebreaker.
                </p>
                <p>
                  Most veteran-owned firms never touch any of it. The paperwork, the portals, the
                  competitive intel — it&apos;s designed to be overwhelming. That&apos;s the gap
                  Americurial fills.
                </p>
                <p>
                  <strong className="text-emerald-300">20% veteran discount on every retainer and every productized service.</strong> Verified
                  with your DD-214 or VA letter. It&apos;s the least we can do for someone who served.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/for/veterans"
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2"
                >
                  Veterans Program <Award className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
                >
                  Meet the founders
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" delay={200} className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <TiltCard max={6} className="col-span-2 bg-stone-900/50 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                  <div className="relative flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <Anchor className="w-7 h-7 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Andre Schuler · Co-Founder</p>
                      <p className="text-sm text-stone-400">
                        German Navy Marine Infantry → Boarding Team special unit.
                        Two tours, Operation Atalanta, anti-piracy off the Horn of Africa.
                      </p>
                    </div>
                  </div>
                </TiltCard>

                <TiltCard max={6} className="col-span-2 bg-stone-900/50 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                  <div className="relative flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <Flag className="w-7 h-7 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Sergio · Co-Founder</p>
                      <p className="text-sm text-stone-400">
                        Canadian Army Infantry. Two combat tours in Afghanistan.
                        Brings the ground-truth discipline into every capture plan.
                      </p>
                    </div>
                  </div>
                </TiltCard>

                <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-black gradient-text-amber tabular-nums mb-1">3%</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500">
                    SDVOSB federal target
                  </p>
                </div>
                <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-black gradient-text tabular-nums mb-1">$25B</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500">
                    Annual SDVOSB spend
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CapturePilot Showcase ── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/5 to-stone-950 relative overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.05] blur-[120px] animate-orb-float-slow" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <Eyebrow>Software advantage</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                The only agency with its own{" "}
                <span className="gradient-text">SaaS platform.</span>
              </h2>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Our consultants use CapturePilot to run your capture work — you see the same
                dashboard in real time. 40,000+ tracked opportunities, AI match scoring,
                competitor intel, attachment analysis, proposal drafter. No other agency gives
                you this. Not Shipley. Not Lohfeld. Not OST.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Daily hot-match feed scoped to your NAICS + certs",
                  "Competitor intelligence via USASpending + FPDS",
                  "AI-drafted Sources Sought responses",
                  "Attachment deep-reader (requirements extraction)",
                  "Shared task board — you see our work, we see yours",
                ].map((feat, i) => (
                  <Reveal key={feat} delay={i * 80} direction="left">
                    <li className="flex items-center gap-3 text-sm text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feat}
                    </li>
                  </Reveal>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/capturepilot"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
                >
                  See the platform <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/capturepilot/for-agencies"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
                >
                  For Agencies <Handshake className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <TiltCard className="relative">
                <div className="bg-stone-900/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden shimmer-bg">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                          <Target className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">Today&apos;s Matches</p>
                          <p className="text-stone-500 text-xs">Scoped to SDVOSB · NAICS 561720</p>
                        </div>
                      </div>
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    {[
                      { t: "Janitorial Services — VA Medical Center", s: 96, h: "HOT" },
                      { t: "HVAC Maintenance — Army Base", s: 89, h: "WARM" },
                      { t: "IT Security Support — DHS", s: 82, h: "WARM" },
                      { t: "Grounds Maintenance — Navy NAVFAC", s: 78, h: "WARM" },
                    ].map((opp, i) => (
                      <Reveal key={opp.t} delay={350 + i * 100} direction="right">
                        <div className="bg-stone-950/60 border border-white/5 rounded-xl p-4 flex items-center justify-between hover:border-emerald-500/30 transition-colors">
                          <div className="flex-1 min-w-0 pr-3">
                            <p className="text-sm font-bold text-white truncate">{opp.t}</p>
                            <p className="text-xs text-stone-500 mt-0.5">Match Score: {opp.s}%</p>
                          </div>
                          <div
                            className={`text-[10px] font-bold px-2 py-1 rounded border ${
                              opp.h === "HOT"
                                ? "bg-red-500/10 text-red-400 border-red-500/20"
                                : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                            }`}
                          >
                            {opp.h}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-emerald-500/10 blur-3xl rounded-full" />
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Lead magnets teaser ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <Eyebrow align="center">Free resources</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Start <span className="gradient-text">without us.</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Six free tools, checklists, and playbooks. No login. No sales call. Keep them
              either way.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "First $1M Federal Contract Playbook", href: "/tools/first-million", tag: "PDF · 40 pages" },
              { icon: Target, title: "Bid / No-Bid Scorecard", href: "/tools/bid-no-bid", tag: "Interactive" },
              { icon: Award, title: "Veteran Cert Path Wizard", href: "/tools/cert-path", tag: "Interactive" },
              { icon: FileText, title: "Capability Statement Template Pack", href: "/tools/capability-pack", tag: "5 PDFs" },
              { icon: CheckCircle2, title: "SAM.gov Registration Checklist", href: "/tools/sam-checklist", tag: "PDF" },
              { icon: Rocket, title: "CapturePilot Quick Checker", href: "https://app.capturepilot.com/check", tag: "Live tool", external: true },
            ].map((t, i) => {
              const Inner = (
                <TiltCard max={5}>
                  <div className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 transition-all hover-lift h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <t.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-stone-500 bg-white/5 px-2 py-1 rounded">
                        {t.tag}
                      </span>
                    </div>
                    <p className="text-white font-bold group-hover:text-emerald-300 transition-colors">
                      {t.title}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-emerald-400">
                      Get it <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </TiltCard>
              );
              return (
                <Reveal key={t.title} delay={i * 80}>
                  {t.external ? (
                    <a href={t.href} target="_blank" rel="noopener noreferrer" className="block">
                      {Inner}
                    </a>
                  ) : (
                    <Link href={t.href} className="block">
                      {Inner}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/25 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-[10%] left-[30%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.05] blur-[120px] animate-orb-float-slow" />
        <div className="contour-circle w-[600px] h-[600px]" />
        <div className="contour-circle w-[800px] h-[800px]" style={{ animationDelay: "2s" }} />

        <Reveal className="max-w-3xl mx-auto px-6 text-center relative">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 animate-hero-float">
            <Target className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Your first contract is <span className="gradient-text">closer than you think.</span>
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            One 15-minute call. No slide deck. We look at your NAICS, past performance, and
            the current SAM feed — and tell you straight whether we&apos;re the right fit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://meetings-na2.hubspot.com/americurial/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald pulse-glow"
            >
              Book Your Mission Briefing <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> See Pricing
            </Link>
          </div>
          <p className="mt-8 text-xs text-stone-500">
            Veteran? <Link href="/for/veterans" className="text-amber-400 hover:text-amber-300 font-bold">
              Claim your 20% lifetime discount →
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
