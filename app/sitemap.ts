import { MetadataRoute } from 'next';
import { NUTAB_BUSINESS } from '../data/calgaryLocalization';

// Required for static export
export const dynamic = 'force-static';

// Update a page's date only when its content meaningfully changes.
// Google ignores lastmod values that always equal the build date.
const PAGES: { path: string; lastModified: string }[] = [
  { path: '/', lastModified: '2026-10-28' },
  { path: '/services/', lastModified: '2026-10-28' },
  { path: '/services/web-design/', lastModified: '2026-10-28' },
  { path: '/services/app-development/', lastModified: '2026-10-28' },
  { path: '/services/seo-marketing/', lastModified: '2026-10-28' },
  { path: '/services/ecommerce/', lastModified: '2026-10-28' },
  { path: '/services/ai-automation/', lastModified: '2026-10-28' },
  { path: '/services/it-consulting/', lastModified: '2026-10-28' },
  { path: '/services/brand-design/', lastModified: '2026-10-28' },
  { path: '/services/photo-media/', lastModified: '2026-10-28' },
  { path: '/portfolio/', lastModified: '2026-10-28' },
  { path: '/portfolio/chopchop/', lastModified: '2026-10-28' },
  { path: '/portfolio/kingseye-towing/', lastModified: '2026-10-28' },
  { path: '/portfolio/kdt-restaurant/', lastModified: '2026-10-28' },
  { path: '/privacy/', lastModified: '2026-10-27' },
  { path: '/cookies/', lastModified: '2026-10-27' },
  { path: '/terms/', lastModified: '2026-10-18' },
  { path: '/accessibility/', lastModified: '2026-10-18' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified }) => ({
    url: `${NUTAB_BUSINESS.url}${path}`,
    lastModified,
  }));
}
