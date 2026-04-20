import Link from "next/link";
import type { Metadata } from "next";
import { BlogArticle, Callout, Section, CheckList } from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Sources Sought Is Your Unfair Advantage. Here&apos;s How to Use It.",
  description:
    "80% of federal winners responded to Sources Sought. The 6-month pre-RFP playbook, with templates and a realistic timeline.",
  alternates: {
    canonical: "https://www.americurial.com/blog/sources-sought-playbook",
  },
};

const TOC = [
  { id: "what", label: "What Sources Sought actually is" },
  { id: "why", label: "Why 80% of winners respond" },
  { id: "timing", label: "The 6-month pre-RFP timeline" },
  { id: "response", label: "The response structure" },
  { id: "templates", label: "Templates &amp; examples" },
  { id: "after", label: "After you submit" },
];

export default function Post() {
  return (
    <BlogArticle
      title="Sources Sought Is Your Unfair Advantage. Here&apos;s How to Use It."
      subtitle="80% of federal winners responded to Sources Sought. The 6-month pre-RFP playbook, with templates and a realistic timeline."
      date="April 12, 2026"
      readTime="11 min read"
      category="Capture"
      toc={TOC}
      relatedSlugs={[
        { slug: "proposal-writing-for-small-primes", title: "Proposal Writing for Small Primes" },
        { slug: "set-aside-programs-veteran-guide", title: "The Set-Aside Stack" },
      ]}
    >
      <p>
        If you&apos;re only looking at RFPs, you&apos;re 6 months late to every competition.
        <strong> Sources Sought notices</strong> — the RFIs that agencies post before they write
        an RFP — are where the real shaping happens. Firms that respond to Sources Sought win
        the resulting contract 80% of the time (industry estimates vary from 60-85%, but the
        pattern is consistent).
      </p>

      <p>
        Most veteran-owned small businesses skip Sources Sought because the response &ldquo;doesn&apos;t
        pay.&rdquo; That&apos;s exactly backwards. Here&apos;s how to use them correctly.
      </p>

      <Section id="what" title="What Sources Sought actually is" />

      <p>
        A Sources Sought notice (also called &ldquo;Request for Information&rdquo; or RFI) is the
        government&apos;s way of asking: <em>&ldquo;Before we write a solicitation, who&apos;s
        out there capable of doing this?&rdquo;</em>
      </p>

      <p>The agency uses responses to answer three practical questions:</p>

      <ol>
        <li>
          <strong>Is there enough capable small business to set this aside?</strong> If at
          least 2 qualified small businesses respond, the Rule of Two requires them to set it
          aside for small business (or further — 8(a), HUBZone, SDVOSB).
        </li>
        <li>
          <strong>What&apos;s technically feasible?</strong> The agency shapes the eventual RFP
          around what respondents say is achievable, cost-effective, and realistic.
        </li>
        <li>
          <strong>Who has the capacity?</strong> Program offices make mental lists of who
          they&apos;ll invite to the pre-solicitation conference, who they&apos;ll flag for
          teaming conversations, and who they expect to compete hard.
        </li>
      </ol>

      <Callout variant="tip" title="The key insight">
        A Sources Sought response is not a proposal. It&apos;s a conversation-starter with the
        program office — typed in advance.
      </Callout>

      <Section id="why" title="Why 80% of winners respond" />

      <p>Three reasons the correlation is so strong:</p>

      <h3>1. You shape the RFP</h3>
      <p>
        Your response influences the requirements document. If you have a unique capability —
        say, a specific certification or a geographic presence — and you describe it clearly in
        your response, that capability often shows up as a mandatory requirement in the eventual
        RFP. Your competitors are now out before the game starts.
      </p>

      <h3>2. The program office already knows you</h3>
      <p>
        By the time the RFP drops, a contracting officer who remembers your Sources Sought
        response has a mental shortlist. You&apos;re not a cold entry in a pile of 40
        proposals — you&apos;re &ldquo;oh yeah, those folks from February.&rdquo;
      </p>

      <h3>3. You can force a set-aside</h3>
      <p>
        If you&apos;re a qualified small business (SDVOSB, 8(a), HUBZone), responding makes the
        Rule of Two math work in your favor. Two qualified responses = the agency <em>must</em>
        set it aside. One response = they can go full-and-open. You&apos;re literally controlling
        competitive structure by submitting.
      </p>

      <Section id="timing" title="The 6-month pre-RFP timeline" />

      <p>A realistic capture timeline when you spot a Sources Sought you want to pursue:</p>

      <CheckList
        items={[
          "Day 1: Spot the notice. Decide bid / no-bid in 48 hours.",
          "Day 3-5: Draft your response (4-8 pages).",
          "Day 7-14: Email the contracting officer with a question or brief intro.",
          "Day 15-21: Request a capabilities briefing (30-min call).",
          "Day 30-60: Build teaming relationships with other respondents.",
          "Day 60-90: Follow up; watch for pre-solicitation notices.",
          "Day 120-180: RFP drops. You&apos;ve done 4+ months of capture. Competitors are starting.",
        ]}
      />

      <Callout variant="warn" title="The 48-hour bid/no-bid discipline">
        Do not sit on a Sources Sought &ldquo;thinking about it.&rdquo; Either commit to
        responding within 48 hours or pass. Delay costs you the best shaping window.
      </Callout>

      <Section id="response" title="The response structure" />

      <p>A standard Sources Sought response is 4-8 pages and follows this structure:</p>

      <h3>1. Cover page</h3>
      <p>
        Your logo, company name, UEI, CAGE, cert stack (SDVOSB/HUBZone/8(a)/WOSB), and the
        notice number. Make it easy to file.
      </p>

      <h3>2. Executive summary (1 page)</h3>
      <p>
        3-4 paragraphs: who you are, what you understand the requirement to be, why you&apos;re
        relevant, and your high-level recommendation. Most contracting officers read this page
        and skim the rest.
      </p>

      <h3>3. Capability response (2-4 pages)</h3>
      <p>Answer every question in the notice, in order, with the same numbering. For each:</p>
      <ul>
        <li>
          <strong>Direct answer</strong> — can you do it, yes/no
        </li>
        <li>
          <strong>Supporting evidence</strong> — past performance citation, cert, staff
          credential
        </li>
        <li>
          <strong>Relevant detail</strong> — what&apos;s specific about your approach
        </li>
      </ul>

      <h3>4. Past performance (1-2 pages)</h3>
      <p>
        3-5 contracts with agency, dollar value, period, your role, and outcome. Mirror the
        requirement — don&apos;t list unrelated commercial work.
      </p>

      <h3>5. Recommendations (0.5 page)</h3>
      <p>
        This section is underused. Give the agency specific, professional recommendations about
        how to structure the eventual RFP:
      </p>
      <ul>
        <li>&ldquo;We recommend Sources Sought set aside for SDVOSB given the qualified pool.&rdquo;</li>
        <li>&ldquo;Consider splitting into 2 lots by geography to increase competition.&rdquo;</li>
        <li>&ldquo;Minimum technical requirements should include CMMC Level 2 given the data sensitivity.&rdquo;</li>
      </ul>

      <h3>6. Point of contact</h3>
      <p>Named person. Direct phone. Direct email. Available for follow-up.</p>

      <Section id="templates" title="Templates &amp; examples" />

      <p>
        We maintain a Sources Sought response template for every industry our clients operate
        in. Here&apos;s the high-level structure, ready to reuse:
      </p>

      <Callout variant="info" title="Response template outline">
        <strong>Cover</strong> — Logo, UEI, CAGE, cert stack, notice #<br />
        <strong>Page 1</strong> — Executive summary (3-4 paragraphs)<br />
        <strong>Pages 2-4</strong> — Capability response (Q1, Q2, Q3...)<br />
        <strong>Pages 5-6</strong> — Past performance (3-5 contracts)<br />
        <strong>Page 7</strong> — Recommendations + contact
      </Callout>

      <p>
        Never copy-paste prior responses verbatim. Contracting officers spot boilerplate
        immediately. Start with your template, rewrite the executive summary and recommendations
        for the specific notice.
      </p>

      <Section id="after" title="After you submit" />

      <p>Submission is the start, not the end. The 30 days after a Sources Sought response are where most of the capture value is created:</p>

      <CheckList
        items={[
          "Email the contracting officer a brief thank-you + offer to answer follow-up questions",
          "Request a 30-min capability briefing call (most COs will say yes if you ask)",
          "Attend the pre-solicitation conference if one is announced",
          "Monitor FBO / SAM.gov daily for the pre-solicitation or RFP notice",
          "Build teaming relationships with other respondents in the same NAICS",
          "Update your capture plan with intel from the briefing + response",
        ]}
      />

      <Callout variant="vet" title="Veteran-specific angle">
        If you&apos;re SDVOSB or VOSB, explicitly ask in your response whether the requirement
        could be set aside for veterans. Contracting officers respond to direct, well-reasoned
        requests. This is the &ldquo;ask&rdquo; most small firms skip.
      </Callout>

      <Callout variant="info" title="Want help responding?">
        Our{" "}
        <Link href="/pricing#productized">
          <strong>Sources Sought Sprint</strong>
        </Link>{" "}
        is a 5-business-day engagement on a single Sources Sought — full response, teaming
        recommendations, follow-up email, and intel brief. $1,800 standard, $1,440 for verified
        veterans.
      </Callout>

      <h2>The bottom line</h2>
      <p>
        Sources Sought is the single highest-leverage capture move a small veteran-owned firm
        can make. The responses take 4-8 hours. The upside is 6 months of relationship
        equity with a program office that&apos;s about to write an RFP. Nothing else in
        capture has that ratio.
      </p>

      <p>
        Respond to 2-3 per month. Keep the template tight. Build a routine around it. Twelve
        months in, you&apos;ll be on the mental shortlists of half a dozen program offices —
        and that&apos;s where real pipeline comes from.
      </p>
    </BlogArticle>
  );
}
