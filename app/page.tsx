import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import VibeStrip from '@/components/sections/VibeStrip'
import SignatureDishes from '@/components/sections/SignatureDishes'
import Story from '@/components/sections/Story'
import MaseratiMoment from '@/components/sections/MaseratiMoment'
import PressMarquee from '@/components/sections/PressMarquee'
import ItalianBoyTeaser from '@/components/sections/ItalianBoyTeaser'
import Testimonials from '@/components/sections/Testimonials'
import Locations from '@/components/sections/Locations'
import { SITE } from '@/constants'
import { localBusinessCHS, localBusinessMTP } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'The Pass — Artisan Deli & Market | Best Sandwiches in Charleston, SC',
  description: "Charleston's most-loved Italian artisan deli. Handcrafted sandwiches, curated provisions, and The Italian Boy After Dark tasting experience. Downtown Charleston & Mount Pleasant.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: 'The Pass — Best Artisan Sandwiches in Charleston, SC',
    description: "Charleston's most-loved Italian artisan deli. Two locations — Downtown & Mount Pleasant.",
    url: SITE.url,
    images: [{ url: '/og/og-default.jpg', width: 1200, height: 630, alt: 'The Pass Artisan Deli Charleston SC' }],
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessCHS) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessMTP) }} />
      <Hero />
      <VibeStrip />
      <SignatureDishes />
      <Story />
      <MaseratiMoment />
      <PressMarquee />
      <ItalianBoyTeaser />
      <Testimonials />
      <Locations />
    </>
  )
}
