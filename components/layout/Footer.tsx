import Link from 'next/link'
import { Instagram, Facebook, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { SITE, LOCATIONS, NAV_LINKS } from '@/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-4">
              <span className="font-display text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                The Pass
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] font-medium" style={{ color: 'var(--color-accent)' }}>
                Artisan Deli & Market
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-[240px]" style={{ color: 'var(--color-text-muted)' }}>
              Unapologetically Italian. Deceptively good. Charleston&apos;s most beloved artisan sandwich shop.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Pass on Instagram"
                className="h-9 w-9 rounded-full flex items-center justify-center border transition-colors duration-200 hover:border-accent"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Pass on Facebook"
                className="h-9 w-9 rounded-full flex items-center justify-center border transition-colors duration-200 hover:border-accent"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE.instagramItalianBoy}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Italian Boy on Instagram"
                className="h-9 px-3 rounded-full flex items-center gap-1.5 border text-xs font-medium transition-colors duration-200 hover:border-accent"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                <Instagram className="w-3 h-3" />
                @theitalianboychs
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] font-semibold mb-5" style={{ color: 'var(--color-text-subtle)' }}>
              Navigate
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-primary"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.resy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:text-primary inline-flex items-center gap-1"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Reserve — Italian Boy
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.loyaltyProgram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:text-primary inline-flex items-center gap-1"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Loyalty Program
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.giftCards}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:text-primary inline-flex items-center gap-1"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Gift Cards
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Downtown Charleston */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] font-semibold mb-5" style={{ color: 'var(--color-text-subtle)' }}>
              Downtown Charleston
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                <div>
                  <a
                    href={LOCATIONS.chs.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-relaxed transition-colors hover:text-primary"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {LOCATIONS.chs.address}<br />{LOCATIONS.chs.city}
                  </a>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-subtle)' }}>
                    {LOCATIONS.chs.corner}
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                <a
                  href={`tel:${LOCATIONS.chs.phone.replace(/[^0-9]/g, '')}`}
                  className="text-sm transition-colors hover:text-primary"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {LOCATIONS.chs.phone}
                </a>
              </li>
              {LOCATIONS.chs.hours.map((h, i) => (
                <li key={i} className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  <span className="font-medium" style={{ color: 'var(--color-text)' }}>{h.days}</span>
                  <br />{h.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Mount Pleasant */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] font-semibold mb-5" style={{ color: 'var(--color-text-subtle)' }}>
              Mount Pleasant
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                <div>
                  <a
                    href={LOCATIONS.mtp.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-relaxed transition-colors hover:text-primary"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {LOCATIONS.mtp.address}<br />{LOCATIONS.mtp.city}
                  </a>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-subtle)' }}>
                    {LOCATIONS.mtp.corner}
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                <a
                  href={`tel:${LOCATIONS.mtp.phone.replace(/[^0-9]/g, '')}`}
                  className="text-sm transition-colors hover:text-primary"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {LOCATIONS.mtp.phone}
                </a>
              </li>
              {LOCATIONS.mtp.hours.map((h, i) => (
                <li key={i} className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  <span className="font-medium" style={{ color: 'var(--color-text)' }}>{h.days}</span>
                  <br />{h.time}
                </li>
              ))}
              <li className="flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm transition-colors hover:text-primary"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>
            © {year} The Pass — Artisan Deli & Market. All rights reserved.
          </p>
          <p className="text-xs italic font-display" style={{ color: 'var(--color-text-subtle)' }}>
            Ciao, Paisan! 🇮🇹
          </p>
        </div>
      </div>
    </footer>
  )
}
