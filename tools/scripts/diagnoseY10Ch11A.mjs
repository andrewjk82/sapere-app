import fs from 'fs';
import path from 'path';

async function diagnose() {
  const issues = {};

  async function checkFile(filename) {
    const p = path.resolve(filename);
    if (!fs.existsSync(p)) return;
    const content = fs.readFileSync(p, 'utf8');
    let match = content.match(/export const (Y10_CH11A_QUESTIONS) = (\[[\s\S]*\]);\n$/);
    if (!match) {
      match = content.match(/export const (.*?) = (\[[\s\S]*\])/);
      if (!match) return;
    }
    
    let questions;
    try {
      questions = eval(match[2]);
    } catch(e) {
      return;
    }

    issues[filename] = [];

    const GENERIC_PATTERNS = [
      "Apply the appropriate standard form",
      "Carry out the algebra carefully",
      "Final answer:",
      "What rule or formula applies?",
      "Identify the relevant differentiation/integration",
      "read the full stem carefully and list the known quantities"
    ];

    for (let q of questions) {
      const qIssues = [];

      // Legacy fields
      if (q.opts) qIssues.push("Legacy 'opts' field exists");

      // Missing math mode in workingOut
      if (q.solutionSteps) {
        let genericFound = false;
        let mathModeMissing = false;
        for (let s of q.solutionSteps) {
          if (s.explanation && GENERIC_PATTERNS.some(p => s.explanation.includes(p))) {
            genericFound = true;
          }
          if (s.workingOut && s.workingOut.trim().length > 0) {
            let wo = s.workingOut.trim();
            if (!wo.startsWith('\\(') && !wo.startsWith('\\[') && !wo.includes('\\begin') && !wo.includes('<div')) {
              mathModeMissing = true;
            }
          }
        }
        if (genericFound) qIssues.push("Generic solutionSteps templates detected");
        if (mathModeMissing) qIssues.push("Missing LaTeX math mode '\\( \\)' in workingOut");
      }

      // Leaked answers in question text
      if (q.question && q.question.match(/\s*\([^)]*e\.g\.[^)]*\)/i)) {
        qIssues.push("Answer leaked via formatting hint (e.g.) in question stem");
      }

      // Subjective questions that should be MC
      if (q.type === 'teacher_review') {
        qIssues.push("Subjective question (teacher_review) - could be converted to MC");
      } else if (q.type === 'multiple_choice' && q.isManual === true) {
        qIssues.push("MC question has isManual: true (will render as text box)");
      }

      if (qIssues.length > 0) {
        issues[filename].push({ id: q.id, issues: qIssues });
      }
    }
  }

  await checkFile('src/constants/seedYear10Ch11AQuestions.js');

  for (let file in issues) {
    console.log(`\n=== File: ${file} ===`);
    if (issues[file].length === 0) console.log("No issues found.");
    for (let item of issues[file]) {
      console.log(`- ${item.id}:`);
      for (let issue of item.issues) {
        console.log(`  * ${issue}`);
      }
    }
  }
}

diagnose().catch(console.error);
