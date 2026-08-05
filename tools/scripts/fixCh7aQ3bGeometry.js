import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function pointOnSegment(V, A, B) {
  const cross = (B[0]-A[0])*(V[1]-A[1]) - (B[1]-A[1])*(V[0]-A[0]);
  if (Math.abs(cross) > 1e-4) return false;
  const dot = (V[0]-A[0])*(B[0]-A[0]) + (V[1]-A[1])*(B[1]-A[1]);
  if (dot < -1e-4) return false;
  const sqLen = (B[0]-A[0])**2 + (B[1]-A[1])**2;
  if (dot > sqLen + 1e-4) return false;
  return true;
}

function geometryToSvg(geo) {
  if (!geo || !geo.points) return '';
  const W = 360, H = 260;
  let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
  for (const k in geo.points) {
    const [x,y]=geo.points[k];
    if(x<minX)minX=x; if(x>maxX)maxX=x; if(y<minY)minY=y; if(y>maxY)maxY=y;
  }
  if(minX===maxX){minX-=1;maxX+=1;} if(minY===maxY){minY-=1;maxY+=1;}
  const px=(maxX-minX)*0.25, py=(maxY-minY)*0.25;
  minX-=px; maxX+=px; minY-=py; maxY+=py;
  const scale=Math.min(W/(maxX-minX), H/(maxY-minY));
  const ox=(W-(maxX-minX)*scale)/2, oy=(H-(maxY-minY)*scale)/2;
  const pts={};
  for(const k in geo.points) pts[k]=[ox+(geo.points[k][0]-minX)*scale, oy+(maxY-geo.points[k][1])*scale];

  let svg=`<svg viewBox="0 0 ${W} ${H}" width="100%" height="auto" style="max-width:440px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">\n`;
  svg+=`<defs><marker id="sleek-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto-start-reverse"><path d="M0,1 L6,3.5 L0,6" fill="none" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>\n`;

  const abv={};
  if(geo.angles) for(const ang of geo.angles){if(!ang||!ang.at)continue; if(!abv[ang.at])abv[ang.at]=[]; abv[ang.at].push(ang);}

  for(const vKey in abv){
    const [vx,vy]=pts[vKey];
    const rawRays=[];
    if(geo.segments) for(const seg of geo.segments){
      const fp=pts[seg.from],tp=pts[seg.to];
      if(!fp||!tp) continue;
      if(seg.from===vKey) rawRays.push(seg.to);
      else if(seg.to===vKey) rawRays.push(seg.from);
      else if(pointOnSegment(pts[vKey],fp,tp)){rawRays.push(seg.from);rawRays.push(seg.to);}
    }
    const rays=[];
    for(const nKey of rawRays){
      const nx=pts[nKey][0],ny=pts[nKey][1];
      if(Math.abs(nx-vx)<1e-4&&Math.abs(ny-vy)<1e-4) continue;
      let angle=Math.atan2(ny-vy,nx-vx); if(angle<0)angle+=2*Math.PI;
      if(!rays.some(r=>{let d=Math.abs(r.angle-angle);if(d>Math.PI)d=2*Math.PI-d;return d < 1e-4;})) rays.push({key:nKey,angle});
    }
    rays.sort((a,b)=>a.angle-b.angle);
    const sectors=[];
    if(rays.length>=2){
      for(let i=0;i<rays.length;i++){
        const r1=rays[i],r2=rays[(i+1)%rays.length];
        let diff=r2.angle-r1.angle; if(diff<=0)diff+=2*Math.PI;
        sectors.push({startAngle:r1.angle,diff});
      }
    } else sectors.push({startAngle:0,diff:Math.PI});

    let labelItems=abv[vKey];
    if(sectors.length===2&&labelItems.length===1&&!labelItems[0].span){
      if(sectors[0].diff>Math.PI) labelItems=[{},labelItems[0]];
    }
    labelItems.forEach((angItem,idx)=>{
      if(!angItem.label&&!angItem.right) return;
      const sec=sectors[idx%sectors.length];
      let startAngle=sec.startAngle, diff=sec.diff;
      if(angItem.span){const cur=idx%sectors.length;for(let i=1;i<angItem.span;i++)diff+=sectors[(cur+i)%sectors.length].diff;}
      const endAngle=startAngle+diff, midAngle=startAngle+diff/2;
      const rArc=24, rLabel=42;
      const lx=vx+Math.cos(midAngle)*rLabel, ly=vy+Math.sin(midAngle)*rLabel;
      if(angItem.right){
        const sqSize=13;
        const px2=vx+Math.cos(startAngle)*sqSize+Math.cos(endAngle)*sqSize;
        const py2=vy+Math.sin(startAngle)*sqSize+Math.sin(endAngle)*sqSize;
        svg+=`  <path d="M ${vx+Math.cos(startAngle)*sqSize},${vy+Math.sin(startAngle)*sqSize} L ${px2},${py2} L ${vx+Math.cos(endAngle)*sqSize},${vy+Math.sin(endAngle)*sqSize}" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linejoin="miter" />\n`;
      } else {
        const laf=diff>Math.PI?1:0;
        svg+=`  <path d="M ${vx+Math.cos(startAngle)*rArc},${vy+Math.sin(startAngle)*rArc} A ${rArc},${rArc} 0 ${laf},1 ${vx+Math.cos(endAngle)*rArc},${vy+Math.sin(endAngle)*rArc}" fill="none" stroke="#3b82f6" stroke-width="1.5" />\n`;
      }
      if(angItem.label) svg+=`  <text x="${lx}" y="${ly}" font-family="system-ui,-apple-system,sans-serif" font-size="14" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">${angItem.label}</text>\n`;
    });
  }

  if(geo.segments) for(const seg of geo.segments){
    const p1=pts[seg.from],p2=pts[seg.to]; if(!p1||!p2) continue;
    svg+=`  <line x1="${p1[0]}" y1="${p1[1]}" x2="${p2[0]}" y2="${p2[1]}" stroke="#475569" stroke-width="1.8" ${seg.arrow?'marker-end="url(#sleek-arrow)"':''} />\n`;
    if(seg.marks){
      const mx=(p1[0]+p2[0])/2,my=(p1[1]+p2[1])/2,angle=Math.atan2(p2[1]-p1[1],p2[0]-p1[0])*180/Math.PI;
      if (seg.marks === 1) {
        svg+=`  <g transform="translate(${mx},${my}) rotate(${angle})"><path d="M -5 -5 L 3 0 L -5 5" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>\n`;
      } else if (seg.marks === 2) {
        svg+=`  <g transform="translate(${mx},${my}) rotate(${angle})"><path d="M -8 -5 L 0 0 L -8 5 M 0 -5 L 8 0 L 0 5" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>\n`;
      }
    }
  }

  return svg+'</svg>';
}

const geo = {
  points: {
    // Intersections:
    // I1_left (Left Line & Top Transversal) = [158.33, 130] -> represented as A=[-2.5, -0.625] & C=[1, 2] intersection.
    // I2_left (Left Line & Bottom Transversal) = [158.33, 173.33] -> represented as A & D=[-1, -2] intersection.
    // I1_right (Right Line & Top Transversal) = [201.67, 130] -> represented as B & C intersection.
    O1:[158.33, 130], O2:[158.33, 173.33], O3:[201.67, 130]
  },
  // We'll reconstruct the geometry using standard variables to match y9-7a-q3b-beta
  pointsReal: {
    I1_L: [158.33, 130],
    I2_L: [158.33, 173.33],
    I1_R: [201.67, 130]
  }
};

// Instead of hardcoding relative math, let's use the points and segments from the original SVG but correct the angles mapping.
// Let's look at the segments in y9-7a-q3b-beta:
// Top transversal: from [115, 151.67] to [245, 86.67] -> intersection with Left Line is [158.33, 130] (let's call it I1_L).
// Bottom transversal: from [115, 195] to [245, 130] -> intersection with Left Line is [158.33, 173.33] (let's call it I2_L).
// Left Line: from [158.33, 216.67] to [158.33, 65]
// Right Line: from [201.67, 195] to [201.67, 43.33] -> intersection with Top Transversal is [201.67, 130] (let's call it I1_R).

const realGeo = {
  points: {
    I1_L: [158.33, 130],
    I2_L: [158.33, 173.33],
    I1_R: [201.67, 130],
    // Ends:
    T1_S: [115, 151.67], T1_E: [245, 86.67], // Top Transversal
    T2_S: [115, 195], T2_E: [245, 130], // Bottom Transversal
    L_S: [158.33, 216.67], L_E: [158.33, 65], // Left Line
    R_S: [201.67, 195], R_E: [201.67, 43.33] // Right Line
  },
  segments: [
    { from:'T1_S', to:'T1_E', marks:1 },
    { from:'T2_S', to:'T2_E', marks:1 },
    { from:'L_S', to:'L_E', marks:2 },
    { from:'R_S', to:'R_E', marks:2 }
  ],
  angles: [
    { at:'I1_L', label:'β' }, // Sector 1 (Top-Left)
    { at:'I2_L' }, // Sector 0 (Bottom-Left) - empty
    { at:'I2_L', label:'75°' }, // Sector 1 (Top-Left) - co-interior!
    { at:'I1_R', label:'γ' } // Sector 1 (Top-Left)
  ]
};

// Let's verify sectors at I1_L:
// rays: Down, Down-Left, Up, Up-Right
// Sector 0: Down to Down-Left (Bottom-Left)
// Sector 1: Down-Left to Up (Top-Left)
// Sector 2: Up to Up-Right (Top-Right)
// Sector 3: Up-Right to Down (Bottom-Right)
// So β is at Sector 0 in the old code?
// Let's check old code angles for I1_L:
// In old code: β is at index 0 in the angles list for I1_L (Bottom-Left).
// Yes! Sector 0 is Bottom-Left!
// In my new code:
// If we want β to be in Sector 1 (Top-Left):
// Sector 0 must be empty. So we need `angles: [{at: 'I1_L'}, {at: 'I1_L', label: 'β'}]`.
// Wait, is β in the Top-Left sector?
// Look at the screenshot: the arc for β is between the vertical line pointing up and the transversal pointing down-left.
// Yes! That is Sector 1 (Top-Left)!
// So yes, we need to map both β and 75° to Sector 1!
// Angles array at I1_L:
// `{ at:'I1_L' }, { at:'I1_L', label:'β' }`
// Angles array at I2_L:
// `{ at:'I2_L' }, { at:'I2_L', label:'75°' }`
// Angles array at I1_R:
// `{ at:'I1_R' }, { at:'I1_R', label:'γ' }`

const finalGeo = {
  points: {
    I1_L: [158.33, 130],
    I2_L: [158.33, 173.33],
    I1_R: [201.67, 130],
    T1_S: [115, 151.67], T1_E: [245, 86.67],
    T2_S: [115, 195], T2_E: [245, 130],
    L_S: [158.33, 216.67], L_E: [158.33, 65],
    R_S: [201.67, 195], R_E: [201.67, 43.33]
  },
  segments: [
    { from:'T1_S', to:'T1_E', marks:1 },
    { from:'T2_S', to:'T2_E', marks:1 },
    { from:'L_S', to:'L_E', marks:2 },
    { from:'R_S', to:'R_E', marks:2 }
  ],
  angles: [
    { at:'I1_L' }, // Sector 0 (Bottom-Left)
    { at:'I1_L', label:'β' }, // Sector 1 (Top-Left)
    { at:'I2_L' }, // Sector 0 (Bottom-Left)
    { at:'I2_L', label:'75°' }, // Sector 1 (Top-Left)
    { at:'I1_R' }, // Sector 0 (Bottom-Left)
    { at:'I1_R', label:'γ' } // Sector 1 (Top-Left)
  ]
};

async function run() {
  const ids = ['y9-7a-q3b-alpha', 'y9-7a-q3b-beta'];
  
  for (const id of ids) {
    const docRef = db.collection('questions').doc(id);
    const svg = geometryToSvg(finalGeo);
    
    const docSnap = await docRef.get();
    if (!docSnap.exists) continue;
    
    const data = docSnap.data();
    let question = data.question;
    question = question.replace(/<svg[\s\S]*?<\/svg>\s*/g, '');
    question = `${svg}\n\n${question}`;
    
    await docRef.update({ question });
    console.log(`Successfully fixed geometry for ${id}!`);
  }
}

run().catch(console.error);
