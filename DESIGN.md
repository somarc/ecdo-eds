# ECDO EDS — design contract

## North star

A **hypothesis lab** for Exothermic Core–Mantle Decoupling – Dzhanibekov
Oscillation (ECDO) theory. Public-facing, calm, scientifically framed.
**Not** a forecast product. **Not** survival marketing.

Sister instrument: [Wobblescope](https://github.com/somarc) (measured
Earth-system explorer). This site owns **narrative + sources**. The instrument
owns **measured lanes**.

## Epistemic banner (always on)

Every page above the fold or in the footer must carry the idea:

> **Exploratory hypothesis.** Not a prediction of catastrophe timing.
> Measured Earth signals live in the instrument; theory lives here.

## Visual language: Abyssal Instrument

Deep space and deep ocean meet a quiet lab. Iron-core warmth as accent only.
Avoid gore, panic red, countdown clocks, and conspiracy-poster typography.

| Axis | Contract |
|------|----------|
| Light | Cool abyssal fill; warm copper/iron only for emphasis (State 2, heat story) |
| Surface | Soft vignette, fine grain optional, no neon UI chrome |
| Composition | One idea per section; diagrams over spectacle when both compete |
| Globe | Pedagogical planet — State 1 vs State 2 readable at thumbnail size |
| Motion | Still-first; one short hero loop max (State 1→2 shell reorientation) |
| Type | Clean sans (boilerplate Roboto); no decorative blackletter |

## Palette

| Token | Hex | Role |
|-------|-----|------|
| `--void` | `#05070d` | Page ground |
| `--abyss` | `#0a1628` | Section wells, cards |
| `--slate-deep` | `#1a2740` | Borders, chips |
| `--ice` | `#a8c5d4` | Secondary text, State 1 cool |
| `--paper` | `#e8eef4` | Primary text |
| `--iron` | `#c4783a` | Accent, State 2 / heat |
| `--iron-bright` | `#e8a05c` | Links hover, focus |
| `--signal` | `#5b9fd4` | Links, measured callouts |
| `--warn` | `#d4a04a` | Epistemic banner edge |

## Experience shape

| Route | Job |
|-------|-----|
| `/` | Hero thesis + epistemic banner + path into States / Signals / Instrument |
| `/states` | State 1 vs State 2, 104°, 31°E, Np′ |
| `/signals` | Mag weakening, ocean-first heat, pole wander — claim vs measurable |
| `/evidence` | Monuments, inundation language, chronology — exploratory |
| `/instrument` | Bridge to Wobblescope measured instrument |
| `/sources` | Citations, transcript provenance, TES links |

Native scroll. Dense but legible. Mobile: stacked cards; desktop: optional
two-column compare on `/states`.

## Media rules

- Generated art: **no baked-in headlines, logos, UI panels, or fake citations**
- Prefer globe / planetary / geophysical metaphors over people
- Aspect: hero 16:9; cards 3:2 or 1:1
- Alt text describes the pedagogical idea, not “AI image”

## Blocks

Start with boilerplate: `hero`, `columns`, `cards`, `video-hero`. Custom blocks only when
content proves a gap (e.g. dual-state compare, epistemic callout).

## Art direction & QA

Theme tokens are not enough. For section rhythm, structural fidelity to DA markup,
still-first media, and browser acceptance criteria, see
[`docs/ART-DIRECTION-QA.md`](docs/ART-DIRECTION-QA.md) (rubric ≥17/20).
