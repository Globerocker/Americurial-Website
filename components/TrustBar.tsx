import { Award, ShieldCheck, Workflow, Boxes } from "lucide-react";

export function TrustBar() {
  return (
    <section
      aria-label="Certifications and Partners"
      className="border-y border-white/5 bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-stone-400">
        <a
          href="https://www.google.com/partners/agency?id=1587930644"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Partner — Americurial"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
            alt="Google Partner"
            width={120}
            height={120}
            loading="lazy"
            className="h-12 w-auto"
          />
        </a>

        <div className="h-8 w-px bg-white/10 hidden sm:block" />

        <TrustChip
          icon={ShieldCheck}
          label="SAM.gov Registered"
          sub="Active CAGE Code"
        />
        <TrustChip
          icon={Award}
          label="Veteran-Owned"
          sub="SDVOSB Pending"
        />
        <TrustChip
          icon={Workflow}
          label="HubSpot Partner"
          sub="Ex-Diamond Agency"
        />
        <TrustChip
          icon={Boxes}
          label="Microsoft Partner"
          sub="Dynamics 365"
        />
      </div>
    </section>
  );
}

function TrustChip({
  icon: Icon,
  label,
  sub,
}: {
  icon: typeof Award;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-stone-200 leading-tight">
          {label}
        </p>
        <p className="text-[10px] text-stone-500 leading-tight mt-0.5">{sub}</p>
      </div>
    </div>
  );
}
