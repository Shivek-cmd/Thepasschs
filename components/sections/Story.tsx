'use client'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Counter from '@/components/ui/Counter'
import { STATS } from '@/constants'

export default function Story() {
  return (
    <section className="section-xl relative overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none" style={{ background: 'rgba(139,69,19,0.06)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="site-container">
        <div className="grid-asymmetric">
          <div>
            <AnimatedSection>
              <div className="section-label"><div className="label-line" /><span className="label-text">Our Story</span></div>
              <h2 className="text-h1 text-balance" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-6)' }}>
                A Philly kid. A CIA degree.<br />A 700 sq ft dream in Charleston.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginBottom: 'var(--space-10)' }}>
                {[
                  "After 20 years working in fine dining restaurants across the country — and winning on CNBC's Restaurant Startup — Chef Anthony Marini had a simple idea: make really good sandwiches for people he loved.",
                  "He fell in love with Charleston, found a tiny corner space at 207A Saint Philip Street, and opened The Pass in 2021. No pretension. No fuss. Just Italian-American soul food done with serious craft.",
                  "The \"Such a Nice Italian Boy\" went viral. Charleston Magazine named us notable. Bravo's Southern Charm mentioned us. The Post & Courier came. Southern Living came. And then a Maserati came — through our front door at 2AM in February 2024.",
                  "We reopened five days later. The trident still hangs on our wall."
                ].map((p, i) => <p key={i} className="text-body">{p}</p>)}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="stats-grid">
                {STATS.map((stat, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                    <span className="text-h1" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="text-caption" style={{ textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection direction="right" className="relative">
            <div className="relative">
              <div className="card-base overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image src="/images/man.jpg"
                  alt="Chef Anthony Marini — Owner of The Pass" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
              <div className="card-base" style={{ position: 'absolute', bottom: 'calc(var(--space-6) * -1)', left: 'calc(var(--space-6) * -1)', padding: 'var(--space-4)', maxWidth: '200px' }}>
                <p className="text-h4" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>Chef Anthony Marini</p>
                <p className="text-body-sm" style={{ marginBottom: 'var(--space-3)' }}>CIA Graduate · CNBC Winner<br />Owner & Chef</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--color-accent)' }}><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                  <span className="text-caption" style={{ marginLeft: 'var(--space-1)' }}>500+ reviews</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
