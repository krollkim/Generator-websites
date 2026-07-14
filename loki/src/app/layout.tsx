import type { Metadata, Viewport } from 'next'
import { Heebo, Rubik } from 'next/font/google'
import './globals.css'

// Heebo for body copy, Rubik heavy weights for the playful display headings.
const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-heebo',
  display: 'swap',
})

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['700', '800', '900'],
  variable: '--font-rubik',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'The Academy of Phone Pranks',
  description:
    "The only degree your parents will regret paying for. Under the management of Loki, God of Mischief.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${heebo.variable} ${rubik.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
