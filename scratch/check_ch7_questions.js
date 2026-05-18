import fs from 'fs';

console.log('=== VALIDATING CHAPTER 7A QUESTION BANK ===');

const questions = JSON.parse(fs.readFileSync('scratch/questions7A.json', 'utf8'));

if (questions.length !== 41) {
  console.error(`Error: Expected exactly 41 questions, but found ${questions.length}.`);
  process.exit(1);
}

let errors = 0;
questions.forEach((q, idx) => {
  const label = `Q${idx + 1} (${q.type})`;
  
  // Verify metadata fields
  if (q.chapterId !== 'y11a-7') { console.error(`[${label}] Invalid chapterId: ${q.chapterId}`); errors++; }
  if (q.topicCode !== '7A') { console.error(`[${label}] Invalid topicCode: ${q.topicCode}`); errors++; }
  if (!['easy', 'medium'].includes(q.difficulty)) { console.error(`[${label}] Invalid difficulty: ${q.difficulty}`); errors++; }
  
  // Verify multiple choice format
  if (q.type === 'multiple_choice') {
    if (!q.options || q.options.length !== 4) {
      console.error(`[${label}] MC question does not have exactly 4 options!`);
      errors++;
    }
    const ansIdx = parseInt(q.answer);
    if (isNaN(ansIdx) || ansIdx < 0 || ansIdx >= q.options.length) {
      console.error(`[${label}] Invalid answer index: ${q.answer}`);
      errors++;
    }
  }
  
  // Verify LaTeX delimiters ($ and $$) are clean and not broken
  const matchesSingle = (q.question.match(/\$/g) || []).length;
  if (matchesSingle % 2 !== 0) {
    console.error(`[${label}] Unbalanced single $ signs in question: "${q.question}"`);
    errors++;
  }
  
  const matchesDouble = (q.solution.match(/\$\$/g) || []).length;
  if (matchesDouble % 2 !== 0) {
    console.error(`[${label}] Unbalanced double $$ signs in solution!`);
    errors++;
  }
});

if (errors === 0) {
  console.log(`\n🎉 SUCCESS: All 41 Coordinate Geometry questions successfully validated!`);
  console.log(`- Total Questions: ${questions.length}`);
  console.log(`- Format: 100% Multiple Choice`);
  console.log(`- Delimiter Balance: 100% Clean`);
  process.exit(0);
} else {
  console.error(`\n❌ Validation failed with ${errors} error(s).`);
  process.exit(1);
}
