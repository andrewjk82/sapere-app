import fs from 'fs';
import path from 'path';

function fixLatexParentheses(str) {
  if (typeof str !== 'string') return str;
  let fixed = str;

  // Pattern 1: \frac{(...}{...}) -> \left(\frac{...}{...}\right) or simply (\frac{...}{...})
  // Let's just fix it to \frac{...}{...} since the parenthesis might just be completely redundant
  // The user reported `\frac{(2xy}{3b})` or `\frac{3b}{(2xy})`.
  // If it's a full fraction wrapped, usually they meant `\left( \frac{...}{...} \right)` or `(\frac{...}{...})`
  // Actually, replacing `\frac{(` with `(\frac{` and `})` with `})` -> `})` to `})` wait.
  // `\frac{(2xy}{3b})`
  
  // Replace `\frac{(A}{B})` -> `\left(\frac{A}{B}\right)`
  fixed = fixed.replace(/\\frac\{\((.*?)\}\{(.*?)\}\)/g, '\\left(\\frac{$1}{$2}\\right)');
  
  // Replace `\frac{A}{(B})` -> `\left(\frac{A}{B}\right)`
  fixed = fixed.replace(/\\frac\{(.*?)\}\{\((.*?)\}\)/g, '\\left(\\frac{$1}{$2}\\right)');
  
  // Replace `({` -> `{(` if there's any stray ones? No, replacing `({` globally is risky.
  // Better to just fix the two known bad patterns:
  // `\frac{(X}{Y})`
  // `\frac{X}{(Y})`

  return fixed;
}

export function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const exportMatch = content.match(/export const (Y\d+_[A-Z0-9_]+_QUESTIONS) =/);
  if (!exportMatch) return;
  const exportName = exportMatch[1];
  
  const prefix = `export const ${exportName} = `;
  const startIndex = content.indexOf(prefix);
  let arrayContent = content.substring(startIndex + prefix.length).trim();
  if (arrayContent.endsWith(';')) arrayContent = arrayContent.substring(0, arrayContent.length - 1);
  
  const questions = eval(`(${arrayContent})`);
  let modifiedCount = 0;

  const traverseAndFix = (obj) => {
    let changed = false;
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        const fixed = fixLatexParentheses(obj[key]);
        if (fixed !== obj[key]) {
          obj[key] = fixed;
          changed = true;
        }
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (traverseAndFix(obj[key])) changed = true;
      }
    }
    return changed;
  };

  const cleanedQuestions = questions.map(q => {
    const changed = traverseAndFix(q);
    if (changed) modifiedCount++;
    return q;
  });

  if (modifiedCount > 0) {
    const newContent = `${prefix}${JSON.stringify(cleanedQuestions, null, 2)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed broken parentheses in ${modifiedCount} questions in ${filePath}.`);
  } else {
    console.log(`No broken parentheses found in ${filePath}.`);
  }
}

const isMain = process.argv[1] === new URL(import.meta.url).pathname || process.argv[1] === import.meta.filename || process.argv[1] === __filename;
if (isMain) {
  const targetFiles = process.argv.slice(2);
  for (const f of targetFiles) {
    fixFile(path.resolve(process.cwd(), f));
  }
}
