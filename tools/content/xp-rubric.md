# Question XP rubric (v4)

`xp` (1–10) on each question in `content/chapters/*.json`; for a multipart question, on each part.
Set in the Question Bank UI (under the time-limit buttons) or by the chapter-by-chapter rating pass.

**Principle: score the effort for a student who has just learned this topic — not how advanced the
topic is, and not how many lines the working takes.** A drill is worth the same in Year 7 and
Year 12. Points go up only when the student has to think: spot a trap, choose a method, find a
non-obvious step, or combine ideas.

| XP | Meaning | Examples |
|---|---|---|
| 1 | Recall / read a value / one operation with small numbers | read a protractor; `m + n` for given values; continue `2, 5, 8, …` |
| 2 | Drill — apply the rule just learned, directly | `3x + 7` at `x = −20`; `(5c+4)(5c−4)`; `x² + 13x + 30`; `c² − 25 = 0` |
| 3 | Drill with a trap, more terms, or a choice between standard methods | `−w⁴` at `w = −3`; `(a − 3b + 2)²`; non-monic factorising; completing the square |
| 4 | Long, careful routine, or needs one non-obvious condition | `(x+10)³ − (x−10)³`; equal roots ⇒ Δ = 0; `a = (a+8)/(a−1)` with restriction; `2x+3y=16, xy=10` |
| 5 | Method not signposted — student must decide how to attack it | unstructured word problems needing their own model |
| 6 | Combines two topics | e.g. geometry + quadratics, calculus + trig identities |
| 7 | Unfamiliar context, multi-step, exam-style | typical last parts of school exam questions |
| 8–10 | HSC final-question level, proofs, Extension | reserved — use sparingly |

Rules
- Length alone never raises the score: a routine done in 6 lines is still a routine.
- Multipart: rate each part, but remember earlier parts scaffold later ones — a part that is only
  "now substitute your answer from (a)" is 1–2, however hard the whole question looks.
- Never overwrite an `xp` a teacher already set.
- Word problems: +1 over the bare skill only if forming the model is genuinely the hard part.

## How the initial pass was done (2026-09-25)

- **Read item by item:** y7-11, y11a-1, y11a-2, y11a-3, y11a-4 (ratings + reasons in `xp-ratings/`).
- **Rule-based** (`xpHeuristic.cjs`): every other chapter. Start from the question's own
  `difficulty` (easy 1 / medium 2 / hard 3 / none 2), then: "Prove…" → +1 (min 3); "Show that /
  Explain why / Hence" → min 3; short recall stems ("Evaluate |x|", "Classify…", "Use your
  calculator…", exact trig values) → 1. Per-chapter overrides were applied where sampling showed
  the difficulty tag was off (e.g. y7-1 templated "hard" word problems → 2).
- **Exam papers (`exam:*`):** +1 for Extension papers, +1 for `hard` items in the last 30% of the
  paper, capped at 7.
- Result: 26,756 leaf questions, avg ≈ 1.9; 1:9117 2:11249 3:5677 4:659 5:54.

Known limits: the rule-based chapters inherit whatever the `difficulty` tag says, and those tags
are relative to each chapter — re-rate a chapter by reading it when it matters. To re-rate without
touching teacher edits: keep the old ratings file and run
`applyXpRatings.mjs <chapter> --prev <old.json> --apply` (only overwrites values we set).
