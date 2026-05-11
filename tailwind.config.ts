import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F9F7F4',
        charcoal: '#2B2B2B',
        stone: '#8B8680',
        forestGreen: '#3A4F41',
        gold: '#C9A96E',
        /** Warm natural tan for footer — bridges cream and gold */
        footerTan: '#E4D6C4',
        sand: '#D9C5A0',
        sandDeep: '#C7AE82',
        deepBrown: '#D9C5A0',
        error: '#8B4049',
        success: '#4F6B4A',
        white: '#FFFFFF',
        black: '#0A0A0A',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-crimson)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'Courier New', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      maxWidth: {
        prose: '720px',
        container: '1280px',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
      },
      boxShadow: {
        card: '0 24px 48px -12px rgba(74, 63, 53, 0.12)',
        'card-hover': '0 32px 64px -16px rgba(74, 63, 53, 0.18)',
      },
    },
  },
  plugins: [],
}

export default config
