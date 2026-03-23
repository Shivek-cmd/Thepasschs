'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { SITE } from '@/constants'
import MagneticButton from '@/components/ui/MagneticButton'

const slides = [
  {
    id: 0,
    image: '/images/storefront.jpg',
    fallback: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594496978-4OJF90WIDOTGO823PLFE/SpecSand.jpg',
    alt: 'The Pass storefront — Panino and Provisions',
    headline1: ['Two', 'Locations.'],
    headline2: ['One', 'Promise.'],
    tag: 'Downtown CHS · Mount Pleasant',
    cta: { label: 'Find Us', href: '/menu', external: false },
  },
  {
    id: 1,
    image: '/images/interior.jpg',
    fallback: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594352675-58WC29PRSSU1P008714K/03222022_The-Pass_Andrew-Cebulka-5559.jpg',
    alt: 'The Pass interior — Charleston\'s favourite Italian deli',
    headline1: ['Unapologetically', 'Italian.'],
    headline2: ['Deceptively', 'Good.'],
    tag: 'Charleston & Mount Pleasant',
    cta: { label: 'Find Us', href: '/menu', external: false },
  },
  {
    id: 2,
    image: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594352675-58WC29PRSSU1P008714K/03222022_The-Pass_Andrew-Cebulka-5559.jpg',
    fallback: null,
    alt: 'Handcrafted Italian sandwiches at The Pass Charleston',
    headline1: ['Handcrafted', 'Sandwiches.'],
    headline2: ['Sourced', 'Obsessively.'],
    tag: 'Market Menu',
    cta: { label: 'Explore the Menu', href: '/menu', external: false },
  },

]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [imgError, setImgError] = useState<Record<number, boolean>>({})
  const total = slides.length

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const slide = slides[current]
  const imgSrc = imgError[slide.id] ? (slide.fallback ?? '') : slide.image

  return (
    <section className="relative w-full overflow-hidden hero-diagonal" style={{ minHeight: '100svh' }}>

      {/* ── Background Images ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }}
          className="absolute inset-0 scale-105"
          aria-hidden="true"
        >
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={slide.alt}
              fill className="object-cover" priority={slide.id === 0}
              sizes="100vw"
              onError={() => setImgError(e => ({ ...e, [slide.id]: true }))}
            />
          )}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,8,6,0.93) 0%, rgba(10,8,6,0.68) 55%, rgba(10,8,6,0.38) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.65) 0%, transparent 50%)' }} />
        </motion.div>
      </AnimatePresence>

      {/* ── Decorative rings ── */}
      <motion.svg initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.5 }}
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none"
        width="700" height="700" viewBox="0 0 700 700" aria-hidden="true">
        <circle cx="350" cy="350" r="200" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
        <circle cx="350" cy="350" r="300" fill="none" stroke="rgba(201,168,76,0.07)" strokeWidth="1" />
        <circle cx="350" cy="350" r="340" fill="none" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
      </motion.svg>

      {/* ── Slide content ── */}
      <div className="relative z-10 site-container flex flex-col justify-center" style={{ minHeight: '100svh', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '680px' }}>

          {/* Eyebrow label */}
          <AnimatePresence mode="wait">
            <motion.div key={`label-${slide.id}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}
              className="section-label" style={{ marginBottom: 'var(--space-5)' }}>
              <div className="label-line" /><span className="label-text">{slide.tag}</span>
            </motion.div>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1 key={`h-${slide.id}`} className="text-display" style={{ marginBottom: 'var(--space-4)' }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.55 }}>
              <div style={{ overflow: 'hidden', marginBottom: '0.05em' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.3em' }}>
                  {slide.headline1.map((word, i) => (
                    <span key={i} className="inline-block text-hero"
                      style={{ color: i === 0 ? 'transparent' : '#fff' }}>
                      {i === 0 ? <span className="text-shimmer">{word}</span> : word}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.3em' }}>
                  {slide.headline2.map((word, i) => (
                    <span key={i} className="inline-block text-hero" style={{ color: '#fff' }}>{word}</span>
                  ))}
                </div>
              </div>
            </motion.h1>
          </AnimatePresence>

          {/* Description (only slide 0) */}
          {slide.id === 0 && (
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
              className="text-body-lg" style={{ marginBottom: 'var(--space-6)', maxWidth: '500px', color: 'rgba(240,235,227,0.78)' }}>
              Handcrafted Italian-American sandwiches, curated provisions, and a tiny sandwich shop Charleston can&apos;t stop talking about.
            </motion.p>
          )}
          {slide.id === 1 && (
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
              className="text-body-lg" style={{ marginBottom: 'var(--space-6)', maxWidth: '500px', color: 'rgba(240,235,227,0.78)' }}>
              11 Italian-American sandwiches, 3 artisan salads, and a provisions case that changes with the seasons.
            </motion.p>
          )}
          {slide.id === 2 && (
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
              className="text-body-lg" style={{ marginBottom: 'var(--space-6)', maxWidth: '500px', color: 'rgba(240,235,227,0.78)' }}>
              Visit us Downtown on Saint Philip St. or in Mount Pleasant at Northcutt Plaza. Order online from either location.
            </motion.p>
          )}

          {/* CTAs — both order buttons on every slide */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-sm)', marginBottom: 'var(--space-6)' }}>
            <MagneticButton>
              <a href={SITE.orderOnlineCHS} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
                Order — Downtown <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>
            <a href={SITE.orderOnlineMTP} target="_blank" rel="noopener noreferrer" className="btn-outline btn-lg"
              style={{ borderColor: 'rgba(240,235,227,0.32)', color: 'rgba(240,235,227,0.92)' }}>
              Order — Mt. Pleasant
            </a>
          </motion.div>

          {/* Tags (slide 0 only) */}
          {slide.id === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="hero-tags">
              {['Dine-In · Take-Out · Delivery', 'Open Wed – Sun (CHS)', 'Open Mon – Sat (Mt. P)'].map((tag, i) => (
                <span key={i} className="tag-pill tag-dark">{tag}</span>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Slide indicators + nav ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button onClick={prev} aria-label="Previous slide"
          style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(240,235,227,0.25)', background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="rgba(240,235,227,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div style={{ display: 'flex', gap: 8 }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`}
              style={{ width: i === current ? 28 : 8, height: 8, borderRadius: 4, background: i === current ? 'var(--color-accent)' : 'rgba(240,235,227,0.28)', border: 'none', cursor: 'pointer', transition: 'all 0.4s' }} />
          ))}
        </div>
        <button onClick={next} aria-label="Next slide"
          style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(240,235,227,0.25)', background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="rgba(240,235,227,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-10 right-8 z-10 hidden md:flex flex-col items-center gap-2" aria-hidden="true">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" style={{ color: 'rgba(240,235,227,0.35)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
