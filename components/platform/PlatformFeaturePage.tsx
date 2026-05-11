import Link from 'next/link'

import type { PlatformSlug } from '@/lib/platform-modules'
import { platformDetails } from '@/lib/platform-modules'

import { PlatformHeroIllustration, PlatformIllustration } from '@/components/platform/PlatformIllustrations'

type Props = {
  slug: PlatformSlug
}

export function PlatformFeaturePage({ slug }: Props) {
  const d = platformDetails[slug]

  return (
    <>
      <section
        className="relative min-h-[min(92vh,900px)] overflow-hidden border-b border-stone/20 bg-cream"
        aria-labelledby={`platform-hero-${slug}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(58,79,65,0.06) 1px, transparent 1px), linear-gradient(rgba(58,79,65,0.06) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative mx-auto grid max-w-container gap-12 px-6 py-24 md:px-12 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone">
              Ordre du jour · {d.ordre}
            </p>
            <h1
              id={`platform-hero-${slug}`}
              className="mt-5 font-serif text-4xl font-medium tracking-tight text-charcoal md:text-6xl lg:text-7xl"
            >
              {d.heroTitle}
            </h1>
            <p className="mt-6 font-serif text-xl font-medium leading-snug text-forestGreen md:text-2xl">
              {d.heroSubtitle}
            </p>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-charcoal/85 md:text-xl">
              {d.heroLead}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/manuscript#platform"
                className="inline-flex items-center justify-center rounded-full border border-stone/35 bg-white px-6 py-3 font-body text-sm text-charcoal transition-colors hover:border-forestGreen hover:text-forestGreen"
              >
                ← Table des instruments
              </Link>
              <Link
                href="/manuscript"
                className="inline-flex items-center justify-center rounded-full bg-forestGreen px-6 py-3 font-body text-sm text-cream transition-colors hover:bg-gold hover:text-charcoal"
              >
                The Manuscript
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center text-charcoal lg:justify-end">
            <div className="relative w-full max-w-lg rounded-[1.25rem] border border-stone/25 bg-white/90 p-6 shadow-[0_40px_100px_-40px_rgba(43,43,43,0.35)] md:p-8">
              <div className="absolute -left-1 top-8 hidden h-24 w-1 rounded-full bg-gold/90 md:block" aria-hidden />
              <PlatformHeroIllustration slug={slug} />
            </div>
          </div>
        </div>
      </section>

      {d.sections.map((section, index) => {
        const reverse = index % 2 === 1
        return (
          <section
            key={section.heading}
            className={`border-b border-stone/15 ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
          >
            <div
              className={`mx-auto flex max-w-container flex-col gap-10 px-6 py-20 md:gap-14 md:px-12 md:py-28 lg:flex-row lg:items-center lg:gap-16 lg:px-16 ${
                reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="max-w-prose flex-1 space-y-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-stone">
                  Corps {index + 1} · {d.ordre}
                </p>
                <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
                  {section.heading}
                </h2>
                <p className="font-body text-lg leading-relaxed text-charcoal/85">{section.body}</p>
              </div>
              <div className="relative flex min-h-[220px] flex-1 items-center justify-center rounded-[1.5rem] border border-stone/20 bg-cream/80 p-10 text-charcoal shadow-inner md:min-h-[280px]"
              >
                <div className="absolute inset-2 rounded-[1.25rem] border border-dashed border-stone/25" aria-hidden />
                <div className="relative w-full max-w-xs text-charcoal/90">
                  <PlatformIllustration slug={slug} size="card" />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <section className="border-b border-stone/20 bg-forestGreen px-6 py-20 text-cream md:px-12 lg:px-16">
        <div className="mx-auto max-w-container text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cream/70">Fin de section</p>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-2xl leading-snug md:text-3xl">
            {d.heroTitle} is engineered as part of a single Michelangelo platform — same tokens, same
            discipline, same house.
          </p>
          <Link
            href="/manuscript#platform"
            className="mt-8 inline-flex rounded-full border border-cream/40 px-8 py-3.5 font-body text-sm text-cream transition-colors hover:bg-cream hover:text-charcoal"
          >
            Return to platform overview
          </Link>
        </div>
      </section>
    </>
  )
}
