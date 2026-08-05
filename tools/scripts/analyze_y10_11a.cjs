const fs = require('fs');

const content = fs.readFileSync('/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11AQuestions.js', 'utf8');

// The file exports Y10_CH11A_QUESTIONS
// Let's load it dynamically. We need to strip the "export const Y10_CH11A_QUESTIONS = " part.
const match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);$/m);

if (!match) {
  console.error("Could not parse file.");
  process.exit(1);
}

// Dangerously evaluate the array because it's a JS object with unquoted keys sometimes, 
// though it looks like it might be proper JSON. Let's try eval.
let questions = [];
try {
  questions = eval(match[1]);
} catch (e) {
  console.error("Eval failed", e);
  process.exit(1);
}

const report = questions.map(q => {
  const needsFix = q.solutionSteps && q.solutionSteps.some(step => step.explanation && step.explanation.includes("Given: read the full stem"));
  const badOpts = q.opts && q.opts.some(o => typeof o === 'string' && o.includes("opposite statement"));
  return { id: q.id, needsFix, badOpts, type: q.type, qText: q.question };
});

console.log(`Total questions: ${questions.length}`);
console.log(`Questions needing steps fix: ${report.filter(r => r.needsFix).length}`);
console.log(`Questions needing opts fix: ${report.filter(r => r.badOpts).length}`);

const broken = report.filter(r => r.needsFix || r.badOpts);
broken.forEach(b => {
  console.log(`- ${b.id}: steps=${b.needsFix}, opts=${b.badOpts}`);
});
