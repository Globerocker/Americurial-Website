"use client";

import { useState } from "react";
import {
  Sparkles,
  Copy,
  Check,
  ChevronRight,
  Loader2,
  Link,
  Hash,
  Target,
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Megaphone,
} from "lucide-react";

const CATEGORIES = [
  { value: "LinkedIn Company Page", label: "LinkedIn Company Page", icon: Link },
  { value: "LinkedIn Personal", label: "LinkedIn Personal", icon: Link },
  { value: "Twitter/X", label: "Twitter/X", icon: Hash },
];

const GOALS = [
  { value: "Informative", label: "Informative", icon: Lightbulb },
  { value: "Engagement", label: "Engagement", icon: MessageSquare },
  { value: "Lead Generation", label: "Lead Generation", icon: TrendingUp },
  { value: "Thought Leadership", label: "Thought Leadership", icon: Megaphone },
];

export default function SocialPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [context, setContext] = useState("");
  const [category, setCategory] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    headline: string;
    content: string;
  } | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  async function handleGenerate() {
    if (!context.trim() || !category || !goal) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/social/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ context, category, goal }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Generation failed");
      }

      const data = await res.json();
      setResult(data);
      setStep(2);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy(text: string, field: string) {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  }

  function handleReset() {
    setStep(1);
    setResult(null);
    setContext("");
    setCategory("");
    setGoal("");
    setError("");
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-3 h-3" />
            Internal Tool
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.9] mb-4">
            Social Media <span className="text-emerald-400">Generator</span>
          </h1>

          <p className="text-stone-400 max-w-xl mx-auto">
            Generate on-brand social content for Americurial. AI-powered,
            brand-aligned, ready to post.
          </p>
        </div>
      </section>

      {/* Step Indicator */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => step === 2 && setStep(1)}
              className={`flex items-center gap-3 px-5 py-3 rounded-full text-sm font-bold transition-all ${
                step === 1
                  ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                  : "bg-stone-900/40 border border-white/5 text-stone-500 hover:text-stone-300 hover:border-white/10"
              }`}
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                  step === 1
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-stone-800 text-stone-500"
                }`}
              >
                01
              </span>
              Blueprint
            </button>

            <ChevronRight className="w-4 h-4 text-stone-700" />

            <div
              className={`flex items-center gap-3 px-5 py-3 rounded-full text-sm font-bold transition-all ${
                step === 2
                  ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                  : "bg-stone-900/40 border border-white/5 text-stone-500"
              }`}
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                  step === 2
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-stone-800 text-stone-500"
                }`}
              >
                02
              </span>
              Execution
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          {step === 1 && (
            <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-emerald-500/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                  Define Your Post
                </span>
              </div>

              <div className="space-y-8">
                {/* Context */}
                <div>
                  <label
                    htmlFor="context"
                    className="block text-sm font-bold text-stone-300 mb-2"
                  >
                    Context
                  </label>
                  <p className="text-xs text-stone-500 mb-3">
                    What is this post about? Describe the topic, angle, or news.
                  </p>
                  <textarea
                    id="context"
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    rows={4}
                    placeholder="e.g., We just launched CapturePilot's new AI-powered competitor analysis feature that helps small businesses identify who they're bidding against on federal contracts..."
                    className="w-full bg-stone-950/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none text-sm"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-bold text-stone-300 mb-2">
                    Category
                  </label>
                  <p className="text-xs text-stone-500 mb-3">
                    Which platform is this for?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setCategory(cat.value)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all text-left ${
                          category === cat.value
                            ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                            : "bg-stone-950/60 border border-white/10 text-stone-400 hover:border-white/20 hover:text-stone-300"
                        }`}
                      >
                        <cat.icon className="w-4 h-4 flex-shrink-0" />
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Goal */}
                <div>
                  <label className="block text-sm font-bold text-stone-300 mb-2">
                    Goal
                  </label>
                  <p className="text-xs text-stone-500 mb-3">
                    What should this post accomplish?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {GOALS.map((g) => (
                      <button
                        key={g.value}
                        onClick={() => setGoal(g.value)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all text-left ${
                          goal === g.value
                            ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                            : "bg-stone-950/60 border border-white/10 text-stone-400 hover:border-white/20 hover:text-stone-300"
                        }`}
                      >
                        <g.icon className="w-4 h-4 flex-shrink-0" />
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!context.trim() || !category || !goal || loading}
                  className={`w-full font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 ${
                    !context.trim() || !category || !goal || loading
                      ? "bg-stone-800 text-stone-500 cursor-not-allowed"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white glow-emerald"
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate Post
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 2 && result && (
            <div className="space-y-6">
              {/* Headline */}
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 md:p-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-emerald-500/40" />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                      Headline
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(result.headline, "headline")}
                    className="flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-emerald-400 transition-colors bg-stone-950/60 border border-white/10 rounded-lg px-3 py-1.5"
                  >
                    {copiedField === "headline" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                  {result.headline}
                </h2>
              </div>

              {/* Content */}
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 md:p-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-emerald-500/40" />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                      Post Content
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(result.content, "content")}
                    className="flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-emerald-400 transition-colors bg-stone-950/60 border border-white/10 rounded-lg px-3 py-1.5"
                  >
                    {copiedField === "content" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Post Preview Card */}
                <div className="bg-stone-950/60 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <Target className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">
                        Americurial LLC
                      </p>
                      <p className="text-xs text-stone-500">
                        {category}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-stone-300 leading-relaxed whitespace-pre-line">
                    {result.content}
                  </div>
                </div>
              </div>

              {/* Meta */}
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
                  <span className="bg-stone-950/60 border border-white/10 rounded-lg px-3 py-1.5 font-bold">
                    {category}
                  </span>
                  <span className="bg-stone-950/60 border border-white/10 rounded-lg px-3 py-1.5 font-bold">
                    {goal}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleReset}
                  className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors text-center"
                >
                  Start Over
                </button>
                <button
                  onClick={() => {
                    setStep(1);
                    setResult(null);
                    setError("");
                  }}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all glow-emerald flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Generate Another
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
