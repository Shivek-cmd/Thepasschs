import type { Metadata } from 'next'
import { SITE } from '@/constants'
import CateringClient from './CateringClient'

export const metadata: Metadata = {
  title: 'Catering — Feed the Room | The Pass Charleston',
  description: 'Artisan catering for events in Charleston, SC. Event trays from $120, boxed lunches at $24/box. Order 48 hours in advance. Serving Downtown Charleston peninsula & Mount Pleasant.',
  alternates: { canonical: `${SITE.url}/catering` },
  openGraph: {
    title: 'Catering — The Pass Artisan Deli | Charleston, SC',
    description: 'Feed the room. Impress everyone. Artisan catering for events in Charleston, SC.',
    url: `${SITE.url}/catering`,
    images: [{ url: '/og/og-catering.jpg', width: 1200, height: 630, alt: 'The Pass Catering — Charleston SC' }],
  },
}

export default function CateringPage() {
  return <CateringClient />
}
