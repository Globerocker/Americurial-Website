"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  CheckCircle2,
  Shield,
  Flag,
  Clock,
  DollarSign,
  MapPin,
  Building2,
  RefreshCw,
  Info,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Interactive";

type Answers = {
  vetStatus?: string;
  disabilityRating?: string;
  ownership?: string;
  revenue?: string;
  location?: string;
  womanOwned?: string;
  underserved?: string;
  timeframe?: string;
};

const QUESTIONS: {
  id: keyof Answers;
  question: string;
  options: { label: string; value: string }[];
  help?: string;
}[] = [
  {
    id: "vetStatus",
    question: "Are you a veteran of the U.S. Armed Forces?",
    options: [
      { label: "Yes, with an honorable or general discharge", value: "yes" },
      { label: "Yes, but under other conditions", value: "other" },
      { label: "No — I&apos;m a family member of a veteran", value: "family" },
      { label: "No — none of the above", value: "none" },
    ],
  },
  {
    id: "disabilityRating",
    question: "Do you have a VA-rated service-connected disability?",
    options: [
      { label: "Yes — VA-rated", value: "yes" },
      { label: "No", value: "no" },
      { label: "Pending / unsure", value: "pending" },
    ],
    help: "VA disability rating enables SDVOSB — the most valuable set-aside.",
  },
  {
    id: "ownership",
    question: "What % of your business do you own + control?",
    options: [
      { label: "100%", value: "100" },
      { label: "51–99%", value: "51-99" },
      { label: "Less than 51%", value: "under51" },
    ],
    help: "Most set-asides require 51%+ veteran ownership AND day-to-day control.",
  },
  {
    id: "revenue",
    question: "What&apos;s your annual revenue?",
    options: [
      { label: "Under $1M", value: "under1" },
      { label: "$1M – $10M", value: "1-10" },
      { label: "$10M – $25M", value: "10-25" },
      { label: "$25M+", value: "25plus" },
    ],
  },
  {
    id: "location",
    question: "Is your principal office in a HUBZone-designated area?",
    options: [
      { label: "Yes — confirmed via SBA HUBZone map", value: "yes" },
      { label: "Not sure", value: "unsure" },
      { label: "No", value: "no" },
    ],
    help: "Check via sba.gov/hubzone-map. Boundaries shift — re-verify annually.",
  },
  {
    id: "womanOwned",
    question: "Is the business majority-owned by a woman veteran?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    id: "underserved",
    question: "Does the owner qualify as socially & economically disadvantaged?",
    options: [
      { label: "Yes — qualifies for 8(a)", value: "yes" },
      { label: "No / not sure", value: "no" },
    ],
    help: "8(a) requires personal net worth < $850K, AGI < $400K, assets < $6.5M (approx). Certain groups presumed eligible.",
  },
  {
    id: "timeframe",
    question: "How fast do you need to be certified?",
    options: [
      { label: "ASAP — have an active opportunity", value: "urgent" },
      { label: "3–6 months", value: "medium" },
      { label: "Long-term strategy (6+ months)", value: "long" },
    ],
  },
];

type Cert = {
  name: string;
  priority: number;
  timeline: string;
  cost: string;
  whyFit: string;
  whatItUnlocks: string;
  icon: typeof Award;
  badge: string;
  badgeClass: string;
};

function recommend(a: Answers): Cert[] {
  const recs: Cert[] = [];

  if (a.vetStatus === "yes" && ["100", "51-99"].includes(a.ownership ?? "")) {
    if (a.disabilityRating === "yes") {
      recs.push({
        name: "SDVOSB — Service-Disabled Veteran-Owned Small Business",
        priority: 100,
        timeline: "60–90 days (VA SBA verification)",
        cost: "$0 (self-certification into SBA VetCert)",
        whyFit:
          "With a VA-rated disability + majority ownership + control, SDVOSB is your highest-leverage cert. The federal 3% SDVOSB spend target = $25B/year, often awarded via sole-source to $5M.",
        whatItUnlocks:
          "SDVOSB set-aside contracts · sole-source awards up to $5M (non-manufacturing) / $7M (manufacturing) · VA First preference under the Kingdomware doctrine.",
        icon: Shield,
        badge: "PRIORITY 1",
        badgeClass: "bg-emerald-500 text-stone-950",
      });
    } else if (a.disabilityRating === "pending") {
      recs.push({
        name: "VOSB first, then SDVOSB after VA rating",
        priority: 90,
        timeline: "VOSB: 30 days · SDVOSB: +60 days after VA rating",
        cost: "$0",
        whyFit:
          "While your VA disability is pending, VOSB gets you into the SBA VetCert system and unlocks VA contracting preferences. Upgrade path to SDVOSB the moment VA rates you.",
        whatItUnlocks:
          "VOSB: VA contracting preferences. Upgrade to SDVOSB later unlocks federal sole-source up to $5M.",
        icon: Shield,
        badge: "PRIORITY 1",
        badgeClass: "bg-emerald-500 text-stone-950",
      });
    } else {
      recs.push({
        name: "VOSB — Veteran-Owned Small Business",
        priority: 85,
        timeline: "30–60 days",
        cost: "$0",
        whyFit:
          "Veteran + majority ownership + control qualifies you for VOSB, giving VA contracting preference. Without a VA disability, SDVOSB isn&apos;t available — but VOSB + small-business cert is still powerful.",
        whatItUnlocks:
          "VA contracting preference on $30B+ annual VA spend · foundation for HUBZone / 8(a) layering.",
        icon: Flag,
        badge: "PRIORITY 1",
        badgeClass: "bg-emerald-500 text-stone-950",
      });
    }
  }

  if (a.location === "yes" && a.revenue !== "25plus") {
    recs.push({
      name: "HUBZone — Historically Underutilized Business Zone",
      priority: 70,
      timeline: "90–120 days (SBA processing)",
      cost: "$0",
      whyFit:
        "Your principal office is in a HUBZone area — this is one of the most valuable stackable certs because it carries a 10% price evaluation preference AND a federal 3% spend target.",
      whatItUnlocks:
        "HUBZone set-aside contracts · 10% price evaluation preference on full-and-open competitions · stacks on top of SDVOSB/VOSB.",
      icon: MapPin,
      badge: "STACKABLE",
      badgeClass: "bg-amber-500 text-stone-950",
    });
  }

  if (a.underserved === "yes" && a.revenue !== "25plus") {
    recs.push({
      name: "8(a) Business Development Program",
      priority: 80,
      timeline: "6–12 months (longest)",
      cost: "$0 (SBA program)",
      whyFit:
        "8(a) is a 9-year program with business development support + the highest sole-source ceilings in the federal system ($4.5M services, $7M manufacturing). Worth the paperwork if you qualify.",
      whatItUnlocks:
        "Sole-source contracts up to $4.5M/$7M · mentor-protégé program · dedicated SBA business-opportunity specialist · 9 years of ramp.",
      icon: Award,
      badge: "HIGHEST VALUE",
      badgeClass: "bg-emerald-500 text-stone-950",
    });
  }

  if (a.womanOwned === "yes") {
    recs.push({
      name: "WOSB / EDWOSB — Women-Owned / Economically Disadvantaged",
      priority: 65,
      timeline: "30–60 days (self-cert via SBA)",
      cost: "$0",
      whyFit:
        "Woman-veteran owners should absolutely add WOSB/EDWOSB — it&apos;s free, fast, and the federal 5% WOSB target = $35B+ annually. Stacks with SDVOSB.",
      whatItUnlocks:
        "WOSB + EDWOSB set-aside contracts · stacking advantage (SDVOSB + WOSB + HUBZone = triple-certed unicorn).",
      icon: Award,
      badge: "STACKABLE",
      badgeClass: "bg-amber-500 text-stone-950",
    });
  }

  if (a.revenue !== "25plus") {
    recs.push({
      name: "Small Business Self-Certification",
      priority: 50,
      timeline: "Immediate (SAM.gov size determination)",
      cost: "$0",
      whyFit:
        "Every cert above requires you to also qualify as &ldquo;small&rdquo; under SBA size standards for your NAICS. This is the foundation — nothing works without it.",
      whatItUnlocks:
        "Access to all small-business set-asides · required baseline for SDVOSB, VOSB, WOSB, 8(a), HUBZone.",
      icon: Building2,
      badge: "FOUNDATION",
      badgeClass: "bg-stone-700 text-stone-300",
    });
  }

  recs.sort((a, b) => b.priority - a.priority);
  return recs;
}

export default function CertPathPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const recs = useMemo(() => recommend(answers), [answers]);
  const complete = step >= QUESTIONS.length;

  function setAnswer(id: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setStep(QUESTIONS.length), 300);
    }
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  const q = QUESTIONS[step];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="contour-circle w-[600px] h-[600px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Award className="w-3 h-3" />
            Interactive Wizard · Free
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8 animate-fade-in-up-100">
            Veteran Cert Path{" "}
            <span className="gradient-text-amber">Wizard.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-200">
            Answer 8 questions. We&apos;ll map your optimal certification sequence — SDVOSB,
            VOSB, HUBZone, 8(a), WOSB — with timelines, costs, and what each one unlocks.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Progress */}
          {!complete && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold uppercase tracking-widest text-stone-400">
                  Question {step + 1} of {QUESTIONS.length}
                </span>
                <span className="font-bold text-amber-400 tabular-nums">
                  {Math.round(((step + 1) / QUESTIONS.length) * 100)}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-stone-900 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {!complete ? (
            <Reveal>
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8">
                <h2
                  className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2"
                  dangerouslySetInnerHTML={{ __html: q.question }}
                />
                {q.help && (
                  <p className="text-sm text-amber-300/90 mb-6 flex items-start gap-2">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{q.help}</span>
                  </p>
                )}

                <div className="space-y-2.5 mt-6">
                  {q.options.map((opt) => {
                    const selected = answers[q.id] === opt.value;
                    return (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => setAnswer(q.id, opt.value)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${
                          selected
                            ? "bg-amber-500/10 border-amber-500/40 text-white"
                            : "bg-stone-950/40 border-white/5 hover:border-amber-500/20 hover:bg-stone-950/60 text-stone-300"
                        }`}
                      >
                        <span
                          className="text-sm font-medium"
                          dangerouslySetInnerHTML={{ __html: opt.label }}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous
                  </button>
                  <span className="text-xs text-stone-500">
                    {step + 1} / {QUESTIONS.length}
                  </span>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-500/10 via-stone-900/60 to-emerald-500/10 border border-amber-500/30 rounded-3xl p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <div className="relative">
                    <Eyebrow>Your Recommendation</Eyebrow>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
                      {recs.length > 0 ? (
                        <>
                          Start with <span className="gradient-text-amber">{recs[0].name.split(" — ")[0]}</span>
                        </>
                      ) : (
                        "Let&apos;s talk."
                      )}
                    </h2>
                    <p className="text-stone-300">
                      {recs.length > 0
                        ? `Based on your answers, here's the optimal sequence. ${recs.length} cert${recs.length > 1 ? "s" : ""} recommended, in priority order.`
                        : "Your answers don&apos;t map cleanly to a standard veteran cert path. Let&apos;s jump on a call — we can often find options you didn&apos;t know existed."}
                    </p>
                  </div>
                </div>

                {recs.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.name}
                      className="bg-stone-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-all"
                    >
                      <div className="flex items-start justify-between mb-5 gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500 mb-1">
                              Step {i + 1}
                            </p>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                              {c.name}
                            </h3>
                          </div>
                        </div>
                        <span
                          className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded flex-shrink-0 ${c.badgeClass}`}
                        >
                          {c.badge}
                        </span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 mb-5">
                        <div className="bg-stone-950/50 border border-white/5 rounded-lg p-3 flex items-start gap-2.5">
                          <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                              Timeline
                            </p>
                            <p className="text-sm text-white">{c.timeline}</p>
                          </div>
                        </div>
                        <div className="bg-stone-950/50 border border-white/5 rounded-lg p-3 flex items-start gap-2.5">
                          <DollarSign className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                              Direct cost
                            </p>
                            <p className="text-sm text-white">{c.cost}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                          Why it fits
                        </p>
                        <p
                          className="text-sm text-stone-300 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: c.whyFit }}
                        />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                          What it unlocks
                        </p>
                        <p
                          className="text-sm text-stone-300 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: c.whatItUnlocks }}
                        />
                      </div>
                    </div>
                  );
                })}

                <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 text-center">
                  <p className="text-sm text-stone-400 mb-6 max-w-lg mx-auto leading-relaxed">
                    Want us to actually drive these applications through? Our{" "}
                    <strong className="text-white">Certification Application Support</strong>{" "}
                    package walks every form with you, drafts the supporting narratives, and
                    ships the package.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={reset}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" /> Start over
                    </button>
                    <Link
                      href="/pricing#productized"
                      className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2"
                    >
                      Cert Application Support — $3,500 <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Explainer ── */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-gradient-to-b from-stone-950 to-emerald-950/10">
        <div className="max-w-4xl mx-auto px-6">
          <Eyebrow align="center">Behind the recommendation</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-10 text-center">
            The <span className="gradient-text">rules</span> we use.
          </h2>

          <div className="space-y-4">
            {[
              {
                title: "SDVOSB requires VA disability rating",
                desc: "No rating = no SDVOSB. But VOSB is still available to veterans without a disability rating and gives VA contracting preference.",
              },
              {
                title: "8(a) is the highest-ceiling cert but the longest to get",
                desc: "6–12 months processing and requires personal financial disclosures. Worth it for the sole-source ceilings ($4.5M–$7M).",
              },
              {
                title: "HUBZone is location-dependent and stackable",
                desc: "If your principal office is in a HUBZone area, stack it — 10% price evaluation preference adds to SDVOSB/VOSB power.",
              },
              {
                title: "Small Business status is the baseline",
                desc: "Every set-aside requires you to also qualify as &ldquo;small&rdquo; under the SBA size standard for your NAICS. Check sba.gov/size-standards.",
              },
              {
                title: "WOSB/EDWOSB stacks with SDVOSB",
                desc: "A woman veteran with a VA disability rating can triple-stack: SDVOSB + WOSB + HUBZone. Extremely rare, extremely powerful.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-stone-900/40 border border-white/5 rounded-xl p-5 flex items-start gap-4"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold mb-1">{item.title}</p>
                  <p
                    className="text-sm text-stone-400 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
