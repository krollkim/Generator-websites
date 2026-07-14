import Image from 'next/image'
import type { NavLink } from '@/components/Navbar'
import ScrollReveal from '@/components/ui/ScrollReveal'
import PixelIcon from '@/components/icons/PixelIcon'

/**
 * Final CTA — "הטלפון מצלצל. תענו." A ringing pixel phone, a glowing static
 * enroll button with a "call connecting" micro-line, and the caped pop-head.
 */
interface EnrollCTAProps {
  title: string
  subtitle: string
  cta: NavLink
  microcopy: string
  image: string
}

export default function EnrollCTA({ title, subtitle, cta, microcopy, image }: EnrollCTAProps) {
  return (
    <section
      id="enroll"
      className="relative overflow-hidden bg-linear-to-b from-bg via-primary/20 to-bg px-6 py-28"
    >
      <div className="absolute inset-0 scanlines" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <ScrollReveal className="flex flex-col items-center">
          <span className="inline-flex rounded-card border border-accent/40 bg-surface p-5 text-accent animate-ring">
            <PixelIcon name="phone" size={48} />
          </span>

          <h2 className="mt-8 font-display text-4xl font-black text-ink md:text-6xl">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-ink/80">{subtitle}</p>

          <a
            href={cta.href}
            className="glow-accent mt-10 inline-flex items-center gap-3 rounded-pill bg-accent px-9 py-4 font-display text-lg font-black text-bg transition-transform hover:rotate-2 hover:scale-105"
          >
            <PixelIcon name="phoneCall" size={22} />
            {cta.label}
          </a>

          {/* "Call connecting" micro-animation */}
          <p className="mt-4 flex items-center gap-1.5 font-mono text-sm text-muted" aria-hidden="true">
            <PixelIcon name="volume" size={16} className="text-accent" />
            {microcopy}
            <span className="animate-blink text-accent">●</span>
            <span className="animate-blink text-accent [animation-delay:0.45s]">●</span>
            <span className="animate-blink text-accent [animation-delay:0.9s]">●</span>
          </p>
        </ScrollReveal>

        {/* Caped pop-head, cheering from the corner */}
        <Image
          src={image}
          alt=""
          width={170}
          height={192}
          className="pointer-events-none absolute -left-6 bottom-0 hidden -rotate-6 opacity-90 lg:block"
        />
      </div>
    </section>
  )
}
