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
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isItalianBoy = pathname === '/the-italian-boy'

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
          background: scrolled || open
            ? isItalianBoy
              ? 'rgba(14,12,10,0.95)'
              : 'rgba(250,247,242,0.95)'
            : 'transparent',
          backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid var(--color-border)` : '1px solid transparent',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group" aria-label="The Pass — Home">
              <span
                className="font-display text-xl md:text-2xl font-bold tracking-tight transition-colors duration-200"
                style={{ color: isItalianBoy && !scrolled ? '#F0EBE3' : 'var(--color-text)' }}
              >
                The Pass
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.18em] font-medium transition-colors duration-200"
                style={{ color: 'var(--color-accent)' }}
              >
                Artisan Deli & Market
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
                    color: pathname === link.href
                      ? 'var(--color-primary)'
                      : isItalianBoy && !scrolled
                      ? 'rgba(240,235,227,0.75)'
                      : 'var(--color-text-muted)',
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
                <Link
                  href={SITE.orderOnlineCHS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-glow"
                  style={{
                    background: 'var(--color-primary)',
                    color: '#fff',
                  }}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Order Online
                </Link>
              </MagneticButton>

              {/* Mobile hamburger */}
              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="md:hidden h-10 w-10 flex items-center justify-center rounded-md border transition-colors"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[199] md:hidden flex flex-col"
            style={{ background: 'var(--color-bg)', paddingTop: '4rem' }}
          >
            <nav className="flex flex-col p-8 gap-6" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl font-bold transition-colors"
                    style={{ color: pathname === link.href ? 'var(--color-primary)' : 'var(--color-text)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.07 }}
                className="pt-4 border-t flex flex-col gap-4"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <Link
                  href={SITE.orderOnlineCHS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold w-fit"
                  style={{ background: 'var(--color-primary)', color: '#fff' }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Online — CHS
                </Link>
                <Link
                  href={SITE.orderOnlineMTP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold w-fit border"
                  style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Online — Mt. Pleasant
                </Link>
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
