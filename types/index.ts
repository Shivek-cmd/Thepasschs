export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  updatedAt?: string
  author: string
  authorImage?: string
  category: string
  tags: string[]
  ogImage?: string
  featured?: boolean
  readTime: string
}

export interface MenuItem {
  name: string
  description: string
  price: number
  category: 'sandwich' | 'salad' | 'snack' | 'beverage'
  tags?: string[]
  featured?: boolean
}

export interface Location {
  name: string
  address: string
  city: string
  fullAddress: string
  corner: string
  phone: string
  hours: { days: string; time: string }[]
  lat: number
  lng: number
  mapUrl: string
  neighborhood: string
}

export interface Testimonial {
  text: string
  author: string
  location: string
  rating?: number
}

export interface PressItem {
  name: string
  src: string
  href?: string
}

export interface CateringTier {
  name: string
  serves: string
  price: number
  items: string[]
  note?: string
}
