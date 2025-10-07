//AppClientProviders.tsx
"use client";
import { ThemeProvider } from "./context/ThemeContext";
import { SectionProvider } from "./context/SectionContext";
import { ModelStateProvider, useModelState } from "./context/ModelStateProvider";
import dynamic from "next/dynamic";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ModelWrapper = dynamic(() => import("./context/ModelWrapper"), { ssr: false });

function InnerProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideModel =
    pathname?.startsWith("/card-builder/card-virtual-builder") ||
    pathname?.startsWith("/card-builder/card-nfc-builder");

  const { pauseModel, resumeModel } = useModelState(); // ✅ Call hook here, at top level

  useEffect(() => {
    if (hideModel) pauseModel();
    else resumeModel();
  }, [hideModel, pauseModel, resumeModel]);

  return (
    <>
      <Header />
      {!hideModel && <ModelWrapper />}
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
          <InnerProviders>{children}</InnerProviders>
        </ModelStateProvider>
      </SectionProvider>
    </ThemeProvider>
  );
}