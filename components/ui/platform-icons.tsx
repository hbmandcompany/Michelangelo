import type { SVGProps } from 'react'

const iconClass = 'h-9 w-9 text-charcoal stroke-[0.9]'

export function IconNotebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={iconClass} {...props}>
      <rect x="10" y="8" width="28" height="32" rx="2" stroke="currentColor" />
      <path d="M16 14h16M16 20h22M16 26h18M16 32h22" stroke="currentColor" />
    </svg>
  )
}

export function IconBoards(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={iconClass} {...props}>
      <rect x="8" y="10" width="14" height="18" rx="1.5" stroke="currentColor" />
      <rect x="26" y="10" width="14" height="10" rx="1.5" stroke="currentColor" />
      <rect x="26" y="26" width="14" height="14" rx="1.5" stroke="currentColor" />
    </svg>
  )
}

export function IconStudio(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={iconClass} {...props}>
      <path
        d="M10 38c6-14 22-23 28-29M18 38c10-14 26-21 31-29"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="34" cy="12" r="3" stroke="currentColor" />
    </svg>
  )
}

export function IconDrawing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={iconClass} {...props}>
      <path
        d="M12 38h24M26 38V18l6-8 8 24H14l4-26 8 26"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconNetwork(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={iconClass} {...props}>
      <circle cx="14" cy="18" r="3" stroke="currentColor" />
      <circle cx="34" cy="14" r="3" stroke="currentColor" />
      <circle cx="24" cy="34" r="3" stroke="currentColor" />
      <path d="M16.5 19.5l7 12M21 32l9-16M33.5 16.5l-7 15" stroke="currentColor" />
    </svg>
  )
}

export function IconOwnership(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={iconClass} {...props}>
      <rect x="10" y="16" width="28" height="18" rx="2" stroke="currentColor" />
      <path d="M18 24h12M18 28h8" stroke="currentColor" strokeLinecap="round" />
      <path d="M24 10v6" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}
