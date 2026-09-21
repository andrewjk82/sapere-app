# SVG & JSXGraph Label Placement Rules

## Rule 0 (CRITICAL): viewBox MUST be pixel-scale (~300–400 units), NEVER raw math-coordinate units

**2026-08-26 incident:** a coordinate-plane sketch (willoughby2019-s4-q2) was
built with `viewBox="-4 -12 10 14"` — i.e. the whole drawing is only 10×14
**units** wide, using raw math coordinates (x from -4 to 6, y from -12 to 2)
directly as the SVG coordinate system. A data point drawn as `<circle r="3">`
is then 30% of the entire diagram's width. Rendered at `width="100%"` in a
real container, that circle became a giant solid blob covering most of the
card — completely illegible, not just "a bit large."

**This is the single most severe SVG bug class — worse than a label overlap,
because the whole diagram is unusable, not just one text element.** It
happens whenever a diagram is built by copy-pasting math (x, y) coordinates
straight into SVG `cx`/`cy`/`d` attributes without first converting them to
pixel space.

**Rule:** Before writing any coordinate-plane / graph-sketch SVG, define an
explicit pixel-scale conversion up front and use it for every coordinate:
```js
const SCALE = 25;        // px per math unit — tune so the plotted range fills ~250-350px
const ORIGIN_X = 115;    // pixel x where math x = 0 sits
const ORIGIN_Y = 90;     // pixel y where math y = 0 sits
const px = (x) => ORIGIN_X + x * SCALE;
const py = (y) => ORIGIN_Y - y * SCALE;   // y flips: SVG y grows downward
```
Then `viewBox="0 0 <total px width> <total px height>"` (a normal ~300-400
range), and every point/line/curve uses `px(mathX)`, `py(mathY)` — never the
raw math value. Circle radii (~4-6px), stroke widths (~1.5-2.5px), and font
sizes (~11-13px) are then sane absolute pixel values, not accidentally 30%
of the canvas. This applies to every coordinate-geometry, function-sketch,
or graphed-data SVG, not just geometry-shape diagrams — the same
pixel-scale requirement in CLAUDE.md for shape diagrams applies here too.

**Follow-up gotcha even after converting to pixel-scale:** a plotted curve
(not just a point) can still overflow the viewBox if you sample it across a
fixed x-range without checking where the resulting y-values land. The
willoughby2019-s4-q2 parabola was sampled from x=-3 to x=5, but at those
endpoints y = x²-2x-8 evaluates to +7 — well above the intended y=2 grid
ceiling — so the curve's two ends shot out through the top of the card.
Before fixing the sampling range, solve for where the curve crosses your
intended boundary (here: `x² - 2x - 8 = 2` → `x = 1 ± √11 ≈ -2.32, 4.32`) and
sample strictly inside that range (with a small margin), not across whatever
x-range happens to contain the interesting points. Check the curve's
extremes against the viewBox bounds the same way you'd check a point's
coordinates — a curve is just many points and every one of them can clip.

**Small data tables (not geometry diagrams) rendered as SVG: use a fixed
pixel `width`/`height`, not `width="100%"` + a CSS `max-width` cap.**
2026-08-27 incident (gosford2020-q18/q30/q31 probability/data/annuity
tables): `width="100%" style="max-width:460px"` still stretched the table to
the full width of the question card in the live app — the container evidently
doesn't honor `max-width` the way a geometry diagram's card does. Fix: set
`width="<totalW>" height="<totalH>"` to the SVG's own intrinsic pixel size
(matching the `viewBox`) and `style="display:block;margin:0.75rem auto"` —
no `width="100%"`, no `max-width`. This lets a small table render at its
natural compact size and stay centered, instead of stretching to fill
whatever container it's dropped into.

**Same fix still needs padding, or the bottom/right edge clips:** setting
`width`/`height` to the table's exact content size with no margin left the
bottom border and last row sitting flush against the viewBox edge — the
outer card's own rounding/overflow then clipped it. Add uniform padding
(e.g. 12px) on every side: build the table at local origin `(0,0)` inside a
`<g transform="translate(PAD,PAD)">`, and size the outer `viewBox`/`width`/
`height` as `contentSize + PAD*2`. Never size an SVG exactly to its content's
bounding box — always pad first.

**2026-08-27 follow-up (recurred on gosford2020-q17/q21/q24, three separate
times in the same batch): a flat small pad (e.g. `+20`) is not enough when a
TEXT LABEL sits past the last plotted point** — a curve-end label like
`y=cos x` anchored `text-start` at `px(2π)` extends dozens of pixels further
right than the curve's own rightmost x-coordinate, and a tick label like
`2π` centered on the last point extends past it on both sides. Compute the
right/bottom padding to explicitly include the label's own width, not just
the curve/shape bounding box: reserve **60-90px** on whichever side carries a
text label past the last data point (not a uniform ~15-20px pad), and always
render the page at the actual size once, mentally trace the rightmost and
bottom-most drawn pixel (a label's `text-anchor`, not just its `x`), and
confirm it's inside `totalW`/`totalH` before calling it done.

**Never hand-guess Bezier control points for a curve that has a real
function** — sample the actual function instead. 2026-08-27 incident
(gosford2020-q21's `y=3sin(2x)+1` graph, gosford2020-q24's `y=sinx`/`y=cosx`
intersection graph): both were built as `<path d="M... C... C...">` with
control points picked by eye to "look wavy", not derived from the function at
all — the result had the wrong number of cycles, wrong amplitude, and peaks/
troughs in the wrong places, immediately obvious to anyone who knew what the
real curve looks like. **Rule:** for any plotted function (trig, polynomial,
exponential — anything with a formula), compute real `(x, f(x))` samples
across the domain (60-150 points is enough to look smooth) and connect them
with `L` (or `C` using the true local derivative, but plain `L` at that
density is visually indistinguishable and far less error-prone) — never
invent a curve shape from a mental picture of what it "should" look like:
```js
function samplePath(fn, x0, x1, n = 100) {
  let d = '';
  for (let i = 0; i <= n; i++) {
    const x = x0 + (x1 - x0) * (i / n);
    d += (i === 0 ? 'M' : 'L') + ` ${px(x)},${py(fn(x))} `;
  }
  return d.trim();
}
```
A hand-drawn approximation is only acceptable for a genuinely non-analytic
shape with no formula (e.g. an arbitrary "sketch a possible function" answer
graph) — anything with an actual `y=f(x)` in the question must be sampled.

**When joining two sampled-path segments into one filled shape (e.g. the
region between two curves), don't add a separator `L`/space combo on top of
the `M→L` replace — check the joint by eye.** 2026-08-27 incident
(gosford2020-q24's shaded area between `y=sinx` and `y=cosx`): the fill path
was built as `forwardSeg + ' L ' + backwardSeg.replace(/^M/, 'L')`. The
`replace` already turns the backward segment's leading `M` into an `L`, so
adding `' L '` as a join produced `...L 230.5,126.4 L L 230.5,126.4 L...` — a
bare `L` token with no coordinate pair after it, which is invalid path syntax
and silently truncated the fill partway through, leaving only a small
triangular sliver shaded instead of the full lens-shaped region. **Just
concatenate the two segments with a plain space** (`` `${forwardSeg} ${backwardSeg}` ``)
— the already-replaced leading `L` on the second segment is the only join
token needed. Before publishing any generated multi-segment path, grep the
final `d` string for `L\s+L` (two line commands back to back with no
coordinates between) or any other command letter immediately followed by
another command letter — that's always a bug.

**Another follow-up gotcha: never spread an `[x, y]` point tuple into
separate `px()`/`py()` calls.** `px(x)` and `py(y)` each take ONE coordinate
value, not a point. `py(...somePoint)` where `somePoint = [x, y]` spreads
into `py(x, y)` — since `py` only reads its first argument, this silently
computes the pixel-y from the point's **x**-coordinate, not its y-coordinate.
**2026-08-27 incident (gosford2020-q17):** exactly this bug turned a correct
piecewise graph (flat segment → quarter-circle → diagonal → quarter-circle →
flat segment) into a single garbage diagonal line, because every point's
pixel-y came from its math-x. Always index explicitly — `px(point[0])`,
`py(point[1])` — or write a `pt = ([x, y]) => \`${px(x)},${py(y)}\`` helper
that takes the whole tuple and indexes correctly inside itself. Sanity-check
the constructed `d` path string by eye (or print it) before writing it to
Firestore: an `M`/`L`/`A` sequence with a plausible geometric progression is
the actual guard here, not code that "looks like" it does the right unpacking.

## The Golden Rule of Labels
**Labels MUST NEVER intersect or overlap with geometric lines or axes.**
If a number or label is placed directly on top of a line, it makes the diagram look unprofessional and hinders readability.

## Guidelines for SVG Placement

### 1. Vertical Lines
If a label describes a vertical line (e.g., the height of a shape), place it **clearly to the left or right** of the line.
- **Left Side:** Use `text-anchor="end"` and shift `x` at least 10px to the left of the line.
  - *Good:* `<text x="35" y="155" text-anchor="end">1.5 m</text>` (Line is at x=45)
  - *Bad:* `<text x="25" y="155">1.5 m</text>` (Without text-anchor="end", text flows right and hits the line at x=45).
- **Right Side:** Use `text-anchor="start"` and shift `x` at least 10px to the right of the line.

### 2. Horizontal Lines
If a label describes a horizontal line, place it **clearly above or below** the line.
- **Above:** Shift `y` at least 10px above the line.
- **Below:** Shift `y` at least 15px below the line (accounting for text baseline).

### 3. Slanted Lines
- Offset both `x` and `y` proportionally away from the midpoint of the line. 
- You can use the `dx` and `dy` attributes or simply calculate an `x, y` coordinate that is safely pushed outward.

### 4. Background Fill
If a label *must* be placed inside a shape or over a busy background, ensure the text is legible. However, it still must never cross the border strokes of the polygon.

## Testing Your Mental Model
Before outputting SVG `<text>` tags, mentally trace the length of the string from its `x, y` origin based on its `text-anchor`. If that bounding box hits a `<line>` or `<polygon>` stroke, **move it further away.**
