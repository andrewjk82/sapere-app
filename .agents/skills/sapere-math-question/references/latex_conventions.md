# LaTeX Conventions for Sapere

## Delimiter Rules by Context

### 1. Question Text (`question` field)
Use `\\(` and `\\)` for inline math:
```
"question": "Find the domain of \\(f(x) = \\sqrt{x - 2}\\)."
```

### 2. Options (`opts[]` array)
Each option uses `\\(` and `\\)`:
```javascript
opts: [
  "\\(x \\ge 2\\)",
  "\\(x \\ge -2\\)",
  "\\(x \\in \\mathbb{R}\\)",
  "\\(x > 0\\)"
]
```

### 3. WorkingOut in solutionSteps

**Always wrap every math expression in `\\( ... \\)` — do not rely on the
"raw LaTeX, no delimiters" auto-wrap fallback.** The actual renderer
(`TopicPracticeSession.jsx`: `/\$|\\\(|\\\[/.test(step.workingOut) ?
step.workingOut : \`$${step.workingOut}$\``) only auto-wraps the ENTIRE
string in `$...$` when it contains **zero** `\(`/`\[`/`$` anywhere. The
moment a `workingOut` has even one `\(` — e.g. a multi-line string where one
`\n\n`-separated section is already delimited — auto-wrap is skipped and the
WHOLE string is passed through as-is. Any part not inside a matching
`\(...\)` pair then renders as literal plain text instead of typeset math.

**2026-08-26 incident:** a 55-question batch (willoughby2019-* exam) followed
the old version of this doc (single-expression examples with no delimiters)
and produced multi-line `workingOut` values that mixed delimited and
undelimited math — e.g. `"\\(\\sin(61°) = \\frac{5}{y}"` (opened `\(`, never
closed) and `"\\textbf{Answer: } 48 \\text{ boxes}"` (no delimiters at all,
appended after an already-delimited line). Both rendered as raw text on the
page.

Correct pattern — wrap every line individually, close every `\(`:
```javascript
workingOut: "\\(x^2 + 3x + 2 = (x+1)(x+2)\\)"
```
Multi-line, mixed prose + math — wrap only the math parts, each fully closed:
```javascript
workingOut: "From the table: 6 boxes had 52 matches.\n\n\\(\\text{relative frequency} = \\dfrac{6}{100} = 0.06\\)"
```
Never do this (unclosed delimiter, or a bare `\\text{}`/`\\textbf{}` sitting
outside any `\\(...\\)`):
```javascript
workingOut: "\\(\\frac{6}{100} \\times 800 = 48\n\n\\textbf{Answer: } 48"   // ❌ broken
```

**Never wrap a whole English sentence in `\( ... \)` — it breaks line-wrap
and overflows the card.** Recurred 3 times in the 2026-08-27 gosford2020
batch (`explanation` fields, not `workingOut`): a full prose sentence like
*"Solve the y-equation. Pitfall: using B's y-coordinate (2) instead of the
given midpoint y-value (-1) in the equation leads to an incorrect y_D."* was
written as a single `\\(...\\)` block. KaTeX renders math-mode content as one
unbreakable unit — the whole sentence became one un-wrappable line and
overflowed the answer card's width instead of wrapping normally like every
other explanation. This is the mirror-image bug of the "zero delimiters"
incident above: that one under-delimits (nothing wrapped, raw commands show
as text); this one over-delimits (everything wrapped, including English
prose that should never be in math mode at all). Fix: only the numbers/
variables need `\(...\)` — the sentence itself stays as plain text outside
any delimiter:
```javascript
// ❌ broken — whole sentence in math mode, can't line-wrap, overflows the card
explanation: "\\(Solve the y-equation. Pitfall: using B's y-coordinate (2) instead of the given midpoint y-value (-1) in the equation leads to an incorrect y_D.\\)"

// ✅ correct — prose is plain text, only the actual math tokens are delimited
explanation: "Solve the y-equation. Pitfall: using B's y-coordinate (\\(2\\)) instead of the given midpoint y-value (\\(-1\\)) in the equation leads to an incorrect \\(y_D\\)."
```
Before finishing any batch, grep every `explanation`/`question` string for
`^\s*\\\(.{70,}\\\)\s*$` (the ENTIRE trimmed field is one `\(...\)` block AND
it's long) — a hit that also contains ordinary English words (`the`, `using`,
`instead`, `leads`, etc.) is this bug. A short field that's legitimately all
math (e.g. `\\(x^2+3x=0\\)`) is fine and won't false-positive on the length
check.

**2026-08-27 incident (different failure mode — total, not partial, omission):**
a background agent authoring 32 brand-new `gosford2020-q*` documents from scratch
(not editing existing ones) produced **266 undelimited-LaTeX occurrences across
30 of the 32 docs** — this time every affected string had **zero** `\(` anywhere
(not the partial-wrap bug above), across `question`, `options[].text`,
`solutionSteps[].workingOut`/`.explanation`, and the same three fields again
inside every `subQuestions[]` entry. The zero-delimiter case is exactly the one
the renderer's auto-wrap is supposed to catch — but it evidently doesn't fire
reliably for every field/component in this codebase (e.g. `options[].text` and
`subQuestions[].solutionSteps[]` are rendered by different components than the
one `latex_conventions.md` §3 describes, and none of them can be assumed to
auto-wrap). **Never rely on auto-wrap for any field, in any component, under
any circumstance — delimit everything explicitly, always,** whether you are
editing one field on an existing question or generating dozens of documents
from scratch.

**Mandatory before finishing any task that writes `question`/`options[].text`/
`solutionSteps[]`/`subQuestions[]` content (single-question edits included, not
just batch generation):** run a delimiter-presence scan over every document you
touched before reporting done. Minimum pattern (adapt the id range/filter to
what you touched):
```javascript
const LATEX_CMD = /\\(dfrac|frac|sqrt|sin|cos|tan|sec|csc|cosec|ln|log|left|right|angle|infty|pi|times|cdot|int|sum|geq|leq|neq|approx|text|tfrac|pm|Rightarrow|operatorname|degree|blacksquare|ldots|qquad|quad)\b/;
const needsWrap = (s) => typeof s === 'string' && s && LATEX_CMD.test(s) && !s.includes('\\(');
```
Check `question`, every `options[].text`, every `solutionSteps[].workingOut`
and `.explanation`, and recurse into every `subQuestions[]` entry's own
`question`/`options`/`solutionSteps` — a composite question's sub-parts are a
separate, easy-to-forget set of fields with the exact same rule. Zero hits
required before the task is done, not just before it is reported done.

**The `LATEX_CMD` whitelist above still missed real cases the first time it
was used (2026-08-27, same gosford2020 batch, found on a second pass):**
`\sqrt`, `\dfrac` were in the list yet still slipped through in a few docs;
`\degree`, `\prime`, `\max` were never in the list at all; and a bare `x^2`/
`k_1`/`(-1)^2` with no backslash command whatsoever (just `^`/`_` needing
math mode for the exponent/subscript to render, not literal characters) isn't
caught by a command-name whitelist no matter how long. **Use a whitelist-free
check instead** — anything that looks even remotely like LaTeX, with zero
`\(` anywhere in the string:
```javascript
const suspicious = (s) => typeof s === 'string' && s &&
  /\\[a-zA-Z]+|[_^]\{?[a-zA-Z0-9]/.test(s) && !s.includes('\\(');
```
This also catches a **stray `step.graphData` field** — a distinct bug also
found in this batch: an SVG diagram was written to `solutionSteps[i].graphData.svg`
(a sibling field next to `workingOut`) instead of being prepended as a string
inside `workingOut` itself. The renderer only reads `workingOut`/`explanation`
per step — it has no `step.graphData` field in its schema, so the diagram
silently never appeared, on both a top-level step and one buried inside a
`subQuestions[]` entry. **A per-step diagram is always a `<svg>...</svg>`
string prepended to that step's `workingOut`** (`workingOut: svgString + '\n\n' + mathString`),
never a separate `graphData` key on the step object — that shape only exists
on the question document itself (`question.graphData.svg`), not on individual
solution steps.

### 3b. Never use a literal `<` or `>` character inside `\(...\)` — use `\lt`/`\gt`

**2026-08-27 incident:** 10 gosford2020 documents had math strings like
`"\\(0<x<\\dfrac{\\pi}{2}\\)"` — syntactically perfect LaTeX, verified byte-
for-byte correct (checked char codes, no hidden characters, no encoding
issue) — yet rendered as raw, unprocessed text truncated at the exact
position of the first literal `<`: `"\(0"` and nothing else for the whole
option. Root cause: the render pipeline embeds this string into the DOM at
some point via an HTML-parsing step (independent of / before KaTeX
processing), and a literal `<` is interpreted as the start of an HTML tag —
everything from that character onward is silently swallowed or breaks the
parse. This is invisible from the Firestore data alone: the string looks
completely correct until you know to check for this specific character.

**Rule: inside any `\(...\)` span, never write a literal `<` or `>` — always
use the LaTeX-native commands instead**, which KaTeX renders identically and
which an HTML parser can't misinterpret as a tag:
- `<` → `\lt` (not `\text{<}` either — use the math-mode operator)
- `>` → `\gt`
- `≤`/`≥` should already be `\le`/`\ge` or `\leq`/`\geq` (never a literal
  `≤`/`≥` Unicode char, and definitely never `<=`/`>=`)

```javascript
// ❌ broken — literal < truncates everything after it on render
"\\(0<x<\\dfrac{\\pi}{2}\\)"

// ✅ correct
"\\(0\\lt x\\lt \\dfrac{\\pi}{2}\\)"
```
This applies everywhere a literal `<`/`>` could appear in generated math:
inequality solutions, interval notation written out with variables (not
`(a,b)` bracket notation, which is fine), comparison steps in "show that"
proofs (`f(3.2)<0.5`), etc. Before finishing any batch, grep every
`question`/`options[].text`/`solutionSteps[].workingOut`/`.explanation`
(including inside `subQuestions[]`) for a literal `<` or `>` anywhere inside
a `\(...\)` span and replace with `\lt`/`\gt`.

### 3c. A bare `\$` escape with no `\(...\)` around it is another zero-delimiter case the standard scan regex misses

**2026-08-27 incident:** gosford2020-q31's dollar-amount MC options were
stored as `"\\$7200.00"` — no `\(`/`\)` anywhere, just the LaTeX
dollar-escape sitting alone in plain text, so it rendered as the literal
backslash: `\$7200.00`. The `LATEX_CMD`/`suspicious` detector regex from
§3/§4 above (`\\[a-zA-Z]+`) **does not catch this** — `\$` is backslash
followed by a punctuation character, not a letter, so it never matches a
"looks like a LaTeX command" test. Add `\\\$` explicitly to any delimiter-
presence scan, or better, treat ANY backslash-escape at all (`\\[^a-zA-Z\s]`
in addition to `\\[a-zA-Z]+`) as a signal to check for missing delimiters.
Fix is the usual one — wrap the whole thing: `"\\(\\$7200.00\\)"`.

### 3d. The most severe variant: zero delimiters AND zero backslash commands at all

**2026-08-27 incident (gosford2020-q8, plus q6/q18/q19 found on the same
pass):** `workingOut` fields like `"P(z>N) = 1-P(z<N) = 1-0.6 = 0.4"` and
`"z = -2"` had **no backslash anywhere** — not even a plain `\frac` or
`\sqrt`, just bare characters. Every scan regex in §3/§3b/§3c above requires
finding *some* backslash to flag a string as suspicious, so all of them miss
this case completely. The render pipeline's fallback for a zero-delimiter
string is to auto-wrap it in **literal `$...$`** (per the historical
`TopicPracticeSession.jsx` behaviour: `/\$|\\\(|\\\[/.test(str) ? str :
\`$${str}$\``) — and because that string also contains literal `<`/`>`
(§3b), the auto-wrapped result still hits the HTML-tag-truncation bug,
rendering as raw text cut off at the first `<`/`>` (e.g. the screenshot
showed literally `$P(z>N) = 1-P(z` before truncating).

**Detection for this case can't rely on finding a backslash at all** — use a
"looks like an equation" heuristic instead:
```javascript
function bareMath(str) {
  if (typeof str !== 'string' || !str || str.includes('\\')) return false;
  return /[A-Za-z]\([A-Za-z]|=\s*[\d.\-]|[<>]\s*[\dA-Za-z]/.test(str);
}
```
(function-call-like `f(x)`, an `=` followed by a number, or a comparison
operator followed by a variable/number — with zero backslashes present at
all). Fix is the same as always: wrap the whole expression in `\(...\)` and
convert any literal `<`/`>` inside it to `\lt`/`\gt` per §3b.

**Practical takeaway for any future batch:** run all four checks — §3 (has a
backslash command, zero `\(`), §3b (literal `<`/`>` inside `\(...\)`), §3c
(bare `\$` with no `\(`), and §3d (bare math with NO backslash at all) —
together, not just one. This incident needed a fourth, progressively-broader
scan pass to reach zero hits; assume a single regex pass will always miss
something and re-scan after each fix round.

### 4. Explanation in solutionSteps
Natural language with `\\(` `\\)` for inline math references:
```javascript
explanation: "Since \\(x^2 + 3\\) is always positive, the denominator can never be zero."
```

## Forbidden Patterns

### ❌ Nested Delimiters
```
"\\(\\text{Answer} = \\(x + 3\\)\\)"  // BROKEN — nested \\( \\)
```

### ✅ Correct
```
"\\(\\text{Answer} = x + 3\\)"  // Single wrapper
```

### ❌ Dollar Signs in Options
```
opts: ["$x = 3$"]  // Don't use $ in opts
```

### ✅ Correct
```
opts: ["\\(x = 3\\)"]  // Always \\( \\)
```

## Common LaTeX Commands Used

| Symbol | LaTeX |
|--------|-------|
| Fraction | `\\frac{a}{b}` |
| Square root | `\\sqrt{x}` |
| nth root | `\\sqrt[n]{x}` |
| Real numbers | `\\mathbb{R}` |
| Not equal | `\\neq` |
| Greater/equal | `\\ge` or `\\geq` |
| Less/equal | `\\le` or `\\leq` |
| Implies | `\\implies` |
| Arrow | `\\to` |
| Infinity | `\\infty` |
| Degrees | `^\\circ` |
| Text in math | `\\text{some text}` |
| Absolute value | `\|x\|` or `\\lvert x \\rvert` |

## Escape Levels

### In Seed JS Files (`.js`)
The seed file uses raw JS strings. LaTeX backslashes need double escaping:
```javascript
question: "Evaluate \\\\(\\\\frac{1}{2}\\\\)"
// JS string → "Evaluate \\(\frac{1}{2}\\)"
// Rendered → "Evaluate ½"
```

### In Node.js Update Scripts (`.cjs`)
When strings are built in JS and sent to Firestore:
```javascript
const q = {
  question: "Find \\(f(x)\\)"  // Single backslash — Firestore stores it as-is
};
```

### In JSON.stringify Output
`JSON.stringify()` will add one layer of escaping. The seed file writer
uses a regex to strip quoted keys but does NOT alter string values, so
the escaping is preserved correctly.
