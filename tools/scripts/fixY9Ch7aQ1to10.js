import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function geometryToSvg(geo) {
  if (!geo || !geo.points) return '';
  const W = geo.width || 260;
  const H = W * 0.8; // default aspect ratio
  
  // Find bounding box
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const k in geo.points) {
    const [x, y] = geo.points[k];
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  
  const pad = 1;
  minX -= pad; maxX += pad;
  minY -= pad; maxY += pad;
  
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;
  
  // Mapping functions
  const mapX = (x) => ((x - minX) / spanX) * W;
  const mapY = (y) => ((maxY - y) / spanY) * H;
  
  let svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">\n`;
  svg += `<defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="black" />
    </marker>
    <marker id="arrowhead-start" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto-start-reverse">
      <polygon points="10 0, 0 3.5, 10 7" fill="black" />
    </marker>
  </defs>\n`;
  
  // Draw segments
  if (geo.segments) {
    for (const seg of geo.segments) {
      const p1 = geo.points[seg.from];
      const p2 = geo.points[seg.to];
      if (!p1 || !p2) continue;
      
      const x1 = mapX(p1[0]), y1 = mapY(p1[1]);
      const x2 = mapX(p2[0]), y2 = mapY(p2[1]);
      
      let markerStart = seg.arrow ? 'marker-start="url(#arrowhead-start)"' : '';
      let markerEnd = seg.arrow ? 'marker-end="url(#arrowhead)"' : '';
      
      svg += `  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="black" stroke-width="2" ${markerStart} ${markerEnd} />\n`;
      
      // Draw ticks for equal length
      if (seg.ticks) {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy);
        const nx = -dy / len * 8;
        const ny = dx / len * 8;
        
        for(let i=0; i<seg.ticks; i++) {
          const offset = (i - (seg.ticks-1)/2) * 5;
          const px = mx + dx/len * offset;
          const py = my + dy/len * offset;
          svg += `  <line x1="${px - nx}" y1="${py - ny}" x2="${px + nx}" y2="${py + ny}" stroke="black" stroke-width="2" />\n`;
        }
      }
      
      // Draw marks for parallel lines
      if (seg.marks) {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy);
        const ux = dx / len * 6;
        const uy = dy / len * 6;
        const nx = -uy * 1.5;
        const ny = ux * 1.5;
        
        for(let i=0; i<seg.marks; i++) {
          const offset = (i - (seg.marks-1)/2) * 8;
          const px = mx + dx/len * offset;
          const py = my + dy/len * offset;
          svg += `  <polyline points="${px-ux-nx},${py-uy-ny} ${px},${py} ${px-ux+nx},${py-uy+ny}" fill="none" stroke="black" stroke-width="2" />\n`;
        }
      }
    }
  }
  
  // Draw points/labels/angles
  if (geo.angles) {
    for (const ang of geo.angles) {
      const pt = geo.points[ang.at];
      if (!pt) continue;
      const x = mapX(pt[0]);
      const y = mapY(pt[1]);
      
      if (ang.right) {
        svg += `  <rect x="${x}" y="${y-10}" width="10" height="10" fill="none" stroke="black" />\n`; // Simplified right angle
      }
      if (ang.label) {
        svg += `  <text x="${x+10}" y="${y-10}" font-family="serif" font-size="14" fill="blue">${ang.label}</text>\n`;
      }
    }
  }
  
  svg += `</svg>`;
  return svg;
}

function generateSteps(qData, ansVal) {
  const solText = (qData.solution || "").toLowerCase();
  let strategy = "We use general angle properties to solve this.";
  let what = "Apply angle rules.";
  let mistake = "Be careful not to mix up complementary and supplementary angles.";
  let calc = `\\\\(\\theta = ${ansVal}\\\\)`;
  
  if (solText.includes("obtuse") || solText.includes("acute") || solText.includes("reflex")) {
    strategy = "We classify the angle by comparing its measure to standard reference points ($90^\\\\circ, 180^\\\\circ, 360^\\\\circ$).";
    what = "Recall the definitions of acute, right, obtuse, straight, and reflex angles.";
    mistake = "A common mistake is confusing obtuse (between 90 and 180) with reflex (greater than 180).";
    calc = `\\\\(\\\\text{Classification: } ${ansVal}\\\\)`;
  } else if (solText.includes("complement")) {
    strategy = "The complement of an angle is the amount needed to make a right angle ($90^\\\\circ$).";
    what = "We use the complementary angle formula: $90^\\\\circ - x$.";
    mistake = "Be careful not to confuse complementary ($90^\\\\circ$) with supplementary ($180^\\\\circ$).";
    calc = `\\\\(90^\\\\circ - \\\\text{given} = ${ansVal}^\\\\circ\\\\)`;
  } else if (solText.includes("supplement")) {
    strategy = "The supplement of an angle is the amount needed to make a straight angle ($180^\\\\circ$).";
    what = "We use the supplementary angle formula: $180^\\\\circ - x$.";
    mistake = "Be careful not to confuse supplementary ($180^\\\\circ$) with complementary ($90^\\\\circ$).";
    calc = `\\\\(180^\\\\circ - \\\\text{given} = ${ansVal}^\\\\circ\\\\)`;
  } else if (solText.includes("at a point")) {
    strategy = "Angles around a point complete a full circle, adding up to $360^\\\\circ$.";
    what = "We set the sum of all given angles around the point equal to $360^\\\\circ$.";
    mistake = "A common mistake is assuming they add to $180^\\\\circ$, but a full revolution is $360^\\\\circ$.";
    calc = `\\\\(360^\\\\circ - \\\\text{sum of others} = ${ansVal}^\\\\circ\\\\)`;
  } else if (solText.includes("co-interior") || solText.includes("cointerior")) {
    strategy = "Co-interior angles between parallel lines add up to $180^\\\\circ$.";
    what = "We set up an equation where the sum of the two co-interior angles is $180^\\\\circ$.";
    mistake = "A common error is assuming co-interior angles are equal, but they are actually supplementary.";
    calc = `\\\\(180^\\\\circ - \\\\text{given} = ${ansVal}^\\\\circ\\\\)`;
  } else if (solText.includes("alternate")) {
    strategy = "Alternate interior angles between parallel lines are equal.";
    what = "We equate the unknown angle to the corresponding alternate interior angle.";
    mistake = "Ensure the lines are actually marked parallel before assuming alternate angles are equal.";
    calc = `\\\\(\\theta = ${ansVal}^\\\\circ\\\\)`;
  } else if (solText.includes("triangle")) {
    strategy = "The interior angles of any triangle always add up to $180^\\\\circ$.";
    what = "We subtract the known angles of the triangle from $180^\\\\circ$ to find the missing angle.";
    mistake = "Do not confuse the triangle angle sum ($180^\\\\circ$) with angles around a point ($360^\\\\circ$).";
    calc = `\\\\(180^\\\\circ - \\\\text{sum of others} = ${ansVal}^\\\\circ\\\\)`;
  } else if (solText.includes("isosceles")) {
    strategy = "An isosceles triangle has two equal sides and two equal base angles.";
    what = "We use the property that base angles are equal, and all three add to $180^\\\\circ$.";
    mistake = "Make sure you correctly identify which two angles are the equal base angles.";
    calc = `\\\\(180^\\\\circ - \\\\text{vertex} = 2 \\\\times \\\\text{base} \\\\implies \\\\text{base} = ${ansVal}^\\\\circ\\\\)`;
  }

  return [
    {
      explanation: "Given the geometric setup, we first need to identify the relevant angle property. " + strategy,
      workingOut: "\\\\(\\\\text{Goal: Find the unknown angle.}\\\\)",
      graphData: null
    },
    {
      explanation: "Next, we set up the equation based on this geometric property. " + what + " " + mistake + " This setup allows us to solve for the unknown.",
      workingOut: "\\\\(\\\\text{Setup the equation}\\\\)",
      graphData: null
    },
    {
      explanation: "Now we solve the equation by performing the subtraction or division required.",
      workingOut: calc,
      graphData: null
    },
    {
      explanation: "The final step is to state the answer clearly. The calculated angle satisfies the geometric conditions.",
      workingOut: `\\\\(\\\\text{Final answer: } ${ansVal}\\\\)`,
      graphData: null
    }
  ];
}

async function run() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y9-7a').get();
  
  let count = 0;
  const batch = db.batch();
  
  snapshot.forEach(doc => {
    const id = doc.id;
    const match = id.match(/^y9-7a-q(\d+)/);
    if (!match || parseInt(match[1]) > 10) return;
    
    const data = doc.data();
    
    // Convert geometry to SVG
    let question = data.question || "";
    let graphData = data.graphData;
    if (graphData && graphData.geometry) {
      const svg = geometryToSvg(graphData.geometry);
      question = `${svg}\n\n${question}`;
      graphData = null; // Clear proprietary format
    }
    
    // Find answer
    let ansVal = data.answer;
    if (data.type === 'multiple_choice' && data.options && data.options.length > 0) {
      const aIdx = parseInt(data.answer);
      if (!isNaN(aIdx) && data.options[aIdx]) {
        ansVal = data.options[aIdx].text.replace(/\\\\/g, '\\').replace(/\\/g, '\\\\').replace(/\\$/g, '');
        // Clean up LaTeX formatting issues
        if (!ansVal.includes('\\\\(')) ansVal = `\\\\(${ansVal}\\\\)`;
      }
    }
    
    // Clean raw string to extract just the number safely
    let rawAns = ansVal.replace(/[\\()a-zA-Z]/g, '').replace('circ', '').trim();
    let numAns = parseFloat(rawAns);
    
    let options = [];
    if (!isNaN(numAns)) {
      options = [
        { text: `\\\\(${numAns}^\\\\circ\\\\)` },
        { text: `\\\\(${numAns + 10}^\\\\circ\\\\)` },
        { text: `\\\\(${180 - numAns}^\\\\circ\\\\)` },
        { text: `\\\\(${90 - numAns}^\\\\circ\\\\)` }
      ];
      // Ensure unique options
      const seen = new Set();
      options = options.filter(o => {
        if (seen.has(o.text)) return false;
        seen.add(o.text);
        return true;
      });
      while (options.length < 4) {
        let v = numAns + Math.floor(Math.random() * 20) + 1;
        let t = `\\\\(${v}^\\\\circ\\\\)`;
        if (!seen.has(t)) {
          options.push({ text: t });
          seen.add(t);
        }
      }
      ansVal = `\\\\(${numAns}^\\\\circ\\\\)`;
    } else {
      // It's a text classification like "obtuse"
      const ansLower = ansVal.toLowerCase();
      if (ansLower.includes('obtuse')) {
        options = [{text: '\\\\(\\\\text{obtuse}\\\\)'}, {text: '\\\\(\\\\text{acute}\\\\)'}, {text: '\\\\(\\\\text{right}\\\\)'}, {text: '\\\\(\\\\text{reflex}\\\\)'}];
        ansVal = '\\\\(\\\\text{obtuse}\\\\)';
      } else if (ansLower.includes('acute')) {
        options = [{text: '\\\\(\\\\text{acute}\\\\)'}, {text: '\\\\(\\\\text{obtuse}\\\\)'}, {text: '\\\\(\\\\text{right}\\\\)'}, {text: '\\\\(\\\\text{straight}\\\\)'}];
        ansVal = '\\\\(\\\\text{acute}\\\\)';
      } else if (ansLower.includes('reflex')) {
        options = [{text: '\\\\(\\\\text{reflex}\\\\)'}, {text: '\\\\(\\\\text{obtuse}\\\\)'}, {text: '\\\\(\\\\text{straight}\\\\)'}, {text: '\\\\(\\\\text{acute}\\\\)'}];
        ansVal = '\\\\(\\\\text{reflex}\\\\)';
      } else if (ansLower.includes('right')) {
        options = [{text: '\\\\(\\\\text{right}\\\\)'}, {text: '\\\\(\\\\text{straight}\\\\)'}, {text: '\\\\(\\\\text{acute}\\\\)'}, {text: '\\\\(\\\\text{reflex}\\\\)'}];
        ansVal = '\\\\(\\\\text{right}\\\\)';
      } else if (ansLower.includes('straight')) {
        options = [{text: '\\\\(\\\\text{straight}\\\\)'}, {text: '\\\\(\\\\text{right}\\\\)'}, {text: '\\\\(\\\\text{obtuse}\\\\)'}, {text: '\\\\(\\\\text{reflex}\\\\)'}];
        ansVal = '\\\\(\\\\text{straight}\\\\)';
      } else {
        // Fallback for Q4a (parallel lines)
        options = [
          {text: '\\\\(\\\\text{See worked solution}\\\\)'},
          {text: '\\\\(\\\\text{AB } \\\\parallel \\\\text{ CD}\\\\)'},
          {text: '\\\\(\\\\text{None}\\\\)'},
          {text: '\\\\(\\\\text{PQ } \\\\parallel \\\\text{ RS}\\\\)'}
        ];
        ansVal = '\\\\(\\\\text{See worked solution}\\\\)';
      }
    }
    
    // Find index of answer
    let ansIdx = options.findIndex(o => o.text === ansVal);
    if (ansIdx === -1) {
      options[0] = { text: ansVal };
      ansIdx = 0;
    }
    
    // Sort options to satisfy natural ordering rule
    options.sort((a,b) => a.text.localeCompare(b.text));
    ansIdx = options.findIndex(o => o.text === ansVal);
    
    const steps = generateSteps(data, rawAns);
    
    batch.update(doc.ref, {
      type: 'multiple_choice',
      question: question,
      graphData: graphData,
      options: options,
      answer: ansIdx.toString(),
      solutionSteps: steps,
      isNew: true
    });
    count++;
  });
  
  console.log(`Prepared ${count} questions for update.`);
  if (count > 0) {
    await batch.commit();
    console.log('Batch commit successful!');
  }
}

run().catch(console.error);
