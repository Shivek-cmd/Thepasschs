'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { SITE } from '@/constants'
import MagneticButton from '@/components/ui/MagneticButton'

const headline1 = ['Unapologetically', 'Italian.']
const headline2 = ['Deceptively', 'Good.']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 700], [0, 210])

  return (
    <section ref={ref} className="relative w-full overflow-hidden hero-diagonal" style={{ minHeight: '100svh' }} aria-label="Welcome to The Pass">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110" aria-hidden="true">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594352675-58WC29PRSSU1P008714K/03222022_The-Pass_Andrew-Cebulka-5559.jpg"
          alt="The Pass artisan sandwiches — handcrafted Italian deli in Charleston SC"
          fill className="object-cover" priority sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,8,6,0.92) 0%, rgba(10,8,6,0.65) 55%, rgba(10,8,6,0.40) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.70) 0%, transparent 50%)' }} />
      </motion.div>

      {/* SVG rings */}
      <motion.svg initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.5 }}
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none"
        width="700" height="700" viewBox="0 0 700 700" aria-hidden="true">
        <circle cx="350" cy="350" r="200" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
        <circle cx="350" cy="350" r="300" fill="none" stroke="rgba(201,168,76,0.07)" strokeWidth="1" />
        <circle cx="350" cy="350" r="340" fill="none" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
      </motion.svg>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{ background: 'rgba(201,168,76,0.06)', filter: 'blur(120px)' }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 site-container flex flex-col justify-center" style={{ minHeight: '100svh', paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '680px' }}>

          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="section-label" style={{ marginBottom: '1.5rem' }}>
            <div className="label-line" />
            <span className="label-text">Charleston & Mount Pleasant</span>
          </motion.div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>
            <div style={{ overflow: 'hidden', marginBottom: '0.25rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.5rem' }}>
                {headline1.map((word, i) => (
                  <motion.span key={i} className="inline-block heading-hero"
                    style={{ color: i === 0 ? 'transparent' : '#fff' }}
                    initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}>
                    {i === 0 ? <span className="text-shimmer">{word}</span> : word}
                  </motion.span>
                ))}
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.5rem' }}>
                {headline2.map((word, i) => (
                  <motion.span key={i} className="inline-block heading-hero" style={{ color: '#fff' }}
                    initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 + i * 0.1 }}>
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </h1>

          {/* Subtext */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
            style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '520px', color: 'rgba(240,235,227,0.78)' }}>
            Handcrafted Italian-American sandwiches, curated provisions, and a tiny sandwich shop that Charleston can&apos;t stop talking about.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <MagneticButton>
              <a href={SITE.orderOnlineCHS} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-semibold transition-all duration-200 hover:shadow-glow"
                style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.875rem 1.75rem', borderRadius: '9999px', fontSize: '1rem' }}>
                Order Online <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>
            <Link href="/menu"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-200"
              style={{ border: '1px solid rgba(240,235,227,0.32)', color: 'rgba(240,235,227,0.92)', padding: '0.875rem 1.75rem', borderRadius: '9999px', fontSize: '1rem' }}>
              See the Menu
            </Link>
          </motion.div>

          {/* Location tags — FIXED SPACING */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}
            className="hero-tags">
            {[
              'Dine-In · Take-Out · Delivery',
              'Open Wed – Sun (CHS)',
              'Open Mon – Sat (Mt. P)',
            ].map((tag, i) => (
              <span key={i} className="tag-pill"
                style={{ background: 'rgba(240,235,227,0.10)', color: 'rgba(240,235,227,0.70)', border: '1px solid rgba(240,235,227,0.14)' }}>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" aria-hidden="true">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" style={{ color: 'rgba(240,235,227,0.40)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
