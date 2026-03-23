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
    description: 'Behind the counter at The Pass.',
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
      <section className="section-md" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="site-container">
          <AnimatedSection>
            <div className="section-label"><div className="label-line" /><span className="label-text">Stories & Press</span></div>
            <h1 className="text-h1" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>
              Behind the counter.
            </h1>
            <p className="text-body-lg" style={{ maxWidth: '520px', marginBottom: 'var(--space-6)' }}>
              Stories about our food, our chef, our city, and everything that has happened in this tiny 700 sq ft shop on Saint Philip Street.
            </p>
          </AnimatedSection>

          {/* Category filters */}
          <AnimatedSection delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xs)', marginTop: 'var(--space-6)' }}>
              <Link href="/blog" className="tag-pill tag-accent">All</Link>
              {categories.map(cat => (
                <Link key={cat} href={`/blog/category/${encodeURIComponent(cat.toLowerCase().replace(/ /g, '-'))}`}
                  className="tag-pill tag-muted hover:border-primary transition-colors">
                  {cat}
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="section-md" style={{ background: 'var(--color-bg)' }}>
          <div className="site-container">
            <AnimatedSection>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="card-base card-hover" style={{ display: 'grid', gridTemplateColumns: '1fr', overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                    <div className="featured-card-grid">
                      {/* Image */}
                      <div className="relative overflow-hidden" style={{ minHeight: '320px' }}>
                        <Image
                          src={featured.ogImage || 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594352675-58WC29PRSSU1P008714K/03222022_The-Pass_Andrew-Cebulka-5559.jpg'}
                          alt={featured.title} fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 60vw" />
                      </div>
                      {/* Content */}
                      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span className="tag-pill tag-ghost" style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-4)' }}>
                          {featured.category} · Featured
                        </span>
                        <h2 className="text-h2 transition-colors group-hover:text-primary text-balance" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>
                          {featured.title}
                        </h2>
                        <p className="text-body" style={{ marginBottom: 'var(--space-5)' }}>{featured.excerpt}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-md)', marginBottom: 'var(--space-6)' }}>
                          <span className="text-caption" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                            <Calendar width={13} height={13} />{formatDate(featured.date)}
                          </span>
                          <span className="text-caption" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                            <Clock width={13} height={13} />{featured.readTime}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 duration-200" style={{ color: 'var(--color-primary)' }}>
                          Read the Story <ArrowRight width={16} height={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Post grid */}
      {rest.length > 0 && (
        <section className="section-md" style={{ background: 'var(--color-bg)' }}>
          <div className="site-container">
            <div className="grid-3col">
              {rest.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="card-base card-hover h-full" style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                        <Image
                          src={post.ogImage || 'https://images.squarespace-cdn.com/content/v1/51398e71e4b0052c92db718c/1684594448876-XU1XXE0JNMQPNUCV23C4/bDfr2cLw.jpeg'}
                          alt={post.title} fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      </div>
                      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <span className="tag-pill tag-ghost" style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-4)' }}>
                          {post.category}
                        </span>
                        <h2 className="text-h3 flex-1 transition-colors group-hover:text-primary" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>
                          {post.title}
                        </h2>
                        <p className="text-body-sm" style={{ marginBottom: 'var(--space-4)' }}>
                          {post.excerpt.slice(0, 110)}...
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)', marginTop: 'auto' }}>
                          <span className="text-caption">{formatDate(post.date)}</span>
                          <span className="text-caption">{post.readTime}</span>
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
