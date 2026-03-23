import Link from 'next/link'
import { Instagram, Facebook, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { SITE, LOCATIONS, NAV_LINKS } from '@/constants'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
      <div className="site-container section-lg">
        <div className="grid-footer">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex flex-col leading-none mb-4">
              <span className="font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-text)' }}>The Pass</span>
              <span className="uppercase tracking-[0.18em] font-semibold" style={{ fontSize: '0.6rem', color: 'var(--color-accent)' }}>Artisan Deli & Market</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)', maxWidth: '240px' }}>Unapologetically Italian. Deceptively good. Charleston&apos;s most beloved artisan sandwich shop.</p>
            <div className="flex items-center gap-3">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow The Pass on Instagram" className="flex items-center justify-center rounded-full border transition-colors duration-200 hover:border-accent" style={{ width: '2.25rem', height: '2.25rem', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}><Instagram className="w-4 h-4" /></a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Follow The Pass on Facebook" className="flex items-center justify-center rounded-full border transition-colors duration-200 hover:border-accent" style={{ width: '2.25rem', height: '2.25rem', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}><Facebook className="w-4 h-4" /></a>
              <a href={SITE.instagramItalianBoy} target="_blank" rel="noopener noreferrer" aria-label="Follow The Italian Boy on Instagram" className="flex items-center gap-1.5 rounded-full border text-xs font-medium transition-colors duration-200 hover:border-accent" style={{ padding: '0.5rem 0.75rem', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}><Instagram className="w-3 h-3" />@theitalianboychs</a>
            </div>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="uppercase tracking-[0.16em] font-semibold mb-5 text-xs" style={{ color: 'var(--color-text-subtle)' }}>Navigate</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map(link => (<li key={link.href}><Link href={link.href} className="text-sm transition-colors duration-200 hover:text-primary" style={{ color: 'var(--color-text-muted)' }}>{link.label}</Link></li>))}
              <li><a href={SITE.resy} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-200 hover:text-primary inline-flex items-center gap-1" style={{ color: 'var(--color-text-muted)' }}>Reserve — Italian Boy <ExternalLink className="w-3 h-3 opacity-60" /></a></li>
              <li><a href={SITE.loyaltyProgram} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-200 hover:text-primary inline-flex items-center gap-1" style={{ color: 'var(--color-text-muted)' }}>Loyalty Program <ExternalLink className="w-3 h-3 opacity-60" /></a></li>
              <li><a href={SITE.giftCards} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-200 hover:text-primary inline-flex items-center gap-1" style={{ color: 'var(--color-text-muted)' }}>Gift Cards <ExternalLink className="w-3 h-3 opacity-60" /></a></li>
            </ul>
          </div>
          {/* Downtown Charleston */}
          <div>
            <h3 className="uppercase tracking-[0.16em] font-semibold mb-5 text-xs" style={{ color: 'var(--color-text-subtle)' }}>Downtown Charleston</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} /><div><a href={LOCATIONS.chs.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed transition-colors hover:text-primary" style={{ color: 'var(--color-text-muted)' }}>{LOCATIONS.chs.address}<br />{LOCATIONS.chs.city}</a><p className="text-xs mt-0.5" style={{ color: 'var(--color-text-subtle)' }}>{LOCATIONS.chs.corner}</p></div></li>
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} /><a href={`tel:${LOCATIONS.chs.phone.replace(/[^0-9]/g,'')}`} className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--color-text-muted)' }}>{LOCATIONS.chs.phone}</a></li>
              <li className="text-sm" style={{ color: 'var(--color-text-muted)' }}><span className="font-medium" style={{ color: 'var(--color-text)' }}>Wed – Sun</span><br />10AM – 3PM</li>
            </ul>
          </div>
          {/* Mount Pleasant */}
          <div>
            <h3 className="uppercase tracking-[0.16em] font-semibold mb-5 text-xs" style={{ color: 'var(--color-text-subtle)' }}>Mount Pleasant</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} /><div><a href={LOCATIONS.mtp.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed transition-colors hover:text-primary" style={{ color: 'var(--color-text-muted)' }}>{LOCATIONS.mtp.address}<br />{LOCATIONS.mtp.city}</a><p className="text-xs mt-0.5" style={{ color: 'var(--color-text-subtle)' }}>{LOCATIONS.mtp.corner}</p></div></li>
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} /><a href={`tel:${LOCATIONS.mtp.phone.replace(/[^0-9]/g,'')}`} className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--color-text-muted)' }}>{LOCATIONS.mtp.phone}</a></li>
              <li className="text-sm" style={{ color: 'var(--color-text-muted)' }}><span className="font-medium" style={{ color: 'var(--color-text)' }}>Mon – Sat</span><br />10AM – 3PM</li>
              <li className="flex items-center gap-2 pt-1"><Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} /><a href={`mailto:${SITE.email}`} className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--color-text-muted)' }}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>© {year} The Pass — Artisan Deli & Market. All rights reserved.</p>
          <p className="text-xs italic" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-subtle)' }}>Ciao, Paisan! 🇮🇹</p>
        </div>
      </div>
    </footer>
  )
}
