'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/constants'
import ThemeToggle from '@/components/ui/ThemeToggle'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  // Pages where hero image is behind navbar — need light text when not scrolled
  const hasHeroBg = pathname === '/' || pathname === '/the-italian-boy'
  const isTransparent = hasHeroBg && !scrolled && !open

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:text-sm font-medium"
        style={{ background: 'var(--color-primary)', color: '#fff' }}
      >
        Skip to content
      </a>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-[200]"
        style={{
          background: isTransparent
            ? 'transparent'
            : scrolled || open
              ? 'rgba(var(--navbar-bg, 250,247,242), 0.97)'
              : 'var(--color-bg)',
          backdropFilter: (scrolled || open) && !isTransparent ? 'blur(16px)' : 'none',
          borderBottom: (scrolled || open) && !isTransparent
            ? '1px solid var(--color-border)'
            : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Dark gradient behind navbar when transparent for legibility */}
        {isTransparent && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />
        )}

        <div className="site-container relative z-10">
          <div className="flex items-center justify-between" style={{ height: '4.5rem' }}>

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group" aria-label="The Pass — Home">
              <span
                className="font-display font-bold tracking-tight transition-colors duration-200"
                style={{
                  fontSize: '1.4rem',
                  color: isTransparent ? '#FFFFFF' : 'var(--color-text)',
                  textShadow: isTransparent ? '0 1px 4px rgba(0,0,0,0.6)' : 'none',
                }}
              >
                The Pass
              </span>
              <span
                className="uppercase tracking-[0.18em] font-semibold"
                style={{
                  fontSize: '0.6rem',
                  color: 'var(--color-accent)',
                }}
              >
                Artisan Deli &amp; Market
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 relative group"
                  style={{
                    color: isTransparent
                      ? 'rgba(255,255,255,0.92)'
                      : pathname === link.href
                        ? 'var(--color-primary)'
                        : 'var(--color-text-muted)',
                    textShadow: isTransparent ? '0 1px 3px rgba(0,0,0,0.5)' : 'none',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                    style={{
                      background: 'var(--color-accent)',
                      width: pathname === link.href ? '100%' : '0%',
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              <MagneticButton>
                <a
                  href={SITE.orderOnlineCHS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                  style={{
                    background: 'var(--color-primary)',
                    color: '#fff',
                    padding: '0.55rem 1.25rem',
                    borderRadius: '9999px',
                  }}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Order Online
                </a>
              </MagneticButton>

              {/* Mobile hamburger */}
              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="md:hidden flex items-center justify-center rounded-md border transition-colors"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderColor: isTransparent ? 'rgba(255,255,255,0.3)' : 'var(--color-border)',
                  color: isTransparent ? '#fff' : 'var(--color-text)',
                }}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[199] md:hidden flex flex-col"
            style={{ background: 'var(--color-bg)', paddingTop: '4.5rem' }}
          >
            <nav className="flex flex-col p-8 gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="font-display font-bold transition-colors"
                    style={{
                      fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
                      color: pathname === link.href ? 'var(--color-primary)' : 'var(--color-text)',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.06 }}
                className="flex flex-col gap-4 pt-6"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <a
                  href={SITE.orderOnlineCHS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold w-fit"
                  style={{
                    background: 'var(--color-primary)',
                    color: '#fff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.9rem',
                  }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Online — CHS
                </a>
                <a
                  href={SITE.orderOnlineMTP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold w-fit border"
                  style={{
                    borderColor: 'var(--color-primary)',
                    color: 'var(--color-primary)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.9rem',
                  }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Online — Mt. Pleasant
                </a>
                <div className="pt-2">
                  <ThemeToggle />
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
