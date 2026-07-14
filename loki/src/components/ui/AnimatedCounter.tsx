'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

interface AnimatedCounterProps {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

/**
 * Number count-up on first scroll-into-view.
 *
 * This is the ONE place we deliberately use IntersectionObserver instead of
 * ScrollTrigger: it's a fire-once, self-contained reveal (not a scroll-glued
 * animation), threshold 0.5 reads cleanly, and it never needs to stay synced to
 * scroll position. For scroll-driven section/card reveals use ScrollReveal /
 * StaggerReveal (ScrollTrigger) instead — IntersectionObserver felt "stuck"
 * there.
 */
export default function AnimatedCounter({
  to,
  suffix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = counterRef.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const obj = { value: 0 }
          gsap.to(obj, {
            value: to,
            duration,
            snap: { value: 1 },
            onUpdate() {
              if (element) {
                element.textContent = Math.floor(obj.value).toLocaleString('he-IL') + suffix
              }
            },
          })
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [to, suffix, duration, hasAnimated])

  return (
    <span ref={counterRef} className={className}>
      0{suffix}
    </span>
  )
}
