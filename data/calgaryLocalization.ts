/**
 * Calgary Localization Data Module
 * Location-specific data organized by Calgary quadrants (NE, NW, SE, SW)
 * and targeted verticals for local SEO dominance.
 */

export interface CalgaryNeighborhood {
  name: string;
  quadrant: 'NE' | 'NW' | 'SE' | 'SW';
  postalPrefix: string;
  landmarks?: string[];
  verticals?: string[];
}

export interface CalgaryQuadrant {
  code: 'NE' | 'NW' | 'SE' | 'SW';
  name: string;
  description: string;
  neighborhoods: CalgaryNeighborhood[];
  keyIndustries: string[];
}

/** Core geographic data for Calgary */
export const CALGARY_GEO = {
  latitude: 51.0447,
  longitude: -114.0719,
  timezone: 'America/Edmonton',
  province: 'Alberta',
  provinceCode: 'AB',
  country: 'Canada',
  countryCode: 'CA',
  currency: 'CAD',
  locale: 'en-CA',
  phoneAreaCodes: ['403', '587', '825'],
} as const;

/** NuTab Digital business details */
export const NUTAB_BUSINESS = {
  name: 'NuTab Digital',
  legalName: 'Nutab Digital Inc.',
  url: 'https://nutab.ca',
  phone: '+1-587-888-6755',
  email: 'nutabdigital@gmail.com',
  foundingDate: '2024',
  founders: [
    { name: 'Navjot Saran', role: 'Co-Founder', email: 'navjots@nutab.ca', phone: '(587) 707-2495' },
    { name: 'Fysal Beauferris', role: 'Co-Founder', email: 'fysalb@nutab.ca', phone: '(587) 888-6755' },
  ],
  socialProfiles: {
    instagram: 'https://www.instagram.com/nutab_digital/',
    twitter: 'https://x.com/NuTabDigital',
    facebook: 'https://www.facebook.com/profile.php?id=61575073651409',
    linkedin: 'https://www.linkedin.com/company/nutab-digital-inc/',
  },
} as const;

/** Calgary quadrants with neighborhoods and industry data */
export const CALGARY_QUADRANTS: CalgaryQuadrant[] = [
  {
    code: 'NW',
    name: 'Northwest Calgary',
    description: 'Home to the University of Calgary, major tech hubs, and affluent residential communities.',
    neighborhoods: [
      { name: 'Kensington', quadrant: 'NW', postalPrefix: 'T2N', landmarks: ['Kensington Village', 'Bow River Pathway'], verticals: ['Retail', 'Professional Services'] },
      { name: 'Arbour Lake', quadrant: 'NW', postalPrefix: 'T3G', landmarks: ['Arbour Lake Community Centre'], verticals: ['Healthcare', 'Professional Services'] },
      { name: 'University Heights', quadrant: 'NW', postalPrefix: 'T2N', landmarks: ['University of Calgary'], verticals: ['Professional Services'] },
      { name: 'Crowfoot', quadrant: 'NW', postalPrefix: 'T3G', landmarks: ['Crowfoot Crossing'], verticals: ['Retail', 'Healthcare'] },
      { name: 'Brentwood', quadrant: 'NW', postalPrefix: 'T2L', landmarks: ['Brentwood Village Mall'], verticals: ['Retail'] },
      { name: 'Varsity', quadrant: 'NW', postalPrefix: 'T3B', verticals: ['Professional Services'] },
    ],
    keyIndustries: ['Technology', 'Education', 'Healthcare', 'Professional Services'],
  },
  {
    code: 'NE',
    name: 'Northeast Calgary',
    description: 'Calgary\'s industrial heartland with the airport, major distribution centres, and growing commercial zones.',
    neighborhoods: [
      { name: 'Saddleridge', quadrant: 'NE', postalPrefix: 'T3J', verticals: ['Retail', 'Industrial/Manufacturing'] },
      { name: 'Martindale', quadrant: 'NE', postalPrefix: 'T3J', verticals: ['Retail'] },
      { name: 'Sunridge', quadrant: 'NE', postalPrefix: 'T1Y', landmarks: ['Sunridge Mall'], verticals: ['Retail'] },
      { name: 'Skyview Ranch', quadrant: 'NE', postalPrefix: 'T3N', verticals: ['Healthcare'] },
      { name: 'Bridgeland', quadrant: 'NE', postalPrefix: 'T2E', landmarks: ['Bridgeland-Riverside'], verticals: ['Retail', 'Professional Services'] },
    ],
    keyIndustries: ['Logistics', 'Manufacturing', 'Retail', 'Aviation'],
  },
  {
    code: 'SW',
    name: 'Southwest Calgary',
    description: 'Calgary\'s downtown core, Beltline entertainment district, and upscale communities with strong business presence.',
    neighborhoods: [
      { name: 'Beltline', quadrant: 'SW', postalPrefix: 'T2R', landmarks: ['17th Avenue SW', 'Stampede Park'], verticals: ['Retail', 'Professional Services', 'Healthcare'] },
      { name: 'Signal Hill', quadrant: 'SW', postalPrefix: 'T3H', landmarks: ['Signal Hill Centre'], verticals: ['Retail', 'Healthcare'] },
      { name: 'Downtown', quadrant: 'SW', postalPrefix: 'T2P', landmarks: ['Calgary Tower', 'Stephen Avenue Walk', 'Bow Tower'], verticals: ['Professional Services'] },
      { name: 'Mount Royal', quadrant: 'SW', postalPrefix: 'T2T', landmarks: ['Mount Royal University'], verticals: ['Professional Services'] },
      { name: 'Marda Loop', quadrant: 'SW', postalPrefix: 'T2T', landmarks: ['Marda Loop Shopping'], verticals: ['Retail'] },
      { name: 'Aspen Woods', quadrant: 'SW', postalPrefix: 'T3H', verticals: ['Professional Services', 'Healthcare'] },
    ],
    keyIndustries: ['Finance', 'Energy', 'Legal', 'Professional Services', 'Entertainment'],
  },
  {
    code: 'SE',
    name: 'Southeast Calgary',
    description: 'Growing communities with major retail destinations and expanding industrial areas.',
    neighborhoods: [
      { name: 'Inglewood', quadrant: 'SE', postalPrefix: 'T2G', landmarks: ['Inglewood Bird Sanctuary', '9th Avenue SE'], verticals: ['Retail', 'Professional Services'] },
      { name: 'Mahogany', quadrant: 'SE', postalPrefix: 'T3M', landmarks: ['Mahogany Lake'], verticals: ['Healthcare'] },
      { name: 'McKenzie Towne', quadrant: 'SE', postalPrefix: 'T2Z', landmarks: ['McKenzie Towne High Street'], verticals: ['Retail', 'Healthcare'] },
      { name: 'Quarry Park', quadrant: 'SE', postalPrefix: 'T2C', landmarks: ['Quarry Park Business District'], verticals: ['Professional Services', 'Industrial/Manufacturing'] },
      { name: 'Douglasdale', quadrant: 'SE', postalPrefix: 'T2Z', verticals: ['Retail'] },
    ],
    keyIndustries: ['Oil & Gas Support', 'Retail', 'Logistics', 'Construction'],
  },
];

/** All core neighborhoods flattened */
export const CORE_NEIGHBORHOODS = CALGARY_QUADRANTS.flatMap(q => q.neighborhoods);

/** Get neighborhoods relevant to a specific vertical */
export function getNeighborhoodsByVertical(vertical: string): CalgaryNeighborhood[] {
  return CORE_NEIGHBORHOODS.filter(n => n.verticals?.includes(vertical));
}

/** Get all neighborhoods in a specific quadrant */
export function getNeighborhoodsByQuadrant(quadrant: 'NE' | 'NW' | 'SE' | 'SW'): CalgaryNeighborhood[] {
  return CORE_NEIGHBORHOODS.filter(n => n.quadrant === quadrant);
}

/** Calgary-specific SEO keywords by service category */
export const CALGARY_SEO_KEYWORDS: Record<string, string[]> = {
  'web-design': [
    'web design Calgary',
    'Calgary website designer',
    'website development Calgary Alberta',
    'responsive web design Calgary',
    'WordPress developer Calgary',
    'web design agency near me Calgary',
    'affordable website design Calgary',
    'small business web design Calgary',
  ],
  'seo-marketing': [
    'SEO Calgary',
    'Calgary SEO company',
    'local SEO Calgary',
    'digital marketing Calgary',
    'Google Ads management Calgary',
    'search engine optimization Alberta',
    'Calgary marketing agency',
    'social media marketing Calgary',
  ],
  'app-development': [
    'app development Calgary',
    'custom software Calgary',
    'mobile app developer Calgary',
    'software development company Calgary',
    'Calgary app designers',
    'iOS Android developer Calgary Alberta',
    'SaaS development Calgary',
  ],
  'ecommerce': [
    'ecommerce development Calgary',
    'Shopify developer Calgary',
    'online store Calgary',
    'ecommerce website Calgary Alberta',
    'WooCommerce Calgary',
    'ecommerce solutions Calgary',
  ],
  'ai-automation': [
    'AI automation Calgary',
    'business automation Calgary',
    'AI solutions Alberta',
    'machine learning Calgary',
    'chatbot development Calgary',
    'process automation Calgary',
  ],
  'it-consulting': [
    'IT consulting Calgary',
    'technology consulting Alberta',
    'IT services Calgary',
    'digital transformation Calgary',
    'cloud consulting Calgary',
    'cybersecurity Calgary',
  ],
  'brand-design': [
    'graphic design Calgary',
    'brand design Calgary',
    'logo design Calgary Alberta',
    'branding agency Calgary',
    'corporate identity Calgary',
    'brand strategy Calgary',
  ],
  'photo-media': [
    'photography Calgary',
    'commercial photography Calgary',
    'video production Calgary',
    'media production Alberta',
    'product photography Calgary',
    'corporate photography Calgary',
  ],
};

/** Competitor benchmarks for reference */
export const COMPETITORS = {
  azuroDigital: { name: 'Azuro Digital', url: 'https://azurodigital.com', focus: 'Web Design & SEO' },
  konstrucDigital: { name: 'Konstruct Digital', url: 'https://www.konstrucdigital.com', focus: 'Performance Marketing' },
  albertaRank: { name: 'AlbertaRank', url: 'https://albertarank.ca', focus: 'SEO Services' },
} as const;

/** Calgary-specific geographic schema for JSON-LD */
export function getCalgaryServiceAreaSchema() {
  return {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: CALGARY_GEO.latitude,
      longitude: CALGARY_GEO.longitude,
    },
    geoRadius: '50000',
  };
}

/** Generate areaServed schema with Calgary neighborhoods */
export function getAreaServedSchema() {
  return [
    {
      '@type': 'City',
      name: 'Calgary',
      sameAs: 'https://en.wikipedia.org/wiki/Calgary',
    },
    {
      '@type': 'State',
      name: 'Alberta',
      sameAs: 'https://en.wikipedia.org/wiki/Alberta',
    },
    {
      '@type': 'Country',
      name: 'Canada',
    },
  ];
}
