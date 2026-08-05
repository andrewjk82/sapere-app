const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

const manualData = {
  "y10-13a-q2a": { ans: ["90", "75"], vars: ["\\alpha", "\\beta"] },
  "y10-13a-q2c": { ans: ["10"], vars: ["\\theta"] },
  "y10-13a-q2d": { ans: ["40", "20", "70", "140"], vars: ["\\alpha", "\\beta", "\\gamma", "\\theta"] },
  "y10-13a-q2e": { ans: ["90", "35"], vars: ["\\alpha", "\\beta"] },
  "y10-13a-q2f": { ans: ["80"], vars: ["\\theta"] },
  "y10-13a-q3a": { ans: ["27.5"], vars: ["\\alpha"] },
  "y10-13a-q3b": { ans: ["44"], vars: ["\\gamma"] },
  "y10-13a-q3c": { ans: ["190"], vars: ["\\alpha"] },
  "y10-13a-q3d": { ans: ["100"], vars: ["\\gamma"] },
  "y10-13a-q3e": { ans: ["129"], vars: ["\\theta"] },
  "y10-13a-q3f": { ans: ["40"], vars: ["\\alpha"] },
  "y10-13a-q3g": { ans: ["30"], vars: ["\\beta"] },
  "y10-13a-q3h": { ans: ["100"], vars: ["\\gamma"] },
  "y10-13a-q3i": { ans: ["24"], vars: ["\\theta"] },
  "y10-13a-q4a": { ans: ["120", "60"], vars: ["\\alpha", "\\beta"] },
  "y10-13a-q4b": { ans: ["30"], vars: ["\\theta"] },
  "y10-13a-q4c": { ans: ["140"], vars: ["\\theta"] },
  "y10-13a-q4d": { ans: ["40", "40"], vars: ["\\alpha", "\\beta"] },
  "y10-13a-q4e": { ans: ["20", "40"], vars: ["\\alpha", "\\theta"] },
  "y10-13a-q4f": { ans: ["100", "20", "50"], vars: ["\\alpha", "\\beta", "\\gamma"] },
  "y10-13a-q4g": { ans: ["100", "200", "80"], vars: ["\\alpha", "\\beta", "\\gamma"] },
  "y10-13a-q4h": { ans: ["60", "60", "120"], vars: ["\\alpha", "\\beta", "\\gamma"] },
  "y10-13a-q4i": { ans: ["45", "45"], vars: ["\\alpha", "\\beta"] },
  "y10-13a-q5a": { ans: ["100", "20"], vars: ["\\alpha", "\\beta"] },
  "y10-13a-q5b": { ans: ["60", "30"], vars: ["\\alpha", "\\beta"] },
  "y10-13a-q5c": { ans: ["40", "110", "140"], vars: ["\\alpha", "\\beta", "\\gamma"] },
  "y10-13a-q5d": { ans: ["120", "60", "70"], vars: ["\\alpha", "\\beta", "\\gamma"] },
  "y10-13a-q5e": { ans: ["140", "80", "20"], vars: ["\\alpha", "\\beta", "\\gamma"] },
  "y10-13a-q5f": { ans: ["40", "40", "10"], vars: ["\\alpha", "\\beta", "\\gamma"] }
};

// Explicitly add q2b which was fixed separately
manualData["y10-13a-q2b"] = { ans: ["25"], vars: ["\\theta"] };

function formatOpt(valsArray, varsArray) {
  return "\\\\(" + varsArray.map((v, i) => `${v} = ${valsArray[i]}^\\\\circ`).join(', ') + "\\\\)";
}

function generateDistractors(ansArray, varsArray) {
  let opts = [];
  let correctStr = ansArray.join(', ');
  
  let d1 = ansArray.slice();
  d1.reverse();
  let d2 = ansArray.map(v => (parseFloat(v) * 2).toString());
  let d3 = ansArray.map(v => (parseFloat(v) / 2).toString());
  let d4 = ansArray.map(v => {
    let num = parseFloat(v);
    return num > 90 ? (180 - num).toString() : (90 - num).toString();
  });

  let set = new Set();
  set.add(correctStr);
  
  if (!set.has(d1.join(', '))) set.add(d1.join(', '));
  if (set.size < 4 && !set.has(d2.join(', '))) set.add(d2.join(', '));
  if (set.size < 4 && !set.has(d3.join(', '))) set.add(d3.join(', '));
  if (set.size < 4 && !set.has(d4.join(', '))) set.add(d4.join(', '));
  
  let counter = 1;
  while(set.size < 4) {
    let fallback = ansArray.map(v => (parseFloat(v) + 10*counter).toString()).join(', ');
    if (!set.has(fallback)) set.add(fallback);
    counter++;
  }
  
  return Array.from(set).map(str => formatOpt(str.split(', '), varsArray));
}

async function run() {
  let updatedCount = 0;
  for (let q of questions) {
    if (manualData[q.id]) {
      let data = manualData[q.id];
      
      q.opts = generateDistractors(data.ans, data.vars);
      let correctOpt = formatOpt(data.ans, data.vars);
      
      let optsArray = q.opts.filter(o => o !== correctOpt);
      optsArray.splice(2, 0, correctOpt); 
      q.opts = optsArray;
      q.answer = '2 2';
      
      q.options = q.opts.map(opt => ({ text: opt, imageUrl: '' }));
      
      updatedCount++;
    }
  }
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of questions) {
    if (manualData[q.id]) {
      const docRef = db.collection('questions').doc(q.id);
      await docRef.update({
        opts: q.opts,
        options: q.options,
        answer: q.answer
      });
      console.log('Updated labels in DB for', q.id);
    }
  }
  
  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH13A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file labels. Total updated:', updatedCount);
  process.exit(0);
}

run();
