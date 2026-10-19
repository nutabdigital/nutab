import type { Metadata } from "next";
import Link from "next/link";
import Background from "../components/Background/Background";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the NuTab Digital website.",
  alternates: { canonical: "https://nutab.ca/terms" },
  robots: "index, follow",
};

const updatedDate = "October 18, 2026";

export default function TermsPage() {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <Background />
      <div className="relative z-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]} />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-10 sm:pt-16">
        <article className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-black/60 sm:p-10">
          <header className="border-b border-black/10 pb-7 dark:border-white/10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0067e7]">NuTab Digital Inc.</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Use</h1>
            <p className="mt-4 text-sm opacity-70">Last updated: {updatedDate}</p>
          </header>

          <div className="mt-8 space-y-8 text-base leading-7 opacity-90">
            <p>
              These Terms of Use govern your access to and use of the NuTab Digital website. By
              accessing or using this website, you agree to these terms. If you do not agree, do
              not use the website.
            </p>

            <TermsSection title="1. Website Purpose">
              <p>
                This website provides general information about NuTab Digital Inc., our services,
                portfolio, and ways to contact us. Information on this website is not a binding
                offer, professional advice, or a guarantee of a particular result. A separate
                written agreement governs any services we provide to a client.
              </p>
            </TermsSection>

            <TermsSection title="2. Acceptable Use">
              <p>You agree not to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>use the website for an unlawful, harmful, fraudulent, or unauthorized purpose;</li>
                <li>interfere with, disrupt, or attempt to gain unauthorized access to the website, its systems, or its users;</li>
                <li>introduce malware, excessive automated requests, or other harmful code;</li>
                <li>scrape, copy, reproduce, distribute, or exploit website content except as permitted by law or with our written permission; or</li>
                <li>submit false, misleading, infringing, or inappropriate material through the website.</li>
              </ul>
            </TermsSection>

            <TermsSection title="3. Intellectual Property">
              <p>
                The website and its content, including text, branding, graphics, designs, software,
                photos, videos, and other materials, are owned by NuTab Digital or used with
                permission and are protected by applicable intellectual-property laws. You may view
                and print website content for personal, non-commercial use only. No other use is
                permitted without prior written permission from NuTab Digital or the applicable
                rights holder.
              </p>
            </TermsSection>

            <TermsSection title="4. Portfolio and Third-Party Content">
              <p>
                Portfolio examples, client work, testimonials, links, and third-party materials are
                provided for general informational purposes. They may describe past work and do not
                guarantee future results. Third-party websites and services are governed by their
                own terms and privacy policies. We are not responsible for their content,
                availability, or practices.
              </p>
            </TermsSection>

            <TermsSection title="5. Contact Submissions">
              <p>
                You are responsible for information you submit through our contact form or by email.
                Do not send confidential, sensitive, or proprietary information unless we have
                agreed in writing to receive it. Submitting an inquiry does not create a client,
                agency, partnership, employment, fiduciary, or other contractual relationship.
              </p>
              <p>
                Our handling of personal information is described in our <Link className="font-medium text-[#0067e7] underline underline-offset-4" href="/privacy/">Privacy Policy</Link>.
              </p>
            </TermsSection>

            <TermsSection title="6. Disclaimers">
              <p>
                This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the fullest
                extent permitted by law, NuTab Digital makes no warranties, express or implied,
                about the website&apos;s accuracy, completeness, availability, security,
                merchantability, fitness for a particular purpose, or non-infringement. We may
                change, suspend, or remove website content at any time without notice.
              </p>
            </TermsSection>

            <TermsSection title="7. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, NuTab Digital and its directors, officers,
                employees, and contractors will not be liable for indirect, incidental, special,
                consequential, exemplary, or punitive damages, or for loss of data, revenue,
                profits, goodwill, or business opportunity arising from or related to your use of,
                or inability to use, this website.
              </p>
            </TermsSection>

            <TermsSection title="8. Changes to These Terms">
              <p>
                We may update these Terms of Use from time to time. The date at the top of this
                page indicates when they were last updated. Your continued use of the website after
                an update means you accept the revised terms.
              </p>
            </TermsSection>

            <TermsSection title="9. Governing Law">
              <p>
                These terms are governed by the laws of Alberta and the federal laws of Canada that
                apply there, without regard to conflict-of-law principles. Courts located in Alberta
                will have exclusive jurisdiction over disputes related to these terms or the
                website, subject to applicable law.
              </p>
            </TermsSection>

            <TermsSection title="10. Contact Us">
              <p>
                Questions about these terms can be sent to <a className="font-medium text-[#0067e7] underline underline-offset-4" href="mailto:nutabdigital@gmail.com">nutabdigital@gmail.com</a>.
              </p>
            </TermsSection>
          </div>
        </article>
      </section>
    </main>
  );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
