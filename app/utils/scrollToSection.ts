// app/utils/scrollToSection.ts
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

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });

  // Safari correction (delayed re-scroll if alignment drifts)
  setTimeout(() => {
    const rect = el.getBoundingClientRect();
    if (rect.top < headerHeight - 5) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollBy({
        top: -headerHeight - offset - extraOffset,
        behavior: "instant",
      });
    }
  }, 700);
};
