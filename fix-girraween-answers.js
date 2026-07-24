/**
 * Fix Girraween 2020 answer format: 'A'/'B'/'C'/'D' → '0'/'1'/'2'/'3'
 * Converts letter-based answers to 0-based index format
 */

import fs from 'fs';
import path from 'path';

const ANSWER_MAP = {
  'A': '0',
  'B': '1',
  'C': '2',
  'D': '3'
};

function fixAnswersInFile(filePath) {
  console.log(`\n📝 Processing: ${path.basename(filePath)}`);

  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;
  let fixCount = 0;

  // Match pattern: a: 'X', where X is A, B, C, or D
  const pattern = /a:\s*'([A-D])'/g;

  content = content.replace(pattern, (match, letter) => {
    const indexValue = ANSWER_MAP[letter];
    fixCount++;
    console.log(`  ✓ ${match} → a: '${indexValue}'`);
    return `a: '${indexValue}'`;
  });

  if (fixCount > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✅ Fixed ${fixCount} answers in ${path.basename(filePath)}`);
  } else {
    console.log(`  ℹ️  No answers to fix`);
  }

  return fixCount;
}

async function main() {
  const seedDir = './tools/seeds/girraween';
  const files = [
    'seedGirraween2020Questions_PART1.js',
    'seedGirraween2020Questions_PART2.js',
    'seedGirraween2020Questions_Q21to38_COMPLETE.js',
    'seedGirraween2020SimilarQuestions_PART1.js',
    'seedGirraween2020SimilarQuestions_PART2.js',
    'seedGirraween2020SimilarQuestions_PART3.js',
  ];

  console.log('🔧 Fixing Girraween 2020 answer formats...\n');

  let totalFixed = 0;

  for (const file of files) {
    const filePath = path.join(seedDir, file);
    if (fs.existsSync(filePath)) {
      totalFixed += fixAnswersInFile(filePath);
    } else {
      console.log(`⚠️  File not found: ${file}`);
    }
  }

  console.log(`\n✨ Complete! Fixed ${totalFixed} total answers\n`);
}

main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
