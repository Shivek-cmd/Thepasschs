import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import { SITE } from '@/constants'
import { organizationSchema } from '@/lib/structured-data'

const themeScript = `(function(){const t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);})()`

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'The Pass — Artisan Deli & Market | Charleston, SC', template: '%s | The Pass Charleston' },
  description: SITE.description,
  keywords: ['best sandwiches Charleston SC','Italian deli Charleston','artisan sandwich shop Charleston','The Pass CHS','Such a Nice Italian Boy sandwich','Italian restaurant Charleston','Mount Pleasant deli','catering Charleston SC','The Italian Boy After Dark','Anthony Marini chef Charleston'],
  authors: [{ name: 'The Pass — Artisan Deli & Market' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website', locale: 'en_US', url: SITE.url, siteName: SITE.name,
    title: 'The Pass — Artisan Deli & Market | Charleston, SC',
    description: SITE.description,
    images: [{ url: '/og/og-default.jpg', width: 1200, height: 630, alt: 'The Pass — Artisan Deli & Market, Charleston SC', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image', site: '@thepasschs', creator: '@thepasschs',
    title: 'The Pass — Artisan Deli & Market | Charleston, SC',
    description: SITE.description, images: ['/og/og-default.jpg'],
  },
  alternates: { canonical: SITE.url },
  icons: {
    icon: [{ url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }, { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }, { url: '/icons/favicon.ico' }],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/icons/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta name="theme-color" content="#8B4513" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className="page-grid grain">
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
