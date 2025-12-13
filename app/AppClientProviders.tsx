//AppClientProviders.tsx
"use client";
import { ThemeProvider } from "./context/ThemeContext";
import { SectionProvider } from "./context/SectionContext";
import { ModelStateProvider, useModelState } from "./context/ModelStateProvider";
import { HeaderSectionProvider } from "./context/HeaderSectionContext";
import dynamic from "next/dynamic";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ModelWrapper = dynamic(() => import("./context/ModelWrapper"), { ssr: false });

function InnerProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Only show model on homepage, hide on card-builder pages
  const isHomePage = pathname === "/";
  const hideModel =
    !isHomePage ||
    pathname?.startsWith("/card-builder/card-virtual-builder") ||
    pathname?.startsWith("/card-builder/card-nfc-builder");

  // Hide theme toggle on service pages (force dark mode)
  const isServicePage = pathname?.startsWith("/services/") && pathname !== "/services";

  const { pauseModel, resumeModel } = useModelState(); // ✅ Call hook here, at top level

  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (hideModel) pauseModel();
    else resumeModel();
  }, [hideModel, pauseModel, resumeModel]);

  // Delay mounting the heavy Model until the browser is idle (or short timeout)
  useEffect(() => {
    if (hideModel) {
      setShowModel(false);
      return;
    }

    let idleId: ReturnType<typeof setTimeout> | undefined;
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      // requestIdleCallback type not on window in TS DOM lib sometimes
      idleId = (window as any).requestIdleCallback(
        () => setShowModel(true),
        { timeout: 1000 }
      );
    } else {
      // use globalThis.setTimeout to avoid 'window' being typed as never in some TS configs
      idleId = globalThis.setTimeout(() => setShowModel(true), 1200);
    }

    return () => {
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, [hideModel]);

  return (
    <>
      <Header hideThemeToggle={isServicePage} />
      {/* only mount ModelWrapper after idle + not hidden */}
      {!hideModel && showModel && <ModelWrapper />}
      {children}
      <Footer />
    </>
  );
}

export default function AppClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SectionProvider>
        <ModelStateProvider>
          <HeaderSectionProvider>
            <InnerProviders>{children}</InnerProviders>
          </HeaderSectionProvider>
        </ModelStateProvider>
      </SectionProvider>
    </ThemeProvider>
  );
}