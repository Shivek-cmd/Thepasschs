'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Leaf, Star } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE } from '@/constants'

const tabs = ['Panino', 'Insalata', 'Sputino', 'Provisions', 'Bevande'] as const
type Tab = typeof tabs[number]

const sandwiches = [
  {
    name: 'Such a Nice Italian Boy',
    price: 19,
    description: 'Mortadella (with Pistachio), Hot & Sweet Soppressata, Burrata, Greens, Tomatoes, Red Onion, Housemade Italian Vinaigrette, Sharp Provolone, Pickled Calabrian Chili Relish on Ciabatta.',
    tag: 'The Signature',
    tagStyle: 'accent',
    image: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594352675-58WC29PRSSU1P008714K/03222022_The-Pass_Andrew-Cebulka-5559.jpg',
  },
  {
    name: 'The Italian Girl',
    price: 18,
    description: 'Roasted Turkey, Gabagool, Sweet Cherry Pepper Aioli, Burrata, Lettuce, Tomato, Red Onion, Red Wine Vinaigrette, Sharp Provolone on a Toasted Ciabatta.',
    tag: null,
    image: 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594496978-4OJF90WIDOTGO823PLFE/SpecSand.jpg',
  },
  {
    name: 'The Americano',
    price: 17,
    description: "Roasted Turkey Breast, Cheddar, Housemade Grain Mustard, Duke's Mayonnaise, Fermented Peppers, Housemade Dill Pickles on Toasted Ciabatta.",
    tag: null,
    image: null,
  },
  {
    name: 'The #39',
    price: 16,
    description: 'Mozzarella Frittata, Prosciutto, Oven-Dried Tomatoes, Housemade Taleggio Aioli on a Toasted Ciabatta.',
    tag: null,
    image: null,
  },
  {
    name: 'Panino di Basilico',
    price: 17,
    description: 'Basil-Lemon Chicken Salad (with Pesto), Oven-Dried Tomato Tapenade, Olive Oil Dressed Greens on a Toasted Ciabatta.',
    tag: null,
    image: null,
  },
  {
    name: 'The V-Card',
    price: 16,
    description: 'Spice Rubbed Broccoli, Smashed Avocado, Roasted Red Pepper, Greens, Balsamic Glaze, Sesame Seed Crunch on Pinsa Bread.',
    tag: 'Vegan',
    tagStyle: 'vegan',
    image: null,
  },
  {
    name: 'The LCB Line',
    price: 17,
    description: 'House-Cured Lox, Cucumber, Pickled Red Onion, Scallion Cream Cheese on a Toasted Everything Holey City Bagel.',
    tag: null,
    image: null,
  },
  {
    name: 'The Ranch Jawn',
    price: 17,
    description: 'Calabrian Hot Buffalo Roasted Chicken, Greens, Parm Rain, and rANTcha Sauce on Toasted Parmesan-Garlic Bread.',
    tag: null,
    image: null,
  },
  {
    name: 'TACONY-6931',
    price: 18,
    description: 'Prosciutto, Hot Coppa, Roasted Garlic Whipped Ricotta, Marinated Tomatoes, Pistachio-Herb Pesto on Focaccia.',
    tag: null,
    image: null,
  },
  {
    name: 'The Bear',
    price: 17,
    description: 'Cool Roast Beef, Melted Provolone, Balsamic Peperonata, Pepper Shooter Aioli on a Toasted, Seeded Long Roll.',
    tag: 'Fan Favourite',
    tagStyle: 'primary',
    image: null,
  },
  {
    name: 'The Cacio e Pepe',
    price: 16,
    description: 'Three Cheeses, Fresh Cracked Pepper pressed on Local Sourdough with Drizzled Housemade Truffle Honey.',
    tag: 'Vegetarian',
    tagStyle: 'vegan',
    image: null,
  },
]

const salads = [
  {
    name: "Anthony's Salad",
    price: 16,
    description: 'House Greens, Green Apple, Gorgonzola Dolce Blue Cheese, Red Onion, Candied Walnuts, Lemon Vinaigrette.',
  },
  {
    name: 'Pop-Pop Chop-Chop',
    price: 16,
    description: 'Chopped Salad of Greens and Reds, Soppressata, Mozzarella, Cucumber, Marinated Artichokes, Balsamic Glaze, Housemade Italian Vinaigrette.',
  },
  {
    name: 'The Medagon',
    price: 18,
    description: 'Raw Tuna, Farro, House Greens, Onion Trinity (Green, Red, Pickled White), Cucumbers, Sourdough Seed Crunch, Spicy Citrus Vinaigrette.',
  },
]

const snacks = [
  { name: 'The Pass Caprese', price: '$6+', description: 'Drop Tomato, Mozzarella, Salsa Verde.' },
  { name: 'Cucumber Salad', price: '$4+', description: 'Cucumber, Chickpeas, Dill, Chilies, Extra Virgin Olive Oil, and Citrus.' },
  { name: 'Housemade Dill Pickles', price: '$3', description: 'Made in-house daily.' },
  { name: 'Mixed Olives', price: '$4', description: 'Marinated mixed olives.' },
  { name: 'Pepper Shooters', price: '$4', description: 'Pepper Shooters stuffed with Sharp Provolone and Prosciutto.' },
  { name: 'Housemade Giardiniera', price: '$4', description: 'Housemade Italian pickled vegetables.' },
  { name: 'Cherry Peppers with Pecorino', price: '$4', description: 'Cherry Peppers Stuffed with Pecorino Romano.' },
  { name: 'Artichoke Salad', price: '$5', description: "Chef's Daily Variety of Artichoke Salad." },
  { name: 'Housemade Pesto Pasta', price: '$4+', description: 'Housemade Garlic Pesto Pasta.' },
  { name: 'Spicy Farro Salad', price: '$4+', description: 'Housemade Spicy Farro with Chilies and Parmesan.' },
]

const antipastiBoard = {
  name: 'Antipasti Board',
  price: '$23',
  description: "Chef's Selection of Cured Meats & Cheeses with Crostini and Accompaniments. Serves 1–2.",
}

const chips = [
  { name: 'San Carlo Pesto Chips', size: '2oz', price: '$2.50', description: 'The finest Italian potato chip meets basil pesto — an unforgettable experience.', isNew: true },
  { name: 'Carolina Kettle — Sea Salt', size: '2oz', price: '$2.50', description: 'The OG.' },
  { name: 'Carolina Kettle — Down East BBQ', size: '2oz', price: '$2.50', description: 'Salty, spicy, vinegary — the taste of Eastern NC.' },
  { name: 'Carolina Kettle — Honey Sriracha', size: '2oz', price: '$2.50', description: 'Sweet honey meets Sriracha for the perfect sting.' },
  { name: 'Carolina Kettle — Cream Cheese & Chives', size: '2oz', price: '$2.50', description: 'Mild tangy cream cheese with fresh chive.' },
  { name: 'Carolina Kettle — Crab Boil', size: '2oz', price: '$2.50', description: 'Low country crab boil seasoning on a perfect crunch.' },
  { name: 'Carolina Kettle — Salt & Balsamic Vinegar', size: '2oz', price: '$2.50', description: 'Bold, tangy, southern.' },
  { name: 'Carolina Kettle — Jalapeño Queso', size: '2oz', price: '$2.50', description: 'Fiery jalapeño with smooth creamy white cheese.' },
  { name: 'Carolina Kettle — Rosemary & Garlic', size: '2oz', price: '$2.50', description: 'Fresh rosemary and garlic — gourmet and bold.' },
  { name: 'Carolina Kettle — Gin Dill', size: '2oz', price: '$2.50', description: 'Dill pickle chips inspired by a beloved family recipe.' },
]

const bigBagChips = [
  { name: 'Carolina Kettle — Sea Salt', size: '5oz', price: '$4.50' },
  { name: 'Carolina Kettle — Jalapeño Queso', size: '5oz', price: '$4.50' },
  { name: 'Carolina Kettle — Salt & Balsamic', size: '5oz', price: '$4.50' },
  { name: 'Carolina Kettle — Crab Boil', size: '5oz', price: '$4.50', outOfStock: true },
]

const beverages = [
  { name: 'Wine by the Glass', price: '$8 – $15', category: 'Alcoholic', note: 'Ask your server for today\'s selection' },
  { name: 'Local & National Beers', price: '$4 – $8', category: 'Alcoholic', note: 'Rotating seasonal selection' },
  { name: "Anthony's Daily Spritz", price: '$13', category: 'Alcoholic', note: 'In-house only — ask what\'s pouring' },
  { name: 'San Pellegrino (16.9oz)', price: '$3', category: 'Non-Alcoholic' },
  { name: 'San Pellegrino (33.8oz)', price: '$6', category: 'Non-Alcoholic' },
  { name: 'Mexican Coke (12oz)', price: '$3', category: 'Non-Alcoholic' },
  { name: 'Mexican Sprite (12oz)', price: '$3', category: 'Non-Alcoholic' },
  { name: 'Mexican Orange Fanta (12oz)', price: '$3', category: 'Non-Alcoholic' },
  { name: 'Diet Coke (12oz)', price: '$3', category: 'Non-Alcoholic' },
  { name: 'Smart Water (20oz)', price: '$3', category: 'Non-Alcoholic' },
  { name: 'Gold Leaf Unsweetened Iced Tea', price: '$3', category: 'Non-Alcoholic', note: 'Brewed from real leaves — never from powder' },
  { name: 'Fizza — Strawberry Mint (12oz)', price: '$5', category: 'Non-Alcoholic' },
  { name: 'Fizza — Blood Orange (12oz)', price: '$5', category: 'Non-Alcoholic' },
  { name: 'Fizza — Almondcello (12oz)', price: '$5', category: 'Non-Alcoholic' },
  { name: 'Fizza — Italian Boy Spritz (12oz)', price: '$5', category: 'Non-Alcoholic', isNew: true },
  { name: "A'Siciliana Soda — Limonata (12oz)", price: '$5', category: 'Non-Alcoholic' },
]

const addons = [
  { label: 'Sharp Provolone', price: '+$2' },
  { label: 'Burrata', price: '+$4' },
  { label: 'Roasted Turkey', price: '+$3' },
  { label: 'Hot & Sweet Soppressata', price: '+$4' },
  { label: 'Gabagool', price: '+$4' },
  { label: 'Prosciutto', price: '+$5' },
  { label: 'Gluten-Free Bread', price: '+$2.50' },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

const tabLabels: Record<Tab, string> = {
  Panino: 'Panino',
  Insalata: 'Insalata',
  Sputino: 'Sputino',
  Provisions: 'Provisions',
  Bevande: 'Bevande',
}
const tabSub: Record<Tab, string> = {
  Panino: 'Sandwiches',
  Insalata: 'Salads',
  Sputino: 'From the Case',
  Provisions: 'Chips & Snacks',
  Bevande: 'Drinks',
}

function TagBadge({ tag, style }: { tag: string; style?: string }) {
  if (style === 'accent') return <span className="tag-pill tag-accent">{tag}</span>
  if (style === 'primary') return <span className="tag-pill" style={{ background: 'rgba(139,69,19,0.12)', color: 'var(--color-primary)', border: '1px solid rgba(139,69,19,0.2)' }}>{tag}</span>
  if (style === 'vegan') return (
    <span className="tag-pill" style={{ background: 'rgba(34,197,94,0.10)', color: '#16a34a', border: '1px solid rgba(34,197,94,0.20)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
      <Leaf style={{ width: 10, height: 10 }} />{tag}
    </span>
  )
  return <span className="tag-pill tag-ghost">{tag}</span>
}

export default function MenuClient() {
  const [activeTab, setActiveTab] = useState<Tab>('Panino')

  return (
    <div style={{ paddingTop: '4rem' }}>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: '52vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594496978-4OJF90WIDOTGO823PLFE/SpecSand.jpg"
            alt="The Pass menu — handcrafted Italian sandwiches Charleston SC"
            fill className="object-cover" sizes="100vw" priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,8,6,0.96) 0%, rgba(10,8,6,0.72) 60%, rgba(10,8,6,0.30) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.60) 0%, transparent 60%)' }} />
        </div>
        <div className="site-container relative z-10 section-md">
          <AnimatedSection>
            <div className="section-label">
              <div className="label-line" />
              <span className="label-text">Our Menu</span>
            </div>
            <h1 className="text-h1" style={{ color: '#F0EBE3', marginBottom: 'var(--space-4)', maxWidth: '600px' }}>
              Everything is made<br />with intention.
            </h1>
            <p className="text-body-lg" style={{ color: 'rgba(240,235,227,0.72)', maxWidth: '500px', marginBottom: 'var(--space-5)' }}>
              No shortcuts. No frozen bread. Every component housemade or sourced from the best local producers Charleston has to offer.
            </p>
            <p className="text-caption" style={{ color: 'rgba(240,235,227,0.45)', fontStyle: 'italic' }}>
              * Menu subject to availability. Gluten-free bread +$2.50. Any sandwich can be made as a salad for +$1.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Sticky Tab Bar ─── */}
      <div className="sticky z-[100]" style={{ top: '4rem', background: 'rgba(250,247,242,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="site-container">
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                flexShrink: 0,
                padding: 'var(--space-4) var(--space-5)',
                background: 'none',
                cursor: 'pointer',
                borderBottom: `2px solid ${activeTab === tab ? 'var(--color-accent)' : 'transparent'}`,
                transition: 'color 0.2s, border-color 0.2s',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: activeTab === tab ? 'var(--color-accent)' : 'var(--color-text)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                  {tabLabels[tab]}
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', whiteSpace: 'nowrap', marginTop: '2px' }}>
                  {tabSub[tab]}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Menu Content ─── */}
      <section className="section-lg" style={{ background: 'var(--color-bg)' }}>
        <div className="site-container">
          <AnimatePresence mode="wait">

            {/* ── PANINO ── */}
            {activeTab === 'Panino' && (
              <motion.div key="panino" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <motion.div variants={container} initial="hidden" animate="show" className="grid-2col">
                  {sandwiches.map(s => (
                    <motion.article key={s.name} variants={item}
                      style={{ borderRadius: 'var(--radius-2xl)', border: '1px solid var(--color-border)', background: 'var(--color-card)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', transition: 'box-shadow 0.3s, transform 0.3s' }}
                      whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(28,26,23,0.13)' }}>
                      {s.image && (
                        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                          <Image src={s.image} alt={s.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ transition: 'transform 0.6s' }}
                          />
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,26,23,0.35) 0%, transparent 60%)' }} />
                        </div>
                      )}
                      <div style={{ padding: 'var(--card-padding)' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-3)' }}>
                          <div style={{ flex: 1 }}>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', color: 'var(--color-text)', fontWeight: 600, lineHeight: 1.2, marginBottom: s.tag ? 'var(--space-2)' : 0 }}>{s.name}</h3>
                            {s.tag && <TagBadge tag={s.tag} style={s.tagStyle} />}
                          </div>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-primary)', flexShrink: 0 }}>${s.price}</span>
                        </div>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>{s.description}</p>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>

                {/* Add-ons */}
                <div style={{ marginTop: 'var(--space-12)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-2xl)', padding: 'var(--card-padding-lg)', background: 'var(--color-bg-secondary)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', color: 'var(--color-text)', marginBottom: 'var(--space-5)', fontWeight: 600 }}>Customize Your Sandwich</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xs)' }}>
                    {addons.map(a => (
                      <span key={a.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)', padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>
                        {a.label}<span style={{ color: 'var(--color-accent)', marginLeft: 'var(--space-1)' }}>{a.price}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── INSALATA ── */}
            {activeTab === 'Insalata' && (
              <motion.div key="insalata" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: 'var(--space-8)' }}>Make any sandwich into a salad for only +$1.</p>
                <motion.div variants={container} initial="hidden" animate="show" className="grid-3col">
                  {salads.map(s => (
                    <motion.article key={s.name} variants={item}
                      style={{ borderRadius: 'var(--radius-2xl)', border: '1px solid var(--color-border)', background: 'var(--color-card)', boxShadow: 'var(--shadow-card)', padding: 'var(--card-padding)', transition: 'box-shadow 0.3s, transform 0.3s' }}
                      whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(28,26,23,0.13)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-3)' }}>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', color: 'var(--color-text)', fontWeight: 600, lineHeight: 1.2 }}>{s.name}</h3>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-primary)', flexShrink: 0 }}>${s.price}</span>
                      </div>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>{s.description}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* ── SPUTINO ── */}
            {activeTab === 'Sputino' && (
              <motion.div key="sputino" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', maxWidth: '600px', lineHeight: 'var(--leading-relaxed)' }}>
                  Our provisions counter changes with the seasons. These are the staples you will always find at the case — small bites made with the same care as everything else.
                </p>
                <motion.div variants={container} initial="hidden" animate="show" className="grid-2col" style={{ marginBottom: 'var(--space-10)' }}>
                  {snacks.map(s => (
                    <motion.div key={s.name} variants={item}
                      style={{ borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', background: 'var(--color-card)', padding: 'var(--space-5) var(--card-padding)', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', transition: 'box-shadow 0.25s, transform 0.25s' }}
                      whileHover={{ y: -3, boxShadow: '0 6px 20px rgba(28,26,23,0.10)' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0, marginTop: 6 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-1)' }}>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-text)' }}>{s.name}</span>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-primary)', flexShrink: 0 }}>{s.price}</span>
                        </div>
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{s.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Antipasti Board Feature */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  style={{ borderRadius: 'var(--radius-2xl)', border: '1px solid rgba(201,168,76,0.3)', background: 'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 100%)', padding: 'var(--card-padding-lg)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                        <Star style={{ width: 16, height: 16, color: 'var(--color-accent)' }} />
                        <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>House Special</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--color-text)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>{antipastiBoard.name}</h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', maxWidth: '480px', lineHeight: 'var(--leading-relaxed)' }}>{antipastiBoard.description}</p>
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 800, color: 'var(--color-accent)' }}>{antipastiBoard.price}</span>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* ── PROVISIONS ── */}
            {activeTab === 'Provisions' && (
              <motion.div key="provisions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', maxWidth: '600px' }}>
                  Curated artisan chips — the perfect companion to your sandwich. We carry Carolina Kettle, the South's finest, alongside premium Italian imports.
                </p>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', color: 'var(--color-text)', marginBottom: 'var(--space-5)', fontWeight: 600 }}>Individual — 2oz</h3>
                <motion.div variants={container} initial="hidden" animate="show" className="grid-2col" style={{ marginBottom: 'var(--space-10)' }}>
                  {chips.map(c => (
                    <motion.div key={c.name} variants={item}
                      style={{ borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', background: 'var(--color-card)', padding: 'var(--space-5) var(--card-padding)', position: 'relative', overflow: 'hidden' }}
                      whileHover={{ y: -3, boxShadow: '0 6px 20px rgba(28,26,23,0.10)' }}>
                      {c.isNew && (
                        <span style={{ position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)', fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: 'var(--radius-full)', background: 'var(--color-accent)', color: '#fff' }}>NEW</span>
                      )}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-1)', gap: 'var(--space-6)' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.3 }}>{c.name}</span>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-primary)', flexShrink: 0 }}>{c.price}</span>
                      </div>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{c.description}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', color: 'var(--color-text)', marginBottom: 'var(--space-5)', fontWeight: 600 }}>Big Bag — 5oz</h3>
                <div className="grid-2col">
                  {bigBagChips.map(c => (
                    <div key={c.name}
                      style={{ borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', background: 'var(--color-card)', padding: 'var(--space-5) var(--card-padding)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', opacity: c.outOfStock ? 0.45 : 1 }}>
                      <div>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-text)' }}>{c.name}</span>
                        {c.outOfStock && <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Currently out of stock</span>}
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-primary)', flexShrink: 0 }}>{c.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── BEVANDE ── */}
            {activeTab === 'Bevande' && (
              <motion.div key="bevande" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <div className="grid-2col">
                  {(['Alcoholic', 'Non-Alcoholic'] as const).map(cat => (
                    <div key={cat}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--color-text)', marginBottom: 'var(--space-5)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', fontWeight: 700 }}>{cat}</h3>
                      <div>
                        {beverages.filter(b => b.category === cat).map((b, i) => (
                          <motion.div key={b.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: 'var(--space-4) 0', borderBottom: '1px solid var(--color-border)', gap: 'var(--space-4)' }}>
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text)', fontWeight: 500 }}>{b.name}</span>
                                {'isNew' in b && b.isNew && <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1px 6px', borderRadius: 'var(--radius-full)', background: 'var(--color-accent)', color: '#fff' }}>NEW</span>}
                              </div>
                              {'note' in b && b.note && <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px', fontStyle: 'italic' }}>{b.note}</p>}
                            </div>
                            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text)', flexShrink: 0, marginLeft: 'var(--space-4)' }}>{b.price}</span>
                          </motion.div>
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

      {/* ─── CTA ─── */}
      <section className="section-md" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <div className="label-line" />
              <span className="label-text">Order Now</span>
              <div className="label-line" />
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', color: 'var(--color-text)', marginBottom: 'var(--space-3)', fontWeight: 700 }}>Ready to eat?</h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', maxWidth: '420px', margin: '0 auto var(--space-8)' }}>
              Order online for pickup or delivery — or come find us in person at one of our two Charleston locations.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--gap-sm)' }}>
              <a href={SITE.orderOnlineCHS} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Order — Downtown CHS <ArrowRight className="w-4 h-4" />
              </a>
              <a href={SITE.orderOnlineMTP} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Order — Mount Pleasant <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/catering" className="btn-ghost">
                Need Catering? <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
