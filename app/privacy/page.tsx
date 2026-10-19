import type { Metadata } from "next";
import Link from "next/link";
import Background from "../components/Background/Background";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how NuTab Digital collects, uses, shares, and protects personal information.",
  alternates: { canonical: "https://nutab.ca/privacy" },
  robots: "index, follow",
};

const updatedDate = "October 18, 2026";

export default function PrivacyPage() {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <Background />

      <div className="relative z-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-10 sm:pt-16">
        <article className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-black/60 sm:p-10">
          <header className="border-b border-black/10 pb-7 dark:border-white/10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0067e7]">
              NuTab Digital Inc.
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-sm opacity-70">Last updated: {updatedDate}</p>
          </header>

          <div className="mt-8 space-y-8 text-base leading-7 opacity-90">
            <p>
              NuTab Digital Inc. (&ldquo;NuTab Digital,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect,
              use, disclose, retain, and protect personal information when you visit our website
              or contact us.
            </p>

            <PolicySection title="1. Who We Are">
              <p>
                NuTab Digital Inc. is a digital-services business based in Calgary, Alberta,
                Canada. For privacy questions, requests, or concerns, contact us at{" "}
                <a className="font-medium text-[#0067e7] underline underline-offset-4" href="mailto:nutabdigital@gmail.com">
                  nutabdigital@gmail.com
                </a>{" "}
                or call <a className="font-medium text-[#0067e7] underline underline-offset-4" href="tel:+15878886755">(587) 888-6755</a>.
              </p>
            </PolicySection>

            <PolicySection title="2. Information We Collect">
              <p>We may collect the following information:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Contact information and inquiry details:</strong> your name, email address, message, and any other information you choose to send us through our contact form, by email, or by phone.</li>
                <li><strong>Technical and usage information:</strong> information such as pages viewed, referring source, browser type, device type, operating system, approximate location derived from IP address, and visit date and time.</li>
                <li><strong>Preference information:</strong> your selected light or dark theme preference, stored in your browser&apos;s local storage.</li>
              </ul>
              <p>Please avoid sending sensitive personal information through the contact form unless it is necessary for your inquiry.</p>
            </PolicySection>

            <PolicySection title="3. How We Use Information">
              <p>We use personal information to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>respond to inquiries and discuss potential projects or services;</li>
                <li>operate, secure, maintain, and improve our website and services;</li>
                <li>understand website usage and performance;</li>
                <li>detect and prevent spam, fraud, misuse, and technical issues; and</li>
                <li>meet legal, regulatory, accounting, or record-keeping obligations.</li>
              </ul>
              <p>We do not sell personal information.</p>
            </PolicySection>

            <PolicySection title="4. Service Providers and Third Parties">
              <p>
                We use service providers that may process personal information on our behalf to
                operate our website and respond to inquiries.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Formspree:</strong> our contact form is processed by Formspree. When you submit it, Formspree receives the information in your submission so we can receive and respond to your inquiry.</li>
                <li><strong>Google Analytics:</strong> we use Google Analytics to understand website usage and performance. Google Analytics may collect technical and usage data through cookies or similar technologies. Our implementation requests IP anonymization.</li>
                <li><strong>Social media platforms:</strong> our website links to third-party social media platforms. Those platforms handle information according to their own privacy policies when you follow a link to them.</li>
              </ul>
              <p>
                We may also disclose information where reasonably necessary to comply with law,
                protect rights and security, obtain professional advice, or complete a business
                transaction such as a restructuring or sale.
              </p>
            </PolicySection>

            <PolicySection title="5. Cookies, Local Storage, and Your Choices">
              <p>
                We use local storage to remember your website theme preference and your analytics
                choice. We use cookies or similar technologies for analytics only after you choose
                to allow optional analytics.
              </p>
              <p>
                You can control cookies through your browser settings and clear local storage from
                your browser. Disabling these technologies may affect website functionality or your
                saved preferences. You can change your analytics choice at any time on our{" "}
                <Link className="font-medium text-[#0067e7] underline underline-offset-4" href="/cookies/">
                  Cookie Preferences
                </Link>{" "}
                page.
              </p>
            </PolicySection>

            <PolicySection title="6. International Processing">
              <p>
                Our service providers may process, store, or access information outside Alberta or
                Canada. Information processed in another country may be subject to the laws of that
                jurisdiction and may be accessible to its government authorities, courts,
                law-enforcement agencies, or regulators.
              </p>
            </PolicySection>

            <PolicySection title="7. Retention and Security">
              <p>
                We retain personal information only as long as reasonably necessary to respond to
                inquiries, maintain business records, comply with legal obligations, resolve
                disputes, and enforce agreements. We use reasonable administrative, technical, and
                organizational safeguards designed to protect personal information. No method of
                internet transmission or storage is completely secure, however, and we cannot
                guarantee absolute security.
              </p>
            </PolicySection>

            <PolicySection title="8. Your Privacy Rights">
              <p>
                Depending on applicable law, you may have rights to request access to or correction
                of your personal information, withdraw consent, request information about our
                privacy practices, or make a privacy complaint. To make a request, contact us using
                the details in Section 1. We may need to verify your identity before responding.
              </p>
            </PolicySection>

            <PolicySection title="9. Children&apos;s Privacy">
              <p>
                Our website and services are not directed to children. We do not knowingly collect
                personal information from children without appropriate consent. If you believe a
                child has provided us personal information, please contact us.
              </p>
            </PolicySection>

            <PolicySection title="10. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The date at the top of this
                page shows when it was last revised. Material changes will be posted on this page.
              </p>
            </PolicySection>

            <PolicySection title="11. Contact Us">
              <address className="not-italic">
                <strong>NuTab Digital Inc.</strong><br />
                Calgary, Alberta, Canada<br />
                <a className="font-medium text-[#0067e7] underline underline-offset-4" href="mailto:nutabdigital@gmail.com">nutabdigital@gmail.com</a><br />
                <a className="font-medium text-[#0067e7] underline underline-offset-4" href="tel:+15878886755">(587) 888-6755</a>
              </address>
            </PolicySection>

            <p className="border-t border-black/10 pt-6 text-sm opacity-70 dark:border-white/10">
              This policy applies to the NuTab Digital website. Please also review the privacy
              policies of third-party services and websites you access through our website. Return
              to the <Link className="font-medium text-[#0067e7] underline underline-offset-4" href="/">home page</Link>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
