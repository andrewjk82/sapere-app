# P1 — canonical content built (2026-09-14)

`npm run content:normalize` → `content/chapters/` (228 files, 44MB) + `content/figures/` (996 SVG, 4.2MB, 365 duplicates removed)

| | |
|---|---|
| questions (top-level) | 25,310 = Firestore 24,296 ∪ seed-only 1,014 |
| incl. multipart parts | 27,602 |
| chapter membership vs `question_index` | **0 mismatches** |
| `ext` passthrough keys (unclassified) | 3 (`partLabel` 18, `gridConfig` 27, `ans` 1) |

## Recovered from seeds (Firestore was damaged)
| field | count |
|---|---|
| empty `question` | 1,263 |
| generic-template `solutionSteps` → real steps | 8,809 |
| empty `solution` / `hint` | 765 / 1,148 |
| missing `graphData` | 258 |
| MC with no `options` | 594 |

## Review queue (`review-queue.json`, 1,399)
| reason | count | action |
|---|---|---|
| mc-answer-differs / revision (option sets differ = rewritten) | 1,254 | live (Firestore) version kept; spot-check only |
| mc-answer-differs / **KEY-CONFLICT** (same options, different key) | **97** | human must pick — real wrong-answer risk |
| mc-answer-unresolvable / BROKEN | 31 | answer=null, fix |
| empty-stem / BROKEN | 9 | marked inactive; fix or delete |
| mc-no-options / BROKEN | 8 | marked inactive; fix or delete |

## Validator baseline (`content/known-defects.json`, 1,094 keys)
| kind | count | note |
|---|---|---|
| KaTeX parse errors (renderer preprocessing applied) | 1,118 spans | live defects today; `\(\(` nesting 445, `\left…\right` mismatch 411 |
| duplicate part id inside one multipart | 17 | |
| warning: option count ≠ 4 | 320 | |
| warning: duplicate option text | 130 | |
| warning: part id also a standalone doc | 662 (+110 reverse) | legacy "split sub-parts into docs"; reconcile in P5 |

Gate proven: passes on baseline; an injected `\frac{1}` fails with exit 1.
