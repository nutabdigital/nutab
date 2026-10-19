import type { Metadata } from "next";
import Link from "next/link";
import Background from "../components/Background/Background";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import CookiePreferencesControl from "../components/CookieConsent/CookiePreferencesControl";

export const metadata: Metadata = {
  title: "Cookie Preferences",
  description: "Manage analytics preferences and learn how NuTab Digital uses cookies and local storage.",
  alternates: { canonical: "https://nutab.ca/cookies" },
  robots: "index, follow",
};

const updatedDate = "October 18, 2026";

export default function CookiePreferencesPage() {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <Background />
      <div className="relative z-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Preferences" }]} />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-10 sm:pt-16">
        <article className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-black/60 sm:p-10">
          <header className="border-b border-black/10 pb-7 dark:border-white/10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0067e7]">NuTab Digital Inc.</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Cookie Preferences</h1>
            <p className="mt-4 text-sm opacity-70">Last updated: {updatedDate}</p>
          </header>

          <div className="mt-8 space-y-8 text-base leading-7 opacity-90">
            <p>
              We keep our cookie notice small and out of the way. This page explains the choices
              available to you and lets you change your preference at any time.
            </p>

            <CookiePreferencesControl />

            <CookieSection title="How we use cookies and local storage">
              <p>
                Cookies are small files that a website can store in your browser. Local storage is
                browser storage that can remember preferences. We use these technologies for the
                limited purposes described below.
              </p>
            </CookieSection>

            <CookieSection title="Your choices">
              <p>
                You can allow or decline optional analytics at any time using the control above. If
                you decline, Google Analytics will not load from this website. You can also manage
                or delete cookies and local storage through your browser settings. Deleting browser
                data may reset your saved preferences.
              </p>
            </CookieSection>

            <CookieSection title="Technologies we use">
              <div className="overflow-x-auto rounded-2xl border border-black/10 dark:border-white/10">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-black/[0.04] dark:bg-white/[0.06]">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Category</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Purpose</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Choice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/10 dark:divide-white/10">
                    <tr>
                      <th scope="row" className="px-4 py-3 font-medium">Preference storage</th>
                      <td className="px-4 py-3">Remembers your selected light or dark theme in local storage.</td>
                      <td className="px-4 py-3">Essential to saving the display preference; you can clear it in your browser.</td>
                    </tr>
                    <tr>
                      <th scope="row" className="px-4 py-3 font-medium">Analytics</th>
                      <td className="px-4 py-3">Google Analytics helps us understand aggregate website usage and performance.</td>
                      <td className="px-4 py-3">Optional. It loads only after you allow analytics.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CookieSection>

            <CookieSection title="Third-party services">
              <p>
                Our contact form is processed by Formspree when you submit it. Formspree is not an
                analytics cookie set merely by visiting the website, but it receives the details you
                provide when you send an inquiry. Learn more in our <Link className="font-medium text-[#0067e7] underline underline-offset-4" href="/privacy/">Privacy Policy</Link>.
              </p>
            </CookieSection>

            <CookieSection title="Updates and contact">
              <p>
                We may update this notice as our website changes. If you have questions about these
                preferences, contact <a className="font-medium text-[#0067e7] underline underline-offset-4" href="mailto:nutabdigital@gmail.com">nutabdigital@gmail.com</a>.
              </p>
            </CookieSection>
          </div>
        </article>
      </section>
    </main>
  );
}

function CookieSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
