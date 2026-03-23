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

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Panino')

  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* Hero */}
      <section
        className="section-lg relative overflow-hidden"
        style={{ background: 'var(--color-bg-secondary)' }}
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594496978-4OJF90WIDOTGO823PLFE/SpecSand.jpg"
            alt="The Pass artisan sandwiches menu"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 site-container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
              <span className="text-xs uppercase tracking-[0.20em] font-semibold" style={{ color: 'var(--color-accent)' }}>
                Our Menu
              </span>
            </div>
            <h1
              className="font-display font-bold mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--color-text)' }}
            >
              Everything is<br />made with intention.
            </h1>
            <p className="text-base md:text-lg max-w-xl" style={{ color: 'var(--color-text-muted)' }}>
              No shortcuts. No frozen bread. Every component housemade or sourced from the best local producers Charleston has to offer.
            </p>
            <p className="text-sm mt-4 italic" style={{ color: 'var(--color-text-subtle)' }}>
              * Menu subject to change. Gluten-free bread +$2.50. Make any sandwich a salad +$1.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky tabs */}
      <div
        className="sticky top-16 z-[100] border-b"
        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', backdropFilter: 'blur(12px)' }}
      >
        <div className="site-container">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-all duration-200"
                style={{
                  borderBottomColor: activeTab === tab ? 'var(--color-primary)' : 'transparent',
                  color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-text-muted)',
                }}
              >
                {tab}
                {tab === 'Panino' && <span className="ml-2 text-xs opacity-60">({sandwiches.length})</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu content */}
      <section className="section-md" style={{ background: 'var(--color-bg)' }}>
        <div className="site-container">
          <AnimatePresence mode="wait">
            {activeTab === 'Panino' && (
              <motion.div key="panino" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid-2col"
                >
                  {sandwiches.map(s => (
                    <motion.div
                      key={s.name}
                      variants={item}
                      className="group p-6 rounded-xl border transition-all duration-200 hover:border-accent/40"
                      style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display font-bold" style={{ fontSize: '1.1rem', color: 'var(--color-text)' }}>
                            {s.name}
                          </h3>
                          {s.tag && (
                            <span
                              className="text-[9px] uppercase tracking-[0.16em] px-2 py-0.5 rounded-full font-semibold"
                              style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-accent)' }}
                            >
                              {s.tag}
                            </span>
                          )}
                        </div>
                        <span className="font-display font-bold text-lg flex-shrink-0" style={{ color: 'var(--color-primary)' }}>
                          ${s.price}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{s.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
                {/* Add-ons */}
                <div className="mt-10 p-6 rounded-xl border" style={{ background: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)' }}>
                  <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--color-text)' }}>Add-ons</h3>
                  <div className="flex flex-wrap gap-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    {['Sharp Provolone +$2','Burrata +$4','Turkey +$3','Hot & Sweet Soppressata +$4','Gabagool +$4','Prosciutto +$5','Gluten Free Bread +$2.50'].map(a => (
                      <span key={a} className="px-3 py-1 rounded-full border" style={{ borderColor: 'var(--color-border)' }}>{a}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Insalatas' && (
              <motion.div key="salads" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <p className="text-sm mb-8 italic" style={{ color: 'var(--color-text-subtle)' }}>
                  Make any sandwich into a salad for +$1. Pop-Pop Chop-Chop upgrade available for catering.
                </p>
                <div className="grid-3col">
                  {salads.map(s => (
                    <div
                      key={s.name}
                      className="p-6 rounded-xl border"
                      style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-display font-bold" style={{ fontSize: '1.1rem', color: 'var(--color-text)' }}>{s.name}</h3>
                        <span className="font-display font-bold text-lg flex-shrink-0" style={{ color: 'var(--color-primary)' }}>${s.price}</span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{s.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Sputino' && (
              <motion.div key="snacks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <div className="max-w-2xl">
                  <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    Our provisions counter changes with the seasons and what Anthony finds at the market. These are the staples you will always find on the counter.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {snacks.map(s => (
                      <div
                        key={s}
                        className="flex items-center gap-3 p-4 rounded-lg border"
                        style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-accent)' }} />
                        <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 rounded-xl border" style={{ background: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)' }}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display font-bold mb-1" style={{ color: 'var(--color-text)' }}>Antipasti Board</h3>
                        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                          Chef&apos;s Selection of Cured Meats & Cheeses with Olive Oil Crostini and Accompaniments. Serves 1–2.
                        </p>
                      </div>
                      <span className="font-display font-bold text-xl flex-shrink-0" style={{ color: 'var(--color-primary)' }}>$23</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Bevande' && (
              <motion.div key="drinks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <div className="grid-2col">
                  {['Alcoholic', 'Non-Alcoholic'].map(cat => (
                    <div key={cat}>
                      <h3
                        className="font-display font-semibold mb-5 pb-3 border-b"
                        style={{ color: 'var(--color-text)', borderColor: 'var(--color-border)', fontSize: '1.1rem' }}
                      >
                        {cat}
                      </h3>
                      <div className="flex flex-col gap-3">
                        {beverages.filter(b => b.category === cat).map(b => (
                          <div key={b.name} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid var(--color-border)' }}>
                            <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{b.name}</span>
                            <span className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{b.price}</span>
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
      <section
        className="section-md text-center border-t"
        style={{ background: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)' }}
      >
        <div className="site-container">
          <h2 className="font-display font-bold mb-3" style={{ fontSize: '1.8rem', color: 'var(--color-text)' }}>
            Ready to eat?
          </h2>
          <p className="mb-8 text-base" style={{ color: 'var(--color-text-muted)' }}>
            Order online for pickup or delivery — or come find us in person.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE.orderOnlineCHS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-glow"
              style={{ background: 'var(--color-primary)', color: '#fff' }}
            >
              Order — Downtown CHS
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={SITE.orderOnlineMTP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              Order — Mount Pleasant
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/catering"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200"
              style={{ borderColor: 'var(--color-border-hover)', color: 'var(--color-text-muted)' }}
            >
              Need Catering?
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
