import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { articleSchema } from '@/lib/structured-data'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { SITE } from '@/constants'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { frontmatter: f } = await getPostBySlug(slug)
    return {
      title: f.title,
      description: f.excerpt,
      alternates: { canonical: `${SITE.url}/blog/${slug}` },
      openGraph: { type: 'article', title: `${f.title} | The Pass Charleston`, description: f.excerpt, url: `${SITE.url}/blog/${slug}`, publishedTime: f.date, authors: [f.author], images: [{ url: f.ogImage || '/og/og-blog.jpg', width: 1200, height: 630, alt: f.title }] },
      twitter: { card: 'summary_large_image', title: f.title, description: f.excerpt, images: [f.ogImage || '/og/og-blog.jpg'] },
    }
  } catch { return { title: 'Story Not Found' } }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  let post
  try { post = await getPostBySlug(slug) } catch { notFound() }
  const { frontmatter: f, content } = post
  const related = getRelatedPosts(slug, f.tags || [], 3)
  const schema = articleSchema({ title: f.title, excerpt: f.excerpt, date: f.date, updatedAt: f.updatedAt, author: f.author, ogImage: f.ogImage, slug })

  return (
    <div style={{ paddingTop: '4rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="section-md relative overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
        {f.ogImage && (
          <div className="absolute inset-0" aria-hidden="true">
            <Image src={f.ogImage} alt={f.title} fill className="object-cover opacity-20" sizes="100vw" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, var(--color-bg-secondary) 80%)' }} />
          </div>
        )}
        <div className="site-container relative z-10" style={{ maxWidth: '800px' }}>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Stories', href: '/blog' }, { label: f.title, href: `/blog/${slug}` }]} />
          <span className="tag-pill tag-ghost" style={{ marginBottom: 'var(--space-4)', display: 'inline-flex' }}>{f.category}</span>
          <h1 className="text-h1" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>{f.title}</h1>
          <p className="text-body-lg" style={{ marginBottom: 'var(--space-5)' }}>{f.excerpt}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--gap-md)' }}>
            <span className="text-caption" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Calendar width={14} height={14} />{formatDate(f.date)}
            </span>
            <span className="text-caption" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Clock width={14} height={14} />{f.readTime}
            </span>
            <span className="text-caption">By {f.author}</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      {f.ogImage && (
        <div className="site-container" style={{ marginTop: 'calc(var(--space-8) * -1)', marginBottom: 'var(--space-12)', maxWidth: '900px' }}>
          <div className="card-base overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <Image src={f.ogImage} alt={f.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
          </div>
        </div>
      )}

      {/* Body */}
      <article className="site-container prose-italian" style={{ maxWidth: '680px', paddingBottom: 'var(--space-16)' }}>
        <MDXRemote source={content} />
      </article>

      {/* Tags */}
      {f.tags && f.tags.length > 0 && (
        <div className="site-container" style={{ maxWidth: '680px', paddingBottom: 'var(--space-12)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xs)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)' }}>
            {f.tags.map(tag => (
              <Link key={tag} href={`/blog/tag/${encodeURIComponent(tag)}`} className="tag-pill tag-muted hover:border-primary transition-colors">#{tag}</Link>
            ))}
          </div>
        </div>
      )}

      {/* Back / related */}
      <div className="site-container" style={{ paddingBottom: 'var(--space-24)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-10)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)' }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-muted hover:text-primary">
            <ArrowLeft width={16} height={16} />All Stories
          </Link>
        </div>
        {related.length > 0 && (
          <>
            <h2 className="text-h2" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-8)' }}>More Stories</h2>
            <div className="grid-3col">
              {related.map(rp => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <div className="card-base card-hover overflow-hidden">
                    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <Image src={rp.ogImage || '/og/og-blog.jpg'} alt={rp.title} fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="card-body">
                      <span className="tag-pill tag-ghost" style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}>{rp.category}</span>
                      <h3 className="text-h4 transition-colors group-hover:text-primary" style={{ color: 'var(--color-text)' }}>{rp.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
