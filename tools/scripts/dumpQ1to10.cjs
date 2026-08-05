const fs = require('fs');
const content = fs.readFileSync('./src/constants/seedYear11Ch6EQuestions.js', 'utf8');
const arrayMatch = content.match(/export const Y11_CH6E_QUESTIONS = (\[[\s\S]*?\]);\n/);
const questions = eval(arrayMatch[1]);
let out = '';
for (const q of questions) {
  const idMatch = q.id.match(/^y11a-6e-q([1-9]|10)([a-z_]+)?/);
  if (idMatch) {
    out += `${q.id}\nQ: ${q.question}\nS: ${q.solution}\n\n`;
  }
}
fs.writeFileSync('q1to10.txt', out, 'utf8');
console.log("Done");
