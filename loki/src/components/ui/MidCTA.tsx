import type { NavLink } from '@/components/Navbar'
import ScrollReveal from '@/components/ui/ScrollReveal'
import PixelIcon from '@/components/icons/PixelIcon'

/**
 * Strategic mid-page CTA — one cheeky line + the signature glowing green
 * button. Used exactly twice (after the curriculum, after the testimonials)
 * so the page doesn't turn into a CTA carpet.
 */
interface MidCTAProps {
  line: string
  cta: NavLink
}

export default function MidCTA({ line, cta }: MidCTAProps) {
  return (
    <ScrollReveal className="px-6 pb-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <p className="font-display text-2xl font-bold text-ink md:text-3xl">{line}</p>
        <a
          href={cta.href}
          className="glow-accent inline-flex items-center gap-2 rounded-pill bg-accent px-7 py-3.5 font-display font-bold text-bg transition-transform hover:-rotate-2 hover:scale-105"
        >
          <PixelIcon name="phoneCall" size={20} />
          {cta.label}
        </a>
      </div>
    </ScrollReveal>
  )
}
