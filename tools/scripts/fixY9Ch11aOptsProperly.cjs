const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11Questions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');

const matchOrig = contentOrig.match(/export const Y9_CH11_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

let updatedCount = 0;

function generateOpts(correctStr) {
  // Strip latex wrappers \( \)
  let inner = correctStr.replace(/^\\\(/, '').replace(/\\\)$/, '').trim();
  
  let candidates = new Set();
  candidates.add(inner);
  
  // Case 1: Simple Integer (e.g. "12")
  if (/^\d+$/.test(inner)) {
    const num = parseInt(inner);
    let offset = 1;
    let step = num > 10 ? 2 : 1;
    while(candidates.size < 4) {
      if (num - offset * step > 0) candidates.add((num - offset * step).toString());
      if (candidates.size < 4) candidates.add((num + offset * step).toString());
      offset++;
    }
  } 
  // Case 2: a\sqrt{b} (e.g. "3\sqrt{5}")
  else if (/^(\d+)\\sqrt\{(\d+)\}$/.test(inner)) {
    const m = inner.match(/^(\d+)\\sqrt\{(\d+)\}$/);
    const a = parseInt(m[1]);
    const b = parseInt(m[2]);
    
    // Add variations like (a-1)\sqrt{b}, (a+1)\sqrt{b}, a\sqrt{b-1}, a\sqrt{b+1}
    const variations = [
      `${a+1}\\sqrt{${b}}`,
      `${a+2}\\sqrt{${b}}`,
      a-1 > 0 ? (a-1 === 1 ? `\\sqrt{${b}}` : `${a-1}\\sqrt{${b}}`) : null,
      `${a}\\sqrt{${b+1}}`,
      `${a}\\sqrt{${b+2}}`,
      b-1 > 0 ? `${a}\\sqrt{${b-1}}` : null
    ].filter(x => x !== null);
    
    for (let v of variations) {
      if (candidates.size < 4) candidates.add(v);
    }
  }
  // Case 3: \sqrt{b} (e.g. "\sqrt{65}")
  else if (/^\\sqrt\{(\d+)\}$/.test(inner)) {
    const m = inner.match(/^\\sqrt\{(\d+)\}$/);
    const b = parseInt(m[1]);
    
    const variations = [
      `\\sqrt{${b+1}}`,
      `\\sqrt{${b+2}}`,
      `\\sqrt{${b+3}}`,
      b-1 > 0 ? `\\sqrt{${b-1}}` : null,
      b-2 > 0 ? `\\sqrt{${b-2}}` : null
    ].filter(x => x !== null);
    
    for (let v of variations) {
      if (candidates.size < 4) candidates.add(v);
    }
  }
  // Case 4: Fraction (e.g. "\frac{13}{6}" or "\dfrac{13}{6}")
  else if (/^\\d?frac\{(\d+)\}\{(\d+)\}$/.test(inner)) {
    const m = inner.match(/^\\(d?frac)\{(\d+)\}\{(\d+)\}$/);
    const cmd = m[1];
    const n = parseInt(m[2]);
    const d = parseInt(m[3]);
    
    const variations = [
      `\\${cmd}{${n+1}}{${d}}`,
      `\\${cmd}{${n+2}}{${d}}`,
      n-1 > 0 ? `\\${cmd}{${n-1}}{${d}}` : null,
      n-2 > 0 ? `\\${cmd}{${n-2}}{${d}}` : null
    ].filter(x => x !== null);
    
    for (let v of variations) {
      if (candidates.size < 4) candidates.add(v);
    }
  }
  
  if (candidates.size < 4) {
    return null; // fallback
  }
  
  // Convert back to Array, shuffle, and find new correct index
  let optArray = Array.from(candidates);
  optArray.sort((a,b) => Math.random() - 0.5); // Random shuffle
  
  const newAnsIndex = optArray.indexOf(inner);
  return {
    opts: optArray.map(o => `\\(${o}\\)`),
    a: newAnsIndex
  };
}

for (let i = 0; i < qOrig.length; i++) {
  const q = qOrig[i];
  if (q.topicId !== 'y9-11a' || q.type !== 'multiple_choice') continue;

  const ansIndex = q.a;
  const correctAnswerStr = q.opts[ansIndex];
  
  // Check if original opts contain a negative distractor or mismatching distractors
  const hasNegative = q.opts.some(o => o.includes('-') && !o.includes('sqrt{-'));
  
  if (hasNegative || q.opts.some(o => o.includes('+ 1'))) {
    const generated = generateOpts(correctAnswerStr);
    if (generated) {
      q.opts = generated.opts;
      q.a = generated.a;
      updatedCount++;
    }
  }
}

fs.writeFileSync(pathOrig, `export const Y9_CH11_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const batch = db.batch();
  for (const q of qOrig) {
    if (q.topicId === 'y9-11a' && q.type === 'multiple_choice') {
      batch.update(db.collection('questions').doc(q.id), {
        opts: q.opts,
        a: q.a,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  }

  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });
  
  await batch.commit();

  console.log(`Successfully fixed negative/obvious distractors for ${updatedCount} Year 9 Ch11A questions using structural generation!`);
  process.exit(0);
}
run();
