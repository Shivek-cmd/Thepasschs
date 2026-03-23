'use client'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initial = saved || 'light'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  if (!mounted) return (
    <div className="h-9 w-9 rounded-md border border-border" />
  )

  return (
    <motion.button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className="h-9 w-9 rounded-md flex items-center justify-center border border-border hover:border-accent transition-colors duration-200"
      style={{ color: 'var(--color-text-muted)' }}
    >
      {theme === 'light'
        ? <Moon className="w-4 h-4" />
        : <Sun className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
      }
    </motion.button>
  )
}
