'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Clock, Users, Package } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE } from '@/constants'

const tiers = [
  {
    name: 'Small Event Tray',
    serves: '8 – 10 People',
    price: 120,
    icon: Users,
    items: [
      '6 Sandwiches, cut into halves',
      'Medium Garden Salad',
      '2 Large Bags of Chips',
      'Choice of: Such a Nice Italian Boy, Turkey Americano & Chicken Salad',
    ],
    note: 'Salad upgradeable to Pop-Pop Chop-Chop',
  },
  {
    name: 'Large Event Tray',
    serves: '16 – 20 People',
    price: 225,
    icon: Users,
    highlighted: true,
    items: [
      '12 Sandwiches, cut into halves',
      'Large Garden Salad',
      '4 Large Bags of Chips',
      'Choice of: Such a Nice Italian Boy, Turkey Americano & Chicken Salad',
    ],
    note: 'Salad upgradeable to Pop-Pop Chop-Chop',
  },
  {
    name: 'Boxed Lunches',
    serves: '15 Box Minimum',
    price: 24,
    priceNote: 'per box',
    icon: Package,
    items: [
      'Your Choice of Sandwich',
      'Chips (Mixed Selection)',
      'Cookie',
    ],
    note: 'Gluten Free Available',
  },
]

const addons = [
  'House Pickles', 'House Giardiniera', 'Pesto Pasta Salad',
  'Antipasti Pasta Salad', 'House Artichoke Salad', 'Cookie Trays', 'Upgraded Salads',
]

export default function CateringPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', guests: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* Hero */}
      <section className="section-lg relative overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/3f973a13-7ccb-40a1-88fc-e9f95c306698/web+header+catering.png"
            alt="The Pass catering trays — artisan sandwiches for events in Charleston SC"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 site-container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
              <span className="text-xs uppercase tracking-[0.20em] font-semibold" style={{ color: 'var(--color-accent)' }}>
                Catering
              </span>
            </div>
            <h1 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--color-text)' }}>
              Feed the room.<br />Impress everyone.
            </h1>
            <p className="text-base md:text-lg max-w-xl mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Bring the artisan deli experience to your office, event, or gathering. Our sweet spot is parties of 50 — but we love a challenge.
            </p>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <Clock className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              <span>Order at least <strong style={{ color: 'var(--color-text)' }}>48 hours in advance</strong> via email. Pickup in store. Delivery on the downtown Charleston peninsula only.</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-lg" style={{ background: 'var(--color-bg)' }}>
        <div className="site-container">
          <AnimatedSection className="mb-14">
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-text)' }}>
              Event Packages
            </h2>
          </AnimatedSection>

          <div className="grid-3col mb-16">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 border h-full flex flex-col relative"
                  style={{
                    background: tier.highlighted ? 'var(--color-primary)' : 'var(--color-card)',
                    borderColor: tier.highlighted ? 'var(--color-primary)' : 'var(--color-border)',
                    boxShadow: tier.highlighted ? 'var(--shadow-glow)' : 'var(--shadow-card)',
                  }}
                >
                  {tier.highlighted && (
                    <span
                      className="absolute -top-3 left-6 text-[10px] uppercase tracking-[0.16em] font-bold px-3 py-1 rounded-full"
                      style={{ background: 'var(--color-accent)', color: '#1C1A17' }}
                    >
                      Most Popular
                    </span>
                  )}
                  <div className="mb-6">
                    <h3
                      className="font-display font-bold text-xl mb-1"
                      style={{ color: tier.highlighted ? '#fff' : 'var(--color-text)' }}
                    >
                      {tier.name}
                    </h3>
                    <p className="text-sm" style={{ color: tier.highlighted ? 'rgba(255,255,255,0.70)' : 'var(--color-text-muted)' }}>
                      {tier.serves}
                    </p>
                  </div>
                  <div className="mb-6">
                    <span
                      className="font-display font-bold"
                      style={{ fontSize: '2.5rem', color: tier.highlighted ? '#fff' : 'var(--color-primary)' }}
                    >
                      ${tier.price}
                    </span>
                    {tier.priceNote && (
                      <span className="text-sm ml-1" style={{ color: tier.highlighted ? 'rgba(255,255,255,0.65)' : 'var(--color-text-muted)' }}>
                        {tier.priceNote}
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-col gap-3 flex-1 mb-6">
                    {tier.items.map(it => (
                      <li key={it} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: tier.highlighted ? 'rgba(255,255,255,0.80)' : 'var(--color-accent)' }} />
                        <span className="text-sm" style={{ color: tier.highlighted ? 'rgba(255,255,255,0.80)' : 'var(--color-text-muted)' }}>
                          {it}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {tier.note && (
                    <p
                      className="text-xs italic pt-4 border-t"
                      style={{
                        borderColor: tier.highlighted ? 'rgba(255,255,255,0.20)' : 'var(--color-border)',
                        color: tier.highlighted ? 'rgba(255,255,255,0.55)' : 'var(--color-text-subtle)',
                      }}
                    >
                      * {tier.note}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Add-ons */}
          <AnimatedSection>
            <div className="rounded-2xl p-8 border" style={{ background: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)' }}>
              <h3 className="font-display font-bold mb-2" style={{ fontSize: '1.3rem', color: 'var(--color-text)' }}>
                Party Size Add-ons
              </h3>
              <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                Elevate your catering order with these crowd-pleasers. Ask about pricing when you reach out.
              </p>
              <div className="flex flex-wrap gap-3">
                {addons.map(a => (
                  <span
                    key={a}
                    className="text-sm px-4 py-2 rounded-full border"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', background: 'var(--color-card)' }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="section-lg border-t" style={{ background: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)' }}>
        <div className="site-container">
          <div className="grid-2col">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
                <span className="text-xs uppercase tracking-[0.20em] font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Get a Quote
                </span>
              </div>
              <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-text)' }}>
                Tell us about your event.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
                Send us the details and we&apos;ll get back to you within 24 hours. For parties over 50 guests, please mention that in your message.
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                You can also reach us directly at{' '}
                <a href={`mailto:${SITE.email}`} className="font-medium hover:underline" style={{ color: 'var(--color-primary)' }}>
                  {SITE.email}
                </a>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl p-10 border text-center"
                  style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(58,125,68,0.15)' }}>
                    <Check className="w-7 h-7" style={{ color: 'var(--color-success)' }} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2" style={{ color: 'var(--color-text)' }}>
                    We&apos;ve got your request!
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    Anthony&apos;s team will be in touch within 24 hours. <em>Grazie mille!</em>
                  </p>
                </motion.div>
              ) : (
                <div
                  className="rounded-2xl p-8 border"
                  style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-md)' }}
                >
                  <div className="flex flex-col gap-5">
                    {[
                      { label: 'Your Name', name: 'name', type: 'text', placeholder: 'First & Last Name', required: true },
                      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com', required: true },
                      { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '(843) 000-0000', required: false },
                      { label: 'Event Date', name: 'date', type: 'date', placeholder: '', required: true },
                    ].map(field => (
                      <div key={field.name} className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                          {field.label}
                          {field.required && <span className="ml-1" style={{ color: 'var(--color-error)' }}>*</span>}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full h-11 px-4 rounded-md text-sm transition-all duration-200 outline-none focus:ring-2"
                          style={{
                            background: 'var(--color-bg)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text)',
                            
                          }}
                        />
                      </div>
                    ))}

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                        Estimated Guest Count <span style={{ color: 'var(--color-error)' }}>*</span>
                      </label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full h-11 px-4 rounded-md text-sm transition-all duration-200 outline-none"
                        style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                      >
                        <option value="">Select guest count</option>
                        <option>8 – 10 guests</option>
                        <option>16 – 20 guests</option>
                        <option>20 – 50 guests</option>
                        <option>50+ guests</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                        Tell us about your event
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Event type, dietary needs, delivery vs. pickup, anything else we should know..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-md text-sm transition-all duration-200 outline-none resize-none"
                        style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full h-12 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-glow disabled:opacity-60"
                      style={{ background: 'var(--color-primary)', color: '#fff' }}
                    >
                      {loading ? 'Sending...' : <>Send Catering Request <ArrowRight className="w-4 h-4" /></>}
                    </button>

                    <p className="text-xs text-center" style={{ color: 'var(--color-text-subtle)' }}>
                      We respond within 24 hours · {SITE.email}
                    </p>
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
