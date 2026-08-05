import fs from 'fs';
import path from 'path';

function getCoreMath(str) {
  const match = str.match(/\\\((.*?)\\\)/);
  if (match) {
    let core = match[1].trim();
    if (core.startsWith('+')) core = core.substring(1).trim();
    return core;
  }
  return str.trim();
}

function isLazyNegation(correct, distractor) {
  const c = getCoreMath(correct);
  const d = getCoreMath(distractor);
  if (!c || !d) return false;
  
  if (c === '-' + d || d === '-' + c) return true;
  if (c.replace(/\s/g, '') === '-' + d.replace(/\s/g, '') || 
      d.replace(/\s/g, '') === '-' + c.replace(/\s/g, '')) return true;

  return false;
}

function generateBetterDistractor(correctStr, existingOptions) {
  let newDistractor = correctStr;
  
  // Strategy 1: If it's a fraction like \frac{A}{B}, swap to \frac{B}{A}
  const fracMatch = correctStr.match(/\\frac\{(.*?)\}\{(.*?)\}/);
  if (fracMatch) {
    newDistractor = correctStr.replace(fracMatch[0], `\\frac{${fracMatch[2]}}{${fracMatch[1]}}`);
  } else {
    // Strategy 2: Modify the first number we see
    const numMatch = correctStr.match(/\d+/);
    if (numMatch) {
      const num = parseInt(numMatch[0], 10);
      newDistractor = correctStr.replace(numMatch[0], (num === 1 ? 2 : num - 1).toString());
    } else {
      // Strategy 3: Just prepend a 2 or something if no numbers exist
      newDistractor = correctStr.replace(/\\\(/, '\\(2');
    }
  }

  // Ensure uniqueness
  let attempts = 0;
  while (existingOptions.some(o => o.text === newDistractor) && attempts < 10) {
    attempts++;
    const numMatch = newDistractor.match(/\d+/);
    if (numMatch) {
      const num = parseInt(numMatch[0], 10);
      newDistractor = newDistractor.replace(numMatch[0], (num + 1).toString());
    } else {
      newDistractor = newDistractor.replace(/\\\(/, `\\(${attempts + 2}`);
    }
  }

  return newDistractor;
}

export function cleanupFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract export name
  const exportMatch = content.match(/export const (Y\d+_[A-Z0-9_]+_QUESTIONS) =/);
  if (!exportMatch) return;
  const exportName = exportMatch[1];
  
  const prefix = `export const ${exportName} = `;
  const startIndex = content.indexOf(prefix);
  let arrayContent = content.substring(startIndex + prefix.length).trim();
  if (arrayContent.endsWith(';')) arrayContent = arrayContent.substring(0, arrayContent.length - 1);
  
  const questions = eval(`(${arrayContent})`);
  let modifiedCount = 0;

  const cleanedQuestions = questions.map(q => {
    let changed = false;
    if (q.options && q.answer !== undefined) {
      const correctText = q.options[Number(q.answer)]?.text || '';
      if (!correctText) return q;

      q.options.forEach((opt, idx) => {
        if (idx === Number(q.answer)) return;
        if (isLazyNegation(correctText, opt.text)) {
          opt.text = generateBetterDistractor(correctText, q.options);
          changed = true;
        }
      });
    }
    if (changed) modifiedCount++;
    return q;
  });

  if (modifiedCount > 0) {
    const newContent = `${prefix}${JSON.stringify(cleanedQuestions, null, 2)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed lazy distractors in ${modifiedCount} questions in ${filePath}.`);
  }
}

// If run directly
const isMain = process.argv[1] === new URL(import.meta.url).pathname || process.argv[1] === import.meta.filename || process.argv[1] === __filename;
if (isMain) {
  const targetFiles = process.argv.slice(2);
  for (const f of targetFiles) {
    cleanupFile(path.resolve(process.cwd(), f));
  }
}
