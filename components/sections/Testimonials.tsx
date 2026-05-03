'use client'

import { motion } from 'framer-motion'

import { SectionContainer } from '@/components/ui/SectionContainer'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

const voices = [
  {
    quote:
      'Michelangelo is the rare environment that treats stillness as a feature — drafts stay legible months later without administrative shame.',
    name: 'Professor Adele Marin',
    title: 'Cultural Computation · Sorbonne',
  },
  {
    quote:
      'We ceased exporting files to strangers. Custody lived where we already practiced; that shift mattered ethically and economically.',
    name: 'Rafael Vico',
    title: 'Atelier Ceramica Vico · Valencia',
  },
  {
    quote:
      'The drawing surface listens like a collaborator who knows when silence is pedagogical.',
    name: 'Amélie Durant',
    title: 'Choreographer & Editor · Marseille',
  },
] as const

export function Testimonials() {
  return (
    <SectionContainer id="testimonials" className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-stone">Testimonials</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
            Quiet endorsements from early fellows
          </h2>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-10 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          role="list"
        >
          {voices.map((item) => (
            <motion.figure
              key={item.name}
              variants={fadeInUp}
              className="flex h-full flex-col justify-between border-t border-stone/30 pt-8"
              role="listitem"
            >
              <blockquote className="font-serif text-xl italic leading-relaxed text-charcoal/90">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
                  {item.name}
                </p>
                <p className="mt-2 font-body text-sm text-charcoal/70">{item.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  )
}
