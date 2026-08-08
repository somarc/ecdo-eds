# Art direction & EDS QA — agent coaching contract

**Status:** Active. Learned from the Abyssal Observatory redesign (PR #1, `af8a2ce`) completing the initial theme/scaffold work.

## One-line lesson

> **Inspect reality, establish hierarchy, assign visual roles, and validate the rendered experience—not the stylesheet.**

Theme ingredients (palette, scientific tone, IA) are not the same as art direction. Lint pass is necessary; it is not acceptance.

---

## Process (mandatory order)

1. **Inspect before styling** — live page, delivered DOM, computed layout, block decorators, DA-authored shapes, mobile behavior.
2. **Fix structural contracts first** — mismatches between authored content and block JS/CSS before visual polish.
3. **Name a visual direction** — explicit roles for typography, surfaces, color, imagery, motion, epistemic status.
4. **Give every section a job** — distinct visual archetypes; never one heading-plus-prose template for the whole page.
5. **Editorial grammar for density** — 60–72ch measure, restrained body scale, lead vs support hierarchy, section indexing, proposition grids.
6. **Semantic color** — measurement, hypothesis, warning, navigation are different accents.
7. **Media still-first** — intentional poster; video is progressive enhancement; reduced-motion is designed, not an afterthought.
8. **Browser QA at multiple widths** — screenshots, geometry, console, media readiness, overflow, menu, repeated-block counts.
9. **Do not declare success on lint alone.**
10. **DA is source of truth** — adapt code to authored content; do not invent content fixtures that hide real markup.

---

## Failure modes observed (initial scaffold)

| Failure | What happened | Fix pattern |
|---------|---------------|-------------|
| Theme vs art direction | Uniform dark + prose + cards | Section archetypes with different jobs |
| Nominal vs delivered markup | Assumed nav sections / one card per row; DA delivered combined nav + four cells in one card | Inspect live DOM; match decorators to reality |
| Incomplete browser QA | Video demuxer failure → generic fallback; inverted type scale | Design static state; measure computed CSS |
| Density without grammar | Every paragraph equal weight | Measure, leads, indexing, proposition grids |
| Credibility only in copy | “Hypothesis lab” not in chrome | Status labels, semantic accents, still-first media |

---

## Acceptance rubric (0–2 each, target ≥17/20)

| Area | Acceptance test |
|------|-----------------|
| Structural fidelity | Delivered DA markup inspected; decorators match it |
| Art direction | Named, coherent visual thesis |
| Section rhythm | ≥3 intentional section archetypes |
| Typography | Mobile and desktop scales inspected, not assumed |
| Long-form readability | Measure, leading, hierarchy, scanning work |
| Credibility | Hypothesis / evidence / measurement / caution visually distinct |
| Navigation | Current route, keyboard, mobile drawer work |
| Media resilience | Poster, failure, loading, reduced-motion designed |
| Responsive QA | Screenshots + geometry at multiple widths |
| EDS discipline | DA ownership and progressive loading preserved |

**Hard zeros forbidden:** structural fidelity, media resilience, responsive QA.

---

## Paste-ready task brief

```text
Treat this as a senior art-direction and EDS integration task, not a CSS reskin.

1. Inspect the live page, delivered DOM, computed layout, block decorators, DA-authored shapes, and mobile behavior before proposing styles.
2. Identify structural contract mismatches between authored content and block JavaScript. Fix those before visual polish.
3. Define a named visual direction with explicit roles for typography, surfaces, color, imagery, motion, and epistemic status.
4. Give every section a job and visual archetype. Avoid presenting every section as the same heading-plus-prose block.
5. For dense material, establish a 60–72ch reading measure, restrained body scale, lead-paragraph hierarchy, section numbering, and structured propositions or evidence.
6. Use color semantically. Measurement, hypothesis, warning, and navigation must not all use the same accent treatment.
7. Design media still-first. Video or animation must be optional enhancement with an intentional poster and reduced-motion behavior.
8. Validate in the browser at mobile and desktop widths. Inspect screenshots, element geometry, console output, media readiness, horizontal overflow, menu behavior, and repeated-block counts.
9. Do not declare success because lint passes. Lint is necessary; visual and structural QA are the acceptance criteria.
10. Preserve DA as the source of truth. Adapt code to authored content rather than creating content fixtures.
```

---

## Relation to initial work

The scaffold established content, IA, palette, design contract, and hero concept. PR #1 completed art direction, structural fidelity, and browser QA. Future agents should start from this contract—not re-derive the lesson from a red-looking reskin.
