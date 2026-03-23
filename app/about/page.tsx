import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE, LOCATIONS, STATS } from '@/constants'

export const metadata: Metadata = {
  title: 'About Us | The Pass — Artisan Deli & Market | Charleston, SC',
  description: "The story behind Charleston's most-loved Italian artisan deli. Handcrafted sandwiches, obsessive sourcing, and the people who make it happen. Two locations — Downtown & Mount Pleasant.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: 'Our Story — The Pass Artisan Deli | Charleston, SC',
    description: "The people, the process, and the passion behind Charleston's favourite Italian deli.",
    url: `${SITE.url}/about`,
    images: [{ url: '/og/og-default.jpg', width: 1200, height: 630, alt: 'The Pass — About Us' }],
  },
}

const values = [
  { title: 'No Shortcuts.', body: 'Every element of every sandwich is deliberate. Housemade where possible, sourced obsessively where not. We will never sacrifice quality for convenience.' },
  { title: 'Italian at Heart.', body: 'The menu is rooted in Italian-American food tradition — not the red-sauce American version, but the real thing. Generous, ingredient-forward, and always soulful.' },
  { title: 'Community First.', body: 'We are part of Charleston, not a brand dropped into it. Our bread comes from local bakers, our relationships are real, and we care deeply about the city that chose us.' },
  { title: 'Obsessively Seasonal.', body: 'The provisions case changes. The specials shift. We work with what\'s good right now, not what\'s easiest to source year-round.' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '4rem' }}>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594352675-58WC29PRSSU1P008714K/03222022_The-Pass_Andrew-Cebulka-5559.jpg"
            alt="Inside The Pass — Anthony behind the marble counter"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,8,6,0.97) 0%, rgba(10,8,6,0.75) 55%, rgba(10,8,6,0.30) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.55) 0%, transparent 60%)' }} />
        </div>
        <div className="site-container relative z-10 section-md">
          <AnimatedSection>
            <div className="section-label">
              <div className="label-line" /><span className="label-text">Our Story</span>
            </div>
            <h1 className="text-h1" style={{ color: '#F0EBE3', marginBottom: 'var(--space-4)', maxWidth: '580px', lineHeight: 1.1 }}>
              Built on obsession.<br />Served with love.
            </h1>
            <p className="text-body-lg" style={{ color: 'rgba(240,235,227,0.72)', maxWidth: '480px' }}>
              The Pass started as a simple idea — what if Charleston had an Italian deli that actually cared? No shortcuts. No frozen bread. Just the real thing, done right.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Story Section ─── */}
      <section className="section-lg" style={{ background: 'var(--color-bg)' }}>
        <div className="site-container">
          <div className="grid-asymmetric">
            <AnimatedSection>
              <div className="section-label"><div className="label-line" /><span className="label-text">The Beginning</span></div>
              <h2 className="text-h2" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-6)' }}>
                A sandwich shop with<br />a chip on its shoulder.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: '560px' }}>
                <p className="text-body">
                  The Pass was born out of a deep love for real Italian-American food and a frustration with the mediocre. We believed Charleston deserved better — a place where the bread is fresh, the cured meats are imported with intention, and every sandwich is built like it matters.
                </p>
                <p className="text-body">
                  In a city full of great restaurants, we carved out a different lane: a small, focused, obsessive deli. The kind you&apos;d find on a side street in Philadelphia, or tucked into a neighbourhood in New York — but with a distinctly Charleston soul.
                </p>
                <p className="text-body">
                  We don&apos;t pretend to be a restaurant. We&apos;re a sandwich shop. And we take that seriously.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', aspectRatio: '4/5' }}>
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594496978-4OJF90WIDOTGO823PLFE/SpecSand.jpg"
                  alt="The Pass storefront — Panino and Provisions"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,6,0.4) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 'var(--space-6)', left: 'var(--space-6)', right: 'var(--space-6)' }}>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                    The Pass — Panino & Provisions
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="site-container" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="grid-4col">
            {STATS.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)', fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1 }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="section-lg" style={{ background: 'var(--color-bg)' }}>
        <div className="site-container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>
                <div className="label-line" /><span className="label-text">What We Stand For</span><div className="label-line" />
              </div>
              <h2 className="text-h2" style={{ color: 'var(--color-text)' }}>Four things we will<br />never compromise on.</h2>
            </div>
          </AnimatedSection>
          <div className="grid-2col">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ borderRadius: 'var(--radius-2xl)', border: '1px solid var(--color-border)', background: 'var(--color-card)', padding: 'var(--card-padding-lg)', height: '100%' }}>
                  <div style={{ width: 40, height: 2, background: 'var(--color-accent)', marginBottom: 'var(--space-5)' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--color-text)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>{v.title}</h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Locations ─── */}
      <section className="section-lg" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="site-container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>
                <div className="label-line" /><span className="label-text">Find Us</span><div className="label-line" />
              </div>
              <h2 className="text-h2" style={{ color: 'var(--color-text)' }}>Two locations.<br />Same obsession.</h2>
            </div>
          </AnimatedSection>
          <div className="grid-2col">
            {[LOCATIONS.chs, LOCATIONS.mtp].map((loc, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div style={{ borderRadius: 'var(--radius-2xl)', border: '1px solid var(--color-border)', background: 'var(--color-card)', overflow: 'hidden' }}>
                  {/* Location image */}
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <Image
                      src={i === 0 ? 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594352675-58WC29PRSSU1P008714K/03222022_The-Pass_Andrew-Cebulka-5559.jpg' : 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594496978-4OJF90WIDOTGO823PLFE/SpecSand.jpg'}
                      alt={loc.name}
                      fill className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,6,0.6) 0%, transparent 60%)' }} />
                    <div style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-5)' }}>
                      <span style={{ fontSize: 'var(--text-xs)', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                        {i === 0 ? 'Downtown CHS' : 'Mount Pleasant'}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: 'var(--card-padding)' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--color-text)', fontWeight: 700, marginBottom: 'var(--space-5)' }}>{loc.name}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                        <MapPin style={{ width: 16, height: 16, color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
                        <div>
                          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text)', fontWeight: 500 }}>{loc.address}</p>
                          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{loc.city}</p>
                          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{loc.corner}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                        <Clock style={{ width: 16, height: 16, color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
                        <div>
                          {loc.hours.map((h, j) => (
                            <p key={j} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>{h.days}</span> · {h.time}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <Phone style={{ width: 16, height: 16, color: 'var(--color-accent)', flexShrink: 0 }} />
                        <a href={`tel:${loc.phone}`} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{loc.phone}</a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--gap-xs)', flexWrap: 'wrap' }}>
                      <a href={i === 0 ? SITE.orderOnlineCHS : SITE.orderOnlineMTP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 'var(--text-sm)', padding: 'var(--btn-padding-md)' }}>
                        Order Online <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 'var(--text-sm)', padding: 'var(--btn-padding-md)' }}>
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-md" style={{ background: 'var(--color-primary)', backgroundImage: 'linear-gradient(135deg, var(--color-primary) 0%, #6B340F 100%)' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', color: '#fff', marginBottom: 'var(--space-3)', fontWeight: 700 }}>
              Come say hello.
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.75)', marginBottom: 'var(--space-8)', maxWidth: '380px', margin: '0 auto var(--space-8)' }}>
              The sandwiches are better in person. Trust us.
            </p>
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/menu" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--gap-xs)', padding: 'var(--btn-padding-lg)', background: '#fff', color: 'var(--color-primary)', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: 'var(--text-base)' }}>
                See the Menu <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/catering" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--gap-xs)', padding: 'var(--btn-padding-lg)', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: 'var(--text-base)' }}>
                Catering
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
