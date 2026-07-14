import ScrollReveal from '@/components/ui/ScrollReveal'
import StaggerReveal from '@/components/ui/StaggerReveal'
import PixelIcon, { type PixelIconName } from '@/components/icons/PixelIcon'

/**
 * "What You'll Learn" — the four pillars of quality phone deception.
 * The first pillar is the PRIMARY card (gold frame + gold keyline) — one
 * focal point instead of four identical tiles; the rest sit borderless on
 * the background and gain a gold border on hover. Heading carries the gold
 * achievement underline. Rhythm: tighter toward the divider below.
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
    <section
      id="what"
      className="px-6 pt-28 pb-20 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(20,83,45,0.18),transparent_70%)]"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl font-black text-ink md:text-5xl">{title}</h2>
          <span
            className="mx-auto mt-4 block h-1 w-16 rounded-pill bg-linear-to-l from-gold/15 via-gold to-gold/15"
            aria-hidden="true"
          />
          <p className="mt-4 text-lg text-muted">{subtitle}</p>
        </ScrollReveal>

        <StaggerReveal
          columns={4}
          stagger={0.12}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, i) =>
            i === 0 ? (
              /* Primary pillar — the focal card */
              <div
                key={item.title}
                className="rounded-card border border-gold/40 bg-surface p-6 transition-all hover:-translate-y-1.5 hover:border-gold hover:animate-wiggle"
              >
                <span className="mb-4 block h-1 w-10 rounded-pill bg-gold/80" aria-hidden="true" />
                <span className="inline-flex rounded-card border border-accent/30 bg-bg p-3 text-accent">
                  <PixelIcon name={ICON_MAP[item.icon] ?? 'zap'} size={28} />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </div>
            ) : (
              /* Supporting pillars — borderless, content on the background */
              <div
                key={item.title}
                className={`rounded-card border border-transparent p-6 transition-all hover:-translate-y-1.5 hover:border-gold/40 hover:bg-surface/60 hover:animate-wiggle ${
                  i % 2 === 0 ? 'lg:rotate-1' : 'lg:-rotate-1'
                }`}
              >
                <span className="inline-flex rounded-card border border-accent/30 bg-bg p-3 text-accent">
                  <PixelIcon name={ICON_MAP[item.icon] ?? 'zap'} size={28} />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </div>
            )
          )}
        </StaggerReveal>
      </div>
    </section>
  )
}
