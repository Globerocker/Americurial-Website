"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered fade-in-up animation wrapper.
 * Uses IntersectionObserver to reveal children when they enter the viewport.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transforms: Record<string, string> = {
    up: "translateY(32px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    scale: "scale(0.85)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? direction === "scale"
            ? "scale(1)"
            : "translate(0)"
          : transforms[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Scroll-triggered animated counter.
 * Counts up from 0 to `end` when the element enters the viewport.
 */
export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(eased * end);
            setDisplay(`${prefix}${value.toLocaleString()}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
