"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New inquiry from ${form.name} — ${form.company || "No company"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@americurial.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

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
            <Mail className="w-3 h-3" />
            Get In Touch
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6">
            Let&apos;s <span className="text-emerald-400">Talk</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Ready to build something real? Reach out and
            we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Contact Form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-500/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                  Send a Message
                </span>
              </div>

              {submitted ? (
                <div className="bg-stone-900/40 border border-emerald-500/20 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent
                  </h3>
                  <p className="text-stone-400 mb-6">
                    Your email client should have opened with the message
                    pre-filled. If it didn&apos;t, you can email us directly at{" "}
                    <a
                      href="mailto:hello@americurial.com"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      hello@americurial.com
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", company: "", message: "" });
                    }}
                    className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-stone-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-stone-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-bold text-stone-300 mb-2"
                    >
                      Company{" "}
                      <span className="text-stone-600 font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-stone-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and goals..."
                      className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 glow-emerald"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right — Info Card */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-500/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-500">
                  Other Ways to Reach Us
                </span>
              </div>

              <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 space-y-8">
                {/* Book a Call */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Book a Call</h3>
                    <p className="text-sm text-stone-400 mb-3">
                      Schedule a 30-minute intro call to discuss your project and
                      see if we&apos;re a good fit.
                    </p>
                    <a
                      href="https://meetings-na2.hubspot.com/americurial/intro-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Schedule now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/5" />

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email</h3>
                    <a
                      href="mailto:hello@americurial.com"
                      className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      hello@americurial.com
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/5" />

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Location</h3>
                    <p className="text-sm text-stone-400">
                      Jacksonville, FL
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/5" />

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Hours</h3>
                    <p className="text-sm text-stone-400">
                      Monday &ndash; Friday, 9:00 AM &ndash; 5:00 PM ET
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-8 bg-gradient-to-br from-emerald-950/30 to-stone-900/40 border border-emerald-500/10 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  Prefer to talk now?
                </h3>
                <p className="text-sm text-stone-400 mb-6">
                  Book a free 30-minute strategy call. No pitch, just a real
                  conversation about what you&apos;re building.
                </p>
                <a
                  href="https://meetings-na2.hubspot.com/americurial/intro-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all inline-flex items-center gap-2 glow-emerald"
                >
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
