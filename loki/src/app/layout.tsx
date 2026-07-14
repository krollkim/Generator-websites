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
  title: 'האקדמיה לתעלולים טלפוניים',
  description: 'התואר היחיד שההורים שלכם יתחרטו שמימנו. בהנהלת לוקי, אל התעלולים.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
