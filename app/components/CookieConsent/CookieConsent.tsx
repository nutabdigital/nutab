"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_KEY,
  CookieConsentValue,
  OPEN_COOKIE_PREFERENCES_EVENT,
} from "./CookiePreferencesControl";

const ANALYTICS_ID = "G-BSE95BQFCB";

function readConsent(): CookieConsentValue | null {
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

function removeAnalyticsCookies() {
  document.cookie.split(";").forEach((entry) => {
    const name = entry.trim().split("=")[0];
    if (name === "_ga" || name.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    }
  });
}

type Gtag = (
  command: "consent",
  action: "update",
  parameters: { analytics_storage: "denied" }
) => void;

function Analytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const updateAnalyticsPreference = () => {
      const allowed = readConsent() === "accepted";
      setAnalyticsAllowed(allowed);

      if (!allowed) {
        removeAnalyticsCookies();
        const gtag = (window as Window & { gtag?: Gtag }).gtag;
        gtag?.("consent", "update", { analytics_storage: "denied" });
      }
    };

    updateAnalyticsPreference();
    window.addEventListener(COOKIE_CONSENT_EVENT, updateAnalyticsPreference);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, updateAnalyticsPreference);
  }, []);

  if (!analyticsAllowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_ID}', {
              send_page_view: true,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    setVisible(!consent);

    if (consent === "rejected") removeAnalyticsCookies();

    const openPreferences = () => {
      setShowDetails(true);
      setVisible(true);
    };

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
  }, []);

  const savePreference = (consent: CookieConsentValue) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, consent);
    if (consent === "rejected") removeAnalyticsCookies();
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    setVisible(false);
    setShowDetails(false);
  };

  return (
    <>
      <Analytics />
      {visible && (
        <aside
          aria-label="Cookie preferences"
          className="fixed bottom-4 left-4 right-4 z-[1000] mx-auto max-w-xl rounded-2xl border border-black/10 bg-white/95 p-4 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-[#111]/95 sm:left-6 sm:right-auto"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-sm text-sm leading-5">
              <p className="font-semibold">A quick privacy choice</p>
              <p className="mt-1 opacity-80">
                We use optional analytics to understand site use. You can allow it, decline it, or
                adjust this choice later.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                onClick={() => savePreference("rejected")}
                className="rounded-full border border-black/15 px-3.5 py-2 text-sm font-semibold transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#0067e7] focus:ring-offset-2 dark:border-white/20 dark:hover:bg-white/10 dark:focus:ring-offset-[#111]"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => savePreference("accepted")}
                className="rounded-full bg-[#0067e7] px-3.5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0067e7] focus:ring-offset-2 dark:focus:ring-offset-[#111]"
              >
                Allow analytics
              </button>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3 text-xs">
            <Link className="text-[#0067e7] underline underline-offset-4" href="/cookies/">
              Learn more
            </Link>
            <button
              type="button"
              onClick={() => setShowDetails((current) => !current)}
              aria-expanded={showDetails}
              className="underline underline-offset-4 opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#0067e7]"
            >
              {showDetails ? "Hide details" : "Details"}
            </button>
          </div>
          {showDetails && (
            <p className="mt-3 border-t border-black/10 pt-3 text-xs leading-5 opacity-75 dark:border-white/10">
              Essential local storage remembers your display theme. Optional analytics uses Google
              Analytics and is loaded only when you select &ldquo;Allow analytics.&rdquo;
            </p>
          )}
        </aside>
      )}
    </>
  );
}
