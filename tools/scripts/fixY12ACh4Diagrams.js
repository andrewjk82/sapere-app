/**
 * Fix missing / broken diagrams for Year 12 Adv Ch4A area questions.
 * Uses graphData.svg (SvgGraph does not render jsxGraph "arc").
 *
 * Traffic: point-reads + merge writes only (4 docs).
 *
 *   node tools/scripts/fixY12ACh4Diagrams.js
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
  const padL = 42, padR = 22, padT = 28, padB = 32;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * (W - padL - padR);
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * (H - padT - padB);
  const ox = sx(0);
  const oy = sy(0);
  let axes = '';
  axes += `<line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ax)"/>`;
  axes += `<line x1="${ox.toFixed(1)}" y1="${(H - padB).toFixed(1)}" x2="${ox.toFixed(1)}" y2="${padT}" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ay)"/>`;
  axes += `<text x="${(W - padR - 4).toFixed(1)}" y="${(oy + 16).toFixed(1)}" font-size="13" fill="#64748b" font-weight="700">x</text>`;
  axes += `<text x="${(ox + 8).toFixed(1)}" y="${(padT + 4).toFixed(1)}" font-size="13" fill="#64748b" font-weight="700">y</text>`;
  axes += `<text x="${(ox - 14).toFixed(1)}" y="${(oy + 16).toFixed(1)}" font-size="12" fill="#94a3b8" font-weight="600">O</text>`;
  return { sx, sy, W, H, axes, oy };
}

function wrap(body, W, H) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${STYLE}">
<defs>
  <marker id="ax" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#94a3b8"/></marker>
  <marker id="ay" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#94a3b8"/></marker>
</defs>${body}</svg>`;
}

function tick(sx, sy, x, label, oy) {
  return `<line x1="${sx(x).toFixed(1)}" y1="${(oy - 4).toFixed(1)}" x2="${sx(x).toFixed(1)}" y2="${(oy + 4).toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>
<text x="${sx(x).toFixed(1)}" y="${(oy + 18).toFixed(1)}" font-size="11" fill="#64748b" text-anchor="middle" font-weight="600">${label}</text>`;
}

function ytick(sx, sy, y, label, ox) {
  return `<line x1="${(ox - 4).toFixed(1)}" y1="${sy(y).toFixed(1)}" x2="${(ox + 4).toFixed(1)}" y2="${sy(y).toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>
<text x="${(ox - 10).toFixed(1)}" y="${(sy(y) + 4).toFixed(1)}" font-size="11" fill="#64748b" text-anchor="end" font-weight="600">${label}</text>`;
}

function pt(sx, sy, x, y, name, dx = 8, dy = -8) {
  return `<circle cx="${sx(x).toFixed(1)}" cy="${sy(y).toFixed(1)}" r="3.5" fill="#475569" stroke="#fff" stroke-width="1.5"/>
<text x="${(sx(x) + dx).toFixed(1)}" y="${(sy(y) + dy).toFixed(1)}" font-size="12" fill="#1e293b" font-weight="700">${name}</text>`;
}

/** Piecewise: 0–3 y=3; 3–5 line 3→-3; 5–6 y=-3. Integral = 6. */
function svgAscMc3() {
  const xmin = -0.6, xmax = 7, ymin = -4, ymax = 4.2;
  const W = 360, H = 260;
  const { sx, sy, axes, oy } = plane(xmin, xmax, ymin, ymax, W, H);
  const ox = sx(0);
  let b = axes;
  // shade regions lightly
  b += `<path d="M${sx(0)},${oy} L${sx(0)},${sy(3)} L${sx(3)},${sy(3)} L${sx(3)},${oy} Z" fill="#6366f1" fill-opacity="0.12"/>`;
  b += `<path d="M${sx(3)},${oy} L${sx(3)},${sy(3)} L${sx(4)},${oy} Z" fill="#22c55e" fill-opacity="0.15"/>`;
  b += `<path d="M${sx(4)},${oy} L${sx(5)},${sy(-3)} L${sx(5)},${oy} Z" fill="#f43f5e" fill-opacity="0.12"/>`;
  b += `<path d="M${sx(5)},${oy} L${sx(5)},${sy(-3)} L${sx(6)},${sy(-3)} L${sx(6)},${oy} Z" fill="#f43f5e" fill-opacity="0.12"/>`;
  // curve
  b += `<path d="M${sx(0)},${sy(3)} L${sx(3)},${sy(3)} L${sx(5)},${sy(-3)} L${sx(6)},${sy(-3)}" fill="none" stroke="#4f46e5" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`;
  for (const x of [1, 2, 3, 4, 5, 6]) b += tick(sx, sy, x, String(x), oy);
  b += ytick(sx, sy, 3, '3', ox);
  b += ytick(sx, sy, -3, '−3', ox);
  b += `<text x="${sx(1.5).toFixed(1)}" y="${sy(1.6).toFixed(1)}" font-size="11" fill="#6366f1" font-weight="700">+9</text>`;
  b += `<text x="${sx(5.3).toFixed(1)}" y="${sy(-1.5).toFixed(1)}" font-size="11" fill="#f43f5e" font-weight="700">−3</text>`;
  return wrap(b, W, H);
}

/** 0–4 y=2; 4–8 line 2→-2; 8–10 y=-2. Integral = 4. */
function svgAscMc3v() {
  const xmin = -0.8, xmax = 11, ymin = -3.2, ymax = 3.2;
  const W = 380, H = 250;
  const { sx, sy, axes, oy } = plane(xmin, xmax, ymin, ymax, W, H);
  const ox = sx(0);
  let b = axes;
  b += `<path d="M${sx(0)},${oy} L${sx(0)},${sy(2)} L${sx(4)},${sy(2)} L${sx(4)},${oy} Z" fill="#6366f1" fill-opacity="0.12"/>`;
  b += `<path d="M${sx(4)},${oy} L${sx(4)},${sy(2)} L${sx(6)},${oy} Z" fill="#22c55e" fill-opacity="0.15"/>`;
  b += `<path d="M${sx(6)},${oy} L${sx(8)},${sy(-2)} L${sx(8)},${oy} Z" fill="#f43f5e" fill-opacity="0.12"/>`;
  b += `<path d="M${sx(8)},${oy} L${sx(8)},${sy(-2)} L${sx(10)},${sy(-2)} L${sx(10)},${oy} Z" fill="#f43f5e" fill-opacity="0.12"/>`;
  b += `<path d="M${sx(0)},${sy(2)} L${sx(4)},${sy(2)} L${sx(8)},${sy(-2)} L${sx(10)},${sy(-2)}" fill="none" stroke="#4f46e5" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`;
  for (const x of [2, 4, 6, 8, 10]) b += tick(sx, sy, x, String(x), oy);
  b += ytick(sx, sy, 2, '2', ox);
  b += ytick(sx, sy, -2, '−2', ox);
  return wrap(b, W, H);
}

/**
 * Dane path: quarter circle centre O A(0,2)→B(2,0);
 * line B→C(4,-2); horiz C→D(6,-2);
 * quarter centre (6,0) D(6,-2)→E(8,0). Integral = −6.
 */
function svgDane33a(cX = 4) {
  // cX is C's x-coordinate (4 original, 3 similar)
  const xmin = -0.8, xmax = 9, ymin = -3.2, ymax = 3.2;
  const W = 400, H = 280;
  const { sx, sy, axes, oy } = plane(xmin, xmax, ymin, ymax, W, H);
  let b = axes;

  // Sample quarter circle A→B: y = sqrt(4-x^2), x:0→2
  let d1 = '';
  for (let i = 0; i <= 40; i++) {
    const x = (2 * i) / 40;
    const y = Math.sqrt(Math.max(0, 4 - x * x));
    d1 += `${i ? 'L' : 'M'}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
  }
  // Line B to C
  const dLine = `M${sx(2).toFixed(1)},${sy(0).toFixed(1)} L${sx(cX).toFixed(1)},${sy(-2).toFixed(1)}`;
  // Horiz C to D(6,-2)
  const dH = `M${sx(cX).toFixed(1)},${sy(-2).toFixed(1)} L${sx(6).toFixed(1)},${sy(-2).toFixed(1)}`;
  // Quarter centre (6,0): y = -sqrt(4-(x-6)^2), x:6→8
  let d2 = '';
  for (let i = 0; i <= 40; i++) {
    const x = 6 + (2 * i) / 40;
    const y = -Math.sqrt(Math.max(0, 4 - (x - 6) ** 2));
    d2 += `${i ? 'L' : 'M'}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
  }

  // light fills for signed area intuition
  b += `<path d="${d1} L${sx(2).toFixed(1)},${oy} L${sx(0).toFixed(1)},${oy} Z" fill="#6366f1" fill-opacity="0.12"/>`;
  b += `<path d="M${sx(2).toFixed(1)},${oy} L${sx(2).toFixed(1)},${sy(0).toFixed(1)} L${sx(cX).toFixed(1)},${sy(-2).toFixed(1)} L${sx(cX).toFixed(1)},${oy} Z" fill="#f43f5e" fill-opacity="0.1"/>`;
  b += `<path d="M${sx(cX).toFixed(1)},${oy} L${sx(cX).toFixed(1)},${sy(-2).toFixed(1)} L${sx(6).toFixed(1)},${sy(-2).toFixed(1)} L${sx(6).toFixed(1)},${oy} Z" fill="#f43f5e" fill-opacity="0.12"/>`;
  b += `<path d="${d2} L${sx(8).toFixed(1)},${oy} L${sx(6).toFixed(1)},${oy} Z" fill="#f43f5e" fill-opacity="0.12"/>`;

  b += `<path d="${d1.trim()}" fill="none" stroke="#4f46e5" stroke-width="2.6" stroke-linecap="round"/>`;
  b += `<path d="${dLine}" fill="none" stroke="#4f46e5" stroke-width="2.6" stroke-linecap="round"/>`;
  b += `<path d="${dH}" fill="none" stroke="#4f46e5" stroke-width="2.6" stroke-linecap="round"/>`;
  b += `<path d="${d2.trim()}" fill="none" stroke="#4f46e5" stroke-width="2.6" stroke-linecap="round"/>`;

  b += pt(sx, sy, 0, 2, 'A', -16, -6);
  b += pt(sx, sy, 2, 0, 'B', 8, -10);
  b += pt(sx, sy, cX, -2, 'C', -4, 16);
  b += pt(sx, sy, 6, -2, 'D', 8, 16);
  b += pt(sx, sy, 8, 0, 'E', 8, -8);

  for (const x of [2, 4, 6, 8]) b += tick(sx, sy, x, String(x), oy);
  return wrap(b, W, H);
}

function stepsAsc3() {
  return [
    {
      explanation: 'From \\(x=0\\) to \\(x=3\\): rectangle height 3, width 3.',
      workingOut: '\\(A_1=3\\times 3=9\\)',
      graphData: null,
    },
    {
      explanation: 'From \\(x=3\\) to \\(x=5\\): line from 3 to \\(-3\\) crosses zero at \\(x=4\\). Upper triangle base 1, height 3.',
      workingOut: '\\(A_2=\\tfrac12\\times 1\\times 3=1.5\\)',
      graphData: null,
    },
    {
      explanation: 'Lower triangle from \\(x=4\\) to \\(x=5\\) has the same size but is below the axis.',
      workingOut: '\\(A_3=-1.5\\)',
      graphData: null,
    },
    {
      explanation: 'From \\(x=5\\) to \\(x=6\\): rectangle height \\(-3\\), width 1.',
      workingOut: '\\(A_4=-3\\)',
      graphData: null,
    },
    {
      explanation: 'Total signed area: \\(9+1.5-1.5-3=6\\).',
      workingOut: '\\(\\int_0^6 f(x)\\,dx=6\\)',
      graphData: null,
    },
  ];
}

function stepsAsc3v() {
  return [
    {
      explanation: 'Rectangle \\(0\\le x\\le 4\\), height 2: area \\(8\\).',
      workingOut: '\\(A_1=8\\)',
      graphData: null,
    },
    {
      explanation: 'Line from \\((4,2)\\) to \\((8,-2)\\) crosses at \\(x=6\\). Upper triangle area \\(+2\\).',
      workingOut: '\\(A_2=2\\)',
      graphData: null,
    },
    {
      explanation: 'Lower triangle from 6 to 8: area \\(-2\\).',
      workingOut: '\\(A_3=-2\\)',
      graphData: null,
    },
    {
      explanation: 'Rectangle \\(8\\le x\\le 10\\), height \\(-2\\): area \\(-4\\). Total \\(8+2-2-4=4\\).',
      workingOut: '\\(\\int_0^{10} g=4\\)',
      graphData: null,
    },
  ];
}

async function main() {
  const patches = {
    'asc2020-mc3': {
      graphData: { svg: svgAscMc3() },
      // Fix wrong key 6.75 → correct signed area is 6
      options: [
        { text: '\\(6\\)', imageUrl: '' },
        { text: '\\(7.5\\)', imageUrl: '' },
        { text: '\\(10.5\\)', imageUrl: '' },
        { text: '\\(9\\)', imageUrl: '' },
      ],
      answer: '0',
      solutionSteps: stepsAsc3(),
      isNew: true,
    },
    'asc2020-mc3v': {
      graphData: { svg: svgAscMc3v() },
      solutionSteps: stepsAsc3v(),
      isNew: true,
    },
    'dane2020-q33a': {
      graphData: { svg: svgDane33a(4) },
      isNew: true,
    },
    'dane2020s-q33a': {
      graphData: { svg: svgDane33a(3) },
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
    await ref.set(
      { ...patch, updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
    console.log('patched', id, 'svgLen', patch.graphData?.svg?.length);
  }

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('done version', ver);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
