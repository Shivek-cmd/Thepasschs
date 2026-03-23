import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost } from '@/types'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return []
  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.mdx'))
  return files
    .map(filename => {
      const slug = filename.replace('.mdx', '')
      const fullPath = path.join(postsDirectory, filename)
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'))
      return { slug, ...data } as BlogPost
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const source = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(source)
  return { frontmatter: data as BlogPost, content, slug }
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): BlogPost[] {
  return getAllPosts()
    .filter(p => p.slug !== currentSlug && p.tags?.some(t => tags.includes(t)))
    .slice(0, limit)
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  return [...new Set(posts.map(p => p.category).filter(Boolean))]
}
