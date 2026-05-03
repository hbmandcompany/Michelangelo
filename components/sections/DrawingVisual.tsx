export function DrawingVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-sm border border-stone/35 bg-deepBrown/10 p-8 shadow-card"
      aria-hidden
    >
      <div className="grid gap-6 md:grid-cols-[1.05fr_minmax(0,0.95fr)] md:items-center">
        <div className="relative aspect-[10/13] rounded-sm border border-charcoal/10 bg-charcoal/10 shadow-inner">
          <div className="absolute inset-[12%] rounded-sm bg-white opacity-95 shadow-sm">
            {/* Simulated graphite strokes */}
            <svg className="h-full w-full" viewBox="0 0 200 260" aria-hidden preserveAspectRatio="none">
              <path
                d="M48 206c52-118 138-174 154-174"
                fill="none"
                stroke="#2b2b2b"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M74 226c82-148 154-218 174-226"
                fill="none"
                stroke="#2b2b2b55"
                strokeWidth="1.3"
              />
              <path
                d="M118 246c76-154 154-246 206-272"
                fill="none"
                stroke="#2b2b2b77"
                strokeWidth="2"
              />
            </svg>

            {/* Camera-aligned overlay */}
            <div className="pointer-events-none absolute inset-[8%] rounded-sm border border-forestGreen/35">
              <div className="absolute -left-1 top-1/3 h-12 w-1 rounded-full bg-gold/80" />
              <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 font-mono text-[10px] text-cream">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-success" /> stroke
                track
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-sm border border-stone/25 bg-white/90 p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-stone">
            capture · handset
          </p>
          <div className="space-y-2 font-mono text-xs text-charcoal/70">
            <p>Variance: axial · 92%</p>
            <p>Hesitation marks: conserved</p>
            <p>Skill vector: graphite · level 06</p>
          </div>
          <div className="rounded-sm bg-cream p-5 font-serif text-lg leading-snug text-charcoal/90">
            “We watch the graphite like a fresco restorer listens for plaster — softly, patiently.”
          </div>
        </div>
      </div>
    </div>
  )
}
