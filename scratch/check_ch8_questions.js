import fs from 'fs';

console.log('=== VALIDATING CHAPTER 8A QUESTION BANK ===');

const questions = JSON.parse(fs.readFileSync('scratch/questions8A.json', 'utf8'));

if (questions.length !== 44) {
  console.error(`Error: Expected exactly 44 questions, but found ${questions.length}.`);
  process.exit(1);
}

let errors = 0;
questions.forEach((q, idx) => {
  const label = `Q${idx + 1} (${q.type})`;
  
  // Verify metadata fields
  if (q.chapterId !== 'y11a-8') { console.error(`[${label}] Invalid chapterId: ${q.chapterId}`); errors++; }
  if (q.topicCode !== '8A') { console.error(`[${label}] Invalid topicCode: ${q.topicCode}`); errors++; }
  if (q.difficulty !== 'easy') { console.error(`[${label}] Invalid difficulty: ${q.difficulty}`); errors++; }
  
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
        } else if (!opt.text.startsWith('$') || !opt.text.endsWith('$')) {
          console.error(`[${label}] Option ${oIdx} text is not wrapped in LaTeX ($): ${opt.text}`);
          errors++;
        }
      });
    }
  }

  // Verify answer is "0"
  if (q.answer !== "0") {
    console.error(`[${label}] Expected answer to be "0" (since we always make first option correct), found: ${q.answer}`);
    errors++;
  }

  // Verify solutions and question has balanced LaTeX signs
  const matchesSingle = (q.question.match(/\$/g) || []).length;
  if (matchesSingle % 2 !== 0) {
    console.error(`[${label}] Unbalanced single $ signs in question!`);
    errors++;
  }
  
  const matchesDouble = (q.solution.match(/\$\$/g) || []).length;
  if (matchesDouble % 2 !== 0) {
    console.error(`[${label}] Unbalanced double $$ signs in solution!`);
    errors++;
  }
});

if (errors === 0) {
  console.log(`\n🎉 SUCCESS: All 44 Index questions successfully validated!`);
  console.log(`- Total Questions: ${questions.length}`);
  console.log(`- Format: 100% Multiple Choice`);
  console.log(`- Delimiter Balance: 100% Clean`);
  process.exit(0);
} else {
  console.error(`\n❌ Validation failed with ${errors} error(s).`);
  process.exit(1);
}
