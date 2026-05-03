'use client'

import { motion } from 'framer-motion'

import { SectionContainer } from '@/components/ui/SectionContainer'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

const artists = [
  {
    initials: 'C.L.',
    name: 'Carmen Lys',
    handle: '@carmenlys',
    bio: 'Architectural fresco studies and temperate light palettes.',
  },
  {
    initials: 'É.R.',
    name: 'Étienne Rocher',
    handle: '@etienne_rocher',
    bio: 'Instrument design, handmade oscillators, and quiet scoring.',
  },
  {
    initials: 'V.M.',
    name: 'Vittoria Mari',
    handle: '@mari_linework',
    bio: 'Graphite choreography for editorial couture narratives.',
  },
  {
    initials: 'A.S.',
    name: 'Aya Sato',
    handle: '@ayasato.studio',
    bio: 'Photochemical printing and restrained digital composites.',
  },
  {
    initials: 'J.B.',
    name: 'Julien Baudin',
    handle: '@baudin.atelier',
    bio: 'Type revivals for luxury publishing and institutional archives.',
  },
  {
    initials: 'I.K.',
    name: 'Inès Kalfa',
    handle: '@ineskalfa',
    bio: 'Sculptural clay maquettes traced into generative choreography.',
  },
  {
    initials: 'T.G.',
    name: 'Tomas Gale',
    handle: '@gale.studio',
    bio: 'Field recordings folded into orchestral minimalism.',
  },
  {
    initials: 'L.N.',
    name: 'Lys Neville',
    handle: '@lys.neville',
    bio: 'Immersive scenography emphasizing material gravity.',
  },
  {
    initials: 'M.U.',
    name: 'Mara Usai',
    handle: '@marausai',
    bio: 'Venetian glass studies translated into restrained UI motion.',
  },
] as const

export function ArtistNetwork() {
  return (
    <SectionContainer id="network" className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-container">
        <motion.div
          className="mx-auto max-w-prose text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-stone">Artist Network</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
            Discover. Collaborate. Showcase.
          </h2>
        </motion.div>

        <motion.ul
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          role="list"
        >
          {artists.map((artist) => (
            <motion.li key={artist.handle} variants={fadeInUp}>
              <article className="group relative overflow-hidden rounded-sm border border-transparent bg-white/95 p-7 shadow-card transition-colors duration-600 hover:border-gold hover:shadow-card-hover md:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-stone/40 bg-gradient-to-br from-white to-cream font-serif text-[11px] text-charcoal">
                    {artist.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="truncate font-serif text-xl leading-tight">{artist.name}</h3>
                    </div>
                    <p className="truncate font-mono text-[11px] text-stone">{artist.handle}</p>
                    <p className="mt-4 font-body text-[1rem] leading-relaxed text-charcoal/82">
                      {artist.bio}
                    </p>
                    <button
                      type="button"
                      aria-label={`Follow ${artist.name} — visual demonstration only`}
                      className="mt-6 rounded-full border border-forestGreen/40 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-forestGreen transition-colors duration-500 hover:border-gold hover:text-charcoal disabled:opacity-80"
                      disabled
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <span
                  className="pointer-events-none absolute inset-0 rounded-sm opacity-0 shadow-[0_0_0_1px_rgba(201,169,110,0.35)] transition-opacity duration-500 group-hover:opacity-60"
                  aria-hidden
                />
              </article>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="mx-auto mt-14 max-w-prose text-center font-body text-lg leading-relaxed text-charcoal/80"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          A discovery system optimized for creative output quality, not engagement metrics.
        </motion.p>
      </div>
    </SectionContainer>
  )
}
