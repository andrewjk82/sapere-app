import { readFileSync } from 'fs';

const code = readFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/updateY7Ch4ARemaining.js', 'utf8');

// Find all matches for remainingUpdates object blocks
// We can parse the javascript directly by evaluating the exported object or using a simple parser
// Let's extract the workingOut values directly using a simple regex since they are raw strings
const workingOutRegex = /workingOut:\s*["'`](.*?)["'`]/g;
let match;
let count = 0;
console.log('--- Auditing workingOut LaTeX brackets ---');
while ((match = workingOutRegex.exec(code)) !== null) {
  const content = match[1];
  const openCount = (content.match(/\\\\\(/g) || []).length;
  const closeCount = (content.match(/\\\\\)/g) || []).length;
  if (openCount !== closeCount) {
    console.log(`[MISMATCH] "${content}" -> open: ${openCount}, close: ${closeCount}`);
  }
  count++;
}
console.log(`Audited ${count} workingOut strings.`);

// Audit opts strings
const optsRegex = /opts:\s*\[([\s\S]*?)\]/g;
let optMatch;
console.log('\n--- Auditing opts LaTeX brackets ---');
while ((optMatch = optsRegex.exec(code)) !== null) {
  const block = optMatch[1];
  const stringRegex = /["'`](.*?)["'`]/g;
  let strMatch;
  while ((strMatch = stringRegex.exec(block)) !== null) {
    const optStr = strMatch[1];
    const openCount = (optStr.match(/\\\\\(/g) || []).length;
    const closeCount = (optStr.match(/\\\\\)/g) || []).length;
    if (openCount !== closeCount) {
      console.log(`[MISMATCH OPTS] "${optStr}" -> open: ${openCount}, close: ${closeCount}`);
    }
  }
}
process.exit(0);
