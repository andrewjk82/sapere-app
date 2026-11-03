# Chapter Profile: "Trigonometric Equations & Graphs" (past-paper bundle)

Unlike the other profiles in this folder, this one does **not** correspond to
a single seed file. It covers the 51 questions tagged with taxonomy slug
`trig-equations-and-graphs` in
`tools/scripts/output/question_types_taxonomy.json` (chapterIds `11A`–`11F`,
`examLevel: "Both"`) — a curated bundle drawn from **9 different school
past-paper seed files**:

`seedAscham2020Questions.js` · `seedBarker2020Questions.js` ·
`seedAbbotsleigh2020Questions.js` / `...Ext1Questions.js` ·
`seedBlacktownBoys2020Questions.js` / `...SimilarQuestions.js` ·
`seedCaringbah2020Questions.js` / `...SimilarQuestions.js` ·
`seedCherrybrookTech2020Questions.js` / `...SimilarQuestions.js` ·
`seedCranbrook2023Questions.js` / `...SimilarQuestions.js` ·
`seedDanebank2020Questions.js` / `...SimilarQuestions.js` ·
`seedFortSt2020Questions.js` / `...SimilarQuestions.js`.

Each school's file also has a `...Similar...` sibling with re-numbered
versions of the same questions (different constants, same structure) — treat
each ID independently but expect the fix pattern to repeat.

**Known defect going in:** every question in this bundle currently has the
same generic bulk-template `solutionSteps` described in
`sapere-question-audit`'s Category D ("Given: read the full stem carefully…",
"What rule or formula applies?…", "Carry out the algebra carefully…", "Final
answer: … Interpret it in context (gradient, area, amount of money, exact
value)…") — a calculus/finance template that doesn't fit trigonometry at all.
It also carries a repo-wide LaTeX bug: `quad` appears as literal text instead
of `\quad` (missing backslash) in several `workingOut` fields — fix this
wherever you find it while you're rewriting a step anyway.

---

### 1. Core Concepts & Formulas — by question family

**Family A — Solving a basic trig equation** (e.g. "Solve $\sin x =
\frac{\sqrt3}{2}$ for $0\le x\le 2\pi$")
- Find the reference angle from the exact-value triangles (30-60-90,
  45-45-90), then use ASTC to place solutions in every quadrant where that
  ratio has the given sign, within the stated domain.
- Always check the domain is closed/open correctly — a solution exactly at
  the domain boundary (e.g. $x=2\pi$) is included only if the inequality is
  $\le$, not $<$.

**Family B — Quadratic-in-trig via factoring** (e.g. "$2\cos^2x-\cos x=1$",
"$4\cos^2x-3=0$", "$2\cos^2\alpha-3\cos\alpha-2=0$")
- Substitute $u=\cos x$ (or $\sin x$) to see the quadratic clearly:
  $2u^2-u-1=0$. Factor or use the quadratic formula, solve for $u$, **then**
  convert each $u$-value back to $x$ — don't stop at $u$.
- Null factor law: $(2u+1)(u-1)=0 \Rightarrow u=-\frac12 \text{ or } u=1$.
  State this rule by name; it's the "why" for splitting into two equations.
- Reject any $u$ outside $[-1,1]$ before solving for $x$ — this is the most
  common place a factored quadratic silently produces a bogus root.

**Family C — Absolute value equations** (e.g. "$|2\cos x-1|=1$ for $0\le
x\le\pi$")
- $|f(x)|=k$ ($k>0$) splits into two cases: $f(x)=k$ OR $f(x)=-k$. Solve both
  and take the union of solutions inside the domain — don't discard one case
  by default.
- Show both branches explicitly as separate lines of working; this is exactly
  where students drop a solution.

**Family D — Auxiliary angle method** (Extension 1 content, e.g.
"$\sqrt3\sin\theta-\cos\theta=1$", "express $\sqrt3\cos t-\sin t$ as
$R\cos(t+\phi)$")
- $a\sin\theta+b\cos\theta = R\sin(\theta+\phi)$ (or $R\cos(\theta-\phi)$,
  depending on the target form) where $R=\sqrt{a^2+b^2}$ and $\tan\phi=b/a$
  — derive $R$ and $\phi$ explicitly by expanding the target form and
  matching coefficients, don't just assert the formula.
- Once in single-trig-function form, solve exactly like Family A, then
  subtract/add $\phi$ to recover $\theta$.
- $R>0$ and the stated range for $\phi$ (e.g. $0\le\phi\le\pi/2$) pin down a
  unique $(R,\phi)$ — check the signs of $a,b$ against that range rather than
  guessing the quadrant of $\phi$.

**Family E — Graph transformations (period/amplitude)** (e.g. "change in
amplitude and period when $f(x)=\frac12\sin4x$ becomes $g(x)=\sin2x$")
- Amplitude of $a\sin(bx)$ is $|a|$; period is $\frac{2\pi}{|b|}$ (or
  $\frac{360°}{|b|}$ in degrees). Compute both functions' amplitude and
  period separately, then state the *change* (ratio or difference) — the
  question asks for the change, not just the two raw values.

**Family F — Graph reading ("which of the following best represents…")**
- Identify amplitude, period, phase shift, and vertical shift from the
  equation first (e.g. $2\cos(\frac{x}{2}+\frac{\pi}{3})$: amplitude 2,
  period $4\pi$, phase shift $-\frac{2\pi}{3}$), *then* match against the
  answer options — don't eyeball-match graphs without the numbers.
- Distractors for this family should be graphs with exactly one feature
  wrong (right amplitude/period but wrong phase shift, or vice versa) — that
  mirrors the real mistake of transposing which parameter controls what.

**Family G — Real-world sinusoidal modelling** (river depth, monthly
temperature: $y=a\sin(nt+\phi)+c$)
- Max $=a+c$, min $=c-a$ (or $-a+c$) — from these two given values, solve
  simultaneously for $a$ and $c$ before touching $n$ or $\phi$.
- Period $=\frac{2\pi}{n}$ (or $\frac{360°}{n}$) — if the period is given,
  solve for $n$ directly; don't confuse period with frequency.
- "Which month/time has the minimum" questions require setting the argument
  of sin/cos to the value that gives $-1$ (for a minimum) or solving the
  model at specific integer inputs — show the substitution, not just the
  final month number.

**Family H — Graph intersection / equation setup** (e.g. "the diagram shows
$y=2\cos x$ and $y=\cot x$… write down the periods… [show that the
intersection x-coordinates satisfy] …")
- Two curves intersect where their $y$-values are equal — setting
  $f(x)=g(x)$ and rearranging is the standard first move; state it as such
  rather than jumping straight to the rearranged form.
- These come as **multi-part questions**: an easier MC part (state the
  periods — Family E territory) followed by a "show that" part. Convert only
  the MC part; leave the "show that" part as `teacher_review` per the
  skip-list (§2 of the main SKILL.md).
- **These need a diagram** even when `graphData` is currently null — the
  question explicitly says "the diagram shows…" so the diagram is not
  optional polish, it's missing required content (Category I in
  `sapere-question-audit`).

---

### 2. Standard Solution Methodology (Step-by-Step)

Pick the step count/shape to match the family above rather than forcing a
fixed template — a Family A equation is 3 short steps; a Family D auxiliary
angle problem needs 5 because deriving $R$ and $\phi$ is itself multi-step.
As a default shape when nothing family-specific applies:

1. **Setup**: restate the equation/model and the domain restriction — the
   domain is often what a wrong answer key gets wrong (extra or missing
   solutions), so it deserves its own explicit mention up front.
2. **Reduce**: get to a single trig ratio equal to a number (substitution,
   factoring, isolating, or the auxiliary-angle expansion — whichever the
   family calls for).
3. **Solve the reduced equation**: reference angle + ASTC (or the
   graph/model-specific calculation for Families E–H).
4. **Convert back / list all solutions in the domain**: this is where a
   substitution variable (like $u=2x$) gets converted back to $x$, and where
   solutions outside the stated domain get explicitly discarded (show the
   discarded value and why, don't just omit it silently).
5. **Final answer**, matching one option exactly.

### 3. Diagrams — every family benefits, not just E–H

Earlier drafts of this profile said only Families E–H (the ones with an
actual function graph) need diagrams, and that A–D are "pure algebra" with
`graphData: null` throughout. That's wrong for the quadrant-reasoning part of
A–D: student-testing showed that a unit-circle diagram at the "which
quadrant, what reference angle" step makes those steps dramatically easier
to follow — the exact same "Locate → Classify quadrant → Reference angle →
Final" progression from `references/svg_step_progression_patterns.md`'s
angle-in-standard-position template applies directly, one diagram per
quadrant/reference-angle decision the solution makes.

Concretely, for Families A–D:
- **Do** add a progressive unit-circle diagram (per the standard-position
  template) at every step where the solution places an angle in a quadrant
  or computes a reference angle — this is most steps in Families A–D.
- **Skip** a diagram only for a step that's pure symbol manipulation with no
  angle to locate yet — e.g. the substitution/factoring step in Family B
  before any quadrant reasoning starts, or a step that's just arithmetic
  (evaluating $2\pi/12$, converting $u$ back to $x$ by dividing).
- When a solution finds solutions in **multiple quadrants** (the usual
  case — Family A/B/C typically produce 2–4 solutions across different
  quadrants), the diagram can show all of them on one unit circle rather
  than one diagram per individual solution — highlight each with its own
  color/label, consistent with how multiple functions are distinguished in
  the "Function graph transformations" pattern below.

For Families E, F, G, H (the ones with an actual plotted function), follow
`references/svg_step_progression_patterns.md`'s "Function graph
transformations" pattern instead: original (grey dashed) vs
transformed/target (bold color) function, annotated with the specific
amplitude/period/shift value each step is computing.

---

### 4. Common Student Pitfalls (오개념 & 잦은 실수)

- **Stopping at the substituted variable:** solving $2u^2-u-1=0$ for $u$ and
  reporting $u$-values as the final answer instead of converting back to $x$.
  *Warning phrasing: "Solving for $u$ isn't the end — substitute back and
  solve for the original variable in the given domain."*
- **Extraneous roots from a rejected $u$:** continuing to solve $\cos x = 2$
  as if it had a solution.
  *Warning phrasing: "Since $-1\le\cos x\le1$ always, $\cos x=2$ has no
  solution — reject this factor immediately rather than trying to solve it."*
- **Dropping one branch of an absolute value equation:** solving only
  $f(x)=k$ and forgetting $f(x)=-k$.
  *Warning phrasing: "$|f(x)|=k$ always has two cases — check both branches
  before deciding how many solutions there are."*
- **Domain boundary errors:** including or excluding an endpoint
  inconsistently with the stated inequality.
  *Warning phrasing: "Check the domain symbol carefully: $0\le x\le\pi$
  includes both endpoints; $0<x<\pi$ excludes both."*
- **Auxiliary angle sign/quadrant mismatch:** picking $\phi$ in the wrong
  quadrant relative to the signs of $a$ and $b$.
  *Warning phrasing: "The signs of $a$ and $b$ (not just their size) fix
  which quadrant $\phi$ is in — check both before reading $\phi$ off a
  calculator, which only gives the principal value."*
- **Confusing period with the coefficient inside sin/cos:** assuming the
  period equals $b$ instead of $\frac{2\pi}{b}$.
  *Warning phrasing: "A larger coefficient $b$ inside $\sin(bx)$ means a
  SHORTER period, not a longer one — period is $\frac{2\pi}{b}$, inversely
  proportional to $b$."*
- **Reading amplitude/period off a sketch instead of computing it:** guessing
  from a picture instead of the equation's $a$ and $b$.
  *Warning phrasing: "Compute amplitude and period from the equation first —
  then use those numbers to identify the matching graph, not the other way
  around."*

---

### 5. MC Answer Format & Skip List

Same convention as the main SKILL.md and `Y11A_Ch6C_Profile.md`: `opts` +
`a` (0-based index, authored order) + `answer` (string of `a`). Several
questions in this bundle already have distractors that are lazy or outright
malformed (e.g. an option that's just the correct answer with a stray minus
sign in front of the whole equation, e.g. `"-x = ..."` — not a real algebra
mistake, just noise) — replace these with the real-mistake distractors from
§4 above when you touch a question's `opts`.

**Skip (leave untouched, don't convert):** any part of a question whose verb
is Sketch/Draw/Show (that)/Prove/Graph/Construct/Justify/Explain (why) — per
the main SKILL.md skip-list. In this bundle that includes the "on the number
plane draw the graphs of…" parts and "show that the x-coordinates of the
points of intersection satisfy…" parts of Family H's multi-part questions.
When a question is multi-part with one skippable sub-part and one
convertible sub-part (already split into separate question IDs in this
bundle, e.g. `q29a` convertible / `q29b` skip), treat each ID on its own
merits rather than skipping the whole family.
