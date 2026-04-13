import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Brain,
  Gauge,
  Users,
  Tags,
  FileText,
  RefreshCw,
  Shield,
  Rocket,
  CheckCircle2,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "AI Matching",
    desc: "Machine learning algorithms scan 40,000+ federal opportunities daily and surface the contracts your business is most likely to win.",
  },
  {
    icon: Gauge,
    title: "Readiness Score",
    desc: "Get a 0-10 government readiness assessment based on your registrations, certifications, past performance, and capabilities.",
  },
  {
    icon: Users,
    title: "Competitor Intel",
    desc: "See who won similar contracts, track incumbent contractors via USASpending, and identify teaming opportunities before you bid.",
  },
  {
    icon: Tags,
    title: "NAICS Classification",
    desc: "AI-powered NAICS code identification ensures you are matched against the right industry codes for your capabilities.",
  },
  {
    icon: FileText,
    title: "Premium Reports",
    desc: "Detailed PDF intelligence reports with opportunity breakdowns, competitive landscape analysis, and actionable next steps.",
  },
  {
    icon: RefreshCw,
    title: "Daily Pipeline Updates",
    desc: "Automated daily ingestion from SAM.gov with scoring, enrichment, and email alerts so you never miss a relevant opportunity.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Enter Your Website",
    desc: "Provide your company URL and we analyze your capabilities, certifications, and market positioning automatically.",
  },
  {
    step: "02",
    title: "Get Your Readiness Score",
    desc: "Receive a comprehensive government readiness assessment with specific recommendations to improve your competitive position.",
  },
  {
    step: "03",
    title: "See Matched Contracts",
    desc: "Browse federal opportunities ranked by your likelihood to win, complete with competitor intelligence and bid deadlines.",
  },
];

export default function CapturePilotPage() {
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
            <Rocket className="w-3 h-3" />
            Flagship Product
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6">
            CapturePilot
            <br />
            <span className="text-emerald-400">Federal Contract Intelligence</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed mb-12">
            The AI-powered platform that matches small businesses with federal
            government contracts they can actually win. Built by Americurial.
            Trusted by contractors nationwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.capturepilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald"
            >
              Visit CapturePilot <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://app.capturepilot.com/check"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2"
            >
              Try Quick Checker (Free) <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-stone-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-emerald-500/40" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
              The Problem
            </span>
            <div className="h-px w-8 bg-emerald-500/40" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white mb-8">
            Small businesses are fighting a{" "}
            <span className="text-emerald-400">$700B federal market</span> with
            spreadsheets and SAM.gov searches.
          </h2>

          <p className="text-lg text-stone-400 leading-relaxed max-w-3xl mx-auto">
            The federal procurement system was designed for large defense
            contractors with dedicated capture teams. Small businesses lack the
            tools, data, and intelligence to compete effectively. Most never find
            the right opportunities. Those that do often lack the readiness to
            win them.
          </p>
        </div>
      </section>

      {/* Solution — Feature Cards */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                The Solution
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Intelligence That{" "}
              <span className="text-emerald-400">Levels the Field</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              CapturePilot gives small businesses the same capture intelligence
              that large contractors pay millions for &mdash; automated, affordable, and
              always up to date.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover:bg-stone-900/60"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                How It Works
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              Three Steps to{" "}
              <span className="text-emerald-400">Contract Intelligence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 text-center relative"
              >
                <div className="text-5xl font-black text-emerald-500/20 mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-500/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                  Built for Contractors
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                Everything You Need to{" "}
                <span className="text-emerald-400">Win</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "40,000+ active federal opportunities tracked daily",
                  "AI-powered scoring based on your NAICS, set-asides, and capabilities",
                  "Competitor tracking with USASpending award data",
                  "Automated NAICS classification using GPT-4o",
                  "Premium PDF reports for capture managers and BD teams",
                  "Daily email alerts for HOT-matched opportunities",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-stone-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-stone-900/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">
                        CapturePilot Dashboard
                      </p>
                      <p className="text-stone-500 text-xs">
                        Real-time opportunity matching
                      </p>
                    </div>
                  </div>
                  {[
                    {
                      title: "Janitorial Services — DoD",
                      score: 95,
                      tier: "HOT",
                    },
                    {
                      title: "HVAC Maintenance — VA",
                      score: 88,
                      tier: "HOT",
                    },
                    {
                      title: "IT Security — DHS",
                      score: 72,
                      tier: "WARM",
                    },
                    {
                      title: "Landscaping — Army Corps",
                      score: 65,
                      tier: "WARM",
                    },
                  ].map((opp) => (
                    <div
                      key={opp.title}
                      className="bg-stone-950/60 border border-white/5 rounded-xl p-4 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm font-bold text-white">
                          {opp.title}
                        </p>
                        <p className="text-xs text-stone-500 mt-0.5">
                          Match Score: {opp.score}%
                        </p>
                      </div>
                      <div
                        className={`text-[10px] font-bold px-2 py-1 rounded ${
                          opp.tier === "HOT"
                            ? "bg-red-500/10 text-red-400 border border-red-500/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {opp.tier}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-emerald-500/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Mention + CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Free During Beta
          </h2>
          <p className="text-lg text-stone-400 mb-4 leading-relaxed">
            CapturePilot is currently in beta. Full access is free while we
            refine the platform with early users.
          </p>
          <p className="text-stone-500 mb-10">
            $199/mo after beta. Lock in early access pricing by signing up now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.capturepilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald"
            >
              Visit CapturePilot <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://app.capturepilot.com/check"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2"
            >
              Try Quick Checker (Free) <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
