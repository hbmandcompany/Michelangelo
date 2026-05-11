import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { Button } from '@/components/ui/Button'

export default function ManuscriptPage() {
  return (
    <>
      <Navigation />
      <main
        id="main-content"
        className="relative min-h-screen overflow-hidden bg-cream px-6 pb-24 pt-32 md:px-12 lg:px-16"
      >
        <section className="relative mx-auto max-w-container rounded-[2.75rem] border border-stone/20 bg-cream p-10 shadow-card md:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone">Manuscript</p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
            A word-processor style workspace for strategic drafting.
          </h1>
          <p className="mt-8 max-w-3xl font-body text-lg leading-relaxed text-charcoal/85">
            Manuscript is where teams write decisions with clarity. It blends editorial focus,
            structured form inputs, and enterprise-safe collaboration into one poetic writing
            surface — designed and built in-house by Michelangelo.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                'Writing First',
                'Full-page composition with elegant typography and distraction-free controls.',
              ],
              [
                'Enterprise Context',
                'Smart side-panels connect narrative docs to approvals, policies, and forms.',
              ],
              [
                'Learning Engine',
                'Suggests structure, tone, and next actions based on how your teams write.',
              ],
            ].map(([title, copy]) => (
              <article
                key={title}
                className="lift-on-hover rounded-[2rem] border border-stone/20 bg-white p-6"
              >
                <h2 className="font-serif text-2xl text-charcoal">{title}</h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/80">
                  {copy}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button as="a" href="/" variant="secondary">
              Return to Home
            </Button>
            <Button
              as="a"
              href="mailto:hello@michelangelo.agency?subject=Manuscript%20preview"
              variant="primary"
            >
              Request a Preview
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
