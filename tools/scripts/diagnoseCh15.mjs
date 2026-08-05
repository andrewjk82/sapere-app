import fs from 'fs';
import path from 'path';

async function diagnose() {
  const issues = {};

  async function checkFile(filename) {
    const p = path.resolve(filename);
    const content = fs.readFileSync(p, 'utf8');
    // We will parse the export
    let match = content.match(/export const (Y8_CH15_QUESTIONS|Y8_CH15I_QUESTIONS) = (\[.*\]);\n$/s);
    if (!match) {
      match = content.match(/export const (.*?) = (\[[\s\S]*\])/);
      if (!match) {
        console.log(`Could not parse array from ${filename}`);
        return;
      }
    }
    
    let questions;
    try {
      questions = eval(match[2]);
    } catch(e) {
      console.log(`Failed to eval questions in ${filename}`);
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
      if (typeof q.solution === 'string' && q.solution.includes('<') && !q.solutionSteps) {
        qIssues.push("Legacy HTML 'solution' field without solutionSteps");
      }

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
            if (!wo.startsWith('\\(') || !wo.endsWith('\\)')) {
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

      // Double-escaped newlines in JSXGraph
      if (q.graphData && q.graphData.jsxGraph && q.graphData.jsxGraph.script && q.graphData.jsxGraph.script.includes('\\\\n')) {
        qIssues.push("Double-escaped newlines in jsxGraph script");
      }

      if (qIssues.length > 0) {
        issues[filename].push({ id: q.id, issues: qIssues });
      }
    }
  }

  await checkFile('src/constants/seedYear8Ch15Questions.js');
  await checkFile('src/constants/seedYear8Ch15IQuestions.js');

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
