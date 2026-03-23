import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Star, AlertCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import MagneticButton from '@/components/ui/MagneticButton'
import { SITE } from '@/constants'

export const metadata: Metadata = {
  title: 'The Italian Boy After Dark — 12-Seat Tasting Experience | Charleston SC',
  description: 'An intimate six-course Italian tasting experience inside The Pass, Charleston. 12 seats. One seating at 7PM. Wednesday–Saturday. $120/person. Reserve on Resy.',
  openGraph: {
    title: 'The Italian Boy After Dark | Charleston, SC',
    description: 'Twelve seats. One seating. A six-course Italian rowhome experience inside The Pass.',
    images: [{ url: '/og/og-italianboy.jpg', width: 1200, height: 630 }],
  },
}

const courses = [
  { number: '01', name: 'The Cheese Course', description: "Sourcing our cheeses directly from Italy, we pair our selections with local produce from nearby Charleston farms. A quiet, considered opening to the evening.", image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/7f800a71-db11-4c17-a392-28b6b44f72d1/IBCheese.jpg' },
  { number: '02', name: 'The Crudo Course', description: "There is one thing Charlestonians and Italians share: a love of seafood. Our offering is done in its rarest form — simply dressed crudo.", image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/6b452581-a13c-4696-8099-7fac2bdf4372/Untitled+design+%287%29.png' },
  { number: '03', name: 'The Panino Imbottiti Course', description: "Staying true to our roots as a tiny sandwich shop, we named this 'The Northeast Philadelphia Rowhome Course.' Two foods always present in an Italian's home: sandwiches and antipasti.", image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/dbefd7af-76fa-4de7-8d5b-f1a1e3255419/Untitled+design+%286%29.png' },
  { number: '04', name: 'The Macaroni Course', description: "Everyone who blends eggs, flour and water calls it 'pasta' — but Italians call it 'macaroni.' Whether handmade or die-cut, we pair it with sauces from Chef's home recipes.", image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/dcecfacf-6d12-46f9-81d8-0975f42db2e8/Untitled+design+%285%29.png' },
  { number: '05', name: 'The Dessert Course', description: "Part A of our final act. A small, sweet offering interpreted from classic Italian desserts.", image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/adc2055f-d979-4b6f-9282-676b1cb1ba08/Untitled+design+%288%29.png' },
  { number: '06', name: 'The Amaro Cart', description: "Part B. A traditional Italian digestivo cart — our way of tamping everything down and sending you home feeling comfortable.", image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/8379a8fc-6003-4669-b40a-4ae5782307a7/Untitled+design+%289%29.png' },
]

const rules = [
  { Icon: Clock, text: 'Dinner begins at 7PM sharp. One seating per evening.' },
  { Icon: Users, text: 'Maximum 12 guests total. Parties no larger than 6.' },
  { Icon: Star, text: '$120 per person — includes dinner, tax, and gratuity.' },
  { Icon: AlertCircle, text: 'Reservations are prepaid via Resy. No-shows are not refunded.' },
  { Icon: AlertCircle, text: 'We cannot accommodate dietary substitutions. Così è la vita.' },
  { Icon: AlertCircle, text: 'Proper attire required. Gentlemen remove hats. No flip-flops.' },
]

const details = [
  { label: 'Location', value: '207A St. Philip St., Charleston, SC 29403' },
  { label: 'Days', value: 'Wednesday – Saturday' },
  { label: 'Seating', value: 'One seating at 7:00 PM' },
  { label: 'Price', value: '$120 per person (tax & gratuity included)' },
  { label: 'Reservations', value: 'Via Resy — prepaid at booking' },
  { label: 'Phone', value: 'No phone — contact via website or Resy' },
]

const darkBg = '#0E0C0A'
const darkSecondary = '#161310'
const darkBorder = 'rgba(240,235,227,0.08)'
const white = '#F0EBE3'
const whiteMuted = 'rgba(240,235,227,0.65)'
const whiteSubtle = 'rgba(240,235,227,0.40)'
const gold = '#C9A84C'

export default function ItalianBoyPage() {
  return (
    <div style={{ background: darkBg, color: white, paddingTop: '4rem' }}>

      {/* Hero */}
      <section className="section-xl relative overflow-hidden" style={{ background: darkBg }}>
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/09302024_The-Pass_Andrew-Cebulka-10510-2.jpg"
            alt="The Italian Boy After Dark — intimate tasting experience inside The Pass Charleston"
            fill className="object-cover opacity-35" priority sizes="100vw" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(14,12,10,0.95) 0%, rgba(14,12,10,0.70) 60%, rgba(14,12,10,0.85) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,12,10,0.80) 0%, transparent 50%)' }} />
        </div>
        <svg className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none" width="600" height="600" viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="200" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
          <circle cx="300" cy="300" r="290" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
        </svg>

        <div className="site-container relative z-10">
          <div style={{ maxWidth: '640px' }}>
            <AnimatedSection>
              <div className="section-label" style={{ marginBottom: 'var(--space-8)' }}>
                <div className="label-line" style={{ background: gold }} />
                <span className="label-text" style={{ color: gold }}>Wednesday — Saturday · 7PM</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <Image src="/images/ItalianBoy.jpg"
                  alt="The Italian Boy After Dark" width={280} height={280} className="object-contain"
                  style={{ borderRadius: '50%' }} />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h1 className="text-h1" style={{ color: white, marginBottom: 'var(--space-4)' }}>
                A restaurant within a restaurant.<br />
                <em style={{ color: gold }}>Nothing like the daytime.</em>
              </h1>
              <p className="text-body-lg" style={{ color: whiteMuted, marginBottom: 'var(--space-10)' }}>
                Inside the same 700 sq ft sandwich shop you know and love, Anthony transforms the back room after dark into something entirely different — twelve seats, one seating, six courses of Italian rowhome cooking. No menu cards. No pretension. Just the best meal you&apos;ll have this year.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-sm)', marginBottom: 'var(--space-8)' }}>
                <MagneticButton>
                  <a href={SITE.resy} target="_blank" rel="noopener noreferrer" className="btn-accent">
                    Reserve on Resy <ArrowRight className="w-4 h-4" />
                  </a>
                </MagneticButton>
                <a href="#details" className="btn-outline" style={{ borderColor: 'rgba(240,235,227,0.20)', color: whiteMuted }}>
                  What to Expect
                </a>
              </div>
              <div className="hero-tags">
                {['$120 / Person', '12 Seats', '2 Hours', 'Prepaid via Resy', 'BYOB Not Allowed'].map(tag => (
                  <span key={tag} className="tag-pill tag-dark">{tag}</span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-xl" style={{ background: darkBg }}>
        <div className="site-container">
          <AnimatedSection className="section-eyebrow">
            <div className="section-label" style={{ marginBottom: 'var(--space-5)' }}>
              <div className="label-line" style={{ background: gold }} />
              <span className="label-text" style={{ color: gold }}>The Experience</span>
            </div>
            <h2 className="text-h1" style={{ color: white }}>
              Six courses. One evening.<br />Zero pretension.
            </h2>
          </AnimatedSection>

          <div className="grid-3col">
            {courses.map((course, i) => (
              <AnimatedSection key={course.name} delay={i * 0.08}>
                <div className="card-base h-full" style={{ background: 'rgba(255,255,255,0.03)', borderColor: darkBorder, display: 'flex', flexDirection: 'column' }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <Image src={course.image} alt={`${course.name} — The Italian Boy After Dark`}
                      fill className="object-cover opacity-70" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,12,10,0.80) 0%, transparent 60%)' }} />
                    <span className="text-display font-bold absolute top-4 left-4" style={{ fontSize: 'var(--text-h2)', color: 'rgba(201,168,76,0.55)' }} aria-hidden="true">
                      {course.number}
                    </span>
                  </div>
                  <div className="card-body" style={{ flex: 1 }}>
                    <h3 className="text-h4" style={{ color: white, marginBottom: 'var(--space-3)' }}>{course.name}</h3>
                    <p className="text-body-sm" style={{ color: whiteMuted }}>{course.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="section-xl" style={{ background: darkSecondary, borderTop: `1px solid ${darkBorder}` }}>
        <div className="site-container">
          <div className="grid-asymmetric">
            <AnimatedSection>
              <h2 className="text-h1" style={{ color: white, marginBottom: 'var(--space-8)' }}>
                Things to know<br />before you come.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                {rules.map((rule, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                    <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', background: 'rgba(201,168,76,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <rule.Icon width={16} height={16} style={{ color: gold }} />
                    </div>
                    <p className="text-body" style={{ color: whiteMuted, paddingTop: '0.3rem' }}>{rule.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="card-base card-body" style={{ background: 'rgba(255,255,255,0.03)', borderColor: darkBorder }}>
                <h3 className="text-h3 text-display" style={{ color: white, marginBottom: 'var(--space-2)' }}>
                  Mangia Bene, Ridi Spesso, Ama Molto.
                </h3>
                <p className="text-body-sm italic" style={{ color: gold, marginBottom: 'var(--space-6)' }}>
                  Eat Well, Laugh Often, Love Much.
                </p>
                <div style={{ borderTop: `1px solid ${darkBorder}`, paddingTop: 'var(--space-6)', marginBottom: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {details.map(d => (
                    <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-4)', paddingBottom: 'var(--space-3)', borderBottom: `1px solid rgba(240,235,227,0.06)` }}>
                      <span className="text-body-sm" style={{ color: whiteSubtle }}>{d.label}</span>
                      <span className="text-body-sm text-right" style={{ color: whiteMuted }}>{d.value}</span>
                    </div>
                  ))}
                </div>
                <MagneticButton className="w-full">
                  <a href={SITE.resy} target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                    Reserve Your Seats on Resy <ArrowRight className="w-4 h-4" />
                  </a>
                </MagneticButton>
                <p className="text-caption text-center" style={{ marginTop: 'var(--space-4)', color: whiteSubtle }}>
                  30-day reservation window. First-come, first-served. Follow @theitalianboychs for cancellation openings.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Private events */}
      <section className="section-lg text-center" style={{ background: darkBg, borderTop: `1px solid ${darkBorder}` }}>
        <div className="site-container">
          <AnimatedSection>
            <h2 className="text-h1" style={{ color: white, marginBottom: 'var(--space-4)' }}>Want the whole room?</h2>
            <p className="text-body-lg" style={{ color: whiteMuted, maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
              Some nights deserve more than just a table. Book the entire Italian Boy for a private celebration, corporate dinner, or once-in-a-lifetime event.
            </p>
            <a href={`mailto:${SITE.email}?subject=Italian Boy Private Event Inquiry`} className="btn-outline" style={{ borderColor: 'rgba(201,168,76,0.40)', color: gold }}>
              Inquire About Private Events <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
