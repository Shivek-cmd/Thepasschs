import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/the-italian-boy-after-dark', destination: '/the-italian-boy', permanent: true },
      { source: '/order', destination: 'https://www.toasttab.com/thepass-207a-st-philip-street', permanent: false },
    ]
  },
}

export default nextConfig
