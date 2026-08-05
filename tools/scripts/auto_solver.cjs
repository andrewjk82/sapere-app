const fs = require('fs');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
const content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
const questions = eval(match[1]);

function getPointCoords(p) {
  if (p.name === 'O' || p.id === 'O') return { x: 0, y: 0 };
  let a = p.angle * Math.PI / 180;
  return { x: Math.cos(a), y: Math.sin(a) };
}

function calculateAngle(p1, p2, p3) {
  let v1 = { x: p1.x - p2.x, y: p1.y - p2.y };
  let v2 = { x: p3.x - p2.x, y: p3.y - p2.y };
  
  let dot = v1.x * v2.x + v1.y * v2.y;
  let mag1 = Math.sqrt(v1.x*v1.x + v1.y*v1.y);
  let mag2 = Math.sqrt(v2.x*v2.x + v2.y*v2.y);
  
  let cosTheta = dot / (mag1 * mag2);
  // Clamp to avoid NaN due to floating point inaccuracies
  if (cosTheta > 1) cosTheta = 1;
  if (cosTheta < -1) cosTheta = -1;
  
  let angle = Math.acos(cosTheta) * 180 / Math.PI;
  return Math.round(angle);
}

questions.forEach(q => {
  if (q.id.match(/^y10-13a-q[2345]/)) {
    let elements = q.graphData.jsxGraph.elements;
    if (!elements) return; // skipped if already overwritten
    
    let points = {};
    elements.filter(e => e.type === 'point').forEach(p => {
      points[p.id] = getPointCoords(p);
    });
    
    let results = {};
    elements.filter(e => e.type === 'angle').forEach(a => {
      if (['α', 'β', 'γ', 'θ'].includes(a.name)) {
        let p1 = points[a.points[0]];
        let p2 = points[a.points[1]];
        let p3 = points[a.points[2]];
        if (p1 && p2 && p3) {
          results[a.name] = calculateAngle(p1, p2, p3);
        }
      }
    });
    
    console.log(q.id, results);
  }
});
