'use client'

import { motion } from 'framer-motion'

import { NotebookVisual } from '@/components/sections/NotebookVisual'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

export function Notebook() {
  return (
    <SectionContainer id="notebook" className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-container">
        <motion.div
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div variants={fadeInUp}>
            <NotebookVisual />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-stone">
              Notebook
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
              Familiar typography, uncompromising custody
            </h2>
            <p className="mt-4 font-serif text-xl text-charcoal/80">
              Microsoft Word, augmented by on-device intelligence — without relinquishing lineage.
            </p>
            <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-charcoal/88">
              <p>
                Your drafts receive a calibrated partner: assistance that cites its sources, aligns
                to your tonal register, and refines ambiguity instead of overwriting it.
              </p>
              <p>
                Semantic search binds notebooks, sketches, and boards across years of practice —
                surfaced when you summon them, withheld when silence is pedagogical.
              </p>
            </div>
            <dl className="mt-12 space-y-4 font-mono text-xs text-charcoal/70">
              <div className="flex justify-between gap-6 border-t border-stone/25 pt-4">
                <dt>Personalized models</dt>
                <dd className="text-right text-forestGreen">offline-first</dd>
              </div>
              <div className="flex justify-between gap-6 border-t border-stone/25 pt-4">
                <dt>Unsupervised adaptation</dt>
                <dd className="text-right text-forestGreen">opt-in curricula</dd>
              </div>
              <div className="flex justify-between gap-6 border-t border-stone/25 pt-4">
                <dt>Semantic search</dt>
                <dd className="text-right text-forestGreen">vector + lexical</dd>
              </div>
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
