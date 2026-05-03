'use client'

import { motion } from 'framer-motion'

import { SectionContainer } from '@/components/ui/SectionContainer'
import { fadeInUp } from '@/lib/animation-variants'

export function Philosophy() {
  return (
    <SectionContainer id="about" className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-44">
      <div className="mx-auto grid max-w-container gap-14 lg:grid-cols-5 lg:gap-24">
        <div className="lg:col-span-3 lg:max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-stone">
            Philosophy
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
            Ownership as a humane default
          </h2>

          <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-charcoal/88">
            <p>
              Creative labor, once performed, ought to produce durable ownership. This principle —
              self-evident in the physical world — has been structurally denied to digital creators.
              We built Michelangelo to restore it. The platform you see here unifies the analog and
              the algorithmic, the notebook and the blockchain, the sketch and the settlement layer.
              It is infrastructure for a creative life that refuses fragmentation.
            </p>
            <p>
              Michelangelo Buonarroti modeled the archetype we pursue: sculptor, painter, poet, and
              architect composing a continuity of workmanship under one temperament. Likewise, our
              work converges authoring, tooling, lineage, and economic consequence without treating you
              as a profile to be segmented.
            </p>
            <p>
              We believe intelligence should serve solitude first — drafts that remain yours,
              notebooks that learn without laundering your voice, workflows that degrade gently
              when the network fades. Silence and signal both belong in the ledger of a serious
              practice.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center lg:col-span-2">
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative overflow-hidden rounded-sm border border-stone/30 bg-gradient-to-b from-white/80 to-cream/60 p-10 shadow-card"
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              aria-hidden
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -12deg,
                  #2b2b2b 0,
                  #2b2b2b 1px,
                  transparent 1px,
                  transparent 10px
                ), repeating-linear-gradient(
                  8deg,
                  #2b2b2b 0,
                  #2b2b2b 1px,
                  transparent 1px,
                  transparent 12px
                )`,
              }}
            />
            <blockquote className="relative font-serif text-2xl font-normal leading-snug tracking-tight text-charcoal md:text-[1.65rem]">
              “The artist, the engineer, the contractor, and the owner can be, once again, the same
              person.”
            </blockquote>
          </motion.figure>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-stone">
            Renaissance restraint · editorial figure study (interpretive motif)
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
