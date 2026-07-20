import { readFileSync } from 'fs';

const code = readFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/updateY7Ch4ARemaining.js', 'utf8');

// Match all workingOut strings in the file
const workingOutRegex = /"workingOut":\s*"([^"]+)"/g;
let match;
let count = 0;
console.log('--- Auditing workingOut LaTeX brackets ---');
while ((match = workingOutRegex.exec(code)) !== null) {
  const content = match[1];
  // Search for occurrence of \\( and \\)
  const openCount = (content.match(/\\\\\(/g) || []).length;
  const closeCount = (content.match(/\\\\\)/g) || []).length;
  if (openCount !== closeCount) {
    console.log(`[MISMATCH] "${content}" -> open: ${openCount}, close: ${closeCount}`);
  }
  count++;
}
console.log(`Audited ${count} workingOut strings.`);

// Match all opts array strings
const optsRegex = /"opts":\s*\[\s*([^\]]+)\]/gs;
let optMatch;
console.log('\n--- Auditing opts LaTeX brackets ---');
while ((optMatch = optsRegex.exec(code)) !== null) {
  const content = optMatch[1];
  const lines = content.split('\n');
  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('"') || trimmed.startsWith('`')) {
      const openCount = (trimmed.match(/\\\\\(/g) || []).length;
      const closeCount = (trimmed.match(/\\\\\)/g) || []).length;
      if (openCount !== closeCount) {
        console.log(`[MISMATCH OPTS] ${trimmed} -> open: ${openCount}, close: ${closeCount}`);
      }
    }
  });
}
process.exit(0);
