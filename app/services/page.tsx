import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  Shield,
  BarChart3,
  Palette,
  RefreshCw,
  CheckCircle2,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "SaaS Development",
    desc: "Full-stack product builds from zero to launch. We architect, design, and ship subscription software with the infrastructure to scale from day one.",
    bullets: [
      "Multi-tenant architecture with role-based access",
      "Stripe billing integration and subscription management",
      "Admin dashboards, onboarding flows, and analytics",
      "CI/CD pipelines with staging and production environments",
    ],
  },
  {
    icon: Globe,
    title: "Web & Digital Products",
    desc: "High-performance marketing sites, client portals, and internal tools. Conversion-focused design backed by bulletproof engineering.",
    bullets: [
      "SEO-optimized Next.js sites with sub-second load times",
      "Custom CMS integrations and dynamic content",
      "Responsive design across all devices and browsers",
      "Analytics, tracking, and conversion optimization",
    ],
  },
  {
    icon: Shield,
    title: "GovTech Solutions",
    desc: "Federal-grade platforms for government contractors and agencies. Compliance-ready, data-rich, and built to handle mission-critical workloads.",
    bullets: [
      "SAM.gov, USASpending, and FPDS data integration",
      "NAICS/PSC classification and opportunity matching",
      "Contractor readiness and compliance scoring",
      "FedRAMP-aware architecture and security hardening",
    ],
  },
  {
    icon: BarChart3,
    title: "AI & Data Platforms",
    desc: "Machine learning pipelines, intelligent matching engines, and AI-powered automation embedded directly into production-grade systems.",
    bullets: [
      "OpenAI and custom model integration",
      "Data ingestion, ETL pipelines, and enrichment",
      "Intelligent scoring and recommendation engines",
      "Natural language processing and document analysis",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Design Systems",
    desc: "Cohesive visual identities and component libraries that scale across products. Every pixel intentional, every interaction considered.",
    bullets: [
      "Brand identity, logo, and visual language",
      "Tailwind-based design system with reusable components",
      "Dark and light theme support",
      "Figma-to-code design handoff and implementation",
    ],
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support & Iteration",
    desc: "Software is never finished. We provide dedicated engineering support, feature iteration, and performance optimization on a retainer basis.",
    bullets: [
      "Weekly sprint cycles with priority backlog",
      "Performance monitoring and optimization",
      "Security patches and dependency management",
      "Feature development and A/B testing",
    ],
  },
];

const TECH_STACK = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Supabase", category: "Database" },
  { name: "Vercel", category: "Hosting" },
  { name: "Stripe", category: "Payments" },
  { name: "OpenAI", category: "AI" },
  { name: "Python", category: "Backend" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-emerald-500/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-emerald-500/[0.03]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
            <Code2 className="w-3 h-3" />
            Services
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            What We <span className="text-emerald-400">Build</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            End-to-end software engineering for companies that need to ship
            fast, scale smart, and stay ahead. From SaaS platforms to
            federal-grade GovTech &mdash; we handle the full stack.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="group bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-8 transition-all hover:bg-stone-900/60"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <svc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <ul className="space-y-2.5">
                  {svc.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-stone-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                Our Tech Stack
              </span>
              <div className="h-px w-8 bg-emerald-500/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Battle-Tested <span className="text-emerald-400">Tools</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              We pick the stack that ships fastest and scales best. No resume-driven development &mdash; every tool earns its place.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="bg-stone-900/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-4 text-center transition-all hover:bg-stone-900/60 group"
              >
                <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {tech.name}
                </p>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-950 to-emerald-950/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            Tell us what you&apos;re building. We&apos;ll scope it, price it,
            and tell you exactly how fast we can deliver.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://meetings-na2.hubspot.com/americurial/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 glow-emerald"
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
