// app/utils/scrollToSection.ts

// Helper for smooth scroll with fallback for older browsers
const smoothScrollTo = (top: number) => {
  try {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  } catch {
    // Fallback for browsers that don't support smooth scroll options
    window.scrollTo(0, top);
  }
};

export const scrollToSection = (id: string, offset = 0) => {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector(".header") as HTMLElement | null;
  const headerHeight = header?.offsetHeight ?? 80;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const elementTop = el.getBoundingClientRect().top + scrollTop;

  // Detect mobile screen width
  const isMobile = window.innerWidth <= 768;

  // Fine-tuned offset logic
  let extraOffset = 0;
  if (id === "about") {
    extraOffset = isMobile ? 0 : 60; // 0 on mobile, small adjustment on desktop
  }

  const targetY = elementTop - headerHeight - offset - extraOffset;

  smoothScrollTo(targetY);

  // Safari correction (delayed re-scroll if alignment drifts)
  setTimeout(() => {
    const rect = el.getBoundingClientRect();
    if (rect.top < headerHeight - 5) {
      try {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Use scrollTo instead of scrollBy for better compatibility
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo(0, currentScroll - headerHeight - offset - extraOffset);
      } catch {
        // Fallback for older browsers
        el.scrollIntoView(true);
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo(0, currentScroll - headerHeight - offset - extraOffset);
      }
    }
  }, 700);
};
