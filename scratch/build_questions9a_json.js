import fs from 'fs';

console.log('=== COMPILING SCRATCH/QUESTIONS9A.JSON (15 QUESTIONS) ===');

const filePath = 'src/scripts/importYear11AdvCh9.js';
if (!fs.existsSync(filePath)) {
  console.error(`Error: ${filePath} not found!`);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');
const parts = content.split('export const questions9A = [');
if (parts.length < 2) {
  console.error('Error: Could not find questions9A definition.');
  process.exit(1);
}

const arrayContent = parts[1].split('];\n\nexport const importYear11AdvCh9 =')[0];

let questions;
try {
  const evalStr = `[${arrayContent}]`;
  questions = eval(evalStr);
} catch (err) {
  console.error('Error evaluating questions:', err.message);
  process.exit(1);
}

fs.writeFileSync('scratch/questions9A.json', JSON.stringify(questions, null, 2), 'utf8');
console.log(`🎉 SUCCESS: scratch/questions9A.json successfully updated with ${questions.length} questions!`);
process.exit(0);
