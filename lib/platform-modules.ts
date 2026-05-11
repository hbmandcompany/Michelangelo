export const PLATFORM_SLUGS = [
  'notebook',
  'boards',
  'studio',
  'drawing',
  'network',
  'ownership',
] as const

export type PlatformSlug = (typeof PLATFORM_SLUGS)[number]

export type PlatformCardItem = {
  slug: PlatformSlug
  title: string
  description: string
  /** Visual recipe for the card chrome */
  variant: 'ledger' | 'carte' | 'atelier' | 'folio' | 'constellation' | 'coffer'
  /** Roman numeral for regimental / editorial framing */
  ordre: string
}

export const platformCardItems: readonly PlatformCardItem[] = [
  {
    slug: 'notebook',
    title: 'Notebook',
    description:
      'Long-form narration with calibrated assistance: citations, semantic recall, and a voice that strengthens yours rather than impersonating it.',
    variant: 'ledger',
    ordre: 'I',
  },
  {
    slug: 'boards',
    title: 'Boards',
    description:
      'Spatial thinking for motifs, palettes, timelines, and research — the wall of atelier reworked into an instrument.',
    variant: 'carte',
    ordre: 'II',
  },
  {
    slug: 'studio',
    title: 'Studio',
    description:
      'Controlled generation routed through your references so scale never severs coherence from lineage.',
    variant: 'atelier',
    ordre: 'III',
  },
  {
    slug: 'drawing',
    title: 'Drawing',
    description:
      'Paper-first capture with restrained digital augmentation — stroke fidelity, lineage, progression without spectacle.',
    variant: 'folio',
    ordre: 'IV',
  },
  {
    slug: 'network',
    title: 'Network',
    description:
      'A discovery ledger tuned to output integrity, reciprocity among peers, and the slow reputation of mastery.',
    variant: 'constellation',
    ordre: 'V',
  },
  {
    slug: 'ownership',
    title: 'Ownership',
    description:
      'Settlement that mirrors consequence: cryptographic provenance paired with humane governance and patient economics.',
    variant: 'coffer',
    ordre: 'VI',
  },
] as const

export function isPlatformSlug(s: string): s is PlatformSlug {
  return (PLATFORM_SLUGS as readonly string[]).includes(s)
}

export function getPlatformCardItem(slug: string): PlatformCardItem | undefined {
  return platformCardItems.find((p) => p.slug === slug)
}

export type PlatformDetailSection = {
  heading: string
  body: string
}

export type PlatformDetail = {
  slug: PlatformSlug
  heroTitle: string
  heroSubtitle: string
  heroLead: string
  ordre: string
  sections: PlatformDetailSection[]
}

export const platformDetails: Record<PlatformSlug, PlatformDetail> = {
  notebook: {
    slug: 'notebook',
    ordre: 'I',
    heroTitle: 'Notebook',
    heroSubtitle: 'Long-form command of language',
    heroLead:
      'Calibrated assistance, citations, and semantic recall — tuned so the machine amplifies your voice instead of replacing it.',
    sections: [
      {
        heading: 'Provenance beside every paragraph',
        body: 'Suggestions arrive with lineage: sources, confidence, and the option to keep drafts air-gapped until you choose to share.',
      },
      {
        heading: 'Rhythm built for chapters, not chat bubbles',
        body: 'Optical margins, serif rhythm, and keyboard-first navigation make serious writing feel as disciplined as field orders.',
      },
      {
        heading: 'Assistance that defers to authorship',
        body: 'The model strengthens diction and structure while refusing to impersonate — a staff officer to the general, never the general.',
      },
    ],
  },
  boards: {
    slug: 'boards',
    ordre: 'II',
    heroTitle: 'Boards',
    heroSubtitle: 'Cartography of ideas',
    heroLead:
      'Motifs, palettes, timelines, and research tessellated on a wall of war — spatial intelligence without losing the thread of intent.',
    sections: [
      {
        heading: 'The atelier wall, digitized',
        body: 'Tiles snap to a grid that respects scale: from pigment studies to campaign timelines in one field of view.',
      },
      {
        heading: 'Distance and bearing at a glance',
        body: 'Zoom levels and grouping mirror how staffs read maps — overview first, then decisive detail on demand.',
      },
      {
        heading: 'Materials stay tethered to output',
        body: 'Every card links forward to documents and settlements so research never floats untethered from consequence.',
      },
    ],
  },
  studio: {
    slug: 'studio',
    ordre: 'III',
    heroTitle: 'Studio',
    heroSubtitle: 'Controlled generation under reference',
    heroLead:
      'Scale and coherence are not traded away: generation routes through your library so lineage survives every iteration.',
    sections: [
      {
        heading: 'References as law',
        body: 'Pallets, sketches, and prior passes constrain the model — no drift into generic style when the brief is sovereign.',
      },
      {
        heading: 'Passes you can court-martial',
        body: 'Each render is versioned, diffable, and attributable — suitable for audit trails in enterprise studios.',
      },
      {
        heading: 'Throughput without spectacle',
        body: 'Batch operations and queues feel industrial, not theatrical — built for campaigns that outlast a single sprint.',
      },
    ],
  },
  drawing: {
    slug: 'drawing',
    ordre: 'IV',
    heroTitle: 'Drawing',
    heroSubtitle: 'Paper-first fidelity',
    heroLead:
      'Stroke fidelity, lineage, and restrained augmentation — the sketchbook as instrument, not a filter rack.',
    sections: [
      {
        heading: 'Grain preserved under glass',
        body: 'Pressure curves and pencil texture remain legible; digital layers sit beneath annotation, never smothering the hand.',
      },
      {
        heading: 'Progression without noise',
        body: 'Timelines of revisions read like a folio of studies — each plate dated and ordered for review.',
      },
      {
        heading: 'Augmentation that knows its rank',
        body: 'Vectorization and cleanup suggest quietly; the artist dismisses or accepts with a single gesture.',
      },
    ],
  },
  network: {
    slug: 'network',
    ordre: 'V',
    heroTitle: 'Network',
    heroSubtitle: 'Ledger of peers and mastery',
    heroLead:
      'Discovery tuned to output integrity, reciprocity, and the slow reputation of mastery — not vanity metrics.',
    sections: [
      {
        heading: 'Integrity before reach',
        body: 'Surfaces emphasize finished work and attestations rather than follower counts — a mess hall board, not a billboard.',
      },
      {
        heading: 'Reciprocity as currency',
        body: 'Collaborations leave mutual endorsements tied to artifacts, building trust that compounds over years.',
      },
      {
        heading: 'Reputation at campaign tempo',
        body: 'Signals aggregate on long horizons so flash trends cannot wash out craftsmen who ship.',
      },
    ],
  },
  ownership: {
    slug: 'ownership',
    ordre: 'VI',
    heroTitle: 'Ownership',
    heroSubtitle: 'Settlement that mirrors consequence',
    heroLead:
      'Cryptographic provenance, humane governance, and patient economics — ownership as a humane default, restored.',
    sections: [
      {
        heading: 'Provenance you can muster in court',
        body: 'Chains of custody attach to files and revenue splits with clarity suitable for counsel and counterparties.',
      },
      {
        heading: 'Governance without cruelty',
        body: 'Voting and vesting follow legible rules; defaults favor creators while leaving room for collective stewardship.',
      },
      {
        heading: 'Economics measured in decades',
        body: 'Royalties and secondary flows accrue with transparency — the treasury desk as disciplined as the front line.',
      },
    ],
  },
}
