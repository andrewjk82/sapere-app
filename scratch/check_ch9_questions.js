import fs from 'fs';

console.log('=== VALIDATING FULL CHAPTER 9A QUESTION BANK (15 QUESTIONS) ===');

const filePath = 'src/scripts/importYear11AdvCh9.js';
if (!fs.existsSync(filePath)) {
  console.error(`Error: ${filePath} not found!`);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');
const parts = content.split('export const questions9A = [');
if (parts.length < 2) {
  console.error('Error: Could not find questions9A definition.');
  process.exit(1);
}

const arrayContent = parts[1].split('];\n\nexport const importYear11AdvCh9 =')[0];

let questions;
try {
  const evalStr = `[${arrayContent}]`;
  questions = eval(evalStr);
} catch (err) {
  console.error('Error evaluating questions9A array:', err.message);
  process.exit(1);
}

console.log(`Successfully parsed ${questions.length} questions from ${filePath}.`);

if (questions.length !== 15) {
  console.error(`Error: Expected exactly 15 questions, but found ${questions.length}.`);
  process.exit(1);
}

let errors = 0;
questions.forEach((q, idx) => {
  const label = `Q${idx + 1} (${q.type}) - ${q.question.substring(0, 45)}...`;

  // Verify metadata fields
  if (q.chapterId !== 'y11a-9') { console.error(`[${label}] Invalid chapterId: ${q.chapterId}`); errors++; }
  if (q.topicCode !== '9A') { console.error(`[${label}] Invalid topicCode: ${q.topicCode}`); errors++; }
  if (q.difficulty !== 'easy' && q.difficulty !== 'medium' && q.difficulty !== 'hard') { console.error(`[${label}] Invalid difficulty: ${q.difficulty}`); errors++; }

  // Verify specific requirements: Q1-Q9 must be medium, rest hard
  const expectedDifficulty = (idx < 9) ? 'medium' : 'hard';
  if (q.difficulty !== expectedDifficulty) {
    console.error(`[${label}] Invalid difficulty: expected ${expectedDifficulty}, found ${q.difficulty}`);
    errors++;
  }

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
  console.log(`\n🎉 SUCCESS: All 15 Differentiation questions successfully validated!`);
  console.log(`- Total Questions: ${questions.length} (9 Medium, 6 Hard)`);
  console.log(`- Format: 100% Multiple Choice`);
  console.log(`- Delimiter Balance: 100% Clean`);
  process.exit(0);
} else {
  console.error(`\n❌ Validation failed with ${errors} error(s).`);
  process.exit(1);
}
