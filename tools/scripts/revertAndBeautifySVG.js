import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load seed data to get original geometry
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.join(__dirname, '../../backup_seeds/seedYear9Ch7Questions.js');
const seedContent = fs.readFileSync(seedPath, 'utf8');

// The seed file exports an array or variable. We can just parse it by a trick or regex if it's large, but let's just evaluate it.
// Replace export const seedYear9Ch7Questions = [ with [
const jsonStr = seedContent.replace(/export\s+const\s+\w+\s*=\s*/, '').replace(/;\s*$/, '');
const seedData = JSON.parse(jsonStr);

// Create a map for quick lookup
const seedMap = {};
seedData.forEach(q => {
  if (q.id && q.graphData && q.graphData.geometry) {
    seedMap[q.id] = q.graphData.geometry;
  }
});

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function geometryToBeautifulSvg(geo) {
  if (!geo || !geo.points) return '';
  const W = 400; // Fixed canvas width for premium feel
  const H = 250;
  
  // Find bounding box
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const k in geo.points) {
    const [x, y] = geo.points[k];
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  
  // Ensure we don't have zero span
  if (minX === maxX) { minX -= 1; maxX += 1; }
  if (minY === maxY) { minY -= 1; maxY += 1; }

  // Proportional Scaling! To keep angles correct, scale X and Y equally.
  const spanX = maxX - minX;
  const spanY = maxY - minY;
  
  const padPercent = 0.2; // 20% padding
  const paddingX = spanX * padPercent;
  const paddingY = spanY * padPercent;
  
  minX -= paddingX; maxX += paddingX;
  minY -= paddingY; maxY += paddingY;
  
  const paddedSpanX = maxX - minX;
  const paddedSpanY = maxY - minY;
  
  // Scale factor to fit inside WxH while maintaining aspect ratio
  const scale = Math.min(W / paddedSpanX, H / paddedSpanY);
  
  // Center the drawing in the remaining space
  const actualW = paddedSpanX * scale;
  const actualH = paddedSpanY * scale;
  const offsetX = (W - actualW) / 2;
  const offsetY = (H - actualH) / 2;
  
  const mapX = (x) => offsetX + ((x - minX) * scale);
  // Y is inverted in SVG
  const mapY = (y) => offsetY + ((maxY - y) * scale);
  
  let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="auto" style="max-width: 500px; display: block; margin: 1rem auto; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 1rem;" xmlns="http://www.w3.org/2000/svg">\n`;
  
  // Elegant sleek markers
  svg += `<defs>
    <marker id="sleek-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto-start-reverse">
      <path d="M0,1 L5,3 L0,5" fill="none" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>\n`;
  
  // Draw segments first so points render on top
  if (geo.segments) {
    for (const seg of geo.segments) {
      const p1 = geo.points[seg.from];
      const p2 = geo.points[seg.to];
      if (!p1 || !p2) continue;
      
      const x1 = mapX(p1[0]), y1 = mapY(p1[1]);
      const x2 = mapX(p2[0]), y2 = mapY(p2[1]);
      
      let markerStart = seg.arrow ? 'marker-start="url(#sleek-arrow)"' : '';
      let markerEnd = seg.arrow ? 'marker-end="url(#sleek-arrow)"' : '';
      
      // If it's a two-way arrow or just standard line
      if (seg.arrow) {
        // Draw the line with arrows
        svg += `  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#64748b" stroke-width="1.5" ${markerEnd} />\n`;
      } else {
        svg += `  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#64748b" stroke-width="1.5" />\n`;
      }
      
      // Draw ticks for equal length
      if (seg.ticks) {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy);
        const nx = -dy / len * 6;
        const ny = dx / len * 6;
        
        for(let i=0; i<seg.ticks; i++) {
          const offset = (i - (seg.ticks-1)/2) * 4;
          const px = mx + dx/len * offset;
          const py = my + dy/len * offset;
          svg += `  <line x1="${px - nx}" y1="${py - ny}" x2="${px + nx}" y2="${py + ny}" stroke="#475569" stroke-width="1.5" stroke-linecap="round" />\n`;
        }
      }
      
      // Draw marks for parallel lines
      if (seg.marks) {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy);
        const ux = dx / len * 5;
        const uy = dy / len * 5;
        const nx = -uy * 1.2;
        const ny = ux * 1.2;
        
        for(let i=0; i<seg.marks; i++) {
          const offset = (i - (seg.marks-1)/2) * 6;
          const px = mx + dx/len * offset;
          const py = my + dy/len * offset;
          svg += `  <polyline points="${px-ux-nx},${py-uy-ny} ${px},${py} ${px-ux+nx},${py-uy+ny}" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-linejoin="round" />\n`;
        }
      }
    }
  }

  // Draw points and labels
  if (geo.angles) {
    for (const ang of geo.angles) {
      const pt = geo.points[ang.at];
      if (!pt) continue;
      const x = mapX(pt[0]);
      const y = mapY(pt[1]);
      
      if (ang.right) {
        svg += `  <rect x="${x}" y="${y-12}" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.2" />\n`;
      }
      
      if (ang.label) {
        // Simple heuristic to push labels away from center to avoid overlap
        // If x is left of center, push left, etc.
        const cx = W/2, cy = H/2;
        let dx = x > cx ? 15 : -25;
        let dy = y > cy ? 20 : -10;
        
        svg += `  <text x="${x + dx}" y="${y + dy}" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#334155">${ang.label}</text>\n`;
      }
    }
  }
  
  // Draw points
  for (const k in geo.points) {
     const [px, py] = geo.points[k];
     const x = mapX(px);
     const y = mapY(py);
     // Draw a clean dot for named points
     svg += `  <circle cx="${x}" cy="${y}" r="3.5" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5" />\n`;
  }
  
  svg += `</svg>`;
  return svg;
}

async function run() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y9-7a').get();
  
  let count = 0;
  const batch = db.batch();
  
  snapshot.forEach(doc => {
    const id = doc.id;
    const match = id.match(/^y9-7a-q(\d+)/);
    if (!match || parseInt(match[1]) > 10) return;
    
    const geo = seedMap[id];
    if (geo) {
      const beautifulSvg = geometryToBeautifulSvg(geo);
      
      const data = doc.data();
      let question = data.question;
      // Strip old SVG
      question = question.replace(/<svg[\s\S]*?<\/svg>\s*/, '');
      
      // Inject new SVG
      question = `${beautifulSvg}\n\n${question}`;
      
      batch.update(doc.ref, {
        question: question
      });
      count++;
    }
  });
  
  console.log(`Prepared ${count} questions for SVG beautification.`);
  if (count > 0) {
    await batch.commit();
    console.log('Batch commit successful!');
  }
}

run().catch(console.error);
