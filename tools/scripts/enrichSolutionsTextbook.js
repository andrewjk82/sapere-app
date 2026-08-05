import fs from 'fs';
import path from 'path';

const PROFILE_MESSAGES = {
  SUBSTITUTE: "Identify the expression and substitute the given values accurately.",
  MULTIPLY_NUMERATOR: "When multiplying a fraction by a whole number, remember that the whole number only multiplies the numerator.",
  COMMON_DENOMINATOR: "To add or subtract fractions, find a common denominator first, then combine the numerators.",
  VINCULUM_BRACKET: "Treat the fraction line (vinculum) as a bracket. Simplify the entire numerator before dividing.",
  CANCELLING: "To simplify algebraic fractions, cancel common factors from the numerator and denominator.",
  FINAL_SIMPLIFY: "State the final simplified answer and match it to the correct option."
};

function getTextbookExplanation(workingOut, index, total) {
  const w = workingOut || '';
  if (index === 0 && (w.includes('=') && !w.includes('frac'))) return PROFILE_MESSAGES.SUBSTITUTE;
  if (index === total - 1) return PROFILE_MESSAGES.FINAL_SIMPLIFY;
  
  if (w.includes('\\times') && w.includes('frac') && !w.includes('+')) return PROFILE_MESSAGES.MULTIPLY_NUMERATOR;
  if (w.includes('+') && w.includes('frac')) return PROFILE_MESSAGES.COMMON_DENOMINATOR;
  if (w.match(/\\frac\{.*?[\+\-].*?\}/)) return PROFILE_MESSAGES.VINCULUM_BRACKET;
  if (w.match(/\\frac\{.*?x.*?\}\{.*?x.*?\}/) || w.match(/\\frac\{[0-9]+[a-z]\}/)) return PROFILE_MESSAGES.CANCELLING;
  
  return "Perform the next required algebraic operation carefully.";
}

export function enrichWithProfile(filePath) {
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

  for (const q of questions) {
    if (!q.solutionSteps || !Array.isArray(q.solutionSteps)) continue;
    let changed = false;
    
    for (let i = 0; i < q.solutionSteps.length; i++) {
      const step = q.solutionSteps[i];
      const newExp = getTextbookExplanation(step.workingOut, i, q.solutionSteps.length);
      
      // We overwrite generic explanations like "Identify the expression..." 
      // or "Perform the required arithmetic operation." 
      // with textbook aligned ones if they match.
      const current = step.explanation || '';
      if (current.includes('Identify the expression') || current.includes('Perform the required') || current.includes('Simplify to find')) {
        if (current !== newExp) {
           step.explanation = newExp;
           changed = true;
        }
      }
    }
    if (changed) modifiedCount++;
  }

  if (modifiedCount > 0) {
    const newContent = `${prefix}${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Enriched ${modifiedCount} questions using Textbook Profile in ${filePath}.`);
  } else {
    console.log(`No textbook enrichment applied in ${filePath}.`);
  }
}

const isMain = process.argv[1] === new URL(import.meta.url).pathname || process.argv[1] === import.meta.filename || process.argv[1] === __filename;
if (isMain) {
  const targetFiles = process.argv.slice(2);
  for (const f of targetFiles) {
    enrichWithProfile(path.resolve(process.cwd(), f));
  }
}
