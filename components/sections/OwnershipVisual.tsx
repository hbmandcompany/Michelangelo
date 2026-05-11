export function OwnershipVisual() {
  return (
    <div
      className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-xl border border-stone/30 bg-cream text-charcoal shadow-card"
      aria-hidden
    >
      <div className="flex h-10 items-center justify-between border-b border-stone/15 bg-white px-3 md:px-4">
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-red-400/90" />
          <span className="h-2 w-2 rounded-full bg-amber-400/90" />
          <span className="h-2 w-2 rounded-full bg-emerald-600/80" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
          Treasury · Michelangelo
        </span>
        <span className="rounded border border-stone/20 bg-cream px-2 py-0.5 font-mono text-[9px] text-stone">
          Mainnet off
        </span>
      </div>

      <div className="flex flex-wrap gap-1 border-b border-stone/15 bg-cream/90 p-2">
        {(['Create', 'Organize', 'Mint', 'Earn'] as const).map((label, i) => (
          <span
            key={label}
            className={`rounded-md px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide ${
              i === 0
                ? 'bg-forestGreen text-cream shadow-sm'
                : 'border border-transparent text-stone hover:border-stone/25 hover:bg-white'
            }`}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="grid gap-4 bg-white p-4 md:grid-cols-[1.1fr_0.9fr] md:p-5">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone">Positions</p>
          <div className="mt-2 overflow-hidden rounded-lg border border-stone/20">
            <table className="w-full border-collapse text-left font-mono text-[10px] md:text-[11px]">
              <thead>
                <tr className="border-b border-stone/15 bg-forestGreen/10 text-stone">
                  <th className="px-2 py-2 font-normal">Asset</th>
                  <th className="px-2 py-2 font-normal">Chain</th>
                  <th className="px-2 py-2 font-normal">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone/10 text-charcoal/85">
                <tr>
                  <td className="px-2 py-2">Edition 04</td>
                  <td className="px-2 py-2 text-stone">Stellar</td>
                  <td className="px-2 py-2">
                    <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-emerald-800">Settled</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2">Ether Bond · I</td>
                  <td className="px-2 py-2 text-stone">Polygon</td>
                  <td className="px-2 py-2">
                    <span className="rounded-full bg-gold/25 px-1.5 py-0.5 text-charcoal">Open</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg border border-stone/20 bg-cream/60 p-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone">Michelangelo Coin</p>
            <p className="mt-2 font-serif text-lg text-charcoal">Circulation · slow reputation</p>
            <p className="mt-2 font-body text-xs leading-relaxed text-charcoal/75">
              Provenance visible on every transfer. Revocable marketplace hooks when policy demands.
            </p>
          </div>
          <div className="mt-4 rounded-md border border-gold/40 bg-white px-3 py-2 text-center font-mono text-[10px] text-forestGreen">
            Ether Bonds · inquire via early access
          </div>
        </div>
      </div>
    </div>
  )
}
