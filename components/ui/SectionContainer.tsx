'use client'

import type { MotionProps } from 'framer-motion'
import type { VariantLabels } from 'framer-motion'
import { motion } from 'framer-motion'

import type { ReactNode } from 'react'

import { fadeInUp, viewportOnce } from '@/lib/animation-variants'

type SectionContainerProps = {
  id?: string
  children: ReactNode
  className?: string
  as?: 'section' | 'div'
} & Omit<MotionProps, 'children'>

export function SectionContainer({
  id,
  children,
  className = '',
  as = 'section',
  initial = 'hidden',
  whileInView = 'visible' as VariantLabels,
  viewport = viewportOnce,
  variants = fadeInUp,
  ...motionProps
}: SectionContainerProps) {
  const Component = as === 'div' ? motion.div : motion.section

  return (
    <Component
      id={id}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      className={className}
      {...motionProps}
    >
      {children}
    </Component>
  )
}
