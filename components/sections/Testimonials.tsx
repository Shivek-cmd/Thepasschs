'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { REVIEW_QUOTES } from '@/constants'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c - 1 + REVIEW_QUOTES.length) % REVIEW_QUOTES.length)
  const next = () => setCurrent(c => (c + 1) % REVIEW_QUOTES.length)

  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
      aria-labelledby="reviews-heading"
    >
      {/* Ambient glow */}
      <div
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(139,69,19,0.05)', filter: 'blur(100px)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
            <span className="text-xs uppercase tracking-[0.20em] font-semibold" style={{ color: 'var(--color-accent)' }}>
              What People Say
            </span>
            <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
          </div>
          <h2
            id="reviews-heading"
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-text)' }}
          >
            500+ Google reviews.<br />All of them sound like this.
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--color-accent)' }} />
            ))}
            <span className="ml-2 text-sm font-semibold" style={{ color: 'var(--color-text)' }}>4.8 / 5</span>
          </div>
        </AnimatedSection>

        {/* Testimonial slider */}
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 border relative overflow-hidden"
            style={{
              background: 'var(--color-card)',
              borderColor: 'var(--color-border)',
              boxShadow: 'var(--shadow-lg)',
              backdropFilter: 'blur(8px)',
              minHeight: '200px',
            }}
          >
            {/* Quote mark */}
            <span
              className="absolute top-6 left-8 font-display text-7xl leading-none opacity-10 select-none"
              style={{ color: 'var(--color-primary)' }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p
                  className="font-display italic text-xl md:text-2xl leading-relaxed mb-6 text-balance"
                  style={{ color: 'var(--color-text)' }}
                >
                  &ldquo;{REVIEW_QUOTES[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'var(--color-primary)', color: '#fff' }}
                  >
                    {REVIEW_QUOTES[current].author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                      {REVIEW_QUOTES[current].author}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {REVIEW_QUOTES[current].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {REVIEW_QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === current ? '24px' : '6px',
                    height: '6px',
                    background: i === current ? 'var(--color-primary)' : 'var(--color-border-hover)',
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="h-10 w-10 rounded-full border flex items-center justify-center transition-colors hover:border-primary"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next review"
                className="h-10 w-10 rounded-full border flex items-center justify-center transition-colors hover:border-primary"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
