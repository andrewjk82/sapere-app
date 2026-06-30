/**
 * Converts short_answer questions to multiple_choice for Ch2D and Ch2E seed files.
 */

import { readFileSync, writeFileSync } from 'fs';

function extractAnswer(solutionSteps) {
  if (!solutionSteps || solutionSteps.length === 0) return null;
  const last = solutionSteps[solutionSteps.length - 1].workingOut || '';
  return last.replace(/^=\s*/, '').trim();
}

function generateWrongs(correct) {
  const wrongs = [];
  const add = (v) => { if (v && v !== correct && !wrongs.includes(v)) wrongs.push(v); };

  // Flip sign between terms
  if (correct.includes('+')) add(correct.replace('+', '-'));
  else if (correct.match(/[^e]-/)) add(correct.replace(/-([^>])/, '+$1'));

  // Change leading integer coefficient
  add(correct.replace(/^(\d+)(\\sqrt|\s*\\frac|\D)/, (m, n, rest) => `${Number(n)+1}${rest}`));
  add(correct.replace(/^(\d+)(\\sqrt|\s*\\frac|\D)/, (m, n, rest) => Number(n) > 1 ? `${Number(n)-1}${rest}` : null));

  // Change radicand
  add(correct.replace(/\\sqrt\{(\d+)\}/, (m, n) => `\\sqrt{${Number(n)+1}}`));
  add(correct.replace(/\\sqrt\{(\d+)\}/, (m, n) => Number(n) > 2 ? `\\sqrt{${Number(n)-1}}` : null));

  // Negate
  add(correct.startsWith('-') ? correct.slice(1) : `-${correct}`);

  // Change trailing integer
  add(correct.replace(/([+-]\s*)(\d+)$/, (m, op, n) => `${op}${Number(n)+1}`));
  add(correct.replace(/([+-]\s*)(\d+)$/, (m, op, n) => Number(n) > 1 ? `${op}${Number(n)-1}` : null));

  // Double coefficient
  add(correct.replace(/^(\d+)/, (m, n) => `${Number(n)*2}`));

  return wrongs.filter(w => w && !w.includes('null')).slice(0, 3);
}

function buildOptions(correct, wrongs, correctIndex) {
  const all = [...wrongs];
  all.splice(correctIndex, 0, correct);
  return all.slice(0, 4).map(text => ({ text: `\\\\(${text}\\\\)`, imageUrl: '' }));
}

function convertFile(filePath) {
  const src = readFileSync(filePath, 'utf8');

  // Extract export name
  const exportMatch = src.match(/export const (\w+)/);
  const exportName = exportMatch[1];

  // Extract the JSON array by removing the export statement
  const jsonStr = src.replace(/^export const \w+ = /, '').replace(/;\s*$/, '');
  const questions = JSON.parse(jsonStr);

  let converted = 0;
  let cycle = 0;

  for (const q of questions) {
    if (q.type !== 'short_answer') continue;

    const correct = extractAnswer(q.solutionSteps);
    if (!correct) {
      console.warn(`No answer for ${q.id}`);
      continue;
    }

    const wrongs = generateWrongs(correct);
    // Ensure we have 3 wrongs
    let i = 1;
    while (wrongs.length < 3) {
      wrongs.push(`${correct}_wrong${i++}`);
    }

    const correctIndex = cycle % 4;
    cycle++;

    q.type = 'multiple_choice';
    q.options = buildOptions(correct, wrongs.slice(0, 3), correctIndex);
    q.answer = correctIndex;
    converted++;
  }

  console.log(`Converted ${converted} questions in ${filePath.split('/').pop()}`);
  writeFileSync(filePath, `export const ${exportName} = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');
}

const files = [
  '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11aCh2DQuestions.js',
  '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11aCh2EQuestions.js',
];

for (const f of files) convertFile(f);
console.log('Done!');
