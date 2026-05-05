'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className={`rounded-sm border border-stone/35 bg-white/90 p-8 shadow-card backdrop-blur-sm transition-shadow duration-600 ease-luxury md:p-10 ${className}`}
      whileHover={
        reduceMotion ? undefined : { y: -4, boxShadow: '0 32px 64px -16px rgba(74, 63, 53, 0.18)' }
      }
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.article>
  )
}
