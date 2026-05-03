const linkClass =
  'group inline-block font-body text-sm text-cream/85 transition-colors duration-500 hover:text-gold'

const underline =
  'relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 group-hover:after:w-full'

import { SocialLinks } from '@/components/ui/SocialLinks'

const platformLinks = [
  { label: 'Notebook', href: '#notebook' },
  { label: 'Boards', href: '#platform' },
  { label: 'Drawing', href: '#drawing' },
  { label: 'Studio', href: '#studio' },
  { label: 'Network', href: '#network' },
  { label: 'Ownership', href: '#ownership' },
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
    <footer className="bg-deepBrown text-cream">
      <div className="mx-auto max-w-container px-6 py-24 md:px-12 lg:px-16 lg:py-28">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-6">
            <p className="font-serif text-2xl font-semibold tracking-tight">Michelangelo</p>
            <p className="font-body text-lg text-cream/90 leading-relaxed">
              A Creative Operating System
            </p>
            <p className="max-w-xs font-body text-sm leading-relaxed text-cream/75">
              We build infrastructure for cohesive creative practice across materials, computation,
              settlement, and community — with restraint, precision, and long horizons.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-wide text-cream">Platform</h3>
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
            <h3 className="font-serif text-lg tracking-wide text-cream">Company</h3>
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
            <h3 className="font-serif text-lg tracking-wide text-cream">Resources</h3>
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

        <hr className="mt-20 border-stone/40 opacity-40" />

        <div className="mt-8 grid gap-4 font-mono text-xs text-stone md:grid-cols-2">
          <p>© 2026 Hated By Many LLC. All rights reserved.</p>
          <p className="md:text-right">Operated under Hated By Many LLC. Based in Texas.</p>
        </div>
      </div>
    </footer>
  )
}
