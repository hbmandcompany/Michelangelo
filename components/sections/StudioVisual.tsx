export function StudioVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-sm border border-stone/35 bg-charcoal/[0.04] p-8 shadow-card"
      aria-hidden
    >
      <div className="rounded-sm border border-stone/20 bg-charcoal p-7 text-cream shadow-inner md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-cream/10 pb-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone">
              Michelangelo Studio
            </p>
            <p className="mt-3 font-serif text-2xl">Flux route · temperate</p>
          </div>
          <button
            type="button"
            className="rounded-sm border border-gold/40 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em]"
            tabIndex={-1}
          >
            Compose
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.05fr_minmax(0,0.9fr)]">
          <div className="rounded-sm border border-stone/30 bg-deepBrown p-6">
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
              Prompt corpus
            </label>
            <p className="mt-5 font-serif text-xl leading-snug">
              Venetian marble dusk, temperate grain, restrained gold leaf as punctuation only —
              derived from Boards 06 & Note 218.
            </p>
          </div>
          <div className="space-y-4">
            <div className="aspect-[16/14] rounded-sm border border-white/15 bg-charcoal">
              <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-stone via-charcoal to-forestGreen">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,110,0.28),transparent_62%)] opacity-95" />
                <p className="px-6 pb-4 font-mono text-[10px] text-cream/60">
                  board refs · seeded · deterministic seed lock
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
