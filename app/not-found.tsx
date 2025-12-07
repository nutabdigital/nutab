"use client";

import Link from "next/link";
import Background from "./components/Background/Background";
import "./styles/page.css";
import "./not-found.css";

export default function NotFound() {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="not-found">
      <Background />
      <div className="not-found-card" role="region" aria-labelledby="nf-title">
        <h1 id="nf-title" className="not-found-title">Page not found</h1>
        <p className="not-found-subtitle">The page you’re looking for doesn’t exist.</p>
        <Link href="/" aria-label="Go to homepage" className="not-found-link">
          <img
            src="/photos/og-home.webp"
            alt="NuTab Digital homepage preview"
            width={480}
            height={320}
            className="not-found-image"
          />
        </Link>
        <div className="not-found-actions">
          <Link href="/" className="btn-home" aria-label="Return to homepage">
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
