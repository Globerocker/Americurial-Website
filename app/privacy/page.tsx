import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
            <Shield className="w-3 h-3" />
            Legal
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6">
            Privacy <span className="text-emerald-400">Policy</span>
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
                1. Introduction
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                Americurial LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
                americurial.com. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-sm text-stone-400 leading-relaxed">
                <p>
                  <strong className="text-stone-300">
                    Personal Information:
                  </strong>{" "}
                  When you submit a contact form or book a call, we may collect
                  your name, email address, company name, and any information
                  you provide in your message.
                </p>
                <p>
                  <strong className="text-stone-300">
                    Usage Data:
                  </strong>{" "}
                  We automatically collect certain information when you visit our
                  website, including your IP address, browser type, operating
                  system, referring URLs, pages viewed, and the dates and times
                  of your visits.
                </p>
                <p>
                  <strong className="text-stone-300">
                    Analytics:
                  </strong>{" "}
                  We use third-party analytics services to help us understand
                  how visitors use our website. These services may collect
                  information about your online activities over time and across
                  different websites.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="space-y-2 text-sm text-stone-400 leading-relaxed list-disc list-inside">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you information about our services that you have requested</li>
                <li>To improve our website, services, and user experience</li>
                <li>To monitor and analyze usage patterns and trends</li>
                <li>To protect against unauthorized access and legal liability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                4. Data Sharing
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information with trusted service
                providers who assist us in operating our website and conducting
                our business, provided they agree to keep your information
                confidential. We may also disclose your information when required
                by law or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                5. Cookies and Tracking
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                Our website may use cookies and similar tracking technologies to
                enhance your experience. Cookies are small files stored on your
                device that help us understand how you interact with our site.
                You can control cookie preferences through your browser
                settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                6. Data Security
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                We implement reasonable security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the Internet or electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                7. Third-Party Links
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                external sites. We encourage you to review the privacy policies
                of any third-party websites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                Our services are not directed to individuals under the age of
                13. We do not knowingly collect personal information from
                children under 13. If we become aware that we have collected
                such information, we will take steps to delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. Your
                continued use of our website after any changes constitutes your
                acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                10. Contact Us
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                If you have questions about this Privacy Policy, please contact
                us at{" "}
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
