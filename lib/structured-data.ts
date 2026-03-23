import { SITE, LOCATIONS } from '@/constants'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icons/android-chrome-512x512.png`,
  image: `${SITE.url}/og/og-default.jpg`,
  description: SITE.description,
  telephone: LOCATIONS.chs.phone,
  email: SITE.email,
  servesCuisine: ['Italian', 'American', 'Deli', 'Sandwiches'],
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: LOCATIONS.chs.address,
    addressLocality: 'Charleston',
    addressRegion: 'SC',
    postalCode: '29403',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: LOCATIONS.chs.lat,
    longitude: LOCATIONS.chs.lng,
  },
  hasMap: LOCATIONS.chs.mapUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '15:00',
    },
  ],
  sameAs: [
    SITE.instagram,
    SITE.facebook,
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '543',
    bestRating: '5',
    worstRating: '1',
  },
}

export const chefPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anthony Marini',
  jobTitle: 'Chef & Owner',
  url: 'https://chefanthonymarini.net',
  worksFor: {
    '@type': 'Restaurant',
    name: SITE.name,
    url: SITE.url,
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Culinary Institute of America',
    address: 'Hyde Park, New York',
  },
  award: 'Winner CNBC Restaurant Startup Season 2',
}

export function articleSchema(post: {
  title: string
  excerpt: string
  date: string
  updatedAt?: string
  author: string
  ogImage?: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/icons/android-chrome-512x512.png`,
      },
    },
    image: post.ogImage ? `${SITE.url}${post.ogImage}` : `${SITE.url}/og/og-blog.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}/blog/${post.slug}`,
    },
  }
}

export const localBusinessCHS = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: `${SITE.name} — Downtown Charleston`,
  url: SITE.url,
  telephone: LOCATIONS.chs.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: LOCATIONS.chs.address,
    addressLocality: 'Charleston',
    addressRegion: 'SC',
    postalCode: '29403',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: LOCATIONS.chs.lat,
    longitude: LOCATIONS.chs.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '15:00',
    },
  ],
}

export const localBusinessMTP = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: `${SITE.name} — Mount Pleasant`,
  url: SITE.url,
  telephone: LOCATIONS.mtp.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: LOCATIONS.mtp.address,
    addressLocality: 'Mount Pleasant',
    addressRegion: 'SC',
    postalCode: '29464',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: LOCATIONS.mtp.lat,
    longitude: LOCATIONS.mtp.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '15:00',
    },
  ],
}
