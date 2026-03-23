'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, CSSProperties } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
  style?: CSSProperties
}

export default function AnimatedSection({ children, delay = 0, className = '', direction = 'up', style }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const variants = {
    up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
    none:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  }
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
      variants={variants[direction]} transition={{ duration: 0.7, delay }}
      className={className} style={style}>
      {children}
    </motion.div>
  )
}
