import { Y10_CH15C_QUESTIONS } from '../src/constants/seedYear10Ch15CQuestions.js';

const q = Y10_CH15C_QUESTIONS[0];
let str = q.question;

console.log("=== ORIGINAL ===");
console.log(str);
console.log();

// Simulate the FIXED toDisplayText step 3a
const before = str;
str = str.replace(
  /(?<!\$|\\[(\[])\\begin\{(aligned|aligned\*|align|align\*|alignedat|array|cases|matrix|pmatrix|bmatrix|vmatrix|Bmatrix|gathered|gather|split)\}[\s\S]*?\\end\{\2\}(?!\$|\\[)\]])/g,
  (m) => '$$' + m + '$$',
);

if (str === before) {
  console.log("✅ Step 3a did NOT modify the string (correct! it's already in \\(...\\))");
} else {
  console.log("❌ Step 3a STILL modified the string:");
  console.log(str);
}

// Now test with a bare environment (no delimiters) to ensure it still wraps
console.log();
console.log("=== TEST BARE ENVIRONMENT ===");
let bare = "\\begin{array}{c|cc} & A & B \\\\ 1 & 2 \\end{array}";
console.log("Input:", bare);
bare = bare.replace(
  /(?<!\$|\\[(\[])\\begin\{(aligned|aligned\*|align|align\*|alignedat|array|cases|matrix|pmatrix|bmatrix|vmatrix|Bmatrix|gathered|gather|split)\}[\s\S]*?\\end\{\2\}(?!\$|\\[)\]])/g,
  (m) => '$$' + m + '$$',
);
console.log("Output:", bare);
if (bare.startsWith('$$')) {
  console.log("✅ Bare environment correctly wrapped in $$");
} else {
  console.log("❌ Bare environment NOT wrapped");
}
