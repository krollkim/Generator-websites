import type { NavLink } from './Navbar'

/**
 * RTL footer, Loki edition. The cheeky rights line lives in the brand tagline
 * ("we stole those too"), so the year line stays bare.
 */
interface FooterProps {
  brand: string
  tagline?: string
  /** brand-site mode: links to the legal routes. Omit for landing. */
  legalLinks?: NavLink[]
}

export default function Footer({ brand, tagline, legalLinks }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-accent/15 bg-surface px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1.5">
          <p className="gold-text font-display font-bold">{brand}</p>
          {tagline && <p className="text-sm text-muted">{tagline}</p>}
          <p className="text-xs text-muted">© {year} · Built with care. Deployed with malice.</p>
        </div>

        {legalLinks && legalLinks.length > 0 && (
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-muted hover:text-gold transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  )
}
