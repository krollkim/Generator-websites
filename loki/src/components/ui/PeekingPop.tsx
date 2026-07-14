'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

/**
 * A pop-head peeking in from the page edge — part of the "break the boxiness"
 * pass. Gentle GSAP float (yoyo), killed for reduced-motion users. Place it
 * inside a `relative overflow-hidden` section so the off-screen half clips
 * cleanly without horizontal scroll.
 */
interface PeekingPopProps {
  src: string
  width: number
  height: number
  className?: string
}

export default function PeekingPop({ src, width, height, className = '' }: PeekingPopProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tween = gsap.to(el, {
      y: -12,
      rotation: '+=4',
      duration: 2.4,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })

    return () => {
      tween.kill()
    }
  }, [])

  return (
    <div ref={ref} className={`pointer-events-none ${className}`} aria-hidden="true">
      <Image src={src} alt="" width={width} height={height} className="h-auto w-full" />
    </div>
  )
}
