import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

// ──────────────────────────────────────────
// Core SVG Rendering Engine
// ──────────────────────────────────────────

function pointOnSegment(V, A, B) {
  const cross = (B[0] - A[0]) * (V[1] - A[1]) - (B[1] - A[1]) * (V[0] - A[0]);
  if (Math.abs(cross) > 1e-4) return false;
  const dot = (V[0] - A[0]) * (B[0] - A[0]) + (V[1] - A[1]) * (B[1] - A[1]);
  if (dot < -1e-4) return false;
  const sqLen = (B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2;
  if (dot > sqLen + 1e-4) return false;
  return true;
}

function geometryToSvg(geo) {
  if (!geo || !geo.points) return '';
  const W = 360, H = 260;

  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const k in geo.points) {
    const [x, y] = geo.points[k];
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  if (minX === maxX) { minX -= 1; maxX += 1; }
  if (minY === maxY) { minY -= 1; maxY += 1; }
  const padPct = 0.25;
  minX -= (maxX - minX) * padPct; maxX += (maxX - minX) * padPct;
  minY -= (maxY - minY) * padPct; maxY += (maxY - minY) * padPct;

  const scale = Math.min(W / (maxX - minX), H / (maxY - minY));
  const offsetX = (W - (maxX - minX) * scale) / 2;
  const offsetY = (H - (maxY - minY) * scale) / 2;

  const pts = {};
  for (const k in geo.points) {
    pts[k] = [
      offsetX + (geo.points[k][0] - minX) * scale,
      offsetY + (maxY - geo.points[k][1]) * scale
    ];
  }

  let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="auto" style="max-width: 440px; display: block; margin: 1rem auto; background-color: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0; padding: 0.5rem;" xmlns="http://www.w3.org/2000/svg">\n`;
  svg += `<defs><marker id="sleek-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto-start-reverse"><path d="M0,1 L6,3.5 L0,6" fill="none" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>\n`;

  // Build angle sectors for each vertex
  const anglesByVertex = {};
  if (geo.angles) {
    for (const ang of geo.angles) {
      if (!ang || (!ang.at)) continue;
      if (!anglesByVertex[ang.at]) anglesByVertex[ang.at] = [];
      anglesByVertex[ang.at].push(ang);
    }
  }

  for (const vKey in anglesByVertex) {
    const [vx, vy] = pts[vKey];
    const rawRays = [];
    if (geo.segments) {
      for (const seg of geo.segments) {
        const fp = pts[seg.from], tp = pts[seg.to];
        if (!fp || !tp) continue;
        if (seg.from === vKey) rawRays.push(seg.to);
        else if (seg.to === vKey) rawRays.push(seg.from);
        else if (pointOnSegment(pts[vKey], fp, tp)) { rawRays.push(seg.from); rawRays.push(seg.to); }
      }
    }
    const rays = [];
    for (const nKey of rawRays) {
      const nx = pts[nKey][0], ny = pts[nKey][1];
      if (Math.abs(nx - vx) < 1e-4 && Math.abs(ny - vy) < 1e-4) continue;
      let angle = Math.atan2(ny - vy, nx - vx);
      if (angle < 0) angle += 2 * Math.PI;
      if (!rays.some(r => { let d = Math.abs(r.angle - angle); if (d > Math.PI) d = 2*Math.PI-d; return d < 1e-4; })) {
        rays.push({ key: nKey, angle });
      }
    }
    rays.sort((a, b) => a.angle - b.angle);

    const sectors = [];
    if (rays.length >= 2) {
      for (let i = 0; i < rays.length; i++) {
        const r1 = rays[i], r2 = rays[(i+1) % rays.length];
        let diff = r2.angle - r1.angle;
        if (diff <= 0) diff += 2 * Math.PI;
        sectors.push({ startAngle: r1.angle, diff });
      }
    } else {
      sectors.push({ startAngle: 0, diff: Math.PI });
    }

    let labelItems = anglesByVertex[vKey];
    if (sectors.length === 2 && labelItems.length === 1 && !labelItems[0].span) {
      if (sectors[0].diff > Math.PI) labelItems = [{}, labelItems[0]];
    }

    labelItems.forEach((angItem, idx) => {
      if (!angItem.label && !angItem.right) return;
      const sec = sectors[idx % sectors.length];
      let startAngle = sec.startAngle;
      let diff = sec.diff;
      if (angItem.span) {
        const cur = idx % sectors.length;
        for (let i = 1; i < angItem.span; i++) {
          diff += sectors[(cur + i) % sectors.length].diff;
        }
      }
      const endAngle = startAngle + diff;
      const midAngle = startAngle + diff / 2;
      const rArc = 24, rLabel = 42;
      const lx = vx + Math.cos(midAngle) * rLabel;
      const ly = vy + Math.sin(midAngle) * rLabel;

      if (angItem.right) {
        const sqSize = 13;
        const px = vx + Math.cos(startAngle)*sqSize + Math.cos(endAngle)*sqSize;
        const py = vy + Math.sin(startAngle)*sqSize + Math.sin(endAngle)*sqSize;
        svg += `  <path d="M ${vx+Math.cos(startAngle)*sqSize},${vy+Math.sin(startAngle)*sqSize} L ${px},${py} L ${vx+Math.cos(endAngle)*sqSize},${vy+Math.sin(endAngle)*sqSize}" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linejoin="miter" />\n`;
      } else {
        const laf = diff > Math.PI ? 1 : 0;
        svg += `  <path d="M ${vx+Math.cos(startAngle)*rArc},${vy+Math.sin(startAngle)*rArc} A ${rArc},${rArc} 0 ${laf},1 ${vx+Math.cos(endAngle)*rArc},${vy+Math.sin(endAngle)*rArc}" fill="none" stroke="#3b82f6" stroke-width="1.5" />\n`;
      }
      if (angItem.label) {
        svg += `  <text x="${lx}" y="${ly}" font-family="system-ui,-apple-system,sans-serif" font-size="14" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">${angItem.label}</text>\n`;
      }
    });
  }

  // Draw segments
  if (geo.segments) {
    for (const seg of geo.segments) {
      const p1 = pts[seg.from], p2 = pts[seg.to];
      if (!p1 || !p2) continue;
      svg += `  <line x1="${p1[0]}" y1="${p1[1]}" x2="${p2[0]}" y2="${p2[1]}" stroke="#475569" stroke-width="1.8" ${seg.arrow ? 'marker-end="url(#sleek-arrow)"' : ''} />\n`;
      if (seg.marks) {
        const mx = (p1[0]+p2[0])/2, my = (p1[1]+p2[1])/2;
        const angle = Math.atan2(p2[1]-p1[1], p2[0]-p1[0]) * 180/Math.PI;
        svg += `  <g transform="translate(${mx},${my}) rotate(${angle})"><path d="M -5 -5 L 3 0 L -5 5" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>\n`;
      }
      if (seg.ticks) {
        const mx = (p1[0]+p2[0])/2, my = (p1[1]+p2[1])/2;
        const angle = Math.atan2(p2[1]-p1[1], p2[0]-p1[0]) * 180/Math.PI;
        if (seg.ticks === 1) svg += `  <g transform="translate(${mx},${my}) rotate(${angle})"><line x1="0" y1="-6" x2="0" y2="6" stroke="#3b82f6" stroke-width="2" /></g>\n`;
        else if (seg.ticks === 2) svg += `  <g transform="translate(${mx},${my}) rotate(${angle})"><line x1="-3" y1="-6" x2="-3" y2="6" stroke="#3b82f6" stroke-width="2" /><line x1="3" y1="-6" x2="3" y2="6" stroke="#3b82f6" stroke-width="2" /></g>\n`;
        else if (seg.ticks === 3) svg += `  <g transform="translate(${mx},${my}) rotate(${angle})"><line x1="-5" y1="-6" x2="-5" y2="6" stroke="#3b82f6" stroke-width="2" /><line x1="0" y1="-6" x2="0" y2="6" stroke="#3b82f6" stroke-width="2" /><line x1="5" y1="-6" x2="5" y2="6" stroke="#3b82f6" stroke-width="2" /></g>\n`;
      }
    }
  }

  // Side labels
  if (geo.sideLabels) {
    let cx = 0, cy = 0, n = 0;
    for (const k in pts) { cx += pts[k][0]; cy += pts[k][1]; n++; }
    cx /= n; cy /= n;
    for (const sl of geo.sideLabels) {
      if (!sl.between || sl.between.length !== 2 || !sl.text) continue;
      const p1 = pts[sl.between[0]], p2 = pts[sl.between[1]];
      if (!p1 || !p2) continue;
      const mx = (p1[0]+p2[0])/2, my = (p1[1]+p2[1])/2;
      const dx = p2[0]-p1[0], dy = p2[1]-p1[1];
      const len = Math.sqrt(dx*dx+dy*dy);
      let nx = -dy/len, ny = dx/len;
      if (nx*(mx-cx)+ny*(my-cy) < 0) { nx=-nx; ny=-ny; }
      svg += `  <text x="${mx+nx*18}" y="${my+ny*18}" font-family="system-ui,-apple-system,sans-serif" font-size="14" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central" paint-order="stroke" stroke="#f8fafc" stroke-width="3">${sl.text}</text>\n`;
    }
  }

  return svg + '</svg>';
}

// ──────────────────────────────────────────
// Question Definitions
// ──────────────────────────────────────────

const questions = [

  // q2c: Two crossing lines. Bottom = 90°. Top split 3α + α. Vertically opp → 4α=90 → α=22.5°
  {
    id: 'y9-7a-q2c',
    questionText: 'Find the angle marked with \\(\\alpha\\).',
    geo: {
      points: { N:[0,0], K:[-2,0], L:[2,0], S:[1,2], R:[-1,2] },
      segments: [
        { from:'K', to:'L', arrow:true },
        { from:'L', to:'K', arrow:true },
        { from:'N', to:'S', arrow:true },
        { from:'N', to:'R', arrow:true }
      ],
      angles: [
        { at:'N', label:'90°' },
        { at:'N', label:'3α' },
        { at:'N', label:'α' }
      ]
    },
    options: [
      { text: '\\(12.5^\\circ\\)' },
      { text: '\\(22.5^\\circ\\)' },
      { text: '\\(30^\\circ\\)' },
      { text: '\\(45^\\circ\\)' }
    ],
    answer: 1,
    solutionSteps: [
      {
        explanation: 'Identify the relationship',
        workingOut: 'The angle marked \\(90^\\circ\\) and the angle at the top (made up of \\(3\\alpha\\) and \\(\\alpha\\)) are vertically opposite angles (X-angles). Vertically opposite angles are equal, so:\\n\\[3\\alpha + \\alpha = 90^\\circ\\]',
        graphData: null
      },
      {
        explanation: 'Simplify',
        workingOut: 'Collect the like terms on the left side:\\n\\[4\\alpha = 90^\\circ\\]',
        graphData: null
      },
      {
        explanation: 'Solve for \\(\\alpha\\)',
        workingOut: 'Divide both sides by 4:\\n\\[\\alpha = \\frac{90^\\circ}{4} = 22.5^\\circ\\]',
        graphData: null
      }
    ]
  },

  // q3f: Parallel lines (marks), transversal at E between D and F. θ₁=40° (Z-angle with D), θ₂=30° (Z-angle with F). θ=70°
  {
    id: 'y9-7a-q3f',
    questionText: 'Find the angle marked with the pronumeral \\(\\theta\\).',
    geo: {
      points: { A:[-2,2], D:[2,2], B:[-2,0], F:[2,-1.5], C:[-2,-1.5], E:[0.5,0] },
      segments: [
        { from:'A', to:'D', arrow:true, marks:1 },
        { from:'B', to:'E', marks:1 },
        { from:'E', to:'F' },
        { from:'C', to:'F', arrow:true, marks:1 },
        { from:'D', to:'E' }
      ],
      angles: [
        { at:'D', label:'40°' },
        { at:'E', label:'θ' },
        { at:'F', label:'30°' }
      ]
    },
    options: [
      { text: '\\(10^\\circ\\)' },
      { text: '\\(50^\\circ\\)' },
      { text: '\\(70^\\circ\\)' },
      { text: '\\(110^\\circ\\)' }
    ],
    answer: 2,
    solutionSteps: [
      {
        explanation: 'Draw an auxiliary line',
        workingOut: 'Draw a third parallel line through point \\(E\\) (the vertex of \\(\\theta\\)), parallel to the two given parallel lines. This divides \\(\\theta\\) into two parts:\\n\\[\\theta = \\theta_1 + \\theta_2\\]',
        graphData: null
      },
      {
        explanation: 'Find \\(\\theta_1\\) using Z-angles',
        workingOut: 'The top part \\(\\theta_1\\) (between the auxiliary line and line \\(DE\\)) is an alternate interior angle (Z-angle) with the \\(40^\\circ\\) angle at \\(D\\):\\n\\[\\theta_1 = 40^\\circ\\]',
        graphData: null
      },
      {
        explanation: 'Find \\(\\theta_2\\) using Z-angles',
        workingOut: 'The bottom part \\(\\theta_2\\) (between the auxiliary line and line \\(EF\\)) is an alternate interior angle (Z-angle) with the \\(30^\\circ\\) angle at \\(F\\):\\n\\[\\theta_2 = 30^\\circ\\]',
        graphData: null
      },
      {
        explanation: 'Calculate \\(\\theta\\)',
        workingOut: 'Add the two parts together:\\n\\[\\theta = \\theta_1 + \\theta_2 = 40^\\circ + 30^\\circ = 70^\\circ\\]',
        graphData: null
      }
    ]
  },

  // q6b-alpha: Isosceles triangle, CA=CB (ticks:2), apex angle C=50°. Base angles α=β=(180-50)/2=65°
  {
    id: 'y9-7a-q6b-alpha',
    questionText: 'Find the angle marked with \\(\\alpha\\).',
    geo: {
      points: { C:[-3,0], A:[2,1.5], B:[2,-1.5] },
      segments: [
        { from:'C', to:'A', ticks:2 },
        { from:'C', to:'B', ticks:2 },
        { from:'A', to:'B' }
      ],
      angles: [
        { at:'C', label:'50°' },
        { at:'A', label:'α' },
        { at:'B', label:'β' }
      ]
    },
    options: [
      { text: '\\(50^\\circ\\)' },
      { text: '\\(55^\\circ\\)' },
      { text: '\\(65^\\circ\\)' },
      { text: '\\(80^\\circ\\)' }
    ],
    answer: 2,
    solutionSteps: [
      {
        explanation: 'Identify the isosceles triangle',
        workingOut: 'The tick marks on sides \\(CA\\) and \\(CB\\) show that \\(CA = CB\\). This means triangle \\(CAB\\) is an isosceles triangle with apex angle \\(C = 50^\\circ\\).',
        graphData: null
      },
      {
        explanation: 'Use the isosceles triangle property',
        workingOut: 'In an isosceles triangle, the base angles are equal. So \\(\\alpha = \\beta\\).',
        graphData: null
      },
      {
        explanation: 'Use the angle sum of a triangle',
        workingOut: 'The angles in a triangle add to \\(180^\\circ\\):\\n\\[\\alpha + \\beta + 50^\\circ = 180^\\circ\\]\\nSince \\(\\alpha = \\beta\\):\\n\\[2\\alpha = 180^\\circ - 50^\\circ = 130^\\circ\\]\\n\\[\\alpha = 65^\\circ\\]',
        graphData: null
      }
    ]
  },

  // q6b-beta: Same triangle, β = α = 65°
  {
    id: 'y9-7a-q6b-beta',
    questionText: 'Find the angle marked with \\(\\beta\\).',
    geo: {
      points: { C:[-3,0], A:[2,1.5], B:[2,-1.5] },
      segments: [
        { from:'C', to:'A', ticks:2 },
        { from:'C', to:'B', ticks:2 },
        { from:'A', to:'B' }
      ],
      angles: [
        { at:'C', label:'50°' },
        { at:'A', label:'α' },
        { at:'B', label:'β' }
      ]
    },
    options: [
      { text: '\\(50^\\circ\\)' },
      { text: '\\(55^\\circ\\)' },
      { text: '\\(65^\\circ\\)' },
      { text: '\\(80^\\circ\\)' }
    ],
    answer: 2,
    solutionSteps: [
      {
        explanation: 'Identify the isosceles triangle',
        workingOut: 'The tick marks on sides \\(CA\\) and \\(CB\\) show that \\(CA = CB\\). This means triangle \\(CAB\\) is an isosceles triangle with apex angle \\(C = 50^\\circ\\).',
        graphData: null
      },
      {
        explanation: 'Use the isosceles triangle property',
        workingOut: 'In an isosceles triangle, the base angles are equal. So \\(\\alpha = \\beta\\).',
        graphData: null
      },
      {
        explanation: 'Use the angle sum of a triangle',
        workingOut: 'The angles in a triangle add to \\(180^\\circ\\):\\n\\[\\alpha + \\beta + 50^\\circ = 180^\\circ\\]\\nSince \\(\\alpha = \\beta\\):\\n\\[2\\beta = 180^\\circ - 50^\\circ = 130^\\circ\\]\\n\\[\\beta = 65^\\circ\\]',
        graphData: null
      }
    ]
  },

  // q6c: Isosceles triangle LMN. L=M=50°. Side LN=17, MN=3x+5. Since isosceles (L=M): LN=MN → 3x+5=17 → x=4
  {
    id: 'y9-7a-q6c',
    questionText: 'Find the value of \\(x\\).',
    geo: {
      points: { L:[-2,2], M:[2,2], N:[0,-2] },
      segments: [
        { from:'L', to:'M' },
        { from:'M', to:'N' },
        { from:'N', to:'L' }
      ],
      angles: [
        { at:'L', label:'50°' },
        { at:'M', label:'50°' }
      ],
      sideLabels: [
        { between:['L','N'], text:'17' },
        { between:['M','N'], text:'3x + 5' }
      ]
    },
    options: [
      { text: '\\(x = 2\\)' },
      { text: '\\(x = 3\\)' },
      { text: '\\(x = 4\\)' },
      { text: '\\(x = 6\\)' }
    ],
    answer: 2,
    solutionSteps: [
      {
        explanation: 'Identify the isosceles triangle',
        workingOut: 'Since \\(\\angle L = \\angle M = 50^\\circ\\), the angles at \\(L\\) and \\(M\\) are equal. In a triangle, equal angles are opposite to equal sides. Therefore, the sides opposite to these angles are equal:\\n\\[LN = MN\\]',
        graphData: null
      },
      {
        explanation: 'Set up the equation',
        workingOut: 'Substituting the given side lengths:\\n\\[3x + 5 = 17\\]',
        graphData: null
      },
      {
        explanation: 'Solve for \\(x\\)',
        workingOut: 'Subtract 5 from both sides:\\n\\[3x = 12\\]\\nDivide both sides by 3:\\n\\[x = 4\\]',
        graphData: null
      }
    ]
  },

  // q8e: Two parallel lines (marks). Isosceles triangle ABC: AB=BC (ticks:2). ∠BAF=35°.
  // ∠BAC=35° (alt int, Z-angle with top parallel). AB=BC → ∠BAC=∠ACB=35°.
  // θ = ∠ABC = 180-35-35 = 110°
  {
    id: 'y9-7a-q8e',
    questionText: 'Find the angle marked with \\(\\theta\\).',
    geo: {
      points: { A:[-2,2], F:[2,2], B:[-1,-2], C:[1,-2], G:[3,-2] },
      segments: [
        { from:'A', to:'F', arrow:true, marks:1 },
        { from:'B', to:'G', arrow:true, marks:1 },
        { from:'A', to:'B', ticks:2 },
        { from:'B', to:'C', ticks:2 },
        { from:'A', to:'C' }
      ],
      angles: [
        { at:'A', label:'35°' },
        { at:'B', label:'θ' }
      ]
    },
    options: [
      { text: '\\(20^\\circ\\)' },
      { text: '\\(70^\\circ\\)' },
      { text: '\\(110^\\circ\\)' },
      { text: '\\(120^\\circ\\)' }
    ],
    answer: 2,
    solutionSteps: [
      {
        explanation: 'Find \\(\\angle ACB\\) using alternate interior angles',
        workingOut: 'Since lines \\(AF\\) and \\(BG\\) are parallel (indicated by the single arrow marks and tick marks), and \\(AC\\) is a transversal, the alternate interior angles (Z-angles) are equal:\\n\\[\\angle ACB = \\angle BAF = 35^\\circ\\]',
        graphData: null
      },
      {
        explanation: 'Use the isosceles triangle property',
        workingOut: 'The tick marks on \\(AB\\) and \\(BC\\) show that \\(AB = BC\\). This means triangle \\(ABC\\) is isosceles, so the base angles opposite the equal sides are equal:\\n\\[\\angle BAC = \\angle ACB = 35^\\circ\\]',
        graphData: null
      },
      {
        explanation: 'Find \\(\\theta\\) using the angle sum of a triangle',
        workingOut: 'The angles in triangle \\(ABC\\) must add to \\(180^\\circ\\):\\n\\[\\theta + \\angle BAC + \\angle ACB = 180^\\circ\\]\\n\\[\\theta + 35^\\circ + 35^\\circ = 180^\\circ\\]\\n\\[\\theta = 180^\\circ - 70^\\circ = 110^\\circ\\]',
        graphData: null
      }
    ]
  }
];

// ──────────────────────────────────────────
// Run Updates
// ──────────────────────────────────────────

async function run() {
  const batch = db.batch();

  for (const q of questions) {
    const docRef = db.collection('questions').doc(q.id);
    const existing = (await docRef.get()).data();
    if (!existing) {
      console.log(`SKIP: ${q.id} does not exist in Firestore.`);
      continue;
    }

    const svg = geometryToSvg(q.geo);
    const question = `${svg}\n\n${q.questionText}`;

    batch.update(docRef, {
      question,
      type: 'multiple_choice',
      options: q.options,
      answer: q.answer,
      solutionSteps: q.solutionSteps
    });
    console.log(`Queued update for ${q.id}`);
  }

  await batch.commit();
  console.log('\nAll updates committed successfully!');
}

run().catch(console.error);
