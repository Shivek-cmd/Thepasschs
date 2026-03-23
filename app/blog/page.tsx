import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { getAllPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { SITE } from '@/constants'

export const metadata: Metadata = {
  title: 'Stories & Press — The Pass Charleston',
  description: 'Behind the counter at The Pass — stories about our food, our chef, our city, and every crazy thing that has happened along the way. Plus 30+ press features.',
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: 'Stories & Press — The Pass Charleston',
    description: 'Behind the counter at The Pass. Stories, press coverage, and more.',
    images: [{ url: '/og/og-blog.jpg', width: 1200, height: 630 }],
  },
}

const categories = ['Behind the Counter', 'Press', 'The Italian Boy']

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts.find(p => p.featured) || posts[0]
  const rest = posts.filter(p => p.slug !== featured?.slug)

  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* Header */}
      <section className="section-lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="site-container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
              <span className="text-xs uppercase tracking-[0.20em] font-semibold" style={{ color: 'var(--color-accent)' }}>
                Stories & Press
              </span>
            </div>
            <h1 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--color-text)' }}>
              Behind the counter.
            </h1>
            <p className="text-base md:text-lg max-w-xl" style={{ color: 'var(--color-text-muted)' }}>
              Stories about our food, our chef, our city, and everything that has happened in this tiny 700 sq ft shop on Saint Philip Street.
            </p>
          </AnimatedSection>

          {/* Category filter */}
          <AnimatedSection delay={0.1} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="text-xs uppercase tracking-[0.14em] font-semibold px-4 py-2 rounded-full transition-all"
              style={{ background: 'var(--color-primary)', color: '#fff' }}
            >
              All
            </Link>
            {categories.map(cat => (
              <Link
                key={cat}
                href={`/blog/category/${encodeURIComponent(cat.toLowerCase().replace(/ /g, '-'))}`}
                className="text-xs uppercase tracking-[0.14em] font-semibold px-4 py-2 rounded-full border transition-all hover:border-primary"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                {cat}
              </Link>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="section-sm" style={{ background: 'var(--color-bg)' }}>
          <div className="site-container">
            <AnimatedSection>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div
                  className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] rounded-2xl overflow-hidden border transition-all duration-300 group-hover:border-accent/40"
                  style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-md)' }}
                >
                  <div className="relative" style={{ minHeight: '400px' }}>
                    <Image
                      src={featured.ogImage || 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594352675-58WC29PRSSU1P008714K/03222022_The-Pass_Andrew-Cebulka-5559.jpg'}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(14,12,10,0.30))' }} />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span
                      className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-4 inline-block"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {featured.category} · Featured
                    </span>
                    <h2
                      className="font-display font-bold mb-4 transition-colors group-hover:text-primary"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--color-text)' }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs mb-6" style={{ color: 'var(--color-text-subtle)' }}>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(featured.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: 'var(--color-primary)' }}>
                      Read the Story
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Post grid */}
      {rest.length > 0 && (
        <section className="section-sm" style={{ background: 'var(--color-bg)' }}>
          <div className="site-container">
            <div className="grid-3col">
              {rest.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div
                      className="rounded-2xl overflow-hidden border h-full flex flex-col transition-all duration-300 group-hover:border-accent/40"
                      style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
                    >
                      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                        <Image
                          src={post.ogImage || 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594448876-XU1XXE0JNMQPNUCV23C4/bDfr2cLw.jpeg'}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-[10px] uppercase tracking-[0.16em] font-semibold mb-3 inline-block" style={{ color: 'var(--color-accent)' }}>
                          {post.category}
                        </span>
                        <h2
                          className="font-display font-bold mb-3 flex-1 transition-colors group-hover:text-primary"
                          style={{ fontSize: '1.1rem', color: 'var(--color-text)' }}
                        >
                          {post.title}
                        </h2>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                          {post.excerpt.slice(0, 110)}...
                        </p>
                        <div className="flex items-center justify-between text-xs mt-auto pt-4" style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-text-subtle)' }}>
                          <span>{formatDate(post.date)}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
