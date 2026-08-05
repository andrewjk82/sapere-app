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

function parseCircleEq(str) {
  // Looks for x^2 + y^2 = R2 or (x-h)^2 + (y-k)^2 = R2
  let r2Match = str.match(/=\s*([0-9\.\/]+)/);
  let isOrigin = !str.includes('(');
  return {
    isOrigin,
    r2Str: r2Match ? r2Match[1] : '1',
    cleanEq: str.replace(/\\/g, '').replace(/[()]/g, '')
  };
}

function generateDistractors(correctEq) {
  let eq = correctEq.replace(/\\\(/g, '').replace(/\\\)/g, '').trim();
  
  // y9-11h origin circle: x^2 + y^2 = R2
  let originMatch = eq.match(/^x\^2 \+ y\^2 = (.+)$/);
  if (originMatch) {
    let r2 = originMatch[1];
    // distractors:
    let d1 = `x^2 - y^2 = ${r2}`; // minus instead of plus
    let d2 = `-x^2 + y^2 = ${r2}`;
    let d3 = `x^2 + y^2 = ${r2}0`; // fake r2
    
    // Try to be smarter with r2
    if (!r2.includes('/')) {
      let r2Num = parseInt(r2, 10);
      let r = Math.round(Math.sqrt(r2Num));
      if (r * r === r2Num) {
        d3 = `x^2 + y^2 = ${r}`; // forgot to square
      } else {
        d3 = `x^2 + y^2 = ${r2Num * 2}`;
      }
    }
    return [
      `\\\\(${eq}\\\\)`,
      `\\\\(${d1}\\\\)`,
      `\\\\(${d2}\\\\)`,
      `\\\\(${d3}\\\\)`
    ];
  }
  
  // y10-11a shifted circle: (x-h)^2 + (y-k)^2 = R2
  // We can just regex the signs
  let shiftedMatch = eq.match(/^\(x([+-][0-9]+)\)\^2 \+ \(y([+-][0-9]+)\)\^2 = (.+)$/);
  if (shiftedMatch) {
    let hSign = shiftedMatch[1];
    let kSign = shiftedMatch[2];
    let r2 = shiftedMatch[3];
    
    let oppH = hSign.startsWith('-') ? hSign.replace('-', '+') : hSign.replace('+', '-');
    let oppK = kSign.startsWith('-') ? kSign.replace('-', '+') : kSign.replace('+', '-');
    
    let d1 = `(x${oppH})^2 + (y${oppK})^2 = ${r2}`; // opposite signs
    let d2 = `(x${hSign})^2 + (y${kSign})^2 = ${r2}0`; // fake r2
    let d3 = `(x${oppH})^2 + (y${kSign})^2 = ${r2}`; // one sign opp
    
    if (!r2.includes('/')) {
      let r2Num = parseInt(r2, 10);
      let r = Math.round(Math.sqrt(r2Num));
      if (r * r === r2Num) {
        d2 = `(x${hSign})^2 + (y${kSign})^2 = ${r}`; // forgot to square
      } else {
        d2 = `(x${hSign})^2 + (y${kSign})^2 = ${r2Num * 2}`;
      }
    }
    
    return [
      `\\\\(${eq}\\\\)`,
      `\\\\(${d1}\\\\)`,
      `\\\\(${d2}\\\\)`,
      `\\\\(${d3}\\\\)`
    ];
  }
  
  // Fallback
  return [
    `\\\\(${eq}\\\\)`,
    `\\\\(${eq} + 1\\\\)`,
    `\\\\(${eq.replace('y', '2y')}\\\\)`,
    `\\\\(${eq.replace('x', '2x')}\\\\)`
  ];
}

// Process Year 9
y9Questions.forEach(q => {
  if (q.id.startsWith('y9-11h-q5') || q.id.startsWith('y9-11h-q6') || q.id.startsWith('y9-11h-q7')) {
    if (q.type === 'multiple_choice') {
      // Find the correct answer string from old opts or solution
      let correctEq = "";
      // The answer is usually in the solution or working out of the last step
      if (q.solutionSteps && q.solutionSteps.length > 0) {
        correctEq = q.solutionSteps[q.solutionSteps.length - 1].workingOut;
      }
      
      if (!correctEq.includes('=')) {
        // Fallback to checking opts if possible
        if (q.opts && q.opts[parseInt(q.answer)]) correctEq = q.opts[parseInt(q.answer)];
      }
      
      let distractors = generateDistractors(correctEq);
      // shuffle distractors to randomize answer position
      let correctAns = distractors[0];
      // simple manual shuffle
      let newOpts = [distractors[1], distractors[0], distractors[2], distractors[3]];
      let aIdx = 1; 
      
      q.opts = newOpts;
      q.a = aIdx;
      q.answer = aIdx.toString();
      
      allModified.push({ q, collection: 'y9' });
    }
  }
});

// Process Year 10
y10Questions.forEach(q => {
  if (q.id.match(/^y10-11a-q[789]/) || q.id.startsWith('y10-11a-q10')) {
    if (q.type === 'multiple_choice') {
      let correctEq = "";
      if (q.solutionSteps && q.solutionSteps.length > 0) {
        correctEq = q.solutionSteps[q.solutionSteps.length - 1].workingOut;
      }
      
      let distractors = generateDistractors(correctEq);
      let newOpts = [distractors[3], distractors[1], distractors[0], distractors[2]];
      let aIdx = 2;
      
      q.opts = newOpts;
      q.a = aIdx;
      q.answer = aIdx.toString();
      
      allModified.push({ q, collection: 'y10' });
    }
  }
});

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
      
      // Update opts / options based on schema
      let updatePayload = {
        opts: q.opts,
        a: q.a,
        answer: q.answer
      };
      
      // If the db had 'options' array of objects, we need to update that instead/also
      if (data.options) {
        updatePayload.options = q.opts.map(opt => ({ text: opt, imageUrl: '' }));
      }
      
      await docRef.update(updatePayload);
      console.log('Fixed distractors for', q.id);
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
