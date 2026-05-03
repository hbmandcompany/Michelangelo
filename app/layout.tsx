import type { Metadata } from 'next'
import { cormorant, crimson, jetbrains } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Michelangelo — A Creative Operating System',
    template: '%s | Michelangelo',
  },
  description:
    'Unifying analog craft, digital workspaces, on-device intelligence, and artist discovery into a single coherent platform.',
  keywords: [
    'Michelangelo',
    'creative platform',
    'on-device intelligence',
    'notebook',
    'studio',
    'ownership',
  ],
  authors: [{ name: 'Michelangelo' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fontVars = `${cormorant.variable} ${crimson.variable} ${jetbrains.variable}`

  return (
    <html lang="en" className={fontVars}>
      <body className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:bg-forestGreen focus:px-4 focus:py-3 focus:text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
