/**
 * Retro 8-bit icons, extracted from the `pixelarticons` package (MIT).
 * All paths are 24x24, fill-based, and inherit `currentColor` — color them
 * with text utilities (text-accent / text-gold / text-muted).
 */
export type PixelIconName =
  | 'phone'
  | 'phoneCall'
  | 'script'
  | 'zap'
  | 'trophy'
  | 'star'
  | 'volume'
  | 'bookOpen'
  | 'arrowLeft'
  | 'clock'
  | 'sunglasses'
  | 'skull'
  | 'smile'

const PATHS: Record<PixelIconName, string[]> = {
  phone: [
    'M4 1h5v2H4zm5 2h2v4H9zM7 7h2v4H7zm-3 5h2v2H4zM2 3h2v9H2zm7 8h2v2H9zm2 2h2v2h-2zm2 2h4v2h-4zm4-2h4v2h-4zm4 2h2v5h-2zM6 14h2v2H6zm2 2h2v2H8zm2 2h2v2h-2zm2 2h9v2h-9z',
  ],
  phoneCall: [
    'M4 1h5v2H4zm5 2h2v4H9zM7 7h2v4H7zm-3 5h2v2H4zM2 3h2v9H2zm7 8h2v2H9zm2 2h2v2h-2zm2 2h4v2h-4zm4-2h4v2h-4zm4 2h2v5h-2zM6 14h2v2H6zm2 2h2v2H8zm2 2h2v2h-2zm2 2h9v2h-9zm1-18h5v2h-5zm7 4h2v5h-2zm-2-2h2v2h-2zm-5 2h3v2h-3zm3 2h2v3h-2z',
  ],
  script: [
    'M16 19h2v2H4v-2h10v-2h2v2ZM6 15h8v2H4v2H2v-4h2V5h2v10ZM20 5h2v6h-2v8h-2V5H6V3h14v2Z',
  ],
  zap: [
    'M4 13h8v6h2v2h-2v2h-2v-8H2v-4h2v2Zm12 6h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-6-6h8v4h-2v-2h-8V5h-2V3h2V1h2v8Zm-8 2H4V9h2v2Zm2-2H6V7h2v2Zm2-2H8V5h2v2Z',
  ],
  trophy: [
    'M16 17H13V19H15V21H9V19H11V17H8V15H16V17ZM18 5H22V11H20V7H18V11H20V13H18V15H16V5H8V15H6V13H4V11H6V7H4V11H2V5H6V3H18V5Z',
  ],
  star: [
    'M5 20H8V22H3V16H5V20ZM21 22H16V20H19V16H21V22ZM10 20H8V18H10V20ZM16 20H14V18H16V20ZM14 18H10V16H14V18ZM7 16H5V13H7V16ZM19 16H17V13H19V16ZM5 13H3V11H5V13ZM21 13H19V11H21V13ZM9 9H3V11H1V7H9V9ZM23 11H21V9H15V7H23V11ZM11 7H9V3H11V7ZM15 7H13V3H15V7ZM13 3H11V1H13V3Z',
  ],
  volume: [
    'M13 22h-2v-2H9v-2h2V6H9V4h2V2h2v20Zm-4-4H7v-2h2v2Zm10 0h-4v-2h4v2ZM7 10H5v4h2v2H3V8h4v2Zm14 6h-2V8h2v8Zm-4-2h-2v-4h2v4ZM9 8H7V6h2v2Zm10 0h-4V6h4v2Z',
  ],
  bookOpen: [
    'M2 3h9v2H2zM0 19h11v2H0zM13 3h9v2h-9zm0 16h11v2H13zM11 5h2v18h-2zM0 5h2v14H0zm22 0h2v14h-2zm-7 2h5v2h-5zm0 4h5v2h-5zm0 4h2v2h-2z',
  ],
  arrowLeft: [
    'M20 11v2H4v-2zM8 13v2H6v-2zm2 2v2H8v-2zm2 2v2h-2v-2zm-4-6V9H6v2z',
    'M10 15V7H8v8zm2 2V5h-2v12z',
  ],
  clock: [
    'M6 2h12v2H6zM2 6h2v12H2zm18 0h2v12h-2zm-2-2h2v2h-2zM4 4h2v2H4zm2 18h12v-2H6zm12-2h2v-2h-2zM4 20h2v-2H4zm7-14h2v7h-2zm2 7h2v2h-2zm2 2h2v2h-2z',
  ],
  sunglasses: [
    'M15 10h5v2h-5zM4 10h5v2H4zm16 2h2v5h-2zM9 12h2v5H9zm4 0h2v5h-2zM2 12h2v5H2zm13 5h5v2h-5zM4 17h5v2H4zm7-5h2v2h-2zM2 6h2v6H2zm18 0h2v6h-2zM4 4h2v2H4zm14 0h2v2h-2zM6 12h3v2H6zm11 0h3v2h-3zM4 14h2v3H4zm11 0h2v3h-2zm-9 2h3v1H6zm11 0h3v1h-3zm-9-2h1v2H8zm11 0h1v2h-1z',
  ],
  skull: [
    'M7 20h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-6-4h2v4H9zm4 0h2v4h-2zm-8-2h2v6H5zm12 0h2v6h-2z',
    'M3 14h4v2H3zM1 4h2v10H1zm20 0h2v10h-2zM3 2h18v2H3zm14 12h4v2h-4zM8 7h2v4H8zm6 0h2v4h-2z',
  ],
  smile: [
    'M6 20h12v2H6zM6 2h12v2H6zm12 2h2v2h-2zM4 4h2v2H4zm0 14h2v2H4zm14 0h2v2h-2zM2 6h2v12H2zm18 0h2v12h-2zM7 13h2v2H7zm2 2h6v2H9zm6-2h2v2h-2zM8 8h2v2H8zm6 0h2v2h-2z',
  ],
}

interface PixelIconProps {
  name: PixelIconName
  /** Rendered size in px (width = height). Default 24. */
  size?: number
  className?: string
}

export default function PixelIcon({ name, size = 24, className }: PixelIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name].map((d) => (
        <path key={d.slice(0, 16)} d={d} />
      ))}
    </svg>
  )
}
