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
              Growing Your Veteran-Owned Business
            </h1>

            <p className="text-lg text-stone-400 leading-relaxed">
              The federal government is required to direct a percentage of
              contract spending to veteran-owned small businesses. That
              requirement creates a structural advantage &mdash; but only if you know
              how to use it.
            </p>
          </div>

          {/* Body */}
          <div className="space-y-8 text-stone-300 leading-relaxed">
            <h2 className="text-2xl font-bold text-white mt-12">
              Understanding Your SDVOSB and VOSB Advantage
            </h2>

            <p>
              Service-Disabled Veteran-Owned Small Business and Veteran-Owned
              Small Business designations are not just labels. They are access
              keys to a contracting ecosystem specifically designed to channel
              federal spending toward businesses owned by veterans. The
              government&apos;s statutory goal is to award at least 3 percent of all
              federal prime contracting dollars to SDVOSBs. In practice, agencies
              that miss their targets face scrutiny from Congress and the Small
              Business Administration, creating institutional pressure to find
              and fund qualified veteran-owned contractors.
            </p>

            <p>
              The first step is ensuring your certifications are current and
              properly registered. Your SDVOSB or VOSB certification must be
              verified through the SBA&apos;s Veterans Small Business Certification
              program. Your SAM.gov registration must be active and accurately
              reflect your NAICS codes, capabilities, and socioeconomic
              designations. These registrations are your storefront in the
              federal marketplace. If they are incomplete or inaccurate, you are
              invisible to the contracting officers searching for businesses
              like yours.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              Winning Federal Set-Asides
            </h2>

            <p>
              Set-aside contracts are opportunities reserved exclusively for
              specific categories of small businesses. SDVOSB set-asides
              eliminate competition from large contractors entirely and limit
              your competition to other service-disabled veteran-owned
              businesses. This dramatically improves your probability of win
              compared to full and open competitions.
            </p>

            <p>
              The key to winning set-asides consistently is targeting the right
              ones. Not every set-aside is worth pursuing. Focus on
              opportunities where your technical capabilities align closely with
              the statement of work, where the contract value fits your current
              capacity, and where you have relevant past performance or can
              demonstrate equivalent experience. A focused pipeline of ten
              well-qualified set-asides will produce more wins than a scattered
              approach to fifty marginally relevant opportunities.
            </p>

            <p>
              The Department of Veterans Affairs, in particular, operates under
              the Veterans First Contracting Program, which gives priority to
              SDVOSBs and VOSBs for contracts at VA facilities. If your services
              are applicable to healthcare, facilities management, IT, or
              administrative support, the VA represents a concentrated market
              opportunity worth significant attention.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              Building Past Performance From Zero
            </h2>

            <p>
              The most common barrier for new veteran-owned contractors is the
              past performance paradox: you need past performance to win
              contracts, but you need contracts to build past performance. The
              solution is a deliberate progression strategy that builds your
              record systematically.
            </p>

            <p>
              Start with micro-purchases. Federal agencies can buy goods and
              services under $10,000 using simplified acquisition procedures
              that do not require competitive bidding. Government purchase card
              holders at every federal installation make these buys regularly.
              They are small contracts, but they create documented past
              performance records in federal databases. Every micro-purchase you
              complete successfully is a reference point you can cite in future
              proposals.
            </p>

            <p>
              Next, pursue Simplified Acquisition Procedure contracts in the
              $10,000 to $250,000 range. These contracts have streamlined
              evaluation processes and often weight past performance less
              heavily than technical approach and price, making them accessible
              to newer contractors. The 8(a) Business Development Program also
              offers sole-source contract opportunities up to $4.5 million for
              qualifying businesses, which can rapidly build your past
              performance portfolio.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              Teaming Agreements: Strategic Partnerships That Win
            </h2>

            <p>
              Teaming is not a sign of weakness. It is a strategic tool that
              the most successful contractors use deliberately. A well-structured
              teaming agreement pairs your veteran-owned status and specific
              capabilities with a partner who brings complementary strengths
              &mdash; whether that is technical expertise in a domain you are
              entering, facility clearances you do not yet hold, or past
              performance on similar contracts that strengthens your proposal.
            </p>

            <p>
              The most effective teaming relationships are built on genuine
              mutual benefit, not transactional pass-through arrangements. If
              your teaming partner views you as a vehicle for their set-aside
              eligibility rather than a contributor to the work, the
              relationship will fail under performance pressure and may attract
              regulatory scrutiny. Pursue partners who respect your
              capabilities, share workload responsibility fairly, and have a
              track record of successful teaming arrangements.
            </p>

            <p>
              Mentor-protege programs, particularly the SBA Mentor-Protege
              Program and agency-specific programs at the Department of Defense
              and VA, formalize these relationships and provide additional
              benefits including joint venture eligibility, access to the
              mentor&apos;s past performance for proposals, and business
              development support. For veteran-owned businesses in the growth
              phase, a strong mentor-protege relationship can compress years of
              organic growth into months.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              From Subcontractor to Prime
            </h2>

            <p>
              Many veteran-owned businesses enter the federal market as
              subcontractors and struggle to make the transition to prime
              contractor status. The jump is not just about size or revenue. It
              requires a fundamentally different approach to business
              development, proposal management, and contract administration.
            </p>

            <p>
              As a subcontractor, you execute a defined scope under someone
              else&apos;s contract. As a prime, you own the customer relationship,
              manage the full scope of work, handle all compliance and reporting
              requirements, and assume the financial risk of performance. The
              transition requires investing in proposal writing capability,
              contract management systems, financial controls that meet DCAA
              audit standards, and a business development function that
              identifies and qualifies opportunities twelve to eighteen months
              before they are solicited.
            </p>

            <p>
              The most effective transition strategy is gradual escalation.
              Start by priming small set-aside contracts while maintaining your
              subcontracting revenue base. Use each small prime contract to
              build systems, train your team, and establish the operational
              maturity needed for larger opportunities. Within two to three
              years of deliberate execution, a veteran-owned business can
              transition from a subcontractor doing $500,000 annually to a
              prime contractor managing $5 million or more in federal work.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              Key Takeaways
            </h2>

            <ul className="space-y-3">
              {[
                "Keep your SDVOSB/VOSB certification and SAM.gov registration current and accurate. They are your access keys to the federal market.",
                "Focus your pipeline on set-asides where your capabilities align tightly. Quality targeting beats volume every time.",
                "Build past performance deliberately, starting with micro-purchases and SAP contracts before pursuing larger opportunities.",
                "Use teaming agreements strategically to complement your capabilities. Pursue mentor-protege programs for accelerated growth.",
                "Transition from subcontractor to prime gradually. Build the systems, financial controls, and BD capability before scaling up.",
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
                Need help building your product?
              </h3>
              <p className="text-stone-400 mb-6">
                We are a veteran-owned agency that builds SaaS platforms and
                GovTech solutions. We built CapturePilot to solve this exact
                problem. Let&apos;s talk.
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
