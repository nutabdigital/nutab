"use client";

import { useEffect, useState } from "react";

export type CookieConsentValue = "accepted" | "rejected";

export const COOKIE_CONSENT_KEY = "nutab-cookie-consent";
export const COOKIE_CONSENT_EVENT = "nutab:cookie-consent-changed";
export const OPEN_COOKIE_PREFERENCES_EVENT = "nutab:open-cookie-preferences";

function readConsent(): CookieConsentValue | null {
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export default function CookiePreferencesControl() {
  const [consent, setConsent] = useState<CookieConsentValue | null>(null);

  useEffect(() => {
    const updateConsent = () => setConsent(readConsent());
    updateConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, updateConsent);
  }, []);

  const openPreferences = () => {
    window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
  };

  const status = consent === "accepted"
    ? "Analytics is currently enabled."
    : consent === "rejected"
      ? "Analytics is currently disabled."
      : "You have not selected an analytics preference yet.";

  return (
    <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-5 dark:border-white/10 dark:bg-white/[0.04]">
      <p className="font-medium">{status}</p>
      <button
        type="button"
        onClick={openPreferences}
        className="mt-4 rounded-full bg-[#0067e7] px-5 py-2.5 font-semibold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0067e7] focus:ring-offset-2 dark:focus:ring-offset-black"
      >
        Manage cookie preferences
      </button>
    </div>
  );
}
