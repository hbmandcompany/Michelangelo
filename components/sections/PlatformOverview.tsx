'use client'

import { motion } from 'framer-motion'

import { SectionContainer } from '@/components/ui/SectionContainer'
import { Card } from '@/components/ui/Card'
import {
  IconNotebook,
  IconBoards,
  IconDrawing,
  IconStudio,
  IconNetwork,
  IconOwnership,
} from '@/components/ui/platform-icons'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animation-variants'

const items = [
  {
    icon: IconNotebook,
    title: 'Notebook',
    description:
      'Long-form narration with calibrated assistance: citations, semantic recall, and a voice that strengthens yours rather than impersonating it.',
  },
  {
    icon: IconBoards,
    title: 'Boards',
    description:
      'Spatial thinking for motifs, palettes, timelines, and research — the wall of atelier reworked into an instrument.',
  },
  {
    icon: IconStudio,
    title: 'Studio',
    description:
      'Controlled generation routed through your references so scale never severs coherence from lineage.',
  },
  {
    icon: IconDrawing,
    title: 'Drawing',
    description:
      'Paper-first capture with restrained digital augmentation — stroke fidelity, lineage, progression without spectacle.',
  },
  {
    icon: IconNetwork,
    title: 'Network',
    description:
      'A discovery ledger tuned to output integrity, reciprocity among peers, and the slow reputation of mastery.',
  },
  {
    icon: IconOwnership,
    title: 'Ownership',
    description:
      'Settlement that mirrors consequence: cryptographic provenance paired with humane governance and patient economics.',
  },
] as const

export function PlatformOverview() {
  return (
    <SectionContainer
      id="platform"
      className="relative bg-gradient-to-b from-cream via-cream to-stone/5 px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-44"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <div className="mx-auto max-w-container">
        <motion.div
          className="max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: { opacity: 0, y: 36 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
            },
          }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-stone">
            Platform Overview
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
            Instruments in concert
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-charcoal/85">
            We treat each surface — language, pigment, tessellation — as deserving of lineage. The
            platform arranges six practices so continuity is deliberate, never accidental.
          </p>
        </motion.div>

        <motion.ul
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          role="list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {items.map(({ icon: Glyph, ...item }) => (
            <motion.li key={item.title} variants={fadeInUp}>
              <Card>
                <div className="mb-6 rounded-sm bg-cream p-4">
                  <Glyph />
                </div>
                <h3 className="font-serif text-xl tracking-tight text-charcoal">{item.title}</h3>
                <p className="mt-4 font-body text-[1.0625rem] leading-relaxed text-charcoal/82">
                  {item.description}
                </p>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionContainer>
  )
}
