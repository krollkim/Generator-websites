import ScrollReveal from '@/components/ui/ScrollReveal'
import StaggerReveal from '@/components/ui/StaggerReveal'
import PeekingPop from '@/components/ui/PeekingPop'
import PixelIcon from '@/components/icons/PixelIcon'

/**
 * "בוגרים (וקורבנות) ממליצים" — funny testimonial cards with gold pixel stars.
 */
interface Testimonial {
  quote: string
  name: string
  role: string
}

interface TestimonialsProps {
  title: string
  subtitle: string
  items: Testimonial[]
}

export default function Testimonials({ title, subtitle, items }: TestimonialsProps) {
  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-24">
      {/* Loki peeking in from the right edge — one deliberate grid violation */}
      <PeekingPop
        src="/images/loki-pop-cape.png"
        width={443}
        height={500}
        className="absolute top-10 -right-10 w-20 -rotate-24 md:top-16 md:-right-14 md:w-36"
      />

      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl font-black text-ink md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-muted">{subtitle}</p>
        </ScrollReveal>

        <StaggerReveal columns={3} stagger={0.15} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={item.name}
              className={`flex flex-col rounded-card border border-primary/60 bg-surface p-7 transition-all hover:-translate-y-1.5 hover:border-gold/50 ${
                i === 1 ? 'md:-rotate-1' : 'md:rotate-1'
              }`}
            >
              <div className="flex gap-1 text-gold" aria-label="חמישה כוכבים">
                {Array.from({ length: 5 }, (_, star) => (
                  <PixelIcon key={star} name="star" size={18} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink/90">
                ״{item.quote}״
              </blockquote>
              <figcaption className="mt-5 border-t border-primary/40 pt-4">
                <p className="font-display font-bold text-accent">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
