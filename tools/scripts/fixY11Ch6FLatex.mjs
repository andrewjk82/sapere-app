import fs from 'fs';
import path from 'path';

const filepath = path.resolve('src/constants/seedYear11Ch6FQuestions.js');

async function fixLatex() {
  const { Y11_CH6F_QUESTIONS } = await import('../../src/constants/seedYear11Ch6FQuestions.js');

  const fixString = (str) => {
    if (!str) return str;
    // We want to find sin, cos, tan, csc, sec, cot that are NOT preceded by a backslash or a letter
    // and NOT followed by letters (e.g. "cosine").
    // We will do a regex replacement.
    // In JavaScript string, the regex is:
    return str.replace(/(?<![a-zA-Z\\])(sin|cos|tan|csc|sec|cot)(?![a-zA-Z])/g, '\\\\$1');
  };

  const fixObject = (obj) => {
    if (typeof obj === 'string') {
      return fixString(obj);
    } else if (Array.isArray(obj)) {
      return obj.map(fixObject);
    } else if (obj !== null && typeof obj === 'object') {
      for (const key in obj) {
        obj[key] = fixObject(obj[key]);
      }
    }
    return obj;
  };

  for (let q of Y11_CH6F_QUESTIONS) {
    fixObject(q);
  }

  const fileContent = "export const Y11_CH6F_QUESTIONS = " + JSON.stringify(Y11_CH6F_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log('Successfully fixed LaTeX backslashes.');
}
fixLatex().catch(console.error);
