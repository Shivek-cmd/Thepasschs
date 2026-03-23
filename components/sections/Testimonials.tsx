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
    <section className="section-xl relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" style={{ background: 'rgba(139,69,19,0.05)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="site-container relative z-10">
        <AnimatedSection className="text-center section-eyebrow">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <div className="label-line" /><span className="label-text">What People Say</span><div className="label-line" />
          </div>
          <h2 className="text-h1" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>
            500+ Google reviews.<br />All of them sound like this.
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }}>
            {[...Array(5)].map((_, i) => <Star key={i} width={20} height={20} fill="currentColor" style={{ color: 'var(--color-accent)' }} />)}
            <span className="text-body font-semibold" style={{ marginLeft: 'var(--space-2)', color: 'var(--color-text)' }}>4.8 / 5</span>
          </div>
        </AnimatedSection>

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="card-base relative" style={{ padding: 'var(--space-12) var(--space-16)', minHeight: '260px' }}>
            <span aria-hidden="true" style={{ position: 'absolute', top: 'var(--space-6)', left: 'var(--space-8)', fontSize: '6rem', lineHeight: 1, opacity: 0.08, color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>
              &ldquo;
            </span>
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }} style={{ position: 'relative', zIndex: 1 }}>
                <p className="text-display" style={{ fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text)', marginBottom: 'var(--space-8)', textWrap: 'balance' }}>
                  &ldquo;{REVIEW_QUOTES[current].text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-xs)', fontWeight: 700, flexShrink: 0 }}>
                    {REVIEW_QUOTES[current].author[0]}
                  </div>
                  <div>
                    <p className="text-body" style={{ fontWeight: 600, color: 'var(--color-text)' }}>{REVIEW_QUOTES[current].author}</p>
                    <p className="text-body-sm">{REVIEW_QUOTES[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'var(--space-5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              {REVIEW_QUOTES.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Review ${i + 1}`}
                  style={{ borderRadius: 'var(--radius-full)', height: '6px', width: i === current ? '24px' : '6px', background: i === current ? 'var(--color-primary)' : 'var(--color-border-hover)', transition: 'all 0.2s', border: 'none', cursor: 'pointer' }} />
              ))}
            </div>
            <div style={{ display: 'flex', gap: 'var(--gap-xs)' }}>
              {[{ fn: prev, label: 'Previous', Icon: ChevronLeft }, { fn: next, label: 'Next', Icon: ChevronRight }].map(({ fn, label, Icon }) => (
                <button key={label} onClick={fn} aria-label={`${label} review`}
                  className="flex items-center justify-center rounded-full border transition-colors hover:border-primary"
                  style={{ width: '2.75rem', height: '2.75rem', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', background: 'none' }}>
                  <Icon width={16} height={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
