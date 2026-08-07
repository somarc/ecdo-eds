# ECDO Lab (EDS)

**Hypothesis lab** for Exothermic Core–Mantle Decoupling – Dzhanibekov Oscillation (ECDO) theory on Adobe Edge Delivery Services.

> Exploratory hypothesis — not a forecast. Measured Earth-system data lives in the sister instrument (Wobblescope: `../ecdo`).

| | |
|--|--|
| **GitHub** | https://github.com/somarc/ecdo-eds |
| **Preview** | https://main--ecdo-eds--somarc.aem.page/ |
| **Live** | https://main--ecdo-eds--somarc.aem.live/ |
| **DA** | https://da.live/#/somarc/ecdo-eds/ |
| **Org / repo** | `somarc` / `ecdo-eds` |

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Thesis + epistemic posture |
| `/states` | State 1 vs State 2, 104°, Np′ |
| `/signals` | Claim vs measurable signals |
| `/evidence` | Touchpoints (exploratory) |
| `/instrument` | Bridge to Wobblescope |
| `/sources` | Citations & provenance |

## Design

See [`DESIGN.md`](DESIGN.md) — Abyssal Instrument palette and epistemic rules.

## Local development

```bash
npm install
npx aem up
```

Content is DA-mounted via `fstab.yaml` → `https://content.da.live/somarc/ecdo-eds/`.

## Setup (first run)

Human steps (AEM Code Sync + DA auth + content seed):

→ **[`docs/SETUP.md`](docs/SETUP.md)**

## Content source of truth

Authorable HTML lives under `da-content/` for seeding and review, then in DA:

```bash
da auth status
da --commit content put /index.html da-content/index.html
da preview page /
```

## Media

Imagine briefs: `media/briefs/`. Generated assets stage under `media/` before DA upload.

## License

Apache-2.0 (boilerplate). Theory content is a third-party hypothesis summary — not endorsement.
