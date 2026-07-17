/**
 * Clarify cra2023-mc10 / cra2023s-mc10 graph ↔ definitions.
 *
 * Critical geometry:
 *   A = ∫_{-2}^{-4} f = −∫_{-4}^{-2} f   (reversed limits!)
 *   so the shaded region under f on [−4,−2] has signed value −A, not A.
 *   B = ∫_{-2}^{0} g                   (shade under g equals B)
 *   C = ∫_2^4 (f−g)                    (shade BETWEEN f and g equals C)
 *   Target = ∫_0^4 g
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
  const padL = 40,
    padR = 22,
    padT = 22,
    padB = 48;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * (W - padL - padR);
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * (H - padT - padB);
  const ox = sx(0);
  const oy = sy(0);
  let axes = '';
  axes += `<line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ax)"/>`;
  axes += `<line x1="${ox.toFixed(1)}" y1="${(H - padB + 6).toFixed(1)}" x2="${ox.toFixed(1)}" y2="${padT}" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ay)"/>`;
  axes += `<text x="${(W - padR - 2).toFixed(1)}" y="${(oy + 14).toFixed(1)}" font-size="12" fill="#64748b" font-weight="700">x</text>`;
  axes += `<text x="${(ox + 7).toFixed(1)}" y="${(padT + 10).toFixed(1)}" font-size="12" fill="#64748b" font-weight="700">y</text>`;
  return { sx, sy, W, H, axes, oy, ox };
}

function wrap(body, W, H) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${STYLE}">
<defs>
  <marker id="ax" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#94a3b8"/></marker>
  <marker id="ay" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#94a3b8"/></marker>
  <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="6" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.45"/>
  </pattern>
</defs>${body}</svg>`;
}

function tick(sx, sy, x, label, oy) {
  return `<line x1="${sx(x).toFixed(1)}" y1="${(oy - 3.5).toFixed(1)}" x2="${sx(x).toFixed(1)}" y2="${(oy + 3.5).toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>
<text x="${sx(x).toFixed(1)}" y="${(oy + 15).toFixed(1)}" font-size="11" fill="#64748b" text-anchor="middle" font-weight="600">${label}</text>`;
}

/**
 * @param {object} cfg
 * @param {number} cfg.L  positive end for even interval (4 → [−4,−2] and [2,4])
 * @param {number} cfg.M  split (2)
 * @param {string[]} cfg.names  [A,B,C] or [P,Q,R]
 */
function makeSvg(cfg) {
  const { L, M, names } = cfg;
  const [nA, nB, nC] = names;

  // Even f and odd g chosen so regions are easy to see:
  // f dips below axis around |x|≈2.5–3.5; g positive on (0,≈3.5)
  const f = (x) => 0.055 * x ** 4 - 0.9 * x ** 2 + 1.35;
  const g = (x) => -0.055 * x ** 3 + 0.65 * x;

  const xmin = -L - 1.1,
    xmax = L + 1.3,
    ymin = -3.4,
    ymax = 3.8;
  const W = 460,
    H = 320;
  const { sx, sy, axes, oy } = plane(xmin, xmax, ymin, ymax, W, H);

  const sample = (fn, x0, x1, n = 60) => {
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const x = x0 + ((x1 - x0) * i) / n;
      pts.push([x, fn(x)]);
    }
    return pts;
  };
  const dPath = (pts) =>
    pts.map((pt, i) => `${i ? 'L' : 'M'}${sx(pt[0]).toFixed(1)},${sy(pt[1]).toFixed(1)}`).join(' ');

  // ── shades matching DEFINITIONS ──────────────────────────────────
  // Region linked to A: under f on [−L,−M]. Signed area = ∫_{−L}^{−M} f = −A
  // (because A has reversed limits). Label: "−A"
  const fLeft = sample(f, -L, -M, 50);
  const shadeNegA =
    dPath(fLeft) +
    ` L${sx(-M).toFixed(1)},${oy.toFixed(1)} L${sx(-L).toFixed(1)},${oy.toFixed(1)} Z`;

  // Region B: under g on [−M, 0]. Signed area = B exactly.
  const gB = sample(g, -M, 0, 50);
  const shadeB =
    dPath(gB) +
    ` L${sx(0).toFixed(1)},${oy.toFixed(1)} L${sx(-M).toFixed(1)},${oy.toFixed(1)} Z`;

  // Region C: BETWEEN f and g on [M, L]. Signed area = ∫(f−g) = C.
  // Build closed polygon: f left→right, then g right→left.
  const fRight = sample(f, M, L, 50);
  const gRight = sample(g, M, L, 50);
  const shadeC =
    dPath(fRight) +
    ' ' +
    gRight
      .slice()
      .reverse()
      .map((pt) => `L${sx(pt[0]).toFixed(1)},${sy(pt[1]).toFixed(1)}`)
      .join(' ') +
    ' Z';

  // Target: under g on [0, L] — hatched, NOT one of A,B,C
  const gTarget = sample(g, 0, L, 60);
  const shadeTarget =
    dPath(gTarget) +
    ` L${sx(L).toFixed(1)},${oy.toFixed(1)} L${sx(0).toFixed(1)},${oy.toFixed(1)} Z`;

  let body = axes;

  // draw target first (behind) with hatch
  body += `<path d="${shadeTarget}" fill="url(#hatch)" stroke="none"/>`;
  body += `<path d="${shadeNegA}" fill="#6366f1" fill-opacity="0.28"/>`;
  body += `<path d="${shadeB}" fill="#f59e0b" fill-opacity="0.35"/>`;
  body += `<path d="${shadeC}" fill="#22c55e" fill-opacity="0.28"/>`;

  // curves on top
  body += `<path d="${dPath(sample(f, -L - 0.5, L + 0.5, 140))}" fill="none" stroke="#4f46e5" stroke-width="2.6"/>`;
  body += `<path d="${dPath(sample(g, -L - 0.7, L + 0.7, 140))}" fill="none" stroke="#15803d" stroke-width="2.6"/>`;

  // ticks
  for (const x of [-L, -M, 0, M, L]) body += tick(sx, sy, x, String(x), oy);

  // Labels — MUST match definitions:
  // blue region = −A (not A)
  const xA = (-L - M) / 2;
  const yA = f(xA) / 2; // midpoint toward axis
  body += `<text x="${sx(xA).toFixed(1)}" y="${sy(yA).toFixed(1)}" font-size="15" fill="#3730a3" font-weight="800" text-anchor="middle">−${nA}</text>`;
  body += `<text x="${sx(xA).toFixed(1)}" y="${(sy(yA) + 14).toFixed(1)}" font-size="9" fill="#4338ca" font-weight="600" text-anchor="middle">∫_{−${L}}^{−${M}} f</text>`;

  const xB = -M / 2;
  const yB = g(xB) / 2;
  body += `<text x="${sx(xB).toFixed(1)}" y="${sy(yB - 0.15).toFixed(1)}" font-size="15" fill="#b45309" font-weight="800" text-anchor="middle">${nB}</text>`;
  body += `<text x="${sx(xB).toFixed(1)}" y="${(sy(yB - 0.15) + 14).toFixed(1)}" font-size="9" fill="#b45309" font-weight="600" text-anchor="middle">∫_{−${M}}^{0} g</text>`;

  const xC = (M + L) / 2;
  const yC = (f(xC) + g(xC)) / 2;
  body += `<text x="${sx(xC).toFixed(1)}" y="${sy(yC).toFixed(1)}" font-size="15" fill="#166534" font-weight="800" text-anchor="middle">${nC}</text>`;
  body += `<text x="${sx(xC).toFixed(1)}" y="${(sy(yC) + 14).toFixed(1)}" font-size="9" fill="#166534" font-weight="600" text-anchor="middle">∫(f−g)</text>`;

  // target label
  body += `<text x="${sx(L * 0.45).toFixed(1)}" y="${sy(Math.max(0.35, g(L * 0.45) * 0.5 + 0.4)).toFixed(1)}" font-size="11" fill="#0369a1" font-weight="700" text-anchor="middle">find ∫₀^{${L}} g  (hatched)</text>`;

  // legend box
  const lx = sx(-L - 0.9);
  const ly = sy(3.5);
  body += `<rect x="${(lx - 4).toFixed(1)}" y="${(ly - 4).toFixed(1)}" width="118" height="52" rx="6" fill="#fff" fill-opacity="0.92" stroke="#e2e8f0"/>`;
  body += `<rect x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" width="10" height="10" fill="#4f46e5"/>`;
  body += `<text x="${(lx + 14).toFixed(1)}" y="${(ly + 9).toFixed(1)}" font-size="11" fill="#334155" font-weight="600">y=f(x) even</text>`;
  body += `<rect x="${lx.toFixed(1)}" y="${(ly + 16).toFixed(1)}" width="10" height="10" fill="#15803d"/>`;
  body += `<text x="${(lx + 14).toFixed(1)}" y="${(ly + 25).toFixed(1)}" font-size="11" fill="#334155" font-weight="600">y=g(x) odd</text>`;
  body += `<rect x="${lx.toFixed(1)}" y="${(ly + 32).toFixed(1)}" width="10" height="10" fill="url(#hatch)" stroke="#0ea5e9" stroke-width="0.5"/>`;
  body += `<text x="${(lx + 14).toFixed(1)}" y="${(ly + 41).toFixed(1)}" font-size="11" fill="#334155" font-weight="600">target ∫ g</text>`;

  // footnote
  body += `<text x="${((sx(xmin) + sx(xmax)) / 2).toFixed(1)}" y="${(H - 14).toFixed(1)}" font-size="10" fill="#64748b" text-anchor="middle" font-weight="600">`;
  body += `Blue shade = ∫_{−${L}}^{−${M}} f = −${nA}  (because ${nA}=∫_{−${M}}^{−${L}} f has reversed limits) · Orange = ${nB} · Green band = ${nC}`;
  body += `</text>`;

  return wrap(body, W, H);
}

function stepsOriginal() {
  return [
    {
      explanation:
        'Look at the definition of \\(A\\): the limits run from \\(-2\\) down to \\(-4\\) (reversed). Reversing limits multiplies the integral by \\(-1\\):',
      workingOut:
        'A = \\displaystyle\\int_{-2}^{-4} f(x)\\,dx = -\\displaystyle\\int_{-4}^{-2} f(x)\\,dx',
      graphData: null,
    },
    {
      explanation:
        'On the diagram the blue shaded region is the signed area of \\(f\\) on \\([-4,-2]\\), which is exactly \\(\\displaystyle\\int_{-4}^{-2} f = -A\\). Because \\(f\\) is even, that equals the signed area of \\(f\\) on the mirror interval \\([2,4]\\):',
      workingOut:
        '\\displaystyle\\int_{-4}^{-2} f = \\int_{2}^{4} f = -A \\quad\\Rightarrow\\quad \\int_2^4 f(x)\\,dx = -A',
      graphData: null,
    },
    {
      explanation:
        'The orange shaded region is under \\(g\\) on \\([-2,0]\\), so its signed area is exactly \\(B\\). Because \\(g\\) is odd:',
      workingOut:
        'B = \\displaystyle\\int_{-2}^{0} g = -\\int_{0}^{2} g \\quad\\Rightarrow\\quad \\int_0^2 g(x)\\,dx = -B',
      graphData: null,
    },
    {
      explanation:
        'The green band is the region between the two curves on \\([2,4]\\). By definition its signed area is \\(C = \\displaystyle\\int_2^4(f-g)\\). Split and use the previous result for \\(\\int_2^4 f\\):',
      workingOut:
        'C = \\int_2^4 f - \\int_2^4 g = (-A) - \\int_2^4 g \\quad\\Rightarrow\\quad \\int_2^4 g = -A - C',
      graphData: null,
    },
    {
      explanation:
        'The hatched region is what we want: \\(\\displaystyle\\int_0^4 g\\). Split at \\(x=2\\) (where the orange and green pieces meet the positive axis) and combine:',
      workingOut:
        '\\displaystyle\\int_0^4 g = \\int_0^2 g + \\int_2^4 g = (-B) + (-A - C) = -A - B - C',
      graphData: null,
    },
    {
      explanation: 'Therefore the expression is \\(-A - B - C\\).',
      workingOut: '-A - B - C',
      graphData: null,
    },
  ];
}

function stepsSimilar() {
  return [
    {
      explanation:
        'Limits of \\(P\\) run from \\(-1\\) down to \\(-3\\) (reversed): \\(P = -\\displaystyle\\int_{-3}^{-1} f\\). The blue shade equals \\(\\displaystyle\\int_{-3}^{-1} f = -P\\).',
      workingOut: 'P = -\\displaystyle\\int_{-3}^{-1} f(x)\\,dx',
      graphData: null,
    },
    {
      explanation:
        'Evenness: \\(\\displaystyle\\int_{-3}^{-1} f = \\int_1^3 f\\), so \\(\\displaystyle\\int_1^3 f = -P\\).',
      workingOut: '\\displaystyle\\int_1^3 f(x)\\,dx = -P',
      graphData: null,
    },
    {
      explanation:
        'Orange shade is \\(Q = \\displaystyle\\int_{-1}^{0} g\\). Oddness: \\(\\displaystyle\\int_0^1 g = -Q\\).',
      workingOut: '\\displaystyle\\int_0^1 g(x)\\,dx = -Q',
      graphData: null,
    },
    {
      explanation:
        'Green band is \\(R = \\displaystyle\\int_1^3(f-g)\\). Then \\(\\displaystyle\\int_1^3 g = \\int_1^3 f - R = -P - R\\).',
      workingOut: '\\displaystyle\\int_1^3 g(x)\\,dx = -P - R',
      graphData: null,
    },
    {
      explanation: 'Hatched target: \\(\\displaystyle\\int_0^3 g = \\int_0^1 g + \\int_1^3 g = (-Q)+(-P-R)=-P-Q-R\\).',
      workingOut: '-P - Q - R',
      graphData: null,
    },
  ];
}

async function main() {
  const svgMain = makeSvg({ L: 4, M: 2, names: ['A', 'B', 'C'] });
  const svgSim = makeSvg({ L: 3, M: 1, names: ['P', 'Q', 'R'] });

  const patches = {
    'cra2023-mc10': {
      question: [
        'The graphs of an even function \\(f\\) and an odd function \\(g\\) are shown.',
        'Define',
        '\\[',
        'A = \\displaystyle\\int_{-2}^{-4} f(x)\\,dx,\\quad',
        'B = \\displaystyle\\int_{-2}^{0} g(x)\\,dx,\\quad',
        'C = \\displaystyle\\int_{2}^{4}\\bigl(f(x)-g(x)\\bigr)\\,dx.',
        '\\]',
        'Important: the limits of \\(A\\) are reversed (from \\(-2\\) down to \\(-4\\)), so the blue shaded signed area under \\(f\\) on \\([-4,-2]\\) equals \\(-A\\), not \\(A\\).',
        'Which expression equals the hatched signed area \\(\\displaystyle\\int_{0}^{4} g(x)\\,dx\\)?',
      ].join(' '),
      title: 'Even/odd integrals: express ∫₀⁴ g in terms of A,B,C',
      graphData: { svg: svgMain },
      options: [
        { text: '\\(A + B + C\\)', imageUrl: '' },
        { text: '\\(A - B + C\\)', imageUrl: '' },
        { text: '\\(-A + B - C\\)', imageUrl: '' },
        { text: '\\(-A - B - C\\)', imageUrl: '' },
      ],
      answer: '3',
      hint: 'Blue shade = −A. Orange = B. Green band = C. Target (hatched) = ∫₀⁴ g = ∫₀² g + ∫₂⁴ g. Use even/odd to rewrite each piece.',
      solution:
        'A = −∫_{-4}^{-2} f so blue shade = −A = ∫_2^4 f (even). B = orange = −∫_0^2 g so ∫_0^2 g = −B. C = green = ∫_2^4 f − ∫_2^4 g ⇒ ∫_2^4 g = −A − C. Target = −B + (−A − C) = −A − B − C.',
      solutionSteps: stepsOriginal(),
      isNew: true,
    },
    'cra2023s-mc10': {
      question: [
        'The graphs of an even function \\(f\\) and an odd function \\(g\\) are shown.',
        'Define',
        '\\[',
        'P = \\displaystyle\\int_{-1}^{-3} f(x)\\,dx,\\quad',
        'Q = \\displaystyle\\int_{-1}^{0} g(x)\\,dx,\\quad',
        'R = \\displaystyle\\int_{1}^{3}\\bigl(f(x)-g(x)\\bigr)\\,dx.',
        '\\]',
        'Important: the limits of \\(P\\) are reversed, so the blue shaded signed area under \\(f\\) on \\([-3,-1]\\) equals \\(-P\\), not \\(P\\).',
        'Which expression equals the hatched signed area \\(\\displaystyle\\int_{0}^{3} g(x)\\,dx\\)?',
      ].join(' '),
      title: 'Even/odd integrals: express ∫₀³ g in terms of P,Q,R',
      graphData: { svg: svgSim },
      options: [
        { text: '\\(P + Q + R\\)', imageUrl: '' },
        { text: '\\(P - Q + R\\)', imageUrl: '' },
        { text: '\\(-P + Q - R\\)', imageUrl: '' },
        { text: '\\(-P - Q - R\\)', imageUrl: '' },
      ],
      answer: '3',
      hint: 'Blue = −P. Orange = Q. Green band = R. Target (hatched) = ∫₀³ g.',
      solution:
        'P reversed ⇒ blue = −P = ∫_1^3 f. Q = −∫_0^1 g. R = ∫_1^3 f − ∫_1^3 g ⇒ ∫_1^3 g = −P − R. Target = −Q + (−P − R) = −P − Q − R.',
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
    console.log('patched', id, 'svg', patch.graphData.svg.length);
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
