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

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function SignatureDishes() {
  return (
    <section className="section-xl" style={{ background: 'var(--color-bg)' }} aria-labelledby="signature-heading">
      <div className="site-container">
        <AnimatedSection className="mb-16">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="flex items-center gap-3">
                <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
                <span className="uppercase tracking-[0.20em] font-semibold text-xs" style={{ color: 'var(--color-accent)' }}>The Menu</span>
              </div>
              <h2 id="signature-heading" className="heading-xl text-balance" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
                Sandwiches that people <em>genuinely</em> talk about.
              </h2>
            </div>
            <Link href="/menu" className="flex items-center gap-2 text-sm font-semibold transition-colors w-fit" style={{ color: 'var(--color-primary)' }}>
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid-3col">
          {featured.map((dish) => (
            <motion.div key={dish.name} variants={item} whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
              className="group rounded-2xl overflow-hidden border"
              style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-card)', backdropFilter: 'blur(8px)' }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image src={dish.image} alt={`${dish.name} — artisan sandwich at The Pass Charleston`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,12,10,0.40) 0%, transparent 60%)' }} />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full" style={{ background: 'var(--color-accent)', color: '#fff' }}>{dish.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-semibold leading-tight" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-text)' }}>{dish.name}</h3>
                  <span className="font-bold text-lg flex-shrink-0" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>{dish.price}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>Plus 8 more sandwiches, 3 salads, snacks, wine, beer & more.</p>
          <Link href="/menu" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
            Explore the Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
