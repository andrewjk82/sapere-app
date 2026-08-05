import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.join(__dirname, '../../backup_seeds/seedYear9Ch7Questions.js');
const seedContent = fs.readFileSync(seedPath, 'utf8');
const jsonStr = seedContent.replace(/export\s+const\s+\w+\s*=\s*/, '').replace(/;\s*$/, '');
const seedData = JSON.parse(jsonStr);

function intersectLineLine(p1, p2, p3, p4) {
  const x1 = p1[0], y1 = p1[1], x2 = p2[0], y2 = p2[1];
  const x3 = p3[0], y3 = p3[1], x4 = p4[0], y4 = p4[1];
  
  const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (Math.abs(denom) < 1e-6) return null; // parallel
  
  const x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denom;
  const y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denom;
  return [x, y];
}

const seedMap = {};
seedData.forEach(q => {
  if (q.id && q.graphData && q.graphData.geometry) {
    const geo = q.graphData.geometry;
    if (geo.segments && geo.points) {
      const intersections = [];
      for (let i = 0; i < geo.segments.length; i++) {
        for (let j = i + 1; j < geo.segments.length; j++) {
          const s1 = geo.segments[i], s2 = geo.segments[j];
          if (s1.from === s2.from || s1.from === s2.to || s1.to === s2.from || s1.to === s2.to) continue;
          const p1 = geo.points[s1.from], p2 = geo.points[s1.to];
          const p3 = geo.points[s2.from], p4 = geo.points[s2.to];
          if (!p1 || !p2 || !p3 || !p4) continue;
          
          const intersect = intersectLineLine(p1, p2, p3, p4);
          if (intersect) intersections.push(intersect);
        }
      }
      
      const isEndpoint = (k) => geo.segments.some(s => s.from === k || s.to === k);
      for (const k in geo.points) {
        if (isEndpoint(k)) continue;
        const pt = geo.points[k];
        let bestIntersect = null;
        let minDist = 1.0;
        for (const inter of intersections) {
          const dist = Math.sqrt((pt[0] - inter[0])**2 + (pt[1] - inter[1])**2);
          if (dist < minDist) {
            minDist = dist;
            bestIntersect = inter;
          }
        }
        if (bestIntersect) {
          geo.points[k] = bestIntersect; // Snap!
        }
      }
    }
    
    // Check if y9-7a-q3a has overlapping labels due to padding requirement
    // In y9-7a-q3a, angles at I1 are: α (but only one label)
    // Wait, if it has 1 label, my fixOverlappingLabels will assign it to the first sector.
    // Let's rely on standard mapping. It should be fine.
    
    seedMap[q.id] = geo;
  }
});

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function pointOnSegment(V, A, B) {
  const cross = (B[0] - A[0]) * (V[1] - A[1]) - (B[1] - A[1]) * (V[0] - A[0]);
  if (Math.abs(cross) > 1e-4) return false;
  const dot = (V[0] - A[0]) * (B[0] - A[0]) + (V[1] - A[1]) * (B[1] - A[1]);
  if (dot < -1e-4) return false;
  const sqLen = (B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2;
  if (dot > sqLen + 1e-4) return false;
  return true;
}

function geometryToSectorSvg(geo, id) {
  if (!geo || !geo.points) return '';
  const W = 360;
  const H = 260;
  
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const k in geo.points) {
    const [x, y] = geo.points[k];
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  if (minX === maxX) { minX -= 1; maxX += 1; }
  if (minY === maxY) { minY -= 1; maxY += 1; }

  const spanX = maxX - minX;
  const spanY = maxY - minY;
  const padPercent = 0.25;
  const paddingX = spanX * padPercent;
  const paddingY = spanY * padPercent;
  minX -= paddingX; maxX += paddingX;
  minY -= paddingY; maxY += paddingY;
  
  const paddedSpanX = maxX - minX;
  const paddedSpanY = maxY - minY;
  const scale = Math.min(W / paddedSpanX, H / paddedSpanY);
  const offsetX = (W - (paddedSpanX * scale)) / 2;
  const offsetY = (H - (paddedSpanY * scale)) / 2;
  
  const pts = {};
  for (const k in geo.points) {
    pts[k] = [offsetX + ((geo.points[k][0] - minX) * scale), offsetY + ((maxY - geo.points[k][1]) * scale)];
  }
  
  let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="auto" style="max-width: 440px; display: block; margin: 1rem auto; background-color: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0; padding: 0.5rem;" xmlns="http://www.w3.org/2000/svg">\n`;
  svg += `<defs>\n<marker id="sleek-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto-start-reverse"><path d="M0,1 L6,3.5 L0,6" fill="none" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>\n`;
  svg += `<marker id="parallel-mark-1" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M 2 2 L 6 5 L 2 8" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/></marker>\n`;
  svg += `<marker id="parallel-mark-2" markerWidth="14" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M 2 2 L 6 5 L 2 8 M 6 2 L 10 5 L 6 8" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/></marker>\n`;
  svg += `</defs>\n`;
  
  const anglesByVertex = {};
  if (geo.angles) {
    for (const ang of geo.angles) {
      if (!ang || !ang.at) continue;
      if (!anglesByVertex[ang.at]) anglesByVertex[ang.at] = [];
      anglesByVertex[ang.at].push(ang);
    }
  }
  
  for (const vKey in anglesByVertex) {
    const vPts = pts[vKey];
    if (!vPts) continue;
    const [vx, vy] = vPts;
    
    const rawRays = [];
    if (geo.segments) {
      for (const seg of geo.segments) {
        const fromPt = pts[seg.from], toPt = pts[seg.to];
        if (!fromPt || !toPt) continue;
        if (seg.from === vKey) rawRays.push(seg.to);
        else if (seg.to === vKey) rawRays.push(seg.from);
        else if (pointOnSegment(vPts, fromPt, toPt)) {
          rawRays.push(seg.from);
          rawRays.push(seg.to);
        }
      }
    }
    
    const rays = [];
    for (const nKey of rawRays) {
      const nx = pts[nKey][0], ny = pts[nKey][1];
      if (Math.abs(nx - vx) < 1e-4 && Math.abs(ny - vy) < 1e-4) continue;
      let angle = Math.atan2(ny - vy, nx - vx);
      if (angle < 0) angle += 2 * Math.PI;
      if (!rays.some(r => { let d = Math.abs(r.angle - angle); if (d > Math.PI) d = 2 * Math.PI - d; return d < 1e-4; })) {
        rays.push({ key: nKey, angle, dx: nx - vx, dy: ny - vy });
      }
    }
    rays.sort((a, b) => a.angle - b.angle);
    
    const sectors = [];
    if (rays.length >= 2) {
      for (let i = 0; i < rays.length; i++) {
        const r1 = rays[i], r2 = rays[(i + 1) % rays.length];
        let diff = r2.angle - r1.angle;
        if (diff <= 0) diff += 2 * Math.PI;
        sectors.push({ startAngle: r1.angle, endAngle: r2.angle, diff, midAngle: r1.angle + diff / 2 });
      }
    } else {
      sectors.push({ startAngle: 0, endAngle: Math.PI, diff: Math.PI, midAngle: -Math.PI/2 });
    }
    
    anglesByVertex[vKey].forEach((angItem, idx) => {
      if (!angItem.label && !angItem.right) return;
      const sec = sectors[idx % sectors.length];
      const rArc = 24, rLabel = 42;
      const lx = vx + Math.cos(sec.midAngle) * rLabel, ly = vy + Math.sin(sec.midAngle) * rLabel;
      
      if (angItem.right) {
        const sqSize = 13, a1 = sec.startAngle, a2 = sec.endAngle;
        const pxCorner = vx + Math.cos(a1)*sqSize + Math.cos(a2)*sqSize;
        const pyCorner = vy + Math.sin(a1)*sqSize + Math.sin(a2)*sqSize;
        svg += `  <path d="M ${vx + Math.cos(a1)*sqSize},${vy + Math.sin(a1)*sqSize} L ${pxCorner},${pyCorner} L ${vx + Math.cos(a2)*sqSize},${vy + Math.sin(a2)*sqSize}" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linejoin="miter" />\n`;
      } else {
        const largeArcFlag = sec.diff > Math.PI ? 1 : 0;
        svg += `  <path d="M ${vx + Math.cos(sec.startAngle)*rArc},${vy + Math.sin(sec.startAngle)*rArc} A ${rArc},${rArc} 0 ${largeArcFlag},1 ${vx + Math.cos(sec.endAngle)*rArc},${vy + Math.sin(sec.endAngle)*rArc}" fill="none" stroke="#3b82f6" stroke-width="1.5" />\n`;
      }
      if (angItem.label) {
        svg += `  <text x="${lx}" y="${ly}" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">${angItem.label}</text>\n`;
      }
    });
  }

  const arrowTips = new Set();
  if (geo.segments) {
    for (const seg of geo.segments) {
      if (seg.arrow) arrowTips.add(seg.to);
      const p1 = pts[seg.from], p2 = pts[seg.to];
      if (p1 && p2) {
        svg += `  <line x1="${p1[0]}" y1="${p1[1]}" x2="${p2[0]}" y2="${p2[1]}" stroke="#475569" stroke-width="1.8" ${seg.arrow ? 'marker-end="url(#sleek-arrow)"' : ''} />\n`;
        // Draw parallel markings if present! (Very important for q3!)
        if (seg.marks) {
          const mx = (p1[0] + p2[0]) / 2;
          const my = (p1[1] + p2[1]) / 2;
          const markerId = seg.marks === 2 ? 'url(#parallel-mark-2)' : 'url(#parallel-mark-1)';
          svg += `  <line x1="${p1[0]}" y1="${p1[1]}" x2="${mx}" y2="${my}" stroke="transparent" stroke-width="0" marker-end="${markerId}" />\n`;
        }
      }
    }
  }
  for (const k in pts) {
     if (arrowTips.has(k)) continue;
     // Don't draw points for dummy intersections
     if (k.startsWith('I')) continue;
     svg += `  <circle cx="${pts[k][0]}" cy="${pts[k][1]}" r="3" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5" />\n`;
  }
  
  return svg + `</svg>`;
}

async function run() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y9-7a').get();
  let count = 0;
  const batch = db.batch();
  
  snapshot.forEach(doc => {
    const id = doc.id;
    if (id.startsWith('y9-7a-q3')) {
      const geo = seedMap[id];
      const data = doc.data();
      if (geo) {
        const beautifulSvg = geometryToSectorSvg(geo, id);
        let question = data.question;
        question = question.replace(/<svg[\s\S]*?<\/svg>\s*/g, '');
        question = `${beautifulSvg}\n\n${question}`;
        
        batch.update(doc.ref, { question });
        count++;
      }
    }
  });
  
  console.log(`Prepared ${count} questions for intersection snapping and SVG rendering.`);
  if (count > 0) {
    await batch.commit();
    console.log('Batch commit successful!');
  }
}

run().catch(console.error);
