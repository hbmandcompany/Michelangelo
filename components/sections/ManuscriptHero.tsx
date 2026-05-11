'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/ui/Button'
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animation-variants'

function DocumentChrome() {
  return (
    <div className="flex min-h-[min(22rem,50vh)] flex-1 flex-col md:flex-row">
      <aside
        className="hidden shrink-0 border-b border-stone/12 bg-cream/40 px-3 py-4 md:w-[5.5rem] md:border-b-0 md:border-r md:py-5"
        aria-hidden
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-stone">Outline</p>
        <ul className="mt-3 space-y-2 text-[11px] leading-snug text-charcoal/55">
          <li className="rounded-md bg-forestGreen/8 px-1.5 py-1 text-forestGreen">I. Thesis</li>
          <li className="px-1.5 py-0.5">II. Evidence</li>
          <li className="px-1.5 py-0.5">III. Forms</li>
        </ul>
      </aside>
      <div className="relative flex-1 overflow-hidden bg-white px-5 py-6 md:px-8 md:py-8">
        <div
          className="pointer-events-none absolute inset-y-6 left-[2.25rem] w-px bg-stone/15 md:left-[3.25rem]"
          aria-hidden
        />
        <div className="space-y-3 pl-6 md:pl-8">
          <p className="font-serif text-lg leading-snug text-charcoal/90 md:text-xl">
            Every enterprise decision begins as language.
          </p>
          <p className="max-w-md font-body text-sm leading-relaxed text-charcoal/72 md:text-[15px]">
            Manuscript treats the page as a first-class surface: optical margins, measured rhythm,
            and components that feel native to prose — not bolted beside it.
          </p>
          <div className="relative border-l-2 border-gold pl-4 pt-1">
            <p className="font-serif text-base italic leading-relaxed text-charcoal/80 md:text-lg">
              “The interface disappears; only the argument remains.”
            </p>
            <span className="mt-2 inline-block h-4 w-0.5 animate-pulse bg-forestGreen/70" aria-hidden />
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="rounded-full border border-stone/20 bg-cream/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-stone">
              Density tuned
            </span>
            <span className="rounded-full border border-stone/20 bg-cream/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-stone">
              Motion ≤ 16ms
            </span>
            <span className="rounded-full border border-stone/20 bg-cream/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-stone">
              Token-native
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ManuscriptHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="manuscript-hero-surface relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-32 lg:px-16"
      aria-label="The Manuscript — product interface"
    >
      <div className="relative mx-auto grid w-full max-w-container gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 xl:gap-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-none"
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.28em] text-stone"
          >
            The Manuscript
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-6 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-charcoal text-balance md:text-5xl xl:text-6xl"
          >
            World-class UI for the moment words become policy.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 font-body text-lg leading-relaxed text-charcoal/82 md:text-xl"
          >
            Manuscript is Michelangelo&apos;s word-processor-grade workspace: editorial typography,
            spatial hierarchy, and enterprise form primitives composed into one calm, immersive
            surface — crafted in-house to the same standard as our bespoke applications.
          </motion.p>
          <motion.ul
            variants={fadeInUp}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {[
              'Optical type scale',
              'Glass & depth system',
              'Keyboard-first flows',
              'WCAG-aligned contrast',
            ].map((label) => (
              <li
                key={label}
                className="rounded-full border border-forestGreen/20 bg-forestGreen/5 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-forestGreen"
              >
                {label}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="primary" as="a" href="#about" className="min-w-[200px]">
              Explore the platform
            </Button>
            <Button variant="ghost" as="a" href="/" className="px-3 py-3 text-base">
              ← Philosophy overview
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative lg:justify-self-end"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative mx-auto w-full max-w-lg rounded-[1.35rem] border border-stone/25 bg-white shadow-[0_32px_80px_-24px_rgba(43,43,43,0.28)]"
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="flex h-11 items-center gap-2 border-b border-stone/12 bg-cream/95 px-4">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-stone/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone/20" />
              </span>
              <span className="ml-2 truncate font-mono text-[11px] tracking-tight text-stone">
                Manuscript — Executive memo · v3
              </span>
            </div>
            <div className="flex h-10 items-center gap-2 border-b border-stone/10 bg-cream/60 px-3">
              <span className="h-7 w-7 rounded-md border border-stone/15 bg-white shadow-sm" />
              <span className="h-7 w-7 rounded-md border border-stone/15 bg-white shadow-sm" />
              <span className="hidden h-7 w-px bg-stone/20 sm:block" aria-hidden />
              <span className="rounded-md border border-stone/15 bg-white px-2 py-1 font-mono text-[10px] text-stone">
                Body
              </span>
              <span className="ml-auto hidden rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-charcoal/80 sm:inline-block">
                Live co-edit
              </span>
            </div>
            <DocumentChrome />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={
          reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, 5, 0] }
        }
        transition={
          reduceMotion
            ? { delay: 0.3, duration: 0.4 }
            : { delay: 1.2, duration: 2.4, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }
        }
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1 text-stone">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-75">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
