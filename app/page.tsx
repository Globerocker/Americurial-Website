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
} from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "SaaS Development",
    desc: "Full-stack product builds from zero to launch. We design, build, and ship subscription software with the infrastructure to scale.",
  },
  {
    icon: Globe,
    title: "Web & Digital Products",
    desc: "High-performance marketing sites, dashboards, and portals. Conversion-focused design meets bulletproof engineering.",
  },
  {
    icon: Shield,
    title: "GovTech Solutions",
    desc: "Federal-grade platforms for government contractors. Compliance-ready, data-rich, built to handle 40K+ data points.",
  },
  {
    icon: BarChart3,
    title: "AI & Data Platforms",
    desc: "Machine learning pipelines, intelligent matching, and AI-powered automation built into production-grade systems.",
  },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "We learn your business, market, and users. No assumptions." },
  { step: "02", title: "Architecture", desc: "We design the system — database, APIs, frontend, infra." },
  { step: "03", title: "Build Sprint", desc: "Rapid development in 2-week cycles. You see progress daily." },
  { step: "04", title: "Launch & Scale", desc: "Deploy to production, monitor, iterate. We stay in the fight." },
];

const STATS = [
  { value: "40K+", label: "Data points processed daily" },
  { value: "$700B", label: "Federal market we serve" },
  { value: "4.8/5", label: "Client satisfaction" },
  { value: "90 days", label: "Average time to MVP" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-emerald-500/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-emerald-500/[0.03]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full mb-8">
            <Shield className="w-3 h-3" />
            Veteran-Owned Digital Agency
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            We Build.
            <br />
            <span className="text-emerald-400">You Win.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Americurial is a veteran-owned digital agency building SaaS platforms,
            GovTech solutions, and AI-powered products. We don&apos;t just design
            websites &mdash; we engineer systems that generate revenue.
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
              href="/capturepilot"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2"
            >
              See CapturePilot <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/5 bg-stone-900/30">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">{stat.value}</p>
              <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">What We Build</span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Software That <span className="text-emerald-400">Scales</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              From concept to production. We handle architecture, design, engineering, deployment, and ongoing iteration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover:bg-stone-900/60">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <svc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CapturePilot Showcase */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-500/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">Flagship Product</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">CapturePilot</h2>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Our flagship SaaS platform matches small businesses with federal government contracts they can actually win. 40,000+ opportunities, AI-powered scoring, and a readiness assessment &mdash; all in one dashboard.
              </p>
              <ul className="space-y-3 mb-8">
                {["AI-powered opportunity matching", "Government readiness scoring (0-10)", "Competitor intelligence via USASpending", "Automated NAICS classification", "Premium PDF intelligence reports"].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {feat}
                  </li>
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
            </div>

            <div className="relative">
              <div className="bg-stone-900/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
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
                    <div key={i} className="bg-stone-950/60 border border-white/5 rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-white">{opp}</p>
                        <p className="text-xs text-stone-500 mt-0.5">Match Score: {95 - i * 5}%</p>
                      </div>
                      <div className={`text-[10px] font-bold px-2 py-1 rounded ${i === 0 ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"}`}>
                        {i === 0 ? "HOT" : "WARM"}
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

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">How We Work</span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              Zero to <span className="text-emerald-400">Deployed</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="bg-stone-900/40 border border-white/5 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-emerald-500/30 mb-4">{p.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-stone-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
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
        </div>
      </section>
    </>
  );
}
