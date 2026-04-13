"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/capturepilot", label: "CapturePilot" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/pricing", label: "Pricing" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo-white.png"
            alt="Americurial"
            width={160}
            height={32}
            className="h-7 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://meetings-na2.hubspot.com/americurial/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors flex items-center gap-2"
          >
            Book a Call <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-stone-400 hover:text-white"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-stone-950 border-t border-white/5 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-bold text-stone-300 hover:text-white transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://meetings-na2.hubspot.com/americurial/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-emerald-600 text-white text-center text-sm font-bold py-3 rounded-xl mt-4"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
