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
    title: "Daily matching",
    desc: "We pull SAM.gov, Grants.gov, and a handful of other feeds every night. By the time you log in, the day's matches are scored and waiting.",
  },
  {
    icon: Gauge,
    title: "Readiness score",
    desc: "A 0–10 number for how ready you actually are: SAM health, certs, past performance, capability statement. With the specific gaps spelled out.",
  },
  {
    icon: Users,
    title: "Competitor intel",
    desc: "Who won the last contract like this. Their NAICS, their UEI, what USASpending shows them billing. Useful before you decide to bid.",
  },
  {
    icon: Tags,
    title: "NAICS mapping",
    desc: "Paste your website. We pull the right NAICS and PSC codes from what's there, instead of asking you to guess.",
  },
  {
    icon: FileText,
    title: "Per-opportunity reports",
    desc: "Branded PDFs with the notice details, the competitive picture, and a checklist of what to do next. Useful for capture meetings or sharing with a teaming partner.",
  },
  {
    icon: RefreshCw,
    title: "Email alerts that don't spam",
    desc: "Only HOT matches above your threshold hit your inbox. Daily digest, not a notification every twenty minutes.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Paste your website",
    desc: "We pull capabilities, certs, and a rough positioning read straight from the page. No long form.",
  },
  {
    step: "02",
    title: "See your readiness score",
    desc: "Where you stand on a 0–10, with the two or three things that would actually move the number.",
  },
  {
    step: "03",
    title: "Get matched opportunities",
    desc: "Today's HOT and WARM matches with deadlines, set-asides, and the competitive picture on each.",
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
            We built this because we needed it ourselves. It scores federal
            opportunities against your actual capability statement, then tells
            you what to do about the ones worth chasing.
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
            Most small firms still find federal work the same way:
            <span className="text-emerald-400"> a tab in SAM.gov</span> and a
            spreadsheet.
          </h2>

          <p className="text-lg text-stone-400 leading-relaxed max-w-3xl mx-auto">
            The agencies post the notices. Big contractors have full capture
            teams parsing them. Everyone else gets the leftover hour at the
            end of the day and a generic keyword search. CapturePilot is what
            we built so we didn&apos;t have to keep doing that ourselves.
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
              What it actually <span className="text-emerald-400">does</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Same workflow a Lockheed capture team runs, scoped down to what
              a five-person firm can use without hiring three more analysts.
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
              How to <span className="text-emerald-400">use it</span>
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
                What you actually <span className="text-emerald-400">get</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Around 40K live federal opportunities, refreshed every night",
                  "Match scoring against your NAICS, set-asides, and capability statement",
                  "Incumbent tracking with the USASpending award trail",
                  "NAICS pulled from your website with GPT-4o, not a dropdown",
                  "Branded PDF reports you can hand to a capture meeting",
                  "Daily HOT-match email — opt out of WARM if you want quieter",
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
            Try It Free, See Plans on capturepilot.com
          </h2>
          <p className="text-lg text-stone-400 mb-4 leading-relaxed">
            Run the Quick Checker without signing up — it shows you matched
            federal opportunities in 60 seconds.
          </p>
          <p className="text-stone-500 mb-10">
            Full plans and current pricing live on capturepilot.com.
            Americurial retainer and Co-Pilot Coaching clients get a software
            tier included or discounted.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.capturepilot.com/check"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald"
            >
              Try Quick Checker (Free) <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.capturepilot.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2"
            >
              See CapturePilot Plans <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
