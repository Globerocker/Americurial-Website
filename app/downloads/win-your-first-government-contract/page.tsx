import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Target,
  Calculator,
  ClipboardList,
  DollarSign,
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { LeadMagnetForm } from "@/components/LeadMagnet";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Agency Playbook for Winning a First Federal Contract | Americurial",
  description:
    "How we help our agency clients land their first federal contract — the field-tested framework we use, packaged into a free 24-page PDF.",
  alternates: {
    // Distinct canonical so Google doesn't dedupe against capturepilot.com's
    // version of the magnet. Content angle here is for agencies / consultants
    // running this for clients, not first-time bidders.
    canonical: "https://www.americurial.com/downloads/win-your-first-government-contract",
  },
};

const PDF_FILENAME = "Win Your First Government Contract.pdf";

// Different framing vs capturepilot.com — agency / consultant angle so SEO
// treats the page as unique. Same underlying PDF, same backend pipeline.
const FRAMEWORKS = [
  {
    icon: Target,
    title: "The 9-Question Bid Filter We Run for Clients",
    body:
      "Before we put any of our agency clients on a capture, we run them through this matrix. Score under 60 and we walk — chasing the wrong RFP costs every firm we've worked with $20–40k in lost capture cycles.",
  },
  {
    icon: Calculator,
    title: "The PWin Model We Brief to Founders",
    body:
      "The same 10-factor scoring frame the primes use, scaled down so a 5-person agency can run it in an afternoon. Customer relationship, competitive position, past performance, and price-to-win — weighted into a single number we report back to the client.",
  },
  {
    icon: ClipboardList,
    title: "The RFP Response Skeleton Our Writers Use",
    body:
      "Compliance matrix + section-by-section outline. The exact structure we hand off to our proposal writers. Cuts a first RFP draft from 40 hours to about 12.",
  },
  {
    icon: DollarSign,
    title: "The Pricing-to-Win Worksheet We Hand Clients",
    body:
      "Federal pricing is its own discipline. First-time bidders chronically under-price by 25–40%. We give our clients this worksheet on day one so direct + indirect rates plus a competitive band are baked in before any number lands on a proposal.",
  },
];

export default function FieldManualPage() {
  return (
    <main className="bg-stone-950 text-white min-h-screen">
      {/* Subtle gradient backdrop matching the rest of the site */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/10 via-stone-950 to-stone-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-24">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-emerald-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to americurial.com
        </Link>

        {/* Hero — agency / consultant angle */}
        <Reveal>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
            <Briefcase className="w-3 h-3" />
            For agencies, consultants & first-time bidders
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.98] max-w-4xl">
            The Agency Playbook for{" "}
            <span className="text-emerald-400">Winning a First Federal Contract.</span>
          </h1>

          <p className="text-lg text-stone-400 mt-6 max-w-2xl leading-relaxed">
            We packaged the field-tested framework we use with every agency
            client into a free 24-page PDF. Same toolkit our team runs internally
            before we touch a capture — yours to keep.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 mt-16">
          {/* LEFT — frameworks + preview */}
          <article className="lg:col-span-3">
            <Reveal>
              <div className="space-y-4">
                {FRAMEWORKS.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="flex items-start gap-4 bg-stone-900/40 border border-white/5 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-bold text-white">{f.title}</h2>
                        <p className="text-sm text-stone-400 mt-1.5 leading-relaxed">
                          {f.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 bg-stone-900/40 border border-white/5 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white">Who runs this</p>
                    <p className="text-sm text-stone-400 mt-1.5 leading-relaxed">
                      We're Americurial. We build software and capture pipelines
                      for small federal contractors — and we built this PDF for
                      every agency, consultant, and first-time bidder asking us
                      the same questions on the discovery call. If you'd rather
                      hand the whole thing off,{" "}
                      <Link
                        href="/contact"
                        className="text-emerald-400 underline-offset-4 hover:underline"
                      >
                        book a call
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Sneak peek — 3 stylized mock pages, dark-themed */}
            <Reveal>
              <section className="mt-14">
                <div className="flex items-baseline gap-3 mb-2">
                  <Eye className="w-4 h-4 text-emerald-400" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
                    Sneak peek inside
                  </p>
                </div>
                <h2 className="font-black text-2xl sm:text-3xl text-white leading-tight">
                  3 sample pages — the rest comes in your inbox.
                </h2>
                <p className="text-stone-400 mt-3 text-sm leading-relaxed max-w-xl">
                  Below is the actual structure of three frameworks from the
                  manual. The full worksheets, scoring weights, and benchmark
                  numbers live in the PDF.
                </p>

                <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Page 7 — Bid / No-Bid Matrix */}
                  <PreviewPage page={7} title="Bid / No-Bid Matrix">
                    <table className="w-full text-[10px] text-stone-300 border-collapse">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left font-bold py-1 pr-1">Question</th>
                          <th className="text-right font-bold py-1 w-10">Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5"><td className="py-1 pr-1">Do we know the customer?</td><td className="text-right tabular-nums">_/10</td></tr>
                        <tr className="border-b border-white/5"><td className="py-1 pr-1">NAICS match?</td><td className="text-right tabular-nums">_/10</td></tr>
                        <tr className="border-b border-white/5"><td className="py-1 pr-1">Past performance fits?</td><td className="text-right tabular-nums">_/15</td></tr>
                        <tr className="border-b border-white/5"><td className="py-1 pr-1">Set-aside aligned?</td><td className="text-right tabular-nums">_/15</td></tr>
                        <tr className="border-b border-white/5"><td className="py-1 pr-1">Win price defensible?</td><td className="text-right tabular-nums">_/15</td></tr>
                        <tr><td className="py-1 pr-1 text-stone-500 italic">+ 4 more…</td><td className="text-right tabular-nums">_/35</td></tr>
                      </tbody>
                    </table>
                    <p className="text-[9px] text-stone-500 mt-2 italic">Under 60? Walk.</p>
                  </PreviewPage>

                  {/* Page 13 — PWin Calculator */}
                  <PreviewPage page={13} title="PWin Calculator">
                    <ul className="space-y-1 text-[10px] text-stone-300">
                      {[
                        { f: "Customer Relationship", w: "12%" },
                        { f: "Competitive Position", w: "10%" },
                        { f: "Technical Fit", w: "15%" },
                        { f: "Past Performance", w: "12%" },
                        { f: "Price-to-Win", w: "15%" },
                        { f: "+ 5 more factors", w: "36%", muted: true },
                      ].map((row) => (
                        <li
                          key={row.f}
                          className={`flex items-center justify-between border-b border-white/5 pb-0.5 ${
                            row.muted ? "text-stone-500 italic" : ""
                          }`}
                        >
                          <span>{row.f}</span>
                          <span className="font-bold tabular-nums">{row.w}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 bg-emerald-500/10 border border-emerald-500/30 rounded px-2 py-1 text-[9px] text-emerald-300 font-bold">
                      PWin = Σ(score × weight)
                    </div>
                  </PreviewPage>

                  {/* Page 18 — Pricing-to-Win */}
                  <PreviewPage page={18} title="Pricing-to-Win">
                    <div className="space-y-1.5 text-[10px] text-stone-300">
                      <div className="flex justify-between border-b border-white/5 pb-0.5"><span>Direct labor rate</span><span className="tabular-nums">$___/hr</span></div>
                      <div className="flex justify-between border-b border-white/5 pb-0.5"><span>+ Fringe (typ. 28%)</span><span className="tabular-nums">$___</span></div>
                      <div className="flex justify-between border-b border-white/5 pb-0.5"><span>+ Overhead (typ. 35%)</span><span className="tabular-nums">$___</span></div>
                      <div className="flex justify-between border-b border-white/5 pb-0.5"><span>+ G&A (typ. 8%)</span><span className="tabular-nums">$___</span></div>
                      <div className="flex justify-between border-b border-white/5 pb-0.5"><span>+ Profit (typ. 7-10%)</span><span className="tabular-nums">$___</span></div>
                      <div className="flex justify-between font-bold text-white pt-1"><span>Loaded rate</span><span className="tabular-nums">$___/hr</span></div>
                    </div>
                    <p className="text-[9px] text-stone-500 mt-2 italic">First-timers under-price by 25-40%.</p>
                  </PreviewPage>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-stone-500">
                  <Lock className="w-3.5 h-3.5" />
                  <span>
                    17 more pages of frameworks, worksheets, and benchmark
                    tables — emailed instantly.
                  </span>
                </div>
              </section>
            </Reveal>
          </article>

          {/* RIGHT — sticky form */}
          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 space-y-4">
              <LeadMagnetForm
                title="Send me the PDF"
                filename={PDF_FILENAME}
                magnetKey="field-manual"
                bullets={[
                  "24-page PDF — full frameworks + worksheets",
                  "Delivered to your inbox in under 60 seconds",
                  "Free, no credit card, unsubscribe anytime",
                ]}
                collectCompany={true}
                redirectTo="/thank-you"
              />

              <p className="text-[11px] text-stone-500 text-center px-4">
                Capturing this lead syncs your contact into our HubSpot CRM and
                emails you the PDF link. If you want us to run the playbook for
                you, hit reply when the email lands.
              </p>
            </div>
          </aside>
        </div>

        {/* Final CTA strip — agency-flavored, links back to /contact */}
        <Reveal>
          <section className="mt-20 bg-stone-900/60 border border-emerald-500/20 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-4">
                <Sparkles className="w-3 h-3" />
                After you've read it
              </div>
              <h2 className="font-black text-3xl sm:text-4xl text-white">
                Want us to run the playbook for you?
              </h2>
              <p className="text-stone-400 text-base mt-3 max-w-xl mx-auto">
                We work with a small roster of agencies and first-time bidders
                each quarter. Book a 30-min capture call and we'll walk through
                one of your live opportunities together — free.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-bold transition-colors"
              >
                Book a capture call →
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}

/** Stylized mock page — dark theme variant for Americurial. */
function PreviewPage({
  page,
  title,
  children,
}: {
  page: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-stone-900/60 border border-white/10 rounded-xl shadow-sm hover:border-emerald-500/30 transition-colors overflow-hidden">
      <div className="absolute top-2 right-3 text-[9px] font-bold text-stone-500 tabular-nums">
        Page {page}
      </div>
      <div className="h-1 bg-emerald-500" />
      <div className="p-4">
        <h3 className="font-black text-white text-sm leading-tight mb-3">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
