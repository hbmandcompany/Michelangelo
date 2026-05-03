'use client'

import { motion } from 'framer-motion'

import { SectionContainer } from '@/components/ui/SectionContainer'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

const steps = [
  {
    glyph: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden fill="none">
        <path
          d="M8 24l8-14 12 14M10 20h14"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: 'Create',
  },
  {
    glyph: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden fill="none">
        <path
          d="M8 22c4-6 14-14 22-14M22 26c-4-4-8-12-14-13"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: 'Organize',
  },
  {
    glyph: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden fill="none">
        <rect x="7" y="10" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.35" />
        <path d="M11 18h10M11 22h6" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
    label: 'Mint',
  },
  {
    glyph: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden fill="none">
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.35" />
        <path d="M16 12v4l3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    label: 'Earn',
  },
] as const

export function Ownership() {
  return (
    <SectionContainer
      id="ownership"
      className="bg-charcoal px-6 py-24 text-cream md:px-12 md:py-32 lg:px-16 lg:py-44"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
      }}
    >
      <div className="mx-auto max-w-container">
        <motion.div
          className="mx-auto max-w-prose text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.26em] text-stone"
          >
            Ownership &amp; Economy
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-serif text-3xl font-medium tracking-tight md:text-4xl"
          >
            Your Work. Your Equity. Your Future.
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="mt-10 space-y-6 text-left font-body text-lg leading-relaxed text-cream/85"
          >
            <p>
              Michelangelo treats settlement as cultural infrastructure. Stellar carries identity
              commitments with clarity; Polygon handles asset velocity where markets require it. We
              refuse the false binary between accessibility and rigor — both must hum beneath the
              surface.
            </p>
            <p>
              Ether Bonds align long-term patronage with durable releases. Michelangelo Coin is not
              spectacle; it is a consequential medium for circulating care, accountability, and the
              slow accrual of reputation across media.
            </p>
            <p>
              Our thesis is simple: art that changes rooms should change ledgers with equal
              seriousness. We build so your practice can speak in both languages without choosing
              exile from either.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-x-10 gap-y-14 rounded-sm border border-stone/25 bg-deepBrown/60 px-8 py-12 sm:grid-cols-4 md:px-12 md:py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          role="list"
          aria-label="Ownership flow"
        >
          {steps.map((step) => (
            <div key={step.label} className="flex flex-col items-center gap-5 text-center" role="listitem">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/45 text-gold shadow-inner">
                {step.glyph}
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">{step.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <a
            href="#"
            className="inline-flex rounded-sm border border-gold px-8 py-3 font-body text-base text-cream transition-colors duration-600 hover:bg-gold hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-deepBrown"
          >
            Learn About Ether Bonds
          </a>
          <p className="mx-auto mt-4 max-w-prose font-mono text-[11px] text-stone">
            Link placeholder — associate with instrument whitepaper or long-form appendix when
            finalized.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
