export function PhilosophyVisual() {
  return (
    <div className="flex flex-col gap-8" aria-hidden>
      <div className="overflow-hidden rounded-xl border border-stone/30 bg-white shadow-card">
        <div className="flex h-9 items-center gap-2 border-b border-stone/15 bg-cream/95 px-3">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-red-400/90" />
            <span className="h-2 w-2 rounded-full bg-amber-400/90" />
            <span className="h-2 w-2 rounded-full bg-emerald-600/80" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
            Michelangelo · Principles
          </span>
          <span className="ml-auto rounded border border-forestGreen/25 bg-forestGreen/10 px-2 py-0.5 font-mono text-[9px] text-forestGreen">
            Humane default
          </span>
        </div>

        <div className="grid divide-stone/15 md:grid-cols-[1fr_11rem] md:divide-x">
          <div className="space-y-3 bg-cream/40 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-forestGreen px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-cream">
                Draft · yours
              </span>
              <span className="rounded border border-stone/25 bg-white px-2 py-0.5 font-mono text-[9px] text-stone">
                Local-first
              </span>
              <span className="rounded border border-stone/20 bg-white/80 px-2 py-0.5 font-mono text-[9px] text-stone/80">
                Airgap ready
              </span>
            </div>
            <div className="rounded-lg border border-stone/20 bg-white p-3 shadow-sm">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone">Notebook</p>
              <div className="mt-2 space-y-1.5">
                <div className="h-1 rounded-sm bg-charcoal/10" />
                <div className="h-1 w-[92%] rounded-sm bg-charcoal/8" />
                <div className="h-1 w-[78%] rounded-sm bg-charcoal/8" />
                <div className="mt-2 border-l-2 border-gold pl-2">
                  <div className="h-1 w-[88%] rounded-sm bg-charcoal/12" />
                  <div className="mt-1 h-1 w-[70%] rounded-sm bg-charcoal/8" />
                </div>
              </div>
              <p className="mt-3 font-mono text-[8px] text-stone/70">Voice preserved · no laundering</p>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-stone/20 bg-white px-3 py-2">
              <span className="font-mono text-[9px] text-stone">Network</span>
              <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-stone/20">
                <span className="inline-block h-4 w-4 translate-x-0.5 rounded-full bg-white shadow" />
              </span>
              <span className="font-mono text-[9px] text-stone/70">Solitude first</span>
            </div>
          </div>

          <aside className="bg-white p-3 md:bg-cream/30">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone">Lineage</p>
            <ul className="mt-2 space-y-2 font-mono text-[9px] text-charcoal/80">
              <li className="flex items-center justify-between gap-1 rounded border border-stone/15 bg-cream/80 px-2 py-1.5">
                <span>Sketch</span>
                <span className="text-stone">→</span>
                <span className="text-forestGreen">sealed</span>
              </li>
              <li className="flex items-center justify-between gap-1 rounded border border-stone/15 bg-cream/80 px-2 py-1.5">
                <span>Notebook</span>
                <span className="text-stone">→</span>
                <span className="text-forestGreen">indexed</span>
              </li>
              <li className="flex items-center justify-between gap-1 rounded border border-stone/15 bg-cream/80 px-2 py-1.5">
                <span>Settlement</span>
                <span className="text-stone">→</span>
                <span className="rounded bg-gold/25 px-1 text-[8px] text-charcoal">ledger</span>
              </li>
            </ul>
            <div className="mt-3 rounded border border-forestGreen/20 bg-forestGreen/5 p-2 text-center font-mono text-[8px] leading-relaxed text-forestGreen">
              Analog + algorithmic · one temperament
            </div>
          </aside>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-stone/25 bg-white p-6 shadow-card md:p-8">
        <div className="mb-3 flex items-center gap-2 border-b border-stone/10 pb-3">
          <span className="rounded border border-stone/20 bg-cream px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-stone">
            Statement
          </span>
          <span className="font-mono text-[9px] text-stone/70">Read-only · pinned</span>
        </div>
        <blockquote className="font-serif text-xl font-normal leading-snug tracking-tight text-charcoal md:text-2xl">
          “The artist, the engineer, the contractor, and the owner can be, once again, the same
          person.”
        </blockquote>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
        Interface mock · editorial chrome only
      </p>
    </div>
  )
}
