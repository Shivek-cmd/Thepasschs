'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Clock } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE } from '@/constants'

const tiers = [
  { name: 'Small Event Tray', serves: '8 – 10 People', price: 120, highlighted: false, items: ['6 Sandwiches, cut into halves', 'Medium Garden Salad', '2 Large Bags of Chips', 'Choice of: Such a Nice Italian Boy, Turkey Americano & Chicken Salad'], note: 'Salad upgradeable to Pop-Pop Chop-Chop' },
  { name: 'Large Event Tray', serves: '16 – 20 People', price: 225, highlighted: true, items: ['12 Sandwiches, cut into halves', 'Large Garden Salad', '4 Large Bags of Chips', 'Choice of: Such a Nice Italian Boy, Turkey Americano & Chicken Salad'], note: 'Salad upgradeable to Pop-Pop Chop-Chop' },
  { name: 'Boxed Lunches', serves: '15 Box Minimum', price: 24, priceNote: 'per box', highlighted: false, items: ['Your Choice of Sandwich', 'Chips (Mixed Selection)', 'Cookie'], note: 'Gluten Free Available' },
]
const addons = ['House Pickles', 'House Giardiniera', 'Pesto Pasta Salad', 'Antipasti Pasta Salad', 'House Artichoke Salad', 'Cookie Trays', 'Upgraded Salads']

export default function CateringClient() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', guests: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault(); setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false); setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* Hero */}
      <section className="section-lg relative overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/3f973a13-7ccb-40a1-88fc-e9f95c306698/web+header+catering.png"
            alt="The Pass catering" fill className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="site-container relative z-10">
          <AnimatedSection>
            <div className="section-label"><div className="label-line" /><span className="label-text">Catering</span></div>
            <h1 className="text-h1" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>Feed the room.<br />Impress everyone.</h1>
            <p className="text-body-lg" style={{ maxWidth: '520px', marginBottom: 'var(--space-6)' }}>Bring the artisan deli experience to your office, event, or gathering. Our sweet spot is parties of 50.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <Clock width={16} height={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <p className="text-body-sm">Order at least <strong style={{ color: 'var(--color-text)' }}>48 hours in advance</strong> via email. Pickup in store. Delivery on the downtown Charleston peninsula only.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages */}
      <section className="section-lg" style={{ background: 'var(--color-bg)' }}>
        <div className="site-container">
          <AnimatedSection className="section-eyebrow">
            <h2 className="text-h1" style={{ color: 'var(--color-text)' }}>Event Packages</h2>
          </AnimatedSection>
          <div className="grid-3col" style={{ marginBottom: 'var(--space-16)' }}>
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div className="card-base card-body h-full relative" style={{ display: 'flex', flexDirection: 'column', background: tier.highlighted ? 'var(--color-primary)' : 'var(--color-card)', borderColor: tier.highlighted ? 'var(--color-primary)' : 'var(--color-border)', boxShadow: tier.highlighted ? 'var(--shadow-glow)' : 'var(--shadow-card)' }}>
                  {tier.highlighted && (
                    <span className="tag-pill tag-accent" style={{ position: 'absolute', top: 'calc(var(--space-3) * -1)', left: 'var(--space-6)' }}>Most Popular</span>
                  )}
                  <h3 className="text-h3" style={{ color: tier.highlighted ? '#fff' : 'var(--color-text)', marginBottom: 'var(--space-1)' }}>{tier.name}</h3>
                  <p className="text-body-sm" style={{ marginBottom: 'var(--space-6)', color: tier.highlighted ? 'rgba(255,255,255,0.70)' : 'var(--color-text-muted)' }}>{tier.serves}</p>
                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <span className="text-hero" style={{ fontSize: 'var(--text-h1)', color: tier.highlighted ? '#fff' : 'var(--color-primary)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>${tier.price}</span>
                    {'priceNote' in tier && <span className="text-body-sm" style={{ marginLeft: 'var(--space-2)', color: tier.highlighted ? 'rgba(255,255,255,0.65)' : 'var(--color-text-muted)' }}>{(tier as typeof tier & {priceNote: string}).priceNote}</span>}
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flex: 1, marginBottom: 'var(--space-6)' }}>
                    {tier.items.map(it => (
                      <li key={it} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                        <Check width={16} height={16} style={{ marginTop: '0.15rem', flexShrink: 0, color: tier.highlighted ? 'rgba(255,255,255,0.80)' : 'var(--color-accent)' }} />
                        <span className="text-body-sm" style={{ color: tier.highlighted ? 'rgba(255,255,255,0.80)' : 'var(--color-text-muted)' }}>{it}</span>
                      </li>
                    ))}
                  </ul>
                  {tier.note && (
                    <p className="text-caption italic" style={{ paddingTop: 'var(--space-4)', borderTop: `1px solid ${tier.highlighted ? 'rgba(255,255,255,0.20)' : 'var(--color-border)'}`, color: tier.highlighted ? 'rgba(255,255,255,0.55)' : 'var(--color-text-subtle)' }}>
                      * {tier.note}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Add-ons */}
          <AnimatedSection>
            <div className="card-base card-body">
              <h3 className="text-h3" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>Party Size Add-ons</h3>
              <p className="text-body-sm" style={{ marginBottom: 'var(--space-6)' }}>Elevate your catering order with these crowd-pleasers. Ask about pricing when you reach out.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xs)' }}>
                {addons.map(a => <span key={a} className="tag-pill tag-muted">{a}</span>)}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-lg" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="site-container">
          <div className="grid-asymmetric">
            <AnimatedSection>
              <div className="section-label"><div className="label-line" /><span className="label-text">Get a Quote</span></div>
              <h2 className="text-h1" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>Tell us about your event.</h2>
              <p className="text-body" style={{ marginBottom: 'var(--space-4)' }}>Send us the details and we&apos;ll get back to you within 24 hours. For parties over 50 guests, please mention that in your message.</p>
              <p className="text-body-sm">You can also reach us directly at{' '}
                <a href={`mailto:${SITE.email}`} className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>{SITE.email}</a>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card-base card-body text-center">
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: 'rgba(58,125,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)' }}>
                    <Check width={28} height={28} style={{ color: '#3a7d44' }} />
                  </div>
                  <h3 className="text-h3" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>We&apos;ve got your request!</h3>
                  <p className="text-body-sm">Anthony&apos;s team will be in touch within 24 hours. <em>Grazie mille!</em></p>
                </motion.div>
              ) : (
                <div className="card-base card-body">
                  <div className="form-group">
                    {[
                      { label: 'Your Name', name: 'name', type: 'text', placeholder: 'First & Last Name', required: true },
                      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com', required: true },
                      { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '(843) 000-0000', required: false },
                      { label: 'Event Date', name: 'date', type: 'date', placeholder: '', required: true },
                    ].map(field => (
                      <div key={field.name} className="form-field">
                        <label className="form-label">
                          {field.label}{field.required && <span style={{ color: 'var(--color-error)', marginLeft: 'var(--space-1)' }}>*</span>}
                        </label>
                        <input type={field.type} name={field.name} value={form[field.name as keyof typeof form]}
                          onChange={handleChange} placeholder={field.placeholder} required={field.required} className="form-input" />
                      </div>
                    ))}
                    <div className="form-field">
                      <label className="form-label">Estimated Guest Count <span style={{ color: 'var(--color-error)' }}>*</span></label>
                      <select name="guests" value={form.guests} onChange={handleChange} className="form-select">
                        <option value="">Select guest count</option>
                        <option>8 – 10 guests</option><option>16 – 20 guests</option>
                        <option>20 – 50 guests</option><option>50+ guests</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label">Tell us about your event</label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        placeholder="Event type, dietary needs, delivery vs. pickup, anything else we should know..."
                        className="form-textarea" />
                    </div>
                    <button onClick={handleSubmit} disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                      {loading ? 'Sending...' : <>{`Send Catering Request`} <ArrowRight className="w-4 h-4" /></>}
                    </button>
                    <p className="text-caption text-center">We respond within 24 hours · {SITE.email}</p>
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
