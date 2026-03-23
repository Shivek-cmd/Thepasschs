import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { LOCATIONS, SITE } from '@/constants'

export default function Locations() {
  const locs = [
    { ...LOCATIONS.chs, orderUrl: SITE.orderOnlineCHS, badge: 'Original Location' },
    { ...LOCATIONS.mtp, orderUrl: SITE.orderOnlineMTP, badge: 'Now Open' },
  ]
  return (
    <section className="section-xl" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="site-container">
        <AnimatedSection className="section-eyebrow">
          <div className="section-label"><div className="label-line" /><span className="label-text">Find Us</span></div>
          <h2 className="text-h1 text-balance" style={{ color: 'var(--color-text)' }}>
            Two locations.<br />Same handcrafted love.
          </h2>
        </AnimatedSection>

        <div className="grid-2col">
          {locs.map((loc, i) => (
            <AnimatedSection key={loc.name} delay={i * 0.12}>
              <div className="card-base card-body h-full" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="tag-pill tag-ghost" style={{ marginBottom: 'var(--space-5)', alignSelf: 'flex-start' }}>{loc.badge}</span>
                <h3 className="text-h2" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>{loc.name}</h3>
                <p className="text-caption" style={{ marginBottom: 'var(--space-6)' }}>{loc.corner}</p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)', flex: 1 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <MapPin style={{ width: '1rem', height: '1rem', marginTop: '0.2rem', flexShrink: 0, color: 'var(--color-accent)' }} />
                    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="text-body-sm hover:text-primary transition-colors">
                      {loc.address}<br />{loc.city}
                    </a>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <Phone style={{ width: '1rem', height: '1rem', flexShrink: 0, color: 'var(--color-accent)' }} />
                    <a href={`tel:${loc.phone.replace(/[^0-9]/g,'')}`} className="text-body-sm hover:text-primary transition-colors">{loc.phone}</a>
                  </li>
                  {loc.hours.map((h, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <Clock style={{ width: '1rem', height: '1rem', flexShrink: 0, color: 'var(--color-accent)' }} />
                      <span className="text-body-sm"><strong style={{ color: 'var(--color-text)' }}>{h.days}</strong> · {h.time}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xs)' }}>
                  <a href={loc.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Order Online <ExternalLink style={{ width: '0.875rem', height: '0.875rem' }} />
                  </a>
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    Get Directions <MapPin style={{ width: '0.875rem', height: '0.875rem' }} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center" style={{ marginTop: 'var(--space-10)' }}>
          <p className="text-body-sm">Questions about catering or events?{' '}
            <a href={`mailto:${SITE.email}`} className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>{SITE.email}</a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
