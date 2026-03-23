import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function MaseratiMoment() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '70vh' }}
      aria-labelledby="maserati-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594352675-58WC29PRSSU1P008714K/03222022_The-Pass_Andrew-Cebulka-5559.jpg"
          alt="The Pass — storefront and interior at 207A Saint Philip Street, Charleston SC"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(14,12,10,0.92) 0%, rgba(14,12,10,0.75) 50%, rgba(14,12,10,0.88) 100%)' }}
        />
      </div>

      {/* Concentric rings */}
      <svg
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 pointer-events-none select-none opacity-30"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="150" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <circle cx="300" cy="300" r="250" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
        <circle cx="300" cy="300" r="295" fill="none" stroke="rgba(201,168,76,0.07)" strokeWidth="1" />
      </svg>

      {/* Content */}
      <div
        className="relative z-10 site-container flex items-center"
        style={{ minHeight: '70vh' }}
      >
        <div style={{ maxWidth: "42rem", padding: "5rem 0" }}>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
              <span className="text-xs uppercase tracking-[0.20em] font-semibold" style={{ color: 'var(--color-accent)' }}>
                February 13, 2024
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              id="maserati-heading"
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              A Maserati hit our front door at 2AM.
              We opened five days later.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(240,235,227,0.72)' }}
            >
              On Valentine&apos;s Day weekend 2024, a driver ran a red light and a Maserati careened through our wooden façade. $50,000 in damage. Kitchen untouched. Staff kept working.
            </p>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: 'rgba(240,235,227,0.72)' }}
            >
              Anthony pulled the Maserati trident from the debris at 3:30AM. It hangs on our wall today — a reminder that this little shop is tougher than a sports car. We served through a window for seven months. The community showed up. So did the press.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <blockquote
              className="border-l-2 pl-6 font-display italic text-xl"
              style={{ borderColor: 'var(--color-accent)', color: 'rgba(201,168,76,0.90)' }}
            >
              &ldquo;I&apos;m glad it was an Italian car. If it was a German car, I&apos;d be pissed.&rdquo;
              <footer className="mt-3 text-sm not-italic font-body" style={{ color: 'rgba(240,235,227,0.50)' }}>
                — Chef Anthony Marini
              </footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
