import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="relative z-10 mt-[70px] md:mt-[80px] mb-6 px-4 text-sm text-[var(--muted-foreground,#aaa)]"
    >
      <ol className="flex gap-2 p-0 m-0 flex-wrap list-none">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={`${c.label}-${i}`}
              aria-current={isLast ? "page" : undefined}
              className="flex items-center"
            >
              {c.href && !isLast ? (
                <Link
                  href={c.href}
                  className="text-current no-underline transition-colors duration-200 hover:underline hover:text-[var(--primary,#fff)]"
                >
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
              {!isLast && <span className="ml-2 text-[var(--muted-foreground,#aaa)]">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
