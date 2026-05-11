'use client'

import { motion } from 'framer-motion'

import { OwnershipVisual } from '@/components/sections/OwnershipVisual'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
        >
          <OwnershipVisual />
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <a
            href="#contact"
            className="inline-flex rounded-sm border border-gold px-8 py-3 font-body text-base text-cream transition-colors duration-600 hover:bg-gold hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-deepBrown"
          >
            Learn About Ether Bonds
          </a>
          <p className="mx-auto mt-5 max-w-prose font-mono text-[11px] leading-relaxed text-stone">
            Full instrument appendix ships with cohort documentation — inquire via early access when
            you are ready for settlement detail.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
