'use client'

import type { PlatformSlug } from '@/lib/platform-modules'

type Size = 'card' | 'hero'

function WindowDots({ dense }: { dense: boolean }) {
  const s = dense ? 'h-1.5 w-1.5' : 'h-2 w-2'
  return (
    <span className="flex gap-1" aria-hidden>
      <span className={`rounded-full bg-red-400/80 ${s}`} />
      <span className={`rounded-full bg-amber-400/80 ${s}`} />
      <span className={`rounded-full bg-emerald-500/70 ${s}`} />
    </span>
  )
}

function NotebookUIMock({ dense }: { dense: boolean }) {
  const t = dense ? 'text-[6.5px] md:text-[7.5px]' : 'text-[11px] sm:text-xs'
  const bar = dense ? 'h-5 px-1.5' : 'h-8 px-3'
  const tool = dense ? 'h-2.5 w-2.5' : 'h-4 w-4'
  return (
    <div
      className={`overflow-hidden rounded-md border border-stone/30 bg-white text-charcoal shadow-sm ${
        dense ? 'text-charcoal' : 'rounded-lg shadow-md'
      }`}
    >
      <div
        className={`flex items-center gap-2 border-b border-stone/15 bg-cream/95 ${bar}`}
      >
        <WindowDots dense={dense} />
        <span className={`truncate font-mono text-stone ${t}`}>Notebook · Chapter_04.md</span>
      </div>
      <div className={`flex items-center gap-1.5 border-b border-stone/10 bg-cream/70 ${dense ? 'h-5 px-1.5' : 'h-9 px-2'}`}>
        <span className={`rounded border border-stone/20 bg-white ${tool}`} />
        <span className={`rounded border border-stone/20 bg-white ${tool}`} />
        <span className={`rounded border border-stone/20 bg-white ${tool}`} />
        <span className={`ml-auto rounded border border-stone/25 bg-white px-1 font-mono text-stone ${dense ? 'text-[6px] py-0' : 'text-[10px] py-0.5'}`}>
          Body
        </span>
      </div>
      <div className={dense ? 'flex min-h-[4.5rem]' : 'flex min-h-[11rem]'}>
        <div className="hidden w-[18%] shrink-0 border-r border-stone/10 bg-stone/[0.04] sm:block">
          <p className={`p-1 font-mono text-stone ${dense ? 'text-[6px]' : 'text-[9px]'}`}>Outline</p>
          <div className={`mx-1 rounded bg-forestGreen/10 font-mono text-forestGreen ${dense ? 'px-0.5 py-0.5 text-[6px]' : 'px-1 py-1 text-[9px]'}`}>
            I. Thesis
          </div>
        </div>
        <div className={`min-w-0 flex-1 space-y-1 bg-white ${dense ? 'p-1.5' : 'p-3'}`}>
          <div className={`rounded-sm bg-charcoal/[0.07] ${dense ? 'h-0.5' : 'h-1'}`} />
          <div className={`rounded-sm bg-charcoal/[0.06] ${dense ? 'h-0.5 w-[92%]' : 'h-1 w-[88%]'}`} />
          <div className={`border-l-2 border-gold pl-1.5 ${dense ? 'mt-1' : 'mt-2'}`}>
            <p className={`font-serif text-charcoal/85 ${dense ? 'text-[6.5px] leading-snug' : 'text-sm leading-relaxed'}`}>
              Calibrated assistance appears with citations…
            </p>
          </div>
          <div
            className={`mt-1 flex items-center gap-1 rounded border border-forestGreen/20 bg-cream font-mono text-forestGreen ${
              dense ? 'px-1 py-0.5 text-[6px]' : 'px-2 py-1 text-[10px]'
            }`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-forestGreen/60" />
            Suggestion · 2 sources
          </div>
        </div>
      </div>
    </div>
  )
}

function BoardsUIMock({ dense }: { dense: boolean }) {
  const pad = dense ? 'p-1 gap-0.5' : 'p-2 gap-1.5'
  const card = dense ? 'rounded p-1' : 'rounded-md p-2'
  const label = dense ? 'text-[6px]' : 'text-[10px]'
  return (
    <div
      className={`overflow-hidden rounded-md border border-stone/30 bg-cream text-charcoal shadow-sm ${dense ? '' : 'rounded-lg shadow-md'}`}
    >
      <div
        className={`flex items-center justify-between border-b border-stone/15 bg-white ${dense ? 'h-5 px-1.5' : 'h-8 px-2'}`}
      >
        <WindowDots dense={dense} />
        <span className={`font-mono text-stone ${label}`}>Boards · Research wall</span>
        <span className={`rounded bg-stone/10 font-mono text-stone ${dense ? 'px-1 text-[5px]' : 'px-1.5 text-[9px]'}`}>
          100%
        </span>
      </div>
      <div className={`grid grid-cols-2 ${pad}`}>
        <div className={`${card} border border-stone/25 bg-white`}>
          <div className={`mb-1 flex gap-0.5 ${dense ? '' : 'mb-2'}`}>
            <span className={`rounded-sm bg-forestGreen/30 ${dense ? 'h-2 w-2' : 'h-3 w-3'}`} />
            <span className={`rounded-sm bg-gold/50 ${dense ? 'h-2 w-2' : 'h-3 w-3'}`} />
            <span className={`rounded-sm bg-stone/35 ${dense ? 'h-2 w-2' : 'h-3 w-3'}`} />
          </div>
          <p className={`font-serif text-charcoal ${dense ? 'text-[6px]' : 'text-xs'}`}>Palette A</p>
        </div>
        <div className={`${card} border border-stone/25 bg-white`}>
          <div className={`rounded-sm bg-stone/15 ${dense ? 'mb-1 h-6' : 'mb-2 h-10'}`} />
          <p className={`font-mono text-stone ${label}`}>Timeline</p>
        </div>
        <div className={`${card} col-span-2 border border-stone/25 bg-white`}>
          <div className={`flex gap-1 ${dense ? '' : 'gap-2'}`}>
            <div className={`flex-1 rounded-sm border border-dashed border-stone/30 bg-cream/80 ${dense ? 'h-8' : 'h-14'}`} />
            <div className={`w-[28%] rounded-sm border border-stone/20 bg-cream ${dense ? 'h-8' : 'h-14'}`} />
          </div>
          <p className={`mt-1 font-body text-charcoal/70 ${dense ? 'text-[6px]' : 'text-[11px]'}`}>
            Spatial cards · drag to reorder
          </p>
        </div>
      </div>
    </div>
  )
}

function StudioUIMock({ dense }: { dense: boolean }) {
  const col = dense ? 'min-h-[4.5rem]' : 'min-h-[10rem]'
  return (
    <div
      className={`overflow-hidden rounded-md border border-stone/30 bg-white text-charcoal shadow-sm ${dense ? '' : 'rounded-lg'}`}
    >
      <div className={`flex items-center gap-2 border-b border-stone/15 bg-cream/95 ${dense ? 'h-5 px-1.5' : 'h-8 px-3'}`}>
        <WindowDots dense={dense} />
        <span className={`truncate font-mono text-stone ${dense ? 'text-[6px]' : 'text-[11px]'}`}>
          Studio · Pass 06
        </span>
      </div>
      <div className={`grid grid-cols-[1fr_1.1fr] gap-px bg-stone/15 ${dense ? '' : ''}`}>
        <div className={`space-y-1 bg-forestGreen/[0.06] p-1.5 ${col}`}>
          <p className={`font-mono uppercase tracking-wide text-stone ${dense ? 'text-[5px]' : 'text-[9px]'}`}>
            References
          </p>
          <div className={`rounded border border-stone/20 bg-white ${dense ? 'p-1 text-[6px]' : 'p-2 text-[10px]'} font-mono text-charcoal/80`}>
            locked refs · 12 images
          </div>
          <div className={`rounded border border-stone/15 bg-cream ${dense ? 'h-6' : 'h-16'} p-1 font-mono text-stone ${dense ? 'text-[5px]' : 'text-[9px]'}`}>
            Prompt: extend motif…
          </div>
        </div>
        <div className={`flex flex-col bg-cream/50 ${col}`}>
          <div className={`border-b border-stone/10 px-1.5 py-0.5 font-mono text-stone ${dense ? 'text-[5px]' : 'text-[9px]'}`}>
            Output preview
          </div>
          <div className={`flex flex-1 items-center justify-center bg-white ${dense ? 'm-1' : 'm-2'} rounded border border-stone/20`}>
            <div className={`rounded-md bg-stone/15 ${dense ? 'h-12 w-[85%]' : 'h-24 w-[88%]'}`} />
          </div>
          <div className={`flex justify-end gap-1 border-t border-stone/10 p-1 ${dense ? '' : 'p-2'}`}>
            <span className={`rounded border border-stone/30 bg-white font-mono text-stone ${dense ? 'px-1 py-0 text-[5px]' : 'px-2 py-0.5 text-[9px]'}`}>
              Discard
            </span>
            <span className={`rounded bg-forestGreen font-mono text-cream ${dense ? 'px-1 py-0 text-[5px]' : 'px-2 py-0.5 text-[9px]'}`}>
              Commit
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function DrawingUIMock({ dense }: { dense: boolean }) {
  const tool = dense ? 'h-2.5 w-2.5' : 'h-4 w-4'
  return (
    <div
      className={`overflow-hidden rounded-md border border-stone/35 bg-[#fbfaf8] text-charcoal shadow-sm ${dense ? '' : 'rounded-lg'}`}
    >
      <div className={`flex items-center gap-2 border-b border-stone/20 bg-white ${dense ? 'h-5 px-1' : 'h-8 px-2'}`}>
        <WindowDots dense={dense} />
        <span className={`font-mono text-stone ${dense ? 'text-[6px]' : 'text-[11px]'}`}>Drawing · Sheet 2</span>
      </div>
      <div className={`flex items-center gap-1 border-b border-stone/15 bg-cream/90 ${dense ? 'h-5 px-1' : 'h-9 px-2'}`}>
        <span className={`rounded border border-stone/30 bg-white ${tool}`} />
        <span className={`rounded border border-stone/30 bg-white ${tool}`} />
        <span className={`rounded border border-forestGreen/40 bg-forestGreen/10 ${tool}`} />
        <span className={`ml-auto rounded bg-stone/15 font-mono text-stone ${dense ? 'px-1 text-[5px]' : 'px-1.5 text-[9px]'}`}>
          Pencil · 2B
        </span>
      </div>
      <div className={`relative bg-white ${dense ? 'm-1 min-h-[4.5rem]' : 'm-2 min-h-[10rem]'} rounded border border-stone/25`}>
        <div className="pointer-events-none absolute left-[12%] top-2 bottom-2 w-px bg-stone/20" />
        <div
          className={`absolute left-[18%] right-[10%] top-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-charcoal/35 ${
            dense ? 'h-8 rotate-[-8deg]' : 'h-14 rotate-[-6deg]'
          }`}
        />
        <div className={`absolute bottom-1 right-1 rounded border border-stone/20 bg-cream font-mono text-stone ${dense ? 'px-1 text-[5px]' : 'px-1.5 text-[8px]'}`}>
          Layers · 4
        </div>
      </div>
    </div>
  )
}

function NetworkUIMock({ dense }: { dense: boolean }) {
  const row = dense ? 'gap-1.5 px-1.5 py-1' : 'gap-3 px-3 py-2'
  const av = dense ? 'h-4 w-4 text-[6px]' : 'h-8 w-8 text-[10px]'
  return (
    <div
      className={`overflow-hidden rounded-md border border-stone/30 bg-white text-charcoal shadow-sm ${dense ? '' : 'rounded-lg'}`}
    >
      <div className={`flex items-center justify-between border-b border-stone/15 bg-cream/95 ${dense ? 'h-5 px-1.5' : 'h-8 px-3'}`}>
        <span className={`font-mono text-stone ${dense ? 'text-[6px]' : 'text-[11px]'}`}>Network · Discover</span>
        <span className={`rounded-full bg-stone/15 font-mono text-stone ${dense ? 'px-1 text-[5px]' : 'px-2 text-[9px]'}`}>
          For you
        </span>
      </div>
      <div className={`divide-y divide-stone/10 ${dense ? '' : ''}`}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={`flex items-center ${row}`}>
            <div
              className={`flex shrink-0 items-center justify-center rounded-full bg-forestGreen/15 font-serif font-medium text-forestGreen ${av}`}
            >
              {String.fromCharCode(64 + i)}
            </div>
            <div className="min-w-0 flex-1">
              <p className={`truncate font-medium text-charcoal ${dense ? 'text-[7px]' : 'text-xs'}`}>
                Atelier collective {i}
              </p>
              <p className={`truncate text-stone ${dense ? 'text-[5.5px]' : 'text-[10px]'}`}>
                Last work · integrity score 0.9{i}
              </p>
            </div>
            <span
              className={`shrink-0 rounded-full border border-stone/30 bg-white font-mono text-charcoal ${dense ? 'px-1.5 py-0 text-[5px]' : 'px-2 py-0.5 text-[9px]'}`}
            >
              Follow
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function OwnershipUIMock({ dense }: { dense: boolean }) {
  const th = dense ? 'px-1 py-0.5 text-[5.5px]' : 'px-2 py-1.5 text-[9px]'
  const td = dense ? 'px-1 py-0.5 text-[6px]' : 'px-2 py-1.5 text-[10px]'
  return (
    <div
      className={`overflow-hidden rounded-md border border-stone/30 bg-white text-charcoal shadow-sm ${dense ? '' : 'rounded-lg'}`}
    >
      <div className={`flex items-center gap-2 border-b border-stone/15 bg-cream/95 ${dense ? 'h-5 px-1.5' : 'h-8 px-3'}`}>
        <WindowDots dense={dense} />
        <span className={`font-mono text-stone ${dense ? 'text-[6px]' : 'text-[11px]'}`}>Ownership · Ledger</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[100%] border-collapse text-left">
          <thead>
            <tr className="border-b border-stone/15 bg-forestGreen/10 font-mono uppercase tracking-wider text-stone">
              <th className={th}>Party</th>
              <th className={th}>Asset</th>
              <th className={th}>Hash</th>
              <th className={th}>Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone/10 font-mono text-charcoal/85">
            <tr>
              <td className={td}>Studio A</td>
              <td className={td}>Edition /12</td>
              <td className={`${td} max-w-[4rem] truncate text-stone`}>0x71…c4</td>
              <td className={td}>
                <span className="rounded-full bg-emerald-500/15 px-1 text-emerald-800">Sealed</span>
              </td>
            </tr>
            <tr>
              <td className={td}>Collective</td>
              <td className={td}>Royalty route</td>
              <td className={`${td} max-w-[4rem] truncate text-stone`}>0x9e…21</td>
              <td className={td}>
                <span className="rounded-full bg-gold/25 px-1 text-charcoal">Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function PlatformIllustration({
  slug,
  size,
}: {
  slug: PlatformSlug
  size: Size
}) {
  const dense = size === 'card'
  const wrap = dense
    ? 'h-full w-full max-h-[9rem]'
    : 'w-full max-w-2xl min-h-[240px] sm:min-h-[280px]'
  switch (slug) {
    case 'notebook':
      return (
        <div className={wrap} aria-hidden>
          <NotebookUIMock dense={dense} />
        </div>
      )
    case 'boards':
      return (
        <div className={wrap} aria-hidden>
          <BoardsUIMock dense={dense} />
        </div>
      )
    case 'studio':
      return (
        <div className={wrap} aria-hidden>
          <StudioUIMock dense={dense} />
        </div>
      )
    case 'drawing':
      return (
        <div className={wrap} aria-hidden>
          <DrawingUIMock dense={dense} />
        </div>
      )
    case 'network':
      return (
        <div className={wrap} aria-hidden>
          <NetworkUIMock dense={dense} />
        </div>
      )
    case 'ownership':
      return (
        <div className={wrap} aria-hidden>
          <OwnershipUIMock dense={dense} />
        </div>
      )
    default:
      return null
  }
}

export function PlatformHeroIllustration({ slug }: { slug: PlatformSlug }) {
  return (
    <div className="w-full text-charcoal" aria-hidden>
      <PlatformIllustration slug={slug} size="hero" />
    </div>
  )
}
