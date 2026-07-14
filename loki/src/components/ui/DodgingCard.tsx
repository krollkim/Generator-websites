'use client'

import { useRef, useState, type ReactNode } from 'react'

/**
 * The site's one signed mischief moment: a card that dodges the cursor twice,
 * then gives up and confesses. Used on the CHAOS-401 course card only —
 * one deliberate violation, not an effect pile.
 *
 * Keyboard/touch users and reduced-motion users never see the dodge — the card
 * simply behaves (the trick is pointer-hover only, and content is always
 * reachable since the card gives up after MAX_DODGES).
 */
const MAX_DODGES = 2
const DODGE_OFFSETS = [
  { x: 36, y: 14 },
  { x: -42, y: -10 },
]

interface DodgingCardProps {
  children: ReactNode
  className?: string
  /** Line revealed once the card surrenders. */
  surrenderText: string
}

export default function DodgingCard({ children, className = '', surrenderText }: DodgingCardProps) {
  const [dodges, setDodges] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const surrendered = dodges >= MAX_DODGES

  const handlePointerEnter = (event: React.PointerEvent) => {
    if (event.pointerType !== 'mouse' || surrendered) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDodges(MAX_DODGES)
      return
    }
    setDodges((count) => count + 1)
  }

  const offset = surrendered ? { x: 0, y: 0 } : DODGE_OFFSETS[dodges] ?? { x: 0, y: 0 }

  return (
    <div
      ref={ref}
      onPointerEnter={handlePointerEnter}
      className={className}
      style={{
        transform: dodges > 0 ? `translate(${offset.x}px, ${offset.y}px)` : undefined,
        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {children}
      <p
        className={`mt-3 font-mono text-sm text-accent transition-opacity duration-500 ${
          surrendered ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden={!surrendered}
      >
        {surrendered ? surrenderText : ' '}
      </p>
    </div>
  )
}
