'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'var(--color-bg)', paddingTop: '4rem' }}
    >
      <div className="max-w-md w-full text-center">
        <p className="font-display font-bold mb-4" style={{ fontSize: '5rem', color: 'var(--color-bg-elevated)', lineHeight: 1 }} aria-hidden="true">
          Oops
        </p>
        <h2 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>
          Something went wrong.
        </h2>
        <p className="text-base mb-8" style={{ color: 'var(--color-text-muted)' }}>
          Even the best kitchens have a bad moment. Let&apos;s try that again.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200"
            style={{ background: 'var(--color-primary)', color: '#fff' }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-7 py-3 rounded-full text-sm font-semibold border transition-all duration-200"
            style={{ borderColor: 'var(--color-border-hover)', color: 'var(--color-text-muted)' }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
