'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'Philosophy', href: '#about' },
  { label: 'Engine', href: '#platform' },
  { label: 'Method', href: '#network' },
  { label: 'Atelier', href: '#studio' },
  { label: 'The Manuscript', href: '/manuscript' },
] as const

export function Navigation() {
  const reduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [barHidden, setBarHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => {
      const matches = mq.matches
      setHideOnScroll(matches)
      if (!matches) setBarHidden(false)
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const onScroll = useCallback(() => {
    const y = window.scrollY
    setScrolled(y > 48)

    if (open) {
      setBarHidden(false)
      lastScrollY.current = y
      return
    }

    if (!hideOnScroll) {
      setBarHidden(false)
      lastScrollY.current = y
      return
    }

    const prev = lastScrollY.current
    const delta = y - prev

    if (y < 72) {
      setBarHidden(false)
    } else if (delta > 6 && y > 96) {
      setBarHidden(true)
    } else if (delta < -6) {
      setBarHidden(false)
    }

    lastScrollY.current = y
  }, [open, hideOnScroll])

  useEffect(() => {
    lastScrollY.current = window.scrollY
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const pillClass = scrolled
    ? 'luxe-pill border border-stone/15'
    : 'luxe-pill border border-stone/10'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className={`px-4 pt-4 md:px-8 md:pt-6 ${barHidden && !open ? 'pointer-events-none' : 'pointer-events-auto'}`}
        initial={false}
        animate={{
          y: barHidden && !open ? -120 : 0,
          opacity: barHidden && !open ? 0 : 1,
        }}
        transition={{
          duration: reduceMotion ? 0.12 : 0.42,
          ease: [0.4, 0, 0.2, 1],
        }}
        aria-hidden={barHidden && !open}
      >
        <div
          className={`mx-auto flex max-w-container items-center justify-between gap-6 px-5 py-3 md:px-7 md:py-3.5 ${pillClass}`}
        >
        <a
          href="#top"
          className="font-serif text-xl font-semibold tracking-tight text-charcoal transition-opacity duration-500 hover:opacity-90 md:text-[1.45rem]"
          aria-label="Michelangelo home"
        >
          Michelangelo
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm tracking-wide text-charcoal/85 transition-colors duration-500 hover:text-forestGreen"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/manuscript"
          className="hidden rounded-full bg-forestGreen px-5 py-2.5 font-body text-sm text-cream transition-colors duration-500 hover:bg-gold hover:text-charcoal lg:inline-flex"
        >
          Open The Manuscript
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone/40 text-charcoal transition-colors duration-500 hover:border-forestGreen hover:text-forestGreen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-6 bg-current transition-transform ${open ? 'translate-y-1 rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-transform ${open ? '-translate-y-1 -rotate-45' : ''}`}
            />
          </span>
        </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-forestGreen/97 px-8 pb-16 pt-28 text-cream lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <nav className="flex flex-1 flex-col gap-8" aria-label="Mobile">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="font-serif text-3xl font-medium tracking-tight text-cream/95 transition-colors hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <p className="font-mono text-xs text-stone/80">
              Michelangelo — A Creative Operating System
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
