'use client'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Counter from '@/components/ui/Counter'
import { STATS } from '@/constants'

export default function Story() {
  return (
    <section
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
      style={{ background: 'var(--color-bg-secondary)' }}
      aria-labelledby="story-heading"
    >
      {/* Ambient glow */}
      <div
        className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(139,69,19,0.06)', filter: 'blur(100px)' }}
        aria-hidden="true"
      />

      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">

          {/* Text */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
                <span className="text-xs uppercase tracking-[0.20em] font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Our Story
                </span>
              </div>
              <h2
                id="story-heading"
                className="font-display font-bold mb-6 text-balance"
                style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', color: 'var(--color-text)' }}
              >
                A Philly kid. A CIA degree.<br />
                A 700 sq ft dream in Charleston.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                <p>
                  After 20 years working in fine dining restaurants across the country — and winning on CNBC&apos;s <em>Restaurant Startup</em> — Chef Anthony Marini had a simple idea: make really good sandwiches for people he loved.
                </p>
                <p>
                  He fell in love with Charleston, found a tiny corner space at 207A Saint Philip Street, and opened The Pass in 2021. No pretension. No fuss. Just Italian-American soul food done with serious craft.
                </p>
                <p>
                  The &quot;Such a Nice Italian Boy&quot; went viral. Charleston Magazine named us notable. Bravo&apos;s <em>Southern Charm</em> mentioned us. The Post & Courier came. Southern Living came. And then a Maserati came — through our front door at 2AM in February 2024.
                </p>
                <p>
                  We reopened five days later. The trident still hangs on our wall.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.2} className="mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
                {STATS.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span
                      className="font-display font-bold"
                      style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--color-primary)' }}
                    >
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="text-xs uppercase tracking-[0.12em]" style={{ color: 'var(--color-text-subtle)' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Image stack */}
          <AnimatedSection direction="right" className="relative">
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ aspectRatio: '3/4', boxShadow: 'var(--shadow-xl)' }}
              >
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/60bd7353a93337235ec6e8d5/1643588112321-RSBUUZYOND3ZDIZIYKES/AnthonyMarini_web_thumb-300x300.jpg"
                  alt="Chef Anthony Marini — Owner of The Pass, artisan deli in Charleston SC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              {/* Floating card */}
              <div
                className="absolute -bottom-6 -left-6 rounded-xl p-4 border"
                style={{
                  background: 'var(--color-bg)',
                  borderColor: 'var(--color-border)',
                  boxShadow: 'var(--shadow-lg)',
                  backdropFilter: 'blur(12px)',
                  maxWidth: '200px',
                }}
              >
                <p className="font-display font-semibold text-sm mb-0.5" style={{ color: 'var(--color-text)' }}>
                  Chef Anthony Marini
                </p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  CIA Graduate · CNBC Winner<br />Owner & Chef
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--color-accent)' }}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs ml-1" style={{ color: 'var(--color-text-muted)' }}>500+ reviews</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
