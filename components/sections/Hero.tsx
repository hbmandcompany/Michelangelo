'use client'

import dynamic from 'next/dynamic'
import { motion, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

const HeroAccent3D = dynamic(
  () => import('@/components/ui/HeroAccent3D').then((m) => ({ default: m.HeroAccent3D })),
  { ssr: false }
)

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="hero-canvas relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-24 pt-32 md:px-12 lg:px-16"
      aria-label="Introduction"
    >

      <HeroAccent3D />

      <motion.div
        className="relative mx-auto w-full max-w-container"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeInUp}
          className="font-mono text-xs uppercase tracking-[0.28em] text-stone"
        >
          Michelangelo.agency
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="mt-8 max-w-4xl font-serif text-4xl font-medium leading-[1.15] tracking-tight text-charcoal text-balance md:text-6xl lg:text-7xl"
        >
          A Creative Operating System
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-8 max-w-prose font-body text-lg leading-relaxed text-charcoal/85 md:text-xl"
        >
          Unifying analog craft, digital workspaces, on-device intelligence, and artist discovery
          into a single coherent platform.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button
            aria-label="Open The Manuscript page"
            variant="primary"
            className="min-w-[200px]"
            as="a"
            href="/manuscript"
          >
            The Manuscript
          </Button>
          <Button variant="ghost" as="a" href="#about" className="px-3 py-3 text-base">
            Read the Vision
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={
          reduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: [0, 6, 0] }
        }
        transition={
          reduceMotion
            ? { delay: 0.4, duration: 0.5, ease: [0.4, 0, 0.2, 1] }
            : { delay: 1.4, duration: 2.2, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }
        }
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1 text-stone">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-80">
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
