"use client";

import {
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react";

/**
 * 3D tilt card — rotates subtly toward cursor. Wrap any card to upgrade feel.
 */
export function TiltCard({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: ReactMouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${
      -y * max
    }deg) translateZ(0)`;
  }
  function onLeave() {
    const el = ref.current;
    if (el)
      el.style.transform =
        "perspective(900px) rotateY(0) rotateX(0) translateZ(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Infinite horizontal marquee. Duplicates children once for seamless loop.
 */
export function Marquee({
  children,
  speed = "normal",
  className = "",
}: {
  children: ReactNode;
  speed?: "normal" | "slow";
  className?: string;
}) {
  const cls = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex w-max ${cls}`}>
        <div className="flex items-center gap-10 pr-10">{children}</div>
        <div className="flex items-center gap-10 pr-10" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Reading-progress bar — scroll-linked, position:fixed below nav.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(scrolled / total, 1) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="reading-progress"
      style={{ transform: `scaleX(${progress})`, width: "100%" }}
    />
  );
}

/**
 * Scrollspy TOC — highlights current section based on scroll position.
 */
export function TableOfContents({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-32 hidden lg:block">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500 mb-4">
        On This Page
      </p>
      <ul className="space-y-2 border-l border-white/5 pl-4">
        {items.map((i) => {
          const decoded = i.label
            .replace(/&ldquo;/g, "\u201C")
            .replace(/&rdquo;/g, "\u201D")
            .replace(/&apos;/g, "\u2019")
            .replace(/&amp;/g, "&");
          return (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                title={decoded}
                className={`block text-sm transition-colors py-1 ${
                  active === i.id
                    ? "text-emerald-400 font-bold"
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                {decoded}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/**
 * Live opportunity ticker — simulates a scrolling feed of federal matches.
 */
export function LiveTicker({
  items,
}: {
  items: { agency: string; title: string; score: number }[];
}) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 3200);
    return () => clearInterval(t);
  }, [items.length]);
  const cur = items[idx];
  return (
    <div className="bg-stone-900/60 border border-white/10 rounded-xl p-4 flex items-center gap-4">
      <div className="relative">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 live-pulse" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400 mb-1">
          Live · {cur.agency}
        </p>
        <p className="text-sm text-white font-bold truncate">{cur.title}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-stone-500">Match</p>
        <p className="text-lg font-black text-emerald-400 tabular-nums">
          {cur.score}%
        </p>
      </div>
    </div>
  );
}

/**
 * Radar pulse ring — decorative, sits behind hero elements.
 */
export function RadarRings({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <div className="relative w-full h-full">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-emerald-500/10"
            style={{
              animation: `contourPulse ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
              transform: `scale(${0.5 + i * 0.25})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Section eyebrow — consistent label used across every page section.
 */
export function Eyebrow({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "center";
}) {
  const justify = align === "center" ? "justify-center" : "";
  return (
    <div className={`flex items-center gap-3 mb-6 ${justify}`}>
      <div className="h-px w-8 bg-emerald-500/40" />
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
        {children}
      </span>
      {align === "center" && <div className="h-px w-8 bg-emerald-500/40" />}
    </div>
  );
}
