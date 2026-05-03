import { Cormorant_Garamond, Crimson_Pro, JetBrains_Mono } from 'next/font/google'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-crimson',
  display: 'swap',
})

export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})
