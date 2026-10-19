import type { Metadata } from "next";
import Background from "../components/Background/Background";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "NuTab Digital's commitment to making its website accessible to all visitors.",
  alternates: { canonical: "https://nutab.ca/accessibility" },
  robots: "index, follow",
};

const updatedDate = "October 18, 2026";

export default function AccessibilityPage() {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <Background />
      <div className="relative z-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Accessibility Statement" }]} />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-10 sm:pt-16">
        <article className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-black/60 sm:p-10">
          <header className="border-b border-black/10 pb-7 dark:border-white/10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0067e7]">NuTab Digital Inc.</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Accessibility Statement</h1>
            <p className="mt-4 text-sm opacity-70">Last updated: {updatedDate}</p>
          </header>

          <div className="mt-8 space-y-8 text-base leading-7 opacity-90">
            <p>
              NuTab Digital is committed to making our website usable by as many people as possible,
              including people with disabilities. We work to improve accessibility as the website
              evolves.
            </p>

            <AccessibilitySection title="Our approach">
              <p>
                We aim to consider accessibility in the design, development, and maintenance of our
                website. Our goal is to follow recognized accessibility practices and work toward a
                usable experience for visitors using keyboard navigation, screen readers,
                magnification, voice control, and other assistive technologies.
              </p>
            </AccessibilitySection>

            <AccessibilitySection title="Accessibility features">
              <p>We work to support accessibility through measures such as:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>semantic headings and page structure;</li>
                <li>descriptive labels for form fields and interactive controls;</li>
                <li>keyboard-accessible navigation and visible focus styles;</li>
                <li>text that remains readable at different viewport sizes;</li>
                <li>colour and contrast considerations in light and dark display modes; and</li>
                <li>respecting browser and operating-system accessibility settings where practical.</li>
              </ul>
            </AccessibilitySection>

            <AccessibilitySection title="Known limitations">
              <p>
                Some parts of the website use animations, visual media, interactive 3D content, or
                third-party services. These elements may not provide the same experience for every
                visitor or assistive technology. We continue to assess and improve these areas where
                practical.
              </p>
            </AccessibilitySection>

            <AccessibilitySection title="Need help or want to report a barrier?">
              <p>
                If you have difficulty using any part of this website or need information in an
                alternative format, please contact us. Tell us the page or feature involved and the
                assistance you need, and we will make reasonable efforts to help.
              </p>
              <address className="not-italic">
                <strong>NuTab Digital Inc.</strong><br />
                Email: <a className="font-medium text-[#0067e7] underline underline-offset-4" href="mailto:nutabdigital@gmail.com">nutabdigital@gmail.com</a><br />
                Phone: <a className="font-medium text-[#0067e7] underline underline-offset-4" href="tel:+15878886755">(587) 888-6755</a><br />
                Calgary, Alberta, Canada
              </address>
            </AccessibilitySection>

            <AccessibilitySection title="Ongoing improvement">
              <p>
                Accessibility is an ongoing effort. We welcome feedback and use it to prioritize
                improvements to the website and our digital services.
              </p>
            </AccessibilitySection>
          </div>
        </article>
      </section>
    </main>
  );
}

function AccessibilitySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
