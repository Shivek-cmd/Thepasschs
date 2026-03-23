import Link from 'next/link'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { LOCATIONS, SITE } from '@/constants'

export default function Locations() {
  const locs = [
    { ...LOCATIONS.chs, orderUrl: SITE.orderOnlineCHS, badge: 'Original Location' },
    { ...LOCATIONS.mtp, orderUrl: SITE.orderOnlineMTP, badge: 'Now Open' },
  ]
  return (
    <section className="section-xl" style={{ background: 'var(--color-bg-secondary)' }} aria-labelledby="locations-heading">
      <div className="site-container">
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
            <span className="uppercase tracking-[0.20em] font-semibold text-xs" style={{ color: 'var(--color-accent)' }}>Find Us</span>
          </div>
          <h2 id="locations-heading" className="heading-lg text-balance" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
            Two locations.<br />Same handcrafted love.
          </h2>
        </AnimatedSection>
        <div className="grid-2col">
          {locs.map((loc, i) => (
            <AnimatedSection key={loc.name} delay={i * 0.12}>
              <div className="rounded-2xl p-8 border h-full" style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-card)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column' }}>
                <span className="inline-block text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full mb-5 w-fit" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-accent)' }}>{loc.badge}</span>
                <h3 className="heading-md mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{loc.name}</h3>
                <p className="text-xs mb-6" style={{ color: 'var(--color-text-subtle)' }}>{loc.corner}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', flex: 1 }}>
                  <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} /><a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed hover:text-primary transition-colors" style={{ color: 'var(--color-text-muted)' }}>{loc.address}<br />{loc.city}</a></li>
                  <li className="flex items-center gap-3"><Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} /><a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="text-sm hover:text-primary transition-colors" style={{ color: 'var(--color-text-muted)' }}>{loc.phone}</a></li>
                  {loc.hours.map((h, j) => (<li key={j} className="flex items-center gap-3"><Clock className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} /><span className="text-sm" style={{ color: 'var(--color-text-muted)' }}><span className="font-medium" style={{ color: 'var(--color-text)' }}>{h.days}</span> · {h.time}</span></li>))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <a href={loc.orderUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-glow" style={{ background: 'var(--color-primary)', color: '#fff' }}>Order Online <ExternalLink className="w-3.5 h-3.5" /></a>
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200" style={{ borderColor: 'var(--color-border-hover)', color: 'var(--color-text-muted)' }}>Get Directions <MapPin className="w-3.5 h-3.5" /></a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Questions about catering or events?{' '}<a href={`mailto:${SITE.email}`} className="font-medium hover:underline transition-colors" style={{ color: 'var(--color-primary)' }}>{SITE.email}</a></p>
        </AnimatedSection>
      </div>
    </section>
  )
}
