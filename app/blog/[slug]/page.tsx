import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { articleSchema } from '@/lib/structured-data'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { SITE } from '@/constants'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { frontmatter: f } = await getPostBySlug(slug)
    return {
      title: f.title,
      description: f.excerpt,
      alternates: { canonical: `${SITE.url}/blog/${slug}` },
      openGraph: {
        type: 'article',
        title: `${f.title} | The Pass Charleston`,
        description: f.excerpt,
        url: `${SITE.url}/blog/${slug}`,
        publishedTime: f.date,
        authors: [f.author],
        images: [{ url: f.ogImage || '/og/og-blog.jpg', width: 1200, height: 630, alt: f.title, type: 'image/jpeg' }],
      },
      twitter: {
        card: 'summary_large_image',
        title: f.title,
        description: f.excerpt,
        images: [f.ogImage || '/og/og-blog.jpg'],
      },
    }
  } catch {
    return { title: 'Story Not Found' }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  let post
  try {
    post = await getPostBySlug(slug)
  } catch {
    notFound()
  }

  const { frontmatter: f, content } = post
  const related = getRelatedPosts(slug, f.tags || [], 3)
  const schema = articleSchema({ title: f.title, excerpt: f.excerpt, date: f.date, updatedAt: f.updatedAt, author: f.author, ogImage: f.ogImage, slug })

  return (
    <div style={{ paddingTop: '4rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
        {f.ogImage && (
          <div className="absolute inset-0" aria-hidden="true">
            <Image src={f.ogImage} alt={f.title} fill className="object-cover opacity-20" sizes="100vw" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, var(--color-bg-secondary) 80%)' }} />
          </div>
        )}
        <div className="relative z-10 max-w-prose mx-auto px-4 sm:px-6 py-16 md:py-24">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Stories', href: '/blog' }, { label: f.title, href: `/blog/${slug}` }]} />
          <span className="text-xs uppercase tracking-[0.18em] font-semibold mb-4 inline-block" style={{ color: 'var(--color-accent)' }}>
            {f.category}
          </span>
          <h1 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--color-text)' }}>
            {f.title}
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-prose" style={{ color: 'var(--color-text-muted)' }}>
            {f.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--color-text-subtle)' }}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(f.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {f.readTime}
            </span>
            <span>By {f.author}</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      {f.ogImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 mb-12">
          <div className="rounded-2xl overflow-hidden border" style={{ aspectRatio: '16/9', borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-xl)' }}>
            <Image src={f.ogImage} alt={f.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="max-w-prose mx-auto px-4 sm:px-6 pb-16 prose-italian">
        <MDXRemote source={content} />
      </article>

      {/* Tags */}
      {f.tags && f.tags.length > 0 && (
        <div className="max-w-prose mx-auto px-4 sm:px-6 pb-12">
          <div className="flex flex-wrap gap-2 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
            {f.tags.map(tag => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag)}`}
                className="text-xs px-3 py-1 rounded-full border transition-colors hover:border-primary"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back / related */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-center justify-between mb-10 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" style={{ color: 'var(--color-text-muted)' }}>
            <ArrowLeft className="w-4 h-4" />
            All Stories
          </Link>
        </div>

        {related.length > 0 && (
          <>
            <h2 className="font-display font-bold mb-8" style={{ fontSize: '1.5rem', color: 'var(--color-text)' }}>
              More Stories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(rp => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <div className="rounded-xl overflow-hidden border transition-all group-hover:border-accent/40" style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
                    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <Image src={rp.ogImage || '/og/og-blog.jpg'} alt={rp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] uppercase tracking-[0.14em] font-semibold mb-2 inline-block" style={{ color: 'var(--color-accent)' }}>{rp.category}</span>
                      <h3 className="font-display font-bold text-base transition-colors group-hover:text-primary" style={{ color: 'var(--color-text)' }}>{rp.title}</h3>
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
