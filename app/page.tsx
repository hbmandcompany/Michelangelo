import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { Hero } from '@/components/sections/Hero'
import { Philosophy } from '@/components/sections/Philosophy'
import { PlatformOverview } from '@/components/sections/PlatformOverview'
import { Notebook } from '@/components/sections/Notebook'
import { DrawingSurface } from '@/components/sections/DrawingSurface'
import { Studio } from '@/components/sections/Studio'
import { Ownership } from '@/components/sections/Ownership'
import { ArtistNetwork } from '@/components/sections/ArtistNetwork'
import { Testimonials } from '@/components/sections/Testimonials'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Philosophy />
        <PlatformOverview />
        <Notebook />
        <DrawingSurface />
        <Studio />
        <Ownership />
        <ArtistNetwork />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
