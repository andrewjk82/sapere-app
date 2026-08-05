import fs from 'fs';
import path from 'path';

function cleanExplanation(exp) {
  let cleaned = exp.replace(/Work carefully and simplify fully before selecting the matching option\.?/gi, '').trim();
  cleaned = cleaned.replace(/Confirm the final answer\.?/gi, '').trim();
  cleaned = cleaned.replace(/Carry out the next step of the solution\.?/gi, '').trim();
  return cleaned;
}

function processQuestions(questions) {
  let modifiedCount = 0;
  
  for (const q of questions) {
    if (!q.solutionSteps || !Array.isArray(q.solutionSteps)) continue;
    
    const newSteps = [];
    let changed = false;
    
    for (let i = 0; i < q.solutionSteps.length; i++) {
      const step = q.solutionSteps[i];
      const cleanedExp = cleanExplanation(step.explanation || '');
      
      if (cleanedExp === '' && i > 0 && step.workingOut === newSteps[newSteps.length - 1].workingOut) {
        changed = true;
        continue;
      }
      
      if (cleanedExp !== (step.explanation || '').trim()) {
        step.explanation = cleanedExp;
        changed = true;
      }
      
      if (step.explanation === '') {
        if (i === 0) step.explanation = "Identify the expression and substitute any given values.";
        else if (i === q.solutionSteps.length - 1) step.explanation = "Simplify to find the final answer.";
        else step.explanation = "Perform the required arithmetic operation.";
        changed = true;
      }
      
      newSteps.push(step);
    }
    
    const deduped = [];
    for (const step of newSteps) {
      if (deduped.length > 0) {
        const last = deduped[deduped.length - 1];
        if (last.workingOut === step.workingOut && last.explanation === step.explanation) {
          changed = true;
          continue;
        }
      }
      deduped.push(step);
    }
    
    if (changed) {
      q.solutionSteps = deduped;
      modifiedCount++;
    }
  }
  return modifiedCount;
}

export function enrichFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const exportMatch = content.match(/export const (Y\d+_[A-Z0-9_]+_QUESTIONS) =/);
  if (!exportMatch) return;
  const exportName = exportMatch[1];
  
  const prefix = `export const ${exportName} = `;
  const startIndex = content.indexOf(prefix);
  let arrayContent = content.substring(startIndex + prefix.length).trim();
  if (arrayContent.endsWith(';')) arrayContent = arrayContent.substring(0, arrayContent.length - 1);
  
  const questions = eval(`(${arrayContent})`);
  
  const modifiedCount = processQuestions(questions);

  if (modifiedCount > 0) {
    const newContent = `${prefix}${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Enriched ${modifiedCount} questions in ${filePath}.`);
  } else {
    console.log(`No enrichment needed in ${filePath}.`);
  }
}

const isMain = process.argv[1] === new URL(import.meta.url).pathname || process.argv[1] === import.meta.filename || process.argv[1] === __filename;
if (isMain) {
  const targetFiles = process.argv.slice(2);
  for (const f of targetFiles) {
    enrichFile(path.resolve(process.cwd(), f));
  }
}
