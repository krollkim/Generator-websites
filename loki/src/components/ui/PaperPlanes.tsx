'use client'

import { useEffect, useId, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(MotionPathPlugin)
}

/**
 * Classroom paper planes gliding across the curriculum section, scrubbed by
 * scroll (GSAP ScrollTrigger + MotionPathPlugin). Two enter from the right
 * (one high, one low), one from the left passing between them — each on a
 * wavy path, leaving a dotted trail that appears behind it and dissolves.
 *
 * The trail trick: the dotted path is masked by a stroked path whose
 * dash-window (dasharray `${window} ${len}`, dashoffset animated from
 * `window` to `window - len`) slides along with the plane — so only a short
 * stretch of trail right behind the plane is visible before "fading in air".
 *
 * The SVG stretches to its zone (preserveAspectRatio="none"), which on a
 * tall mobile column would squash the planes — so each plane shape carries a
 * counter-scale (recomputed on resize) that keeps it a fixed *pixel* size on
 * every screen, and the strokes use non-scaling-stroke.
 *
 * Overlay is pointer-events-none and flies ABOVE the cards — small planes,
 * dotted trails and low opacity keep the text readable underneath. Hidden
 * entirely for prefers-reduced-motion users.
 */
interface PlaneSpec {
  /** Wavy flight path in the 1000x600 viewBox space. */
  d: string
  color: string
  /** Trail window length, in path-space units. */
  window: number
  /** Plane size in screen pixels (kept uniform via counter-scale). */
  sizePx: number
}

const VIEW_W = 1000
const VIEW_H = 600

// Path ends reach ±160 beyond the viewBox so planes enter and exit fully
// off-frame — no half-plane parked at the edges when the flight is done.
const PLANES: PlaneSpec[] = [
  // From the right, high — glides across the section's opening
  { d: 'M 1160 55 C 820 10, 640 115, 420 50 C 260 10, 120 95, -160 55', color: 'var(--color-accent)', window: 240, sizePx: 42 },
  // From the right, low — the stretch below/across the last cards
  { d: 'M 1160 540 C 800 585, 580 470, 360 555 C 220 590, 80 495, -160 545', color: 'var(--color-gold)', window: 220, sizePx: 38 },
  // From the left, weaving between them
  { d: 'M -160 305 C 180 250, 400 370, 620 290 C 780 240, 900 350, 1160 300', color: 'var(--color-accent)', window: 220, sizePx: 36 },
]

function planeShape(size: number): string {
  const s = size
  return `M${-s / 2} ${-s / 2} L${s / 2} ${-s / 2 + s * 0.32} L${-s / 2 + s * 0.3} 0 L${-s / 2 + s * 0.36} ${s * 0.32} Z`
}

export default function PaperPlanes({ className = '' }: { className?: string }) {
  const rootRef = useRef<SVGSVGElement>(null)
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')

  useEffect(() => {
    const svg = rootRef.current
    if (!svg) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      svg.style.display = 'none'
      return
    }

    // Keep plane shapes a fixed pixel size: cancel the viewBox stretch.
    const applyCounterScale = () => {
      const rect = svg.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const sx = rect.width / VIEW_W
      const sy = rect.height / VIEW_H
      PLANES.forEach((_, i) => {
        const shape = svg.querySelector<SVGGElement>(`#pp-shape-${uid}-${i}`)
        if (shape) {
          gsap.set(shape, { scaleX: 1 / sx, scaleY: 1 / sy, transformOrigin: '0 0' })
        }
      })
    }
    applyCounterScale()
    window.addEventListener('resize', applyCounterScale)

    const ctx = gsap.context(() => {
      // Trigger on the stable parent section, not the SVG itself — the mobile
      // instance is inside a sticky band, whose own position shifts while
      // scrolling and would confuse ScrollTrigger's measurements.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svg.closest('section') ?? svg,
          start: 'top 80%',
          end: 'bottom 15%',
          scrub: 1,
        },
      })

      PLANES.forEach((plane, i) => {
        const pathEl = svg.querySelector<SVGPathElement>(`#pp-path-${uid}-${i}`)
        const maskEl = svg.querySelector<SVGPathElement>(`#pp-mask-${uid}-${i}`)
        const planeEl = svg.querySelector<SVGGElement>(`#pp-plane-${uid}-${i}`)
        if (!pathEl || !maskEl || !planeEl) return

        const len = maskEl.getTotalLength()

        gsap.set(maskEl, {
          strokeDasharray: `${plane.window} ${len}`,
          strokeDashoffset: plane.window,
        })

        const stagger = i * 0.08
        tl.to(
          planeEl,
          {
            motionPath: {
              path: pathEl,
              align: pathEl,
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
            },
            ease: 'none',
            duration: 1,
          },
          stagger
        )
        tl.to(
          maskEl,
          { strokeDashoffset: plane.window - len, ease: 'none', duration: 1 },
          stagger
        )
      })
    }, svg)

    return () => {
      window.removeEventListener('resize', applyCounterScale)
      ctx.revert()
    }
  }, [uid])

  return (
    <svg
      ref={rootRef}
      className={`pointer-events-none ${className}`}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {PLANES.map((plane, i) => (
          <mask key={i} id={`pp-maskdef-${uid}-${i}`} maskUnits="userSpaceOnUse">
            <path
              id={`pp-mask-${uid}-${i}`}
              d={plane.d}
              fill="none"
              stroke="#fff"
              strokeWidth="14"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </mask>
        ))}
      </defs>

      {PLANES.map((plane, i) => (
        <g key={i}>
          {/* Dotted trail, revealed only inside the sliding mask window */}
          <path
            id={`pp-path-${uid}-${i}`}
            d={plane.d}
            fill="none"
            stroke={plane.color}
            strokeWidth="2.5"
            strokeDasharray="1 14"
            strokeLinecap="round"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
            mask={`url(#pp-maskdef-${uid}-${i})`}
          />
          {/* The paper plane itself — inner group carries the counter-scale */}
          <g id={`pp-plane-${uid}-${i}`} opacity="0.85">
            <g id={`pp-shape-${uid}-${i}`}>
              <path d={planeShape(plane.sizePx)} fill={plane.color} />
            </g>
          </g>
        </g>
      ))}
    </svg>
  )
}
