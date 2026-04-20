import Link from "next/link";
import type { Metadata } from "next";
import { BlogArticle, Callout, Section, CheckList } from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "The Capability Statement That Actually Wins Contracts",
  description:
    "6 essential sections, the 3 mistakes that filter you out, and the veteran-positioning angle nobody teaches. With annotated examples.",
  alternates: {
    canonical: "https://www.americurial.com/blog/capability-statement-guide",
  },
};

const TOC = [
  { id: "what-it-is", label: "What a capability statement is (and isn&apos;t)" },
  { id: "six-sections", label: "The 6 essential sections" },
  { id: "veteran-angle", label: "The veteran-positioning angle" },
  { id: "design", label: "Design — looks do matter" },
  { id: "mistakes", label: "3 mistakes that kill CAPs" },
  { id: "next", label: "Where to go from here" },
];

export default function Post() {
  return (
    <BlogArticle
      title="The Capability Statement That Actually Wins Contracts"
      subtitle="6 essential sections, the 3 mistakes evaluators use to filter you out, and the veteran-positioning angle nobody teaches."
      date="April 18, 2026"
      readTime="10 min read"
      category="Capability Statement"
      toc={TOC}
      relatedSlugs={[
        { slug: "sam-gov-registration-for-veterans", title: "SAM.gov Registration Playbook" },
        { slug: "proposal-writing-for-small-primes", title: "Proposal Writing for Small Primes" },
      ]}
    >
      <p>
        A capability statement (CAP) is the one-page document that decides whether a contracting
        officer invites you to quote on a micro-purchase, whether a prime invites you to team,
        and whether a program office includes you in their next Sources Sought outreach. It is
        also one of the most mangled documents in all of GovCon.
      </p>

      <p>
        We&apos;ve reviewed 200+ capability statements from veteran-owned firms at Americurial.
        Most are unreadable — walls of text, no hierarchy, no proof. Here&apos;s what works.
      </p>

      <Section id="what-it-is" title="What a capability statement is (and isn&apos;t)" />

      <p>A capability statement is:</p>
      <ul>
        <li>
          <strong>One page.</strong> Both sides if you must, but ideally one.
        </li>
        <li>
          <strong>Scannable in 30 seconds.</strong> A contracting officer opens it, runs their
          eye across the page, and decides whether to read more.
        </li>
        <li>
          <strong>A marketing document, not a resume.</strong> Your biography doesn&apos;t matter
          as much as what you&apos;ve delivered.
        </li>
      </ul>

      <p>It is not:</p>
      <ul>
        <li>Your company brochure. That&apos;s a different document.</li>
        <li>Your proposal. That comes later, after this gets you in the door.</li>
        <li>A resume of the owner. Nobody cares about your 2009 startup.</li>
      </ul>

      <Callout variant="tip" title="The 30-second test">
        Print your CAP. Hand it to someone who doesn&apos;t know your business. Give them 30
        seconds. Then ask: what do you do, where do you do it, who&apos;s your customer, and what
        makes you different? If they can&apos;t answer all four, redesign it.
      </Callout>

      <Section id="six-sections" title="The 6 essential sections" />

      <h3>1. Header — identity at a glance</h3>
      <p>
        Top strip. Logo on the left. Company name, tagline, and set-aside cert badges on the
        right. This is what shows up in search-result thumbnails, so it needs to tell your story
        in under a second.
      </p>
      <p>
        <strong>Include:</strong> DUNS / UEI, CAGE code, website, phone, email, all in an
        easy-scan row.
      </p>

      <h3>2. Core competencies — what you do</h3>
      <p>
        Four to six bullets of services. Short phrases, not paragraphs. Each should map to a
        NAICS code you hold. Example:
      </p>
      <blockquote>
        <strong>Core Competencies</strong>
        <br />• Facility O&amp;M &amp; grounds maintenance (NAICS 561720)
        <br />• HVAC installation &amp; service (NAICS 238220)
        <br />• Janitorial &amp; custodial services (NAICS 561720)
        <br />• Emergency response &amp; 24/7 dispatch
      </blockquote>

      <h3>3. Past performance — proof</h3>
      <p>
        Three to five recent contracts. For each: agency, contract value, period of
        performance, your role (prime or sub), and the outcome. One line each. If you don&apos;t
        have federal past performance yet, use commercial — <em>but label it clearly</em>.
      </p>

      <h3>4. Differentiators — why you</h3>
      <p>
        This is the section most people screw up. Do not write &ldquo;superior customer
        service.&rdquo; Write the <em>specific capability</em> that separates you from
        competitors. Examples:
      </p>
      <ul>
        <li>&ldquo;24/7 emergency response within 2 hours of dispatch — documented SLA&rdquo;</li>
        <li>&ldquo;100% W-2 technicians — no subcontractor labor&rdquo;</li>
        <li>&ldquo;Green Seal GS-42 certified cleaning processes&rdquo;</li>
        <li>&ldquo;Two founders with 14+ years combined DoD operations experience&rdquo;</li>
      </ul>

      <h3>5. Codes &amp; certifications</h3>
      <p>
        NAICS codes (numeric, with brief descriptions), PSC codes if relevant, and every
        certification you hold. Display the cert logos visually. For veterans:
      </p>
      <CheckList
        items={[
          "SDVOSB / VOSB badge (with certification date)",
          "HUBZone (if applicable)",
          "8(a) — if enrolled, with enrollment date",
          "WOSB / EDWOSB (if applicable)",
          "State-level set-aside certs (e.g., Minority Business Enterprise)",
          "Industry-specific certs (CMMC, ISO, OSHA, etc.)",
        ]}
      />

      <h3>6. Contact block</h3>
      <p>
        Bottom strip. Primary contact with direct phone + email. Not &ldquo;info@&rdquo; — a
        named person. This matters for relationship-building.
      </p>

      <Section id="veteran-angle" title="The veteran-positioning angle" />

      <p>
        Most capability statements list set-aside status as a checkbox. Yours should use it as a{" "}
        <strong>narrative thread</strong>.
      </p>

      <p>
        Evaluators respond to service-connection stories. A line under your tagline that reads
        &ldquo;Veteran-owned. Navy Boarding Team operator turned federal contractor&rdquo; tells
        a story your competitors can&apos;t replicate. It&apos;s the human detail that
        differentiates you from the other 5,000 SDVOSBs in the registry.
      </p>

      <p>For how to frame your service:</p>
      <ul>
        <li>Branch + role + notable deployment or unit (one line, not a war story)</li>
        <li>How it shaped your operational discipline (one sentence)</li>
        <li>What it translates to for the federal customer (one sentence)</li>
      </ul>

      <Callout variant="vet" title="Real examples">
        <strong>Weak:</strong> &ldquo;Owned and operated by a veteran.&rdquo;<br />
        <strong>Strong:</strong> &ldquo;Founded by a former Army infantryman, two Afghanistan
        tours. 10 years of operational planning discipline applied to federal facilities O&amp;M.&rdquo;
      </Callout>

      <Section id="design" title="Design — looks do matter" />

      <p>
        A capability statement that looks cheap gets treated as cheap. You do not need to hire a
        brand agency, but you do need:
      </p>
      <ul>
        <li>
          <strong>A real logo</strong> — vector, not a raster screenshot
        </li>
        <li>
          <strong>A two-color palette</strong> — primary + accent, consistent with your brand
        </li>
        <li>
          <strong>Proper typography</strong> — one serif or sans-serif, not Comic Sans or
          Papyrus
        </li>
        <li>
          <strong>White space</strong> — margins exist for a reason
        </li>
        <li>
          <strong>Visual hierarchy</strong> — section headers clearly distinct from body copy
        </li>
      </ul>

      <p>
        Export as a high-quality PDF. Host a link on your website. Embed it in SAM.gov
        marketing materials. Carry printed copies to every APEX Accelerator event.
      </p>

      <Section id="mistakes" title="3 mistakes that kill CAPs" />

      <h3>1. Walls of text</h3>
      <p>
        Paragraphs of 5+ lines get skipped. Always use bullets, short phrases, visual blocks.
        If it reads like a Word doc, it looks like a Word doc, and it gets treated accordingly.
      </p>

      <h3>2. Vague past performance</h3>
      <p>
        &ldquo;Performed janitorial services for a federal agency&rdquo; is worthless. Specify:{" "}
        <em>which agency, what building, what square footage, what contract value, what period
        of performance, what outcome</em>. Numbers carry credibility.
      </p>

      <h3>3. No contact person</h3>
      <p>
        &ldquo;Contact: info@company.com&rdquo; signals &ldquo;I don&apos;t own this.&rdquo; Name
        a human. Include their title. Include a direct cell.
      </p>

      <Section id="next" title="Where to go from here" />

      <p>Once your CAP is designed, put it to work:</p>
      <CheckList
        items={[
          "Upload to SAM.gov as Marketing Material",
          "Post on your website as /capability-statement.pdf",
          "Attach to every Sources Sought response",
          "Include in every teaming agreement outreach",
          "Send quarterly to your APEX Accelerator counselor",
          "Refresh every 6 months as past performance grows",
        ]}
      />

      <Callout variant="info" title="Want help?">
        Our{" "}
        <Link href="/pricing#productized">
          <strong>Capability Statement Pro</strong>
        </Link>{" "}
        service delivers a branded 1-page CAP with editable master file, NAICS/PSC mapping, and
        3 revisions — $1,200 standard, $960 for verified veterans. Or grab the{" "}
        <Link href="/tools/capability-pack">
          <strong>free template pack</strong>
        </Link>{" "}
        (5 industry templates).
      </Callout>

      <h2>The bottom line</h2>
      <p>
        A capability statement is not a brochure. It&apos;s a weapons-grade marketing tool that
        either gets you invited into the room or keeps you out. Spend real time on it.
        Iterate. Get feedback from a contracting officer if you can. The document that takes
        you two days to get right will work for the next three years.
      </p>
    </BlogArticle>
  );
}
