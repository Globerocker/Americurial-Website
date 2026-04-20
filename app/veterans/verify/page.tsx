"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  ShieldCheck,
  Upload,
  CheckCircle2,
  Lock,
  FileText,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Interactive";

type Step = "info" | "upload" | "done";

const ACCEPTED = [
  "DD-214 (Member Copy 4) — most common",
  "VA Benefits Summary Letter",
  "Veteran ID Card (VIC) — photo front + back",
  "Service Verification Letter from DoD / Bundeswehr / CAF",
  "SDVOSB / VOSB certification letter (if already certified)",
];

export default function VerifyPage() {
  const [step, setStep] = useState<Step>("info");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [years, setYears] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [couponCopied, setCouponCopied] = useState(false);
  const [couponCode] = useState("VETERAN20");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setSubmitting(true);
    // Simulated submission — wire to real API endpoint when backend exists
    setTimeout(() => {
      setSubmitting(false);
      setStep("done");
    }, 1200);
  }

  function copyCoupon() {
    navigator.clipboard.writeText(couponCode);
    setCouponCopied(true);
    setTimeout(() => setCouponCopied(false), 2000);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="contour-circle w-[600px] h-[600px]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Award className="w-3 h-3" />
            Veteran Verification
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8 animate-fade-in-up-100">
            Claim your <span className="gradient-text-amber">20% lifetime</span> discount.
          </h1>

          <p className="text-lg md:text-xl text-stone-400 leading-relaxed animate-fade-in-up-200 mb-8">
            Verified once. Applied forever. Across every retainer, every productized service,
            and every CapturePilot software plan.
          </p>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-2 animate-fade-in-up-300">
            {(["info", "upload", "done"] as Step[]).map((s, i) => {
              const isActive = step === s;
              const isDone =
                (s === "info" && step !== "info") ||
                (s === "upload" && step === "done");
              return (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold tabular-nums transition-all ${
                      isDone
                        ? "bg-emerald-500 border-emerald-500 text-stone-950"
                        : isActive
                        ? "bg-amber-500/20 border-amber-500 text-amber-300"
                        : "bg-stone-900 border-white/10 text-stone-500"
                    }`}
                  >
                    {isDone ? <Check className="w-3.5 h-3.5" /> : i + 1}
                  </div>
                  {i < 2 && (
                    <div
                      className={`w-8 h-px ${
                        isDone ? "bg-emerald-500" : "bg-white/10"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main form / flow ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          {step === "info" && (
            <Reveal>
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 md:p-10">
                <Eyebrow>Step 1 — your details</Eyebrow>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-6">
                  Tell us who you are.
                </h2>

                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStep("upload");
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-stone-950/60 border border-white/10 focus:border-emerald-500/50 focus:outline-none rounded-xl px-4 py-3 text-white text-sm"
                        placeholder="Rank + Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-stone-950/60 border border-white/10 focus:border-emerald-500/50 focus:outline-none rounded-xl px-4 py-3 text-white text-sm"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                        Branch / Force
                      </label>
                      <select
                        required
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full bg-stone-950/60 border border-white/10 focus:border-emerald-500/50 focus:outline-none rounded-xl px-4 py-3 text-white text-sm"
                      >
                        <option value="">Select...</option>
                        <option>U.S. Army</option>
                        <option>U.S. Navy</option>
                        <option>U.S. Marine Corps</option>
                        <option>U.S. Air Force</option>
                        <option>U.S. Space Force</option>
                        <option>U.S. Coast Guard</option>
                        <option>Canadian Armed Forces</option>
                        <option>Bundeswehr</option>
                        <option>Other Allied</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                        Years of Service
                      </label>
                      <input
                        required
                        type="text"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        className="w-full bg-stone-950/60 border border-white/10 focus:border-emerald-500/50 focus:outline-none rounded-xl px-4 py-3 text-white text-sm"
                        placeholder="e.g. 2008–2014"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm px-6 py-4 rounded-full transition-all flex items-center justify-center gap-2"
                  >
                    Continue to Upload <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-stone-500 text-center flex items-center justify-center gap-1.5">
                    <Lock className="w-3 h-3" />
                    We use this only to verify service and to apply your lifetime discount.
                  </p>
                </form>
              </div>
            </Reveal>
          )}

          {step === "upload" && (
            <Reveal>
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 md:p-10">
                <Eyebrow>Step 2 — proof of service</Eyebrow>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-6">
                  Upload one verification document.
                </h2>

                <div className="bg-stone-950/60 border border-amber-500/20 rounded-xl p-5 mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-3 flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5" />
                    Accepted documents
                  </p>
                  <ul className="space-y-1.5">
                    {ACCEPTED.map((doc) => (
                      <li
                        key={doc}
                        className="flex items-start gap-2 text-sm text-stone-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                  <label className="block cursor-pointer">
                    <div className="border-2 border-dashed border-white/10 hover:border-emerald-500/40 rounded-2xl p-10 text-center transition-all bg-stone-950/40">
                      <Upload className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                      <p className="text-white font-bold mb-1">
                        {file ? file.name : "Click to select file"}
                      </p>
                      <p className="text-xs text-stone-500">
                        PDF, JPG, PNG · Max 10 MB · Encrypted in transit
                      </p>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                        className="hidden"
                      />
                    </div>
                  </label>

                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 flex gap-3">
                    <Lock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-300 leading-relaxed">
                      <strong className="text-white">Your document is deleted after verification.</strong>{" "}
                      We review, confirm service, flag your account for the veteran discount,
                      and delete the file. We never store DoD documents long-term.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setStep("info")}
                      className="sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 py-4 rounded-full transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!file || submitting}
                      className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:bg-stone-800 disabled:text-stone-500 disabled:cursor-not-allowed text-stone-950 font-bold text-sm px-6 py-4 rounded-full transition-all flex items-center justify-center gap-2"
                    >
                      {submitting ? "Submitting..." : "Submit for Verification"}
                      {!submitting && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          )}

          {step === "done" && (
            <Reveal>
              <div className="bg-stone-900/50 border border-emerald-500/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-amber-500/5" />
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
                    Thank you for your service, {name.split(" ")[0] || "friend"}.
                  </h2>
                  <p className="text-stone-400 max-w-lg mx-auto mb-8 leading-relaxed">
                    We&apos;ve received your document. A team member will review within 1
                    business day and confirm via email. In the meantime, here&apos;s your
                    immediate-use coupon for any purchase:
                  </p>

                  <div className="inline-flex items-center gap-3 bg-stone-950/60 border-2 border-amber-500/40 rounded-2xl px-6 py-4 mb-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-300">
                      Your Code
                    </p>
                    <p className="text-2xl font-black text-white tracking-widest tabular-nums">
                      {couponCode}
                    </p>
                    <button
                      type="button"
                      onClick={copyCoupon}
                      className="bg-amber-500 hover:bg-amber-400 text-stone-950 px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      {couponCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-stone-500 mb-8">
                    Apply at checkout for 20% off any Americurial retainer, productized service, or CapturePilot plan.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/pricing"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
                    >
                      Explore Pricing <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://meetings-na2.hubspot.com/americurial/intro-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
                    >
                      Book a Call
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Trust strip always shown */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: Lock, title: "End-to-end encrypted", desc: "TLS 1.3 in transit, AES-256 at rest" },
              { icon: ShieldCheck, title: "Deleted after review", desc: "We never keep DoD documents long-term" },
              { icon: AlertCircle, title: "1 business day", desc: "Manual verification by a team member" },
            ].map((t) => (
              <div
                key={t.title}
                className="bg-stone-900/30 border border-white/5 rounded-xl p-4"
              >
                <t.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <p className="text-sm font-bold text-white">{t.title}</p>
                <p className="text-xs text-stone-500 mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
