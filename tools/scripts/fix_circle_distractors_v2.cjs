const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const y9Path = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch11HQuestions.js';
const y10Path = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11AQuestions.js';

let y9Content = fs.readFileSync(y9Path, 'utf8');
const y9Match = y9Content.match(/export const Y9_CH11H_QUESTIONS = (\[[\s\S]*\]);$/m);
let y9Questions = eval(y9Match[1]);

let y10Content = fs.readFileSync(y10Path, 'utf8');
const y10Match = y10Content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);$/m);
let y10Questions = eval(y10Match[1]);

let allModified = [];

function evalValue(str) {
  if (!str) return 0;
  let valStr = str.replace(/[()]/g, '').replace(/\\\\/g, '\\').trim();
  if (valStr.includes('\\sqrt')) {
    const m = valStr.match(/([-\d]*)\\sqrt\{?(\d+)\}?/);
    if (m) {
      let coeff = 1;
      if (m[1] === '-') coeff = -1;
      else if (m[1] !== '') coeff = parseFloat(m[1]);
      return coeff * Math.sqrt(parseFloat(m[2]));
    }
  }
  return parseFloat(valStr);
}

function parseFraction(str) {
  if (str.includes('\\frac')) {
    const m = str.match(/\\frac\{(\d+)\}\{(\d+)\}/);
    if (m) return parseInt(m[1]) / parseInt(m[2]);
  }
  if (str.includes('/')) {
    const parts = str.split('/');
    return parseInt(parts[0]) / parseInt(parts[1]);
  }
  return parseFloat(str);
}

// Generate distractors based on student misconceptions
function generateY9Distractors(q) {
  let opts = [];
  const text = q.question.replace(/\\/g, '');
  
  // y9-q5: Centre origin and radius r
  let rMatch = q.question.match(/radius \\\((.*?)\\\)/);
  if (q.id.startsWith('y9-11h-q5') && rMatch) {
    let rStr = rMatch[1];
    let r = evalValue(rStr);
    let r2 = r * r;
    let r2Str = Number.isInteger(r2) ? r2.toString() : r2.toFixed(1);
    
    // Correct: x^2 + y^2 = r^2
    opts.push(`\\\\(x^2 + y^2 = ${r2Str}\\\\)`);
    
    // Mistake 1: Forgot to square radius
    opts.push(`\\\\(x^2 + y^2 = ${rStr.replace(/\\/g, '\\\\')}\\\\)`);
    
    // Mistake 2: Doubled radius instead of squaring
    let doubleR = 2 * r;
    let doubleRStr = Number.isInteger(doubleR) ? doubleR.toString() : doubleR.toFixed(1);
    opts.push(`\\\\(x^2 + y^2 = ${doubleRStr}\\\\)`);
    
    // Mistake 3: Square root of radius? Or r^3?
    let fakeR2 = Number.isInteger(r2) ? r2 * 2 : r2 * 3;
    opts.push(`\\\\(x^2 + y^2 = ${fakeR2}\\\\)`);
  }
  
  // y9-q6: Centre origin passing through point (x,y)
  let ptMatch = q.question.match(/point \\\((.*?)\\\)/);
  if (q.id.startsWith('y9-11h-q6') && ptMatch) {
    let ptStr = ptMatch[1];
    let parts = ptStr.split(',');
    let px = evalValue(parts[0]);
    let py = evalValue(parts[1]);
    let r2 = px*px + py*py;
    
    // Correct
    opts.push(`\\\\(x^2 + y^2 = ${r2}\\\\)`);
    
    // Mistake 1: Forgot to square coordinates (r^2 = x + y)
    let sum = Math.abs(px) + Math.abs(py);
    opts.push(`\\\\(x^2 + y^2 = ${sum}\\\\)`);
    
    // Mistake 2: Subtracted squares (r^2 = |x^2 - y^2|)
    let diff = Math.abs(px*px - py*py);
    opts.push(`\\\\(x^2 + y^2 = ${diff}\\\\)`);
    
    // Mistake 3: Forgot to square the radius (wrote r instead of r^2)
    let rStr = Number.isInteger(Math.sqrt(r2)) ? Math.sqrt(r2).toString() : `\\\\sqrt{${r2}}`;
    opts.push(`\\\\(x^2 + y^2 = ${rStr}\\\\)`);
  }
  
  // y9-q7: Centre origin and diameter d
  let dMatch = q.question.match(/diameter \\\((.*?)\\\)/);
  if (q.id.startsWith('y9-11h-q7') && dMatch) {
    let dStr = dMatch[1];
    let d = parseFraction(dStr.replace(/\\\\/g, ''));
    let r = d / 2;
    let r2 = r * r;
    
    // Format helper for fractions
    function format(val) {
      if (Number.isInteger(val)) return val.toString();
      // If it's a fraction like 25/144
      for(let i=1; i<=144; i++) {
        if (Number.isInteger(val * i)) return `${val * i}/${i}`;
      }
      return val.toString();
    }
    
    // Correct
    opts.push(`\\\\(x^2 + y^2 = ${format(r2)}\\\\)`);
    
    // Mistake 1: Used diameter instead of radius (d^2)
    opts.push(`\\\\(x^2 + y^2 = ${format(d*d)}\\\\)`);
    
    // Mistake 2: Used diameter but didn't square (d)
    opts.push(`\\\\(x^2 + y^2 = ${format(d)}\\\\)`);
    
    // Mistake 3: Found radius but didn't square (r)
    opts.push(`\\\\(x^2 + y^2 = ${format(r)}\\\\)`);
  }
  
  return Array.from(new Set(opts)); // Ensure uniqueness
}

function generateY10Distractors(q) {
  let opts = [];
  
  let cMatch = q.question.match(/centre \\\((.*?)\\\)/);
  let rMatch = q.question.match(/radius (\d+)/);
  
  let h = 0, k = 0, r = 0, r2 = 0;
  
  if (cMatch) {
    let parts = cMatch[1].split(',');
    h = evalValue(parts[0]);
    k = evalValue(parts[1]);
  }
  
  if (rMatch) {
    r = parseFloat(rMatch[1]);
    r2 = r * r;
  } else if (q.id === 'y10-11a-q9') {
    // passing through origin
    r2 = h*h + k*k;
    r = Math.sqrt(r2);
  } else if (q.id.startsWith('y10-11a-q10a')) {
    // touches y-axis -> r = |h|
    r = Math.abs(h);
    r2 = r * r;
  } else if (q.id.startsWith('y10-11a-q10b')) {
    // touches x-axis -> r = |k|
    r = Math.abs(k);
    r2 = r * r;
  }
  
  function signH(val) { return val < 0 ? `+ ${Math.abs(val)}` : `- ${val}`; }
  function signK(val) { return val < 0 ? `+ ${Math.abs(val)}` : `- ${val}`; }
  function wrongSignH(val) { return val < 0 ? `- ${Math.abs(val)}` : `+ ${val}`; }
  function wrongSignK(val) { return val < 0 ? `- ${Math.abs(val)}` : `+ ${val}`; }
  
  let xPart = h === 0 ? 'x^2' : `(x ${signH(h)})^2`;
  let yPart = k === 0 ? 'y^2' : `(y ${signK(k)})^2`;
  
  let wXPart = h === 0 ? 'x^2' : `(x ${wrongSignH(h)})^2`;
  let wYPart = k === 0 ? 'y^2' : `(y ${wrongSignK(k)})^2`;
  
  // Correct
  opts.push(`\\\\(${xPart} + ${yPart} = ${r2}\\\\)`);
  
  // Mistake 1: Forgot to change signs (used centre coordinates directly)
  opts.push(`\\\\(${wXPart} + ${wYPart} = ${r2}\\\\)`);
  
  // Mistake 2: Forgot to square radius
  let rStr = Number.isInteger(r) ? r.toString() : `\\\\sqrt{${r2}}`;
  opts.push(`\\\\(${xPart} + ${yPart} = ${rStr}\\\\)`);
  
  // Mistake 3: Doubled radius instead of squaring, OR used wrong axis for q10
  if (q.id.startsWith('y10-11a-q10a')) {
    opts.push(`\\\\(${xPart} + ${yPart} = ${k*k}\\\\)`); // used k instead of h
  } else if (q.id.startsWith('y10-11a-q10b')) {
    opts.push(`\\\\(${xPart} + ${yPart} = ${h*h}\\\\)`); // used h instead of k
  } else {
    opts.push(`\\\\(${xPart} + ${yPart} = ${2*r}\\\\)`); // doubled
  }
  
  return Array.from(new Set(opts));
}

function processQuestions(questions, collection, generator) {
  questions.forEach(q => {
    let isTarget = false;
    if (collection === 'y9' && (q.id.startsWith('y9-11h-q5') || q.id.startsWith('y9-11h-q6') || q.id.startsWith('y9-11h-q7'))) isTarget = true;
    if (collection === 'y10' && (q.id.match(/^y10-11a-q[789]/) || q.id.startsWith('y10-11a-q10'))) isTarget = true;
    
    if (isTarget && q.type === 'multiple_choice') {
      let opts = generator(q);
      
      // If we didn't get 4 unique options (e.g. 2R == R^2 for R=2), pad it
      let padding = 1;
      while (opts.length < 4) {
        opts.push(`\\\\(x^2 + y^2 = ${padding * 100}\\\\)`);
        opts = Array.from(new Set(opts));
        padding++;
      }
      
      // Correct answer is always at index 0 initially.
      let correct = opts[0];
      
      // We will place correct answer at a random-ish index based on id length to avoid all being 'A'
      let aIdx = q.id.length % 4;
      
      let newOpts = [];
      let iter = 1;
      for (let i = 0; i < 4; i++) {
        if (i === aIdx) {
          newOpts.push(correct);
        } else {
          newOpts.push(opts[iter++]);
        }
      }
      
      q.opts = newOpts;
      q.a = aIdx;
      q.answer = aIdx.toString();
      
      allModified.push({ q, collection });
    }
  });
}

processQuestions(y9Questions, 'y9', generateY9Distractors);
processQuestions(y10Questions, 'y10', generateY10Distractors);

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const item of allModified) {
    const q = item.q;
    const docRef = db.collection('questions').doc(q.id);
    const doc = await docRef.get();
    
    if (doc.exists) {
      const data = doc.data();
      
      let updatePayload = {
        opts: q.opts,
        a: q.a,
        answer: q.answer
      };
      
      if (data.options) {
        updatePayload.options = q.opts.map(opt => ({ text: opt, imageUrl: '' }));
      }
      
      await docRef.update(updatePayload);
      console.log('Fixed pedagogic distractors for', q.id);
    }
  }

  const y9ArrayStr = JSON.stringify(y9Questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(y9Path, y9Content.substring(0, y9Match.index) + 'export const Y9_CH11H_QUESTIONS = ' + y9ArrayStr + ';\n', 'utf8');

  const y10ArrayStr = JSON.stringify(y10Questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(y10Path, y10Content.substring(0, y10Match.index) + 'export const Y10_CH11A_QUESTIONS = ' + y10ArrayStr + ';\n', 'utf8');

  console.log('Updated local seed files.');
  process.exit(0);
}

run();
