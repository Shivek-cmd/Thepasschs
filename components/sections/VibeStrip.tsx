const items = [
  'Artisan Deli',
  '🇮🇹',
  'Dine In',
  '·',
  'Take Out',
  '·',
  'Delivery',
  '·',
  '207A Saint Philip St',
  '·',
  'Mount Pleasant',
  '·',
  'Ciao, Paisan!',
  '·',
  'Catering Available',
  '·',
  'Loyalty Program',
  '·',
  'Gift Cards',
  '🤌',
]

export default function VibeStrip() {
  const doubled = [...items, ...items]

  return (
    <div
      className="w-full overflow-hidden py-3.5 relative"
      style={{
        background: 'var(--color-primary)',
        borderBottom: '1px solid rgba(255,255,255,0.10)',
      }}
      aria-label="The Pass — Artisan Deli & Market, Charleston & Mount Pleasant"
    >
      <div className="flex">
        <div className="marquee-track flex items-center whitespace-nowrap" style={{ gap: "1.5rem" }}>
          {doubled.map((item, i) => (
            <span
              key={i}
              className="text-xs uppercase tracking-[0.18em] font-medium flex-shrink-0"
              style={{ color: 'rgba(255,255,255,0.90)' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
