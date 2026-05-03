export function NotebookVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-sm border border-stone/35 bg-gradient-to-br from-white via-cream to-stone/10 p-8 shadow-card"
      aria-hidden
    >
      <div className="flex gap-6">
        <div className="hidden w-40 shrink-0 rounded-sm border border-stone/25 bg-white/90 p-4 font-mono text-[9px] leading-relaxed text-charcoal/65 md:block">
          <p className="text-forestGreen">REF · board-12</p>
          <p className="mt-3">sketch_v3.tiff</p>
          <p className="mt-1">notes/venice</p>
        </div>

        <div className="relative min-h-[260px] flex-1 rounded-sm border border-stone/20 bg-white/95 p-6">
          <div className="flex items-center justify-between border-b border-stone/15 pb-4">
            <p className="font-serif text-lg text-charcoal">Chapter · The quiet ledger</p>
            <span className="rounded-full bg-cream px-3 py-1 font-mono text-[10px] text-stone">
              local · airgap
            </span>
          </div>

          <div className="mt-5 space-y-4 font-body text-[15px] leading-[1.75] text-charcoal/88">
            <div className="relative">
              <p className="opacity-80">
                Craft is continuity: the hand recalls what the mind imagines. Intelligence should
                widen that continuity without replacing the grain of your sentences.
              </p>
              <span className="pointer-events-none absolute left-0 top-0 block h-full w-[3px] rounded-full bg-forestGreen/65" />
            </div>
            <p className="text-charcoal/55">
              [Selected paragraph — LLM suggestion docked with provenance; training remains on your
              device until you consecrate sharing.]
            </p>
          </div>

          <div className="absolute bottom-6 right-6 max-w-[200px] rounded-sm border border-forestGreen/25 bg-cream p-4 text-xs shadow-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
              Suggestion
            </p>
            <p className="mt-3 font-serif text-[13px] leading-snug text-charcoal">
              Unify the kiln metaphor with settlements — three sentences maximum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
