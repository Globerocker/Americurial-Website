import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.americurial.com";
  const now = new Date("2026-04-20");

  const core: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/capturepilot`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/capturepilot/for-agencies`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/veterans/verify`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];

  const services = [
    "services/saas",
    "services/web",
    "services/govtech",
    "services/ai",
    "services/govcon",
  ].map((p) => ({
    url: `${base}/${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const audiences = ["for/agencies", "for/startups", "for/veterans", "for/smb"].map((p) => ({
    url: `${base}/${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tools = [
    "tools",
    "tools/bid-no-bid",
    "tools/cert-path",
    "tools/first-million",
    "tools/capability-pack",
    "tools/sam-checklist",
  ].map((p) => ({
    url: `${base}/${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogIndex = {
    url: `${base}/blog`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  };

  const blogPosts = [
    "blog/sam-gov-registration-for-veterans",
    "blog/capability-statement-guide",
    "blog/set-aside-programs-veteran-guide",
    "blog/sources-sought-playbook",
    "blog/proposal-writing-for-small-primes",
    "blog/veteran-owned-business-growth",
  ].map((p) => ({
    url: `${base}/${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const legal = ["privacy", "terms"].map((p) => ({
    url: `${base}/${p}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...core, ...services, ...audiences, ...tools, blogIndex, ...blogPosts, ...legal];
}
