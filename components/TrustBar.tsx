"use client";

import { Marquee } from "@/components/Interactive";

type Badge = {
  src: string;
  alt: string;
  title: string;
  sub: string;
  href?: string;
};

const BADGES: Badge[] = [
  {
    src: "https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg",
    alt: "Google Partner",
    title: "Google Partner",
    sub: "Ads · Search · Display",
    href: "https://www.google.com/partners/agency?id=1587930644",
  },
  {
    src: "/badges/hubspot-partner.png",
    alt: "HubSpot Solutions Partner",
    title: "HubSpot Solutions Partner",
    sub: "Ex-Diamond Agency · CRM + Marketing",
  },
  {
    src: "/badges/microsoft-partner.png",
    alt: "Microsoft Gold Partner",
    title: "Microsoft Gold Partner",
    sub: "Dynamics 365 + Cloud Solutions",
  },
  {
    src: "/badges/sam-gov.jpg",
    alt: "SAM.gov Registered",
    title: "SAM.gov Registered",
    sub: "Active CAGE Code · Federal-ready",
    href: "https://sam.gov",
  },
  {
    src: "/badges/veteran-owned.png",
    alt: "U.S. Veteran-Owned Business",
    title: "U.S. Veteran-Owned",
    sub: "Two combat-tour founders",
  },
];

function BadgeCard({ b }: { b: Badge }) {
  const inner = (
    <div className="flex items-center gap-5 bg-stone-900/50 border border-white/10 hover:border-emerald-500/30 rounded-2xl pl-4 pr-7 py-4 transition-colors min-w-max">
      <div className="w-20 h-20 rounded-2xl bg-white/95 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={b.src}
          alt={b.alt}
          loading="lazy"
          className="w-full h-full object-contain scale-110"
        />
      </div>
      <div className="text-left">
        <p className="text-sm font-bold uppercase tracking-widest text-stone-100 leading-tight whitespace-nowrap">
          {b.title}
        </p>
        <p className="text-xs text-stone-500 leading-tight mt-1.5 whitespace-nowrap">
          {b.sub}
        </p>
      </div>
    </div>
  );

  if (b.href) {
    return (
      <a
        href={b.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={b.title}
      >
        {inner}
      </a>
    );
  }

  return <div aria-label={b.title}>{inner}</div>;
}

export function TrustBar() {
  return (
    <section
      aria-label="Certifications and Partners"
      className="border-y border-white/5 bg-stone-950 py-7 relative overflow-hidden"
    >
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none" />

      <Marquee speed="slow">
        {[...BADGES, ...BADGES].map((b, i) => (
          <div key={`${b.alt}-${i}`} className="mx-3">
            <BadgeCard b={b} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
