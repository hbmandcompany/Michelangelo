import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { Hero } from '@/components/sections/Hero'
import { SectionContainer } from '@/components/ui/SectionContainer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="relative overflow-hidden bg-cream">
        <Hero />

        <SectionContainer
          id="about"
          className="romance-panel lift-on-hover relative isolate mx-6 mt-16 overflow-hidden rounded-[2.5rem] border border-stone/20 bg-cream px-8 py-20 shadow-card md:mx-12 md:px-14 lg:mx-auto lg:max-w-container lg:rounded-[3rem] lg:px-20"
        >
          <p className="relative font-mono text-xs uppercase tracking-[0.24em] text-stone">
            Philosophie de Design
          </p>
          <h2 className="relative mt-6 max-w-4xl font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
            Nous dessinons des systèmes qui respirent comme un atelier vivant.
          </h2>
          <p className="relative mt-8 max-w-3xl font-body text-xl leading-relaxed text-charcoal/85">
            Michelangelo compose des expériences numériques avec une influence romantique
            française — lumière douce, courbes humaines, et précision artisanale. Notre maison
            unit stratégie, design, ingénierie, et exécution dans un seul rythme.
          </p>

          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            <article className="lift-on-hover rounded-[2rem] border border-stone/20 bg-white p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
                Acte I
              </p>
              <h3 className="mt-3 font-serif text-2xl text-charcoal">Lyrisme Fonctionnel</h3>
              <p className="mt-4 font-body text-base leading-relaxed text-charcoal/80">
                Chaque interface est composée comme une page de prose — lisible, sensible, et
                orientée vers la décision.
              </p>
            </article>
            <article className="lift-on-hover rounded-[2rem] border border-stone/20 bg-white p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
                Acte II
              </p>
              <h3 className="mt-3 font-serif text-2xl text-charcoal">Formes Artisanales</h3>
              <p className="mt-4 font-body text-base leading-relaxed text-charcoal/80">
                Nous livrons des formulaires handcrafted pour les applications enterprise —
                robustes, rapides, et beaux dans les détails.
              </p>
            </article>
            <article className="lift-on-hover rounded-[2rem] border border-stone/20 bg-white p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
                Acte III
              </p>
              <h3 className="mt-3 font-serif text-2xl text-charcoal">Maison Intégrée</h3>
              <p className="mt-4 font-body text-base leading-relaxed text-charcoal/80">
                Tout est in-house — produit, code, infrastructure, identité visuelle, et
                accompagnement stratégique.
              </p>
            </article>
          </div>
        </SectionContainer>

        <SectionContainer
          id="platform"
          className="mx-6 mt-10 grid gap-8 md:mx-12 md:grid-cols-5 lg:mx-auto lg:max-w-container"
        >
          <article className="romance-deep lift-on-hover relative isolate overflow-hidden rounded-[2.5rem] border border-forestGreen/30 bg-forestGreen p-10 text-cream shadow-card md:col-span-3">
            <p className="relative font-mono text-xs uppercase tracking-[0.22em] text-cream/70">
              Le Moteur d&apos;Apprentissage
            </p>
            <h3 className="relative mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Notre moteur apprend le style de vos opérations.
            </h3>
            <p className="relative mt-6 max-w-xl font-body text-lg leading-relaxed text-cream/90">
              Il observe les séquences de travail, suggère les bons composants, et affine
              les structures de formulaire pour chaque équipe enterprise. Plus vous écrivez,
              plus il devient un partenaire silencieux et discipliné.
            </p>

            <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['Observer', 'Patterns of work, captured precisely.'],
                ['Suggérer', 'Composants and structures, proposed in cadence.'],
                ['Affiner', 'Forms become sharper with every revision.'],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-cream/15 bg-cream/5 p-4"
                >
                  <p className="font-serif text-lg text-cream">{title}</p>
                  <p className="mt-1.5 font-body text-sm text-cream/80">{copy}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="vellum-panel lift-on-hover relative isolate rounded-[2.5rem] border border-stone/20 bg-cream p-8 shadow-card md:col-span-2">
            <h3 className="font-serif text-3xl leading-tight text-charcoal">
              Système de Formes
            </h3>
            <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80">
              Bibliothèques de champs, validations contextuelles, orchestration de données, et
              expériences éditoriales pour les applications critiques.
            </p>
            <ul className="mt-6 space-y-3 font-body text-charcoal/85">
              <li className="rounded-2xl border border-stone/20 bg-white px-4 py-3">
                Enterprise onboarding flows
              </li>
              <li className="rounded-2xl border border-stone/20 bg-white px-4 py-3">
                Risk and compliance form systems
              </li>
              <li className="rounded-2xl border border-stone/20 bg-white px-4 py-3">
                Operational review workspaces
              </li>
            </ul>
          </article>
        </SectionContainer>

        <SectionContainer
          id="network"
          className="vellum-panel lift-on-hover relative isolate mx-6 mt-10 overflow-hidden rounded-[2.5rem] border border-stone/20 bg-cream px-8 py-16 shadow-card md:mx-12 md:px-12 lg:mx-auto lg:max-w-container lg:px-16"
        >
          <p className="relative font-mono text-xs uppercase tracking-[0.24em] text-stone">
            Méthode de Maison
          </p>
          <h3 className="relative mt-5 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
            Une orchestration complète, du concept au déploiement.
          </h3>
          <div className="relative mt-10 grid gap-5 md:grid-cols-4">
            {[
              ['Direction', 'Vision produit, architecture, et priorisation business.'],
              ['Design', 'Langage visuel romantique, systèmes de composants, narration UX.'],
              ['Engineering', 'Implementation full-stack, performance, sécurité, résilience.'],
              ['Stewardship', 'Itération continue, analytics, et formation des équipes.'],
            ].map(([title, copy], i) => (
              <article
                key={title}
                className="lift-on-hover rounded-[1.75rem] border border-stone/20 bg-white p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
                  0{i + 1}
                </p>
                <h4 className="mt-2 font-serif text-2xl text-charcoal">{title}</h4>
                <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/80">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer
          id="studio"
          className="romance-deep lift-on-hover relative isolate mx-6 mt-10 overflow-hidden rounded-[2.5rem] border border-forestGreen/30 bg-forestGreen px-8 py-16 text-cream shadow-card md:mx-12 md:px-12 lg:mx-auto lg:max-w-container lg:px-16"
        >
          <p className="relative font-mono text-xs uppercase tracking-[0.24em] text-cream/65">
            Atelier Numérique
          </p>
          <h3 className="relative mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            La technologie devient matière — sensible, fiable, et très précise.
          </h3>
          <p className="relative mt-8 max-w-3xl font-body text-lg leading-relaxed text-cream/85">
            Notre studio construit les expériences enterprise comme des objets de craft —
            interfaces arrondies, micro-interactions fluides, et structures capables de durer.
          </p>

          <div className="relative mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['Composition', 'Typographie, rythme, et silence visuel.'],
              ['Précision', 'Tokens, systèmes, accessibilité native.'],
              ['Pérennité', 'Architecture maintenable pour la décennie.'],
            ].map(([title, copy]) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-cream/15 bg-cream/5 p-6"
              >
                <h4 className="font-serif text-2xl text-cream">{title}</h4>
                <p className="mt-2 font-body text-sm text-cream/80">{copy}</p>
              </article>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer
          id="contact"
          className="romance-panel lift-on-hover relative isolate mx-6 mb-24 mt-10 overflow-hidden rounded-[2.5rem] border border-gold/40 bg-cream px-8 py-16 text-center shadow-card md:mx-12 lg:mx-auto lg:max-w-container"
        >
          <p className="relative font-mono text-xs uppercase tracking-[0.24em] text-stone">
            Collaboration
          </p>
          <h3 className="relative mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
            Parlons de votre prochaine application enterprise.
          </h3>
          <p className="relative mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-charcoal/80">
            Michelangelo crée des formes handcrafted, alimentées par un learning engine, pour
            les organisations qui veulent allier rigueur et élégance.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@michelangelo.agency"
              className="inline-flex items-center justify-center rounded-full bg-forestGreen px-7 py-3.5 font-body text-base text-cream transition-colors duration-500 hover:bg-gold hover:text-charcoal"
            >
              Commencer une collaboration
            </a>
            <a
              href="/manuscript"
              className="inline-flex items-center justify-center rounded-full border border-stone/40 px-7 py-3.5 font-body text-base text-charcoal transition-colors duration-500 hover:border-forestGreen hover:text-forestGreen"
            >
              Découvrir The Manuscript
            </a>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
