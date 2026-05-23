"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * Meta (Facebook) Pixel for americurial.com.
 *
 * - Fires PageView on mount (Pixel ID 973809792061593).
 * - Delegated click listener fires `Schedule` (standard event) for every
 *   intro-call CTA — any anchor whose href starts with the HubSpot meetings
 *   URL — so we don't have to touch the 17+ buttons scattered across pages.
 * - Contact-form `Lead` events are fired locally in app/contact/page.tsx.
 */
export default function MetaPixel() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("https://meetings-na2.hubspot.com/americurial/")) {
        const w = window as Window & { fbq?: (...args: unknown[]) => void };
        w.fbq?.("track", "Schedule", { source: window.location.pathname });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '973809792061593');
        fbq('track', 'PageView');
      `}</Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=973809792061593&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}
