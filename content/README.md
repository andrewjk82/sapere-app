# content/ — question bank source of truth

| path | what |
|---|---|
| `chapters/<chapterId>.json` | canonical questions, grouped by topic. **Edit these.** |
| `figures/<sha>.svg` | SVGs referenced as `fig:<sha>` (de-duplicated) |
| `schema.js` | zod schema — the contract every file and every edit must satisfy |
| `known-defects.json` | ratchet baseline for `validate` (may only shrink) |
| `_export/` | P0/P1 reports; `raw/` = Firestore snapshot 2026-09-14 (untracked) |

## Workflow
```
edit content/chapters/*.json
npm run content:validate          # schema + KaTeX (renderer preprocessing) + MC keys; fails on NEW defects only
git commit / push                 # → publish (P2) → CDN
```
`npm run content:validate:report` writes `_export/validate-report.json` with every error/warning.

## Provenance
Built once by `tools/content/normalize.mjs` from the Firestore export + `src/constants/seed*.js`
using field-level merge rules (see `_export/P0-REPORT.md`). **Do not re-run normalize after hand
edits begin** — it would overwrite them. Open items: `_export/review-queue.json`.
