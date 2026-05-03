'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Platform', href: '#platform' },
  { label: 'Network', href: '#network' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 48)
  }, [])

  useEffect(() => {
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

  const headerClass = scrolled
    ? 'border-b border-stone/25 bg-cream/95 shadow-sm backdrop-blur-md'
    : 'border-b border-transparent bg-transparent'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-luxury ${headerClass}`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <a
          href="#top"
          className="font-serif text-2xl font-semibold tracking-tight text-charcoal transition-opacity duration-500 hover:opacity-90 md:text-[1.65rem]"
          aria-label="Michelangelo home"
        >
          Michelangelo
        </a>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm tracking-wide text-charcoal/90 transition-colors duration-500 hover:text-forestGreen"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-stone/40 text-charcoal transition-colors duration-500 hover:border-forestGreen hover:text-forestGreen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
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

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-deepBrown/98 px-8 pb-16 pt-28 text-cream lg:hidden"
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
