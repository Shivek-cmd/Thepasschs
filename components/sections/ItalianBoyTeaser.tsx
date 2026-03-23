import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import MagneticButton from '@/components/ui/MagneticButton'
import { SITE } from '@/constants'

export default function ItalianBoyTeaser() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{ background: 'var(--color-bg-elevated)' }}
      aria-labelledby="italianboy-heading"
    >
      {/* Dark overlay for atmosphere */}
      <div className="absolute inset-0" style={{ background: 'rgba(14,12,10,0.88)' }} aria-hidden="true" />

      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/09302024_The-Pass_Andrew-Cebulka-10510-2.jpg"
          alt="The Italian Boy After Dark — intimate dining experience inside The Pass, Charleston"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>

      {/* Concentric rings */}
      <svg
        className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        aria-hidden="true"
      >
        <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
        <circle cx="250" cy="250" r="240" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
      </svg>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(201,168,76,0.06)', filter: 'blur(100px)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: 'var(--color-accent)' }}>
                Wednesday — Saturday Evenings
              </span>
              <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mb-6">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/536940a6-0eb4-43c0-a34c-e14e91497ccb/ItalianBoy_logo-11.png"
                alt="The Italian Boy After Dark logo"
                width={280}
                height={100}
                className="object-contain mx-auto"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2
              id="italianboy-heading"
              className="font-display font-bold text-white mb-5 sr-only"
            >
              The Italian Boy After Dark
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed mb-4"
              style={{ color: 'rgba(240,235,227,0.80)' }}
            >
              Nothing like the daytime.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: 'rgba(240,235,227,0.60)' }}
            >
              Twelve seats. One seating at 7PM. A six-course journey through Italian rowhome cooking
              — inside the same tiny 700 sq ft sandwich shop you love, transformed after dark.
              $120 per person. Reservations required.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <a
                href={SITE.resy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-glow"
                style={{ background: 'var(--color-accent)', color: '#1C1A17' }}
              >
                Reserve on Resy
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>
            <Link
              href="/the-italian-boy"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200"
              style={{ borderColor: 'rgba(240,235,227,0.25)', color: 'rgba(240,235,227,0.85)' }}
            >
              Learn More
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
