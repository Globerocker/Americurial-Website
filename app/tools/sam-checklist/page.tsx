import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LeadMagnetForm, LandingHero } from "@/components/LeadMagnet";
import { Eyebrow } from "@/components/Interactive";

const PHASES = [
  {
    phase: "Phase 1",
    title: "Before you touch SAM.gov",
    items: [
      "Confirm entity type (LLC, C-Corp, S-Corp)",
      "Obtain CAGE code (or plan for UEI-triggered assignment)",
      "State-of-incorporation active + good standing",
      "Open business bank account with W-9 on file",
      "Gather 3 years of revenue + payroll figures",
    ],
  },
  {
    phase: "Phase 2",
    title: "Core registration",
    items: [
      "Create login.gov account (required)",
      "Register for UEI (Unique Entity Identifier)",
      "Enter CORE data — entity, POC, banking (ACH)",
      "Complete Reps & Certs carefully (size standards matter)",
      "Add NAICS codes (up to 20, primary first)",
    ],
  },
  {
    phase: "Phase 3",
    title: "After submission",
    items: [
      "IRS validation step (takes 24–72 hours)",
      "CAGE validation (DoD — can take 7–10 days)",
      "Confirm &ldquo;Active&rdquo; status — not &ldquo;Submitted&rdquo;",
      "Download your registration confirmation PDF",
      "Set annual renewal reminder (SAM auto-expires)",
    ],
  },
  {
    phase: "Phase 4",
    title: "Optimization (the part most skip)",
    items: [
      "Match NAICS against SBA size standards (are you &ldquo;small&rdquo;?)",
      "Add PSC codes (Product Service Codes) — often forgotten",
      "Capability narrative — not a template, actual differentiators",
      "Upload capability statement as &ldquo;marketing material&rdquo;",
    ],
  },
];

export default function SamChecklistPage() {
  return (
    <>
      <LandingHero
        tag="PDF Checklist · 18 steps"
        title={
          <>
            SAM.gov Registration <span className="gradient-text">Checklist.</span>
          </>
        }
        subtitle="The exact 18-step checklist to clear SAM.gov registration in one pass — built from 200+ real registrations. Every attachment, every NAICS code, every verification step."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="mb-12">
            <LeadMagnetForm
              title="Get the PDF checklist"
              filename="Americurial-SAM-Registration-Checklist.pdf"
              bullets={[
                "18 steps across 4 phases — pre-registration, core, post-submission, optimization",
                "Every attachment and form ID listed in advance",
                "Known SAM.gov gotchas + how to avoid them (CAGE delay, IRS mismatch, etc.)",
                "Annual renewal reminder template included",
              ]}
            />
          </Reveal>

          <Reveal className="text-center mb-12">
            <Eyebrow align="center">Preview</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
              4 phases. <span className="gradient-text">18 checkpoints.</span>
            </h2>
          </Reveal>

          <div className="space-y-6">
            {PHASES.map((p, i) => (
              <Reveal key={p.phase} delay={i * 80}>
                <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <ClipboardList className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                      {p.phase}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-stone-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-white/5 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
            Want us to <span className="gradient-text">do the registration?</span>
          </h2>
          <p className="text-stone-400 mb-8">
            Our SAM.gov Launch Kit includes the registration, capability statement, template
            pack, and a 1-hour strategy call — $2,500 standard, $2,000 with veteran discount.
          </p>
          <Link
            href="/pricing#productized"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
          >
            SAM.gov Launch Kit <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
