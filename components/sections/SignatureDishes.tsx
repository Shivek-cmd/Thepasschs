'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const featured = [
  { name: 'Such a Nice Italian Boy', price: '$19', tag: 'The Signature', description: 'Mortadella with Pistachio, Hot & Sweet Soppressata, Chili Relish, Burrata, Sharp Provolone, Housemade Italian Vinaigrette on Ciabatta.', image: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594283544-9S0C2VBAFZKXZO8TTVX3/qHhIQpHI.jpeg' },
  { name: 'The Bear', price: '$17', tag: 'Fan Favourite', description: 'Cool Roast Beef, Melted Provolone, Pepper Shooter Aioli on a Toasted Seeded Long Roll. Simple. Perfect.', image: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594448876-XU1XXE0JNMQPNUCV23C4/bDfr2cLw.jpeg' },
  { name: 'TACONY-6931', price: '$18', tag: 'Must Try', description: 'Prosciutto, Hot Coppa, Roasted Garlic Whipped Ricotta, Marinated Tomatoes, Pistachio-Herb Pesto on Focaccia.', image: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594496978-4OJF90WIDOTGO823PLFE/SpecSand.jpg' },
]
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.14 } } }
const item = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function SignatureDishes() {
  return (
    <section className="section-xl" style={{ background: 'var(--color-bg)' }}>
      <div className="site-container">
        <AnimatedSection className="section-eyebrow">
          <div className="section-label"><div className="label-line" /><span className="label-text">The Menu</span></div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--gap-md)' }}>
            <h2 className="text-h1 text-balance" style={{ color: 'var(--color-text)' }}>
              Sandwiches that people<br /><em>genuinely</em> talk about.
            </h2>
            <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors flex-shrink-0 text-primary">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid-3col">
          {featured.map((dish) => (
            <motion.div key={dish.name} variants={item} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="card-base card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image src={dish.image} alt={`${dish.name} — artisan sandwich at The Pass Charleston`}
                  fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,12,10,0.50) 0%, transparent 55%)' }} />
                <span className="tag-pill tag-accent absolute top-4 left-4">{dish.tag}</span>
              </div>
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
                  <h3 className="text-h4" style={{ color: 'var(--color-text)', flex: 1 }}>{dish.name}</h3>
                  <span className="text-price flex-shrink-0">{dish.price}</span>
                </div>
                <p className="text-body-sm">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection className="text-center" style={{ marginTop: 'var(--space-12)' }}>
          <p className="text-body-sm" style={{ marginBottom: 'var(--space-5)' }}>Plus 8 more sandwiches, 3 salads, snacks, wine, beer & more.</p>
          <Link href="/menu" className="btn-outline">Explore the Full Menu <ArrowRight className="w-4 h-4" /></Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
