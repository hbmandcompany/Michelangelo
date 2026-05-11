import { SocialLinks } from '@/components/ui/SocialLinks'

const linkClass =
  'group inline-block font-body text-sm text-charcoal/80 transition-colors duration-500 hover:text-forestGreen'

const underline =
  'relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-forestGreen after:transition-all after:duration-500 group-hover:after:w-full'

const platformLinks = [
  { label: 'The Manuscript', href: '/manuscript' },
  { label: 'Philosophy', href: '#about' },
  { label: 'Learning Engine', href: '#platform' },
  { label: 'Atelier', href: '#studio' },
  { label: 'In-House Model', href: '#network' },
  { label: 'Collaboration', href: '#contact' },
] as const

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Vision', href: '#about' },
  { label: 'Careers', href: '#contact' },
  { label: 'Press Kit', href: '#contact' },
  { label: 'Contact', href: '#contact' },
] as const

const resourceLinks = [
  { label: 'Documentation', href: '#' },
  { label: 'API', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Support', href: '#contact' },
] as const

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-sand text-charcoal">
      <div className="relative mx-auto max-w-container px-6 pt-24 md:px-12 lg:px-16 lg:pt-28">
        <div className="lift-on-hover relative overflow-hidden rounded-[2.5rem] border border-forestGreen/25 bg-forestGreen px-8 py-12 text-cream shadow-card md:px-12">
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cream/70">
                Featured Product
              </p>
              <p className="mt-3 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
                Manuscript — a word-processor style app, designed for modern enterprise writing.
              </p>
              <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-cream/85">
                A poetic, structured drafting surface that connects narrative documents to your
                handcrafted forms and learning engine — all in one Michelangelo studio.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href="/manuscript"
                className="inline-flex items-center justify-center rounded-full bg-cream px-7 py-3.5 font-body text-base text-charcoal transition-colors duration-500 hover:bg-gold hover:text-charcoal"
              >
                Open The Manuscript
              </a>
              <a
                href="/manuscript"
                className="font-body text-sm text-cream/80 underline-offset-4 transition-colors duration-500 hover:text-gold hover:underline"
              >
                See how it works →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-6 lg:col-span-2">
            <p className="font-serif text-3xl font-semibold tracking-tight text-charcoal">
              Michelangelo
            </p>
            <p className="font-body text-lg leading-relaxed text-charcoal/90">
              Une maison française de formes handcrafted pour les applications enterprise.
            </p>
            <p className="max-w-sm font-body text-sm leading-relaxed text-charcoal/75">
              We design and build everything in-house — strategy, product, engineering, identity —
              composed with restraint, precision, and long horizons.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-wide text-charcoal">Platform</h3>
            <ul className="mt-6 space-y-3" role="list">
              {platformLinks.map((item) => (
                <li key={item.href + item.label}>
                  <a href={item.href} className={`${linkClass} ${underline}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-wide text-charcoal">Maison</h3>
            <ul className="mt-6 space-y-3" role="list">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={`${linkClass} ${underline}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-wide text-charcoal">Resources</h3>
            <ul className="mt-6 space-y-3" role="list">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={`${linkClass} ${underline}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-20 border-charcoal/15" />

        <div className="mt-8 grid gap-4 pb-16 font-mono text-xs text-charcoal/70 md:grid-cols-2">
          <p>© 2026 Michelangelo. All rights reserved.</p>
          <p className="md:text-right">Handcrafted in-house for enterprise teams.</p>
        </div>
      </div>
    </footer>
  )
}
