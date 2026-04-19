import type { Metadata } from "next";
import Link from "next/link";
import {
    Shield,
    CheckCircle2,
    ArrowRight,
    FileText,
    Award,
    Target,
    Zap,
    Gauge,
} from "lucide-react";

export const metadata: Metadata = {
    title: "GovCon Services for Veteran-Owned Businesses — Americurial",
    description: "Fixed-price federal contracting services for SDVOSB and VOSB firms. SAM setup + template library $1,500. Capability statement $750. Capture sprint $4,999. Every service includes a lifetime 20% CapturePilot discount.",
};

interface Service {
    slug: string;
    name: string;
    price: string;
    tag: string;
    icon: React.ElementType;
    colorClass: string;
    summary: string;
    includes: string[];
    duration: string;
}

const SERVICES: Service[] = [
    {
        slug: "sam-setup",
        name: "SAM Setup + Template Library",
        price: "$1,500",
        tag: "One-time setup",
        icon: Shield,
        colorClass: "emerald",
        summary:
            "Everything you need to go from zero to SAM-registered and bid-ready in under 30 days. Built for SDVOSB and VOSB firms starting their federal journey.",
        includes: [
            "Full SAM.gov registration (UEI + entity + CAGE code)",
            "VetCert eligibility review + filing prep",
            "NAICS code selection (top 3 for your business)",
            "Branded capability statement — your colors, your PDF",
            "Past-performance template library (Shipley-aligned)",
            "Proposal section starter pack (Technical Approach, Management, Past Perf, Pricing)",
            "One 60-minute strategy call with our capture lead",
            "Lifetime 20% CapturePilot discount",
        ],
        duration: "~30 days",
    },
    {
        slug: "capability-package",
        name: "Capability Statement Package",
        price: "$750",
        tag: "Fixed-fee deliverable",
        icon: FileText,
        colorClass: "blue",
        summary:
            "A pro-designed, evaluator-ready capability statement. Brand extraction, past-performance write-ups, and alignment to your top 3 NAICS codes.",
        includes: [
            "Brand extraction from your website",
            "3 rounds of revisions included",
            "Both PDF and editable Word versions",
            "Optimized for evaluator scan-ability (30-second test)",
            "NAICS + PSC + set-aside cert block",
            "Lifetime 20% CapturePilot discount",
        ],
        duration: "7 days",
    },
    {
        slug: "capture-sprint",
        name: "Capture Sprint",
        price: "$4,999",
        tag: "Per opportunity",
        icon: Target,
        colorClass: "amber",
        summary:
            "Full capture + proposal for ONE high-stakes opportunity. Fixed fee whether you win or lose.",
        includes: [
            "Opportunity pre-qualification (PWin analysis)",
            "Incumbent intelligence + competitor mapping",
            "Full capture plan + win themes",
            "Proposal drafting (Tech, Management, Past Perf, Pricing)",
            "Color-team reviews (pink, red, gold)",
            "Compliance matrix + Section L/M alignment",
            "Submission + post-submission Q&A support",
            "Lifetime 20% CapturePilot discount",
        ],
        duration: "30–60 days",
    },
    {
        slug: "growth-retainer",
        name: "Vet Growth Retainer",
        price: "$1,499/mo",
        tag: "Monthly",
        icon: Gauge,
        colorClass: "purple",
        summary:
            "Ongoing capture management for veteran-owned firms in active pursuit mode. CapturePilot Winner tier bundled at no extra cost.",
        includes: [
            "Capture management on up to 2 active pursuits",
            "Proposal review + red-team on every submission",
            "Teaming partner sourcing (JV + subcontract)",
            "CapturePilot Winner tier included ($299/mo value)",
            "Bi-weekly 60-minute strategy calls",
            "Admin-pushed opportunity alerts (we hand-pick; you get an email)",
        ],
        duration: "Month-to-month",
    },
];

export default function GovConServicesPage() {
    return (
        <main className="bg-white">
            <section className="py-20 px-6 bg-gradient-to-b from-stone-50 via-white to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                        <Shield className="w-4 h-4" />
                        Veterans helping veterans win
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
                        Productized services.
                        <br />
                        <span className="text-emerald-600">Transparent pricing.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8">
                        No more &ldquo;call for a custom quote.&rdquo; Every service has a fixed scope and a fixed fee —
                        and every service includes a{" "}
                        <strong className="text-emerald-700">lifetime 20% discount on CapturePilot</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="https://meetings-na2.hubspot.com/americurial/intro-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-stone-800 transition-all hover:scale-105"
                        >
                            Book a 20-min Vet-to-Vet Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="#services"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-100 text-stone-800 rounded-full font-bold hover:bg-stone-200 transition-colors"
                        >
                            See services
                        </a>
                    </div>
                </div>
            </section>

            <section id="services" className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        {SERVICES.map((s) => (
                            <ServiceCard key={s.slug} service={s} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-emerald-50 border-y border-emerald-100">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-2">
                                Every service includes a lifetime discount.
                            </h2>
                            <p className="text-stone-700 leading-relaxed max-w-3xl">
                                Agency clients get 20% off every paid CapturePilot tier — forever. Not just for the first
                                year. Not just while your retainer is active. Forever. One SAM setup saves you $1,000+
                                in annual software fees on top of the capture work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                        Built for veterans building federal revenue.
                    </h2>
                    <p className="text-stone-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                        We only take clients we can win for. That means SDVOSB, VOSB, and related small-business
                        certifications — firms serious about federal revenue and ready to execute.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-3">
                        {["SDVOSB", "VOSB", "8(a)", "HUBZone", "WOSB/EDWOSB", "Transitioning veterans"].map((c) => (
                            <div
                                key={c}
                                className="bg-white border border-stone-200 rounded-xl p-3 text-sm font-bold text-stone-800"
                            >
                                {c}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-stone-100">
                <div className="max-w-3xl mx-auto text-center">
                    <Award className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                        Not sure which service fits? Let&apos;s figure it out together.
                    </h2>
                    <p className="text-stone-600 mb-8">
                        20-minute call. No pitch deck. Vet-to-vet, honest answers.
                    </p>
                    <Link
                        href="https://meetings-na2.hubspot.com/americurial/intro-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700"
                    >
                        Book your call
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

function ServiceCard({ service }: { service: Service }) {
    const Icon = service.icon;
    const bgClass =
        service.colorClass === "emerald" ? "bg-emerald-100 text-emerald-700" :
        service.colorClass === "blue" ? "bg-blue-100 text-blue-700" :
        service.colorClass === "amber" ? "bg-amber-100 text-amber-700" :
        "bg-purple-100 text-purple-700";

    return (
        <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col hover:border-emerald-300 transition-colors">
            <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${bgClass} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                </div>
                <span className="bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    {service.tag}
                </span>
            </div>
            <h3 className="text-xl font-black text-stone-900 mb-1">{service.name}</h3>
            <p className="text-sm text-stone-500 mb-4">{service.duration}</p>
            <p className="text-stone-600 leading-relaxed mb-5">{service.summary}</p>

            <div className="flex items-baseline gap-2 mb-5">
                <span className="text-3xl font-black text-stone-900">{service.price}</span>
            </div>

            <ul className="space-y-2 mb-6 flex-1">
                {service.includes.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{i}</span>
                    </li>
                ))}
            </ul>

            <Link
                href="https://meetings-na2.hubspot.com/americurial/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-full font-bold text-sm bg-black text-white hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2"
            >
                Scope this service
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
}
