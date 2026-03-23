# CLAUDE.md — Billion Dollar Website System
# ⚠️ UPDATED with critical Tailwind v4 + deployment lessons

---

## 🚨 CRITICAL LESSONS LEARNED (READ FIRST — BEFORE ANY CODE)

### LESSON 1: Tailwind v4 vs v3 — THEY ARE COMPLETELY DIFFERENT
`create-next-app` now scaffolds with **Tailwind v4** by default. v4 is NOT backward compatible.

| Thing | Tailwind v3 | Tailwind v4 |
|---|---|---|
| CSS import | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| Theme config | `tailwind.config.ts extend: { colors... }` | `@theme {}` block in CSS |
| PostCSS plugin | `tailwindcss: {}` | `@tailwindcss/postcss: {}` |
| Config file | Full theme config | Content paths only |

**ALWAYS check which version was installed:**
```bash
cat package.json | grep tailwindcss
# v3: "tailwindcss": "^3.x.x" → use @tailwind directives
# v4: "tailwindcss": "^4.x.x" → use @import "tailwindcss"
```

### LESSON 2: Tailwind v4 JIT Misses Responsive Classes on Server Components
**THE BUG**: Tailwind v4's JIT scanner UNRELIABLY generates responsive utility classes
like `md:grid-cols-3`, `lg:py-40`, `md:py-32` when used on server-rendered components.
The build succeeds but CSS is missing at runtime — content sticks to left, no spacing.

**THE FIX**: Move ALL layout-critical CSS to `globals.css` as plain CSS classes.
NEVER rely on Tailwind responsive utilities for section padding, grids, or headings.

```css
/* globals.css — ALWAYS define these manually, never use Tailwind md: lg: for layout */

/* Section spacing */
.section-sm  { padding-top: 4rem;  padding-bottom: 4rem; }
.section-md  { padding-top: 5rem;  padding-bottom: 5rem; }
.section-lg  { padding-top: 6rem;  padding-bottom: 6rem; }
.section-xl  { padding-top: 7rem;  padding-bottom: 7rem; }
.section-2xl { padding-top: 8rem;  padding-bottom: 8rem; }

@media (min-width: 768px) {
  .section-sm  { padding-top: 5rem;  padding-bottom: 5rem; }
  .section-md  { padding-top: 7rem;  padding-bottom: 7rem; }
  .section-lg  { padding-top: 8rem;  padding-bottom: 8rem; }
  .section-xl  { padding-top: 9rem;  padding-bottom: 9rem; }
  .section-2xl { padding-top: 10rem; padding-bottom: 10rem; }
}

@media (min-width: 1024px) {
  .section-sm  { padding-top: 6rem;  padding-bottom: 6rem; }
  .section-md  { padding-top: 8rem;  padding-bottom: 8rem; }
  .section-lg  { padding-top: 10rem; padding-bottom: 10rem; }
  .section-xl  { padding-top: 12rem; padding-bottom: 12rem; }
  .section-2xl { padding-top: 14rem; padding-bottom: 14rem; }
}

/* Responsive grid system */
.grid-2col     { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
.grid-3col     { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
.grid-4col     { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.grid-asymmetric { display: grid; grid-template-columns: 1fr; gap: 3rem; }
.grid-footer   { display: grid; grid-template-columns: 1fr; gap: 3rem; }

@media (min-width: 640px) {
  .grid-2col { grid-template-columns: repeat(2, 1fr); }
  .grid-3col { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 768px) {
  .grid-2col  { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
  .grid-3col  { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
  .grid-4col  { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
  .grid-footer { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid-2col  { grid-template-columns: repeat(2, 1fr); gap: 3rem; }
  .grid-3col  { grid-template-columns: repeat(3, 1fr); gap: 2rem; }
  .grid-4col  { grid-template-columns: repeat(4, 1fr); gap: 2rem; }
  .grid-asymmetric { grid-template-columns: 3fr 2fr; gap: 5rem; align-items: center; }
  .grid-footer { grid-template-columns: repeat(4, 1fr); gap: 2rem; }
}

/* Fluid heading sizes */
.heading-hero { font-size: clamp(3rem, 8vw, 6.5rem); line-height: 1.05; font-weight: 800; }
.heading-xl   { font-size: clamp(2.2rem, 5vw, 3.5rem); line-height: 1.1; font-weight: 700; }
.heading-lg   { font-size: clamp(1.8rem, 4vw, 2.8rem); line-height: 1.1; font-weight: 700; }
.heading-md   { font-size: clamp(1.4rem, 2.5vw, 2rem); line-height: 1.15; font-weight: 600; }
.heading-sm   { font-size: clamp(1.1rem, 1.8vw, 1.3rem); line-height: 1.2; font-weight: 600; }

/* Site container — ALWAYS use this, never max-w-container mx-auto px-4 sm:px-6 lg:px-8 */
.site-container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .site-container { padding-left: 1.5rem; padding-right: 1.5rem; }
}

@media (min-width: 1024px) {
  .site-container { padding-left: 2rem; padding-right: 2rem; }
}
```

### LESSON 3: TWO PostCSS Config Files Will Silently Break CSS
`create-next-app` creates `postcss.config.mjs`. If you also create `postcss.config.js`,
they CONFLICT. The `.mjs` one wins but may use wrong settings. **Always check:**
```bash
ls postcss.config.*
# Should show ONLY ONE file. Delete any extras.
```

For Tailwind v4: `postcss.config.mjs` must use `@tailwindcss/postcss`, NOT `tailwindcss`:
```js
// ✅ CORRECT for Tailwind v4
export default { plugins: { "@tailwindcss/postcss": {} } }

// ❌ WRONG for Tailwind v4 (v3 syntax)
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } }
```

### LESSON 4: Navbar Transparent on Hero Needs Explicit Text Color
When navbar is transparent over a hero image, NEVER rely on CSS variable color.
Always explicitly force white text + text-shadow for legibility:
```tsx
// Add a dark gradient overlay behind the navbar when transparent
{isTransparent && (
  <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)', zIndex: 0 }} />
)}
// Force white text with shadow on nav items when transparent
style={{ color: isTransparent ? '#FFFFFF' : 'var(--color-text)', textShadow: isTransparent ? '0 1px 4px rgba(0,0,0,0.6)' : 'none' }}
```

### LESSON 5: max-w-container Without width:100% Collapses Content to Left
`max-width` alone doesn't center — it needs `width: 100%` + `margin: auto`.
Tailwind's `max-w-container` only sets `max-width`. Always pair with `mx-auto` AND make
sure a width constraint is set. Better: just use `.site-container` from globals.css.

---

## ⚙️ TECH STACK

### Core (Non-Negotiable)
| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js 15+ App Router | Best SEO, performance, and DX |
| Language | TypeScript (.tsx everywhere) | Type safety, fewer bugs |
| Styling | Tailwind CSS v4 + CSS Variables | Use @import "tailwindcss" + @theme |
| Layout | Pure CSS classes in globals.css | Tailwind v4 JIT reliability |
| Images | `next/image` | Auto WebP, lazy load, CLS fix |
| MDX/Blog | `next-mdx-remote@^6` + `gray-matter` | v6+ required — v5 has CVE |
| Sitemap | `app/sitemap.ts` (native Next.js) | Zero config |
| SEO | Metadata API + JSON-LD | Complete SEO coverage |
| Analytics | Google Tag Manager (GTM only) | Handles GA4, Pixel, everything |

### Install Commands (Tailwind v4 — current default)
```bash
npx create-next-app@latest my-project --typescript --tailwind --app --import-alias="@/*"
cd my-project

# Check tailwind version first!
cat package.json | grep tailwindcss

# If v4 (likely):
npm install @tailwindcss/postcss
npm install framer-motion lucide-react clsx tailwind-merge
npm install next-mdx-remote@^6 gray-matter

# Remove conflicting postcss.config.js if it exists
rm -f postcss.config.js
# Keep only postcss.config.mjs with @tailwindcss/postcss
```

### globals.css Template for Tailwind v4
```css
@import url('https://fonts.googleapis.com/...');

/* ✅ CORRECT Tailwind v4 import */
@import "tailwindcss";

/* ✅ CORRECT Tailwind v4 theme (not in tailwind.config.ts) */
@theme {
  --font-display: 'Your Font', serif;
  --font-body: 'Your Body Font', sans-serif;
  --color-primary: #yourcolor;
  --color-accent: #yourcolor;
  /* ... all tokens */
}

/* ✅ CSS custom properties for runtime theming */
:root { --color-bg: #FAF7F2; /* ... */ }
[data-theme="dark"] { --color-bg: #0E0C0A; /* ... */ }

/* ✅ ALL layout-critical styles as plain CSS (not Tailwind utilities) */
.site-container { /* ... */ }
.section-sm { /* ... */ }
.grid-2col { /* ... */ }
.heading-hero { /* ... */ }
```

### tailwind.config.ts for Tailwind v4 (minimal — just content paths)
```ts
import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  // NO theme.extend in v4 — all tokens go in @theme in globals.css
}
export default config
```

---

## 📁 FOLDER STRUCTURE

```
my-project/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css          # @import "tailwindcss" + @theme + ALL CSS classes
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/            # All homepage sections
│   └── ui/
│       ├── AnimatedSection.tsx
│       ├── Counter.tsx
│       ├── ThemeToggle.tsx
│       ├── MagneticButton.tsx
│       ├── ScrollProgress.tsx
│       └── Breadcrumb.tsx
├── content/blog/            # MDX posts
├── constants/index.ts       # Single source of truth — ALL data
├── lib/
│   ├── mdx.ts
│   ├── structured-data.ts
│   └── utils.ts
├── types/index.ts
├── public/
│   ├── og/                  # 1200x630 OG images
│   └── icons/               # favicon set + site.webmanifest
├── postcss.config.mjs       # ONE FILE ONLY — @tailwindcss/postcss
├── next.config.ts
├── tailwind.config.ts       # Content paths only in v4
└── vercel.json
```

---

## 🎨 DESIGN RULES

### Typography — Always 2 Fonts
| Vibe | Display | Body |
|------|---------|------|
| Dark luxury / Italian | Playfair Display | DM Sans |
| Bold startup | Bebas Neue | Manrope |
| Warm artisan | Fraunces | DM Sans |
| Editorial | Cormorant Garamond | DM Sans |

Rules:
- Use `.heading-hero/xl/lg/md/sm` classes (defined in globals.css) — NEVER inline font sizes
- `font-family: var(--font-display)` on all headings via globals.css h1/h2/h3 rule
- Body: 16px minimum, line-height 1.625

### Color System
Always CSS variables. Define in `:root` AND `[data-theme="dark"]`.
- Primary: brand color (buttons, links, accents)
- Accent: secondary highlight (gold, warm tones)
- All backgrounds, text, borders: CSS variables only — never hardcoded hex in components

### Layout Rules
- Container: **always `.site-container`** from globals.css
- Section padding: **always `.section-sm/md/lg/xl`** from globals.css
- Grids: **always `.grid-2col/.grid-3col`** etc from globals.css
- NEVER use `md:py-*` `lg:py-*` `md:grid-cols-*` for layout — Tailwind v4 may miss them

---

## ✨ ANIMATION (Framer Motion 12+)

```tsx
// AnimatedSection — scroll reveal
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedSection({ children, delay = 0, className = '', direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const variants = {
    up:   { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  }
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
      variants={variants[direction]} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  )
}

// ⚠️ CRITICAL: NEVER use ease: [...] or ease: "string" — Framer Motion 12+ TypeScript error
// ✅ ONLY use: transition={{ duration: 0.6, delay: 0.1 }}
// ❌ NEVER:   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
```

### Stagger grid animation
```tsx
// ✅ No ease property in variants
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
```

---

## 🌙 DARK / LIGHT MODE

```tsx
// In layout.tsx <head> — prevents flash:
const themeScript = `(function(){const t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);})()`
<script dangerouslySetInnerHTML={{ __html: themeScript }} />
```

Rules:
- Default light unless brief says dark
- All CSS variables MUST have both `:root` (light) AND `[data-theme="dark"]` values
- Use `[data-theme="dark"]` selectors in CSS — NOT Tailwind `dark:` prefix
- ThemeToggle reads/writes localStorage `'theme'` key

---

## 🔍 SEO SYSTEM

### Root Layout Metadata
```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://yoursite.com'),  // ← REQUIRED for WhatsApp og:image
  title: { default: 'Brand — Tagline', template: '%s | Brand' },
  description: '150-160 chars, keyword-rich',
  openGraph: {
    type: 'website', locale: 'en_US',
    images: [{ url: '/og/og-default.jpg', width: 1200, height: 630, type: 'image/jpeg' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og/og-default.jpg'] },
}
```

### JSON-LD — Every Page
Add `<script type="application/ld+json">` with appropriate schema:
- Homepage: `Organization` + `LocalBusiness`
- Blog posts: `Article`
- Services: `Service`
- Restaurant: `Restaurant` + `AggregateRating` + `Menu`

---

## 📝 BLOG SYSTEM (MDX)

```mdx
---
title: "Post Title"
slug: "post-slug"
excerpt: "150-160 char SEO description"
date: "2024-01-15"
author: "Author Name"
category: "Category"
tags: ["tag1", "tag2"]
ogImage: "https://absolute-url/og-image.jpg"  # Can be Squarespace CDN or other
featured: true
readTime: "5 min read"
---
```

Note: `ogImage` can point to external CDN URLs (Squarespace, Cloudinary, etc.)
as long as the domain is in `next.config.ts` `remotePatterns`.

---

## 🖼️ IMAGES

Rules:
- ALWAYS `next/image`, never `<img>`
- `priority` prop on hero + above-fold images
- All external image hostnames in `next.config.ts` remotePatterns
- Meaningful alt text always
- For fill images, parent must have `position: relative` and explicit dimensions

```tsx
// next.config.ts — add every external hostname
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
    { protocol: 'https', hostname: 'images.unsplash.com' },
    // add others as needed
  ],
}
```

---

## 🖼️ FAVICON SYSTEM

Required files in `public/icons/`:
```
favicon.ico
favicon-16x16.png
favicon-32x32.png
apple-touch-icon.png        # 180×180
android-chrome-192x192.png
android-chrome-512x512.png
site.webmanifest
```

Generate at: **realfavicongenerator.net**

```tsx
// In layout.tsx head:
<link rel="icon" href="/icons/favicon.ico" sizes="any" />
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
<link rel="manifest" href="/icons/site.webmanifest" />
<meta name="theme-color" content="#8B4513" />
```

---

## 🧩 EVERY WEBSITE CHECKLIST

### Setup
- [ ] Check Tailwind version before writing any CSS (`cat package.json | grep tailwindcss`)
- [ ] Single postcss config file only (`.mjs` for v4)
- [ ] `@import "tailwindcss"` at top of globals.css (v4) OR `@tailwind` directives (v3)
- [ ] `@theme {}` block in globals.css for v4 tokens
- [ ] All layout CSS (section, grid, heading, container) in globals.css as plain classes
- [ ] `:root` AND `[data-theme="dark"]` CSS variables both defined
- [ ] theme script in layout.tsx head (no flash on load)

### Components
- [ ] Navbar: sticky, transparent→blur on scroll, white text when over hero, mobile hamburger
- [ ] Hero: full-viewport, staggered headline, dual CTAs, parallax bg, scroll indicator
- [ ] Marquee strip: infinite CSS animation
- [ ] Stats section: animated Counter components
- [ ] Testimonials: slider with dot navigation
- [ ] Press logos: grid with grayscale → color on hover
- [ ] Locations: both CHS + Mt. Pleasant, hours, phone, map link
- [ ] Footer: 4-col grid, all links, social, copyright
- [ ] Custom 404, error boundary, loading state
- [ ] ScrollProgress bar

### SEO
- [ ] metadataBase in root layout (required for WhatsApp)
- [ ] Unique title + description on every page
- [ ] JSON-LD structured data on every page
- [ ] OG images 1200×630 for every page
- [ ] twitter:card = summary_large_image
- [ ] sitemap.ts + robots.ts
- [ ] Breadcrumbs on inner pages

### Performance
- [ ] `priority` on hero image
- [ ] All fonts via Google Fonts @import in globals.css
- [ ] `next/image` everywhere
- [ ] `"use client"` only on interactive components

---

## ❌ NEVER DO THESE

### Tailwind v4 Specific
- **NEVER** use `@tailwind base/components/utilities` with Tailwind v4
- **NEVER** use `tailwindcss: {}` in postcss for v4 (use `@tailwindcss/postcss`)
- **NEVER** have both `postcss.config.js` AND `postcss.config.mjs`
- **NEVER** use `md:grid-cols-*` or `lg:py-*` for main layout — put in globals.css
- **NEVER** use `max-w-container mx-auto px-4 sm:px-6 lg:px-8` — use `.site-container`
- **NEVER** put theme.extend colors in tailwind.config.ts for v4 — use `@theme` in CSS

### Framer Motion 12+
- **NEVER** use `ease: [0.22, 1, 0.36, 1]` — TypeScript error in FM12+
- **NEVER** use `ease: "easeOut"` — same error
- **ONLY** use `duration` and `delay` in transitions

### General
- **NEVER** use `<img>` — always `next/image`
- **NEVER** hardcode colors — CSS variables always
- **NEVER** skip metadata on any page
- **NEVER** use Pages Router — App Router only
- **NEVER** use params without await in Next.js 15: `const { slug } = await params`
- **NEVER** use `next-mdx-remote` v5 — CVE, use v6+
- **NEVER** use `next.config.mjs` — use `next.config.ts`

### Navbar
- **NEVER** use CSS variable text color on transparent navbar over dark hero image
  — always force white + text-shadow explicitly
- **NEVER** forget the dark gradient overlay under transparent navbar

### Layout
- **NEVER** use inline `style={{ fontSize: '...' }}` for headings — use .heading-* classes
- **NEVER** use `py-24 md:py-32` on sections — use .section-* classes
- **NEVER** use `grid-cols-1 md:grid-cols-3` on sections — use .grid-* classes
