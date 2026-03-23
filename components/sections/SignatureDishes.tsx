'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const featured = [
  {
    name: 'Such a Nice Italian Boy', price: '$19', tag: 'The Signature',
    description: 'Mortadella with Pistachio, Hot & Sweet Soppressata, Chili Relish, Burrata, Sharp Provolone, Housemade Italian Vinaigrette on Ciabatta.',
    image: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594283544-9S0C2VBAFZKXZO8TTVX3/qHhIQpHI.jpeg'
  },
  {
    name: 'The Bear', price: '$17', tag: 'Fan Favourite',
    description: 'Cool Roast Beef, Melted Provolone, Pepper Shooter Aioli on a Toasted Seeded Long Roll. Simple. Perfect.',
    image: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594448876-XU1XXE0JNMQPNUCV23C4/bDfr2cLw.jpeg'
  },
  {
    name: 'TACONY-6931', price: '$18', tag: 'Must Try',
    description: 'Prosciutto, Hot Coppa, Roasted Garlic Whipped Ricotta, Marinated Tomatoes, Pistachio-Herb Pesto on Focaccia.',
    image: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594496978-4OJF90WIDOTGO823PLFE/SpecSand.jpg'
  },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.14 } } }
const item = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function SignatureDishes() {
  return (
    <section className="section-xl" style={{ background: 'var(--color-bg)' }} aria-labelledby="signature-heading">
      <div className="site-container">

        {/* Header */}
        <AnimatedSection className="section-eyebrow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="section-label">
              <div className="label-line" /><span className="label-text">The Menu</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
              <h2 id="signature-heading" className="heading-xl text-balance" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
                Sandwiches that people<br /><em>genuinely</em> talk about.
              </h2>
              <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors flex-shrink-0" style={{ color: 'var(--color-primary)' }}>
                View Full Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid-3col">
          {featured.map((dish) => (
            <motion.div key={dish.name} variants={item} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}
              className="group card-base" style={{ display: 'flex', flexDirection: 'column' }}>

              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image src={dish.image} alt={`${dish.name} — artisan sandwich at The Pass Charleston`}
                  fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,12,10,0.50) 0%, transparent 55%)' }} />
                <span className="tag-pill absolute top-4 left-4" style={{ background: 'var(--color-accent)', color: '#fff' }}>
                  {dish.tag}
                </span>
              </div>

              {/* Content — generous padding */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <h3 className="heading-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)', flex: 1 }}>
                    {dish.name}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-primary)', flexShrink: 0 }}>
                    {dish.price}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-text-muted)' }}>
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3} className="text-center" style={{ marginTop: '3rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Plus 8 more sandwiches, 3 salads, snacks, wine, beer & more.
          </p>
          <Link href="/menu" className="inline-flex items-center gap-2 font-semibold transition-all duration-200"
            style={{ border: '1px solid var(--color-primary)', color: 'var(--color-primary)', padding: '0.875rem 2rem', borderRadius: '9999px', fontSize: '0.9rem' }}>
            Explore the Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
