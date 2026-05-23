import Link from "next/link";
import type { Metadata } from "next";
import { BlogArticle, Callout, Section, CheckList } from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Sources Sought Is Your Unfair Advantage",
  description:
    "About 80% of federal winners responded to Sources Sought first. Here's the six-month pre-RFP playbook with templates and a realistic timeline.",
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
      title="Sources Sought Is Your Unfair Advantage"
      subtitle="About 80% of federal winners responded to Sources Sought first. Here's the six-month pre-RFP playbook, with templates and a realistic timeline."
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
        A Sources Sought notice (sometimes posted as an RFI — Request for Information) is the
        government asking, in writing: <em>&ldquo;Before we write the solicitation, who&apos;s
        out there who could actually do this?&rdquo;</em>
      </p>

      <p>The agency uses the responses to figure out three things:</p>

      <ol>
        <li>
          <strong>Can we set this aside for small business?</strong> If at least two qualified
          small businesses respond, the Rule of Two kicks in and the agency has to set it
          aside (small business, or further — 8(a), HUBZone, SDVOSB).
        </li>
        <li>
          <strong>What&apos;s actually realistic?</strong> The eventual RFP gets shaped by what
          respondents say is achievable. If everyone says &ldquo;six-month delivery is too
          tight,&rdquo; the agency hears that.
        </li>
        <li>
          <strong>Who&apos;s on the shortlist?</strong> Program offices build mental notes —
          who to invite to the pre-solicitation conference, who to introduce to teaming
          partners, who they expect to bring a real proposal.
        </li>
      </ol>

      <Callout variant="tip" title="The key insight">
        A Sources Sought response is not a proposal. It&apos;s a conversation-starter with the
        program office — typed in advance.
      </Callout>

      <Section id="why" title="Why the 80% number isn't an accident" />

      <p>Three reasons the correlation is that strong:</p>

      <h3>1. You shape the RFP</h3>
      <p>
        Your response goes into the requirements draft. If you have a unique capability — a
        specific certification, a regional presence, a piece of equipment most don&apos;t own —
        and you describe it clearly, it often surfaces as a <em>mandatory</em> requirement in
        the final RFP. Half your competitors are out before the bid window opens.
      </p>

      <h3>2. The program office already knows your name</h3>
      <p>
        When the RFP drops, the contracting officer reads forty proposals. Yours is &ldquo;oh
        yeah, those folks from February.&rdquo; Everyone else is a cold entry. That&apos;s a
        small thing on paper and a huge thing in practice.
      </p>

      <h3>3. You can force a set-aside</h3>
      <p>
        If you&apos;re a qualified small business (SDVOSB, 8(a), HUBZone), your response makes
        the Rule of Two math work. Two qualified responses and the agency <em>has to</em> set it
        aside. One response and they can go full-and-open. By submitting, you&apos;re shaping
        the competitive structure of the contract before it exists.
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
        Three or four paragraphs. Who you are, what you read the requirement to be, why
        you&apos;re relevant, and one high-level recommendation. Most contracting officers
        read this page and skim the rest. Spend time here.
      </p>

      <h3>3. Capability response (2-4 pages)</h3>
      <p>Answer every question in the notice, in order, using the same numbering. For each:</p>
      <ul>
        <li>
          <strong>Direct answer</strong> — yes or no, no hedging
        </li>
        <li>
          <strong>Supporting evidence</strong> — a past performance citation, a cert, a named
          staff credential
        </li>
        <li>
          <strong>What&apos;s specific about your approach</strong> — one or two lines
        </li>
      </ul>

      <h3>4. Past performance (1-2 pages)</h3>
      <p>
        Three to five contracts. Agency, dollar value, period of performance, your role,
        outcome. Mirror the requirement — don&apos;t pad with unrelated commercial work, the
        evaluator will notice.
      </p>

      <h3>5. Recommendations (0.5 page)</h3>
      <p>
        Most small firms skip this. Don&apos;t. Give the agency specific, professional
        suggestions on how to structure the eventual RFP:
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
        We keep a Sources Sought response template for every industry our clients work in.
        High-level structure, ready to drop into your Word doc:
      </p>

      <Callout variant="info" title="Response template outline">
        <strong>Cover</strong> — Logo, UEI, CAGE, cert stack, notice #<br />
        <strong>Page 1</strong> — Executive summary (3-4 paragraphs)<br />
        <strong>Pages 2-4</strong> — Capability response (Q1, Q2, Q3...)<br />
        <strong>Pages 5-6</strong> — Past performance (3-5 contracts)<br />
        <strong>Page 7</strong> — Recommendations + contact
      </Callout>

      <p>
        Don&apos;t copy-paste old responses verbatim. Contracting officers spot boilerplate
        in about ten seconds. Start from your template, then rewrite the executive summary
        and recommendations against the specific notice. Sixty extra minutes here is worth
        more than the rest of the response combined.
      </p>

      <Section id="after" title="What happens after you submit" />

      <p>
        Submission is the start of the work, not the end. The thirty days after you send a
        Sources Sought response are where most of the capture value gets built:
      </p>

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

      <h2>So what does this actually look like as a habit?</h2>
      <p>
        Four to eight hours per response. You get six months of relationship equity with
        a program office that&apos;s about to write an RFP. We don&apos;t know another
        capture move with that ratio.
      </p>

      <p>
        Two or three responses a month. Keep the template tight, swap in the specifics each
        time. A year in, you&apos;re on the mental shortlists of half a dozen program offices.
        That&apos;s where pipeline actually comes from.
      </p>
    </BlogArticle>
  );
}
