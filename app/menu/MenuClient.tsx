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
  { name: 'The Medagon', price: 18, description: 'House Greens, Raw Tuna, Farro, Onion Trinity, Cucumbers, Sourdough Seed Crunch, Spicy Citrus Vinaigrette.' },
]
const snacks = ['Pepper Shooters with Prosciutto & Provolone','Cherry Peppers with Pecorino Romano','Housemade Pickles','House Giardiniera','Mixed Marinated Olives (Contains Pits)','House Pesto Insalata','Marinated Artichokes','Spicy Farro Insalata','The Pass Caprese','Cucumber Insalata']
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
const addons = ['Sharp Provolone +$2','Burrata +$4','Turkey +$3','Hot & Sweet Soppressata +$4','Gabagool +$4','Prosciutto +$5','Gluten Free Bread +$2.50']
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function MenuClient() {
  const [activeTab, setActiveTab] = useState<Tab>('Panino')
  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* Hero */}
      <section className="section-lg relative overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594496978-4OJF90WIDOTGO823PLFE/SpecSand.jpg"
            alt="The Pass menu" fill className="object-cover opacity-15" sizes="100vw" />
        </div>
        <div className="site-container relative z-10">
          <AnimatedSection>
            <div className="section-label"><div className="label-line" /><span className="label-text">Our Menu</span></div>
            <h1 className="text-h1" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>Everything is made<br />with intention.</h1>
            <p className="text-body-lg" style={{ maxWidth: '520px', marginBottom: 'var(--space-4)' }}>No shortcuts. No frozen bread. Every component housemade or sourced from the best local producers Charleston has to offer.</p>
            <p className="text-body-sm italic">* Menu subject to change. Gluten-free bread +$2.50. Make any sandwich a salad +$1.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky tabs */}
      <div className="sticky z-[100]" style={{ top: '4rem', background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)', backdropFilter: 'blur(12px)' }}>
        <div className="site-container">
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{ flexShrink: 0, padding: 'var(--space-4) var(--space-6)', fontSize: 'var(--text-sm)', fontWeight: 600, borderBottom: `2px solid ${activeTab === tab ? 'var(--color-primary)' : 'transparent'}`, color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-text-muted)', transition: 'color 0.2s, border-color 0.2s', background: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {tab}{tab === 'Panino' && <span style={{ marginLeft: 'var(--space-2)', fontSize: 'var(--text-xs)', opacity: 0.5 }}>({sandwiches.length})</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-lg" style={{ background: 'var(--color-bg)' }}>
        <div className="site-container">
          <AnimatePresence mode="wait">

            {activeTab === 'Panino' && (
              <motion.div key="panino" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <motion.div variants={container} initial="hidden" animate="show" className="grid-2col">
                  {sandwiches.map(s => (
                    <motion.div key={s.name} variants={item} className="menu-card">
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-2)', flex: 1 }}>
                          <h3 className="text-h4" style={{ color: 'var(--color-text)' }}>{s.name}</h3>
                          {s.tag && <span className="tag-pill tag-ghost">{s.tag}</span>}
                        </div>
                        <span className="text-price flex-shrink-0">${s.price}</span>
                      </div>
                      <p className="text-body-sm">{s.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="card-base card-body" style={{ marginTop: 'var(--space-10)' }}>
                  <h3 className="text-h4" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>Customize Your Sandwich</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xs)' }}>
                    {addons.map(a => <span key={a} className="tag-pill tag-muted">{a}</span>)}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Insalatas' && (
              <motion.div key="salads" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <p className="text-body-sm italic" style={{ marginBottom: 'var(--space-8)' }}>Make any sandwich into a salad for +$1.</p>
                <div className="grid-3col">
                  {salads.map(s => (
                    <div key={s.name} className="menu-card">
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-3)' }}>
                        <h3 className="text-h4" style={{ color: 'var(--color-text)', flex: 1 }}>{s.name}</h3>
                        <span className="text-price flex-shrink-0">${s.price}</span>
                      </div>
                      <p className="text-body-sm">{s.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Sputino' && (
              <motion.div key="snacks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <div style={{ maxWidth: '700px' }}>
                  <p className="text-body" style={{ marginBottom: 'var(--space-8)' }}>Our provisions counter changes with the seasons. These are the staples you will always find on the counter.</p>
                  <div className="grid-2col" style={{ marginBottom: 'var(--space-8)' }}>
                    {snacks.map(s => (
                      <div key={s} className="card-base" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4) var(--space-5)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, background: 'var(--color-accent)' }} />
                        <span className="text-body-sm">{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="card-base card-body">
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
                      <div>
                        <h3 className="text-h3" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>Antipasti Board</h3>
                        <p className="text-body-sm">Chef&apos;s Selection of Cured Meats & Cheeses with Olive Oil Crostini and Accompaniments. Serves 1–2.</p>
                      </div>
                      <span className="text-price flex-shrink-0" style={{ fontSize: 'var(--text-h2)' }}>$23</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Bevande' && (
              <motion.div key="drinks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <div className="grid-2col">
                  {['Alcoholic', 'Non-Alcoholic'].map(cat => (
                    <div key={cat}>
                      <h3 className="text-h3" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-5)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-border)' }}>{cat}</h3>
                      <div>
                        {beverages.filter(b => b.category === cat).map(b => (
                          <div key={b.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border)' }}>
                            <span className="text-body-sm">{b.name}</span>
                            <span className="text-body-sm font-semibold" style={{ color: 'var(--color-text)', marginLeft: 'var(--space-4)', flexShrink: 0 }}>{b.price}</span>
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
      <section className="section-md text-center" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="site-container">
          <h2 className="text-h2" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>Ready to eat?</h2>
          <p className="text-body" style={{ marginBottom: 'var(--space-8)' }}>Order online for pickup or delivery — or come find us in person.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--gap-sm)' }}>
            <a href={SITE.orderOnlineCHS} target="_blank" rel="noopener noreferrer" className="btn-primary">Order — Downtown CHS <ArrowRight className="w-4 h-4" /></a>
            <a href={SITE.orderOnlineMTP} target="_blank" rel="noopener noreferrer" className="btn-outline">Order — Mount Pleasant <ArrowRight className="w-4 h-4" /></a>
            <Link href="/catering" className="btn-ghost">Need Catering? <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
