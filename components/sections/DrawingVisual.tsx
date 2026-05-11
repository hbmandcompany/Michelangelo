export function DrawingVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-stone/30 bg-white p-4 shadow-card md:p-6"
      aria-hidden
    >
      <div className="overflow-hidden rounded-lg border border-stone/25 bg-cream/40 shadow-inner">
        <div className="flex h-9 items-center gap-2 border-b border-stone/15 bg-cream/90 px-3">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-red-400/90" />
            <span className="h-2 w-2 rounded-full bg-amber-400/90" />
            <span className="h-2 w-2 rounded-full bg-emerald-600/80" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
            Drawing · Paper Mode
          </span>
          <span className="ml-auto rounded border border-stone/25 bg-white px-2 py-0.5 font-mono text-[9px] text-forestGreen">
            Live capture
          </span>
        </div>

        <div className="flex h-9 items-center gap-1.5 border-b border-stone/10 bg-white px-2">
          {['Pencil', 'Ink', 'Grain', 'Layers'].map((t) => (
            <span
              key={t}
              className={`rounded px-2 py-1 font-mono text-[9px] ${t === 'Pencil' ? 'bg-forestGreen/15 text-forestGreen ring-1 ring-forestGreen/25' : 'text-stone/80'}`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid gap-0 md:grid-cols-[1fr_minmax(0,11.5rem)] md:divide-x md:divide-stone/15">
          <div className="relative min-h-[220px] bg-[#faf9f7] p-3 md:min-h-[280px] md:p-4">
            <div className="pointer-events-none absolute left-3 top-3 bottom-3 w-px bg-stone/25 md:left-4" />
            <div className="relative ml-5 h-full min-h-[180px] rounded-md border border-stone/20 bg-white shadow-sm md:ml-6 md:min-h-[220px]">
              <div className="absolute inset-3 rounded-sm border border-forestGreen/20 bg-cream/30">
                <div className="absolute left-2 top-1/4 h-16 w-0.5 rounded-full bg-gold/85" />
                <div className="absolute left-[18%] right-[12%] top-[38%] h-0.5 rotate-[-8deg] rounded-full bg-charcoal/55" />
                <div className="absolute left-[22%] right-[18%] top-[48%] h-0.5 rotate-[-5deg] rounded-full bg-charcoal/40" />
                <div className="absolute left-[28%] right-[10%] top-[58%] h-0.5 rotate-[-7deg] rounded-full bg-charcoal/35" />
              </div>
              <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-stone/20 bg-charcoal px-3 py-1.5 font-mono text-[9px] text-cream shadow-md">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                stroke track
              </div>
            </div>
          </div>

          <aside className="space-y-4 border-t border-stone/15 bg-white p-4 md:border-t-0 md:bg-cream/50">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-stone">Inspector</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone/80">capture · handset</p>
            <div className="space-y-2 rounded-lg border border-stone/20 bg-cream/80 p-3 font-mono text-[11px] text-charcoal/75">
              <p>Variance: axial · 92%</p>
              <p>Hesitation marks: conserved</p>
              <p>Skill vector: graphite · level 06</p>
            </div>
            <div className="rounded-lg border border-gold/35 bg-cream p-4 font-serif text-sm leading-snug text-charcoal/90">
              “We watch the graphite like a fresco restorer listens for plaster — softly, patiently.”
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
