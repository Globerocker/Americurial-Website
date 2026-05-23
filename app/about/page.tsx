import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Target,
  Anchor,
  Flag,
  Heart,
  Crosshair,
  Users,
  Zap,
  Award,
  Compass,
  HeartHandshake,
  Music,
  Coffee,
  GraduationCap,
  Mountain,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard, Eyebrow } from "@/components/Interactive";

const VALUES = [
  {
    icon: Crosshair,
    title: "Execution Over Theater",
    desc: "We don&apos;t pitch decks about what we could win. We run the process, ship the proposal, and name the award. The scoreboard is public.",
  },
  {
    icon: Shield,
    title: "Veteran Values",
    desc: "Integrity, accountability, mission focus — the standards we held in uniform carry into every capture plan, every proposal, every Slack thread.",
  },
  {
    icon: HeartHandshake,
    title: "Skin in the Game",
    desc: "5% success fee isn&apos;t a feature — it&apos;s the business model. If you don&apos;t win, we don&apos;t profit. Our incentives are literally aligned with yours.",
  },
  {
    icon: Heart,
    title: "Veteran-First",
    desc: "The 20% lifetime discount is permanent. It&apos;s not a marketing hook — it&apos;s a tribute. Federal contracting was partly built for veterans, and we&apos;ll help you claim it.",
  },
];

const TIMELINE = [
  { year: "2009", event: "Andre enlists in the German Navy as Marine Infantry" },
  { year: "2011–2014", event: "Selection into Boarding Team special unit, two tours Operation Atalanta (anti-piracy, Horn of Africa)" },
  { year: "2010s", event: "Sergio serves as Canadian Army Infantry, two combat tours Afghanistan" },
  { year: "Post-service", event: "Both transition to tech — building software for operators, not committees" },
  { year: "2024", event: "Americurial founded — built CapturePilot the same year" },
  { year: "2026", event: "Agency + software hybrid serving veteran-owned businesses full-stack" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/25 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/5 blur-[140px]" />
        <div className="contour-circle w-[600px] h-[600px]" />
        <div className="contour-circle w-[900px] h-[900px]" style={{ animationDelay: "2s" }} />
        <div className="contour-circle w-[1200px] h-[1200px]" style={{ animationDelay: "4s" }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Shield className="w-3 h-3" />
            About Americurial
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 animate-fade-in-up-100">
            Built in uniform.
            <br />
            <span className="gradient-text">Refined in production.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-200">
            Two veterans — one from the German Navy, one from the Canadian Army — who decided
            the federal contracting market was broken for small veteran-owned firms. So we
            built the agency we wished we had.
          </p>
        </div>
      </section>

      {/* ── Founders side-by-side ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.05] blur-[120px] animate-orb-float" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-amber-500/[0.04] blur-[120px] animate-orb-float-slow" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal className="text-center mb-16">
            <Eyebrow align="center">The founders</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              Two veterans. <span className="gradient-text">One mission.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Andre */}
            <Reveal direction="left">
              <TiltCard max={4}>
                <div className="bg-stone-900/50 border border-emerald-500/20 rounded-3xl p-8 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-emerald-500/30 flex-shrink-0">
                        <Image
                          src="/team/andre-headshot.jpg"
                          alt="Andre Schuler, Co-Founder Americurial"
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 mb-1">
                          Co-Founder
                        </p>
                        <p className="text-2xl font-black text-white tracking-tight">
                          Andre Schuler
                        </p>
                        <p className="text-sm text-stone-400">Deutsche Marine · Boarding Team</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-stone-300 leading-relaxed text-sm">
                      <p>
                        Joined the German Navy as a Marineinfanterist — Marine Infantry — straight
                        out of Grundausbildung. After the regular infantry pipeline, Andre was
                        selected into the <strong className="text-white">Boarding Team</strong>, a
                        special maritime unit trained for vessel boarding, counter-piracy
                        interdiction, and interdiction search.
                      </p>
                      <p>
                        <strong className="text-white">Two tours on Operation Atalanta</strong> —
                        the EU anti-piracy mission off the Horn of Africa. The role: board
                        suspect vessels in international waters, clear spaces under time
                        pressure, make calls with incomplete information. Every minute mattered;
                        nothing got done by committee.
                      </p>
                      <p>
                        That operational tempo is what Americurial runs on. When an RFP drops,
                        the clock starts — and we move like we did boarding a ship at 04:00.
                      </p>
                      <p>
                        After service, Andre spent several years teaching in the German
                        school system — communication, business basics, IT. That&apos;s where
                        the coaching habit comes from. He can walk a five-person firm through
                        federal capture without making them feel small for asking the
                        beginner questions.
                      </p>
                      <p>
                        From there, six years as Head of Marketing inside a large
                        corporation — paid search, SEO, conversion teams, the whole funnel,
                        across multiple product lines. Before that, a HubSpot Diamond Partner
                        agency. Today he carries that as a certified HubSpot Partner and
                        Microsoft Partner for Dynamics 365.
                      </p>
                      <p>
                        That&apos;s the second engine inside Americurial: when a client needs
                        more than federal capture — a website that converts, an SEO problem
                        nobody&apos;s touched in two years, paid acquisition that&apos;s
                        leaking, or a CRM rollout that&apos;s gone sideways — Andre owns that
                        side while Sergio runs capture.
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Boarding Team", "Atalanta", "Head of Marketing", "HubSpot Partner", "Microsoft Dynamics", "Paid Acquisition", "SEO"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-6 relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/5">
                      <Image
                        src="/team/andre-boarding.jpg"
                        alt="Andre on a Boarding Team RIB during Operation Atalanta"
                        fill
                        sizes="(min-width: 768px) 500px, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                      <p className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
                        Boarding Team · Op Atalanta
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            {/* Sergio */}
            <Reveal direction="right" delay={150}>
              <TiltCard max={4}>
                <div className="bg-stone-900/50 border border-emerald-500/20 rounded-3xl p-8 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-emerald-500/30 flex-shrink-0">
                        <Image
                          src="/team/sergio-headshot.jpg"
                          alt="Sergio, Co-Founder Americurial"
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 mb-1">
                          Co-Founder
                        </p>
                        <p className="text-2xl font-black text-white tracking-tight">Sergio Gouveia</p>
                        <p className="text-sm text-stone-400">Canadian Army · Infantry</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-stone-300 leading-relaxed text-sm">
                      <p>
                        Enlisted in the Canadian Army as an Infantryman. Served with the
                        regular force and deployed on <strong className="text-white">two combat
                        tours in Afghanistan</strong> during the mission&apos;s most active
                        years — running patrols, owning ground, and working in units where the
                        standard of proof for any plan was whether it survived first contact.
                      </p>
                      <p>
                        That ground-truth discipline is what Sergio brings to every capture
                        plan: a proposal that looks perfect on paper is worthless if it
                        doesn&apos;t hold up under agency scrutiny, incumbent pressure, or a
                        contracting officer asking the uncomfortable question at the debrief.
                      </p>
                      <p>
                        Sergio runs the capture side at Americurial — pursuit decisions, Black
                        Hat reviews, competitor intelligence. He assumes the proposal will be
                        attacked, and plans backward from there.
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Infantry", "Afghanistan", "Two Tours", "Ground-Truth"].map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/5">
                      <Image
                        src="/team/sergio-team.jpg"
                        alt="Sergio with his Canadian Army infantry team in Afghanistan"
                        fill
                        sizes="(min-width: 768px) 500px, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                      <p className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
                        Canadian Army · Afghanistan
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why we built this ── */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950 relative overflow-hidden">
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal direction="left">
              <Eyebrow>Why Americurial exists</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                The government carved <span className="gradient-text-amber">$25B a year</span> for veteran-owned firms.
                <br />
                Most never see a cent.
              </h2>
              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  When we got out and started talking to other veterans who&apos;d gone
                  entrepreneurial, the pattern was identical: they knew SDVOSB existed. They
                  knew SAM.gov existed. They&apos;d heard of capability statements. And yet —
                  the federal pipeline was a closed loop. Intel lived at big primes. Consulting
                  cost $300/hr with no guarantee of a win. Software was priced for
                  enterprises.
                </p>
                <p>
                  So we built both. <strong className="text-white">CapturePilot</strong> first —
                  the SaaS platform that turned 40,000+ federal opportunities into a single feed
                  scored for small veteran-owned firms. Then <strong className="text-white">
                  Americurial</strong> — the agency that uses the same platform to run capture
                  for clients who&apos;d rather focus on delivery.
                </p>
                <p>
                  One bundle. Published prices. 20% veteran discount, always. 5% success fee so
                  our pay tracks your wins.
                </p>
                <p className="text-white font-bold">
                  That&apos;s the agency we wished existed when we started. Now it does.
                </p>
              </div>
            </Reveal>

            {/* Timeline */}
            <Reveal direction="right" delay={150}>
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Compass className="w-5 h-5 text-emerald-400" />
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                    Timeline
                  </p>
                </div>
                <ol className="relative border-l border-white/10 pl-6 space-y-6">
                  {TIMELINE.map((t, i) => (
                    <li key={`${t.year}-${i}`} className="relative">
                      <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-stone-950" />
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 mb-1">
                        {t.year}
                      </p>
                      <p className="text-sm text-stone-300 leading-relaxed">{t.event}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Eyebrow align="center">Operating principles</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Our <span className="gradient-text">values.</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Not a poster in the lobby. These decide every proposal strategy, every pricing
              call, every client conversation.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <TiltCard max={4}>
                  <div className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover:bg-stone-900/60 h-full">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                      <v.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                    <p
                      className="text-sm text-stone-400 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: v.desc }}
                    />
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company stats ── */}
      <section className="py-20 md:py-28 border-y border-white/5 bg-stone-950">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="bg-stone-900/50 border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
              <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-center">
                <div className="w-20 h-20 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <Target className="w-10 h-10 text-emerald-300" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 mb-2">
                    Americurial LLC
                  </p>
                  <p className="text-2xl font-black text-white mb-4 tracking-tight">
                    Veteran-Owned Small Business · Delaware C-Corp
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-2xl font-black text-emerald-400 tabular-nums">2024</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mt-1">
                        Founded
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-emerald-400 tabular-nums">40K+</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mt-1">
                        Opportunities Tracked
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-emerald-400 tabular-nums">2</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mt-1">
                        Veteran Founders
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-amber-400 tabular-nums">20%</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mt-1">
                        Veteran Discount
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <Eyebrow align="center">The rest of the crew</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Small team. <span className="gradient-text">Senior operators.</span>
            </h2>
            <div className="space-y-4 text-stone-400 leading-relaxed">
              <p>
                We keep the team lean on purpose. No account managers who pass your work to a
                junior. No middle layer. Every person who shows up on your account has shipped
                a federal proposal, run a capture plan, or written production software.
              </p>
              <p>
                Proposal writers, capture managers, and engineers — all with 10+ years average
                experience. Most with prior federal or military backgrounds. Everyone writes,
                everyone owns outcomes.
              </p>
            </div>
            <div className="mt-12 inline-flex items-center gap-4">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-stone-800 border-2 border-stone-950 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 text-emerald-500" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-stone-400">
                A small, senior crew — no layer of &ldquo;managers&rdquo;.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Off-Duty ── */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-stone-950 relative overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[120px] animate-orb-float-slow" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <Reveal className="text-center mb-12">
            <Eyebrow align="center">Off-duty</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
              Who you&apos;ll <span className="gradient-text">actually be talking to.</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              We don&apos;t hide behind &ldquo;the team&rdquo;. If you sign with
              Americurial, this is the room.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            <Reveal delay={0}>
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-400 mb-1">
                  Andre — Teaching habit
                </p>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Several years as a teacher in the German school system before
                  marketing. Why our Co-Pilot Coaching clients get patient
                  walk-throughs, not a fire-hose of GovCon jargon.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Mountain className="w-5 h-5" />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-400 mb-1">
                  Sergio — Ground habit
                </p>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Two combat tours in Afghanistan. Still assumes any plan
                  works until first contact. That paranoia is why our pursuit
                  decisions hold up under agency scrutiny.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Coffee className="w-5 h-5" />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-400 mb-1">
                  Small crew habit
                </p>
                <p className="text-sm text-stone-300 leading-relaxed">
                  No account managers, no overseas dev shop. The person who
                  picks up your Slack ping is the person doing the work. We
                  keep it that way on purpose.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Spotify card */}
          <Reveal delay={300} className="mt-8">
            <div className="bg-gradient-to-br from-emerald-950/30 via-stone-900/40 to-amber-950/20 border border-emerald-500/15 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
              <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Music className="w-7 h-7 text-emerald-300" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-400 mb-2">
                    What&apos;s playing in the office
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-2">
                    Right now it&apos;s mostly Creed.
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Andre&apos;s pick. A proper Americurial playlist is in the
                    works. Until then, here&apos;s the starter — the same
                    soundtrack a lot of late-night proposal edits got done to.
                  </p>
                </div>
                <a
                  href="https://open.spotify.com/artist/3IePvbB8bgZBKpcuMVcKMu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-full transition-all inline-flex items-center gap-2 whitespace-nowrap glow-emerald"
                >
                  Listen on Spotify <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] animate-orb-float-slow" />
        <div className="contour-circle w-[700px] h-[700px]" />

        <Reveal className="max-w-3xl mx-auto px-6 text-center relative">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6 animate-hero-float" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Let&apos;s see if we&apos;re the right fit.
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            15 minutes on the phone. If we&apos;re not right for you, we&apos;ll tell you —
            and probably recommend someone who is.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://meetings-na2.hubspot.com/americurial/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald"
            >
              Book a Call <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/for/veterans"
              className="bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-sm px-8 py-4 rounded-full transition-colors flex items-center gap-2"
            >
              <Award className="w-4 h-4" /> Veteran Program
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
