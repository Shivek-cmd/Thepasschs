import type { Metadata } from 'next'
import { SITE } from '@/constants'
import MenuClient from './MenuClient'

export const metadata: Metadata = {
  title: 'Menu — Sandwiches, Salads & More | The Pass Charleston',
  description: 'The full menu at The Pass — 11 handcrafted Italian-American sandwiches, 3 artisan salads, housemade provisions, wine, beer, and more. No shortcuts. Everything made with intention.',
  alternates: { canonical: `${SITE.url}/menu` },
  openGraph: {
    title: 'The Menu — The Pass Artisan Deli | Charleston, SC',
    description: 'Handcrafted Italian-American sandwiches, salads, provisions and drinks. Two Charleston locations.',
    url: `${SITE.url}/menu`,
    images: [{ url: '/og/og-menu.jpg', width: 1200, height: 630, alt: 'The Pass Menu — Charleston Artisan Deli' }],
  },
}

export default function MenuPage() {
  return <MenuClient />
}
