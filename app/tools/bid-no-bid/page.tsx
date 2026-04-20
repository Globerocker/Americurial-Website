"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Target,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Info,
  RefreshCw,
  Download,
  Award,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Interactive";

type Option = { label: string; points: number };
type Question = {
  id: string;
  category: string;
  question: string;
  weight: number;
  help?: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "naics",
    category: "Fit",
    question: "NAICS match quality",
    weight: 12,
    help: "Is this opportunity&apos;s primary NAICS in your registered codes?",
    options: [
      { label: "Primary NAICS (exact)", points: 12 },
      { label: "Secondary / adjacent NAICS", points: 8 },
      { label: "Related but not registered", points: 3 },
      { label: "Outside my NAICS footprint", points: 0 },
    ],
  },
  {
    id: "setAside",
    category: "Fit",
    question: "Set-aside eligibility",
    weight: 15,
    help: "Do you qualify for the set-aside this is scoped to?",
    options: [
      { label: "SDVOSB set-aside & I&apos;m SDVOSB-certified", points: 15 },
      { label: "Small business set-aside & I qualify", points: 12 },
      { label: "Full-and-open (no set-aside)", points: 6 },
      { label: "Set-aside I don&apos;t qualify for", points: 0 },
    ],
  },
  {
    id: "pastPerf",
    category: "Proof",
    question: "Past performance on similar work",
    weight: 12,
    help: "Evaluators look for 3+ similar-scope, similar-size references.",
    options: [
      { label: "3+ strong, same-agency references", points: 12 },
      { label: "3+ similar references (different agency)", points: 9 },
      { label: "1–2 similar references", points: 5 },
      { label: "No directly relevant past performance", points: 0 },
    ],
  },
  {
    id: "incumbent",
    category: "Competition",
    question: "Incumbent displacement probability",
    weight: 10,
    help: "Incumbents win recompetes ~70–80% of the time by default.",
    options: [
      { label: "No incumbent (new requirement)", points: 10 },
      { label: "Incumbent is weak / poor CPARS", points: 8 },
      { label: "Incumbent is neutral", points: 4 },
      { label: "Strong incumbent, no discontent", points: 1 },
    ],
  },
  {
    id: "relationship",
    category: "Competition",
    question: "Agency/customer relationship",
    weight: 10,
    help: "Have you already met the program office or contracting officer?",
    options: [
      { label: "Met, ongoing dialog, shaped the RFP", points: 10 },
      { label: "Met once or twice", points: 6 },
      { label: "Responded to Sources Sought only", points: 3 },
      { label: "Cold — no prior engagement", points: 0 },
    ],
  },
  {
    id: "time",
    category: "Readiness",
    question: "Time to submit",
    weight: 8,
    help: "Under 2 weeks on a complex proposal is usually a no-bid.",
    options: [
      { label: "6+ weeks", points: 8 },
      { label: "3–6 weeks", points: 6 },
      { label: "2–3 weeks", points: 3 },
      { label: "Under 2 weeks", points: 0 },
    ],
  },
  {
    id: "capture",
    category: "Readiness",
    question: "Capture work completed",
    weight: 8,
    help: "Have you done pricing research, competitor analysis, teaming?",
    options: [
      { label: "Full capture plan in place", points: 8 },
      { label: "Partial capture (price + competitors)", points: 5 },
      { label: "Some intel gathered", points: 2 },
      { label: "No capture work done", points: 0 },
    ],
  },
  {
    id: "pricePos",
    category: "Pricing",
    question: "Pricing position vs. market",
    weight: 8,
    help: "Based on past awards at this agency for this NAICS.",
    options: [
      { label: "Confident I&apos;m below 50th percentile", points: 8 },
      { label: "Competitive (50th–75th)", points: 5 },
      { label: "Higher than average", points: 2 },
      { label: "Unknown — no price-to-win analysis", points: 1 },
    ],
  },
  {
    id: "teaming",
    category: "Capability",
    question: "Teaming / capacity coverage",
    weight: 8,
    help: "Do you have partners or staff to deliver the full scope?",
    options: [
      { label: "Prime solo, full capacity", points: 8 },
      { label: "Prime with 1–2 strong subs confirmed", points: 8 },
      { label: "Teaming partners identified not confirmed", points: 4 },
      { label: "Capacity gap unresolved", points: 0 },
    ],
  },
  {
    id: "strategic",
    category: "Strategy",
    question: "Strategic value even if we lose",
    weight: 9,
    help: "Does bidding move you forward (past perf, relationships) even on a loss?",
    options: [
      { label: "High — gateway to a $50M+ program", points: 9 },
      { label: "Medium — new agency entry + past perf", points: 6 },
      { label: "Low — one-shot opportunity", points: 3 },
      { label: "None — cost of bidding > strategic value", points: 0 },
    ],
  },
];

const TOTAL_POINTS = QUESTIONS.reduce((s, q) => s + q.weight, 0);

function verdict(score: number): {
  label: string;
  color: string;
  bg: string;
  border: string;
  icon: typeof CheckCircle2;
  reco: string;
} {
  if (score >= 75)
    return {
      label: "Strong Bid",
      color: "text-emerald-300",
      bg: "bg-emerald-500/15",
      border: "border-emerald-500/40",
      icon: CheckCircle2,
      reco: "Move to proposal. Your fit, proof, and positioning are aligned. Allocate full capture + proposal team and push to submit.",
    };
  if (score >= 55)
    return {
      label: "Conditional Bid",
      color: "text-amber-300",
      bg: "bg-amber-500/15",
      border: "border-amber-500/40",
      icon: AlertTriangle,
      reco: "Bid only if you can close the gaps below in the next 2 weeks. If not, defer to the recompete and use this cycle to build past performance.",
    };
  return {
    label: "No-Bid",
    color: "text-red-300",
    bg: "bg-red-500/15",
    border: "border-red-500/40",
    icon: XCircle,
    reco: "Walk away — or submit a short courtesy response to maintain agency relationships without burning proposal team time. Re-target into next fiscal year.",
  };
}

export default function BidNoBidPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [current, setCurrent] = useState(0);

  const score = useMemo(
    () => Object.values(answers).reduce((s, p) => s + p, 0),
    [answers]
  );
  const percent = Math.round((score / TOTAL_POINTS) * 100);
  const answered = Object.keys(answers).length;
  const complete = answered === QUESTIONS.length;
  const v = verdict(percent);
  const VIcon = v.icon;

  const gaps = useMemo(() => {
    return QUESTIONS.filter((q) => {
      const pts = answers[q.id] ?? 0;
      return pts < q.weight * 0.5;
    });
  }, [answers]);

  function setAnswer(qId: string, pts: number) {
    setAnswers((prev) => ({ ...prev, [qId]: pts }));
    // auto-advance
    const idx = QUESTIONS.findIndex((q) => q.id === qId);
    if (idx < QUESTIONS.length - 1) {
      setTimeout(() => setCurrent(idx + 1), 300);
    }
  }

  function reset() {
    setAnswers({});
    setCurrent(0);
  }

  const q = QUESTIONS[current];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="contour-circle w-[600px] h-[600px]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Target className="w-3 h-3" />
            Interactive tool · Free
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8 animate-fade-in-up-100">
            Bid / No-Bid{" "}
            <span className="gradient-text">Scorecard.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-200">
            Score any federal opportunity in 90 seconds across 10 factors. Weighted by the
            criteria experienced capture teams actually use — including veteran-preference
            leverage.
          </p>
        </div>
      </section>

      {/* ── Tool ── */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold uppercase tracking-widest text-stone-400">
                Progress — {answered} / {QUESTIONS.length}
              </span>
              <span className="font-bold text-emerald-400 tabular-nums">
                Score {score} / {TOTAL_POINTS}
              </span>
            </div>
            <div className="h-2 rounded-full bg-stone-900 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 transition-all duration-500"
                style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: current question */}
            <div className="lg:col-span-2">
              {!complete ? (
                <Reveal>
                  <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                        {q.category}
                      </span>
                      <span className="text-xs text-stone-500">
                        Question {current + 1} of {QUESTIONS.length} · Weight: {q.weight}
                      </span>
                    </div>

                    <h2
                      className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2"
                      dangerouslySetInnerHTML={{ __html: q.question }}
                    />
                    {q.help && (
                      <p
                        className="text-sm text-stone-400 mb-6 flex items-start gap-2"
                        dangerouslySetInnerHTML={{
                          __html: `<span class="text-emerald-400 font-bold">Note:</span> ${q.help}`,
                        }}
                      />
                    )}

                    <div className="space-y-2.5">
                      {q.options.map((opt, i) => {
                        const selected = answers[q.id] === opt.points;
                        return (
                          <button
                            type="button"
                            key={`${q.id}-${i}`}
                            onClick={() => setAnswer(q.id, opt.points)}
                            className={`w-full text-left flex items-center justify-between p-4 rounded-xl border transition-all ${
                              selected
                                ? "bg-emerald-500/10 border-emerald-500/40"
                                : "bg-stone-950/40 border-white/5 hover:border-emerald-500/20 hover:bg-stone-950/60"
                            }`}
                          >
                            <span
                              className={`text-sm ${
                                selected ? "text-white font-bold" : "text-stone-300"
                              }`}
                              dangerouslySetInnerHTML={{ __html: opt.label }}
                            />
                            <span
                              className={`text-xs font-bold tabular-nums px-2 py-1 rounded ${
                                selected
                                  ? "bg-emerald-500/20 text-emerald-300"
                                  : "bg-white/5 text-stone-500"
                              }`}
                            >
                              +{opt.points}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                      <button
                        type="button"
                        onClick={() => setCurrent(Math.max(0, current - 1))}
                        disabled={current === 0}
                        className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        ← Previous
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrent(Math.min(QUESTIONS.length - 1, current + 1))}
                        disabled={current === QUESTIONS.length - 1}
                        className="text-xs font-bold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        Skip →
                      </button>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <Reveal>
                  <div
                    className={`${v.bg} ${v.border} border-2 rounded-3xl p-8 md:p-10 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <VIcon className={`w-10 h-10 ${v.color}`} />
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">
                            Recommendation
                          </p>
                          <p className={`text-3xl font-black tracking-tight ${v.color}`}>
                            {v.label}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-6xl font-black text-white tabular-nums">
                          {percent}%
                        </span>
                        <span className="text-stone-400 text-sm">
                          ({score} / {TOTAL_POINTS} points)
                        </span>
                      </div>

                      <p className="text-stone-200 leading-relaxed mb-6">{v.reco}</p>

                      {gaps.length > 0 && (
                        <div className="bg-stone-950/50 border border-white/10 rounded-xl p-5 mb-6">
                          <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            Gaps to close
                          </p>
                          <ul className="space-y-1.5">
                            {gaps.map((g) => (
                              <li
                                key={g.id}
                                className="text-sm text-stone-300 flex items-start gap-2"
                              >
                                <span className="text-amber-400 font-bold">•</span>
                                <span dangerouslySetInnerHTML={{ __html: g.question }} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="button"
                          onClick={reset}
                          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
                        >
                          <RefreshCw className="w-4 h-4" /> Score another opp
                        </button>
                        <a
                          href="https://meetings-na2.hubspot.com/americurial/intro-call"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
                        >
                          Get help with this bid <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Right: question nav + running score */}
            <div className="space-y-4">
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-4">
                  Running Score
                </p>
                <div className="text-5xl font-black gradient-text tabular-nums mb-2">
                  {percent}%
                </div>
                <p className="text-xs text-stone-500">
                  {score} of {TOTAL_POINTS} weighted points
                </p>
                <div className="h-1.5 rounded-full bg-stone-950 overflow-hidden mt-3">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>

              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-4">
                  Jump to
                </p>
                <ul className="space-y-1">
                  {QUESTIONS.map((qq, i) => {
                    const isCurrent = i === current;
                    const isAnswered = qq.id in answers;
                    return (
                      <li key={qq.id}>
                        <button
                          type="button"
                          onClick={() => setCurrent(i)}
                          className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                            isCurrent
                              ? "bg-emerald-500/10 text-emerald-300 font-bold"
                              : "text-stone-400 hover:bg-white/5 hover:text-stone-200"
                          }`}
                        >
                          <span className="truncate">
                            {i + 1}. {qq.question}
                          </span>
                          {isAnswered && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 ml-2" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-amber-400" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-300">
                    Veteran bonus
                  </p>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  If you&apos;re SDVOSB-verified, questions 2, 3, and 5 carry additional weight
                  the government will literally bake into evaluation criteria. Factor that when
                  deciding close calls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explainer ── */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-gradient-to-b from-stone-950 to-emerald-950/10">
        <div className="max-w-4xl mx-auto px-6">
          <Eyebrow align="center">How the scorecard works</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-10 text-center">
            The <span className="gradient-text">10 factors</span> that decide most federal bids.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Fit (27 pts)",
                desc: "NAICS match + set-aside eligibility. If you fail these two, everything else is moot.",
              },
              {
                title: "Proof (12 pts)",
                desc: "Past performance scoring — what evaluators will find when they read your references.",
              },
              {
                title: "Competition (20 pts)",
                desc: "Incumbent strength + how much relationship equity you&apos;ve built with the program office.",
              },
              {
                title: "Readiness (16 pts)",
                desc: "Time-to-submit + capture work completed. Rushing a complex proposal is a known loser.",
              },
              {
                title: "Pricing (8 pts)",
                desc: "Where you sit vs. the agency&apos;s historical price band for this NAICS.",
              },
              {
                title: "Capability (8 pts)",
                desc: "Teaming and staffing coverage. Can you actually deliver if you win?",
              },
              {
                title: "Strategy (9 pts)",
                desc: "Even on a loss — does this bid move you forward? Past performance, entry to a new agency, etc.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-stone-900/40 border border-white/5 rounded-2xl p-6"
              >
                <p className="text-sm font-bold text-emerald-400 mb-2">{b.title}</p>
                <p
                  className="text-sm text-stone-400 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: b.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <TrendingUp className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-6">
            Want us to run this on your whole pipeline?
          </h2>
          <p className="text-stone-400 mb-8 text-lg">
            Retainer clients get this scoring run automatically, every week, against their
            entire opportunity feed — inside CapturePilot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
            >
              See Pricing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
            >
              More Free Tools
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
