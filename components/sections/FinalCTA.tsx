'use client'

import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'

import { SectionContainer } from '@/components/ui/SectionContainer'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

const roles = ['Creator', 'Designer', 'Developer', 'Business', 'Other'] as const

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <SectionContainer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-stone/10 to-cream px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #3a4f41 0, transparent 45%), radial-gradient(circle at 80% 10%, #c9a96e 0, transparent 40%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-prose text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.26em] text-stone"
          >
            Invitation
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-serif text-3xl font-medium tracking-tight text-charcoal md:text-4xl"
          >
            Begin Creating
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 font-body text-lg leading-relaxed text-charcoal/85"
          >
            Request early access to Michelangelo and join the first cohort of artists shaping the
            platform.
          </motion.p>
        </motion.div>

        <motion.form
          className="mt-12 space-y-8 text-left"
          onSubmit={handleSubmit}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          aria-label="Request early access"
        >
          <div>
            <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@studio.com"
              className="mt-3 w-full border-b border-stone/50 bg-transparent px-0 py-4 font-body text-lg text-charcoal outline-none transition-colors duration-500 placeholder:text-stone/60 focus:border-forestGreen"
            />
          </div>

          <fieldset>
            <legend className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone">
              Role
            </legend>
            <div className="mt-4 flex flex-wrap gap-3">
              {roles.map((role) => (
                <label
                  key={role}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-stone/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-charcoal/80 transition-colors duration-500 has-[:checked]:border-forestGreen has-[:checked]:text-forestGreen"
                >
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    defaultChecked={role === 'Creator'}
                    className="sr-only"
                  />
                  {role}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-center">
            <Button type="submit" variant="primary" className="min-w-[220px]" aria-label="Submit access request">
              Request Access
            </Button>
          </div>

          {submitted && (
            <p className="text-center font-body text-sm text-forestGreen" role="status">
              Thank you — we will correspond with care when your cohort opens.
            </p>
          )}
        </motion.form>
      </div>
    </SectionContainer>
  )
}
