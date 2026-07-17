/**
 * Restore car2020-q19 / car2020s-q19 diagrams + correct signed-area data.
 *
 * Original exam: A=8 above (−2→0), B=3 below (0→2), C=1 above (2→5)
 *   ⇒ ∫ = 8 − 3 + 1 = 6
 * MC conversion had dropped the graph and wrongly set C=5.
 *
 *   node tools/scripts/fixCar2020Q19Diagram.js
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
    padR = 24,
    padT = 28,
    padB = 34;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * (W - padL - padR);
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * (H - padT - padB);
  const ox = sx(0);
  const oy = sy(0);
  let axes = '';
  axes += `<line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ax)"/>`;
  axes += `<line x1="${ox.toFixed(1)}" y1="${(H - padB).toFixed(1)}" x2="${ox.toFixed(1)}" y2="${padT}" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ay)"/>`;
  axes += `<text x="${(W - padR - 4).toFixed(1)}" y="${(oy + 16).toFixed(1)}" font-size="13" fill="#64748b" font-weight="700">x</text>`;
  axes += `<text x="${(ox + 8).toFixed(1)}" y="${(padT + 4).toFixed(1)}" font-size="13" fill="#64748b" font-weight="700">y</text>`;
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
  return `<line x1="${sx(x).toFixed(1)}" y1="${(oy - 4).toFixed(1)}" x2="${sx(x).toFixed(1)}" y2="${(oy + 4).toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>
<text x="${sx(x).toFixed(1)}" y="${(oy + 18).toFixed(1)}" font-size="11" fill="#64748b" text-anchor="middle" font-weight="600">${label}</text>`;
}

/** car2020-q19: A above 8, B below 3, C above 1 on [−2,5] */
function svgCar19() {
  const xmin = -2.8,
    xmax = 5.8,
    ymin = -2.4,
    ymax = 3.2;
  const W = 420,
    H = 260;
  const { sx, sy, axes, oy } = plane(xmin, xmax, ymin, ymax, W, H);

  // Smooth piecewise curve through axis intercepts at −2, 0, 2, 5
  // Control heights: A hump ~2.2, B dip ~−1.6, C hump ~1.1
  const pathCurve = [
    [sx(-2), oy],
    [sx(-1.4), sy(1.9)],
    [sx(-0.7), sy(2.3)],
    [sx(0), oy],
    [sx(0.6), sy(-1.3)],
    [sx(1.2), sy(-1.7)],
    [sx(2), oy],
    [sx(3), sy(1.0)],
    [sx(4), sy(1.15)],
    [sx(5), oy],
  ];
  // Use cubic-ish smooth path via polyline with enough points for a natural look
  const samples = [];
  // Region A: semi-ellipse-ish above
  for (let t = 0; t <= 40; t++) {
    const u = t / 40;
    const x = -2 + 2 * u;
    const y = 2.25 * Math.sin(Math.PI * u);
    samples.push([x, y]);
  }
  // Region B: below
  for (let t = 1; t <= 40; t++) {
    const u = t / 40;
    const x = 0 + 2 * u;
    const y = -1.65 * Math.sin(Math.PI * u);
    samples.push([x, y]);
  }
  // Region C: above, lower hump
  for (let t = 1; t <= 50; t++) {
    const u = t / 50;
    const x = 2 + 3 * u;
    const y = 1.15 * Math.sin(Math.PI * u);
    samples.push([x, y]);
  }

  const toP = (pts) =>
    pts.map((p, i) => `${i ? 'L' : 'M'}${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`).join(' ');

  const aPts = samples.filter((p) => p[0] <= 0);
  const bPts = samples.filter((p) => p[0] >= 0 && p[0] <= 2);
  const cPts = samples.filter((p) => p[0] >= 2);

  let b = axes;
  // Shades closed to x-axis
  const shade = (pts, color) => {
    if (!pts.length) return '';
    const d =
      toP(pts) +
      ` L${sx(pts[pts.length - 1][0]).toFixed(1)},${oy.toFixed(1)} L${sx(pts[0][0]).toFixed(1)},${oy.toFixed(1)} Z`;
    return `<path d="${d}" fill="${color}" fill-opacity="0.22"/>`;
  };
  b += shade(aPts, '#6366f1');
  b += shade(bPts, '#f43f5e');
  b += shade(cPts, '#22c55e');

  b += `<path d="${toP(samples)}" fill="none" stroke="#1e293b" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`;

  for (const x of [-2, 0, 2, 5]) b += tick(sx, sy, x, String(x), oy);

  // Labels A, B, C with areas
  b += `<text x="${sx(-1).toFixed(1)}" y="${sy(1.15).toFixed(1)}" font-size="15" fill="#4338ca" font-weight="800" text-anchor="middle">A = 8</text>`;
  b += `<text x="${sx(1).toFixed(1)}" y="${sy(-0.75).toFixed(1)}" font-size="15" fill="#be123c" font-weight="800" text-anchor="middle">B = 3</text>`;
  b += `<text x="${sx(3.5).toFixed(1)}" y="${sy(0.55).toFixed(1)}" font-size="15" fill="#15803d" font-weight="800" text-anchor="middle">C = 1</text>`;

  // tiny legend
  b += `<text x="${sx(3.8).toFixed(1)}" y="${sy(2.7).toFixed(1)}" font-size="11" fill="#64748b" font-weight="600">y = f(x)</text>`;

  return wrap(b, W, H);
}

/** car2020s-q19: P=5 above, Q=4 below, R=2 above on [−3,6] */
function svgCar19s() {
  const xmin = -3.6,
    xmax = 6.8,
    ymin = -2.4,
    ymax = 3.0;
  const W = 420,
    H = 260;
  const { sx, sy, axes, oy } = plane(xmin, xmax, ymin, ymax, W, H);

  const samples = [];
  for (let t = 0; t <= 40; t++) {
    const u = t / 40;
    const x = -3 + 3 * u;
    const y = 2.1 * Math.sin(Math.PI * u);
    samples.push([x, y]);
  }
  for (let t = 1; t <= 40; t++) {
    const u = t / 40;
    const x = 0 + 2 * u;
    const y = -1.7 * Math.sin(Math.PI * u);
    samples.push([x, y]);
  }
  for (let t = 1; t <= 50; t++) {
    const u = t / 50;
    const x = 2 + 4 * u;
    const y = 1.25 * Math.sin(Math.PI * u);
    samples.push([x, y]);
  }

  const toP = (pts) =>
    pts.map((p, i) => `${i ? 'L' : 'M'}${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`).join(' ');

  const pPts = samples.filter((p) => p[0] <= 0);
  const qPts = samples.filter((p) => p[0] >= 0 && p[0] <= 2);
  const rPts = samples.filter((p) => p[0] >= 2);

  let b = axes;
  const shade = (pts, color) => {
    if (!pts.length) return '';
    const d =
      toP(pts) +
      ` L${sx(pts[pts.length - 1][0]).toFixed(1)},${oy.toFixed(1)} L${sx(pts[0][0]).toFixed(1)},${oy.toFixed(1)} Z`;
    return `<path d="${d}" fill="${color}" fill-opacity="0.22"/>`;
  };
  b += shade(pPts, '#6366f1');
  b += shade(qPts, '#f43f5e');
  b += shade(rPts, '#22c55e');
  b += `<path d="${toP(samples)}" fill="none" stroke="#1e293b" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`;

  for (const x of [-3, 0, 2, 6]) b += tick(sx, sy, x, String(x), oy);

  b += `<text x="${sx(-1.5).toFixed(1)}" y="${sy(1.05).toFixed(1)}" font-size="15" fill="#4338ca" font-weight="800" text-anchor="middle">P = 5</text>`;
  b += `<text x="${sx(1).toFixed(1)}" y="${sy(-0.75).toFixed(1)}" font-size="15" fill="#be123c" font-weight="800" text-anchor="middle">Q = 4</text>`;
  b += `<text x="${sx(4).toFixed(1)}" y="${sy(0.55).toFixed(1)}" font-size="15" fill="#15803d" font-weight="800" text-anchor="middle">R = 2</text>`;
  b += `<text x="${sx(4.8).toFixed(1)}" y="${sy(2.5).toFixed(1)}" font-size="11" fill="#64748b" font-weight="600">y = g(x)</text>`;

  return wrap(b, W, H);
}

function stepsCar19() {
  return [
    {
      explanation:
        'A definite integral equals signed area: regions above the \\(x\\)-axis count positive, regions below count negative.',
      workingOut: '\\(\\displaystyle\\int_{-2}^{5} f(x)\\,dx = +A - B + C\\)',
      graphData: null,
    },
    {
      explanation:
        'From the diagram: region \\(A\\) (from \\(x=-2\\) to \\(x=0\\)) is above the axis with area \\(8\\); region \\(B\\) (from \\(0\\) to \\(2\\)) is below with area \\(3\\); region \\(C\\) (from \\(2\\) to \\(5\\)) is above with area \\(1\\).',
      workingOut: 'A=8\\ (\\text{above}),\\; B=3\\ (\\text{below}),\\; C=1\\ (\\text{above})',
      graphData: null,
    },
    {
      explanation: 'Substitute the signed contributions.',
      workingOut: '\\(+8 - 3 + 1 = 6\\)',
      graphData: null,
    },
    {
      explanation:
        'So \\(\\displaystyle\\int_{-2}^{5} f(x)\\,dx = 6\\). (Absolute area would be \\(8+3+1=12\\); a common trap is forgetting the sign of region \\(B\\).)',
      workingOut: '6',
      graphData: null,
    },
  ];
}

function stepsCar19s() {
  return [
    {
      explanation:
        'Signed integral: add areas above the \\(x\\)-axis and subtract areas below.',
      workingOut: '\\(\\displaystyle\\int_{-3}^{6} g(x)\\,dx = +P - Q + R\\)',
      graphData: null,
    },
    {
      explanation:
        'From the diagram: \\(P=5\\) above (\\(-3\\) to \\(0\\)), \\(Q=4\\) below (\\(0\\) to \\(2\\)), \\(R=2\\) above (\\(2\\) to \\(6\\)).',
      workingOut: 'P=5,\\; Q=4,\\; R=2',
      graphData: null,
    },
    {
      explanation: 'Compute the signed total.',
      workingOut: '5 - 4 + 2 = 3',
      graphData: null,
    },
    {
      explanation:
        'Absolute area would be \\(5+4+2=11\\) (a common trap). The signed integral is \\(3\\).',
      workingOut: '3',
      graphData: null,
    },
  ];
}

async function main() {
  const patches = {
    'car2020-q19': {
      question:
        'The graph of the function \\(f\\) is shown. The shaded areas bounded by \\(y=f(x)\\) and the \\(x\\)-axis are: area \\(A=8\\) (above), area \\(B=3\\) (below), area \\(C=1\\) (above). Evaluate \\(\\displaystyle\\int_{-2}^{5} f(x)\\,dx\\).',
      title: 'Signed integral from diagram areas A, B, C',
      graphData: { svg: svgCar19() },
      options: [
        { text: '\\(6\\)', imageUrl: '' },
        { text: '\\(12\\)', imageUrl: '' },
        { text: '\\(10\\)', imageUrl: '' },
        { text: '\\(4\\)', imageUrl: '' },
      ],
      answer: '0',
      solutionSteps: stepsCar19(),
      solution:
        'Region A (above): +8. Region B (below): −3. Region C (above): +1. Total: 8 − 3 + 1 = 6.',
      isNew: true,
    },
    'car2020s-q19': {
      question:
        'The graph of \\(g\\) is shown. Shaded areas: \\(P=5\\) above the \\(x\\)-axis (\\(-3\\le x\\le 0\\)), \\(Q=4\\) below (\\(0\\le x\\le 2\\)), \\(R=2\\) above (\\(2\\le x\\le 6\\)). Evaluate \\(\\displaystyle\\int_{-3}^{6} g(x)\\,dx\\).',
      title: 'Signed integral from diagram areas P, Q, R',
      graphData: { svg: svgCar19s() },
      options: [
        { text: '\\(3\\)', imageUrl: '' },
        { text: '\\(11\\)', imageUrl: '' },
        { text: '\\(1\\)', imageUrl: '' },
        { text: '\\(7\\)', imageUrl: '' },
      ],
      answer: '0',
      solutionSteps: stepsCar19s(),
      solution: '∫ = P − Q + R = 5 − 4 + 2 = 3.',
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
    console.log('patched', id, 'svgLen', patch.graphData.svg.length);
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
