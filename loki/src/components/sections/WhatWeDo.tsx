import ScrollReveal from '@/components/ui/ScrollReveal'
import StaggerReveal from '@/components/ui/StaggerReveal'
import PixelIcon, { type PixelIconName } from '@/components/icons/PixelIcon'

/**
 * "מה לומדים אצלנו" — the four pillars of quality phone deception.
 * Heading revealed separately from the staggered grid (double-opacity rule).
 */
interface WhatWeDoItem {
  icon: string
  title: string
  body: string
}

interface WhatWeDoProps {
  title: string
  subtitle: string
  items: WhatWeDoItem[]
}

// brand.json icon keys → PixelIcon names
const ICON_MAP: Record<string, PixelIconName> = {
  phone: 'phoneCall',
  script: 'script',
  mask: 'sunglasses',
  zap: 'zap',
}

export default function WhatWeDo({ title, subtitle, items }: WhatWeDoProps) {
  return (
    <section id="what" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl font-black text-ink md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-muted">{subtitle}</p>
        </ScrollReveal>

        <StaggerReveal
          columns={4}
          stagger={0.12}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-card border border-primary/60 bg-surface p-6 transition-all hover:-translate-y-1.5 hover:border-accent/60 hover:animate-wiggle ${
                i % 2 === 0 ? 'lg:rotate-1' : 'lg:-rotate-1'
              }`}
            >
              <span className="inline-flex rounded-card border border-accent/30 bg-bg p-3 text-accent">
                <PixelIcon name={ICON_MAP[item.icon] ?? 'zap'} size={28} />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
