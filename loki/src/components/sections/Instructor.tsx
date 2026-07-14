import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import PixelIcon from '@/components/icons/PixelIcon'

/**
 * "Your Instructor" — Loki himself. President-Loki pop-head on one side, a
 * deadpan third-person bio and faculty "facts" on the other.
 */
interface InstructorFact {
  label: string
  value: string
}

interface InstructorProps {
  title: string
  name: string
  role: string
  bio: string[]
  facts: InstructorFact[]
  image: string
}

export default function Instructor({ title, name, role, bio, facts, image }: InstructorProps) {
  return (
    <section id="instructor" className="border-y border-primary/40 bg-surface/60 px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Pop figure — bobs gently, tilts on hover */}
        <ScrollReveal className="order-first flex justify-center">
          <div className="relative isolate">
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/10 blur-3xl" />
            <Image
              src={image}
              alt={name}
              width={380}
              height={380}
              className="animate-bob drop-shadow-[0_20px_40px_rgba(34,255,136,0.15)] transition-transform hover:rotate-3"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-mono text-sm tracking-widest text-gold">{title}</p>
          <h2 className="mt-2 font-display text-3xl font-black text-ink md:text-5xl">{name}</h2>
          <p className="mt-2 text-lg font-semibold text-accent">{role}</p>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
            {bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-3">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-start gap-3">
                <span className="mt-0.5 text-gold">
                  <PixelIcon name="clock" size={20} />
                </span>
                <p className="text-muted">
                  <span className="font-bold text-ink">{fact.label}: </span>
                  {fact.value}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
