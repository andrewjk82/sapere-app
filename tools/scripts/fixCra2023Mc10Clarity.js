/**
 * Clarify cra2023-mc10 / cra2023s-mc10:
 *  - Clear SVG (shaded intervals matching A,B,C definitions)
 *  - Question stem with line-broken definitions + note on reversed limits
 *  - Full even/odd working in solutionSteps
 *
 *   node tools/scripts/fixCra2023Mc10Clarity.js
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const sa = JSON.parse(
  readFileSync(
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
      '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

const STYLE =
  'display:block;margin:12px auto;background:#fafbfd;border:1px solid #e2e8f0;border-radius:16px;';

function plane(xmin, xmax, ymin, ymax, W, H) {
  const padL = 36,
    padR = 28,
    padT = 26,
    padB = 32;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * (W - padL - padR);
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * (H - padT - padB);
  const ox = sx(0);
  const oy = sy(0);
  let axes = '';
  axes += `<line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ax)"/>`;
  axes += `<line x1="${ox.toFixed(1)}" y1="${(H - padB).toFixed(1)}" x2="${ox.toFixed(1)}" y2="${padT}" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ay)"/>`;
  axes += `<text x="${(W - padR - 2).toFixed(1)}" y="${(oy + 16).toFixed(1)}" font-size="12" fill="#64748b" font-weight="700">x</text>`;
  axes += `<text x="${(ox + 8).toFixed(1)}" y="${(padT + 4).toFixed(1)}" font-size="12" fill="#64748b" font-weight="700">y</text>`;
  return { sx, sy, W, H, axes, oy, ox };
}

function wrap(body, W, H) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${STYLE}">
<defs>
  <marker id="ax" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#94a3b8"/></marker>
  <marker id="ay" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#94a3b8"/></marker>
</defs>${body}</svg>`;
}

function tick(sx, sy, x, label, oy) {
  return `<line x1="${sx(x).toFixed(1)}" y1="${(oy - 3.5).toFixed(1)}" x2="${sx(x).toFixed(1)}" y2="${(oy + 3.5).toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>
<text x="${sx(x).toFixed(1)}" y="${(oy + 16).toFixed(1)}" font-size="11" fill="#64748b" text-anchor="middle" font-weight="600">${label}</text>`;
}

/** Even f: f(x)=a x^4 - b x^2 + c ; Odd g: g(x)=-p x^3 + q x */
function makeSvg({ a, b, c, p, q, left, mid, right, labels, xmax }) {
  // intervals: A-region related to [left, mid] on negative; B on [mid,0] for g; C on [mid,right] for f-g
  // left=-4, mid=-2, right=4 for original; labels A,B,C
  const L = Math.abs(left); // 4
  const M = Math.abs(mid); // 2
  const R = right; // 4

  const f = (x) => a * x ** 4 - b * x ** 2 + c;
  const g = (x) => -p * x ** 3 + q * x;

  const xmin = -L - 1.2,
    xMax = L + 1.4,
    ymin = -3.2,
    ymax = 3.6;
  const W = 440,
    H = 300;
  const { sx, sy, axes, oy } = plane(xmin, xMax, ymin, ymax, W, H);

  // sample curves
  const sample = (fn, x0, x1, n = 80) => {
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const x = x0 + ((x1 - x0) * i) / n;
      pts.push([x, fn(x)]);
    }
    return pts;
  };
  const toPath = (pts) =>
    pts.map((pt, i) => `${i ? 'L' : 'M'}${sx(pt[0]).toFixed(1)},${sy(pt[1]).toFixed(1)}`).join(' ');

  // Shade region for A: under f on [-L,-M] (the geometric area linked to A; A itself has reversed limits)
  const fNeg = sample(f, -L, -M, 40);
  const shadeA =
    toPath(fNeg) +
    ` L${sx(-M).toFixed(1)},${oy.toFixed(1)} L${sx(-L).toFixed(1)},${oy.toFixed(1)} Z`;

  // Shade B: under g on [-M, 0]
  const gB = sample(g, -M, 0, 40);
  const shadeB =
    toPath(gB) +
    ` L${sx(0).toFixed(1)},${oy.toFixed(1)} L${sx(-M).toFixed(1)},${oy.toFixed(1)} Z`;

  // Shade C: between f and g on [M, R]
  const fC = sample(f, M, R, 40);
  const gC = sample(g, M, R, 40).reverse();
  const shadeC =
    toPath(fC) +
    ' ' +
    gC
      .map((pt, i) => `${i ? 'L' : 'L'}${sx(pt[0]).toFixed(1)},${sy(pt[1]).toFixed(1)}`)
      .join(' ') +
    ' Z';

  // Target integral region under g on [0, R] — light dashed outline only (what we seek)
  const gPos = sample(g, 0, R, 50);

  let body = axes;
  body += `<path d="${shadeA}" fill="#6366f1" fill-opacity="0.22"/>`;
  body += `<path d="${shadeB}" fill="#f59e0b" fill-opacity="0.25"/>`;
  body += `<path d="${shadeC}" fill="#22c55e" fill-opacity="0.2"/>`;

  // curves
  body += `<path d="${toPath(sample(f, -L - 0.6, L + 0.6, 120))}" fill="none" stroke="#4f46e5" stroke-width="2.5"/>`;
  body += `<path d="${toPath(sample(g, -L - 0.8, L + 0.8, 120))}" fill="none" stroke="#15803d" stroke-width="2.5"/>`;

  // highlight target interval on x-axis [0,R]
  body += `<line x1="${sx(0).toFixed(1)}" y1="${(oy + 0).toFixed(1)}" x2="${sx(R).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#0ea5e9" stroke-width="4" stroke-opacity="0.35"/>`;

  for (const x of [-L, -M, M, R].filter((v, i, a) => a.indexOf(v) === i)) {
    body += tick(sx, sy, x, String(x), oy);
  }
  body += tick(sx, sy, 0, '0', oy);

  // Labels
  const [labA, labB, labC] = labels;
  body += `<text x="${sx((-L - M) / 2).toFixed(1)}" y="${sy(f((-L - M) / 2) / 2 + (f((-L - M) / 2) < 0 ? -0.35 : 0.35)).toFixed(1)}" font-size="14" fill="#4338ca" font-weight="800" text-anchor="middle">${labA}</text>`;
  body += `<text x="${sx(-M / 2).toFixed(1)}" y="${sy(g(-M / 2) * 0.55 + (g(-M / 2) >= 0 ? 0.35 : -0.35)).toFixed(1)}" font-size="14" fill="#b45309" font-weight="800" text-anchor="middle">${labB}</text>`;
  body += `<text x="${sx((M + R) / 2).toFixed(1)}" y="${sy((f((M + R) / 2) + g((M + R) / 2)) / 2).toFixed(1)}" font-size="14" fill="#15803d" font-weight="800" text-anchor="middle">${labC}</text>`;

  // Legend
  body += `<rect x="${sx(L - 0.2).toFixed(1)}" y="${sy(3.35).toFixed(1)}" width="10" height="10" fill="#4f46e5"/>`;
  body += `<text x="${(sx(L - 0.2) + 14).toFixed(1)}" y="${(sy(3.35) + 9).toFixed(1)}" font-size="11" fill="#334155" font-weight="600">y = f(x) even</text>`;
  body += `<rect x="${sx(L - 0.2).toFixed(1)}" y="${sy(2.85).toFixed(1)}" width="10" height="10" fill="#15803d"/>`;
  body += `<text x="${(sx(L - 0.2) + 14).toFixed(1)}" y="${(sy(2.85) + 9).toFixed(1)}" font-size="11" fill="#334155" font-weight="600">y = g(x) odd</text>`;

  // Caption strip
  body += `<text x="${sx(0).toFixed(1)}" y="${(sy(ymin) + 18).toFixed(1)}" font-size="10" fill="#64748b" text-anchor="middle" font-weight="600">Shaded: ${labA}↔ under f on [${-L},${-M}] · ${labB}↔ under g on [${-M},0] · ${labC}↔ between f &amp; g on [${M},${R}]</text>`;

  return wrap(body, W, H);
}

function stepsOriginal() {
  return [
    {
      explanation:
        'Note carefully: the integral defining \\(A\\) has reversed limits (from \\(-2\\) down to \\(-4\\)). Reversing limits multiplies by \\(-1\\): \\(A = \\displaystyle\\int_{-2}^{-4} f = -\\int_{-4}^{-2} f\\).',
      workingOut: 'A = -\\displaystyle\\int_{-4}^{-2} f(x)\\,dx',
      graphData: null,
    },
    {
      explanation:
        'Because \\(f\\) is even, its graph is symmetric about the \\(y\\)-axis, so the integral on \\([-4,-2]\\) equals the integral on \\([2,4]\\).',
      workingOut:
        '\\displaystyle\\int_{-4}^{-2} f = \\int_{2}^{4} f \\quad\\Rightarrow\\quad \\int_2^4 f(x)\\,dx = -A',
      graphData: null,
    },
    {
      explanation:
        'Because \\(g\\) is odd, \\(\\displaystyle\\int_{-2}^{0} g(x)\\,dx = -\\int_{0}^{2} g(x)\\,dx\\). So from the definition of \\(B\\):',
      workingOut: 'B = -\\displaystyle\\int_0^2 g \\quad\\Rightarrow\\quad \\int_0^2 g(x)\\,dx = -B',
      graphData: null,
    },
    {
      explanation:
        'Split \\(C\\) by linearity: \\(C = \\displaystyle\\int_2^4 f - \\int_2^4 g\\). Substitute \\(\\int_2^4 f = -A\\) and solve for the integral of \\(g\\).',
      workingOut:
        'C = -A - \\displaystyle\\int_2^4 g \\quad\\Rightarrow\\quad \\int_2^4 g(x)\\,dx = -A - C',
      graphData: null,
    },
    {
      explanation:
        'The integral we want is over \\([0,4]\\). Split at \\(x=2\\) and insert the two results above.',
      workingOut:
        '\\displaystyle\\int_0^4 g = \\int_0^2 g + \\int_2^4 g = (-B) + (-A - C) = -A - B - C',
      graphData: null,
    },
    {
      explanation: 'Therefore \\(\\displaystyle\\int_0^4 g(x)\\,dx = -A - B - C\\).',
      workingOut: '-A - B - C',
      graphData: null,
    },
  ];
}

function stepsSimilar() {
  return [
    {
      explanation:
        'The integral defining \\(P\\) has reversed limits: \\(P = \\displaystyle\\int_{-1}^{-3} f = -\\int_{-3}^{-1} f\\).',
      workingOut: 'P = -\\displaystyle\\int_{-3}^{-1} f(x)\\,dx',
      graphData: null,
    },
    {
      explanation:
        'Evenness of \\(f\\): \\(\\displaystyle\\int_{-3}^{-1} f = \\int_1^3 f\\), so \\(\\displaystyle\\int_1^3 f = -P\\).',
      workingOut: '\\displaystyle\\int_1^3 f(x)\\,dx = -P',
      graphData: null,
    },
    {
      explanation:
        'Oddness of \\(g\\): \\(Q = \\displaystyle\\int_{-1}^{0} g = -\\int_0^1 g\\), so \\(\\displaystyle\\int_0^1 g = -Q\\).',
      workingOut: '\\displaystyle\\int_0^1 g(x)\\,dx = -Q',
      graphData: null,
    },
    {
      explanation:
        'From \\(R = \\displaystyle\\int_1^3(f-g) = \\int_1^3 f - \\int_1^3 g\\) and \\(\\int_1^3 f = -P\\):',
      workingOut: '\\displaystyle\\int_1^3 g(x)\\,dx = -P - R',
      graphData: null,
    },
    {
      explanation: 'Split the target integral at \\(x=1\\) and combine.',
      workingOut:
        '\\displaystyle\\int_0^3 g = \\int_0^1 g + \\int_1^3 g = (-Q) + (-P - R) = -P - Q - R',
      graphData: null,
    },
    {
      explanation: 'Therefore \\(\\displaystyle\\int_0^3 g(x)\\,dx = -P - Q - R\\).',
      workingOut: '-P - Q - R',
      graphData: null,
    },
  ];
}

async function main() {
  const svgMain = makeSvg({
    a: 0.06,
    b: 0.85,
    c: 1.2,
    p: 0.05,
    q: 0.55,
    left: -4,
    mid: -2,
    right: 4,
    labels: ['A', 'B', 'C'],
  });
  const svgSim = makeSvg({
    a: 0.12,
    b: 1.2,
    c: 1.4,
    p: 0.09,
    q: 0.7,
    left: -3,
    mid: -1,
    right: 3,
    labels: ['P', 'Q', 'R'],
  });

  const patches = {
    'cra2023-mc10': {
      question: [
        'The graphs of an even function \\(f\\) and an odd function \\(g\\) are shown.',
        'Define',
        '\\[A = \\displaystyle\\int_{-2}^{-4} f(x)\\,dx,\\quad B = \\displaystyle\\int_{-2}^{0} g(x)\\,dx,\\quad C = \\displaystyle\\int_{2}^{4}\\bigl(f(x)-g(x)\\bigr)\\,dx.\\]',
        '(Note: the limits of \\(A\\) run from \\(-2\\) down to \\(-4\\), so they are reversed.)',
        'Which expression equals \\(\\displaystyle\\int_{0}^{4} g(x)\\,dx\\)?',
      ].join(' '),
      title: 'Even/odd integrals: express ∫g from 0 to 4',
      graphData: { svg: svgMain },
      options: [
        { text: '\\(A + B + C\\)', imageUrl: '' },
        { text: '\\(A - B + C\\)', imageUrl: '' },
        { text: '\\(-A + B - C\\)', imageUrl: '' },
        { text: '\\(-A - B - C\\)', imageUrl: '' },
      ],
      answer: '3',
      hint: 'Reverse the limits of A first. Use f even (∫ on [−4,−2] equals ∫ on [2,4]) and g odd (∫ on [−2,0] equals −∫ on [0,2]). Split C and the target integral at x=2.',
      solution:
        'A = −∫_{-4}^{-2} f = −∫_2^4 f so ∫_2^4 f = −A. B = −∫_0^2 g so ∫_0^2 g = −B. C = ∫_2^4 f − ∫_2^4 g ⇒ ∫_2^4 g = −A − C. Therefore ∫_0^4 g = ∫_0^2 g + ∫_2^4 g = −B + (−A − C) = −A − B − C.',
      solutionSteps: stepsOriginal(),
      isNew: true,
    },
    'cra2023s-mc10': {
      question: [
        'The graphs of an even function \\(f\\) and an odd function \\(g\\) are shown.',
        'Define',
        '\\[P = \\displaystyle\\int_{-1}^{-3} f(x)\\,dx,\\quad Q = \\displaystyle\\int_{-1}^{0} g(x)\\,dx,\\quad R = \\displaystyle\\int_{1}^{3}\\bigl(f(x)-g(x)\\bigr)\\,dx.\\]',
        '(Note: the limits of \\(P\\) run from \\(-1\\) down to \\(-3\\), so they are reversed.)',
        'Which expression equals \\(\\displaystyle\\int_{0}^{3} g(x)\\,dx\\)?',
      ].join(' '),
      title: 'Even/odd integrals: express ∫g from 0 to 3',
      graphData: { svg: svgSim },
      options: [
        { text: '\\(P + Q + R\\)', imageUrl: '' },
        { text: '\\(P - Q + R\\)', imageUrl: '' },
        { text: '\\(-P + Q - R\\)', imageUrl: '' },
        { text: '\\(-P - Q - R\\)', imageUrl: '' },
      ],
      answer: '3',
      hint: 'Reverse limits of P first. Use f even and g odd. Split R and the target integral at x=1.',
      solution:
        'P = −∫_{-3}^{-1} f = −∫_1^3 f so ∫_1^3 f = −P. Q = −∫_0^1 g so ∫_0^1 g = −Q. R = ∫_1^3 f − ∫_1^3 g ⇒ ∫_1^3 g = −P − R. Therefore ∫_0^3 g = −Q + (−P − R) = −P − Q − R.',
      solutionSteps: stepsSimilar(),
      isNew: true,
    },
  };

  for (const [id, patch] of Object.entries(patches)) {
    const ref = db.collection('questions').doc(id);
    const snap = await ref.get();
    if (!snap.exists) {
      console.log('missing', id);
      continue;
    }
    if (snap.data().origin === 'teacher') {
      console.log('skip teacher', id);
      continue;
    }
    await ref.set({ ...patch, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    console.log('patched', id, 'svg', patch.graphData.svg.length, 'steps', patch.solutionSteps.length);
  }

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('done', ver);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
