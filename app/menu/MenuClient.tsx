'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE } from '@/constants'

const tabs = ['Panino', 'Insalatas', 'Sputino', 'Bevande'] as const
type Tab = typeof tabs[number]

const sandwiches = [
  { name: 'Such a Nice Italian Boy', price: 19, description: 'Mortadella (with Pistachio), Hot & Sweet Soppressata, Chili Relish, Burrata, Red Onion, Greens, Tomato, Sharp Provolone, Housemade Italian Vinaigrette on a Ciabatta.', tag: 'The Signature' },
  { name: 'The Italian Girl', price: 18, description: 'Roasted Turkey, Gabagool, Sweet Cherry Pepper Aioli, Burrata, Red Onion, Greens, Tomato, Sharp Provolone, Housemade Italian Vinaigrette on a Toasted Ciabatta.', tag: null },
  { name: 'The Americano', price: 17, description: "Roasted Turkey, White Cheddar, Duke's Mayonnaise, Housemade Grain Mustard, Fermented Peppers, House Dill Pickles on a Toasted Ciabatta.", tag: null },
  { name: 'The Panino di Basilico', price: 17, description: 'Basil-Lemon Chicken Salad (with Pesto), Oven-Dried Tomato Tapenade, Olive Oil Dressed Greens on a Toasted Ciabatta.', tag: null },
  { name: 'The V-Card', price: 16, description: 'Spice Rubbed Broccoli, Smashed Avocado, Roasted Red Pepper, Greens, Balsamic Glaze, Sesame Seed Crunch on Pinsa Bread.', tag: 'Vegan' },
  { name: 'The #39', price: 16, description: 'Mozzarella Frittata, Prosciutto, Oven-Dried Tomatoes, Housemade Taleggio Aioli on a Toasted Ciabatta.', tag: null },
  { name: 'The LCB Line', price: 17, description: 'House-Cured Lox, Cucumber, Pickled Red Onion, Scallion Cream Cheese on a Toasted Everything Holey City Bagel.', tag: null },
  { name: 'The Ranch Jawn', price: 17, description: 'Calabrian Hot Buffalo Roasted Chicken, Greens, Parm Rain, RANTCHA Sauce on Toasted Parmesan-Garlic Bread.', tag: null },
  { name: 'TACONY-6931', price: 18, description: 'Prosciutto, Hot Coppa, Roasted Garlic Whipped Ricotta, Marinated Tomatoes, Pistachio-Herb Pesto on Focaccia.', tag: null },
  { name: 'The Bear', price: 17, description: 'Cool Roast Beef, Melted Provolone, Pepper Shooter Aioli on a Toasted, Seeded Long Roll.', tag: 'Fan Favourite' },
  { name: 'The Cacio e Pepe', price: 16, description: 'Three Cheeses, Fresh Cracked Pepper pressed on Local Sourdough with Drizzled Housemade Truffle Honey.', tag: 'Vegetarian' },
]

const salads = [
  { name: "Anthony's Salad", price: 16, description: 'House Greens, Green Apple, Gorgonzola Dolce Blue Cheese, Red Onion, Candied Walnuts, Lemon Vinaigrette.' },
  { name: 'Pop-Pop Chop-Chop', price: 16, description: 'Chopped Salad of Greens and Reds, Soppressata, Mozzarella, Cucumber, Marinated Artichokes, Balsamic Glaze, Housemade Italian Vinaigrette.' },
  { name: 'The Medagon', price: 18, description: 'House Greens, Raw Tuna, Farro, Onion Trinity (Green, Red, Pickled White), Cucumbers, Sourdough Seed Crunch, Spicy Citrus Vinaigrette.' },
]

const snacks = [
  'Pepper Shooters with Prosciutto & Provolone',
  'Cherry Peppers with Pecorino Romano',
  'Housemade Pickles',
  'House Giardiniera',
  'Mixed Marinated Olives (Contains Pits)',
  'House Pesto Insalata',
  'Marinated Artichokes',
  'Spicy Farro Insalata',
  'The Pass Caprese',
  'Cucumber Insalata',
]

const beverages = [
  { name: 'Wine by the Glass', price: '$8 – $15', category: 'Alcoholic' },
  { name: 'Rotating Local & National Beers', price: '$4 – $8', category: 'Alcoholic' },
  { name: "Anthony's Daily Spritz (In-House)", price: '$13', category: 'Alcoholic' },
  { name: 'Mexican Coke', price: '$4', category: 'Non-Alcoholic' },
  { name: 'Mexican Sprite', price: '$4', category: 'Non-Alcoholic' },
  { name: 'Mexican Orange Fanta', price: '$4', category: 'Non-Alcoholic' },
  { name: 'San Pellegrino', price: '$3 / $6', category: 'Non-Alcoholic' },
  { name: 'Diet Coke', price: '$3', category: 'Non-Alcoholic' },
  { name: 'Smart Water', price: '$4', category: 'Non-Alcoholic' },
  { name: 'Unsweet Tea', price: '$3', category: 'Non-Alcoholic' },
  { name: 'Illy Cold Coffee', price: '$5', category: 'Non-Alcoholic' },
  { name: 'Fizza Kombucha', price: '$5', category: 'Non-Alcoholic' },
  { name: "A'Siciliana Soda", price: '$5', category: 'Non-Alcoholic' },
  { name: 'Local Cold Brew on Tap', price: '$6', category: 'Non-Alcoholic' },
]

const addons = ['Sharp Provolone +$2', 'Burrata +$4', 'Turkey +$3', 'Hot & Sweet Soppressata +$4', 'Gabagool +$4', 'Prosciutto +$5', 'Gluten Free Bread +$2.50']

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function MenuClient() {
  const [activeTab, setActiveTab] = useState<Tab>('Panino')

  return (
    <div style={{ paddingTop: '4rem' }}>

      {/* Page Hero */}
      <section className="section-lg relative overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594496978-4OJF90WIDOTGO823PLFE/SpecSand.jpg"
            alt="The Pass artisan sandwiches menu" fill className="object-cover opacity-15" sizes="100vw" />
        </div>
        <div className="site-container relative z-10">
          <AnimatedSection>
            <div className="section-label">
              <div className="label-line" /><span className="label-text">Our Menu</span>
            </div>
            <h1 className="heading-xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              Everything is made<br />with intention.
            </h1>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--color-text-muted)', maxWidth: '520px', marginBottom: '1rem' }}>
              No shortcuts. No frozen bread. Every component housemade or sourced from the best local producers Charleston has to offer.
            </p>
            <p style={{ fontSize: '0.8125rem', fontStyle: 'italic', color: 'var(--color-text-subtle)' }}>
              * Menu subject to change. Gluten-free bread +$2.50. Make any sandwich a salad +$1.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky tab nav */}
      <div className="sticky z-[100] border-b" style={{ top: '4rem', background: 'var(--color-bg)', borderColor: 'var(--color-border)', backdropFilter: 'blur(12px)' }}>
        <div className="site-container">
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{
                  flexShrink: 0,
                  padding: '1.125rem 1.75rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  borderBottom: `2px solid ${activeTab === tab ? 'var(--color-primary)' : 'transparent'}`,
                  color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  transition: 'color 0.2s, border-color 0.2s',
                  background: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}>
                {tab}
                {tab === 'Panino' && <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', opacity: 0.5 }}>({sandwiches.length})</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu content */}
      <section className="section-lg" style={{ background: 'var(--color-bg)' }}>
        <div className="site-container">
          <AnimatePresence mode="wait">

            {/* SANDWICHES */}
            {activeTab === 'Panino' && (
              <motion.div key="panino" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <motion.div variants={container} initial="hidden" animate="show" className="grid-2col">
                  {sandwiches.map(s => (
                    <motion.div key={s.name} variants={item} className="menu-card">
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.625rem', flex: 1 }}>
                          <h3 className="heading-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
                            {s.name}
                          </h3>
                          {s.tag && (
                            <span className="tag-pill" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-accent)' }}>
                              {s.tag}
                            </span>
                          )}
                        </div>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', flexShrink: 0, color: 'var(--color-primary)' }}>
                          ${s.price}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-text-muted)' }}>{s.description}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Add-ons */}
                <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: 'var(--radius-xl)', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1.25rem' }}>
                    Customize Your Sandwich
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                    {addons.map(a => (
                      <span key={a} style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem', borderRadius: '9999px', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)', background: 'var(--color-card)' }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* SALADS */}
            {activeTab === 'Insalatas' && (
              <motion.div key="salads" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--color-text-subtle)', marginBottom: '2.5rem' }}>
                  Make any sandwich into a salad for +$1.
                </p>
                <div className="grid-3col">
                  {salads.map(s => (
                    <div key={s.name} className="menu-card">
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.75rem' }}>
                        <h3 className="heading-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)', flex: 1 }}>{s.name}</h3>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', flexShrink: 0, color: 'var(--color-primary)' }}>${s.price}</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-text-muted)' }}>{s.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* SNACKS */}
            {activeTab === 'Sputino' && (
              <motion.div key="snacks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <div style={{ maxWidth: '700px' }}>
                  <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
                    Our provisions counter changes with the seasons. These are the staples you will always find on the counter.
                  </p>
                  <div className="grid-2col" style={{ marginBottom: '2rem' }}>
                    {snacks.map(s => (
                      <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '1.125rem 1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', background: 'var(--color-card)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, background: 'var(--color-accent)' }} />
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem' }}>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Antipasti Board</h3>
                        <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-text-muted)' }}>Chef&apos;s Selection of Cured Meats & Cheeses with Olive Oil Crostini and Accompaniments. Serves 1–2.</p>
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2rem', flexShrink: 0, color: 'var(--color-primary)' }}>$23</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* BEVERAGES */}
            {activeTab === 'Bevande' && (
              <motion.div key="drinks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <div className="grid-2col">
                  {['Alcoholic', 'Non-Alcoholic'].map(cat => (
                    <div key={cat}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                        {cat}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {beverages.filter(b => b.category === cat).map(b => (
                          <div key={b.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 0', borderBottom: '1px solid var(--color-border)' }}>
                            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{b.name}</span>
                            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text)', flexShrink: 0, marginLeft: '1rem' }}>{b.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="section-md text-center border-t" style={{ background: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)' }}>
        <div className="site-container">
          <h2 className="heading-md" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)', marginBottom: '1rem' }}>Ready to eat?</h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1rem', color: 'var(--color-text-muted)' }}>Order online for pickup or delivery — or come find us in person.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <a href={SITE.orderOnlineCHS} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:shadow-glow"
              style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.875rem 2rem', borderRadius: '9999px', fontSize: '0.9rem' }}>
              Order — Downtown CHS <ArrowRight className="w-4 h-4" />
            </a>
            <a href={SITE.orderOnlineMTP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-200"
              style={{ border: '1px solid var(--color-primary)', color: 'var(--color-primary)', padding: '0.875rem 2rem', borderRadius: '9999px', fontSize: '0.9rem' }}>
              Order — Mount Pleasant <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/catering"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-200"
              style={{ border: '1px solid var(--color-border-hover)', color: 'var(--color-text-muted)', padding: '0.875rem 2rem', borderRadius: '9999px', fontSize: '0.9rem' }}>
              Need Catering? <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
