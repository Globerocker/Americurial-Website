type Badge = {
  src: string;
  alt: string;
  title: string;
  href?: string;
  /** Tailwind height class — control display size individually */
  heightClass: string;
};

const BADGES: Badge[] = [
  {
    src: "https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg",
    alt: "Google Partner",
    title: "Google Partner — Americurial",
    href: "https://www.google.com/partners/agency?id=1587930644",
    heightClass: "h-14",
  },
  {
    src: "/badges/hubspot-partner.png",
    alt: "HubSpot Solutions Partner",
    title: "HubSpot Solutions Partner",
    heightClass: "h-14",
  },
  {
    src: "/badges/microsoft-partner.png",
    alt: "Microsoft Gold Partner",
    title: "Microsoft Gold Partner",
    heightClass: "h-12",
  },
  {
    src: "/badges/sam-gov.jpg",
    alt: "SAM.gov Registered",
    title: "Registered on SAM.gov",
    href: "https://sam.gov",
    heightClass: "h-12",
  },
  {
    src: "/badges/veteran-owned.png",
    alt: "U.S. Veteran-Owned Business",
    title: "U.S. Veteran-Owned Business",
    heightClass: "h-12",
  },
];

export function TrustBar() {
  return (
    <section
      aria-label="Certifications and Partners"
      className="border-y border-white/5 bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {BADGES.map((b) => {
          const img = (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={b.src}
              alt={b.alt}
              title={b.title}
              loading="lazy"
              className={`${b.heightClass} w-auto opacity-85 hover:opacity-100 transition-opacity`}
            />
          );

          if (b.href) {
            return (
              <a
                key={b.alt}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={b.title}
              >
                {img}
              </a>
            );
          }

          return (
            <div key={b.alt} aria-label={b.title}>
              {img}
            </div>
          );
        })}
      </div>
    </section>
  );
}
