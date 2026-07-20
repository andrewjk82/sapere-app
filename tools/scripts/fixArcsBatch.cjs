const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
const d = html => '<div style="text-align:left">' + html + '</div>';

// --- HELPERS ---
function arc(vx, vy, p1x, p1y, p2x, p2y, r) {
    const angle1 = Math.atan2(p1y - vy, p1x - vx);
    const angle2 = Math.atan2(p2y - vy, p2x - vx);
    const startX = vx + r * Math.cos(angle1);
    const startY = vy + r * Math.sin(angle1);
    const endX = vx + r * Math.cos(angle2);
    const endY = vy + r * Math.sin(angle2);
    let diff = angle2 - angle1;
    while (diff > Math.PI) diff -= 2 * Math.PI;
    while (diff < -Math.PI) diff += 2 * Math.PI;
    const sweep = diff > 0 ? 1 : 0;
    const large = Math.abs(diff) > Math.PI ? 1 : 0;
    return `M ${startX} ${startY} A ${r} ${r} 0 ${large} ${sweep} ${endX} ${endY}`;
}

function textPos(vx, vy, p1x, p1y, p2x, p2y, r) {
    const angle1 = Math.atan2(p1y - vy, p1x - vx);
    const angle2 = Math.atan2(p2y - vy, p2x - vx);
    let diff = angle2 - angle1;
    while (diff > Math.PI) diff -= 2 * Math.PI;
    while (diff < -Math.PI) diff += 2 * Math.PI;
    const midAngle = angle1 + diff / 2;
    return {
        x: vx + r * Math.cos(midAngle),
        y: vy + r * Math.sin(midAngle)
    };
}

function ticks(x1, y1, x2, y2, count) {
    const mx = (x1 + x2)/2, my = (y1 + y2)/2;
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    const nx = -dy / len, ny = dx / len;
    let svg = '';
    const gap = 5;
    const tickLen = 6;
    for(let i=0; i<count; i++) {
        const offset = (i - (count-1)/2) * gap;
        const cx = mx + (dx/len)*offset;
        const cy = my + (dy/len)*offset;
        svg += `<line x1="${cx - nx*tickLen}" y1="${cy - ny*tickLen}" x2="${cx + nx*tickLen}" y2="${cy + ny*tickLen}" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>`;
    }
    return svg;
}

function parallelArrow(x1, y1, x2, y2, count) {
    const mx = (x1+x2)/2, my = (y1+y2)/2;
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    const nx = dx / len, ny = dy / len;
    const px = -ny, py = nx; // perpendicular
    const arrowLen = 7;
    const gap = 9;
    let svg = '';
    for(let i=0; i<count; i++) {
        const offset = (i - (count-1)/2) * gap;
        const cx = mx + nx*offset;
        const cy = my + ny*offset;
        svg += `<path d="M ${cx - nx*arrowLen + px*arrowLen*0.7} ${cy - ny*arrowLen + py*arrowLen*0.7} L ${cx} ${cy} L ${cx - nx*arrowLen - px*arrowLen*0.7} ${cy - ny*arrowLen - py*arrowLen*0.7}" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    return svg;
}

// ======================= Q45 =======================
let tp = textPos(100, 60, 200, 60, 150, 110, 30);
let tt = textPos(200, 60, 150, 110, 100, 60, 30);
let ts = textPos(150, 110, 100, 60, 200, 60, 32);

const svg1 = `
<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;display:block;margin:10px auto;box-shadow:0 4px 6px -1px rgb(0 0 0/0.05);">
  <rect width="300" height="220" fill="#fafbfc" rx="12"/>
  <line x1="30" y1="60" x2="270" y2="60" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="30" y1="160" x2="270" y2="160" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 260 54 L 270 60 L 260 66" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 260 154 L 270 160 L 260 166" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  
  <line x1="100" y1="60" x2="200" y2="160" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="60" x2="100" y2="160" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="${arc(100, 60, 200, 60, 150, 110, 20)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(200, 60, 150, 110, 100, 60, 20)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(150, 110, 100, 60, 200, 60, 18)}" fill="none" stroke="#dc2626" stroke-width="2.5"/>

  <text x="90" y="52" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">P</text>
  <text x="210" y="52" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">T</text>
  <text x="150" y="128" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">S</text>
  <text x="90" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">R</text>
  <text x="210" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Q</text>

  <text x="${tp.x}" y="${tp.y + 4}" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">50°</text>
  <text x="${tt.x}" y="${tt.y + 4}" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">45°</text>
  <text x="${ts.x}" y="${ts.y + 5}" font-family="'Outfit',sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">γ</text>
</svg>
`;
const q45 = 'In the diagram below, the two horizontal lines are parallel. The two transversal lines intersect at \\(S\\) between the lines. Find the value of \\(\\gamma\\).\n<div style="display:flex;justify-content:center;margin:16px 0;">' + svg1 + '</div>';

// ======================= Q46 =======================
let ta = textPos(100, 160, 30, 160, 150, 60, 35);
let tb = textPos(200, 160, 150, 60, 270, 160, 35);
let tv = textPos(150, 60, 100, 160, 200, 160, 35);

const svg2 = `
<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;display:block;margin:10px auto;box-shadow:0 4px 6px -1px rgb(0 0 0/0.05);">
  <rect width="300" height="220" fill="#fafbfc" rx="12"/>
  <line x1="30" y1="160" x2="270" y2="160" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="100,160 200,160 150,60" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
  
  ${ticks(100, 160, 150, 60, 2)}
  ${ticks(200, 160, 150, 60, 2)}

  <path d="${arc(100, 160, 30, 160, 150, 60, 20)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(200, 160, 150, 60, 270, 160, 20)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(150, 60, 100, 160, 200, 160, 22)}" fill="none" stroke="#dc2626" stroke-width="2"/>

  <text x="100" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
  <text x="200" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
  <text x="150" y="48" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">V</text>

  <text x="${ta.x}" y="${ta.y + 4}" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">40°</text>
  <text x="${tb.x}" y="${tb.y + 4}" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">40°</text>
  <text x="${tv.x}" y="${tv.y + 5}" font-family="'Outfit',sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">∠AVB</text>
</svg>
`;
const q46 = 'In the diagram, \\(VA = VB\\) (marked by double tick marks). The base \\(AB\\) is extended on both sides. The two exterior angles at \\(A\\) and \\(B\\) are each \\(40^\\circ\\). Find the size of \\(\\angle AVB\\).\n<div style="display:flex;justify-content:center;margin:16px 0;">' + svg2 + '</div>';

// ======================= Q47 =======================
let tA = textPos(90, 160, 110, 60, 210, 160, 30);
let tC = textPos(230, 60, 110, 60, 90, 160, 32);

const svg3 = `
<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;display:block;margin:10px auto;box-shadow:0 4px 6px -1px rgb(0 0 0/0.05);">
  <rect width="300" height="220" fill="#fafbfc" rx="12"/>
  <polygon points="90,160 210,160 230,60 110,60" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="90" y1="160" x2="230" y2="60" stroke="#0f172a" stroke-width="2.5" stroke-dasharray="5,4" stroke-linecap="round"/>

  ${parallelArrow(90, 160, 110, 60, 1)}
  ${parallelArrow(210, 160, 230, 60, 1)}
  ${parallelArrow(90, 160, 210, 160, 2)}
  ${parallelArrow(110, 60, 230, 60, 2)}

  <path d="${arc(90, 160, 110, 60, 210, 160, 22)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(230, 60, 110, 60, 90, 160, 22)}" fill="none" stroke="#dc2626" stroke-width="2"/>

  <text x="75" y="172" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
  <text x="225" y="172" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
  <text x="245" y="52" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>
  <text x="95" y="52" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">D</text>

  <text x="${tA.x}" y="${tA.y + 4}" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">110°</text>
  <text x="${tC.x}" y="${tC.y + 4}" font-family="'Outfit',sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">w</text>
</svg>
`;
const q47 = 'In the diagram below, \\(ABCD\\) is a parallelogram (\\(AD \\parallel BC\\) and \\(AB \\parallel DC\\)). The diagonal \\(AC\\) is drawn. Given that \\(\\angle DAB = 110^\\circ\\), find \\(w = \\angle DCA\\).\n<div style="display:flex;justify-content:center;margin:16px 0;">' + svg3 + '</div>';

// ======================= Q48 =======================
let tA48 = textPos(80, 170, 150, 170, 165, 110, 32);
let tE48 = textPos(150, 170, 165, 110, 80, 170, 26); 
let tB48 = textPos(180, 50, 80, 170, 150, 170, 30);

const svg4 = `
<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;display:block;margin:10px auto;box-shadow:0 4px 6px -1px rgb(0 0 0/0.05);">
  <rect width="300" height="220" fill="#fafbfc" rx="12"/>
  <polygon points="80,170 220,170 180,50" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="180" y1="50" x2="150" y2="170" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" stroke-linecap="round"/>
  <line x1="80" y1="170" x2="165" y2="110" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>

  <path d="${arc(80, 170, 150, 170, 165, 110, 22)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(150, 170, 165, 110, 80, 170, 18)}" fill="none" stroke="#475569" stroke-width="2"/>
  <path d="${arc(180, 50, 80, 170, 150, 170, 22)}" fill="none" stroke="#dc2626" stroke-width="2"/>

  <text x="65" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
  <text x="235" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>
  <text x="180" y="38" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
  <text x="150" y="188" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">E</text>
  <text x="176" y="115" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">D</text>

  <text x="${tA48.x}" y="${tA48.y + 4}" font-family="'Outfit',sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">55°</text>
  <text x="${tE48.x}" y="${tE48.y + 4}" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#475569" text-anchor="middle">β</text>
  <text x="${tB48.x}" y="${tB48.y + 4}" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">2β</text>
</svg>
`;
const q48 = 'In the diagram, \\(ABC\\) is a triangle with \\(E\\) the midpoint of \\(AC\\). \\(D\\) lies on \\(BE\\) such that \\(AD\\) is a straight line from \\(A\\). Given that \\(\\angle DAE = 55^\\circ\\), \\(\\angle DEA = \\beta\\), and \\(\\angle ABE = 2\\beta\\), find \\(\\beta\\).\n<div style="display:flex;justify-content:center;margin:16px 0;">' + svg4 + '</div>';

// ======================= Q49 =======================
let tC49 = textPos(150, 60, 270, 60, 90, 160, 30);
let tB49 = textPos(210, 160, 150, 60, 90, 160, 30);

const svg5 = `
<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;display:block;margin:10px auto;box-shadow:0 4px 6px -1px rgb(0 0 0/0.05);">
  <rect width="300" height="220" fill="#fafbfc" rx="12"/>
  <line x1="30" y1="60" x2="270" y2="60" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="30" y1="160" x2="270" y2="160" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 260 54 L 270 60 L 260 66" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 260 154 L 270 160 L 260 166" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>

  <polygon points="90,160 210,160 150,60" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
  
  ${ticks(150, 60, 90, 160, 1)}
  ${ticks(150, 60, 210, 160, 1)}

  <path d="${arc(150, 60, 270, 60, 90, 160, 20)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(210, 160, 150, 60, 90, 160, 22)}" fill="none" stroke="#dc2626" stroke-width="2"/>

  <text x="75" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
  <text x="225" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
  <text x="150" y="48" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>

  <text x="${tC49.x}" y="${tC49.y + 4}" font-family="'Outfit',sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">115°</text>
  <text x="${tB49.x}" y="${tB49.y + 4}" font-family="'Outfit',sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">α</text>
</svg>
`;
const q49 = 'In the diagram, the two horizontal lines are parallel. Triangle \\(CAB\\) is isosceles with \\(CA = CB\\) (marked by the tick). The obtuse angle between the upper parallel line and the side \\(CA\\) is \\(115^\\circ\\). Find \\(\\alpha\\).\n<div style="display:flex;justify-content:center;margin:16px 0;">' + svg5 + '</div>';


Promise.all([
  db.collection('questions').doc('Vqy7bicKuEvGwI7cGkq9').update({ question: q45 }),
  db.collection('questions').doc('VrJ2b3pBcxXcfs6l3dR2').update({ question: q46 }),
  db.collection('questions').doc('VrvfVwGOduOqDcqkZrXD').update({ question: q47 }),
  db.collection('questions').doc('w19sLx2CljvRBkICDmdN').update({ question: q48 }),
  db.collection('questions').doc('w83zy95XbLtopWKtnSD1').update({ question: q49 })
]).then(() => console.log('Successfully fixed all arcs and labels!')).catch(console.error);
