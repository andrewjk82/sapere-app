const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
const d = html => '<div style="text-align:left">' + html + '</div>';

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

let tp = textPos(60, 170, 240, 170, 150, 90, 32);
let tq = textPos(240, 170, 150, 90, 60, 170, 32);
let ts = textPos(150, 90, 100, 40, 200, 40, 24);
const svg50 = `
<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;display:block;margin:10px auto;box-shadow:0 4px 6px -1px rgb(0 0 0/0.05);">
  <rect width="300" height="220" fill="#fafbfc" rx="12"/>
  <polygon points="60,170 240,170 150,90" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
  <polygon points="100,40 200,40 150,90" fill="#e8f4fd" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="${arc(60, 170, 240, 170, 150, 90, 22)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(240, 170, 150, 90, 60, 170, 22)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(150, 90, 100, 40, 200, 40, 16)}" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="48" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">P</text>
  <text x="252" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Q</text>
  <text x="90" y="38" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
  <text x="210" y="38" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
  <text x="162" y="102" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">S</text>
  <text x="${tp.x}" y="${tp.y + 4}" font-family="'Outfit',sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">45°</text>
  <text x="${tq.x}" y="${tq.y + 4}" font-family="'Outfit',sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">55°</text>
  <text x="${ts.x}" y="${ts.y + 5}" font-family="'Outfit',sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">α</text>
</svg>
`;

let tA51 = textPos(110, 160, 70, 48, 230, 160, 28);
let tB51 = textPos(230, 160, 70, 48, 110, 160, 34); 
const svg51 = `
<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;display:block;margin:10px auto;box-shadow:0 4px 6px -1px rgb(0 0 0/0.05);">
  <rect width="300" height="220" fill="#fafbfc" rx="12"/>
  <polygon points="110,160 230,160 190,48 70,48" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="230" y1="160" x2="70" y2="48" stroke="#0f172a" stroke-width="2" stroke-dasharray="5,3" stroke-linecap="round"/>
  ${ticks(110, 160, 230, 160, 1)}
  ${ticks(230, 160, 190, 48, 1)}
  ${ticks(190, 48, 70, 48, 1)}
  ${ticks(70, 48, 110, 160, 1)}
  <path d="${arc(110, 160, 70, 48, 230, 160, 18)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(230, 160, 70, 48, 110, 160, 22)}" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="100" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
  <text x="240" y="178" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
  <text x="200" y="38" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>
  <text x="60" y="38" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">D</text>
  <text x="${tA51.x}" y="${tA51.y + 4}" font-family="'Outfit',sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">110°</text>
  <text x="${tB51.x}" y="${tB51.y + 4}" font-family="'Outfit',sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">α</text>
</svg>
`;

let tV52 = textPos(150, 110, 90, 170, 210, 170, 36); 
const svg52 = `
<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;display:block;margin:10px auto;box-shadow:0 4px 6px -1px rgb(0 0 0/0.05);">
  <rect width="300" height="220" fill="#fafbfc" rx="12"/>
  <polygon points="90,170 210,170 210,50 90,50" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="90" y1="170" x2="210" y2="50" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
  <line x1="90" y1="50" x2="210" y2="170" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
  <path d="M 90 160 L 100 160 L 100 170" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <path d="M 200 170 L 200 160 L 210 160" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <path d="M 210 60 L 200 60 L 200 50" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <path d="M 90 60 L 100 60 L 100 50" fill="none" stroke="#64748b" stroke-width="1.5"/>
  ${ticks(90, 170, 210, 170, 1)}
  ${ticks(210, 170, 210, 50, 1)}
  ${ticks(210, 50, 90, 50, 1)}
  ${ticks(90, 50, 90, 170, 1)}
  <path d="${arc(150, 110, 90, 170, 210, 170, 18)}" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="75" y="182" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
  <text x="225" y="182" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
  <text x="225" y="42" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>
  <text x="75" y="42" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">D</text>
  <text x="150" y="100" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">V</text>
  <text x="${tV52.x}" y="${tV52.y + 4}" font-family="'Outfit',sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">∠AVB</text>
</svg>
`;

let tOCA = textPos(150, 50, 89, 181, 150, 130, 32);
let tOCB = textPos(150, 50, 150, 130, 211, 181, 32);
let tO = textPos(150, 130, 211, 181, 89, 181, 36);
const svg53 = `
<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;display:block;margin:10px auto;box-shadow:0 4px 6px -1px rgb(0 0 0/0.05);">
  <rect width="300" height="220" fill="#fafbfc" rx="12"/>
  <circle cx="150" cy="130" r="80" fill="#f8fafc" stroke="#0f172a" stroke-width="2.5"/>
  <polygon points="150,50 89,181 150,130" fill="#e0e7ff" stroke="none"/>
  <polygon points="150,50 211,181 150,130" fill="#fee2e2" stroke="none"/>
  <line x1="150" y1="130" x2="150" y2="50" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
  <line x1="150" y1="130" x2="89" y2="181" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
  <line x1="150" y1="130" x2="211" y2="181" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
  <line x1="150" y1="50" x2="89" y2="181" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,3" stroke-linecap="round"/>
  <line x1="150" y1="50" x2="211" y2="181" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,3" stroke-linecap="round"/>
  <circle cx="150" cy="130" r="3" fill="#0f172a"/>
  <path d="${arc(150, 50, 89, 181, 150, 130, 22)}" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="${arc(150, 50, 150, 130, 211, 181, 24)}" fill="none" stroke="#ea580c" stroke-width="2"/>
  <path d="${arc(150, 130, 211, 181, 89, 181, 22)}" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="150" y="118" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">O</text>
  <text x="150" y="38" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>
  <text x="75" y="195" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
  <text x="225" y="195" font-family="'Outfit',sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
  <text x="${tOCA.x - 2}" y="${tOCA.y + 4}" font-family="'Outfit',sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">25°</text>
  <text x="${tOCB.x + 2}" y="${tOCB.y + 4}" font-family="'Outfit',sans-serif" font-size="12" font-weight="bold" fill="#ea580c" text-anchor="middle">25°</text>
  <text x="${tO.x}" y="${tO.y + 5}" font-family="'Outfit',sans-serif" font-size="15" font-weight="bold" fill="#dc2626" text-anchor="middle">α</text>
</svg>
`;

async function main() {
    const doc50 = await db.collection('questions').doc('WSsXenvcp0ej7PkMLaEc').get();
    let q50Text = doc50.data().question.split('<div')[0];
    q50Text = 'In the diagram, two triangles share a common vertex \\(S\\). The large triangle \\(PSQ\\) has \\(\\angle P = 45^\\circ\\) and \\(\\angle Q = 55^\\circ\\). The small triangle \\(ASB\\) sits on top. Find \\(\\alpha = \\angle ASB\\).\n';

    const doc51 = await db.collection('questions').doc('x47PGdgwnPZinBm65vz2').get();
    const q51Text = doc51.data().question.split('<div')[0];

    const doc52 = await db.collection('questions').doc('yULzxKPvnOyhOgegEH9f').get();
    const q52Text = doc52.data().question.split('<div')[0];

    const doc53 = await db.collection('questions').doc('zrH3IJs2rkyN9MRjA58M').get();
    const q53Text = doc53.data().question.split('<div')[0];

    await Promise.all([
      db.collection('questions').doc('WSsXenvcp0ej7PkMLaEc').update({ question: q50Text + '<div style="display:flex;justify-content:center;margin:16px 0;">' + svg50 + '</div>' }),
      db.collection('questions').doc('x47PGdgwnPZinBm65vz2').update({ question: q51Text + '<div style="display:flex;justify-content:center;margin:16px 0;">' + svg51 + '</div>' }),
      db.collection('questions').doc('yULzxKPvnOyhOgegEH9f').update({ question: q52Text + '<div style="display:flex;justify-content:center;margin:16px 0;">' + svg52 + '</div>' }),
      db.collection('questions').doc('zrH3IJs2rkyN9MRjA58M').update({ question: q53Text + '<div style="display:flex;justify-content:center;margin:16px 0;">' + svg53 + '</div>' })
    ]);
    console.log('Successfully fixed Batch 2 arcs!');
}

main().catch(console.error);
