const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11Questions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');

const matchOrig = contentOrig.match(/export const Y9_CH11_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

let updatedCount = 0;

for (let i = 0; i < qOrig.length; i++) {
  const q = qOrig[i];
  if (q.topicId !== 'y9-11a' || q.type !== 'multiple_choice') continue;

  const ansIndex = q.a;
  const correctAnswerStr = q.opts[ansIndex];
  
  // Extract number if it's a simple number or latex number
  const numMatch = correctAnswerStr.match(/-?\d+(?:\.\d+)?/);
  if (!numMatch) continue;

  const correctNum = parseFloat(numMatch[0]);
  
  // If it's a distance/perimeter, it should be positive. Let's create realistic positive distractors
  if (correctNum > 0) {
    let newOpts = [];
    let hasNegative = q.opts.some(opt => opt.includes('-') && !opt.includes('sqrt'));
    
    // Check if there are any negative numbers or if it just needs better distractors
    if (hasNegative || q.opts.some(o => o.includes(`-${correctNum}`))) {
      // Generate new options: 4 distinct positive numbers
      // A mix of correctNum - 2, correctNum - 1, correctNum + 1, correctNum + 2
      // but ensure they are > 0
      
      const candidates = new Set();
      candidates.add(correctNum);
      
      let step = 1;
      if (correctNum > 10) step = 2; // bigger steps for larger numbers
      
      // Try to add numbers around the correct answer
      let offset = 1;
      while (candidates.size < 4) {
        if (correctNum - offset * step > 0) candidates.add(correctNum - offset * step);
        if (candidates.size < 4) candidates.add(correctNum + offset * step);
        offset++;
      }
      
      let sorted = Array.from(candidates).sort((a, b) => a - b);
      
      // Format back to latex if the original was latex
      const isLatex = correctAnswerStr.includes('\\(');
      
      q.opts = sorted.map(num => isLatex ? `\\(${num}\\)` : `${num}`);
      q.a = sorted.indexOf(correctNum);
      updatedCount++;
    }
  } else if (q.question.includes('distance') || q.question.includes('perimeter') || q.question.includes('How far')) {
    // If the answer itself is negative but it's a distance (which shouldn't happen, but just in case)
    console.log(`Warning: Negative answer for distance question: ${q.id}`);
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

  console.log(`Successfully fixed negative distractors for ${updatedCount} Year 9 Ch11A questions!`);
  process.exit(0);
}
run();
