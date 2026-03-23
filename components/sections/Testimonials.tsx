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
    <section className="section-xl relative overflow-hidden" style={{ background: 'var(--color-bg)' }} aria-labelledby="reviews-heading">
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(139,69,19,0.05)', filter: 'blur(100px)' }} aria-hidden="true" />

      <div className="site-container relative z-10">
        <AnimatedSection className="text-center section-eyebrow">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <div className="label-line" /><span className="label-text">What People Say</span><div className="label-line" />
          </div>
          <h2 id="reviews-heading" className="heading-xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)', marginBottom: '1rem' }}>
            500+ Google reviews.<br />All of them sound like this.
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'var(--color-accent)' }} />
            ))}
            <span style={{ marginLeft: '0.625rem', fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>4.8 / 5</span>
          </div>
        </AnimatedSection>

        {/* Slider */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="card-base relative overflow-hidden" style={{ padding: '3rem 3.5rem', minHeight: '260px' }}>
            {/* Big quote mark */}
            <span className="absolute font-display select-none" aria-hidden="true"
              style={{ top: '1.5rem', left: '2rem', fontSize: '6rem', lineHeight: 1, opacity: 0.08, color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }} style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', lineHeight: 1.65, color: 'var(--color-text)', marginBottom: '2rem', textWrap: 'balance' }}>
                  &ldquo;{REVIEW_QUOTES[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center text-xs font-bold rounded-full"
                    style={{ width: '2.25rem', height: '2.25rem', background: 'var(--color-primary)', color: '#fff', flexShrink: 0 }}>
                    {REVIEW_QUOTES[current].author[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>{REVIEW_QUOTES[current].author}</p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{REVIEW_QUOTES[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {REVIEW_QUOTES.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to review ${i + 1}`}
                  style={{ borderRadius: '9999px', height: '6px', width: i === current ? '24px' : '6px', background: i === current ? 'var(--color-primary)' : 'var(--color-border-hover)', transition: 'all 0.2s', border: 'none', cursor: 'pointer' }} />
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button onClick={prev} aria-label="Previous review"
                className="flex items-center justify-center rounded-full border transition-colors hover:border-primary"
                style={{ width: '2.75rem', height: '2.75rem', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', background: 'none', cursor: 'pointer' }}>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} aria-label="Next review"
                className="flex items-center justify-center rounded-full border transition-colors hover:border-primary"
                style={{ width: '2.75rem', height: '2.75rem', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', background: 'none', cursor: 'pointer' }}>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
