# P0 — Firestore export + seed drift report (2026-09-14)

Export: `tools/content/export.mjs` — question_index ids → getAll. 24,723 reads, 24s.
Drift:  `tools/content/drift.mjs` (offline). Details in `drift-report.json`, `danger-report.json`.

## Inventory
| | count |
|---|---|
| Firestore unique docs (via index) | 24,296 |
| ├ origin:seed / teacher / (none) | 12,348 / 634 / 11,314 |
| ├ id listed in >1 chapter index | 2,136 |
| ├ index ids with NO document (orphans) | 98 |
| Seed unique ids | 21,944 (1,062 ids duplicated across seed files) |
| In both | 20,930 — identical 4,391 (21%), differing **16,539 (79%)** |
| Firestore only | 3,366 (2,801 no origin = script-written, 183 teacher, 382 seed w/o seed file) |
| Seed only (never reached Firestore) | 1,014 |

## Neither side is the truth — per-field damage
| finding | count | which side is right |
|---|---|---|
| Firestore `question` **empty**, isActive:true, seed has text (all `exam:*`, wiped 2026-07-27) | **1,249** | seed |
| Firestore `solutionSteps` = generic bulk template (`We are asked to evaluate…`) | 9,749 (40% of bank) | — |
| └ …and seed has real per-question steps | **8,815** | seed |
| Firestore `solution` empty, seed has one | 781 | seed |
| Seed `solution` empty, Firestore has one | 147 | firestore |
| MC correct-option text differs (non-teacher) | 1,250 (many LaTeX-format-only, needs normalised triage) | review |
| teacher-edited docs (`origin:'teacher'`) | 634 | firestore |

## Consequence for P1
"Firestore wins" is wrong. Merge must be **field-level**:
- `origin:'teacher'` doc → Firestore wins every field.
- `question`/`solution`/`hint`: non-empty wins; both non-empty & differ → Firestore.
- `solutionSteps`: Firestore generic-template && seed real → seed; else Firestore.
- MC `options`/`answer`: LaTeX-normalise both; still differ → **review queue** (file), not auto-pick.
- Firestore-only + seed-only → keep both (union).
- 98 orphan ids → drop from membership.
