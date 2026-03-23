import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem { label: string; href: string }

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
      {items.map((item, i) => (
        <span key={item.href} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="w-3 h-3 opacity-40" />}
          {i === items.length - 1
            ? <span style={{ color: 'var(--color-text)' }}>{item.label}</span>
            : (
              <Link href={item.href} className="hover:text-primary transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                {item.label}
              </Link>
            )}
        </span>
      ))}
    </nav>
  )
}
