'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { SectionContainer } from '@/components/ui/SectionContainer'
import { PlatformIllustration } from '@/components/platform/PlatformIllustrations'
import type { PlatformCardItem } from '@/lib/platform-modules'
import { platformCardItems } from '@/lib/platform-modules'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animation-variants'

const variantShell: Record<PlatformCardItem['variant'], string> = {
  ledger:
    'rounded-2xl border border-stone/25 border-l-[6px] border-l-forestGreen bg-white shadow-card',
  carte:
    'rounded-lg border-2 border-gold/40 bg-cream shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]',
  atelier: 'rounded-[2rem] border border-stone/30 bg-white shadow-card',
  folio:
    'rounded-sm border border-dashed border-stone/50 bg-[#faf8f5] shadow-[inset_0_0_0_1px_rgba(139,134,128,0.08)]',
  constellation:
    'rounded-xl border border-charcoal/10 bg-charcoal/[0.03] shadow-card ring-1 ring-stone/20',
  coffer:
    'rounded-md border-y-[5px] border-x border-stone/30 border-y-stone/40 bg-white shadow-inner',
}

const variantIllustrationTone: Record<PlatformCardItem['variant'], string> = {
  ledger: 'text-forestGreen',
  carte: 'text-charcoal',
  atelier: 'text-charcoal',
  folio: 'text-charcoal/80',
  constellation: 'text-forestGreen',
  coffer: 'text-charcoal',
}

function PlatformCard({ item }: { item: PlatformCardItem }) {
  const shell = variantShell[item.variant]
  const tone = variantIllustrationTone[item.variant]
  const href = `/manuscript/platform/${item.slug}`

  return (
    <Link
      href={href}
      aria-label={`${item.title}. ${item.description} Opens the full field manual for ${item.title}.`}
      className={`group relative flex min-h-[19rem] flex-col overflow-hidden outline-none transition-shadow duration-500 ease-luxury focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${shell}`}
    >
      <div className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-stone/70">
        Ord. {item.ordre}
      </div>

      <div
        className={`relative flex flex-1 items-center justify-center px-6 pb-2 pt-10 md:px-8 md:pt-12 ${tone}`}
      >
        <div className="h-36 w-full max-w-[13rem] md:h-40 md:max-w-[15rem]">{/* illustration slot */}
          <PlatformIllustration slug={item.slug} size="card" />
        </div>
      </div>

      <div className="relative z-20 border-t border-stone/15 bg-cream/95 px-5 py-4 md:px-6">
        <h3 className="font-serif text-xl font-medium tracking-tight text-charcoal md:text-2xl">
          {item.title}
        </h3>
        <p
          className="mt-0 max-h-0 overflow-hidden font-mono text-[10px] uppercase tracking-[0.18em] text-stone/80 opacity-0 transition-all duration-300 ease-luxury group-hover:mt-1 group-hover:max-h-8 group-hover:opacity-100 group-focus-within:mt-1 group-focus-within:max-h-8 group-focus-within:opacity-100"
          aria-hidden
        >
          Full briefing →
        </p>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end opacity-0 transition-opacity duration-500 ease-luxury group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      >
        <div className="border-t border-stone/20 bg-cream/98 p-5 shadow-[0_-12px_40px_-12px_rgba(43,43,43,0.12)] backdrop-blur-md md:p-6">
          <p className="font-body text-sm leading-relaxed text-charcoal/90 md:text-[15px]">
            {item.description}
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-forestGreen">
            Click to open theatre of operations
          </p>
        </div>
      </div>
    </Link>
  )
}

export function PlatformOverview() {
  return (
    <SectionContainer
      id="platform"
      className="relative bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-44"
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
            platform arranges six practices so continuity is deliberate, never accidental. Hover for
            the field order; click for the full campaign map.
          </p>
        </motion.div>

        <motion.ul
          className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          role="list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {platformCardItems.map((item) => (
            <motion.li key={item.slug} variants={fadeInUp}>
              <PlatformCard item={item} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionContainer>
  )
}
