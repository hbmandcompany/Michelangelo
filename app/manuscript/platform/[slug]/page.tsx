import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { PlatformFeaturePage } from '@/components/platform/PlatformFeaturePage'
import { PLATFORM_SLUGS, isPlatformSlug, platformDetails } from '@/lib/platform-modules'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return PLATFORM_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!isPlatformSlug(slug)) {
    return { title: 'Not found' }
  }
  const d = platformDetails[slug]
  return {
    title: `${d.heroTitle} — Field manual`,
    description: d.heroLead,
  }
}

export default async function PlatformInstrumentPage({ params }: Props) {
  const { slug } = await params
  if (!isPlatformSlug(slug)) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main id="main-content">
        <PlatformFeaturePage slug={slug} />
      </main>
      <Footer />
    </>
  )
}
