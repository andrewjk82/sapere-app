import fs from 'fs';
import path from 'path';
import katex from 'katex';
import { validateSeedQuestion } from '/Users/andrewkim/Desktop/sapere1/src/utils/latexValidate.js';

const renderToString = (tex, opts) => katex.renderToString(tex, opts);

const files = [
  { name: 'seedYear7Ch6AQuestions.js', exportName: 'Y7_CH6A_QUESTIONS' },
  { name: 'seedYear7Ch6BQuestions.js', exportName: 'Y7_CH6B_QUESTIONS' },
  { name: 'seedYear7Ch6CQuestions.js', exportName: 'Y7_CH6C_QUESTIONS' },
  { name: 'seedYear7Ch6DQuestions.js', exportName: 'Y7_CH6D_QUESTIONS' }
];

let totalErrors = 0;

for (const { name, exportName } of files) {
  const filePath = path.join('/Users/andrewkim/Desktop/sapere1/src/constants', name);
  let content = fs.readFileSync(filePath, 'utf8');
  const prefix = `export const ${exportName} = `;
  const startIndex = content.indexOf(prefix);
  if (startIndex === -1) continue;
  let arrayContent = content.substring(startIndex + prefix.length).trim();
  if (arrayContent.endsWith(';')) arrayContent = arrayContent.substring(0, arrayContent.length - 1);
  const questions = eval(`(${arrayContent})`);
  
  for (const q of questions) {
    const errs = validateSeedQuestion(q, renderToString);
    if (errs.length > 0) {
      console.log(`Error in ${name} -> ${q.id}:`, errs);
      totalErrors++;
    }
  }
}

if (totalErrors === 0) {
  console.log("All questions passed validation successfully!");
} else {
  console.log(`Found ${totalErrors} errors in total.`);
}
