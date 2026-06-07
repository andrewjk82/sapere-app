# 📘 Lesson Authoring Guide — Animated Step-by-step Lessons

This guide is the single source of truth for turning a **textbook screenshot**
into a **professional, animated, voiced step-by-step lesson** inside Sapere.

> **Workflow in one line:** screenshot → lesson spec (`registry.js`) → pre-generate
> voice (script) → build & deploy → a "Learn step-by-step" button appears on that
> topic automatically.

When the teacher sends a screenshot, Claude follows **this document** to produce
the lesson. The goal is always the same: **the animation must match the words.**
When the narration says "the point (0, 1)", the graph points at (0, 1). When it
says "as x → ∞, y → ∞", a dot runs up the curve.

---

## 1. The big picture

| Piece | File | What it does |
|-------|------|--------------|
| Lesson spec | `src/lessons/registry.js` | The lesson content (steps, board, narration). Stored in **code** — no DB, no per-student cost. |
| Renderer | `src/components/lessons/LessonPlayer.jsx` | Draws the spec full-screen with animation + voice. |
| Voice files | `public/lessons/audio/<topicId>/step-N.mp3` | Pre-generated Kokoro narration. Students never download the model. |
| Audio generator | `scripts/generateLessonAudio.mjs` | Run on the dev machine to make the mp3s. |
| Entry point | `src/components/TopicPracticeSession.jsx` | Shows the button **only** when a lesson exists for the topic. |

**Presence-gated:** a topic shows the lesson button **only if** `getLesson(topicId)`
returns a spec. So unfinished/un-vetted lessons are never exposed.

---

## 2. The Lesson Spec schema

```js
{
  emoji?: string,         // header icon, e.g. '📈' (default '🔢')
  title: string,          // e.g. 'Two graphs that have asymptotes'
  topicId: string,        // matches curriculumData.js id, e.g. 'y11a-3H'
  glossary?: { [term]: definition },   // REQUIRED — see §4b (tap-to-define)
  steps: [
    {
      narration: string,  // HTML shown on screen (allows <b>, <sup>, unicode)
      speech:    string,  // PLAIN text read aloud (no LaTeX, no symbols)
      board:     BoardItem[],   // what to draw this step
      glossary?: { … },         // optional step-specific extra terms
      audioUrl?: string,        // auto-filled when audioBase is given
    }
  ]
}
```

### Registering a lesson
At the bottom of `registry.js`:
```js
export const LESSONS = {
  'y7-1g':   { ...buildPlaceValueLesson(3721, 'Place value', { audioBase: '/lessons/audio/y7-1g' }), topicId: 'y7-1g' },
  'y11a-3H': { ...buildAsymptotesLesson({ audioBase: '/lessons/audio/y11a-3H' }), topicId: 'y11a-3H' },
};
```
The `audioBase` makes each step get `audioUrl = '<audioBase>/step-<i>.mp3'`.

---

## 3. Board primitives (what you can draw)

A step's `board` is an array of these. They **stagger in** (0.12 s apart) and
animate on entry.

### 3.1 `math` — a KaTeX expression (via MathView)
```js
{ type: 'math', content: '$$f(x) = a^{x}$$', emphasis: true }
```
- `content`: LaTeX wrapped in `$$…$$`. Supports `\frac`, `\lim`, `\to`, `\infty`,
  `^{}`, `\dfrac`, `\text{}`, etc.
- `emphasis: true` → boxed card with soft gradient (use for key results/limits).
- `highlightColor` → custom background colour (overrides `emphasis`). Use a
  translucent colour, e.g. `'rgba(245,158,11,0.12)'` for amber.

#### `\color{}` inside LaTeX — highlighting a specific term in the formula
Use `\color{#hex}{…}` inside `$$…$$` to draw attention to *part* of an expression.
Classic uses:
- **Highest-power (degree) term:** `$$\color{#7c3aed}{3x^{4}} + 4x^{2} - 2x$$`
  colours only `3x⁴` purple — makes "the degree is the highest power" visual.
- **Two-case formula:** `$$x = \color{#10b981}{+}\sqrt{r^{2}-y^{2}} \qquad x = \color{#ef4444}{-}\sqrt{r^{2}-y^{2}}$$`
  matches the green/red semicircles on the graph.

Rule of thumb: **colour the term the narration names**, leave the rest in default
ink.

### 3.1b `mathRow` — a flex row of individually highlighted formulas
Use on **recap / summary steps** where several formulas are displayed together and
the narration mentions each in turn.
```js
{ type: 'mathRow', formulas: [
  { content: '$$y=\\sqrt{x}$$',           highlightColor: 'rgba(245,158,11,0.12)', borderColor: '#fcd34d', delay: 0.1  },
  { content: '$$y=x^{3}$$',               highlightColor: 'rgba(59,130,246,0.12)', borderColor: '#93c5fd', delay: 0.35 },
  { content: '$$y=x^{4}$$',               highlightColor: 'rgba(249,115,22,0.12)', borderColor: '#fdba74', delay: 0.6  },
  { content: '$$y=(x+1)(x-2)(x-4)$$',     highlightColor: 'rgba(16,185,129,0.12)', borderColor: '#6ee7b7', delay: 0.85 },
  { content: '$$x^{2}+y^{2}=r^{2}$$',     highlightColor: 'rgba(124,58,237,0.12)', borderColor: '#c4b5fd', delay: 1.1  },
]}
```
- Each formula pops in with a spring animation at its `delay` (seconds) — they
  arrive in the order the narration mentions them.
- `highlightColor`: translucent RGBA background. `borderColor`: matching border.
- Assign a **distinct hue** to each concept so students can link formula ↔ concept
  at a glance. Suggested palette:
  | Concept | `highlightColor` | `borderColor` |
  |---------|-----------------|---------------|
  | √x / surds | `rgba(245,158,11,0.12)` amber | `#fcd34d` |
  | Odd powers | `rgba(59,130,246,0.12)` blue | `#93c5fd` |
  | Even powers | `rgba(249,115,22,0.12)` orange | `#fdba74` |
  | Factored / zeros | `rgba(16,185,129,0.12)` green | `#6ee7b7` |
  | Circle / relation | `rgba(124,58,237,0.12)` purple | `#c4b5fd` |

### 3.2 `valueTable` — a textbook x/y table
Every cell is rendered through **MathView/KaTeX**, so use **LaTeX** — fractions
come out as proper stacked fractions, `x` as italic math, numbers as numbers.
```js
{ type: 'valueTable', rows: [
  ['x',    '-2', '-1', '0', '2',  '3',  '4', '5'],
  ['y',    '-24',  '0', '8', '0', '-4',  '0', '18'],
  ['sign', '-',    '0', '+', '0',  '-',  '0',  '+'],
] }
```
First cell of each row is the header (purple). Write fractions as `\\frac{a}{b}`
(double backslash in JS strings), **not** unicode `¼` and **not** `1/2`.

#### Sign-row auto-colouring ⭐
If any row's header cell is exactly `'sign'` (case-insensitive), the renderer
**automatically** colours each data cell:
- `'-'` → red background + red text (`#dc2626`)
- `'+'` → green background + green text (`#059669`)
- `'0'` → grey background + grey text (`#64748b`)

No extra config needed — just name the row `'sign'`. This matches the
red/green segments on the graph and makes the sign analysis instantly readable.

### 3.3 `graph` — an animated function graph ⭐ (the main tool)
```js
{
  type: 'graph',
  xMin: -3, xMax: 3.2, yMin: -1, yMax: 9,   // visible window
  width?: 480, height?: 340,
  curves:     [ { fn: (x) => Math.pow(2, x), color?, step? } ],
  asymptotes: [ { type: 'h', y: 0, color: '#ef4444' } ],   // see below
  points:     [ { x: 0, y: 1, label: '(0, 1)', guide: true, pulse: true } ],
  traces:     [ { from: 1, to: -3, label: 'x → −∞', approach: 'x' } ],
  segments:   [ { from: 0, to: 2, color: '#10b981', label: 'positive (x > 0)', labelAt: [1, 6.6] } ],
}
```

The graph automatically draws: faint grid, axes with **arrowheads**, x/y labels,
integer ticks. Curves are real JS functions (the registry is JS, so functions are
fine — they are never serialized).

#### `curves`
`{ fn, color?, step? }` — `fn(x)` returns y. Out-of-range / discontinuous parts
are broken automatically (so `1/x` draws as two branches). The curve
**draws itself** over ~1.1 s.

#### `asymptotes`
- `{ type: 'h', y: 0 }` — horizontal line at y. `{ type: 'v', x: 0 }` — vertical at x.
- **Add `color: '#ef4444'`** to *highlight* it (thicker, red). Highlight only the
  asymptote the current step is talking about. They **sweep in** (drawn).

#### `points`
`{ x, y, label?, guide?, pulse? }`
- `label` — e.g. `'(1, 2)'`.
- `guide: true` — dashed lines from the point to both axes.
- **`pulse: true`** — a ring keeps pulsing at the point = "pointing at it".
  Use whenever the narration **names that point**.
- Points **pop in** (spring) ~1.15 s after the curve.

#### `traces` ⭐ (the narration-synced limit demo)
A dot that **travels along the curve** to show a limit/behaviour, looping while
the step is shown.
```js
{ from: 1, to: -3, fn?, dur?: 2600, label?: 'x → −∞', approach?: 'x' }
```
- `from` → `to`: the x-range the dot travels (eased). `fn` defaults to the first curve.
- `label`: a tag that rides with the dot (e.g. `'x → ∞'`, `'x → 0⁺'`).
- `approach: 'x'` → draws a shrinking dashed gap **down to the x-axis** (shows y → 0).
  `approach: 'y'` → shrinking gap **across to the y-axis** (shows x → 0).
- For "y → ∞" just let the dot run off the top (no `approach`).
- You can have **multiple traces** (e.g. both branches of `1/x` at once).

#### `segments` ⭐ (colour a portion of the curve — "positive / negative", "increasing", an interval)
Redraws part of a curve in a colour **on top** of it, with an optional label.
Use whenever the narration talks about *where* something is true.
```js
{ from: 0.1, to: 2.1, color: '#10b981', label?: '+', labelAt?: [1, 6.6], width?: 4.5, delay?: 1.2 }
```
- `from` → `to`: x-range to recolour. `fn` defaults to the first curve.
- `color`: `'#10b981'` green (positive/increasing), `'#ef4444'` red (negative/decreasing).
- `label` — a `+` or `−` (or longer text) placed **on the curve** at the midpoint
  of the segment. The renderer auto-computes the curve's y at the midpoint and
  positions the label *above* the curve when `y ≥ 0` and *below* when `y < 0`, so
  it never overlaps the line. It pops in with a spring 0.7 s after the segment draws.
- `labelAt: [x, y]`: override placement to an explicit data coordinate.
- `labelYOffset`: fine-tune vertical offset (default ±1.8 data units).
- Multiple segments tile an interval analysis. Stagger them with increasing
  `delay` (e.g. 1.0, 1.25, 1.5, …) so they light up left-to-right like a sign row.
- **Recipes:**
  - "positive when x > 0, negative when x < 0" → one green segment (`label:'+'`) on
    the right, one red segment (`label:'−'`) on the left.
  - Sign table `− + − +` → four alternating red/green segments between the zeros,
    each with `label:'−'` or `label:'+'`. Combine with a matching `valueTable` sign
    row — the colours automatically mirror each other.

#### `bands` + `axisBars` ⭐ (show a domain / range on the graph)
Visualise where a function lives.
```js
bands:   [ { axis: 'y', from: 0, to: 9, color: '#10b981' } ],   // translucent shaded band
axisBars:[ { axis: 'x', from: -3, to: 3.2, color: '#6366f1', label: 'domain: all real x', arrows: 'both' },
           { axis: 'y', from: 0.02, to: 8.6, color: '#10b981', label: 'range: y > 0',     arrows: 'end'  } ],
```
- `bands`: a faint coloured rectangle spanning the plot — use for the **range
  region** (e.g. shade `y > 0` green so students see the curve never leaves it).
- `axisBars`: a coloured arrow-bar **along the x-axis (domain)** or **y-axis
  (range)** with a label. `arrows: 'both' | 'end' | 'start'` shows arrowheads for
  open/infinite ends (use `'both'` for `(−∞, ∞)`, `'end'` for `(0, ∞)`).
- **Recipe** (domain/range step): shade the range band + one x-axis bar
  ("domain: all real x") + one y-axis bar ("range: y > 0"), alongside the
  `math` interval notation.

#### `circles` ⭐ (perfect circles & arcs)
Draw a true circle or arc — use this for circles/semicircles instead of plotting
`±√(r²−x²)` (which leaves gaps at the ends).
```js
circles: [
  { cx: 0, cy: 0, r: 2 },                 // full circle
  { cx: 0, cy: 0, r: 2, from: 0,   to: 180 },  // upper semicircle
  { cx: 0, cy: 0, r: 2, from: -90, to: 90  },  // right semicircle
]
```
- `from`/`to` are **degrees** (default `0 → 360`). Circles **draw themselves**.
- For a round-looking circle, make the graph **square** (`width === height`) with
  **symmetric ranges** (e.g. `xMin:-2.7,xMax:2.7,yMin:-2.7,yMax:2.7`).

#### `lines` + `texts` + `showAxes` ⭐ (geometry diagrams)
For pure geometry (circles, radii, triangles, sectors) rather than function plots.
```js
{
  type: 'graph', showAxes: false,          // hide x/y axes, grid, ticks
  width: 340, height: 340, xMin: -2.5, xMax: 2.7, yMin: -2.5, yMax: 2.7,
  circles: [ { cx:0, cy:0, r:2, color:'#cbd5e1' },
             { cx:0, cy:0, r:2, from:0, to:52, color:'#f59e0b' } ],  // arc
  lines:  [ { from:[0,0], to:[2,0], color:'#7c3aed', label:'r', labelAt:[1,-0.2] } ],
  points: [ { x:0, y:0, label:'O' }, { x:2, y:0, label:'A' } ],
  texts:  [ { x:0.6, y:0.3, text:'∠AOB', color:'#7c3aed' } ],
}
```
- **`showAxes: false`** turns the graph into a clean diagram (no axes/grid) — use
  it for circles, triangles, sectors.
- **`lines`**: arbitrary segments `{ from:[x,y], to:[x,y], color?, dashed?, label?,
  labelAt?, width?, delay? }` — radii, triangle sides, chords. They draw on.
- **`texts`**: free-floating labels `{ x, y, text, color?, size?, delay? }` — for
  angle marks (30°, 60°, 1 radian, ∠AOB) anywhere on the diagram.
- For a round circle keep the graph **square** with symmetric ranges (see `circles`).

### 3.4 `placeValueTable` — number place columns (arithmetic lessons)
Used by `buildPlaceValueLesson`. Columns `{ name, digit, value, power,
showDigit, showValue, showPower, active }`; `active` lifts/highlights the column.

---

## 4. narration vs speech — write BOTH

| Field | Audience | Rules |
|-------|----------|-------|
| `narration` | on-screen text | HTML ok: `<b>`, `<sup>`. Simple unicode math is fine (`×, ∞, →, ², ⁺`). **For anything that stacks — surds, fractions — use inline LaTeX `$…$`** (e.g. `$y = \\pm\\sqrt{r^{2}-x^{2}}$`); it renders with KaTeX. Never write surds/fractions as bare unicode (`√(…)`, `1/x`) — they break. |
| `speech` | the voice (Kokoro/TTS) | **Plain English only.** Spell out math. **No** LaTeX, **no** symbols. |

### ⚠️ Narration math — how it renders (and how not to break it)
- Inline math in `narration` uses **single dollars**: `$ … $` (e.g.
  `$y = \\pm\\sqrt{r^{2}-x^{2}}$`). It is rendered by **KaTeX auto-render**
  (loaded from CDN) the moment the narration mounts — so it works across step
  transitions.
- **Always** use `$…$` for surds and fractions. Bare unicode like `√(r²−x²)` or
  `1/x` renders as broken text — the root won't stretch over the radicand.
- In JS strings every backslash is **doubled**: write `\\sqrt`, `\\pm`,
  `\\frac{a}{b}`, `r^{2}` (not `\sqrt`). A missing/typo'd command shows the raw
  `$…$` source on screen — that's your signal the LaTeX is malformed.
- Don't wrap `$…$` inside `<b>…</b>`; place the math standalone (it styles itself).
- Keep simple sub/superscripts as unicode (`x², 2ˣ, x⁺`) — only switch to `$…$`
  when something must **stack** (roots, fractions, big operators).

**Speech spelling rules** (so the voice reads naturally):
- `2ˣ` → "2 to the power x"   ·   `aˣ` → "a to the power x"
- `1/x` → "1 over x"   ·   `½` → "one half"   ·   `¾` → "three quarters"
- `x → ∞` → "x approaches infinity"   ·   `x → −∞` → "x approaches negative infinity"
- `x → 0⁺` → "x approaches zero from the right"   ·   `0⁻` → "from the left"
- `(1, 2)` → "the point one, two"   ·   `10²` → "ten to the power two"
- `≠` → "not equal to"   ·   `xy = 1` → "x y equals one"

---

## 4b. Glossary — tap-to-define key terms ⭐ (REQUIRED in every lesson)

> Students may not know words like *tangent, asymptote, inflection*. **Every
> lesson must ship a `glossary`** so any key term in the narration becomes a
> tappable chip that opens a plain-English definition bubble.

How it works:
- The lesson (and optionally a step) carries `glossary: { term: definition }`.
- The renderer **auto-highlights** any glossary term found in the `narration`
  (dotted purple underline) and shows a popover when tapped. No markup needed in
  the narration — just include the word and define it in the glossary.

```js
import { BASE_GLOSSARY } from './registry';
// in your build function's return:
return { emoji: '📐', title: '…', steps, glossary: { ...BASE_GLOSSARY, /* topic terms */ } };
```

- **`BASE_GLOSSARY`** (in `registry.js`) already defines the common terms
  (asymptote, tangent, domain, range, limit, turning point, inflection,
  polynomial, degree, semicircle, double zero, y-intercept, …). **Spread it into
  every lesson** and add any topic-specific terms on top.
- Definitions must be **one plain sentence**, student-friendly, no jargon.
- Multi-word terms work (`'turning point'`, `'rectangular hyperbola'`).
- The definition bubble appears **directly above the tapped word** with its tail
  pointing at it (handled by the renderer — nothing to configure).

---

## 5. The animation principle (most important)

> **Every sentence of narration should have a matching visual on the board.**

| When the narration says… | Put this on the board |
|--------------------------|-----------------------|
| "passes through (0, 1)" | `points: [{ x:0, y:1, label:'(0,1)', pulse:true, guide:true }]` |
| "the x-axis is an asymptote" | `asymptotes: [{ type:'h', y:0, color:'#ef4444' }]` |
| "as x → ∞, y → ∞" | `traces: [{ from:0, to:<offscreen>, label:'x → ∞' }]` |
| "as x → −∞, y → 0" | `traces: [{ from:1, to:-3, label:'x → −∞', approach:'x' }]` |
| "as x → 0⁺, y → ∞" | `traces: [{ from:2.5, to:0.26, label:'x → 0⁺', approach:'y' }]` |
| "positive when x > 0, negative when x < 0" | `segments: [{from:0,to:2,color:'#10b981',label:'+'}, {from:-2,to:0,color:'#ef4444',label:'−'}]` |
| "the sign goes − , + , − , +" | one `segments` entry per interval, alternating red/green, each with `label:'−'`/`label:'+'`, staggered `delay`; pair with a `valueTable` whose `sign` row auto-colours to match |
| "the highest power is the degree" | `\color{#7c3aed}{…}` in LaTeX around the leading term |
| "the + root gives the right semicircle; − gives the left" | two `circles` entries with `color:'#10b981'` (right) and `color:'#ef4444'` (left); formula uses `\color{}` to match |
| "domain is all real x / range is y > 0" | `bands` (shade range) + `axisBars` (domain bar on x, range bar on y) |
| "here is a table of values" | `valueTable` then the `graph` |
| "the result / limit is …" | `math` with `emphasis: true` |
| recap step: mentions 5 formulas in order | `mathRow` with one coloured card per formula, `delay` matching narration order |

Pace the lesson **one idea per step**. Re-show the same graph across steps but
change *only* the highlight/point/trace that the current sentence is about — so
the student's eye is led exactly where the words go.

### Animation timings (already built into the renderer — for reference)
- Board items stagger in **0.22 s** apart; step transitions crossfade (0.30 s).
- Curve draws 1.1 s · asymptote sweeps from 0.5 s · points pop ~1.15 s · labels 1.3 s.
- Tracer loops: travels for `dur` (~2.6 s) then a 0.75 s pause, repeat.
- `segments` draw ~0.9 s (stagger with `delay`) · `bands` fade ~0.9 s · `axisBars` draw ~1.1 s.

---

## 5b. Player look & feel (premium / AI-app style)

The renderer (`LessonPlayer.jsx`) is styled to feel like *Khan Academy +
Duolingo + ChatGPT*:
- **Background** `#F8F7FF` with a soft **purple ambient glow** (radial blur).
- **Board** sits in a white **glowing card** (large soft purple shadow, ~90 px blur).
- **Narration = an AI-tutor chat bubble**: a round avatar on the left, an
  **"AI TUTOR"** label, animated **typing dots** while speaking, and a tail on
  the bubble. The bubble springs in each step.
- **Top progress bar** + step counter; controls are pill buttons on a blurred bar.

### 🧑‍🏫 Custom tutor avatar (swap-in point)
The avatar currently uses a `Sparkles` icon inside the gradient circle in the
**AI tutor bubble** (search `Sparkles` in `LessonPlayer.jsx`). To use a custom
character (e.g. a caricature of the teacher):
1. Drop the artwork in `public/lessons/tutor-avatar.svg` (or `.png`).
2. In the bubble's avatar `<div>`, replace `<Sparkles … />` with
   `<img src="/lessons/tutor-avatar.svg" style={{ width:'100%', height:'100%', borderRadius:'50%' }} />`
   and set the circle's `overflow:'hidden'` (keep the pulsing ring on an outer
   wrapper so it isn't clipped).
3. Optionally change the `"AI TUTOR"` label text to the tutor's name.

---

## 6. Recipe: from a screenshot to a finished lesson

1. **Find the topicId** in `src/constants/curriculumData.js` (search the title /
   code, e.g. `3H` → `y11a-3H`).
2. **Outline the steps** from the screenshot — one concept each. Typical order:
   definition → worked example (table + graph) → key points → limits/asymptotes
   (with traces) → domain & range (emphasis math).
3. **Write the spec** in `registry.js`:
   - Either inline a `buildXxxLesson({ audioBase })` helper (preferred for
     reusable families) or a literal `{ emoji, title, steps:[…] }`.
   - For each step write `narration` (HTML), `speech` (plain), and `board`.
   - Apply the **animation principle** table above.
4. **Register** it in `LESSONS` with the right `topicId` and
   `audioBase: '/lessons/audio/<topicId>'`.
5. **Add an audio job** in `scripts/generateLessonAudio.mjs`:
   ```js
   { id: '<topicId>', steps: buildXxxLesson().steps },
   ```
6. **Generate + compress voice** (dev machine):
   ```bash
   node scripts/generateLessonAudio.mjs
   cd public/lessons/audio/<topicId>
   for f in step-*.wav; do ffmpeg -y -i "$f" -codec:a libmp3lame -qscale:a 4 "${f%.wav}.mp3"; done
   rm -f *.wav
   ```
7. **Build & deploy:** `npm run build` then `npx vercel --prod`.
8. The **"Learn step-by-step 🔊"** button now appears on that topic (Curriculum →
   topic). Done.

> ⚠️ If you change a step's `speech`, **re-run the audio generator** for that
> lesson — the mp3 must match the new words.

---

## 7. Reference lessons (read these as templates)

- **`buildPlaceValueLesson`** (`y7-1g`) — uses `placeValueTable` + `math`.
  Shows progressive reveal of place values and expanded form.
- **`buildAsymptotesLesson`** (`y11a-3H`) — uses `graph` with `curves`,
  highlighted `asymptotes`, pulsing `points`, and **`traces` that run to the
  limits**. This is the model for any graphing lesson.

---

## 8. Quality checklist (before shipping a lesson)

- [ ] Preview every step: **no raw `$…$` text** on screen (means broken LaTeX);
      surds/fractions stack correctly.
- [ ] Lesson ships a `glossary` (spread `BASE_GLOSSARY` + topic terms); every
      hard word in the narration is defined.
- [ ] Circles/semicircles use the `circles` primitive (not `±√` curves).
- [ ] Every step has `narration`, `speech`, and a meaningful `board`.
- [ ] `speech` has **no symbols/LaTeX** — all math spelled out.
- [ ] Every "as x → …" sentence has a matching **trace**.
- [ ] Every named point has a **pulsing point**; every named asymptote is
      **colour-highlighted**.
- [ ] Sign-analysis steps: `valueTable` has a `'sign'` row (auto red/green) **and**
      matching red/green `segments` with `label:'+'`/`label:'−'` on the graph.
- [ ] "Highest power / degree" step: leading term wrapped in `\color{#7c3aed}{…}`.
- [ ] Two-case formulas (e.g. `±√`) shown with two coloured curves/arcs **and**
      `\color{}` in the matching formula.
- [ ] Recap steps use `mathRow` with one coloured card per formula, delays ordered
      to match the narration.
- [ ] One idea per step; graphs reuse the same window so motion is comparable.
- [ ] `topicId` matches `curriculumData.js`; `audioBase` set; mp3s generated.
- [ ] `npm run build` passes; deployed; button shows on the topic.
