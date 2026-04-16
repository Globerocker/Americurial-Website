import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  Services: [
    { href: "/services", label: "All Services" },
    { href: "/services/saas", label: "SaaS Development" },
    { href: "/services/govtech", label: "GovTech Solutions" },
    { href: "/services/ai", label: "AI Integration" },
    { href: "/services/web", label: "Web Development" },
  ],
  "Who We Serve": [
    { href: "/for/agencies", label: "For Agencies" },
    { href: "/for/startups", label: "For Startups" },
    { href: "/for/veterans", label: "For Veterans" },
    { href: "/for/smb", label: "For Small Business" },
    { href: "/capturepilot", label: "CapturePilot Case Study" },
  ],
  Insights: [
    { href: "/blog", label: "All Articles" },
    { href: "/blog/ai-content-marketing", label: "AI Content Marketing" },
    { href: "/blog/govtech-trends-2026", label: "GovTech Trends" },
    { href: "/blog/veteran-owned-business-growth", label: "Veteran Growth" },
    { href: "/blog/saas-mvp-launch-guide", label: "SaaS MVP Guide" },
    { href: "/about", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-stone-950 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo-white.png"
              alt="Americurial"
              width={140}
              height={48}
              className="h-10 w-auto opacity-80 mb-4"
            />
            <p className="text-xs text-stone-500 leading-relaxed mb-4">
              Veteran-owned digital agency building software that wins.
              Based in Jacksonville, FL.
            </p>
            <p className="text-[10px] text-stone-600 uppercase tracking-widest font-bold">
              SDVOSB / Veteran-Owned
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-4">
                {title}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-400 hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Americurial LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-stone-600">
            <Link href="/privacy" className="hover:text-stone-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-stone-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
