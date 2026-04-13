import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
            <FileText className="w-3 h-3" />
            Legal
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6">
            Terms of <span className="text-emerald-400">Service</span>
          </h1>

          <p className="text-stone-400 max-w-2xl mx-auto">
            Last updated: April 11, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 md:p-12 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                By accessing or using the website operated by Americurial LLC
                (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by
                these Terms of Service. If you do not agree to all of these
                terms, do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                2. Services
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                Americurial LLC provides software development, SaaS platform
                building, GovTech solutions, and related digital agency services.
                Specific project terms, deliverables, timelines, and fees are
                defined in individual service agreements or statements of work
                between the Company and the client.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                3. Intellectual Property
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                All content on this website, including text, graphics, logos,
                images, and software, is the property of Americurial LLC and is
                protected by applicable intellectual property laws. You may not
                reproduce, distribute, modify, or create derivative works from
                any content on this website without our express written
                permission. Ownership of deliverables created under client
                engagements is governed by the applicable service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                4. Use of Website
              </h2>
              <div className="space-y-3 text-sm text-stone-400 leading-relaxed">
                <p>You agree not to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Use our website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to any part of our website or systems</li>
                  <li>Interfere with or disrupt the integrity or performance of our website</li>
                  <li>Transmit any viruses, malware, or other harmful code</li>
                  <li>Collect or harvest any information from our website without authorization</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                5. Disclaimer of Warranties
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                Our website and services are provided &quot;as is&quot; and &quot;as
                available&quot; without any warranties of any kind, either express or
                implied. We do not warrant that our website will be
                uninterrupted, error-free, or free of viruses or other harmful
                components. We make no warranties regarding the accuracy,
                reliability, or completeness of any content on our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                To the fullest extent permitted by applicable law, Americurial
                LLC, its officers, directors, employees, and agents shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, use, goodwill, or other intangible losses, resulting from
                (a) your use of or inability to use our website or services; (b)
                any unauthorized access to or alteration of your data; or (c)
                any other matter relating to our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                7. Indemnification
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Americurial
                LLC and its officers, directors, employees, and agents from and
                against any claims, liabilities, damages, judgments, awards,
                losses, costs, or expenses (including reasonable attorney fees)
                arising out of or relating to your use of our website or
                violation of these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                8. Governing Law
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the State of Florida, without regard
                to its conflict of law provisions. Any disputes arising under or
                in connection with these terms shall be subject to the exclusive
                jurisdiction of the courts located in Duval County, Florida.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                9. Modifications
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be posted on this page with an updated
                revision date. Your continued use of our website after any
                changes constitutes your acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                10. Severability
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                If any provision of these Terms of Service is found to be
                unenforceable or invalid, that provision shall be limited or
                eliminated to the minimum extent necessary so that the remaining
                provisions shall remain in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                11. Contact Us
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                If you have questions about these Terms of Service, please
                contact us at{" "}
                <a
                  href="mailto:hello@americurial.com"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  hello@americurial.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
