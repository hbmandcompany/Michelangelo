'use client'

import { motion } from 'framer-motion'

import { DrawingVisual } from '@/components/sections/DrawingVisual'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

export function DrawingSurface() {
  return (
    <SectionContainer id="drawing" className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-container">
        <motion.div
          className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="order-2 lg:order-1" variants={fadeInUp}>
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-stone">
              Drawing Surface
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
              Paper first. Intelligence restrained.
            </h2>
            <p className="mt-4 font-serif text-xl text-charcoal/80">
              Analog creation enhanced by digital intelligence.
            </p>
            <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-charcoal/88">
              <p>
                Paper Mode keeps haptic rhythm intact while optics register stroke pressure,
                curvature, and the pauses between thoughts — telemetry offered as craft feedback, not
                surveillance.
              </p>
              <p>
                Over months, competence surfaces as lineage: graphite, crayon, or ink regimes each
                hold their temperament with quiet analytics you may ignore until you crave them.
              </p>
            </div>
            <ul className="mt-12 space-y-3 font-serif text-[1.15rem] text-charcoal">
              <li className="border-l-[3px] border-gold pl-5">Adaptive paper grain mapping</li>
              <li className="border-l-[3px] border-gold/45 pl-5">Confidence-weighted overlays</li>
              <li className="border-l-[3px] border-forestGreen pl-5">Practice arcs without gamification theater</li>
            </ul>
          </motion.div>

          <motion.div className="order-1 lg:order-2" variants={fadeInUp}>
            <DrawingVisual />
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
