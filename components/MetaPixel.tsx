"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Meta Pixel + FB SDK for americurial.com — env-driven, full instrumentation.
 *
 * Pulls IDs from env (NEXT_PUBLIC_META_PIXEL_ID + NEXT_PUBLIC_FB_APP_ID)
 * with fallback to the historical hardcoded values so the site never
 * loses tracking if env vars get blanked.
 *
 * What this component fires:
 *   - PageView on initial load (inline script) + every route change (hook)
 *   - Schedule on HubSpot-meetings link click (preserves prior behavior)
 *   - ButtonClick custom event for every button / link / [data-cp-track]
 *   - ScrollDepth at 25/50/75/100% page-scroll
 *   - TimeOnPage at 30 / 60 / 120 / 240 s
 *   - FormSubmit on every <form> submission
 *   - EngagedUser custom event when the visitor crosses 5 button-clicks
 *     in a single session — strong soft-conversion signal worth its
 *     own event for ad-account optimization
 *
 * PII-bearing Standard Events (Lead, Contact, CompleteRegistration) are
 * fired from form-handler components — they pass a Pixel event_id and
 * dual-fire server-side via /api/meta/capi-track for dedup.
 */
// .trim() guards against `echo "..." | vercel env add` leaving a trailing
// newline in the value, which would land inside fbq('init', '...') and
// silently break the Pixel.
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || "973809792061593";
const FB_APP_ID = process.env.NEXT_PUBLIC_FB_APP_ID?.trim() || "2029987627586940";
const ENGAGEMENT_CLICK_THRESHOLD = 5;

export default function MetaPixel() {
  const pathname = usePathname();

  // Route-change PageView. The inline init below fires the first one on
  // load; subsequent SPA navigations need this hook.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as Window & { fbq?: (...args: unknown[]) => void; __cp_pv_fired?: boolean };
    if (!w.fbq) return;
    if (!w.__cp_pv_fired) {
      w.__cp_pv_fired = true;
      return;
    }
    w.fbq("track", "PageView", { page_path: pathname });
  }, [pathname]);

  // Instrumentation: click delegation, scroll-depth, time-on-page,
  // form-submit, engagement threshold. Rebinds on route change so per-page
  // counters reset; the engagement click-counter is session-scoped via
  // sessionStorage so it survives navigation within the same tab.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as Window & { fbq?: (...args: unknown[]) => void };
    if (!w.fbq) return;

    const SESSION_KEY = "cp_click_count";
    const ENGAGED_KEY = "cp_engaged_fired";
    const getCount = () => parseInt(sessionStorage.getItem(SESSION_KEY) || "0", 10);

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.("a, button, [data-cp-track]") as HTMLElement | null;
      if (!target) return;
      const href = (target as HTMLAnchorElement).href || "";
      const label = (target.getAttribute("data-cp-track")
        || target.getAttribute("aria-label")
        || target.textContent
        || "").trim().slice(0, 80);

      // Special-case: HubSpot meetings link → Standard Event "Schedule"
      // for ad-account optimization. Preserves the prior behavior.
      if (href.startsWith("https://meetings-na2.hubspot.com/americurial/")) {
        w.fbq!("track", "Schedule", { source: window.location.pathname, content_name: label });
      }
      // Special-case: any link to /contact or labeled "Contact" → fire
      // Standard Event "Contact" so the ad account learns this CTA.
      if (/^\/?contact(\/|$)/i.test(href.replace(/^https?:\/\/[^/]+/, ""))
        || /^contact/i.test(label)) {
        w.fbq!("track", "Contact", { source: window.location.pathname, content_name: label });
      }

      // Always also emit a custom ButtonClick for Meta's pattern learning.
      w.fbq!("trackCustom", "ButtonClick", {
        content_name: label,
        element: target.tagName.toLowerCase(),
        href,
        page_path: window.location.pathname,
      });

      // Engagement threshold: 5+ clicks in this session → emit
      // "EngagedUser" once. Strong soft-conversion signal — these are
      // the people most likely to come back and convert.
      const next = getCount() + 1;
      sessionStorage.setItem(SESSION_KEY, String(next));
      if (next === ENGAGEMENT_CLICK_THRESHOLD && !sessionStorage.getItem(ENGAGED_KEY)) {
        sessionStorage.setItem(ENGAGED_KEY, "1");
        w.fbq!("trackCustom", "EngagedUser", {
          click_count: next,
          page_path: window.location.pathname,
        });
      }
    };

    const scrollHits = new Set<number>();
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) return;
      const pct = Math.round((doc.scrollTop / scrollable) * 100);
      const fire = (m: number) => {
        if (scrollHits.has(m)) return;
        scrollHits.add(m);
        w.fbq!("trackCustom", "ScrollDepth", { depth_pct: m, page_path: window.location.pathname });
      };
      if (pct >= 25) fire(25);
      if (pct >= 50) fire(50);
      if (pct >= 75) fire(75);
      if (pct >= 95) fire(100);
    };

    const timers: ReturnType<typeof setTimeout>[] = [];
    const dwell = (secs: number) => () => w.fbq!("trackCustom", "TimeOnPage", { seconds: secs, page_path: window.location.pathname });
    timers.push(setTimeout(dwell(30), 30_000));
    timers.push(setTimeout(dwell(60), 60_000));
    timers.push(setTimeout(dwell(120), 120_000));
    timers.push(setTimeout(dwell(240), 240_000));

    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement | null;
      if (!form) return;
      w.fbq!("trackCustom", "FormSubmit", {
        form_id: form.getAttribute("id") || "",
        form_name: form.getAttribute("name") || "",
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, { passive: true });
    document.addEventListener("submit", onSubmit, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
      window.removeEventListener("scroll", onScroll);
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return (
    <>
      {/*
       * Raw <script> (not next/script) so the snippet lands in the SSR HTML.
       * Meta's Event Setup Tool and domain crawler don't execute JS, so
       * <Script strategy="afterInteractive"> is invisible to them.
       */}
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit=function(){FB.init({appId:'${FB_APP_ID}',cookie:true,xfbml:true,version:'v22.0'});FB.AppEvents.logPageView();};(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://connect.facebook.net/en_US/sdk.js";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));`,
        }}
      />
    </>
  );
}
