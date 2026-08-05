const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let modifiedIds = [];

questions.forEach(q => {
  if (q.id.startsWith('y10-11a-q6')) {
    // Correct string is q.opts[0], e.g. "Centre: (-3, -4), Radius: 4"
    const correctStr = q.opts[0];
    const match = correctStr.match(/Centre:\s*\(([-\d]+),\s*([-\d]+)\),\s*Radius:\s*(\d+)/);
    
    if (match) {
      let h = parseInt(match[1], 10);
      let k = parseInt(match[2], 10);
      let r = parseInt(match[3], 10);
      
      let oppH = -h;
      let oppK = -k;
      let r2 = r * r;
      
      let opts = [];
      opts.push(correctStr); // Correct
      opts.push(`Centre: (${oppH}, ${oppK}), Radius: ${r}`); // Mistake 1: wrong signs
      opts.push(`Centre: (${h}, ${k}), Radius: ${r2}`); // Mistake 2: forgot to sqrt radius
      opts.push(`Centre: (${oppH}, ${oppK}), Radius: ${r2}`); // Mistake 3: both wrong
      
      // Shuffle them randomly but predictably
      let aIdx = q.id.charCodeAt(q.id.length - 1) % 4; // 'a' -> 97 % 4 = 1, 'b' -> 98 % 4 = 2, etc.
      
      let newOpts = [];
      let iter = 1;
      for (let i = 0; i < 4; i++) {
        if (i === aIdx) {
          newOpts.push(opts[0]);
        } else {
          newOpts.push(opts[iter++]);
        }
      }
      
      q.opts = newOpts;
      q.a = aIdx;
      q.answer = aIdx.toString();
      modifiedIds.push(q.id);
    }
  }
});

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const id of modifiedIds) {
    const q = questions.find(x => x.id === id);
    const docRef = db.collection('questions').doc(id);
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
      console.log('Fixed q6 distractors for', id);
    }
  }

  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH11A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
