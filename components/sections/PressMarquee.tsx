import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { PRESS_LOGOS } from '@/constants'

const pressText = [
  '"Best Sammies in Charleston"',
  '·',
  '"New & Notable"',
  '·',
  '"Top 50 Restaurants"',
  '·',
  '"Hot List Fall 2022"',
  '·',
  '"As Seen on Southern Charm"',
  '·',
  '"Charleston Is A Culinary Haven"',
  '·',
]

export default function PressMarquee() {
  const doubled = [...pressText, ...pressText]

  return (
    <section
      className="py-20 md:py-28"
      style={{ background: 'var(--color-bg)' }}
      aria-labelledby="press-heading"
    >
      <div className="site-container mb-12">
        <AnimatedSection className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
            <span className="text-xs uppercase tracking-[0.20em] font-semibold" style={{ color: 'var(--color-accent)' }}>
              As Seen In
            </span>
            <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
          </div>
          <h2
            id="press-heading"
            className="font-display font-bold mb-3"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--color-text)' }}
          >
            Charleston&apos;s most talked-about sandwich shop.
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Featured in 30+ local and national publications.
          </p>
        </AnimatedSection>
      </div>

      {/* Scrolling quote strip */}
      <div
        className="w-full overflow-hidden py-4 mb-10"
        style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
        aria-hidden="true"
      >
        <div className="flex">
          <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
            {doubled.map((text, i) => (
              <span
                key={i}
                className="text-xs uppercase tracking-[0.14em] font-semibold flex-shrink-0"
                style={{ color: text === '·' ? 'var(--color-accent)' : 'var(--color-text-muted)' }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Press logo grid */}
      <div className="site-container">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {PRESS_LOGOS.slice(0, 8).map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-4 rounded-xl border transition-all duration-200 hover:border-accent/40 group"
              style={{
                background: 'var(--color-card)',
                borderColor: 'var(--color-border)',
                height: '72px',
              }}
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} — featured The Pass Charleston`}
                width={120}
                height={40}
                className="object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-200"
                style={{ maxHeight: '36px', filter: 'var(--press-filter, grayscale(1))' }}
              />
            </div>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:gap-3 duration-200"
            style={{ color: 'var(--color-primary)' }}
          >
            Read Our Stories & Press Coverage
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
