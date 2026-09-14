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
git commit / push                 # Vercel: npm run build = validate → publish → vite build
```
`npm run content:publish` writes `public/content/` (gitignored, rebuilt every build):
`manifest.json` (chapter → topic → file), `topics/<chapter>__<topic>.<hash>.json` (immutable, SVGs inlined),
`ids.<hash>.json` (id → topicId for non-derivable ids), `extra.<hash>.json` (cross-listings), `hsc-types.<hash>.json`.
A topicId can appear under several chapters (exam papers tag questions with curriculum topics) —
`manifest.topics[topicId]` lists every file that carries it.
`npm run content:validate:report` writes `_export/validate-report.json` with every error/warning.

## Provenance
Built once by `tools/content/normalize.mjs` from the Firestore export + `src/constants/seed*.js`
using field-level merge rules (see `_export/P0-REPORT.md`). **Do not re-run normalize after hand
edits begin** — it would overwrite them. Open items: `_export/review-queue.json`.

## Serving (P3)
`src/services/contentLoader.js` reads `/content/` and returns legacy-shaped docs. Switched on per chapter by
`VITE_CONTENT_SOURCE` (`firestore` default | `cdn` | comma list of chapter ids/prefixes) or per browser by
`localStorage 'sapere:contentSource'`. `npm run test:content-parity` proves CDN output == today's Firestore docs.
