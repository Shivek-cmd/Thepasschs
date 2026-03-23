import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import MagneticButton from '@/components/ui/MagneticButton'
import { SITE } from '@/constants'

export default function ItalianBoyTeaser() {
  return (
    <section className="section-xl relative w-full overflow-hidden" style={{ background: 'var(--color-bg-elevated)' }}>

      <div className="site-container relative z-10">
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <div className="label-line" /><span className="label-text">Wednesday — Saturday Evenings</span><div className="label-line" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <Image src="/images/ItalianBoy.jpg"
                alt="The Italian Boy After Dark" width={280} height={280} className="object-contain mx-auto"
                style={{ borderRadius: '50%' }} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-display" style={{ fontStyle: 'italic', fontSize: 'var(--text-h3)', color: 'rgba(240,235,227,0.88)', marginBottom: 'var(--space-4)', lineHeight: 'var(--leading-snug)' }}>
              Nothing like the daytime.
            </p>
            <p className="text-body" style={{ color: 'rgba(240,235,227,0.62)', marginBottom: 'var(--space-10)', maxWidth: '560px', margin: '0 auto var(--space-10)' }}>
              Twelve seats. One seating at 7PM. A six-course journey through Italian rowhome cooking — inside the same tiny 700 sq ft sandwich shop you love, transformed after dark. $120 per person. Reservations required.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--gap-sm)', marginBottom: 'var(--space-8)' }}>
              <MagneticButton>
                <a href={SITE.resy} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Reserve on Resy <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticButton>
              <Link href="/the-italian-boy" className="btn-outline" style={{ borderColor: 'rgba(240,235,227,0.25)', color: 'rgba(240,235,227,0.85)' }}>
                Learn More
              </Link>
            </div>
            <div className="hero-tags" style={{ justifyContent: 'center' }}>
              {['$120 / Person', '12 Seats', '2 Hours', 'Prepaid via Resy'].map(tag => (
                <span key={tag} className="tag-pill tag-dark">{tag}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
