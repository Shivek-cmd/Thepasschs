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
    images: [{ url: '/og/og-italianboy.jpg', width: 1200, height: 630, alt: 'The Italian Boy After Dark — Charleston SC' }],
  },
}

const courses = [
  {
    number: '01',
    name: 'The Cheese Course',
    description: "Sourcing our cheeses directly from Italy, we pair our selections with local produce from nearby Charleston farms. A quiet, considered opening to the evening.",
    image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/7f800a71-db11-4c17-a392-28b6b44f72d1/IBCheese.jpg',
  },
  {
    number: '02',
    name: 'The Crudo Course',
    description: "There is one thing that Charlestonians and Italians have in common: a love of seafood. Our offering is done in its rarest form — simply dressed crudo.",
    image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/6b452581-a13c-4696-8099-7fac2bdf4372/Untitled+design+%287%29.png',
  },
  {
    number: '03',
    name: 'The Panino Imbottiti Course',
    description: "Staying true to our roots as a tiny sandwich shop, we named this 'The Northeast Philadelphia Rowhome Course.' Two foods always present in an Italian's home: sandwiches and antipasti.",
    image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/dbefd7af-76fa-4de7-8d5b-f1a1e3255419/Untitled+design+%286%29.png',
  },
  {
    number: '04',
    name: 'The Macaroni Course',
    description: "Everyone who blends eggs, flour and water calls it 'pasta' — but Italians call it 'macaroni.' Whether handmade or die-cut, we pair it with sauces from Chef's home recipes.",
    image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/dcecfacf-6d12-46f9-81d8-0975f42db2e8/Untitled+design+%285%29.png',
  },
  {
    number: '05',
    name: 'The Dessert Course',
    description: "Part A of our final act. A small, sweet offering interpreted from classic Italian desserts. Because every good meal deserves a proper ending.",
    image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/adc2055f-d979-4b6f-9282-676b1cb1ba08/Untitled+design+%288%29.png',
  },
  {
    number: '06',
    name: 'The Amaro Cart',
    description: "Part B. A traditional Italian digestivo cart — our way of tamping everything down and sending you home feeling comfortable. The way every Italian family dinner ends.",
    image: 'https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/8379a8fc-6003-4669-b40a-4ae5782307a7/Untitled+design+%289%29.png',
  },
]

const rules = [
  { icon: Clock, text: 'Dinner begins at 7PM sharp. One seating per evening.' },
  { icon: Users, text: 'Maximum 12 guests total. Parties no larger than 6.' },
  { icon: Star, text: '$120 per person — includes dinner, tax, and gratuity.' },
  { icon: AlertCircle, text: 'Reservations are prepaid via Resy. No-shows are not refunded.' },
  { icon: AlertCircle, text: 'We cannot accommodate dietary substitutions. Così è la vita.' },
  { icon: AlertCircle, text: 'Proper attire required. Gentlemen remove hats. No flip-flops.' },
]

export default function ItalianBoyPage() {
  return (
    <div data-force-dark style={{ background: '#0E0C0A', color: '#F0EBE3', paddingTop: '4rem' }}>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: '90vh', background: '#0E0C0A' }}
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/09302024_The-Pass_Andrew-Cebulka-10510-2.jpg"
            alt="The Italian Boy After Dark — intimate tasting experience inside The Pass Charleston"
            fill
            className="object-cover opacity-35"
            priority
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(14,12,10,0.95) 0%, rgba(14,12,10,0.65) 60%, rgba(14,12,10,0.85) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,12,10,0.80) 0%, transparent 50%)' }} />
        </div>

        {/* Rings */}
        <svg className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none" width="600" height="600" viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="200" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
          <circle cx="300" cy="300" r="290" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
        </svg>

        <div className="relative z-10 site-container flex flex-col justify-center" style={{ minHeight: '90vh', paddingBottom: '4rem' }}>
          <div className="max-w-2xl">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8" style={{ background: '#C9A84C' }} />
                <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: '#C9A84C' }}>
                  Wednesday — Saturday · 7PM
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/66c6970e298efb4cf210f0ff/536940a6-0eb4-43c0-a34c-e14e91497ccb/ItalianBoy_logo-11.png"
                alt="The Italian Boy After Dark"
                width={360}
                height={130}
                className="object-contain mb-8"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.92 }}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                A restaurant within a restaurant.<br />
                <em style={{ color: 'rgba(201,168,76,0.90)' }}>Nothing like the daytime.</em>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(240,235,227,0.72)' }}>
                Inside the same 700 sq ft sandwich shop you know and love, Anthony transforms the back room after dark into something entirely different — twelve seats, one seating, six courses of Italian rowhome cooking. No menu cards. No pretension. Just the best meal you&apos;ll have this year.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex flex-wrap gap-4">
              <MagneticButton>
                <a
                  href={SITE.resy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200"
                  style={{ background: '#C9A84C', color: '#1C1A17' }}
                >
                  Reserve on Resy
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticButton>
              <a
                href="#details"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border transition-all duration-200"
                style={{ borderColor: 'rgba(240,235,227,0.20)', color: 'rgba(240,235,227,0.80)' }}
              >
                What to Expect
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.25} className="mt-8 flex flex-wrap gap-4">
              {['$120 / Person', '12 Seats', '2 Hours', 'Prepaid via Resy', 'BYOB Not Allowed'].map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(240,235,227,0.07)', color: 'rgba(240,235,227,0.60)', border: '1px solid rgba(240,235,227,0.10)' }}
                >
                  {tag}
                </span>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 md:py-32" style={{ background: '#0E0C0A' }} aria-labelledby="courses-heading">
        <div className="site-container">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: '#C9A84C' }} />
              <span className="text-xs uppercase tracking-[0.20em] font-semibold" style={{ color: '#C9A84C' }}>
                The Experience
              </span>
            </div>
            <h2 id="courses-heading" className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)' }}>
              Six courses. One evening.<br />Zero pretension.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <AnimatedSection key={course.name} delay={i * 0.08}>
                <div
                  className="rounded-2xl overflow-hidden border h-full"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(240,235,227,0.08)' }}
                >
                  <div className="relative" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={course.image}
                      alt={`${course.name} — The Italian Boy After Dark`}
                      fill
                      className="object-cover opacity-70"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,12,10,0.80) 0%, transparent 60%)' }} />
                    <span
                      className="absolute top-4 left-4 font-display font-bold text-3xl"
                      style={{ color: 'rgba(201,168,76,0.60)' }}
                      aria-hidden="true"
                    >
                      {course.number}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold mb-3 text-white" style={{ fontSize: '1.15rem' }}>
                      {course.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,235,227,0.60)' }}>
                      {course.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="py-24 md:py-32" style={{ background: '#161310', borderTop: '1px solid rgba(240,235,227,0.06)' }}>
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="font-display font-bold text-white mb-8" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
                Things to know<br />before you come.
              </h2>
              <div className="flex flex-col gap-5">
                {rules.map((rule, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,168,76,0.12)' }}
                    >
                      <rule.icon className="w-4 h-4" style={{ color: '#C9A84C' }} />
                    </div>
                    <p className="text-sm leading-relaxed pt-1.5" style={{ color: 'rgba(240,235,227,0.70)' }}>
                      {rule.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl p-8 border" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(240,235,227,0.08)' }}>
                <h3 className="font-display font-bold text-white text-xl mb-2">
                  Mangia Bene, Ridi Spesso, Ama Molto.
                </h3>
                <p className="text-sm mb-8 italic" style={{ color: 'rgba(201,168,76,0.80)' }}>
                  Eat Well, Laugh Often, Love Much.
                </p>
                <div className="flex flex-col gap-4 mb-8" style={{ borderTop: '1px solid rgba(240,235,227,0.08)', paddingTop: '1.5rem' }}>
                  {[
                    { label: 'Location', value: '207A St. Philip St., Charleston, SC 29403' },
                    { label: 'Days', value: 'Wednesday – Saturday' },
                    { label: 'Seating', value: 'One seating at 7:00 PM' },
                    { label: 'Price', value: '$120 per person (tax & gratuity included)' },
                    { label: 'Reservations', value: 'Via Resy — prepaid at booking' },
                    { label: 'Phone', value: 'No phone — contact via website or Resy' },
                  ].map(d => (
                    <div key={d.label} className="flex justify-between gap-4" style={{ borderBottom: '1px solid rgba(240,235,227,0.06)', paddingBottom: '0.75rem' }}>
                      <span className="text-sm" style={{ color: 'rgba(240,235,227,0.45)' }}>{d.label}</span>
                      <span className="text-sm text-right" style={{ color: 'rgba(240,235,227,0.80)' }}>{d.value}</span>
                    </div>
                  ))}
                </div>
                <MagneticButton className="w-full">
                  <a
                    href={SITE.resy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200"
                    style={{ background: '#C9A84C', color: '#1C1A17' }}
                  >
                    Reserve Your Seats on Resy
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </MagneticButton>
                <p className="text-xs text-center mt-4" style={{ color: 'rgba(240,235,227,0.35)' }}>
                  30-day reservation window. First-come, first-served. Follow @theitalianboychs for cancellation openings.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Private events */}
      <section className="py-20 md:py-28 text-center" style={{ background: '#0E0C0A', borderTop: '1px solid rgba(240,235,227,0.06)' }}>
        <div className="site-container">
          <AnimatedSection>
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
              Want the whole room?
            </h2>
            <p className="text-base mb-8" style={{ color: 'rgba(240,235,227,0.65)' }}>
              Some nights deserve more than just a table. Book the entire Italian Boy for a private celebration, corporate dinner, or once-in-a-lifetime event.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Italian Boy Private Event Inquiry`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border transition-all duration-200"
              style={{ borderColor: 'rgba(201,168,76,0.40)', color: '#C9A84C' }}
            >
              Inquire About Private Events
              <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
