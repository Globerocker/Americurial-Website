import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Target,
  Award,
  FileText,
  CheckCircle2,
  Rocket,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard, Eyebrow } from "@/components/Interactive";

const TOOLS = [
  {
    icon: BookOpen,
    href: "/tools/first-million",
    tag: "PDF · 40 pages",
    title: "First $1M Federal Contract Playbook",
    desc: "The 40-page evergreen playbook — pipeline-building, NAICS selection, Sources Sought tactics, and the first-year timeline for veteran-owned firms.",
  },
  {
    icon: Target,
    href: "/tools/bid-no-bid",
    tag: "Interactive tool",
    title: "Bid / No-Bid Scorecard",
    desc: "Score any opportunity in 90 seconds across 10 factors. Veteran-preference weighting built in. Get a go/no-go recommendation with rationale.",
  },
  {
    icon: Award,
    href: "/tools/cert-path",
    tag: "Interactive wizard",
    title: "Veteran Cert Path Wizard",
    desc: "Answer 10 questions and we&apos;ll map your optimal SDVOSB / VOSB / HUBZone / 8(a) sequence — with timelines, costs, and state-level addons.",
  },
  {
    icon: FileText,
    href: "/tools/capability-pack",
    tag: "5 PDFs",
    title: "Capability Statement Template Pack",
    desc: "Five branch-ready capability statement templates — construction, IT services, professional services, healthcare, janitorial. Editable DOCX + Figma.",
  },
  {
    icon: CheckCircle2,
    href: "/tools/sam-checklist",
    tag: "PDF checklist",
    title: "SAM.gov Registration Checklist",
    desc: "18-step checklist for a first-pass SAM.gov registration that actually clears. Every attachment, every NAICS, every verification step.",
  },
  {
    icon: Rocket,
    href: "https://app.capturepilot.com/check",
    tag: "Live tool",
    title: "CapturePilot Quick Checker",
    desc: "Paste your website, see your federal opportunity matches in 60 seconds. No signup. Free forever.",
    external: true,
  },
];

export default function ToolsIndex() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="contour-circle w-[600px] h-[600px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Wrench className="w-3 h-3" />
            Free Tools & Downloads
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8 animate-fade-in-up-100">
            Get started <span className="gradient-text">without us.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 leading-relaxed animate-fade-in-up-200">
            Six free resources to move your federal contracting pipeline forward today. No
            login required. No sales call. Keep everything either way.
          </p>
        </div>
      </section>

      {/* ── Tools grid ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((t, i) => {
              const Inner = (
                <TiltCard max={5}>
                  <div className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 transition-all hover-lift h-full flex flex-col">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <t.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-stone-500 bg-white/5 px-2 py-1 rounded">
                        {t.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {t.title}
                    </h3>
                    <p
                      className="text-sm text-stone-400 leading-relaxed flex-1 mb-5"
                      dangerouslySetInnerHTML={{ __html: t.desc }}
                    />
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400">
                      Get it now <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </TiltCard>
              );
              return (
                <Reveal key={t.title} delay={i * 80}>
                  {t.external ? (
                    <a href={t.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                      {Inner}
                    </a>
                  ) : (
                    <Link href={t.href} className="block h-full">
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
      <section className="py-24 md:py-32 border-t border-white/5 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <Eyebrow align="center">Want the full agency treatment?</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-6">
            We run all of this <span className="gradient-text">for you.</span>
          </h2>
          <p className="text-stone-400 mb-10">
            The free tools are great. Our retainer clients get us running the entire capture
            playbook — with 5% success fee skin in the game and CapturePilot software thrown in.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all glow-emerald"
          >
            See Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
