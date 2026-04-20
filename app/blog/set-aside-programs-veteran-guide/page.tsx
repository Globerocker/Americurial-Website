import Link from "next/link";
import type { Metadata } from "next";
import { BlogArticle, Callout, Section, CheckList } from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "SDVOSB, VOSB, 8(a), HUBZone, WOSB — The Set-Aside Stack",
  description:
    "The 7 federal set-aside categories, dollar thresholds, and the optimal stacking strategy for veteran-owned firms. Triple-certed unicorns are real.",
  alternates: {
    canonical: "https://www.americurial.com/blog/set-aside-programs-veteran-guide",
  },
};

const TOC = [
  { id: "what", label: "What set-asides are" },
  { id: "seven", label: "The 7 categories" },
  { id: "stacking", label: "The stacking strategy" },
  { id: "thresholds", label: "Dollar thresholds" },
  { id: "get-certified", label: "How to get certified" },
  { id: "track", label: "Track &amp; target opportunities" },
];

export default function Post() {
  return (
    <BlogArticle
      title="SDVOSB, VOSB, 8(a), HUBZone, WOSB — The Set-Aside Stack"
      subtitle="The 7 federal set-aside categories, dollar thresholds, and the optimal stacking strategy for veteran-owned firms."
      date="April 15, 2026"
      readTime="14 min read"
      category="Set-Asides"
      toc={TOC}
      relatedSlugs={[
        { slug: "sam-gov-registration-for-veterans", title: "SAM.gov Registration Playbook" },
        { slug: "sources-sought-playbook", title: "Sources Sought Playbook" },
      ]}
    >
      <p>
        Set-asides are the single biggest lever a small veteran-owned firm has in the federal
        market. The government carves out billions of dollars a year specifically for firms
        that look like yours — but only if you&apos;re properly certified, properly registered,
        and actively tracking opportunities scoped to your cert stack.
      </p>

      <p>
        Most veteran-owned firms hold one cert. The firms that grow fastest hold two or three.
        Here&apos;s the full landscape.
      </p>

      <Section id="what" title="What set-asides are" />

      <p>
        A set-aside is a contract explicitly restricted to a class of businesses — say, only
        SDVOSBs, only HUBZone firms, or only small businesses. The idea is to prevent the top
        50 primes from dominating every federal contract, and to channel dollars toward policy
        goals (supporting veterans, disadvantaged communities, rural areas, etc.).
      </p>

      <p>
        In 2024, the federal government awarded roughly <strong>$163B in small business
        set-asides</strong> — about 27% of total contract dollars. Of that, ~$25B went to
        SDVOSBs specifically. These aren&apos;t symbolic targets; they&apos;re tracked by
        Congress and reported quarterly.
      </p>

      <Callout variant="vet" title="Why this matters for veterans">
        The 3% federal SDVOSB target is a floor, not a ceiling. Some agencies (VA, DoD, DHS)
        regularly exceed 5-6% SDVOSB spending. The program is designed to pull veteran-owned
        firms up the value chain — if you&apos;re not engaged, you&apos;re leaving real money on
        the table.
      </Callout>

      <Section id="seven" title="The 7 categories" />

      <h3>1. Small Business (SB)</h3>
      <p>
        The foundation. Self-certified in SAM.gov. You&apos;re &ldquo;small&rdquo; under SBA size
        standards for your NAICS — typically either revenue-based (e.g., $9M for janitorial) or
        employee-based (e.g., 500 for manufacturing). <strong>Every other set-aside requires this
        first.</strong>
      </p>

      <h3>2. SDVOSB — Service-Disabled Veteran-Owned Small Business</h3>
      <ul>
        <li>
          <strong>Requires:</strong> VA-rated service-connected disability + 51%+ veteran
          ownership + veteran control of day-to-day operations
        </li>
        <li>
          <strong>Target:</strong> 3% of federal contract dollars (~$25B/yr)
        </li>
        <li>
          <strong>Sole-source authority:</strong> up to $5M (non-manufacturing), $7M
          (manufacturing)
        </li>
        <li>
          <strong>Certification:</strong> SBA VetCert (free, 60-90 days)
        </li>
      </ul>

      <h3>3. VOSB — Veteran-Owned Small Business</h3>
      <ul>
        <li>
          <strong>Requires:</strong> 51%+ veteran ownership + control (no disability required)
        </li>
        <li>
          <strong>Primary benefit:</strong> VA contracting preference (Kingdomware decision)
        </li>
        <li>
          <strong>Certification:</strong> SBA VetCert (free, 30-60 days)
        </li>
      </ul>

      <h3>4. 8(a) Business Development</h3>
      <ul>
        <li>
          <strong>Requires:</strong> Socially + economically disadvantaged owner; personal net
          worth ~$850K cap; AGI ~$400K cap; assets ~$6.5M cap
        </li>
        <li>
          <strong>Target:</strong> 5% of federal contract dollars
        </li>
        <li>
          <strong>Sole-source authority:</strong> up to $4.5M (services) / $7M (manufacturing)
        </li>
        <li>
          <strong>Length:</strong> 9-year program (4 years developmental + 5 transitional)
        </li>
        <li>
          <strong>Certification:</strong> SBA (6-12 months)
        </li>
      </ul>

      <h3>5. HUBZone</h3>
      <ul>
        <li>
          <strong>Requires:</strong> Principal office in HUBZone-designated area + 35% of
          employees live in HUBZone
        </li>
        <li>
          <strong>Target:</strong> 3% of federal contract dollars
        </li>
        <li>
          <strong>Special benefit:</strong> 10% price evaluation preference on full-and-open
          competition
        </li>
        <li>
          <strong>Certification:</strong> SBA (90-120 days)
        </li>
      </ul>

      <h3>6. WOSB / EDWOSB — Women-Owned &amp; Economically Disadvantaged Women-Owned</h3>
      <ul>
        <li>
          <strong>Requires:</strong> 51%+ female ownership + control; EDWOSB adds personal
          wealth caps
        </li>
        <li>
          <strong>Target:</strong> 5% of federal contract dollars (~$35B/yr)
        </li>
        <li>
          <strong>Certification:</strong> Free self-certification via SBA (30-60 days)
        </li>
      </ul>

      <h3>7. Small Disadvantaged Business (SDB)</h3>
      <ul>
        <li>
          <strong>Requires:</strong> Socially disadvantaged owner (similar to 8(a) but less
          formal)
        </li>
        <li>
          <strong>Target:</strong> 15% of federal contract dollars (newly expanded)
        </li>
        <li>
          <strong>Certification:</strong> Self-certified in SAM.gov
        </li>
      </ul>

      <Section id="stacking" title="The stacking strategy" />

      <p>
        A single cert is a single lane. Multiple certs compound. Contracting officers can run
        set-asides that combine certifications — e.g., an SDVOSB + WOSB + HUBZone bid gets you
        onto contracts that functionally have 10 competitors instead of 5,000.
      </p>

      <p>Example stacking profiles we see:</p>

      <h3>Triple-Vet Stack (rare, extremely valuable)</h3>
      <p>Woman veteran with VA disability rating + office in HUBZone area:</p>
      <ul>
        <li>SDVOSB + WOSB + EDWOSB + HUBZone = 4 certs</li>
        <li>Competitive set: <em>dozens</em>, not thousands</li>
        <li>Sole-source authority through SBA 8(a) if enrolled: up to $7M</li>
      </ul>

      <h3>Standard Vet Stack</h3>
      <p>Veteran with VA disability + SDVOSB:</p>
      <ul>
        <li>SDVOSB + (optionally) HUBZone if location qualifies</li>
        <li>Access to $25B/yr SDVOSB target + VA contracting preference</li>
      </ul>

      <h3>The 8(a) + SDVOSB power combo</h3>
      <p>
        SDVOSB handles the 3% set-aside market; 8(a) handles the sole-source ceiling ($4.5M-$7M
        direct awards). Together they give you access to <strong>both</strong> the set-aside
        competitive market <strong>and</strong> the sole-source pipeline — which is how small
        firms grow to $5M+ revenue fast.
      </p>

      <Callout variant="tip" title="Run the numbers yourself">
        Our{" "}
        <Link href="/tools/cert-path">
          <strong>Cert Path Wizard</strong>
        </Link>{" "}
        maps your specific situation to the optimal stacking sequence. 8 questions, 90 seconds.
      </Callout>

      <Section id="thresholds" title="Dollar thresholds" />

      <p>Set-aside rules interact with dollar thresholds:</p>

      <ul>
        <li>
          <strong>Under $10K — Micro-Purchase Threshold.</strong> Government credit-card
          purchases. No competition required. Great entry point — build a direct relationship
          with a purchaser.
        </li>
        <li>
          <strong>$10K - $250K — Simplified Acquisition Threshold (SAT).</strong> Required to be
          set aside for small business (rule of 2). Fast awards, less paperwork.
        </li>
        <li>
          <strong>$250K - $4.5M — Standard competition.</strong> Still preferentially routed to
          small business set-asides.
        </li>
        <li>
          <strong>Over $4.5M — Large contracts.</strong> Harder for small primes; usually
          requires teaming with larger firms or a mentor-protégé JV.
        </li>
      </ul>

      <Section id="get-certified" title="How to get certified" />

      <p>For each cert, the path is:</p>

      <h3>SDVOSB / VOSB</h3>
      <ol>
        <li>Ensure VA disability rating is active (for SDVOSB)</li>
        <li>Ensure SAM.gov record is active and flags set</li>
        <li>Create SBA VetCert account</li>
        <li>Upload proof: DD-214, VA rating letter, state incorporation docs</li>
        <li>SBA reviews ownership + control evidence</li>
        <li>Certification typically issued in 30-90 days</li>
      </ol>

      <h3>8(a)</h3>
      <ol>
        <li>Complete the SBA&apos;s personal eligibility determination</li>
        <li>Document social &amp; economic disadvantage (narrative required)</li>
        <li>Submit personal financial disclosures for all owners + spouses</li>
        <li>Complete Business Plan template</li>
        <li>SBA processes — typically 6-12 months</li>
      </ol>

      <h3>HUBZone</h3>
      <ol>
        <li>
          Verify HUBZone designation via{" "}
          <a
            href="https://maps.certify.sba.gov/hubzone/map"
            target="_blank"
            rel="noopener noreferrer"
          >
            SBA HUBZone map
          </a>
        </li>
        <li>Verify 35% of employees live in HUBZone</li>
        <li>Submit application with employee address documentation</li>
        <li>SBA reviews — 90-120 days</li>
      </ol>

      <Callout variant="warn" title="HUBZone moving target">
        HUBZone boundaries update quarterly. An address that qualifies today may not qualify in
        18 months — set a recurring check. Losing HUBZone status mid-contract is painful.
      </Callout>

      <Section id="track" title="Track &amp; target opportunities" />

      <p>
        Being certified is Step 1. Actively tracking opportunities scoped to your cert stack is
        Step 2. Most firms stop at the certificate and wait for the phone to ring.
      </p>

      <p>At minimum:</p>

      <CheckList
        items={[
          "Set daily email alerts in SAM.gov for your NAICS + set-asides",
          "Register for VA&apos;s Small Business Portal if you&apos;re VOSB/SDVOSB",
          "Join your APEX Accelerator — they surface local opportunities",
          "Use CapturePilot to score 40K+ opportunities against your cert stack",
          "Follow the program offices running opportunities in your NAICS on LinkedIn",
          "Attend agency outreach events — most are virtual and free",
        ]}
      />

      <Callout variant="info" title="Want help certifying?">
        Our{" "}
        <Link href="/pricing#productized">
          <strong>Certification Application Support</strong>
        </Link>{" "}
        package walks every form with you and ships the package — especially valuable for 8(a),
        which has the highest rejection rate. $3,500 standard, $2,800 for verified veterans.
      </Callout>

      <h2>The bottom line</h2>
      <p>
        Federal set-asides are free money in the sense that you&apos;ve already earned the right
        to access them by serving, by building a small business, or both. The certification
        paperwork is real work, but it&apos;s one-time. Once you&apos;re stacked, every
        opportunity in your lane becomes exponentially easier to win.
      </p>

      <p>
        Start with the foundation (SB self-cert), add the cert that matches your service
        (SDVOSB or VOSB), and layer from there. Two years of discipline here is the difference
        between chasing every RFP and having RFPs come to you.
      </p>
    </BlogArticle>
  );
}
