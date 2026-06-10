import { Y10_CH15C_QUESTIONS } from '../src/constants/seedYear10Ch15CQuestions.js';

const q = Y10_CH15C_QUESTIONS[0];
const str = q.question;

console.log("=== ORIGINAL ===");
console.log(str);
console.log();

// Simulate toDisplayText step by step
let s = str;

// Step 1: Unicode substitutions (no effect here)
// Step 1b: Check for rich HTML
const hasHtml = /<\/(p|div|ul|ol|li|strong|em|h[1-6]|svg)>|<br\s*\/?>/i.test(s);
console.log("Has HTML?", hasHtml);

// Step 2: Double backslash fix
const before2 = s;
s = s.replace(/\\\\([a-zA-Z0-9])/g, '\\$1');
if (s !== before2) {
  console.log("=== AFTER STEP 2 (double backslash fix) - CHANGED! ===");
  console.log(s);
  console.log();
}

// Step 2b: Double backslash before parens
const before2b = s;
s = s.replace(/\\\\([\(\)\[\]])/g, '\\$1');
if (s !== before2b) {
  console.log("=== AFTER STEP 2b (double backslash parens) - CHANGED! ===");
  console.log(s);
  console.log();
}

// Step 3a: Wrap LaTeX environments
const before3a = s;
s = s.replace(
  /(?<!\$)\\begin\{(aligned|aligned\*|align|align\*|alignedat|array|cases|matrix|pmatrix|bmatrix|vmatrix|Bmatrix|gathered|gather|split)\}[\s\S]*?\\end\{\1\}(?!\$)/g,
  (m) => `$$${m}$$`,
);
if (s !== before3a) {
  console.log("=== AFTER STEP 3a (environment wrapping) - CHANGED! ===");
  console.log(s);
  console.log();
}

console.log("=== FINAL RESULT ===");
console.log(s);
