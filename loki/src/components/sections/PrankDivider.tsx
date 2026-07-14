import Image from 'next/image'

/**
 * "מבוא לתעלולים 101" — a narrow campus-noticeboard divider with a looping
 * marquee of prank one-liners. The marquee clips inside its own wrapper, so
 * the pop-head can burst out ABOVE the bar instead of being cropped by it.
 */
interface PrankDividerProps {
  courseCode: string
  title: string
  marquee: string[]
  peekImage: string
}

export default function PrankDivider({ courseCode, title, marquee, peekImage }: PrankDividerProps) {
  // Track is duplicated so translateX(50%) loops seamlessly (RTL-aware).
  const doubled = [...marquee, ...marquee]

  return (
    <section
      aria-label={`${courseCode} — ${title}`}
      className="relative border-y-2 border-accent/30 bg-primary/25"
    >
      <div className="overflow-hidden py-5 scanlines">
        <div className="marquee-track items-center gap-10 pe-10">
          {doubled.map((line, i) => (
            <span key={`${line}-${i}`} className="flex shrink-0 items-center gap-10 whitespace-nowrap">
              <span className="font-display text-lg font-bold text-ink/90">{line}</span>
              <span className="text-accent" aria-hidden="true">
                ✶
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Pop-head standing on the bar's bottom line. The PNG has ~9.2%
          transparent margin below the feet — the negative bottom offsets
          compensate so the visible feet sit on the line. */}
      <Image
        src={peekImage}
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute -bottom-3 left-1 z-10 w-36 md:-bottom-5 md:left-8 md:w-56"
      />
    </section>
  )
}
