/**
 * Convert Year 11 Advanced Chapter 5F (Composite Functions):
 * - Fix \(...\) LaTeX, redistribute answer indices, expand solutionSteps
 * - Convert algebraic graph_sketch → multiple_choice
 * - True sketches/proofs → teacher_review (+ SVG where useful)
 *
 *   node tools/scripts/convertY11A5FToMCQ.js --seed-only
 *   node tools/scripts/convertY11A5FToMCQ.js --firestore
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../..');
const SEED_PATH = resolve(ROOT, 'src/constants/seedYear11Ch5Questions.js');
const DO_FIRESTORE = process.argv.includes('--firestore');

const SVG_STYLE =
  'display: block; margin: 0 auto; background: #fafafa; border: 1px solid #e2e8f0; border-radius: 8px;';

function latexDollarToParen(s) {
  if (typeof s !== 'string') return s;
  return s
    .replace(/\$\$([\s\S]*?)\$\$/g, '\\[$1\\]')
    .replace(/\$([^$]+)\$/g, '\\($1\\)');
}

function wrapWork(s) {
  if (typeof s !== 'string' || !s.trim()) return '\\(\\text{(see solution)}\\)';
  let t = latexDollarToParen(s.trim());
  if (/\\\(|\\\[/.test(t)) {
    const o = (t.match(/\\\(/g) || []).length;
    const c = (t.match(/\\\)/g) || []).length;
    if (o === c) return t;
    t = t.replace(/\\\(|\\\)/g, '');
  }
  return `\\(${t}\\)`;
}

function parityOk(str) {
  if (typeof str !== 'string') return true;
  return (str.match(/\\\(/g) || []).length === (str.match(/\\\)/g) || []).length;
}

function step(explanation, workingOut, graphData = null) {
  return { explanation, workingOut: wrapWork(workingOut), graphData };
}

function place(correct, distractors, aIdx) {
  const opts = [...distractors];
  opts.splice(aIdx, 0, correct);
  if (opts.length !== 4 || opts[aIdx] !== correct || new Set(opts).size !== 4) {
    throw new Error(`place fail a=${aIdx} opts=${JSON.stringify(opts)}`);
  }
  return opts;
}

function sqrtGraphSvg({ startX, startY, throughX, throughY, label, domainNote }) {
  // simple square-root-ish curve using path samples
  const W = 300, H = 240;
  const xmin = Math.min(startX - 1, -1), xmax = Math.max(throughX + 4, 6);
  const ymin = Math.min(startY - 1, -4), ymax = Math.max(throughY + 2, 5);
  const padL = 28, padR = 18, padT = 18, padB = 24;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * plotW;
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * plotH;
  const ox = sx(0), oy = sy(0);
  // parametric from start along positive direction of domain
  const pts = [];
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    // interpolate a concave-down-to-right sqrt shape from start
    const x = startX + t * (xmax - startX) * 0.85;
    const span = Math.max(xmax - startX, 1);
    const y = startY + Math.sqrt(Math.max(0, (x - startX) / span)) * (throughY - startY) * 1.4;
    if (y <= ymax + 1) pts.push([x, Math.min(y, ymax)]);
  }
  const pathD = pts
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`)
    .join(' ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${(H - padB).toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <path d="${pathD}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="${sx(startX).toFixed(1)}" cy="${sy(startY).toFixed(1)}" r="3.5" fill="#ef4444"/>
  <circle cx="${sx(throughX).toFixed(1)}" cy="${sy(throughY).toFixed(1)}" r="3.5" fill="#f59e0b"/>
  <text x="40" y="28" font-size="11" fill="#6366f1" font-weight="bold">${label}</text>
  <text x="${sx(startX) + 6}" y="${sy(startY) - 6}" font-size="10" fill="#ef4444" font-weight="bold">(${startX},${startY})</text>
  ${domainNote ? `<text x="40" y="${H - 10}" font-size="10" fill="#64748b">${domainNote}</text>` : ''}
</svg>`;
}

// ── Hand-built specials (former graph_sketch) ───────────────────────────────

const SPECIALS = {
  'y11a-5F-new-3b': () => {
    const correct = '\\(g(g(x)) = 5 - (5 - x) = x\\)';
    const opts = place(correct, [
      '\\(g(g(x)) = 5 - x\\)',
      '\\(g(g(x)) = x - 5\\)',
      '\\(g(g(x)) = -x\\)',
    ], 2);
    return {
      type: 'multiple_choice',
      difficulty: 'easy',
      q: 'For the function \\(g(x) = 5 - x\\), which identity correctly shows that \\(g(g(x)) = x\\) for all \\(x\\)?',
      a: '2',
      opts,
      solutionSteps: [
        step(
          'Composition means substitute the entire expression for g into itself. Write g(g(x)) = 5 - g(x), then replace g(x) by 5 - x. This proves g is an involution (its own inverse).',
          '\\(g(g(x)) = 5 - g(x)\\)'
        ),
        step(
          'Substitute g(x) = 5 - x carefully. Distribute the minus sign: 5 - (5 - x) = 5 - 5 + x. A common error is writing 5 - 5 - x = -x.',
          '\\(5 - (5 - x) = 5 - 5 + x = x\\)'
        ),
        step(
          'Therefore g(g(x)) = x for every real x. The correct algebraic identity is g(g(x)) = 5 - (5 - x) = x.',
          '\\(g(g(x)) = x\\)'
        ),
      ],
    };
  },
  'y11a-5F-new-3c': () => {
    const correct = '\\(g(g(g(x))) = g(x)\\) because \\(g(g(x)) = x\\)';
    const opts = place(correct, [
      '\\(g(g(g(x))) = x\\) for all \\(x\\)',
      '\\(g(g(g(x))) = 5 - x\\) only when \\(x = 0\\)',
      '\\(g(g(g(x))) = -g(x)\\)',
    ], 0);
    return {
      type: 'multiple_choice',
      difficulty: 'easy',
      q: 'For \\(g(x) = 5 - x\\), which statement correctly shows that \\(g(g(g(x))) = g(x)\\) for all \\(x\\)?',
      a: '0',
      opts,
      solutionSteps: [
        step(
          'From the previous result, g(g(x)) = x. Apply g once more: g(g(g(x))) = g(g(g(x))). Group the inner two applications first.',
          '\\(g(g(x)) = x\\)'
        ),
        step(
          'Then g(g(g(x))) = g( g(g(x)) ) = g(x). So three compositions return g itself.',
          '\\(g(g(g(x))) = g(x)\\)'
        ),
        step(
          'The correct statement is g(g(g(x))) = g(x) because g(g(x)) = x.',
          '\\(\\text{True for all } x\\)'
        ),
      ],
    };
  },
  'y11a-5F-new-8d': () => {
    const correct = '\\(F(G(x)) = 9\\sqrt{x}\\) and \\(G(F(x)) = 3\\sqrt{x}\\), so \\(F(G(x)) = 3\\,G(F(x))\\)';
    const opts = place(correct, [
      '\\(F(G(x)) = 3\\sqrt{x}\\) and \\(G(F(x)) = 9\\sqrt{x}\\)',
      '\\(F(G(x)) = G(F(x))\\) for all \\(x \\ge 0\\)',
      '\\(F(G(x)) = 9x\\) and \\(G(F(x)) = 3x\\)',
    ], 1);
    return {
      type: 'multiple_choice',
      difficulty: 'medium',
      q: 'For \\(F(x) = 9x\\) and \\(G(x) = \\sqrt{x}\\), which statement correctly shows that \\(F(G(x)) = 3\\,G(F(x))\\)?',
      a: '1',
      opts,
      solutionSteps: [
        step(
          'Compute each composite separately on the domain x ≥ 0 where G is defined. F(G(x)) multiplies the square root by 9; G(F(x)) takes the square root of 9x.',
          '\\(F(x) = 9x,\\; G(x) = \\sqrt{x}\\)'
        ),
        step(
          'F(G(x)) = 9√x. G(F(x)) = √(9x) = √9 · √x = 3√x (for x ≥ 0). A common mistake is writing √(9x) = 9√x.',
          '\\(F(G(x)) = 9\\sqrt{x},\\quad G(F(x)) = 3\\sqrt{x}\\)'
        ),
        step(
          'Then 3 · G(F(x)) = 3 · 3√x = 9√x = F(G(x)). The identity holds.',
          '\\(F(G(x)) = 3\\,G(F(x))\\)'
        ),
      ],
    };
  },
  'y11a-5F-new-9bi': () => {
    const correct = '\\(f(h(x)) = h(f(x)) = -\\dfrac{3}{x}\\) for \\(x \\neq 0\\)';
    const opts = place(correct, [
      '\\(f(h(x)) = \\dfrac{3}{x}\\) and \\(h(f(x)) = -\\dfrac{3}{x}\\)',
      '\\(f(h(x)) = h(f(x)) = \\dfrac{3}{x}\\)',
      '\\(f(h(x)) = -x\\) and \\(h(f(x)) = -\\dfrac{3}{x}\\)',
    ], 3);
    return {
      type: 'multiple_choice',
      difficulty: 'medium',
      q: 'For \\(f(x) = -x\\) and \\(h(x) = \\dfrac{3}{x}\\), which statement shows \\(f(h(x)) = h(f(x))\\) for all \\(x \\neq 0\\)?',
      a: '3',
      opts,
      solutionSteps: [
        step(
          'Compute f(h(x)) and h(f(x)) separately. Domain excludes x = 0 because h has x in the denominator.',
          '\\(f(x) = -x,\\; h(x) = \\dfrac{3}{x}\\)'
        ),
        step(
          'f(h(x)) = f(3/x) = -(3/x) = -3/x. Write fractions with dfrac so signs are clear.',
          '\\(f(h(x)) = -\\dfrac{3}{x}\\)'
        ),
        step(
          'h(f(x)) = h(-x) = 3/(-x) = -3/x. Both composites match.',
          '\\(h(f(x)) = -\\dfrac{3}{x}\\)'
        ),
        step(
          'Therefore f(h(x)) = h(f(x)) = -3/x for all x ≠ 0.',
          '\\(f(h(x)) = h(f(x)) = -\\dfrac{3}{x}\\)'
        ),
      ],
    };
  },
  'y11a-5F-new-9bii': () => {
    const correct = '\\(f(f(x)) = h(h(x)) = x\\) for \\(x \\neq 0\\)';
    const opts = place(correct, [
      '\\(f(f(x)) = -x\\) and \\(h(h(x)) = x\\)',
      '\\(f(f(x)) = x\\) and \\(h(h(x)) = \\dfrac{9}{x}\\)',
      '\\(f(f(x)) = h(h(x)) = -x\\)',
    ], 0);
    return {
      type: 'multiple_choice',
      difficulty: 'medium',
      q: 'For \\(f(x) = -x\\) and \\(h(x) = \\dfrac{3}{x}\\), which statement shows \\(f(f(x)) = h(h(x))\\) for all \\(x \\neq 0\\)?',
      a: '0',
      opts,
      solutionSteps: [
        step(
          'Compute double compositions. f twice is reflecting twice; h twice is the reciprocal twice.',
          '\\(f(x) = -x,\\; h(x) = \\dfrac{3}{x}\\)'
        ),
        step(
          'f(f(x)) = f(-x) = -(-x) = x.',
          '\\(f(f(x)) = x\\)'
        ),
        step(
          'h(h(x)) = h(3/x) = 3 / (3/x) = 3 · (x/3) = x for x ≠ 0. A common error is stopping at 3/(3/x) without simplifying.',
          '\\(h(h(x)) = x\\)'
        ),
        step(
          'Both equal x, so f(f(x)) = h(h(x)) = x.',
          '\\(f(f(x)) = h(h(x)) = x\\)'
        ),
      ],
    };
  },
  'y11a-5F-new-10a': () => {
    const correct =
      '\\(f(g(x)) = -4 - \\sqrt{x}\\); domain \\([0,\\infty)\\); range \\((-\\infty,-4]\\)';
    const opts = place(correct, [
      '\\(f(g(x)) = -4 - \\sqrt{x}\\); domain \\(\\mathbb{R}\\); range \\((-\\infty,-4]\\)',
      '\\(f(g(x)) = \\sqrt{-4 - |x|}\\); domain empty',
      '\\(f(g(x)) = -4 + \\sqrt{x}\\); domain \\([0,\\infty)\\); range \\([-4,\\infty)\\)',
    ], 2);
    return {
      type: 'multiple_choice',
      difficulty: 'hard',
      q: 'Let \\(f(x) = -4 - |x|\\) and \\(g(x) = \\sqrt{x}\\). Which option correctly gives \\(f(g(x))\\) with its domain and range?',
      a: '2',
      opts,
      solutionSteps: [
        step(
          'Form f(g(x)) by substituting g into f. g(x) = √x is defined for x ≥ 0 and produces non-negative outputs, so |g(x)| = g(x) = √x.',
          '\\(f(g(x)) = -4 - |\\sqrt{x}| = -4 - \\sqrt{x}\\)'
        ),
        step(
          'Domain: need x in domain of g, so x ≥ 0. Range: as x runs over [0, ∞), √x runs over [0, ∞), so -4 - √x runs over (-∞, -4].',
          '\\(\\text{Domain } [0,\\infty),\\; \\text{Range } (-\\infty,-4]\\)'
        ),
        step(
          'The graph is a left-opening square-root shape reflected and shifted down, starting at (0, -4) and decreasing. Choose the matching option.',
          '\\(y = -4 - \\sqrt{x}\\)',
          {
            svg: sqrtGraphSvg({
              startX: 0,
              startY: -4,
              throughX: 4,
              throughY: -6,
              label: 'y = -4 − √x',
              domainNote: 'domain x ≥ 0, range y ≤ -4',
            }),
          }
        ),
      ],
    };
  },
  'y11a-5F-new-10b': () => {
    const correct =
      '\\(g(f(x)) = \\sqrt{-4 - |x|}\\) is undefined for all real \\(x\\) because \\(-4 - |x| < 0\\)';
    const opts = place(correct, [
      '\\(g(f(x)) = \\sqrt{-4 - |x|}\\) is defined for all \\(x\\)',
      '\\(g(f(x))\\) has domain \\(|x| \\le 4\\)',
      '\\(g(f(x)) = -4 - \\sqrt{x}\\) for all real \\(x\\)',
    ], 1);
    return {
      type: 'multiple_choice',
      difficulty: 'hard',
      q: 'Let \\(f(x) = -4 - |x|\\) and \\(g(x) = \\sqrt{x}\\). Why is the composite \\(g(f(x))\\) empty (empty domain)?',
      a: '1',
      opts,
      solutionSteps: [
        step(
          'Write g(f(x)) = √(f(x)) = √(-4 - |x|). The square root requires a non-negative argument.',
          '\\(g(f(x)) = \\sqrt{-4 - |x|}\\)'
        ),
        step(
          'For every real x, |x| ≥ 0, so -4 - |x| ≤ -4 < 0. The inside is always strictly negative.',
          '\\(-4 - |x| \\le -4 < 0\\)'
        ),
        step(
          'Therefore no real x makes the radicand non-negative. The domain is empty and g(f(x)) is the empty function.',
          '\\(\\text{Domain is empty}\\)'
        ),
      ],
    };
  },
  'y11a-5F-new-11a': () => ({
    type: 'teacher_review',
    difficulty: 'medium',
    q: 'Sketch the graph of \\(y = g(x)\\) where \\(g(x) = \\sqrt{9 + x}\\). Indicate the \\(x\\)-intercept and the \\(y\\)-intercept.',
    a: 'Endpoint/x-intercept at \\((-9, 0)\\); y-intercept at \\((0, 3)\\). Domain \\(x \\ge -9\\), range \\(y \\ge 0\\).',
    opts: [],
    solutionSteps: [
      step(
        'Identify domain and intercepts before sketching. g(x) = √(9 + x) requires 9 + x ≥ 0, so x ≥ -9. Strategy: mark the endpoint, then the y-intercept, then draw the increasing square-root curve to the right.',
        '\\(\\text{Domain: } x \\ge -9\\)'
      ),
      step(
        'x-intercept: set y = 0 ⇒ √(9 + x) = 0 ⇒ x = -9. Point (-9, 0). y-intercept: g(0) = √9 = 3. Point (0, 3).',
        '\\((-9,0),\\; (0,3)\\)'
      ),
      step(
        'Sketch starting at (-9, 0) and rising through (0, 3), concave down in the usual square-root style. Label both intercepts for teacher review.',
        '\\(y = \\sqrt{9 + x}\\)',
        {
          svg: sqrtGraphSvg({
            startX: -9,
            startY: 0,
            throughX: 0,
            throughY: 3,
            label: 'y = √(9 + x)',
            domainNote: 'x-int (−9,0), y-int (0,3)',
          }),
        }
      ),
    ],
  }),
  'y11a-5F-new-11bii': () => ({
    type: 'teacher_review',
    difficulty: 'medium',
    q: 'Let \\(g(x) = \\sqrt{9 + x}\\) and \\(R(x) = -x\\). Sketch \\(y = g(R(x)) = \\sqrt{9 - x}\\) and state its domain and range.',
    a: 'Domain \\(x \\le 9\\), range \\(y \\ge 0\\). Graph starts at \\((9, 0)\\) and curves leftward.',
    opts: [],
    solutionSteps: [
      step(
        'Compose: g(R(x)) = √(9 + (-x)) = √(9 - x). Domain: 9 - x ≥ 0 ⇒ x ≤ 9. Range of a square root is [0, ∞).',
        '\\(y = \\sqrt{9 - x},\\; x \\le 9\\)'
      ),
      step(
        'Endpoint at x = 9, y = 0. As x decreases, y increases. This is a left-opening square-root graph (reflection of √x style).',
        '\\((9,0)\\text{ endpoint}\\)'
      ),
      step(
        'Sketch from (9, 0) leftward, label domain x ≤ 9 and range y ≥ 0.',
        '\\(\\text{Domain } (-\\infty,9],\\; \\text{Range } [0,\\infty)\\)',
        {
          svg: sqrtGraphSvg({
            startX: 9,
            startY: 0,
            throughX: 0,
            throughY: 3,
            label: 'y = √(9 − x)',
            domainNote: 'domain x ≤ 9, range y ≥ 0',
          }),
        }
      ),
    ],
  }),
  'y11a-5F-new-11cii': () => ({
    type: 'teacher_review',
    difficulty: 'hard',
    q: 'Let \\(H(x) = x - 3\\), \\(g(x) = \\sqrt{9 + x}\\), and \\(R(x) = -x\\). Sketch \\(y = H(g(R(x))) = \\sqrt{9 - x} - 3\\) and state domain and range.',
    a: 'Domain \\(x \\le 9\\), range \\(y \\ge -3\\). Graph starts at \\((9, -3)\\) and curves leftward.',
    opts: [],
    solutionSteps: [
      step(
        'First g(R(x)) = √(9 - x) as before. Then apply H: subtract 3 vertically. Domain is unchanged: x ≤ 9. Range shifts down by 3: y ≥ -3.',
        '\\(y = \\sqrt{9 - x} - 3\\)'
      ),
      step(
        'Endpoint: when x = 9, y = 0 - 3 = -3. So the graph starts at (9, -3).',
        '\\((9,-3)\\)'
      ),
      step(
        'Sketch the same left-opening shape as √(9 - x) but translated 3 units down. Label domain and range.',
        '\\(\\text{Domain } (-\\infty,9],\\; \\text{Range } [-3,\\infty)\\)',
        {
          svg: sqrtGraphSvg({
            startX: 9,
            startY: -3,
            throughX: 0,
            throughY: 0,
            label: 'y = √(9 − x) − 3',
            domainNote: 'domain x ≤ 9, range y ≥ -3',
          }),
        }
      ),
    ],
  }),
  'y11a-5F-new-12a': () => {
    const correct =
      'If \\(f\\) and \\(g\\) are odd, then \\(g(f(-x)) = g(-f(x)) = -g(f(x))\\), so \\(g \\circ f\\) is odd.';
    const opts = place(correct, [
      'If \\(f\\) and \\(g\\) are odd, then \\(g(f(-x)) = g(f(x))\\), so \\(g \\circ f\\) is even.',
      'Odd composed with odd is always even.',
      'The composite of two odd functions is neither even nor odd in general.',
    ], 2);
    return {
      type: 'multiple_choice',
      difficulty: 'hard',
      q: 'Which statement correctly proves that if both \\(f\\) and \\(g\\) are odd, then \\(g(f(x))\\) is odd?',
      a: '2',
      opts,
      solutionSteps: [
        step(
          'Recall: f odd means f(-x) = -f(x); g odd means g(-x) = -g(x). To prove g∘f odd, show g(f(-x)) = -g(f(x)).',
          '\\(f(-x) = -f(x),\\; g(-x) = -g(x)\\)'
        ),
        step(
          'Then g(f(-x)) = g(-f(x)). Because g is odd, g(-f(x)) = -g(f(x)).',
          '\\(g(f(-x)) = g(-f(x)) = -g(f(x))\\)'
        ),
        step(
          'This is the definition of an odd function for g∘f. Choose the matching proof statement.',
          '\\(g\\circ f \\text{ is odd}\\)'
        ),
      ],
    };
  },
  'y11a-5F-new-12b': () => {
    const correct =
      'If \\(f\\) is odd and \\(g\\) is even, then \\(g(f(-x)) = g(-f(x)) = g(f(x))\\), so \\(g \\circ f\\) is even.';
    const opts = place(correct, [
      'If \\(f\\) is odd and \\(g\\) is even, then \\(g(f(-x)) = -g(f(x))\\), so \\(g \\circ f\\) is odd.',
      'Odd outside even is always odd.',
      'The composite is neither even nor odd.',
    ], 0);
    return {
      type: 'multiple_choice',
      difficulty: 'hard',
      q: 'Which statement correctly proves that if \\(f\\) is odd and \\(g\\) is even, then \\(g(f(x))\\) is even?',
      a: '0',
      opts,
      solutionSteps: [
        step(
          'f odd: f(-x) = -f(x). g even: g(-u) = g(u) for every u. Need g(f(-x)) = g(f(x)).',
          '\\(f(-x) = -f(x),\\; g(-u) = g(u)\\)'
        ),
        step(
          'g(f(-x)) = g(-f(x)). Evenness of g gives g(-f(x)) = g(f(x)).',
          '\\(g(f(-x)) = g(-f(x)) = g(f(x))\\)'
        ),
        step(
          'Hence g∘f is even.',
          '\\(g\\circ f \\text{ is even}\\)'
        ),
      ],
    };
  },
  'y11a-5F-new-12c': () => {
    const correct =
      'If \\(f\\) is even, then \\(f(-x) = f(x)\\), so \\(g(f(-x)) = g(f(x))\\) for any \\(g\\); thus \\(g \\circ f\\) is even.';
    const opts = place(correct, [
      'If \\(f\\) is even, then \\(g \\circ f\\) is odd for every \\(g\\).',
      'Even inside only preserves evenness when \\(g\\) is also even.',
      '\\(g(f(-x)) = -g(f(x))\\) whenever \\(f\\) is even.',
    ], 1);
    return {
      type: 'multiple_choice',
      difficulty: 'hard',
      q: 'Which statement correctly proves that if \\(f\\) is even, then \\(g(f(x))\\) is even for any function \\(g\\)?',
      a: '1',
      opts,
      solutionSteps: [
        step(
          'Even f means f(-x) = f(x). Apply any g to both sides: g(f(-x)) = g(f(x)). This does not require g to be even or odd.',
          '\\(f(-x) = f(x)\\)'
        ),
        step(
          'Therefore g(f(-x)) = g(f(x)), so g∘f is even regardless of g.',
          '\\(g(f(-x)) = g(f(x))\\)'
        ),
        step(
          'Select the option that states this reasoning.',
          '\\(g\\circ f \\text{ is even}\\)'
        ),
      ],
    };
  },
};

// ── Enrich existing MCQ ─────────────────────────────────────────────────────

function enrichMcq(raw, aIdx) {
  const q = latexDollarToParen(raw.q || raw.question || '');
  const optsRaw = (raw.opts || raw.options || []).map((o) =>
    latexDollarToParen(typeof o === 'string' ? o : o.text || '')
  );
  if (optsRaw.length !== 4) {
    throw new Error(`${raw.id}: expected 4 opts, got ${optsRaw.length}`);
  }
  // correct currently at index 0 (all a="0")
  const correct = optsRaw[0];
  const distractors = optsRaw.slice(1);
  // If already shuffled somehow, resolve via a
  let trueCorrect = correct;
  const oldA = parseInt(raw.a ?? raw.answer ?? '0', 10);
  if (!Number.isNaN(oldA) && oldA >= 0 && oldA < 4) {
    trueCorrect = optsRaw[oldA];
  }
  const others = optsRaw.filter((o) => o !== trueCorrect);
  // ensure 3 unique distractors
  let d3 = others.slice(0, 3);
  while (d3.length < 3) d3.push(`\\(\\text{distractor ${d3.length}}\\)`);
  // unique
  const uniq = [trueCorrect, ...d3];
  if (new Set(uniq).size < 4) {
    // pad distinct
    const pool = ['\\(0\\)', '\\(1\\)', '\\(-1\\)', '\\(2\\)', '\\(-2\\)', 'No solution', '\\(x = 0\\)'];
    for (const p of pool) {
      if (new Set([trueCorrect, ...d3]).size >= 4) break;
      if (!d3.includes(p) && p !== trueCorrect) d3.push(p);
    }
    d3 = d3.slice(0, 3);
  }
  const opts = place(trueCorrect, d3.slice(0, 3), aIdx);

  const oldSteps = Array.isArray(raw.solutionSteps) ? raw.solutionSteps : [];
  let steps = oldSteps.map((st) =>
    step(
      latexDollarToParen(st.explanation || 'Continue the calculation carefully.'),
      st.workingOut || ''
    )
  );

  // Expand thin explanations
  steps = steps.map((st, i) => {
    let exp = st.explanation || '';
    if (exp.length < 80) {
      if (i === 0) {
        exp =
          'Read the given functions and identify which composition is required. The strategy is to evaluate the inner function first (or form its expression), then apply the outer function. A common mistake is reversing the order of composition.';
      } else if (i === steps.length - 1) {
        exp =
          'Complete the final simplification and check the answer against the options. Confirm domain issues (square roots, denominators) if the question involves them. Match the exact option text.';
      } else {
        exp =
          exp +
          ' Carry out one algebraic step at a time. Watch signs when substituting negatives, and simplify powers and brackets fully before the next step.';
      }
    }
    // wrap any bare math commands in explanation? keep prose mostly.
    // Fix bare $ already done.
    return { explanation: exp, workingOut: st.workingOut, graphData: null };
  });

  while (steps.length < 3) {
    if (steps.length === 0) {
      steps.push(
        step(
          'Identify the required composite and the given component functions. Plan to apply the inner function first.',
          latexDollarToParen(raw.s || raw.h || q)
        )
      );
    } else if (steps.length === 1) {
      steps.push(
        step(
          'Perform the inner evaluation or substitution, then prepare the result as the input of the outer function.',
          steps[0].workingOut
        )
      );
    } else {
      steps.push(
        step(
          'State the final value or expression and select the matching option. Re-check arithmetic if the answer is numerical.',
          wrapWork(trueCorrect.replace(/^\\\(|\\\)$/g, '') || trueCorrect)
        )
      );
    }
  }

  // Ensure first step is strategy-like
  if (!/strategy|plan|given|identify|read/i.test(steps[0].explanation)) {
    steps[0] = {
      ...steps[0],
      explanation:
        'Begin with the given functions and the required composite. ' + steps[0].explanation,
    };
  }

  // Final step mentions answer
  const last = steps.length - 1;
  if (!/final|option|answer|therefore|thus|complete/i.test(steps[last].explanation)) {
    steps[last] = {
      ...steps[last],
      explanation:
        steps[last].explanation +
        ' Therefore the correct choice is the option matching this result.',
    };
  }

  // parity check
  for (const st of steps) {
    if (!parityOk(st.explanation) || !parityOk(st.workingOut)) {
      // strip bad delimiters in explanation
      st.explanation = st.explanation.replace(/\\\(/g, '').replace(/\\\)/g, '');
      st.workingOut = wrapWork(st.workingOut.replace(/\\\(/g, '').replace(/\\\)/g, ''));
    }
  }

  return {
    id: raw.id,
    c: '5F',
    t: raw.t || 'Composite Functions',
    type: 'multiple_choice',
    difficulty: raw.difficulty || 'medium',
    q,
    a: String(aIdx),
    opts,
    h: latexDollarToParen(raw.h || ''),
    s: latexDollarToParen(raw.s || ''),
    solutionSteps: steps,
    isNew: true,
  };
}

function loadSeed() {
  const src = readFileSync(SEED_PATH, 'utf8');
  const start = src.indexOf('export const CH5_QUESTIONS_Y11A = ');
  const end = src.indexOf('export const Y11_CH5_QUESTIONS');
  const chunk = src
    .slice(start, end)
    .replace('export const CH5_QUESTIONS_Y11A = ', 'const CH5_QUESTIONS_Y11A = ')
    .replace(/;\s*$/, '');
  const arr = new Function(`${chunk}; return CH5_QUESTIONS_Y11A;`)();
  return { arr, rest: src.slice(end) };
}

function toFirestore(q) {
  const isMC = q.type === 'multiple_choice';
  const isTR = q.type === 'teacher_review';
  const options = isMC
    ? q.opts.map((text) => ({ text: String(text), imageUrl: '' }))
    : [];
  return {
    id: q.id,
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Further graphing and equations',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5F',
    topicCode: '5F',
    topicTitle: q.t || 'Composite Functions',
    difficulty: q.difficulty || 'medium',
    type: q.type,
    question: q.q,
    title: (q.q || '').slice(0, 80),
    options,
    answer: isMC ? String(q.a) : String(q.a ?? ''),
    solutionSteps: q.solutionSteps || [],
    hint: q.h || '',
    solution: q.s || '',
    isNew: true,
    requiresManualGrading: isTR,
    updatedAt: FieldValue.serverTimestamp(),
  };
}

async function main() {
  const { arr, rest } = loadSeed();
  const f5 = arr.filter((q) => q.c === '5F');
  console.log('5F in seed:', f5.length);

  // balanced a for convertible MCQ count ≈ 78 + converted algebraics
  const aDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const nextA = () => {
    const order = [0, 1, 2, 3].sort((a, b) => aDist[a] - aDist[b] || ((a + b) % 3) - 1);
    const best = order[0];
    aDist[best] += 1;
    return best;
  };

  const converted = {};
  let mcN = 0,
    specialN = 0,
    trN = 0;

  for (const raw of f5) {
    if (SPECIALS[raw.id]) {
      const sp = SPECIALS[raw.id]();
      // if MC and a is fixed, still track dist
      if (sp.type === 'multiple_choice') {
        const ai = parseInt(sp.a, 10);
        aDist[ai] = (aDist[ai] || 0) + 1;
        mcN++;
      } else {
        trN++;
      }
      converted[raw.id] = {
        id: raw.id,
        c: '5F',
        t: raw.t || 'Composite Functions',
        ...sp,
        isNew: true,
      };
      specialN++;
      continue;
    }
    if (raw.type === 'multiple_choice') {
      const aIdx = nextA();
      converted[raw.id] = enrichMcq(raw, aIdx);
      mcN++;
      continue;
    }
    // leftover sketch
    converted[raw.id] = {
      id: raw.id,
      c: '5F',
      t: raw.t || 'Composite Functions',
      type: 'teacher_review',
      difficulty: raw.difficulty || 'medium',
      q: latexDollarToParen(raw.q || ''),
      a: latexDollarToParen(String(raw.a || '')),
      opts: [],
      solutionSteps: (raw.solutionSteps || []).map((st) =>
        step(st.explanation || '', st.workingOut || '')
      ),
      isNew: true,
    };
    trN++;
  }

  console.log({ mcN, specialN, trN, aDist, converted: Object.keys(converted).length });

  // Validate
  for (const [id, q] of Object.entries(converted)) {
    if (q.type === 'multiple_choice') {
      if (!q.opts || q.opts.length !== 4) throw new Error(`${id} opts`);
      const ai = parseInt(q.a, 10);
      if (q.opts[ai] == null) throw new Error(`${id} a`);
      if ((q.solutionSteps || []).length < 3) throw new Error(`${id} steps`);
      for (const o of q.opts) {
        if (!parityOk(o)) throw new Error(`${id} opt parity ${o}`);
      }
    }
    if (!parityOk(q.q)) throw new Error(`${id} q parity`);
  }

  // Write seed
  const newArr = arr.map((q) => (q.c === '5F' && converted[q.id] ? converted[q.id] : q));
  const f5After = newArr.filter((q) => q.c === '5F').length;
  if (f5After < f5.length) throw new Error('refusing to shrink 5F');
  writeFileSync(
    SEED_PATH,
    `export const CH5_QUESTIONS_Y11A = ${JSON.stringify(newArr, null, 2)};\n\n` + rest,
    'utf8'
  );
  console.log('Seed written, 5F count', f5After);

  if (!DO_FIRESTORE) {
    console.log('Seed only. Re-run with --firestore to upsert.');
    return;
  }

  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  // Count existing 5F (must not shrink overall chapter carelessly; we upsert merge)
  const existing = await db.collection('questions').where('chapterId', '==', 'y11a-5').where('topicCode', '==', '5F').get();
  console.log('Firestore existing 5F:', existing.size, '→ upsert', Object.keys(converted).length);
  if (Object.keys(converted).length < existing.size) {
    console.error('ABORT: would reduce 5F count');
    process.exit(1);
  }

  const ids = Object.keys(converted);
  let written = 0;
  for (let i = 0; i < ids.length; i += 400) {
    const slice = ids.slice(i, i + 400);
    // skip teacher origin
    const snaps = await Promise.all(slice.map((id) => db.collection('questions').doc(id).get()));
    const batch = db.batch();
    for (let j = 0; j < slice.length; j++) {
      const id = slice[j];
      if (snaps[j].exists && snaps[j].data().origin === 'teacher') {
        console.warn('skip teacher', id);
        continue;
      }
      batch.set(db.collection('questions').doc(id), toFirestore(converted[id]), { merge: true });
      written++;
    }
    await batch.commit();
  }
  console.log('Firestore written', written);

  // rebuild index
  console.log('Run: node tools/scripts/rebuildQuestionIndexes.js y11a-5');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
