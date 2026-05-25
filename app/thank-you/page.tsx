"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Mail,
  ArrowRight,
  Calendar,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-stone-950 min-h-screen flex items-center justify-center">
          <div className="text-stone-400 text-sm">Loading…</div>
        </main>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}

function ThankYouContent() {
  const params = useSearchParams();
  const magnet = params?.get("magnet") || "";
  const magnetLabel = MAGNET_LABELS[magnet] || "your download";

  return (
    <main className="bg-stone-950 text-white min-h-screen relative overflow-hidden">
      {/* Backdrop matching the rest of the site */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 py-20 sm:py-28">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-500/15 border border-emerald-500/30 mb-8">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>

            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
              <Mail className="w-3 h-3" />
              Check your inbox
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-tight">
              Your PDF is on the way.
            </h1>

            <p className="text-lg text-stone-400 mt-5 max-w-xl mx-auto leading-relaxed">
              We just sent <span className="text-white font-bold">{magnetLabel}</span>{" "}
              to your inbox. It usually lands in under 60 seconds. If you
              don&rsquo;t see it, check spam — and add{" "}
              <span className="text-emerald-400 font-mono text-sm">
                andre@capturepilot.com
              </span>{" "}
              to your contacts so the next one doesn&rsquo;t bounce.
            </p>
          </div>
        </Reveal>

        {/* Next-step CTA grid — agency value-add */}
        <Reveal>
          <div className="grid sm:grid-cols-2 gap-4 mt-14">
            <Link
              href="/contact"
              className="group block bg-stone-900/60 border border-emerald-500/30 hover:border-emerald-500/60 rounded-2xl p-6 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-400 mb-2">
                  Want us to run it for you?
                </p>
                <h3 className="font-bold text-white text-lg leading-tight">
                  Book a 30-min capture call
                </h3>
                <p className="text-sm text-stone-400 mt-2 leading-relaxed">
                  We&rsquo;ll walk through one of your live opportunities and
                  show you exactly where to apply the playbook.
                </p>
                <p className="text-sm font-bold text-emerald-400 mt-4 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Book now <ArrowRight className="w-4 h-4" />
                </p>
              </div>
            </Link>

            <Link
              href="/services/govcon"
              className="group block bg-stone-900/40 border border-white/10 hover:border-emerald-500/30 rounded-2xl p-6 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-stone-800 border border-white/10 text-stone-300 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-2">
                Done-for-you capture
              </p>
              <h3 className="font-bold text-white text-lg leading-tight">
                See our govcon services
              </h3>
              <p className="text-sm text-stone-400 mt-2 leading-relaxed">
                Full-stack capture: NAICS strategy, capability statement, RFP
                response, pricing. We run it; you sign.
              </p>
              <p className="text-sm font-bold text-stone-300 mt-4 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </p>
            </Link>
          </div>
        </Reveal>

        {/* What happens next — quick reassurance */}
        <Reveal>
          <div className="mt-12 bg-stone-900/40 border border-white/5 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-white mb-3">
                  What happens next
                </p>
                <ol className="space-y-2 text-sm text-stone-400 list-decimal pl-5 leading-relaxed">
                  <li>
                    The PDF link is in your inbox now (subject: &ldquo;Your
                    Field Manual is ready&rdquo;).
                  </li>
                  <li>
                    Reply to that email anytime — it goes straight to Andre and
                    your message ends up in our CRM.
                  </li>
                  <li>
                    Once a quarter we send a short note with new federal data
                    or a fresh framework. Reply &ldquo;stop&rdquo; and
                    we&rsquo;ll take you off the list.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Back link */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-emerald-400 transition-colors"
          >
            ← Back to americurial.com
          </Link>
        </div>
      </div>
    </main>
  );
}

// Lookup table for the magnet param so the thank-you page can name the
// download. Keep keys in sync with `dashboard/src/lib/lead-magnets.ts`.
const MAGNET_LABELS: Record<string, string> = {
  "field-manual": "Win Your First Government Contract (Field Manual)",
};
