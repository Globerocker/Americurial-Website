import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.americurial.com";

  return [
    {
      url: base,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/services`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/pricing`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/capturepilot`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/blog/ai-content-marketing`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/govtech-trends-2026`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/veteran-owned-business-growth`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/saas-mvp-launch-guide`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
