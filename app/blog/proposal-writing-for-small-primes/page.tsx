import Link from "next/link";
import type { Metadata } from "next";
import { BlogArticle, Callout, Section, CheckList } from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Proposal Writing for Small Primes: 10 Rules, 1 Framework",
  description:
    "Compliance matrix, win themes, color team reviews, price-to-win — even if you&apos;re a one-person proposal shop.",
  alternates: {
    canonical: "https://www.americurial.com/blog/proposal-writing-for-small-primes",
  },
};

const TOC = [
  { id: "framework", label: "The framework — 1 map, 10 rules" },
  { id: "read", label: "Rule 1–3: Read, Read Again, Compliance Matrix" },
  { id: "win-themes", label: "Rule 4–5: Win Themes &amp; Language" },
  { id: "proof", label: "Rule 6–7: Proof &amp; Metrics" },
  { id: "price", label: "Rule 8: Price-to-Win" },
  { id: "reviews", label: "Rule 9: Color Team Reviews" },
  { id: "edit", label: "Rule 10: The Brutal Edit Pass" },
];

export default function Post() {
  return (
    <BlogArticle
      title="Proposal Writing for Small Primes: 10 Rules, 1 Framework"
      subtitle="Compliance matrix, win themes, color team reviews, price-to-win, and the brutal edit pass — even if you&apos;re a one-person proposal shop."
      date="April 8, 2026"
      readTime="13 min read"
      category="Proposals"
      toc={TOC}
      relatedSlugs={[
        { slug: "sources-sought-playbook", title: "Sources Sought Playbook" },
        { slug: "capability-statement-guide", title: "Capability Statement Guide" },
      ]}
    >
      <p>
        A federal proposal isn&apos;t creative writing. It&apos;s a compliance document that has
        to match a scoring rubric you mostly have to reverse-engineer. Most small primes lose
        proposals not because their solution is wrong but because they&apos;re graded on
        criteria they didn&apos;t understand.
      </p>

      <p>
        This is the framework we use at Americurial. 10 rules, one integrated process. It works
        for a 40-person team and it works for a solo veteran running their first solicitation.
      </p>

      <Section id="framework" title="The framework — 1 map, 10 rules" />

      <p>
        Every federal proposal follows this flow:
      </p>

      <ol>
        <li>
          <strong>Read the solicitation three times.</strong> Once for fit, once for scoring, once
          for traps.
        </li>
        <li>
          <strong>Build the compliance matrix.</strong> Every requirement mapped to a response
          section.
        </li>
        <li>
          <strong>Write to the evaluation criteria, not the SOW.</strong> Compliance gets you
          in; evaluation criteria decide the winner.
        </li>
        <li>
          <strong>Draft win themes before you write.</strong> 2-4 messages that thread every
          section.
        </li>
        <li>
          <strong>Use the buyer&apos;s language.</strong> If the SOW says &ldquo;program
          management,&rdquo; you don&apos;t write &ldquo;project management.&rdquo;
        </li>
        <li>
          <strong>Lead with proof.</strong> Past performance, metrics, named clients — before
          the abstract pitch.
        </li>
        <li>
          <strong>Make everything measurable.</strong> Numbers beat adjectives every time.
        </li>
        <li>
          <strong>Price-to-win is research, not guesswork.</strong> Pull past awards, calculate,
          strategize.
        </li>
        <li>
          <strong>Color team review.</strong> Pink → Red → Gold, even if &ldquo;team&rdquo; is you
          + a friend.
        </li>
        <li>
          <strong>Brutal final edit pass.</strong> Read aloud. Cut 20%. Submit early.
        </li>
      </ol>

      <Callout variant="tip" title="How the framework stacks">
        Rules 1-3 are <em>compliance</em>. Rules 4-7 are <em>competitiveness</em>. Rule 8 is{" "}
        <em>pricing</em>. Rules 9-10 are <em>quality control</em>. Skipping any of the four
        layers is why most small primes lose.
      </Callout>

      <Section id="read" title="Rules 1-3 — Read, Re-read, Compliance Matrix" />

      <h3>Rule 1 — Read the solicitation 3 times</h3>
      <p>
        First read: is this worth bidding? Check fit, set-aside eligibility, size standard.
        Second read: pull out every &ldquo;shall,&rdquo; &ldquo;must,&rdquo; and evaluation
        criterion. Third read: look for contradictions and traps (double-requirements, hidden
        page limits, evaluation rubrics that don&apos;t match Section L).
      </p>

      <h3>Rule 2 — Build a compliance matrix</h3>
      <p>
        A spreadsheet with one row per requirement. Columns: requirement text, section
        reference, where it&apos;s addressed in your response, status (draft/final/reviewed),
        owner. This is the document you hand to your color-team reviewers.
      </p>

      <Callout variant="warn" title="Missing requirement = disqualified">
        Contracting officers routinely disqualify proposals that miss a single mandatory
        &ldquo;shall&rdquo; clause. A compliance matrix is not bureaucracy — it&apos;s the only
        reliable way to avoid automatic rejection.
      </Callout>

      <h3>Rule 3 — Write to evaluation criteria, not the SOW</h3>
      <p>
        Section M (evaluation factors) is more important than Section C (scope of work). The SOW
        tells you <em>what to do</em>; Section M tells you <em>how you&apos;ll be judged</em>.
        Organize your response around evaluation criteria, with SOW requirements nested
        inside.
      </p>

      <Section id="win-themes" title="Rules 4-5 — Win Themes &amp; Language" />

      <h3>Rule 4 — Draft win themes before you write</h3>
      <p>
        A win theme is a repeatable message that threads your proposal. 2-4 of them, total.
        Each should answer: &ldquo;why us, for this requirement, over every other bidder.&rdquo;
      </p>
      <p>Good win themes are specific and proof-backed:</p>
      <ul>
        <li>
          &ldquo;Proven performance in this exact agency — 3 consecutive CPARS 'exceptional'
          ratings&rdquo;
        </li>
        <li>&ldquo;100% W-2 workforce — no 1099 subcontractor risk&rdquo;</li>
        <li>
          &ldquo;Veteran-led operations discipline — our PM is a former Army infantry officer
          with 2 deployments&rdquo;
        </li>
      </ul>
      <p>Bad win themes are generic:</p>
      <ul>
        <li>&ldquo;Superior customer service&rdquo;</li>
        <li>&ldquo;Innovative solutions&rdquo;</li>
        <li>&ldquo;Commitment to quality&rdquo;</li>
      </ul>

      <h3>Rule 5 — Use the buyer&apos;s language</h3>
      <p>
        Read the agency&apos;s website, prior solicitations, and leadership speeches. They have
        preferred terminology. Use it. If they say &ldquo;warfighter support,&rdquo; you don&apos;t
        write &ldquo;end-user assistance.&rdquo;
      </p>

      <Section id="proof" title="Rules 6-7 — Proof &amp; Metrics" />

      <h3>Rule 6 — Lead every section with proof</h3>
      <p>
        Federal evaluators are trained to look for substantiation. Every claim needs:
      </p>
      <ul>
        <li>A past performance citation with the contract number</li>
        <li>A quantified result (not &ldquo;improved&rdquo; but &ldquo;reduced cycle time 38%&rdquo;)</li>
        <li>A named client or reference</li>
        <li>A cert, clearance, or credential</li>
      </ul>

      <h3>Rule 7 — Make everything measurable</h3>
      <p>
        Replace every adjective with a number. &ldquo;Fast response&rdquo; becomes &ldquo;&lt;2
        hour dispatch.&rdquo; &ldquo;Experienced team&rdquo; becomes &ldquo;average 12 years
        federal experience per staff member.&rdquo;
      </p>

      <Callout variant="tip" title="The measurability test">
        After drafting each section, highlight every adjective. For each highlighted word, ask:
        &ldquo;compared to what?&rdquo; If you can&apos;t answer, replace with a number.
      </Callout>

      <Section id="price" title="Rule 8 — Price-to-Win (PTW)" />

      <p>
        Price is where most small primes either leave money on the table or price themselves
        out. A serious PTW analysis includes:
      </p>

      <CheckList
        items={[
          "Pull all past awards for this agency in this NAICS (USASpending.gov)",
          "Calculate the distribution: 25th / 50th / 75th / 90th percentile",
          "Look at the incumbent&apos;s prior contract value + any modifications",
          "Back into the likely budget — agencies price ceilings matter",
          "Position strategically: cheap (below 50th), mid (50th-75th), premium (75th+)",
          "Document your rationale — color team will ask",
        ]}
      />

      <p>
        For small primes, positioning in the 50th-75th percentile is usually ideal: competitive
        without signaling low-quality. Below 40th is a red flag for realism to evaluators.
      </p>

      <Section id="reviews" title="Rule 9 — Color Team Reviews" />

      <p>
        Color reviews are structured internal reviews at specific maturity stages:
      </p>

      <h3>Pink Team (40% complete)</h3>
      <p>
        Concept review. Does the compliance matrix look complete? Are win themes coherent? Is
        the approach directionally right?
      </p>

      <h3>Red Team (80% complete)</h3>
      <p>
        Full proposal review. Every reviewer reads cold, as if they&apos;re an evaluator. Score
        against the rubric. Find compliance gaps, weak sections, unclear claims.
      </p>

      <h3>Gold Team (95% complete)</h3>
      <p>
        Final executive review. Focused on executive summary, win themes, price, and top-level
        risks. Approves for submission.
      </p>

      <Callout variant="info" title="Small-shop color teams">
        Color team doesn&apos;t require a committee. For a solo shop: hire an experienced
        proposal consultant for 2-4 hours per color team — enough to catch 80% of issues
        without a massive budget.
      </Callout>

      <Section id="edit" title="Rule 10 — The Brutal Final Edit" />

      <p>48 hours before submission:</p>

      <CheckList
        items={[
          "Read the entire proposal aloud. Every section. It forces you to hear awkwardness.",
          "Cut 20% of the words. Any proposal can be compressed 20% without losing content.",
          "Check page limits, font sizes, margins — exactly the spec.",
          "Verify every table of contents, cross-reference, and exhibit label.",
          "Run compliance matrix one more time. Every row green.",
          "Submit 24 hours early if the portal allows. Late submission = disqualified.",
        ]}
      />

      <Callout variant="vet" title="Veteran-specific edge">
        In your executive summary, land the veteran angle with one specific line — not &ldquo;as
        a veteran-owned firm.&rdquo; Be concrete: &ldquo;Founded by a Navy Boarding Team
        operator, 2 Atalanta tours — bringing that operational discipline to your facility
        O&amp;M.&rdquo;
      </Callout>

      <Callout variant="info" title="Want us to write it?">
        Our{" "}
        <Link href="/pricing#productized">
          <strong>Single Proposal Writing</strong>
        </Link>{" "}
        engagement handles a full 30-page proposal: compliance matrix, win-theme workshop,
        writing, graphics, color team reviews. $4,500 standard, $3,600 for verified veterans.
      </Callout>

      <h2>The bottom line</h2>
      <p>
        Federal proposal writing is an applied skill, not a creative one. The rules are knowable.
        The framework compounds: every proposal you write well makes the next one faster because
        your win themes, templates, and price-to-win analyses carry forward.
      </p>

      <p>
        The difference between small primes that win and small primes that don&apos;t is almost
        never solution quality. It&apos;s compliance discipline, proof density, and a realistic
        price position — applied consistently across every submission.
      </p>
    </BlogArticle>
  );
}
