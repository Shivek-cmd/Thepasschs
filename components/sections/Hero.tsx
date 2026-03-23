'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { SITE } from '@/constants'
import MagneticButton from '@/components/ui/MagneticButton'

const headline = ['Unapologetically', 'Italian.']
const headline2 = ['Deceptively', 'Good.']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 700], [0, 210])

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden hero-diagonal"
      style={{ minHeight: '100svh' }}
      aria-label="Welcome to The Pass"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
        aria-hidden="true"
      >
        <Image
          src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594352675-58WC29PRSSU1P008714K/03222022_The-Pass_Andrew-Cebulka-5559.jpg"
          alt="The Pass artisan sandwiches — handcrafted Italian deli in Charleston SC"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(14,12,10,0.82) 0%, rgba(14,12,10,0.45) 60%, rgba(14,12,10,0.30) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(14,12,10,0.60) 0%, transparent 50%)',
          }}
        />
      </motion.div>

      {/* Concentric rings */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none"
        width="700"
        height="700"
        viewBox="0 0 700 700"
        aria-hidden="true"
      >
        <circle cx="350" cy="350" r="200" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
        <circle cx="350" cy="350" r="300" fill="none" stroke="rgba(201,168,76,0.07)" strokeWidth="1" />
        <circle cx="350" cy="350" r="340" fill="none" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
      </motion.svg>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{ background: 'rgba(201,168,76,0.06)', filter: 'blur(120px)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center" style={{ minHeight: '100svh', paddingTop: '5rem' }}>
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
            <span
              className="text-xs uppercase tracking-[0.22em] font-semibold"
              style={{ color: 'var(--color-accent)' }}
            >
              Charleston & Mount Pleasant
            </span>
          </motion.div>

          {/* Main headline */}
          <h1 className="font-display text-white mb-3">
            <div className="overflow-hidden mb-1">
              <div className="flex flex-wrap gap-x-4">
                {headline.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    style={{
                      fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
                      lineHeight: 1.05,
                      fontWeight: 800,
                    }}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                  >
                    {i === 0 ? (
                      <span className="text-shimmer">{word}</span>
                    ) : word}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="flex flex-wrap gap-x-4">
                {headline2.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block text-white"
                    style={{
                      fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
                      lineHeight: 1.05,
                      fontWeight: 800,
                    }}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 + i * 0.1 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            style={{ color: 'rgba(240,235,227,0.75)' }}
          >
            Handcrafted Italian-American sandwiches, curated provisions, and a tiny sandwich shop
            that Charleston can&apos;t stop talking about.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <Link
                href={SITE.orderOnlineCHS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-200 hover:shadow-glow"
                style={{ background: 'var(--color-primary)', color: '#fff' }}
              >
                Order Online
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold border transition-all duration-200"
              style={{
                borderColor: 'rgba(240,235,227,0.30)',
                color: 'rgba(240,235,227,0.90)',
              }}
            >
              See the Menu
            </Link>
          </motion.div>

          {/* Location tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center gap-3 mt-8"
          >
            {[
              'Dine-In · Take-Out · Delivery',
              'Open Wed – Sun (CHS)',
              'Open Mon – Sat (Mt. P)',
            ].map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(240,235,227,0.10)',
                  color: 'rgba(240,235,227,0.65)',
                  border: '1px solid rgba(240,235,227,0.12)',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: 'rgba(240,235,227,0.40)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
