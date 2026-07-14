import Image from 'next/image'
import type { NavLink } from '@/components/Navbar'
import PixelIcon from '@/components/icons/PixelIcon'

/**
 * Hero — President Loki himself as a full-bleed background (grinning, arms
 * open), copy on the right (RTL start), a side gradient keeping it readable
 * and a bottom gradient melting into --color-bg.
 */
interface HeroProps {
  badge: string
  headline: string
  subhead: string
  ctaPrimary: NavLink
  ctaSecondary?: NavLink
  backgroundImage: string
}

export default function Hero({
  badge,
  headline,
  subhead,
  ctaPrimary,
  ctaSecondary,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Loki, full bleed. Positioned so he stays visible left of the copy. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[47%_center] md:object-[20%_center]"
        />
        {/* Side gradient: dark under the copy (right in RTL), open on Loki's side */}
        <div className="absolute inset-0 bg-linear-to-l from-bg/90 via-bg/50 to-bg/15" />
        {/* Bottom melt into the page background */}
        <div className="absolute inset-0 bg-linear-to-b from-bg/30 via-transparent to-bg" />
        <div className="absolute inset-0 scanlines" />
      </div>

      {/* Caped Funko Loki popping sideways out of the left screen edge —
          rotated 90°, feet off-screen, only the head peeking in, level with
          the headline. */}
      <Image
        src="/images/loki-pop-cape.png"
        alt=""
        width={443}
        height={500}
        priority
        className="pointer-events-none absolute -left-26 bottom-2 w-48 rotate-90 drop-shadow-[0_20px_40px_rgba(34,255,136,0.25)] md:-left-58 md:top-1/2 md:bottom-auto md:w-120 md:-translate-y-1/2"
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="flex max-w-xl flex-col items-center text-center md:items-start md:text-right">
          <span className="inline-flex items-center gap-2 rounded-pill border border-gold/40 bg-bg/60 px-4 py-1.5 text-sm font-medium text-gold backdrop-blur-sm">
            <PixelIcon name="sunglasses" size={18} />
            {badge}
          </span>

          <h1 className="mt-6 font-display text-4xl font-black leading-tight text-ink md:text-6xl">
            {headline}
          </h1>

          <p className="mt-5 max-w-lg text-lg text-ink/85 md:text-xl">{subhead}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href={ctaPrimary.href}
              className="glow-accent inline-flex items-center gap-2 rounded-pill bg-accent px-7 py-3.5 font-display font-bold text-bg transition-transform hover:-rotate-2 hover:scale-105"
            >
              <PixelIcon name="phoneCall" size={20} />
              {ctaPrimary.label}
            </a>
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="rounded-pill border border-accent/40 bg-bg/40 px-7 py-3.5 font-semibold text-accent backdrop-blur-sm transition-colors hover:bg-accent/10"
              >
                {ctaSecondary.label}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted animate-bob"
        aria-hidden="true"
      >
        <PixelIcon name="arrowLeft" size={24} className="-rotate-90" />
      </div>
    </section>
  )
}
