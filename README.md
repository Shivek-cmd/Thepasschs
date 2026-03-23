# The Pass CHS — Website

Production website for **The Pass — Artisan Deli & Market**, Charleston, SC.

Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Deploy to Vercel (3 steps)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Git Repository → select your repo
3. Vercel auto-detects Next.js — click **Deploy**

**One environment variable to add in Vercel dashboard:**
```
NEXT_PUBLIC_SITE_URL=https://thepasschs.com
```
> GTM: Replace `GTM-XXXXXXX` in `.env.local` with your real GTM container ID before deploying.

---

## 🛠 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout — fonts, SEO, theme script
  page.tsx              # Homepage
  menu/                 # Full menu (tabbed: Panino, Salads, Snacks, Drinks)
  catering/             # Catering packages + inquiry form
  the-italian-boy/      # The Italian Boy After Dark page
  blog/                 # Blog listing + [slug] post pages
  sitemap.ts            # Auto-generated sitemap
  robots.ts             # Robots.txt

components/
  layout/               # Navbar, Footer
  sections/             # Hero, VibeStrip, SignatureDishes, Story,
                        # MaseratiMoment, PressMarquee, ItalianBoyTeaser,
                        # Testimonials, Locations
  ui/                   # AnimatedSection, Counter, ThemeToggle,
                        # MagneticButton, ScrollProgress, Breadcrumb

content/blog/           # MDX blog posts (add new .mdx files here)
constants/index.ts      # ALL site data — locations, links, press, stats
lib/
  mdx.ts                # Blog utilities
  structured-data.ts    # JSON-LD schemas (Restaurant, Person, Article)
  utils.ts              # cn() helper, formatDate
types/index.ts          # TypeScript interfaces
```

---

## ✍️ Adding Blog Posts

Create a new file in `content/blog/your-post-slug.mdx`:

```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
excerpt: "150-160 character SEO description."
date: "2025-01-15"
author: "Anthony Marini"
category: "Behind the Counter"
tags: ["story", "charleston"]
ogImage: "/og/your-post-slug.jpg"
featured: false
readTime: "4 min read"
---

Your content here...
```

Add the OG image (1200×630px JPG) to `public/og/`.

---

## 🎨 Design System

**Palette:**
- Light: `#FAF7F2` (parchment) / `#8B4513` (saddle brown primary) / `#C9A84C` (gold accent)
- Dark: `#0E0C0A` (near-black) / `#C9A84C` (gold primary) / `#8B4513` (brown accent)

**Fonts:** Playfair Display (display) + DM Sans (body) via Google Fonts

**All tokens** live in `app/globals.css` as CSS variables. Never hardcode values.

---

## 🖼️ Favicons

Generate a complete favicon set from your logo at [realfavicongenerator.net](https://realfavicongenerator.net) and place files in `public/icons/`:

```
favicon.ico
favicon-16x16.png
favicon-32x32.png
apple-touch-icon.png
android-chrome-192x192.png
android-chrome-512x512.png
```

---

## 📊 Analytics

GTM is wired up in `app/layout.tsx`. Replace `GTM-XXXXXXX` in `.env.local` with your real container ID. All tracking (GA4, Meta Pixel, etc.) is managed through the GTM dashboard — no code changes needed.

---

## 🔍 SEO

- LocalBusiness schema × 2 (Downtown CHS + Mount Pleasant)
- Restaurant + AggregateRating schema
- Person schema (Chef Anthony Marini)
- Article schema on every blog post
- Full OG + Twitter Card metadata on every page
- `metadataBase` set — all relative image paths resolve to absolute URLs for WhatsApp/social previews
- Dynamic sitemap at `/sitemap.xml`

---

## 📞 Contact & Links

| | |
|---|---|
| Email | maelohospitality@gmail.com |
| Instagram | @thepasschs |
| Order Online (CHS) | toasttab.com/thepass-207a-st-philip-street |
| Order Online (Mt.P) | order.toasttab.com/online/the-pass-mount-pleasant |
| Italian Boy Reservations | resy.com (The Italian Boy After Dark) |
