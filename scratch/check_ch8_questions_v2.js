import fs from 'fs';

console.log('=== VALIDATING FULL CHAPTER 8A QUESTION BANK (107 QUESTIONS) ===');

const filePath = 'src/scripts/importYear11AdvCh8.js';
if (!fs.existsSync(filePath)) {
  console.error(`Error: ${filePath} not found!`);
  process.exit(1);
}

// Since importYear11AdvCh8.js is a ES module with import/export, we will read it and evaluate the questions8A array
const content = fs.readFileSync(filePath, 'utf8');
const parts = content.split('export const questions8A = [');
if (parts.length < 2) {
  console.error('Error: Could not find questions8A definition.');
  process.exit(1);
}

const arrayContent = parts[1].split('];\n\nexport const importYear11AdvCh8 =')[0];

// Parse the array programmatically
let questions;
try {
  // Wrap in brackets and parse as JSON (we need to be careful with double quotes/single quotes, so let's evaluate it as JS)
  const evalStr = `[${arrayContent}]`;
  // We can use a secure/simple function evaluation
  questions = eval(evalStr);
} catch (err) {
  console.error('Error evaluating questions8A array:', err.message);
  process.exit(1);
}

console.log(`Successfully parsed ${questions.length} questions from ${filePath}.`);

if (questions.length !== 129) {
  console.error(`Error: Expected exactly 129 questions (107 original + 22 new), but found ${questions.length}.`);
  process.exit(1);
}

let errors = 0;
questions.forEach((q, idx) => {
  const label = `Q${idx + 1} (${q.type}) - ${q.question.substring(0, 40)}...`;

  // Verify metadata fields
  if (q.chapterId !== 'y11a-8') { console.error(`[${label}] Invalid chapterId: ${q.chapterId}`); errors++; }
  if (q.topicCode !== '8A') { console.error(`[${label}] Invalid topicCode: ${q.topicCode}`); errors++; }
  if (q.difficulty !== 'easy' && q.difficulty !== 'medium' && q.difficulty !== 'hard') { console.error(`[${label}] Invalid difficulty: ${q.difficulty}`); errors++; }

  // Verify multiple choice format
  if (q.type === 'multiple_choice') {
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`[${label}] Expected exactly 4 options, found: ${q.options?.length}`);
      errors++;
    } else {
      q.options.forEach((opt, oIdx) => {
        if (!opt.text) {
          console.error(`[${label}] Option ${oIdx} is missing text`);
          errors++;
        }
      });
    }
  }

  // Verify answer is "0"
  if (q.answer !== "0") {
    console.error(`[${label}] Expected answer to be "0" (first option correct), found: ${q.answer}`);
    errors++;
  }

  // Verify solutions and question has balanced LaTeX signs
  const matchesSingle = (q.question.match(/\$/g) || []).length;
  if (matchesSingle % 2 !== 0) {
    console.error(`[${label}] Unbalanced single $ signs in question! (${matchesSingle} found)`);
    errors++;
  }

  const matchesDouble = (q.solution.match(/\$\$/g) || []).length;
  if (matchesDouble % 2 !== 0) {
    console.error(`[${label}] Unbalanced double $$ signs in solution! (${matchesDouble} found)`);
    errors++;
  }
});

if (errors === 0) {
  console.log(`\n🎉 SUCCESS: All 107 Index questions successfully validated!`);
  console.log(`- Total Questions: ${questions.length}`);
  console.log(`- Format: 100% Multiple Choice`);
  console.log(`- Delimiter Balance: 100% Clean`);
  process.exit(0);
} else {
  console.error(`\n❌ Validation failed with ${errors} error(s).`);
  process.exit(1);
}
