import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import StaggerReveal from '@/components/ui/StaggerReveal'
import PixelIcon from '@/components/icons/PixelIcon'

/**
 * "Graduates (and Victims) Approve" — funny testimonial cards, gold pixel stars.
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
    <section id="testimonials" className="relative overflow-hidden px-6 pt-20 pb-24">
      {/* Loki peeking in from the right edge — one deliberate grid violation.
          Static on purpose (no float). */}
      <Image
        src="/images/loki-pop-cape.png"
        alt=""
        width={443}
        height={500}
        className="pointer-events-none absolute top-10 -right-10 w-20 -rotate-24 md:top-16 md:-right-14 md:w-36"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl font-black text-ink md:text-5xl">{title}</h2>
          <span
            className="mx-auto mt-4 block h-1 w-16 rounded-pill bg-linear-to-l from-gold/15 via-gold to-gold/15"
            aria-hidden="true"
          />
          <p className="mt-4 text-lg text-muted">{subtitle}</p>
        </ScrollReveal>

        <StaggerReveal columns={3} stagger={0.15} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            /* Middle card is the PRIMARY one — gold frame + slightly larger;
               side cards sit borderless on the background. */
            <figure
              key={item.name}
              className={`flex flex-col rounded-card p-7 transition-all hover:-translate-y-1.5 ${
                i === 1
                  ? 'border border-gold/40 bg-surface md:-rotate-1 md:scale-[1.04] hover:border-gold'
                  : 'border border-transparent bg-surface/50 md:rotate-1 hover:border-gold/40 hover:bg-surface'
              }`}
            >
              <div className="flex gap-1 text-gold" aria-label="Five stars">
                {Array.from({ length: 5 }, (_, star) => (
                  <PixelIcon key={star} name="star" size={18} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink/90">
                “{item.quote}”
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
