import fs from 'fs';
import path from 'path';

async function diagnose() {
  const p = path.resolve('src/constants/seedYear10Ch11AQuestions.js');
  const content = fs.readFileSync(p, 'utf8');
  let match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);\n$/);
  let questions;
  try {
    questions = eval(match[1]);
  } catch(e) {
    return;
  }

  const GENERIC_PATTERNS = [
    "Apply the appropriate standard form",
    "Carry out the algebra carefully",
    "Final answer:",
    "What rule or formula applies?",
    "Identify the relevant differentiation/integration",
    "read the full stem carefully and list the known quantities",
    "Identify the geometric constraints given in the problem.",
    "Set up the necessary algebraic equations.",
    "Solve the equations systematically.",
    "State the final required values clearly."
  ];

  let issues = [];

  for (let q of questions) {
    if (q.solutionSteps) {
      let genericFound = false;
      for (let s of q.solutionSteps) {
        if (s.explanation && GENERIC_PATTERNS.some(p => s.explanation.includes(p))) {
          genericFound = true;
        }
      }
      if (genericFound) {
        issues.push(q.id);
      }
    }
  }

  console.log(`\n=== Re-Audit Result for Generic Templates ===`);
  if (issues.length === 0) {
    console.log("No issues found. All clear!");
  } else {
    console.log(`Found generic templates in ${issues.length} questions:`);
    for (let id of issues) {
      console.log(`- ${id}`);
    }
  }
}

diagnose().catch(console.error);
