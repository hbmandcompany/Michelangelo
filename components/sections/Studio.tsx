'use client'

import { motion } from 'framer-motion'

import { StudioVisual } from '@/components/sections/StudioVisual'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

export function Studio() {
  return (
    <SectionContainer id="studio" className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-container">
        <motion.div
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div variants={fadeInUp}>
            <StudioVisual />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-stone">
              Studio &amp; Generation
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
              Scale that preserves authorship boundaries
            </h2>
            <p className="mt-4 font-serif text-xl text-charcoal/80">
              AI-powered asset generation routed through lineage, not anonymity.
            </p>
            <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-charcoal/88">
              <p>
                Boards become compositional palettes; prompts inherit constraints so generation
                remains answerable to the room you built. Flux orchestration keeps budgets legible
                while allowing temperamental exploration when you grant it.
              </p>
              <p>
                Marketplace integration is optional and structured: provenance rides with the file,
                settlement paths stay explicit, and every release can be unwound if ethics demand
                recission.
              </p>
            </div>
            <div className="mt-12 grid gap-4 rounded-sm border border-stone/30 bg-cream p-6 font-mono text-[11px] leading-relaxed text-charcoal/75">
              <p>On-device routing · policy envelope</p>
              <p>Flux lanes · batch + single-frame</p>
              <p>Marketplace hooks · revocable listings</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
