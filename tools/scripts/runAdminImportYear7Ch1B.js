import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

export const allQuestions = [
  // ==========================================
  // QUESTION 1: MENTAL ADDITION STRATEGIES (Q1a - Q1f)
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental addition strategies: $34 + 57 + 26$',
    answer: '117',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Group friendly numbers.</strong><br>Look for numbers whose units digits add up to $10$. Here, $34$ and $26$ are a great pair because $4 + 6 = 10$.</p><p><strong>Step 2: Add the paired numbers.</strong><br>$$34 + 26 = 60$$</p><p><strong>Step 3: Add the remaining number.</strong><br>$$60 + 57 = 117$$</p><p>Therefore, the total sum is $117$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental addition strategies: $32 + 19 + 18$',
    answer: '69',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Group friendly numbers.</strong><br>Combine $32$ and $18$ first, as $2 + 8 = 10$, which makes addition much easier.</p><p><strong>Step 2: Add the paired numbers.</strong><br>$$32 + 18 = 50$$</p><p><strong>Step 3: Add the remaining number.</strong><br>$$50 + 19 = 69$$</p><p>Therefore, the sum is $69$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental addition strategies: $43 + 34 + 66$',
    answer: '143',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Group friendly numbers.</strong><br>Identify the pair that forms a multiple of $100$. Here, $34 + 66 = 100$.</p><p><strong>Step 2: Add the paired numbers.</strong><br>$$34 + 66 = 100$$</p><p><strong>Step 3: Add the remaining number.</strong><br>$$100 + 43 = 143$$</p><p>Therefore, the sum is $143$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental addition strategies: $48 + 13 + 27 + 12$',
    answer: '100',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Group friendly numbers into pairs.</strong><br>Pair numbers that add up to multiples of $10$:<br>• Pair 1: $(48 + 12)$ because $8 + 2 = 10$<br>• Pair 2: $(13 + 27)$ because $3 + 7 = 10$</p><p><strong>Step 2: Add the pairs.</strong><br>$$48 + 12 = 60$$<br>$$13 + 27 = 40$$</p><p><strong>Step 3: Find the total sum.</strong><br>$$60 + 40 = 100$$</p><p>Therefore, the sum is $100$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental addition strategies: $47 + 18 + 82 + 23$',
    answer: '170',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Group friendly numbers into pairs.</strong><br>Group numbers that naturally sum to round numbers:<br>• Pair 1: $(47 + 23) = 70$<br>• Pair 2: $(18 + 82) = 100$</p><p><strong>Step 2: Add the results of the two pairs.</strong><br>$$70 + 100 = 170$$</p><p>Therefore, the sum is $170$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental addition strategies: $98 + 36 + 12 + 44$',
    answer: '190',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Group friendly numbers into pairs.</strong><br>Find pairs that form clean tens values:<br>• Pair 1: $(98 + 12)$ because $8 + 2 = 10$<br>• Pair 2: $(36 + 44)$ because $6 + 4 = 10$</p><p><strong>Step 2: Add the pairs.</strong><br>$$98 + 12 = 110$$<br>$$36 + 44 = 80$$</p><p><strong>Step 3: Add the two partial sums.</strong><br>$$110 + 80 = 190$$</p><p>Therefore, the sum is $190$.</p></div>',
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // QUESTION 2: STANDARD ADDITION ALGORITHM (Q2a - Q2f)
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate using the addition algorithm: $784 + 158$',
    answer: '942',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up the column addition.</strong><br>Align the numbers by their place values (Units, Tens, Hundreds):</p><pre style="font-family: monospace; line-height: 1.2;">  7 8 4\n+ 1 5 8\n-------</pre><p><strong>Step 2: Add the Units column.</strong><br>$$4 + 8 = 12$$<br>Write down $2$ in the Units place and carry over $1$ to the Tens column.</p><p><strong>Step 3: Add the Tens column (including the carry-over).</strong><br>$$8 + 5 + 1\\text{ (carry)} = 14$$<br>Write down $4$ in the Tens place and carry over $1$ to the Hundreds column.</p><p><strong>Step 4: Add the Hundreds column (including the carry-over).</strong><br>$$7 + 1 + 1\\text{ (carry)} = 9$$<br>Write down $9$ in the Hundreds place.</p><pre style="font-family: monospace; line-height: 1.2;">  7 8 4\n+ 1 5 8\n-------\n  9 4 2</pre><p>Therefore, the sum is $942$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using the addition algorithm: $4857 + 4736$',
    answer: '9593',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up vertical column addition.</strong><br>Align by place value:</p><pre style="font-family: monospace; line-height: 1.2;">  4 8 5 7\n+ 4 7 3 6\n---------</pre><p><strong>Step 2: Add column by column from right to left.</strong><br>• <strong>Units</strong>: $7 + 6 = 13 \\rightarrow$ Write $3$, carry $1$.<br>• <strong>Tens</strong>: $5 + 3 + 1\\text{ (carry)} = 9 \\rightarrow$ Write $9$.<br>• <strong>Hundreds</strong>: $8 + 7 = 15 \\rightarrow$ Write $5$, carry $1$.<br>• <strong>Thousands</strong>: $4 + 4 + 1\\text{ (carry)} = 9 \\rightarrow$ Write $9$.</p><pre style="font-family: monospace; line-height: 1.2;">  4 8 5 7\n+ 4 7 3 6\n---------\n  9 5 9 3</pre><p>Therefore, the sum is $9593$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using the addition algorithm: $2088 + 3047 + 5679$',
    answer: '10814',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up the addition of three numbers.</strong><br>Align by place value:</p><pre style="font-family: monospace; line-height: 1.2;">  2 0 8 8\n  3 0 4 7\n+ 5 6 7 9\n---------</pre><p><strong>Step 2: Add from right to left.</strong><br>• <strong>Units</strong>: $8 + 7 + 9 = 24 \\rightarrow$ Write $4$, carry $2$.<br>• <strong>Tens</strong>: $8 + 4 + 7 + 2\\text{ (carry)} = 21 \\rightarrow$ Write $1$, carry $2$.<br>• <strong>Hundreds</strong>: $0 + 0 + 6 + 2\\text{ (carry)} = 8 \\rightarrow$ Write $8$.<br>• <strong>Thousands</strong>: $2 + 3 + 5 = 10 \\rightarrow$ Write $10$.</p><pre style="font-family: monospace; line-height: 1.2;">  2 0 8 8\n  3 0 4 7\n+ 5 6 7 9\n---------\n 10 8 1 4</pre><p>Therefore, the sum is $10814$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate using the addition algorithm: $48 + 730 + 95$',
    answer: '873',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Arrange vertically.</strong><br>Align Units under Units, Tens under Tens, etc.:</p><pre style="font-family: monospace; line-height: 1.2;">    4 8\n  7 3 0\n+   9 5\n-------</pre><p><strong>Step 2: Add columns from right to left.</strong><br>• <strong>Units</strong>: $8 + 0 + 5 = 13 \\rightarrow$ Write $3$, carry $1$.<br>• <strong>Tens</strong>: $4 + 3 + 9 + 1\\text{ (carry)} = 17 \\rightarrow$ Write $7$, carry $1$.<br>• <strong>Hundreds</strong>: $7 + 1\\text{ (carry)} = 8 \\rightarrow$ Write $8$.</p><pre style="font-family: monospace; line-height: 1.2;">    4 8\n  7 3 0\n+   9 5\n-------\n  8 7 3</pre><p>Therefore, the sum is $873$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using the addition algorithm: $207 + 58 + 39965$',
    answer: '40230',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up the vertical addition.</strong><br>Make sure the place values are aligned correctly:</p><pre style="font-family: monospace; line-height: 1.2;">      2 0 7\n        5 8\n+ 3 9 9 6 5\n-----------</pre><p><strong>Step 2: Add the columns.</strong><br>• <strong>Units</strong>: $7 + 8 + 5 = 20 \\rightarrow$ Write $0$, carry $2$.<br>• <strong>Tens</strong>: $0 + 5 + 6 + 2\\text{ (carry)} = 13 \\rightarrow$ Write $3$, carry $1$.<br>• <strong>Hundreds</strong>: $2 + 9 + 1\\text{ (carry)} = 12 \\rightarrow$ Write $2$, carry $1$.<br>• <strong>Thousands</strong>: $9 + 1\\text{ (carry)} = 10 \\rightarrow$ Write $0$, carry $1$.<br>• <strong>Ten Thousands</strong>: $3 + 1\\text{ (carry)} = 4 \\rightarrow$ Write $4$.</p><pre style="font-family: monospace; line-height: 1.2;">      2 0 7\n        5 8\n+ 3 9 9 6 5\n-----------\n  4 0 2 3 0</pre><p>Therefore, the sum is $40230$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using standard addition algorithm: $546 + 999 + 2045$',
    answer: '3590',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up vertical column addition.</strong><br>Align by place value:</p><pre style="font-family: monospace; line-height: 1.2;">    5 4 6\n    9 9 9\n+ 2 0 4 5\n---------</pre><p><strong>Step 2: Add column by column from right to left.</strong><br>• <strong>Units</strong>: $6 + 9 + 5 = 20 \\rightarrow$ Write $0$, carry $2$.<br>• <strong>Tens</strong>: $4 + 9 + 4 + 2\\text{ (carry)} = 19 \\rightarrow$ Write $9$, carry $1$.<br>• <strong>Hundreds</strong>: $5 + 9 + 0 + 1\\text{ (carry)} = 15 \\rightarrow$ Write $5$, carry $1$.<br>• <strong>Thousands</strong>: $2 + 1\\text{ (carry)} = 3 \\rightarrow$ Write $3$.</p><pre style="font-family: monospace; line-height: 1.2;">    5 4 6\n    9 9 9\n+ 2 0 4 5\n---------\n  3 5 9 0</pre><p>Therefore, the sum is $3590$.</p></div>',
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // QUESTION 3: STANDARD SUBTRACTION ALGORITHM (Q3a - Q3i)
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $967 - 403$',
    answer: '564',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Align column subtraction.</strong><br></p><pre style="font-family: monospace; line-height: 1.2;">  9 6 7\n- 4 0 3\n-------</pre><p><strong>Step 2: Subtract columns from right to left.</strong><br>• <strong>Units</strong>: $7 - 3 = 4$<br>• <strong>Tens</strong>: $6 - 0 = 6$<br>• <strong>Hundreds</strong>: $9 - 4 = 5$</p><pre style="font-family: monospace; line-height: 1.2;">  9 6 7\n- 4 0 3\n-------\n  5 6 4</pre><p>Therefore, the difference is $564$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $12986 - 11444$',
    answer: '1542',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up vertical subtraction.</strong><br></p><pre style="font-family: monospace; line-height: 1.2;">  1 2 9 8 6\n- 1 1 4 4 4\n-----------</pre><p><strong>Step 2: Subtract from right to left.</strong><br>• <strong>Units</strong>: $6 - 4 = 2$<br>• <strong>Tens</strong>: $8 - 4 = 4$<br>• <strong>Hundreds</strong>: $9 - 4 = 5$<br>• <strong>Thousands</strong>: $2 - 1 = 1$<br>• <strong>Ten Thousands</strong>: $1 - 1 = 0$</p><pre style="font-family: monospace; line-height: 1.2;">  1 2 9 8 6\n- 1 1 4 4 4\n-----------\n    1 5 4 2</pre><p>Therefore, the difference is $1542$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $587 - 485$',
    answer: '102',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Arrange vertically.</strong><br></p><pre style="font-family: monospace; line-height: 1.2;">  5 8 7\n- 4 8 5\n-------</pre><p><strong>Step 2: Subtract columns.</strong><br>• <strong>Units</strong>: $7 - 5 = 2$<br>• <strong>Tens</strong>: $8 - 8 = 0$<br>• <strong>Hundreds</strong>: $5 - 4 = 1$</p><pre style="font-family: monospace; line-height: 1.2;">  5 8 7\n- 4 8 5\n-------\n  1 0 2</pre><p>Therefore, the difference is $102$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $345 - 297$',
    answer: '48',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Arrange vertically.</strong><br>Note that borrowing is required:</p><pre style="font-family: monospace; line-height: 1.2;">  3 4 5\n- 2 9 7\n-------</pre><p><strong>Step 2: Subtract columns with borrowing.</strong><br>• <strong>Units</strong>: $5 < 7$. Borrow $1$ from the Tens column ($4 \\rightarrow 3$, making the Units digit $15$). Now, $15 - 7 = 8$.<br>• <strong>Tens</strong>: We now have $3$ in the Tens column, and $3 < 9$. Borrow $1$ from Hundreds ($3 \\rightarrow 2$, making Tens digit $13$). Now, $13 - 9 = 4$.<br>• <strong>Hundreds</strong>: $2 - 2 = 0$.</p><pre style="font-family: monospace; line-height: 1.2;">  3 4 5\n- 2 9 7\n-------\n    4 8</pre><p>Therefore, the difference is $48$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $1504 - 1476$',
    answer: '28',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Arrange vertically.</strong><br></p><pre style="font-family: monospace; line-height: 1.2;">  1 5 0 4\n- 1 4 7 6\n---------</pre><p><strong>Step 2: Subtract columns (borrowing required).</strong><br>• <strong>Units</strong>: $4 < 6$. Borrow $1$ from Tens. Since Tens is $0$, we must first borrow $1$ from Hundreds ($5 \\rightarrow 4$, making Tens $10$). Now borrow $1$ from Tens ($10 \\rightarrow 9$, making Units $14$).<br>• <strong>Units subtraction</strong>: $14 - 6 = 8$.<br>• <strong>Tens subtraction</strong>: $9 - 7 = 2$.<br>• <strong>Hundreds subtraction</strong>: $4 - 4 = 0$.<br>• <strong>Thousands subtraction</strong>: $1 - 1 = 0$.</p><pre style="font-family: monospace; line-height: 1.2;">  1 5 0 4\n- 1 4 7 6\n---------\n      2 8</pre><p>Therefore, the difference is $28$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $19554 - 9867$',
    answer: '9687',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Arrange vertically.</strong><br></p><pre style="font-family: monospace; line-height: 1.2;">  1 9 5 5 4\n-   9 8 6 7\n-----------</pre><p><strong>Step 2: Subtract with borrowing.</strong><br>• <strong>Units</strong>: $4 < 7$. Borrow $1$ from Tens ($5 \\rightarrow 4$), making Units $14$. $14 - 7 = 7$.<br>• <strong>Tens</strong>: We now have $4 < 6$. Borrow $1$ from Hundreds ($5 \\rightarrow 4$), making Tens $14$. $14 - 6 = 8$.<br>• <strong>Hundreds</strong>: We now have $4 < 8$. Borrow $1$ from Thousands ($9 \\rightarrow 8$), making Hundreds $14$. $14 - 8 = 6$.<br>• <strong>Thousands</strong>: We now have $8 < 9$. Borrow $1$ from Ten Thousands ($1 \\rightarrow 0$), making Thousands $18$. $18 - 9 = 9$.</p><pre style="font-family: monospace; line-height: 1.2;">  1 9 5 5 4\n-   9 8 6 7\n-----------\n    9 6 8 7</pre><p>Therefore, the difference is $9687$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $1000 - 386$',
    answer: '614',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Arrange vertically.</strong><br></p><pre style="font-family: monospace; line-height: 1.2;">  1 0 0 0\n-   3 8 6\n---------</pre><p><strong>Step 2: Perform across-zero borrowing.</strong><br>Borrow $1$ all the way from the Thousands column ($1 \\rightarrow 0$), which propagates to make the Hundreds $9$, Tens $9$, and Units $10$.<br>• <strong>Units</strong>: $10 - 6 = 4$<br>• <strong>Tens</strong>: $9 - 8 = 1$<br>• <strong>Hundreds</strong>: $9 - 3 = 6$</p><pre style="font-family: monospace; line-height: 1.2;">  1 0 0 0\n-   3 8 6\n---------\n    6 1 4</pre><p>Therefore, the difference is $614$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $20015 - 19999$',
    answer: '16',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Arrange vertically.</strong><br></p><pre style="font-family: monospace; line-height: 1.2;">  2 0 0 1 5\n- 1 9 9 9 9\n-----------</pre><p><strong>Step 2: Subtract with borrowing.</strong><br>• <strong>Units</strong>: $5 < 9$. Borrow $1$ from Tens ($1 \\rightarrow 0$), making Units $15$. $15 - 9 = 6$.<br>• <strong>Tens</strong>: We now have $0 < 9$. Borrow $1$ across the Hundreds and Thousands from the Thousands ($200 \\rightarrow 199$), making Tens $10$. $10 - 9 = 1$.<br>• <strong>Hundreds</strong>: $9 - 9 = 0$.<br>• <strong>Thousands</strong>: $9 - 9 = 0$.<br>• <strong>Ten Thousands</strong>: $1 - 1 = 0$.</p><pre style="font-family: monospace; line-height: 1.2;">  2 0 0 1 5\n- 1 9 9 9 9\n-----------\n          1 6</pre><p>Alternatively, notice that $20015$ is exactly $16$ greater than $19999$ since $19999 + 1 = 20000$ and $20000 + 15 = 20015$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $20202 - 18306$',
    answer: '1896',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Arrange vertically.</strong><br></p><pre style="font-family: monospace; line-height: 1.2;">  2 0 2 0 2\n- 1 8 3 0 6\n-----------</pre><p><strong>Step 2: Perform column subtraction.</strong><br>• <strong>Units</strong>: $2 < 6$. Borrow $1$ from Tens. Since Tens is $0$, borrow from Hundreds ($2 \\rightarrow 1$, Tens becomes $10$, then borrow to make Tens $9$ and Units $12$). $12 - 6 = 6$.<br>• <strong>Tens</strong>: $9 - 0 = 9$.<br>• <strong>Hundreds</strong>: We now have $1 < 3$. Borrow $1$ from Thousands. Since Thousands is $0$, borrow from Ten Thousands ($2 \\rightarrow 1$, Thousands becomes $10$, then borrow to make Thousands $9$ and Hundreds $11$). $11 - 3 = 8$.<br>• <strong>Thousands</strong>: $9 - 8 = 1$.<br>• <strong>Ten Thousands</strong>: $1 - 1 = 0$.</p><pre style="font-family: monospace; line-height: 1.2;">  2 0 2 0 2\n- 1 8 3 0 6\n-----------\n    1 8 9 6</pre><p>Therefore, the difference is $1896$.</p></div>',
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // QUESTION 4 & 5: WORD PROBLEMS - ADDITION
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Liam earned $\\$138$, $\\$246$, $\\$162$, and $\\$175$ over four Saturdays mowing lawns. How much did he earn in total?',
    answer: '721',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up the sum of earnings.</strong><br>We need to add: $\\$138 + \\$246 + \\$162 + \\$175$.</p><p><strong>Step 2: Group friendly numbers to add mentally.</strong><br>Notice that the Units digits of $138$ and $162$ add up to $10$ ($8 + 2 = 10$). Let\'s pair them:<br>$$138 + 162 = 300$$</p><p><strong>Step 3: Add the remaining values.</strong><br>Now add $246$ and $175$:<br>$$246 + 175 = 421$$</p><p><strong>Step 4: Combine the sums.</strong><br>$$300 + 421 = 721$$</p><p>Liam earned a total of $\\$721$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'The lengths of fabric required for five new curtains were $14\\text{ m}$, $36\\text{ m}$, $86\\text{ m}$, $19\\text{ m}$, and $81\\text{ m}$. What total length of fabric was required for all the curtains?',
    answer: '236',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up the addition of all lengths.</strong><br>Total length = $14 + 36 + 86 + 19 + 81$</p><p><strong>Step 2: Identify pairs that sum to multiples of 100.</strong><br>• Pair 1: $14\\text{ m}$ and $86\\text{ m} \\rightarrow 14 + 86 = 100\\text{ m}$<br>• Pair 2: $19\\text{ m}$ and $81\\text{ m} \\rightarrow 19 + 81 = 100\\text{ m}$</p><p><strong>Step 3: Combine all sums.</strong><br>$$100 + 100 + 36 = 236\\text{ m}$$</p><p>The total length of fabric required is $236\\text{ m}$.</p></div>',
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // QUESTION 6 & 7: WORD PROBLEMS - SUBTRACTION & COMPARISON
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'The distance from Town A to Town B is $1680\\text{ km}$, and the distance from Town A to Town C via Town B is $3120\\text{ km}$. What is the distance between Town B and Town C?',
    answer: '1440',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Understand the route layout.</strong><br>The journey goes from Town A $\\rightarrow$ Town B $\\rightarrow$ Town C.<br>• Distance $A \\rightarrow B = 1680\\text{ km}$<br>• Total distance $A \\rightarrow B \\rightarrow C = 3120\\text{ km}$</p><p><strong>Step 2: Formulate the subtraction.</strong><br>To find the distance between Town B and Town C, subtract the distance of the first leg from the total distance:<br>$$\\text{Distance } B \\rightarrow C = 3120 - 1680$$</p><p><strong>Step 3: Calculate the difference.</strong><br>Using column subtraction:<br>$$3120 - 1680 = 1440\\text{ km}$$</p><p>The distance between Town B and Town C is $1440\\text{ km}$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Jacqui is $186\\text{ cm}$ tall and David is $154\\text{ cm}$ tall. How much taller is Jacqui than David?',
    answer: '32',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Compare heights.</strong><br>We need to find the difference between Jacqui\'s height ($186\\text{ cm}$) and David\'s height ($154\\text{ cm}$).</p><p><strong>Step 2: Subtract the heights.</strong><br>$$186 - 154 = 32\\text{ cm}$$</p><p>Jacqui is $32\\text{ cm}$ taller than David.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Jacqui is $186\\text{ cm}$ tall and Adrian is $149\\text{ cm}$ tall. How much taller is Jacqui than Adrian?',
    answer: '37',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Compare heights.</strong><br>We need to find the difference between Jacqui\'s height ($186\\text{ cm}$) and Adrian\'s height ($149\\text{ cm}$).</p><p><strong>Step 2: Subtract the heights (with borrowing).</strong><br>$$186 - 149 = 37\\text{ cm}$$</p><p>Jacqui is $37\\text{ cm}$ taller than Adrian.</p></div>',
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // QUESTION 8: COMPARISON STATEMENTS (Q8a - Q8d)
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Choose the correct symbol to make the statement true: $54 + 8 \\quad \\square \\quad 31 + 31$',
    options: ['$<$', '$>$', '$=$'],
    answer: 2,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Calculate the value on the left-hand side (LHS).</strong><br>$$LHS = 54 + 8 = 62$$</p><p><strong>Step 2: Calculate the value on the right-hand side (RHS).</strong><br>$$RHS = 31 + 31 = 62$$</p><p><strong>Step 3: Compare LHS and RHS.</strong><br>Since $62 = 62$, the correct symbol is **$=$**.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Choose the correct symbol to make the statement true: $74 - 18 \\quad \\square \\quad 27 + 28$',
    options: ['$<$', '$>$', '$=$'],
    answer: 1,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Calculate the Left-Hand Side (LHS).</strong><br>$$LHS = 74 - 18 = 56$$</p><p><strong>Step 2: Calculate the Right-Hand Side (RHS).</strong><br>$$RHS = 27 + 28 = 55$$</p><p><strong>Step 3: Compare the values.</strong><br>Since $56 > 55$, the correct symbol is **$>$**.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Choose the correct symbol to make the statement true: $24 + 24 + 24 \\quad \\square \\quad 23 + 24 + 25$',
    options: ['$<$', '$>$', '$=$'],
    answer: 2,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Evaluate the Left-Hand Side (LHS).</strong><br>$$LHS = 24 + 24 + 24 = 24 \\times 3 = 72$$</p><p><strong>Step 2: Evaluate the Right-Hand Side (RHS).</strong><br>$$RHS = 23 + 24 + 25 = 72$$<br>*(Notice that $23$ is $1$ less than $24$, and $25$ is $1$ more than $24$, balancing out to exactly $24 \\times 3$).*</p><p><strong>Step 3: Compare LHS and RHS.</strong><br>Since $72 = 72$, the correct symbol is **$=$**.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Choose the correct symbol to make the statement true: $397 + 452 \\quad \\square \\quad 1000 - 152$',
    options: ['$<$', '$>$', '$=$'],
    answer: 1,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Calculate the Left-Hand Side (LHS).</strong><br>$$397 + 452 = 849$$</p><p><strong>Step 2: Calculate the Right-Hand Side (RHS).</strong><br>$$1000 - 152 = 848$$</p><p><strong>Step 3: Compare LHS and RHS.</strong><br>Since $849 > 848$, the correct symbol is **$>$**.</p></div>',
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // QUESTION 9: ADVANCED MENTAL MULTIPLICATION STRATEGIES (Q9a - Q9f)
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental strategies: $38 \\times 6 + 38 \\times 94$',
    answer: '3800',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Apply the distributive law.</strong><br>Notice that both terms share a factor of $38$. We can factor it out:<br>$$38 \\times 6 + 38 \\times 94 = 38 \\times (6 + 94)$$</p><p><strong>Step 2: Simplify inside the parentheses.</strong><br>$$6 + 94 = 100$$</p><p><strong>Step 3: Perform the final multiplication.</strong><br>$$38 \\times 100 = 3800$$</p><p>The value of the expression is $3800$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental strategies: $5 \\times 76 \\times 2$',
    answer: '760',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Use the commutative property of multiplication.</strong><br>Reorder the factors to group numbers that multiply to a multiple of $10$:<br>$$5 \\times 76 \\times 2 = (5 \\times 2) \\times 76$$</p><p><strong>Step 2: Multiply the friendly numbers.</strong><br>$$5 \\times 2 = 10$$</p><p><strong>Step 3: Multiply by the remaining factor.</strong><br>$$10 \\times 76 = 760$$</p><p>The value is $760$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental strategies: $4 \\times 59 \\times 25$',
    answer: '5900',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Reorder factors.</strong><br>Reorder the factors to make a power of $100$:<br>$$4 \\times 25 \\times 59 = (4 \\times 25) \\times 59$$</p><p><strong>Step 2: Perform the first multiplication.</strong><br>$$4 \\times 25 = 100$$</p><p><strong>Step 3: Multiply by 59.</strong><br>$$100 \\times 59 = 5900$$</p><p>The value is $5900$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental strategies: $125 \\times 14$',
    answer: '1750',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Decompose the multiplication.</strong><br>Break down $14$ into $2 \\times 7$ to exploit the properties of $125$:<br>$$125 \\times 14 = 125 \\times 2 \\times 7$$</p><p><strong>Step 2: Multiply 125 by 2.</strong><br>$$125 \\times 2 = 250$$</p><p><strong>Step 3: Multiply 250 by 7.</strong><br>$$250 \\times 7 = (200 \\times 7) + (50 \\times 7) = 1400 + 350 = 1750$$</p><p>The value is $1750$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental strategies: $247 \\times 6$',
    answer: '1482',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Rewrite using subtraction.</strong><br>Write $247$ as $(250 - 3)$ to use friendlier numbers:<br>$$247 \\times 6 = (250 - 3) \\times 6$$</p><p><strong>Step 2: Apply the distributive law.</strong><br>$$250 \\times 6 - 3 \\times 6$$</p><p><strong>Step 3: Simplify the terms.</strong><br>• $250 \\times 6 = 1500$<br>• $3 \\times 6 = 18$</p><p><strong>Step 4: Subtract to find the final result.</strong><br>$$1500 - 18 = 1482$$</p><p>The value is $1482$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using mental strategies: $142 \\times 15$',
    answer: '2130',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Break down 15.</strong><br>Write $15$ as $(10 + 5)$ or utilize the halving and doubling method:<br>$$\\text{Double } 15 \\rightarrow 30 \\quad \\text{and} \\quad \\text{Halve } 142 \\rightarrow 71$$<br>$$142 \\times 15 = 71 \\times 30$$</p><p><strong>Step 2: Perform the simplified multiplication.</strong><br>$$71 \\times 3 = 213$$<br>$$71 \\times 30 = 2130$$</p><p>The value is $2130$.</p></div>',
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // QUESTION 10: MULTIPLICATION ALGORITHMS (Q10a - Q10o)
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Calculate: $36 \\times 8$',
    answer: '288',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up short multiplication.</strong><br>Multiply $36$ by $8$ column by column:<br>• $6 \\times 8 = 48 \\rightarrow$ Write $8$, carry $4$.<br>• $3 \\times 8 + 4\\text{ (carry)} = 24 + 4 = 28 \\rightarrow$ Write $28$.</p><p>Therefore, the product is $288$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Calculate: $76 \\times 9$',
    answer: '684',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up column multiplication.</strong><br>Multiply column by column:<br>• $6 \\times 9 = 54 \\rightarrow$ Write $4$, carry $5$.<br>• $7 \\times 9 + 5\\text{ (carry)} = 63 + 5 = 68 \\rightarrow$ Write $68$.</p><p>The product is $684$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Calculate: $54 \\times 7$',
    answer: '378',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Multiply step-by-step.</strong><br>• $4 \\times 7 = 28 \\rightarrow$ Write $8$, carry $2$.<br>• $5 \\times 7 + 2\\text{ (carry)} = 35 + 2 = 37 \\rightarrow$ Write $37$.</p><p>The product is $378$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Calculate: $297 \\times 6$',
    answer: '1782',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform vertical multiplication.</strong><br>Multiply each digit of $297$ by $6$:<br>• $7 \\times 6 = 42 \\rightarrow$ Write $2$, carry $4$.<br>• $9 \\times 6 + 4\\text{ (carry)} = 54 + 4 = 58 \\rightarrow$ Write $8$, carry $5$.<br>• $2 \\times 6 + 5\\text{ (carry)} = 12 + 5 = 17 \\rightarrow$ Write $17$.</p><p>The product is $1782$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Calculate: $2045 \\times 8$',
    answer: '16360',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform vertical multiplication.</strong><br>• $5 \\times 8 = 40 \\rightarrow$ Write $0$, carry $4$.<br>• $4 \\times 8 + 4 = 36 \\rightarrow$ Write $6$, carry $3$.<br>• $0 \\times 8 + 3 = 3 \\rightarrow$ Write $3$.<br>• $2 \\times 8 = 16 \\rightarrow$ Write $16$.</p><p>The product is $16360$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Calculate: $34568 \\times 4$',
    answer: '138272',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform the multiplication columns.</strong><br>• $8 \\times 4 = 32 \\rightarrow$ Write $2$, carry $3$.<br>• $6 \\times 4 + 3 = 27 \\rightarrow$ Write $7$, carry $2$.<br>• $5 \\times 4 + 2 = 22 \\rightarrow$ Write $2$, carry $2$.<br>• $4 \\times 4 + 2 = 18 \\rightarrow$ Write $8$, carry $1$.<br>• $3 \\times 4 + 1 = 13 \\rightarrow$ Write $13$.</p><p>The product is $138272$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Calculate: $444 \\times 22$',
    answer: '9768',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up long multiplication.</strong><br>$$\\begin{array}{c@{\\quad}r} & 444 \\\\ \\times & 22 \\\\ \\hline & 888 \\quad (444 \\times 2) \\\\ + & 8880 \\quad (444 \\times 20) \\\\ \\hline & 9768 \\end{array}$$</p><p>The product is $9768$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Calculate: $5343 \\times 12$',
    answer: '64116',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Use long multiplication.</strong><br>$$\\begin{array}{c@{\\quad}r} & 5343 \\\\ \\times & 12 \\\\ \\hline & 10686 \\quad (5343 \\times 2) \\\\ + & 53430 \\quad (5343 \\times 10) \\\\ \\hline & 64116 \\end{array}$$</p><p>The product is $64116$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Calculate: $312 \\times 24$',
    answer: '7488',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform vertical multiplication.</strong><br>$$\\begin{array}{c@{\\quad}r} & 312 \\\\ \\times & 24 \\\\ \\hline & 1248 \\quad (312 \\times 4) \\\\ + & 6240 \\quad (312 \\times 20) \\\\ \\hline & 7488 \\end{array}$$</p><p>The product is $7488$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Calculate: $825 \\times 36$',
    answer: '29700',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up long multiplication.</strong><br>$$\\begin{array}{c@{\\quad}r} & 825 \\\\ \\times & 36 \\\\ \\hline & 4950 \\quad (825 \\times 6) \\\\ + & 24750 \\quad (825 \\times 30) \\\\ \\hline & 29700 \\end{array}$$</p><p>The product is $29700$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: 'Calculate: $64328 \\times 34$',
    answer: '2187152',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform multi-digit multiplication.</strong><br>$$\\begin{array}{c@{\\quad}r} & 64328 \\\\ \\times & 34 \\\\ \\hline & 257312 \\quad (64328 \\times 4) \\\\ + & 1929840 \\quad (64328 \\times 30) \\\\ \\hline & 2187152 \\end{array}$$</p><p>The product is $2187152$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: 'Calculate: $40835 \\times 28$',
    answer: '1143380',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up vertical multiplication.</strong><br>$$\\begin{array}{c@{\\quad}r} & 40835 \\\\ \\times & 28 \\\\ \\hline & 326680 \\quad (40835 \\times 8) \\\\ + & 816700 \\quad (40835 \\times 20) \\\\ \\hline & 1143380 \\end{array}$$</p><p>The product is $1143380$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: 'Calculate: $840 \\times 275$',
    answer: '231000',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Multiply 3-digit by 3-digit.</strong><br>$$\\begin{array}{c@{\\quad}r} & 840 \\\\ \\times & 275 \\\\ \\hline & 4200 \\quad (840 \\times 5) \\\\ & 58800 \\quad (840 \\times 70) \\\\ + & 168000 \\quad (840 \\times 200) \\\\ \\hline & 231000 \\end{array}$$</p><p>The product is $231000$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: 'Calculate: $382 \\times 194$',
    answer: '74108',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform the column multiplication.</strong><br>$$\\begin{array}{c@{\\quad}r} & 382 \\\\ \\times & 194 \\\\ \\hline & 1528 \\quad (382 \\times 4) \\\\ & 34380 \\quad (382 \\times 90) \\\\ + & 38200 \\quad (382 \\times 100) \\\\ \\hline & 74108 \\end{array}$$</p><p>The product is $74108$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: 'Calculate: $6473 \\times 3814$',
    answer: '24687922',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform long multiplication.</strong><br>$$\\begin{array}{c@{\\quad}r} & 6473 \\\\ \\times & 3814 \\\\ \\hline & 25892 \\quad (6473 \\times 4) \\\\ & 64730 \\quad (6473 \\times 10) \\\\ & 5178400 \\quad (6473 \\times 800) \\\\ + & 19419000 \\quad (6473 \\times 3000) \\\\ \\hline & 24687922 \\end{array}$$</p><p>The product is $24687922$.</p></div>',
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // QUESTIONS 11 - 14: WORD PROBLEMS - MULTIPLICATION
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'All of the $36$ rows of seats are filled for the school assembly. If there are $18$ seats in each row, how many people attend the assembly?',
    answer: '648',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up the multiplication.</strong><br>We need to multiply the number of rows ($36$) by the number of seats per row ($18$):<br>$$\\text{Total attendance} = 36 \\times 18$$</p><p><strong>Step 2: Calculate the product.</strong><br>$$36 \\times 18 = 36 \\times (20 - 2) = 720 - 72 = 648$$</p><p>A total of $648$ people attend the assembly.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Each of $42$ rabbit burrows has $15$ rabbits in it. What is the total number of rabbits?',
    answer: '630',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Identify key values.</strong><br>Number of burrows = $42$<br>Rabbits per burrow = $15$</p><p><strong>Step 2: Multiply the values.</strong><br>$$\\text{Total rabbits} = 42 \\times 15$$</p><p><strong>Step 3: Simplify mentally.</strong><br>$$42 \\times 15 = 42 \\times 10 + 42 \\times 5 = 420 + 210 = 630$$</p><p>There are $630$ rabbits in total.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Candies come in packets of $12$. There are $35$ packets in a box, and $24$ boxes in a carton. How many candies are there in each carton?',
    answer: '10080',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Formulate the equation.</strong><br>To find the total number of candies, multiply the quantities together:<br>$$\\text{Total candies} = 12 \\text{ per packet} \\times 35 \\text{ packets} \\times 24 \\text{ boxes}$$</p><p><strong>Step 2: Multiply step-by-step.</strong><br>• First: $12 \\times 35$<br>$$12 \\times 35 = 6 \\times 70 = 420$$<br>• Second: $420 \\times 24$<br>$$420 \\times 24 = 420 \\times (20 + 4) = 8400 + 1680 = 10080$$</p><p>There are $10080$ candies in each carton.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'A hotel has $18$ rooms on each floor. If the hotel consists of $4$ buildings, each with $25$ floors, how many rooms are there in total?',
    answer: '1800',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up the product.</strong><br>$$\\text{Total rooms} = 18 \\text{ rooms/floor} \\times 4 \\text{ buildings} \\times 25 \\text{ floors}$$</p><p><strong>Step 2: Rearrange to multiply friendly numbers first.</strong><br>Using associative and commutative properties:<br>$$\\text{Total rooms} = 18 \\times (4 \\times 25)$$</p><p><strong>Step 3: Simplify inside parentheses.</strong><br>$$4 \\times 25 = 100$$</p><p><strong>Step 4: Multiply by 18.</strong><br>$$18 \\times 100 = 1800$$</p><p>The hotel has $1800$ rooms in total.</p></div>',
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // QUESTION 15: DIVISION ALGORITHMS (Q15a - Q15r)
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $886 \\div 2$',
    answer: '443',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Divide each digit by 2.</strong><br>• Hundreds: $8 \\div 2 = 4$<br>• Tens: $8 \\div 2 = 4$<br>• Units: $6 \\div 2 = 3$</p><p>Combining these, $886 \\div 2 = 443$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $848 \\div 4$',
    answer: '212',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Divide each digit by 4.</strong><br>• Hundreds: $8 \\div 4 = 2$<br>• Tens: $4 \\div 4 = 1$<br>• Units: $8 \\div 4 = 2$</p><p>Thus, $848 \\div 4 = 212$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $936 \\div 3$',
    answer: '312',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Divide digit-by-digit.</strong><br>• Hundreds: $9 \\div 3 = 3$<br>• Tens: $3 \\div 3 = 1$<br>• Units: $6 \\div 3 = 2$</p><p>Therefore, $936 \\div 3 = 312$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $357 \\div 7$',
    answer: '51',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Use short division.</strong><br>• Divide $35$ by $7$: $35 \\div 7 = 5$.<br>• Divide $7$ by $7$: $7 \\div 7 = 1$.</p><p>Therefore, $357 \\div 7 = 51$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $328 \\div 8$',
    answer: '41',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Use short division.</strong><br>• Divide $32$ by $8$: $32 \\div 8 = 4$.<br>• Divide $8$ by $8$: $8 \\div 8 = 1$.</p><p>Therefore, $328 \\div 8 = 41$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $639 \\div 9$',
    answer: '71',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Use short division.</strong><br>• Divide $63$ by $9$: $63 \\div 9 = 7$.<br>• Divide $9$ by $9$: $9 \\div 9 = 1$.</p><p>Therefore, $639 \\div 9 = 71$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $258 \\div 3$',
    answer: '86',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform short division.</strong><br>• $25 \\div 3 = 8$ with a remainder of $1$ (carry $1$ to units to make $18$).<br>• $18 \\div 3 = 6$.</p><p>Therefore, $258 \\div 3 = 86$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $184 \\div 8$',
    answer: '23',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform short division.</strong><br>• $18 \\div 8 = 2$ with a remainder of $2$ (carry $2$ to units to make $24$).<br>• $24 \\div 8 = 3$.</p><p>Therefore, $184 \\div 8 = 23$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $477 \\div 9$',
    answer: '53',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform short division.</strong><br>• $47 \\div 9 = 5$ with a remainder of $2$ (carry $2$ to units to make $27$).<br>• $27 \\div 9 = 3$.</p><p>Therefore, $477 \\div 9 = 53$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $3224 \\div 8$',
    answer: '403',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Use short division.</strong><br>• $32 \\div 8 = 4$.<br>• $2 \\div 8 = 0$ remainder $2$ (carry $2$ to make $24$).<br>• $24 \\div 8 = 3$.</p><p>Therefore, $3224 \\div 8 = 403$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $2305 \\div 5$',
    answer: '461',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform short division.</strong><br>• $23 \\div 5 = 4$ remainder $3$ (carry $3$ to make $30$).<br>• $30 \\div 5 = 6$.<br>• $5 \\div 5 = 1$.</p><p>Therefore, $2305 \\div 5 = 461$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $3456 \\div 6$',
    answer: '576',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform short division.</strong><br>• $34 \\div 6 = 5$ remainder $4$ (carry $4$ to make $45$).<br>• $45 \\div 6 = 7$ remainder $3$ (carry $3$ to make $36$).<br>• $36 \\div 6 = 6$.</p><p>Therefore, $3456 \\div 6 = 576$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $832 \\div 8$',
    answer: '104',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform short division.</strong><br>• $8 \\div 8 = 1$.<br>• $3 \\div 8 = 0$ remainder $3$ (carry $3$ to make $32$).<br>• $32 \\div 8 = 4$.</p><p>Therefore, $832 \\div 8 = 104$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $960 \\div 8$',
    answer: '120',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform short division.</strong><br>• $9 \\div 8 = 1$ remainder $1$ (carry $1$ to make $16$).<br>• $16 \\div 8 = 2$.<br>• $0 \\div 8 = 0$.</p><p>Therefore, $960 \\div 8 = 120$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate: $728 \\div 7$',
    answer: '104',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform short division.</strong><br>• $7 \\div 7 = 1$.<br>• $2 \\div 7 = 0$ remainder $2$ (carry $2$ to make $28$).<br>• $28 \\div 7 = 4$.</p><p>Therefore, $728 \\div 7 = 104$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using short division: $7849 \\div 5$',
    options: ['$1569\\text{ remainder }4$', '$1569\\text{ remainder }2$', '$1568\\text{ remainder }4$', '$1570\\text{ remainder }1$'],
    answer: 0,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Set up short division.</strong><br>• $7 \\div 5 = 1$ remainder $2$ (carry $2$ to make $28$).<br>• $28 \\div 5 = 5$ remainder $3$ (carry $3$ to make $34$).<br>• $34 \\div 5 = 6$ remainder $4$ (carry $4$ to make $49$).<br>• $49 \\div 5 = 9$ remainder $4$.</p><p>Therefore, the result is $1569$ with a remainder of $4$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: 'Evaluate using short division: $39572 \\div 7$',
    options: ['$5653\\text{ remainder }1$', '$5653\\text{ remainder }3$', '$5652\\text{ remainder }1$', '$5654\\text{ remainder }2$'],
    answer: 0,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform short division.</strong><br>• $39 \\div 7 = 5$ remainder $4$ (carry $4$ to make $45$).<br>• $45 \\div 7 = 6$ remainder $3$ (carry $3$ to make $37$).<br>• $37 \\div 7 = 5$ remainder $2$ (carry $2$ to make $22$).<br>• $22 \\div 7 = 3$ remainder $1$.</p><p>Therefore, the quotient is $5653$ and the remainder is $1$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using short division: $48398 \\div 5$',
    options: ['$9679\\text{ remainder }3$', '$9679\\text{ remainder }1$', '$9678\\text{ remainder }3$', '$9680\\text{ remainder }2$'],
    answer: 0,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Perform short division.</strong><br>• $48 \\div 5 = 9$ remainder $3$ (carry $3$ to make $33$).<br>• $33 \\div 5 = 6$ remainder $3$ (carry $3$ to make $39$).<br>• $39 \\div 5 = 7$ remainder $4$ (carry $4$ to make $48$).<br>• $48 \\div 5 = 9$ remainder $3$.</p><p>Therefore, the result is $9679$ with a remainder of $3$.</p></div>',
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // QUESTION 16: ORDER OF OPERATIONS (BODMAS/BIDMAS)
  // ==========================================
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using the order of operations: $6 \\times 3 + 8 \\div 2 - 2$',
    answer: '20',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Recall the order of operations (BODMAS).</strong><br>We must perform Multiplication and Division from left to right, followed by Addition and Subtraction from left to right.</p><p><strong>Step 2: Perform Multiplication and Division.</strong><br>• $6 \\times 3 = 18$<br>• $8 \\div 2 = 4$<br>The expression becomes:<br>$$18 + 4 - 2$$</p><p><strong>Step 3: Perform Addition and Subtraction from left to right.</strong><br>• $18 + 4 = 22$<br>• $22 - 2 = 20$</p><p>Therefore, the final value is $20$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using the order of operations: $4 \\times (5 + 7) \\div 3 - 2$',
    answer: '14',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Solve inside the Brackets first.</strong><br>$$5 + 7 = 12$$<br>The expression becomes:<br>$$4 \\times 12 \\div 3 - 2$$</p><p><strong>Step 2: Perform Multiplication and Division from left to right.</strong><br>• $4 \\times 12 = 48$<br>• $48 \\div 3 = 16$<br>The expression becomes:<br>$$16 - 2$$</p><p><strong>Step 3: Perform subtraction.</strong><br>$$16 - 2 = 14$$</p><p>Therefore, the final value is $14$.</p></div>',
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: 'Evaluate using the order of operations: $6 \\times 4 + (12 \\div 3 - 2)$',
    answer: '26',
    solution: '<div style="text-align: left;"><p><strong>Step 1: Simplify inside the brackets first.</strong><br>Inside the brackets $(12 \\div 3 - 2)$, division comes first:<br>• $12 \\div 3 = 4$<br>Now subtract:<br>• $4 - 2 = 2$<br>The expression becomes:<br>$$6 \\times 4 + 2$$</p><p><strong>Step 2: Perform multiplication.</strong><br>$$6 \\times 4 = 24$$<br>The expression becomes:<br>$$24 + 2$$</p><p><strong>Step 3: Perform addition.</strong><br>$$24 + 2 = 26$$</p><p>Therefore, the final value is $26$.</p></div>',
    createdAt: new Date().toISOString()
  }
];

const runImport = async () => {
  console.log('[Ch1B Year 7 Admin Import] STARTING PHYSICAL SYNC...');
  let deletedCount = 0;
  let importedCount = 0;
  try {
    const qSnap = await db.collection('questions')
      .where('chapterId', '==', 'y7-1')
      .where('topicId', '==', 'y7-1b')
      .get();
      
    console.log(`[Ch1B] Found ${qSnap.size} existing questions to clear.`);
    
    // Batch deletes in chunks of 400 (Firestore limit is 500)
    let batch = db.batch();
    let count = 0;
    for (const doc of qSnap.docs) {
      batch.delete(doc.ref);
      count++;
      deletedCount++;
      if (count === 400) {
        await batch.commit();
        batch = db.batch();
        count = 0;
      }
    }
    if (count > 0) {
      await batch.commit();
    }
    console.log(`[Ch1B] Successfully cleared ${deletedCount} legacy questions.`);

    // Write all 76 questions
    for (const q of allQuestions) {
      await db.collection('questions').add(q);
      importedCount++;
    }
    console.log(`[Ch1B] Successfully synced ${importedCount} brand new premium questions.`);
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

runImport();
