import Link from "next/link";
import {
  FileText,
  ArrowRight,
  HardHat,
  Server,
  Stethoscope,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LeadMagnetForm, LandingHero } from "@/components/LeadMagnet";
import { Eyebrow, TiltCard } from "@/components/Interactive";

const TEMPLATES = [
  {
    icon: HardHat,
    industry: "Construction & Facilities",
    naics: "NAICS 23, 561",
    color: "amber",
    highlights: [
      "Built around per-project past performance",
      "Bonding capacity + safety record callouts",
      "Set-aside badge stack for SDVOSB/HUBZone",
    ],
  },
  {
    icon: Server,
    industry: "IT Services & Cybersecurity",
    naics: "NAICS 541511, 541512, 541519",
    color: "emerald",
    highlights: [
      "CMMC level + clearance signal prominent",
      "Contract vehicles (GSA, 8(a) STARS, SEWP)",
      "Technical skill matrix layout",
    ],
  },
  {
    icon: Briefcase,
    industry: "Professional Services",
    naics: "NAICS 541 general",
    color: "emerald",
    highlights: [
      "Methodology + framework emphasis",
      "Key personnel short bios with clearances",
      "Case-study teasers with $ won",
    ],
  },
  {
    icon: Stethoscope,
    industry: "Healthcare & Medical",
    naics: "NAICS 621, 622, 339",
    color: "amber",
    highlights: [
      "VA contract history front-and-center",
      "Compliance certs (HIPAA, CAP, Joint Commission)",
      "Staffing ratios + response-time metrics",
    ],
  },
  {
    icon: Sparkles,
    industry: "Janitorial & Grounds",
    naics: "NAICS 561720, 561730",
    color: "emerald",
    highlights: [
      "Green cleaning certs (Green Seal, LEED)",
      "Square-footage + facility-type callouts",
      "24/7 response capability",
    ],
  },
];

export default function CapabilityPackPage() {
  return (
    <>
      <LandingHero
        tag="5 Templates · PDF + DOCX + Figma"
        title={
          <>
            Capability Statement <span className="gradient-text">Template Pack.</span>
          </>
        }
        subtitle="Five branch-ready capability statement templates — construction, IT, professional services, healthcare, janitorial. Editable in Word or Figma. Used by 200+ veteran-owned firms."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="mb-12">
            <LeadMagnetForm
              title="Download all 5 templates"
              filename="Americurial-Capability-Pack.zip"
              bullets={[
                "5 industry-specific layouts — construction, IT, professional services, healthcare, janitorial",
                "Editable Word (.docx) + Figma file for each",
                "Annotated PDF explaining every section",
                "Free re-brand with your logo + colors (30-min Figma tutorial included)",
              ]}
            />
          </Reveal>

          <Reveal className="text-center mb-12">
            <Eyebrow align="center">What&apos;s inside</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
              Five templates. <span className="gradient-text">Five industries.</span>
            </h2>
            <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
              Each template is tuned to what evaluators in that industry actually look for —
              we&apos;ve reviewed 200+ CAPs to build these.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {TEMPLATES.map((t, i) => {
              const Icon = t.icon;
              const isAmber = t.color === "amber";
              return (
                <Reveal key={t.industry} delay={i * 80}>
                  <TiltCard max={4}>
                    <div className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 h-full transition-all hover-lift">
                      <div className="flex items-center gap-4 mb-5">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                            isAmber
                              ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                              : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{t.industry}</h3>
                          <p className="text-xs text-stone-500">{t.naics}</p>
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {t.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-sm text-stone-300 flex items-start gap-2"
                          >
                            <span
                              className={
                                isAmber ? "text-amber-400" : "text-emerald-400"
                              }
                            >
                              •
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-white/5 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <FileText className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
            Want a <span className="gradient-text">custom one?</span>
          </h2>
          <p className="text-stone-400 mb-8">
            Our Capability Statement Pro package gives you a fully branded, editable file and
            3 revisions — $1,200 standard, $960 with the veteran discount.
          </p>
          <Link
            href="/pricing#productized"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
          >
            Capability Statement Pro <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
