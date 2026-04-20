import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Target,
  FileText,
  Users,
  DollarSign,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LeadMagnetForm, LandingHero } from "@/components/LeadMagnet";
import { Eyebrow } from "@/components/Interactive";

const CHAPTERS = [
  {
    n: "01",
    icon: Target,
    title: "Pick your wedge",
    desc: "How to pick 1–3 NAICS codes and one set-aside category that puts you in the top 10% of the competitive set — instead of competing with 5,000 firms.",
    pages: "Pages 1–8",
  },
  {
    n: "02",
    icon: Award,
    title: "Cert stacking strategy",
    desc: "The optimal sequence for SDVOSB → HUBZone → 8(a) layering, including what to file first and why timing matters more than most consultants admit.",
    pages: "Pages 9–14",
  },
  {
    n: "03",
    icon: FileText,
    title: "Capability statement that sells",
    desc: "The 6-section structure evaluators actually read, with annotated real examples. Avoid the 3 mistakes that get your statement tossed.",
    pages: "Pages 15–19",
  },
  {
    n: "04",
    icon: Users,
    title: "Relationships before RFPs",
    desc: "The 6-month pre-RFP playbook: agency small-business officers, APEX Accelerators, SBLO contacts at primes. Templates included.",
    pages: "Pages 20–25",
  },
  {
    n: "05",
    icon: TrendingUp,
    title: "Sources Sought = your unfair advantage",
    desc: "Why 80% of winners responded to Sources Sought. The response template that shapes RFPs in your favor — 6 months before the solicitation drops.",
    pages: "Pages 26–31",
  },
  {
    n: "06",
    icon: DollarSign,
    title: "Proposal writing that wins",
    desc: "Compliance matrix, win themes, pricing strategy, and color team reviews — even if you&apos;re a one-person shop without a proposal budget.",
    pages: "Pages 32–37",
  },
  {
    n: "07",
    icon: CheckCircle2,
    title: "Year-one pipeline building",
    desc: "Weekly, monthly, and quarterly rituals that compound. Replace guesswork with a repeatable capture motion in 90 days.",
    pages: "Pages 38–40",
  },
];

export default function FirstMillionPage() {
  return (
    <>
      <LandingHero
        tag="40-Page Playbook · PDF"
        title={
          <>
            Your first <span className="gradient-text">$1M</span> federal contract.
          </>
        }
        subtitle="A 40-page evergreen playbook for veteran-owned firms going from zero federal revenue to their first seven-figure contract — without burning $50K on consultants."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="mb-12">
            <LeadMagnetForm
              title="Download the 40-page playbook"
              filename="Americurial-First-Million-Playbook.pdf"
              bullets={[
                "7 chapters, 40 pages, written for 10–50 employee veteran-owned firms",
                "Templates: capability statement, Sources Sought response, teaming agreement",
                "Cert-stacking decision tree (SDVOSB + HUBZone + 8(a))",
                "90-day action plan to rebuild your pipeline from scratch",
              ]}
            />
          </Reveal>

          <Reveal className="text-center mb-12">
            <Eyebrow align="center">What&apos;s inside</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
              7 chapters. <span className="gradient-text">One path.</span>
            </h2>
          </Reveal>

          <div className="space-y-4">
            {CHAPTERS.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.n} delay={i * 60}>
                  <div className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 transition-all flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                          Chapter {c.n}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500 bg-white/5 px-2 py-0.5 rounded">
                          {c.pages}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{c.title}</h3>
                      <p
                        className="text-sm text-stone-400 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: c.desc }}
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-white/5 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <BookOpen className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
            Want us to <span className="gradient-text">run this for you?</span>
          </h2>
          <p className="text-stone-400 mb-8">
            The playbook is the theory. Our retainer clients get us running every chapter —
            actively — with the 5% success-fee alignment.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
          >
            See Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
