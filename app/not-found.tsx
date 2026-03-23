import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'
import { NAV_LINKS } from '@/constants'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'var(--color-bg)', paddingTop: '4rem' }}
    >
      <div className="max-w-lg w-full text-center">
        {/* Big 404 */}
        <p
          className="font-display font-bold leading-none mb-4 select-none"
          style={{ fontSize: 'clamp(6rem, 20vw, 10rem)', color: 'var(--color-bg-elevated)' }}
          aria-hidden="true"
        >
          404
        </p>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
          <span className="text-xs uppercase tracking-[0.20em] font-semibold" style={{ color: 'var(--color-accent)' }}>
            Page Not Found
          </span>
          <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
        </div>

        <h1
          className="font-display font-bold mb-4"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: 'var(--color-text)' }}
        >
          This page went the way of the last sandwich.
        </h1>

        <p className="text-base mb-10" style={{ color: 'var(--color-text-muted)' }}>
          Looks like this page doesn&apos;t exist — or maybe we moved it. Either way, let&apos;s get you somewhere good.
        </p>

        {/* Nav links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-glow"
            style={{ background: 'var(--color-primary)', color: '#fff' }}
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border transition-all duration-200"
            style={{ borderColor: 'var(--color-border-hover)', color: 'var(--color-text-muted)' }}
          >
            See the Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quick nav */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-primary"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
