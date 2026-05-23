import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

export default function VeteranOwnedBusinessGrowthPost() {
  return (
    <>
      <article className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-emerald-400 transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 text-xs text-stone-500 mb-4">
              <span>March 27, 2026</span>
              <span className="w-1 h-1 rounded-full bg-stone-700" />
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                8 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight mb-6">
              The Veteran-Owned Growth Playbook
            </h1>

            <p className="text-lg text-stone-400 leading-relaxed">
              The federal government has to spend a fixed share of contract
              dollars with veteran-owned firms. That&apos;s a real advantage
              sitting on the table. You just have to set up to grab it.
            </p>
          </div>

          {/* Body */}
          <div className="space-y-8 text-stone-300 leading-relaxed">
            <h2 className="text-2xl font-bold text-white mt-12">
              What SDVOSB and VOSB actually get you
            </h2>

            <p>
              SDVOSB (Service-Disabled Veteran-Owned Small Business) and VOSB
              (Veteran-Owned Small Business) aren&apos;t just labels next to
              your name. They&apos;re access keys. The government has a
              statutory floor: at least 3% of federal prime contracting dollars
              go to SDVOSBs. Agencies that miss that floor get questioned by
              the SBA and Congress, which is why most of them quietly hunt for
              veteran-owned firms to fund.
            </p>

            <p>
              Step one is making sure your paperwork is current and the cert
              actually flows through to your SAM record. SDVOSB / VOSB
              verification runs through SBA&apos;s VetCert programme. Your
              SAM.gov entry has to be active, the NAICS list accurate, and the
              socioeconomic flags set. If any of that&apos;s off, you&apos;re
              invisible to the contracting officer searching for someone like
              you.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              Winning set-aside contracts
            </h2>

            <p>
              A set-aside is a contract where only certain firms can bid. An
              SDVOSB set-aside removes the big contractors entirely — you&apos;re
              only competing against other SDVOSBs. The math is meaningfully
              better than open competition. Sometimes ten or twenty firms in
              the pool instead of a hundred.
            </p>

            <p>
              The trick is targeting the right ones. Not every set-aside is
              worth chasing. Look for: the SOW lines up with what you actually
              do, the dollar value fits your current capacity, and you can
              show relevant past performance (or genuinely equivalent
              experience). Ten well-qualified pursuits will beat fifty
              scattered ones every time. We&apos;ve seen the same shop hit
              50% win rate on the focused list and 5% on the scattershot.
            </p>

            <p>
              One specific note on the VA: it runs the Veterans First
              Contracting Program, which prioritises SDVOSBs and VOSBs for
              work at VA facilities. If you do healthcare, facilities O&amp;M,
              IT, or admin work, the VA is concentrated demand in your lane.
              Worth its own column in your pipeline.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              Building past performance from zero
            </h2>

            <p>
              Every new contractor hits the same wall: you need past
              performance to win contracts, and you need contracts to build
              past performance. The way through isn&apos;t magic, it&apos;s
              just deliberate.
            </p>

            <p>
              Start with micro-purchases. Federal agencies can buy anything
              under $10K using simplified procedures — no competitive bid
              required. Every base, every installation has government
              purchase-card holders making these buys all day. Small dollars,
              but every one of them shows up as documented past performance in
              federal databases. Cite them in your next proposal.
            </p>

            <p>
              Next layer is Simplified Acquisition contracts, $10K to $250K.
              Streamlined evaluations, and the score usually weights technical
              approach and price more than past performance. Easier to get
              into as a new contractor. If you qualify for 8(a), the
              sole-source ceiling there is $4.5M and the SBA processes most of
              them fast. That&apos;s how a year-old firm can have eight or
              nine real past-performance citations.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              Teaming agreements — when, with whom, and how not to get used
            </h2>

            <p>
              Teaming isn&apos;t a sign you&apos;re weak. The best contractors
              team on purpose. A clean teaming agreement pairs your
              veteran-owned status and specific skills with a partner who has
              what you don&apos;t — deeper technical depth in a new domain, a
              clearance level you haven&apos;t built up, past performance on
              the kind of contract you&apos;re chasing.
            </p>

            <p>
              The relationships that work are built on real shared work. If
              your &ldquo;partner&rdquo; just wants your set-aside eligibility
              and plans to do all the work themselves, that&apos;s
              pass-through — and pass-through arrangements collapse under
              performance pressure and attract regulatory scrutiny. Find
              partners who respect what you bring, split workload fairly, and
              can show you previous teaming relationships that actually
              shipped.
            </p>

            <p>
              Mentor-Protégé programmes (the SBA one, plus DoD and VA
              equivalents) formalise these relationships and unlock real
              benefits: joint-venture eligibility, the mentor&apos;s past
              performance citable in your proposals, and BD support. For a
              veteran-owned firm trying to scale, a year in the right MPP can
              compress what would otherwise be three or four years of organic
              growth.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              Subcontractor to prime — the jump nobody warns you about
            </h2>

            <p>
              A lot of veteran-owned firms enter federal as subcontractors and
              stall there. The move to prime isn&apos;t really about revenue
              or headcount. It&apos;s a different job.
            </p>

            <p>
              As a sub, you execute a defined scope under someone else&apos;s
              contract. As a prime, you own the customer relationship, run the
              full scope, handle all the compliance and reporting, and carry
              the financial risk if anything slips. To make that work you need
              real proposal capability, contract-management systems, financial
              controls that survive a DCAA audit, and a BD function that&apos;s
              looking at opportunities twelve to eighteen months before
              they&apos;re solicited.
            </p>

            <p>
              Don&apos;t try to do it in one leap. Start priming small
              set-asides while your subcontracting revenue covers payroll.
              Every small prime contract teaches you something — what your
              cost model is actually doing, where your reporting cadence
              breaks, who on your team can run a kick-off meeting. Two or
              three years of that and you can credibly move from $500K
              subcontracting to $5M+ in prime federal work.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              The short version
            </h2>

            <ul className="space-y-3">
              {[
                "Keep your SDVOSB/VOSB cert and SAM.gov record current and accurate. They're your visibility in federal search.",
                "Focus your pipeline. Ten well-qualified set-asides beat fifty marginal ones — every time we've seen it run.",
                "Build past performance the boring way: micro-purchases, then SAP contracts, then bigger work.",
                "Team on purpose, not out of desperation. Walk away from pass-through arrangements.",
                "Move from sub to prime gradually. Get the systems in place before you scale.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-stone-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-white/5">
            <div className="bg-gradient-to-br from-emerald-950/30 to-stone-900/40 border border-emerald-500/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Rather have us run this for you?
              </h3>
              <p className="text-stone-400 mb-6">
                Americurial is veteran-owned. We run capture for other veteran-owned
                firms, and we built CapturePilot to do the heavy lifting on
                opportunity matching. Fifteen minutes on the phone — we&apos;ll
                tell you which moves to make first.
              </p>
              <a
                href="https://meetings-na2.hubspot.com/americurial/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all inline-flex items-center gap-2 glow-emerald"
              >
                Book a Call <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
