export function StudioVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-stone/30 bg-cream p-4 shadow-card md:p-6"
      aria-hidden
    >
      <div className="overflow-hidden rounded-lg border border-stone/25 bg-charcoal text-cream shadow-inner">
        <div className="flex h-10 flex-wrap items-center justify-between gap-3 border-b border-cream/10 bg-charcoal px-3 md:px-4">
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-stone">Michelangelo Studio</p>
            <p className="mt-0.5 truncate font-serif text-lg md:text-xl">Flux route · temperate</p>
          </div>
          <span className="shrink-0 rounded-full border border-gold/50 bg-gold/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-gold">
            Compose
          </span>
        </div>

        <div className="grid gap-4 bg-charcoal p-4 md:grid-cols-[1.05fr_minmax(0,0.95fr)] md:gap-5 md:p-5">
          <div className="flex flex-col rounded-lg border border-stone/40 bg-deepBrown/40 p-4">
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone">Prompt corpus</label>
            <div className="mt-3 min-h-[7.5rem] rounded-md border border-stone/30 bg-charcoal/80 p-3 font-serif text-base leading-relaxed text-cream/95 md:min-h-[9rem] md:text-lg">
              Venetian marble dusk, temperate grain, restrained gold leaf as punctuation only —
              derived from Boards 06 & Note 218.
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded border border-cream/15 bg-cream/5 px-2 py-0.5 font-mono text-[9px] text-cream/70">
                board refs
              </span>
              <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-200/90">
                seeded
              </span>
              <span className="rounded border border-gold/35 bg-gold/10 px-2 py-0.5 font-mono text-[9px] text-gold/90">
                deterministic seed lock
              </span>
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-cream/10 bg-charcoal/60">
            <div className="border-b border-cream/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-stone">
              Output preview
            </div>
            <div className="flex flex-1 flex-col p-3">
              <div className="grid flex-1 grid-cols-2 gap-2 rounded-md border border-cream/10 bg-charcoal p-2">
                <div className="rounded-sm bg-stone/40" />
                <div className="rounded-sm bg-forestGreen/50" />
                <div className="rounded-sm bg-gold/35" />
                <div className="rounded-sm bg-stone/25" />
              </div>
              <p className="mt-2 font-mono text-[9px] leading-relaxed text-cream/55">
                board refs · seeded · deterministic seed lock
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
