"use client";

import { useState, ReactNode } from "react";
import { Download, Mail, CheckCircle2, ArrowRight } from "lucide-react";

/**
 * Reusable download-gated lead magnet card. Drop beneath the preview content
 * on any `/tools/*` landing page.
 */
export function LeadMagnetForm({
  title,
  filename,
  bullets,
}: {
  title: string;
  filename: string;
  bullets: string[];
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to HubSpot or Resend. For now, pretend-submit.
    setSubmitted(true);
  }

  return (
    <div className="bg-stone-900/60 border border-emerald-500/30 rounded-3xl p-8 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
      <div className="relative">
        {!submitted ? (
          <>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <Download className="w-7 h-7 text-emerald-300" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-400 mb-1">
                  Free Download
                </p>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                  {title}
                </h3>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>

            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@company.com"
                  className="w-full bg-stone-950/60 border border-white/10 focus:border-emerald-500/50 focus:outline-none rounded-full pl-11 pr-5 py-4 text-white text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-4 rounded-full transition-all flex items-center justify-center gap-2 glow-emerald whitespace-nowrap"
              >
                Send me the PDF <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-xs text-stone-500 mt-4 text-center">
              No spam, one email with the download link. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Check your inbox.</h3>
            <p className="text-stone-400 mb-6">
              We sent <strong className="text-white">{filename}</strong> to{" "}
              <strong className="text-white">{email}</strong>.
            </p>
            <a
              href="https://meetings-na2.hubspot.com/americurial/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
            >
              Want us to run this for you? <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export function LandingHero({
  tag,
  title,
  subtitle,
  children,
}: {
  tag: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="contour-circle w-[600px] h-[600px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <Download className="w-3 h-3" />
          {tag}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.95] mb-6 animate-fade-in-up-100">
          {title}
        </h1>

        <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-200">
          {subtitle}
        </p>

        {children}
      </div>
    </section>
  );
}
