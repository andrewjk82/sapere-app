const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const math = require('mathjs');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch11HQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y9_CH11H_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let changed = 0;
let updatedQs = [];

for (let q of questions) {
  if (q.question && q.question.includes("Test whether or not the point")) {
    let m = q.question.match(/coordinates \\\((.*?)\\\) lies on the circle \\\(x\^2 \+ y\^2 = (\d+)\\\)/);
    if (m) {
      let ptStr = m[1].trim(); // e.g., "(0, -5)" or "(5\\sqrt{2}, 5\\sqrt{2})"
      ptStr = ptStr.substring(1, ptStr.length - 1); // remove outer parens
      let parts = ptStr.split(',');
      let xStr = parts[0].trim().replace(/\\sqrt\{(\d+)\}/g, 'sqrt($1)').replace(/\\frac\{(.+?)\}\{(.+?)\}/g, '($1)/($2)');
      let yStr = parts[1].trim().replace(/\\sqrt\{(\d+)\}/g, 'sqrt($1)').replace(/\\frac\{(.+?)\}\{(.+?)\}/g, '($1)/($2)');
      
      // Add explicit multiplication where missing e.g. 5sqrt(2) -> 5*sqrt(2)
      xStr = xStr.replace(/(\d)(sqrt)/g, '$1*$2');
      yStr = yStr.replace(/(\d)(sqrt)/g, '$1*$2');

      let r2Str = m[2];
      
      try {
        let xVal = math.evaluate(xStr);
        let yVal = math.evaluate(yStr);
        let r2Val = parseInt(r2Str, 10);
        
        let lhs = xVal * xVal + yVal * yVal;
        
        // Due to floating point math, check if they are very close
        let isTrue = Math.abs(lhs - r2Val) < 1e-5;
        let expectedAnsIdx = isTrue ? 0 : 1; // 0="Yes", 1="No"
        
        if (q.a !== expectedAnsIdx) {
          console.log(`Mismatch in ${q.id}: point (${xStr}, ${yStr}), x^2+y^2=${lhs}, r^2=${r2Val}`);
          console.log(`  Current answer is ${q.a} (${q.opts[q.a]}), expected ${expectedAnsIdx}`);
          
          q.a = expectedAnsIdx;
          q.answer = expectedAnsIdx.toString();
          
          // Fix solutionSteps
          q.solutionSteps = [
            {
              explanation: "Substitute the x and y coordinates into the circle equation",
              workingOut: `x^2 + y^2 = (${m[1].split(',')[0].replace('(','').trim()})^2 + (${m[1].split(',')[1].replace(')','').trim()})^2`
            },
            {
              explanation: "Calculate the sum of squares",
              workingOut: `x^2 + y^2 = ${lhs.toFixed(4).replace(/\.0000$/, '')}`
            },
            {
              explanation: "Compare with the radius squared",
              workingOut: isTrue ? `${lhs.toFixed(4).replace(/\.0000$/, '')} = ${r2Val}, therefore the point lies on the circle.` : `${lhs.toFixed(4).replace(/\.0000$/, '')} \\neq ${r2Val}, therefore the point does not lie on the circle.`
            }
          ];
          
          updatedQs.push(q);
          changed++;
        }
      } catch (err) {
        console.error(`Error parsing ${q.id}: ${err.message}`);
      }
    }
  }
}

if (changed > 0) {
  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y9_CH11H_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

  async function updateDb() {
    const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
    initializeApp({ credential: cert(serviceAccount) });
    const db = getFirestore();
    
    for (let q of updatedQs) {
      await db.collection('questions').doc(q.id).update({
        a: q.a,
        answer: q.answer,
        solutionSteps: q.solutionSteps
      });
      console.log(`Updated ${q.id} in Firestore`);
    }
    console.log(`Successfully fixed ${changed} questions.`);
    process.exit(0);
  }
  updateDb();
} else {
  console.log("No issues found.");
  process.exit(0);
}
