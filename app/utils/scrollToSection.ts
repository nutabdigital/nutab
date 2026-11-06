// app/utils/scrollToSection.ts

const computeTargetY = (el: HTMLElement) => {
  const header = document.querySelector(".header") as HTMLElement | null;
  const headerHeight = header?.getBoundingClientRect().bottom ?? 80;
  const visibleHeight = window.innerHeight - headerHeight;

  // Sections are flex-centered, so the section's center is the card's center
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const sectionCenter = rect.top + scrollTop + rect.height / 2;

  // Card taller than the visible area: align its top just below the header
  if (rect.height >= visibleHeight) {
    return Math.max(0, rect.top + scrollTop - headerHeight);
  }

  return Math.max(0, sectionCenter - (headerHeight + visibleHeight / 2));
};

// Centers the section in the viewport area beneath the fixed header
export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    window.scrollTo({ top: computeTargetY(el), behavior: "smooth" });
  } catch {
    window.scrollTo(0, computeTargetY(el));
  }
};
