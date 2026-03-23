import Link from 'next/link'
import { Instagram, Facebook, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { SITE, LOCATIONS, NAV_LINKS } from '@/constants'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
      <div className="site-container section-md">
        <div className="grid-footer">

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1, marginBottom: 'var(--space-4)' }}>
              <span className="text-h3 font-bold" style={{ color: 'var(--color-text)' }}>The Pass</span>
              <span className="text-caption uppercase" style={{ letterSpacing: 'var(--tracking-widest)', color: 'var(--color-accent)', fontWeight: 700 }}>Artisan Deli & Market</span>
            </Link>
            <p className="text-body-sm" style={{ marginBottom: 'var(--space-6)', maxWidth: '240px' }}>
              Unapologetically Italian. Deceptively good. Charleston&apos;s most beloved artisan sandwich shop.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-sm)' }}>
              {[
                { href: SITE.instagram, Icon: Instagram, label: 'Instagram' },
                { href: SITE.facebook, Icon: Facebook, label: 'Facebook' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex items-center justify-center rounded-full border transition-colors hover:border-accent"
                  style={{ width: '2.25rem', height: '2.25rem', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                  <Icon width={16} height={16} />
                </a>
              ))}
              <a href={SITE.instagramItalianBoy} target="_blank" rel="noopener noreferrer" aria-label="@theitalianboychs Instagram"
                className="inline-flex items-center gap-1.5 rounded-full border transition-colors hover:border-accent"
                style={{ padding: 'var(--space-2) var(--space-3)', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', fontSize: 'var(--text-xs)' }}>
                <Instagram width={12} height={12} />@theitalianboychs
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-caption uppercase font-semibold" style={{ letterSpacing: 'var(--tracking-wider)', color: 'var(--color-text-subtle)', marginBottom: 'var(--space-5)' }}>Navigate</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {NAV_LINKS.map(link => (
                <li key={link.href}><Link href={link.href} className="text-body-sm hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
              {[
                { label: 'Reserve — Italian Boy', href: SITE.resy },
                { label: 'Loyalty Program', href: SITE.loyaltyProgram },
                { label: 'Gift Cards', href: SITE.giftCards },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-body-sm hover:text-primary transition-colors inline-flex items-center gap-1">
                    {label} <ExternalLink width={11} height={11} style={{ opacity: 0.6 }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CHS */}
          <div>
            <h3 className="text-caption uppercase font-semibold" style={{ letterSpacing: 'var(--tracking-wider)', color: 'var(--color-text-subtle)', marginBottom: 'var(--space-5)' }}>Downtown Charleston</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                <MapPin width={14} height={14} style={{ marginTop: '0.2rem', flexShrink: 0, color: 'var(--color-accent)' }} />
                <div>
                  <a href={LOCATIONS.chs.mapUrl} target="_blank" rel="noopener noreferrer" className="text-body-sm hover:text-primary transition-colors">
                    {LOCATIONS.chs.address}<br />{LOCATIONS.chs.city}
                  </a>
                  <p className="text-caption" style={{ marginTop: 'var(--space-1)' }}>{LOCATIONS.chs.corner}</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Phone width={14} height={14} style={{ flexShrink: 0, color: 'var(--color-accent)' }} />
                <a href={`tel:${LOCATIONS.chs.phone.replace(/[^0-9]/g,'')}`} className="text-body-sm hover:text-primary transition-colors">{LOCATIONS.chs.phone}</a>
              </li>
              <li className="text-body-sm"><strong style={{ color: 'var(--color-text)' }}>Wed – Sun</strong><br />10AM – 3PM</li>
            </ul>
          </div>

          {/* MTP */}
          <div>
            <h3 className="text-caption uppercase font-semibold" style={{ letterSpacing: 'var(--tracking-wider)', color: 'var(--color-text-subtle)', marginBottom: 'var(--space-5)' }}>Mount Pleasant</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                <MapPin width={14} height={14} style={{ marginTop: '0.2rem', flexShrink: 0, color: 'var(--color-accent)' }} />
                <div>
                  <a href={LOCATIONS.mtp.mapUrl} target="_blank" rel="noopener noreferrer" className="text-body-sm hover:text-primary transition-colors">
                    {LOCATIONS.mtp.address}<br />{LOCATIONS.mtp.city}
                  </a>
                  <p className="text-caption" style={{ marginTop: 'var(--space-1)' }}>{LOCATIONS.mtp.corner}</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Phone width={14} height={14} style={{ flexShrink: 0, color: 'var(--color-accent)' }} />
                <a href={`tel:${LOCATIONS.mtp.phone.replace(/[^0-9]/g,'')}`} className="text-body-sm hover:text-primary transition-colors">{LOCATIONS.mtp.phone}</a>
              </li>
              <li className="text-body-sm"><strong style={{ color: 'var(--color-text)' }}>Mon – Sat</strong><br />10AM – 3PM</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Mail width={14} height={14} style={{ flexShrink: 0, color: 'var(--color-accent)' }} />
                <a href={`mailto:${SITE.email}`} className="text-body-sm hover:text-primary transition-colors">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4" style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)' }}>
          <p className="text-caption">© {year} The Pass — Artisan Deli & Market. All rights reserved.</p>
          <p className="text-caption text-display" style={{ fontStyle: 'italic' }}>Ciao, Paisan! 🇮🇹</p>
        </div>
      </div>
    </footer>
  )
}
