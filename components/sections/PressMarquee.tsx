import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { PRESS_LOGOS } from '@/constants'

const pressText = ['"Best Sammies in Charleston"','·','"New & Notable"','·','"Top 50 Restaurants"','·','"Hot List Fall 2022"','·','"As Seen on Southern Charm"','·','"Charleston Is A Culinary Haven"','·']

export default function PressMarquee() {
  return (
    <section className="section-lg" style={{ background: 'var(--color-bg)' }}>
      <div className="site-container section-eyebrow">
        <AnimatedSection className="text-center">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <div className="label-line" /><span className="label-text">As Seen In</span><div className="label-line" />
          </div>
          <h2 className="text-h2" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>
            Charleston&apos;s most talked-about sandwich shop.
          </h2>
          <p className="text-body-sm">Featured in 30+ local and national publications.</p>
        </AnimatedSection>
      </div>

      <div className="w-full overflow-hidden" style={{ padding: 'var(--space-4) 0', marginBottom: 'var(--space-10)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }} aria-hidden="true">
        <div className="flex">
          <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', whiteSpace: 'nowrap' }}>
            {[...pressText, ...pressText].map((text, i) => (
              <span key={i} className="text-caption uppercase flex-shrink-0" style={{ letterSpacing: 'var(--tracking-wider)', color: text === '·' ? 'var(--color-accent)' : 'var(--color-text-muted)', fontWeight: 600 }}>{text}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="site-container">
        <div className="grid-4col" style={{ alignItems: 'center' }}>
          {PRESS_LOGOS.slice(0, 8).map((logo) => (
            <div key={logo.name} className="card-base flex items-center justify-center transition-all duration-200 group" style={{ padding: 'var(--space-4)', height: '72px' }} title={logo.name}>
              <Image src={logo.src} alt={`${logo.name} — featured The Pass Charleston`}
                width={120} height={40} className="object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-200" style={{ maxHeight: '36px' }} />
            </div>
          ))}
        </div>
        <AnimatedSection delay={0.2} className="text-center" style={{ marginTop: 'var(--space-10)' }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors text-primary hover:gap-3 duration-200">
            Read Our Stories & Press Coverage <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
