# Content Update Template (git — 2026-09 migration)

> This file used to hold a Node/Firebase-Admin script template that wrote to Firestore via a
> service account and rewrote a `seed*.js` file. That path is retired for question content — see
> CLAUDE.md's top section. Kept at this filename (not renamed) so old links/skill references still
> land here; the content below is the current workflow.

## Finding the question

Chapter files are `content/chapters/<chapterId>.json`. If you don't know which file an id lives
in:
```bash
grep -rl '"y11a-5i-q__"' content/chapters/
```

## Editing in place

Open the file, find the question object (or, for a sub-part, its parent's `parts[]` entry), and
edit it directly to match `content/schema.js` (see `references/question_schema.md` for the full
canonical shape). Example — converting a question to MC with steps and a graph on the last step:

```json
{
  "id": "y11a-5i-q__",
  "type": "mc",
  "options": [
    "Option A \\(LaTeX\\)",
    "Option B \\(LaTeX\\)",
    "Option C \\(LaTeX\\)",
    "Option D \\(LaTeX\\)"
  ],
  "answer": 2,
  "manual": false,
  "steps": [
    { "explain": "Step 1 explanation", "work": "Step 1 LaTeX" },
    { "explain": "Step 2 explanation", "work": "Step 2 LaTeX" },
    {
      "explain": "Final step",
      "work": "Final answer LaTeX",
      "figure": {
        "svg": "<svg viewBox=\"0 0 400 300\">...</svg>"
      }
    }
  ],
  "solution": "Final answer LaTeX"
}
```

Notes:
- `answer` is always a plain 0-indexed number for `mc` — never a string.
- A JSXGraph config is still fine to keep as raw JSON under `figure.raw` for continuity with
  older questions, but prefer a hand-authored SVG under `figure.svg` for new work (see SKILL.md §5
  / `references/jsxgraph_patterns.md`); either way it's just a JSON value now, no escaping layer.
- For a sub-part, edit it inside the parent question's `parts[]` array — there's no separate
  document, so no "read parent → patch → write parent back" dance; it's the same file.
- To convert to `type: 'review'` instead: drop `options`/`answer`, set `manual: true`.

## Validate, commit, push

```bash
npm run content:validate      # schema + KaTeX (renderer preprocessing) + MC-key checks
git add content/chapters/<chapterId>.json content/figures/  # figures/ only if you added an SVG
git commit -m "Fix <id>: <what and why>"
git push
```

`npm run content:validate` fails the build only on a *new* defect — pre-existing issues elsewhere
in the file are grandfathered via `content/known-defects.json` and won't block your commit.
Pushing triggers Vercel's build (`content:validate` → `content:publish` → `vite build`), live for
students in ~2 minutes. No service account, no manual Firestore write, no seed-file regex dance.

## If you need to script a bulk edit across many questions

Read/modify/write the JSON file(s) directly with any scripting tool (Node, Python, a short
in-editor script) — `JSON.parse`/`JSON.stringify` the chapter file, no `eval()` of a JS array
literal needed since these are plain `.json` files now. Still run `npm run content:validate`
before committing a bulk change, and check the diff for the number of questions you actually
intended to touch.
