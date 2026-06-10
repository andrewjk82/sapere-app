import { Y10_CH15C_QUESTIONS } from '../src/constants/seedYear10Ch15CQuestions.js';

const q = Y10_CH15C_QUESTIONS[0];
let str = q.question;

console.log("=== TEST 1: Already in \\(...\\) ===");
const before1 = str;
const re = /(?<!\$|\\\\|\\[)\\\begin\{(aligned|aligned\*|align|align\*|alignedat|array|cases|matrix|pmatrix|bmatrix|vmatrix|Bmatrix|gathered|gather|split)\}[\s\S]*?\\\end\{\1\}(?!\$|\\\\|\\])/g;
// Can't test from here easily because the escape sequences are complex.
// Let's just test by running the actual toDisplayText function
