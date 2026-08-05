import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
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
  }

  return svg+'</svg>';
}

const geo = {
  points: { O:[0,0], A:[-2,-1], B:[2,1], C:[-1,2], D:[1,-2], E:[0.5,2] },
  segments: [
    { from:'A', to:'B' },
    { from:'C', to:'D' },
    { from:'O', to:'E' }
  ],
  angles: [
    { at:'O', label:'90°' },
    { at:'O' },
    { at:'O', label:'3α' },
    { at:'O', label:'α' }
  ]
};

async function run() {
  const docRef = db.collection('questions').doc('y9-7a-q2c');
  const svg = geometryToSvg(geo);
  
  await docRef.update({
    question: `${svg}\n\nFind the angle marked with \\(\\alpha\\).`,
    graphData: FieldValue.delete()
  });
  console.log('Successfully fixed geometry and removed graphData for y9-7a-q2c!');
}

run().catch(console.error);
