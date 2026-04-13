import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Target,
  Rocket,
  Users,
  Crosshair,
  Heart,
  Zap,
} from "lucide-react";

const VALUES = [
  {
    icon: Crosshair,
    title: "Execution Over Talk",
    desc: "We don't do slide decks about what we could build. We build it. Every engagement starts with a clear scope and ends with deployed software.",
  },
  {
    icon: Shield,
    title: "Veteran Values",
    desc: "Integrity, accountability, and mission focus aren't buzzwords here. They're the standards we held in uniform, and they carry into every line of code we ship.",
  },
  {
    icon: Rocket,
    title: "Ship Fast, Iterate",
    desc: "The best software is built in tight cycles. We push to production early, gather real feedback, and improve relentlessly. Perfection is the enemy of progress.",
  },
  {
    icon: Heart,
    title: "Client-First",
    desc: "Your success is our success. We treat every client's product like our own — because our reputation depends on what we deliver, not what we promise.",
  },
];

export default function AboutPage() {
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
            <Shield className="w-3 h-3" />
            About Americurial
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            Built by Veterans.
            <br />
            <span className="text-emerald-400">Driven by Mission.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            We bring military discipline to software engineering &mdash;
            building products that are on time, on budget, and built to last.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-500/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                From Service to <span className="text-emerald-400">Software</span>
              </h2>
              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  After leaving the military, Andre Schuler saw the same
                  problem everywhere: small businesses and government
                  contractors were getting outpaced by companies with
                  bigger budgets and better technology. The tools they
                  needed existed &mdash; but they were priced for
                  enterprises and built for people with engineering teams.
                </p>
                <p>
                  Americurial was founded to change that. The mission was
                  simple: bring military-grade discipline to software
                  engineering and build technology that gives the
                  underdog an edge.
                </p>
                <p>
                  The first product was{" "}
                  <Link
                    href="/capturepilot"
                    className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    CapturePilot
                  </Link>{" "}
                  &mdash; built because veteran-owned small businesses
                  deserved enterprise-grade contracting intelligence
                  without the enterprise price tag. It processes over
                  40,000 federal opportunities and delivers AI-powered
                  matching, competitor analysis, and readiness scoring
                  &mdash; all from a single dashboard.
                </p>
                <p>
                  Today, Americurial builds SaaS platforms, GovTech
                  solutions, and AI-powered products for clients who need
                  to move fast and ship real software. Every engagement
                  is run like a mission: clear objectives, tight
                  timelines, and zero wasted effort.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Americurial LLC</p>
                      <p className="text-stone-500 text-sm">
                        Veteran-Owned Small Business
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-2xl font-black text-emerald-400">2024</p>
                      <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mt-1">
                        Founded
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-emerald-400">40K+</p>
                      <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mt-1">
                        Opportunities Tracked
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-emerald-400">$700B</p>
                      <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mt-1">
                        Federal Market Served
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-emerald-400">90 Days</p>
                      <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mt-1">
                        Avg. Time to MVP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-emerald-500/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                What We Stand For
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Our <span className="text-emerald-400">Values</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              These aren&apos;t aspirational statements. They&apos;re the operating
              principles behind every decision we make and every line of code
              we write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover:bg-stone-900/60"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                The Team
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Small Team. <span className="text-emerald-400">Senior Engineers.</span>
            </h2>
            <div className="space-y-4 text-stone-400 leading-relaxed">
              <p>
                We keep the team lean on purpose. No project managers who
                don&apos;t code. No designers who don&apos;t ship. Every
                person on an Americurial engagement writes production code
                and owns their deliverables.
              </p>
              <p>
                When you work with us, you&apos;re not getting a rotating
                cast of junior developers learning on your dime. You&apos;re
                getting senior engineers who have shipped real products,
                handled real scale, and solved real problems.
              </p>
            </div>
            <div className="mt-12 inline-flex items-center gap-4">
              <div className="flex -space-x-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-stone-800 border-2 border-stone-950 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 text-emerald-500" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-stone-400">
                Every engineer ships production code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            Book a call and tell us what you&apos;re building. No pitch deck
            required &mdash; just a conversation about what you need and how
            fast we can deliver.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://meetings-na2.hubspot.com/americurial/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald"
            >
              Book a Call <ArrowRight className="w-4 h-4" />
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
