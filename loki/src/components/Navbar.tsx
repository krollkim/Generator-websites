'use client'

import { useState } from 'react'
import PixelIcon from '@/components/icons/PixelIcon'

/**
 * Fixed RTL navbar, Loki edition: near-black glass bar, gold brand mark,
 * electric-green CTA. Brand (right in RTL), centered links, CTA (left),
 * mobile hamburger.
 */
export interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  brand: string
  links: NavLink[]
  cta: NavLink
}

export default function Navbar({ brand, links, cta }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-accent/15 bg-bg/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-8 flex items-center justify-between">
        {/* Brand — sits right in RTL */}
        <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight text-gold select-none">
          <PixelIcon name="phoneCall" size={20} className="text-accent" />
          {brand}
        </a>

        {/* Desktop links (center) */}
        <nav className="hidden md:flex gap-8 flex-1 justify-center">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink/85 hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA (left in RTL) */}
        <a
          href={cta.href}
          className="hidden md:inline-flex rounded-pill bg-accent px-5 py-2 font-display font-bold text-bg transition-transform hover:-rotate-2"
        >
          {cta.label}
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-ink text-2xl leading-none"
          aria-label="תפריט"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-accent/10 bg-surface px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={cta.href}
            className="rounded-pill bg-accent px-5 py-2 text-center font-display font-bold text-bg"
            onClick={() => setOpen(false)}
          >
            {cta.label}
          </a>
        </nav>
      )}
    </header>
  )
}
