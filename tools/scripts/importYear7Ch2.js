import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import { allQuestions as questions2A } from './importYear7Ch2A.js';

export const allQuestions = [
  ...questions2A,
  // ==========================================
  // Q1: Find all factors of a number (y7-2a)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find all the factors of $42$.`,
    options: ["\\{1, 2, 3, 6, 7, 14, 21, 42\\}", "\\{1, 2, 3, 4, 6, 7, 14, 21, 42\\}", "\\{1, 2, 6, 7, 14, 42\\}", "\\{2, 3, 6, 7, 14, 21\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write down factor pairs</strong><br>Find pairs of whole numbers that multiply to $42$:</p><ul><li>$1 \\times 42 = 42$</li><li>$2 \\times 21 = 42$</li><li>$3 \\times 14 = 42$</li><li>$6 \\times 7 = 42$</li></ul><p><strong>Step 2: List the factors in order</strong><br>Combining these gives the complete set: $\\{1, 2, 3, 6, 7, 14, 21, 42\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find all the factors of $54$.`,
    options: ["\\{1, 2, 3, 6, 9, 18, 27, 54\\}", "\\{1, 2, 3, 6, 9, 12, 18, 27, 54\\}", "\\{1, 2, 3, 18, 27, 54\\}", "\\{2, 3, 6, 9, 18, 27\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write down factor pairs</strong><br>Find pairs of whole numbers that multiply to $54$:</p><ul><li>$1 \\times 54 = 54$</li><li>$2 \\times 27 = 54$</li><li>$3 \\times 18 = 54$</li><li>$6 \\times 9 = 54$</li></ul><p><strong>Step 2: List the factors in order</strong><br>Combining these gives the complete set: $\\{1, 2, 3, 6, 9, 18, 27, 54\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find all the factors of $150$.`,
    options: ["\\{1, 2, 3, 5, 6, 10, 15, 25, 30, 50, 75, 150\\}", "\\{1, 2, 3, 5, 6, 10, 15, 25, 50, 75, 150\\}", "\\{1, 2, 3, 5, 10, 15, 30, 50, 150\\}", "\\{2, 3, 5, 6, 10, 15, 25, 30, 50, 75\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find pairs that multiply to 150</strong><br>List all factor pairs:</p><ul><li>$1 \\times 150 = 150$</li><li>$2 \\times 75 = 150$</li><li>$3 \\times 50 = 150$</li><li>$5 \\times 30 = 150$</li><li>$6 \\times 25 = 150$</li><li>$10 \\times 15 = 150$</li></ul><p><strong>Step 2: Combine in ascending order</strong><br>The factors of $150$ are: $\\{1, 2, 3, 5, 6, 10, 15, 25, 30, 50, 75, 150\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `How many distinct factors does the number $360$ have?`,
    options: ["24", "20", "18", "28"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Prime factorization</strong><br>Let's find the prime factorization of $360$:<br>$360 = 2^3 \\times 3^2 \\times 5^1$.</p><p><strong>Step 2: Apply the factor formula</strong><br>Add $1$ to each exponent and multiply the results:<br>$(3+1) \\times (2+1) \\times (1+1) = 4 \\times 3 \\times 2 = 24$.<br>So $360$ has exactly $24$ distinct factors.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Which of the following represents all factors of $1050$ that are multiples of $25$?`,
    options: ["\\{25, 50, 75, 150, 175, 350, 525, 1050\\}", "\\{25, 50, 75, 150, 350, 525, 1050\\}", "\\{25, 50, 100, 150, 350, 1050\\}", "\\{25, 50, 75, 125, 250, 500, 1000\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: List multiples of 25 that divide 1050</strong><br>We test multiples of $25$ ($25, 50, 75, 100, 125, 150, 175, 200, 225, 250, \\dots$):</p><ul><li>$1050 \\div 25 = 42$ (Yes)</li><li>$1050 \\div 50 = 21$ (Yes)</li><li>$1050 \\div 75 = 14$ (Yes)</li><li>$1050 \\div 150 = 7$ (Yes)</li><li>$1050 \\div 175 = 6$ (Yes)</li><li>$1050 \\div 350 = 3$ (Yes)</li><li>$1050 \\div 525 = 2$ (Yes)</li><li>$1050 \\div 1050 = 1$ (Yes)</li></ul><p><strong>Step 2: Conclusion</strong><br>The factors of $1050$ that are multiples of $25$ are $\\{25, 50, 75, 150, 175, 350, 525, 1050\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Find all the factors of $1600$ that are perfect squares.`,
    options: ["\\{1, 4, 16, 25, 64, 100, 400, 1600\\}", "\\{1, 4, 9, 16, 25, 36, 64, 100, 400, 1600\\}", "\\{4, 16, 64, 400, 1600\\}", "\\{1, 2, 4, 8, 16, 25, 64, 100, 400, 1600\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Express 1600 as prime factorization</strong><br>$1600 = 16 \\times 100 = 2^4 \\times (2^2 \\times 5^2) = 2^6 \\times 5^2$.</p><p><strong>Step 2: Identify perfect square factors</strong><br>Any factor that is a perfect square must have even exponents in its prime factorization:<br>Exponents for $2$ can be $2^0, 2^2, 2^4, 2^6$ (corresponding to $1, 4, 16, 64$).<br>Exponents for $5$ can be $5^0, 5^2$ (corresponding to $1, 25$).<br>Combining these gives the set: $\\{1, 4, 16, 25, 64, 100, 400, 1600\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q2: Which numbers have a specific factor? (y7-2a)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which of the following numbers from the list have $6$ as a factor?<br>$$\\{12, 18, 22, 28, 96, 114, 130, 204\\}$$`,
    options: ["\\{12, 18, 96, 114, 204\\}", "\\{12, 18, 28, 96, 114, 204\\}", "\\{12, 18, 96, 204\\}", "\\{18, 96, 114, 130, 204\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Test each number for divisibility by 6</strong><br>A number is divisible by $6$ if it is even and its digits add up to a multiple of $3$:</p><ul><li>$12 \\div 6 = 2$ (Yes)</li><li>$18 \\div 6 = 3$ (Yes)</li><li>$22 \\div 6 = 3.66$ (No)</li><li>$28 \\div 6 = 4.66$ (No)</li><li>$96 \\div 6 = 16$ (Yes)</li><li>$114 \\div 6 = 19$ (Yes)</li><li>$130 \\div 6 = 21.66$ (No)</li><li>$204 \\div 6 = 34$ (Yes)</li></ul><p><strong>Step 2: Compile results</strong><br>The numbers with $6$ as a factor are: $\\{12, 18, 96, 114, 204\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which of the following numbers have $12$ as a factor?<br>$$\\{18, 24, 48, 60, 78, 108, 132, 150\\}$$`,
    options: ["\\{24, 48, 60, 108, 132\\}", "\\{24, 48, 60, 78, 108, 132\\}", "\\{18, 24, 48, 60, 108, 132\\}", "\\{24, 48, 60, 132\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Test each number for divisibility by 12</strong><br>A number is divisible by $12$ if it is divisible by both $3$ and $4$:</p><ul><li>$24 \\div 12 = 2$ (Yes)</li><li>$48 \\div 12 = 4$ (Yes)</li><li>$60 \\div 12 = 5$ (Yes)</li><li>$108 \\div 12 = 9$ (Yes)</li><li>$132 \\div 12 = 11$ (Yes)</li><li>The others ($18, 78, 150$) leave remainders.</li></ul><p><strong>Step 2: Conclusion</strong><br>The correct list is: $\\{24, 48, 60, 108, 132\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q3: Which numbers are multiples of a specific number? (y7-2a)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which of the following numbers are multiples of $17$?<br>$$\\{34, 45, 51, 68, 80, 85, 102, 110\\}$$`,
    options: ["\\{34, 51, 68, 85, 102\\}", "\\{34, 51, 68, 85\\}", "\\{34, 51, 80, 85, 102\\}", "\\{51, 68, 85, 102\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Calculate multiples of 17</strong><br>List multiples of $17$: $17, 34, 51, 68, 85, 102, 119, \\dots$</p><p><strong>Step 2: Check matching numbers in the list</strong><br>The matching numbers are: $\\{34, 51, 68, 85, 102\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which of the following numbers are multiples of $23$?<br>$$\\{46, 69, 75, 92, 115, 120, 138, 161\\}$$`,
    options: ["\\{46, 69, 92, 115, 138, 161\\}", "\\{46, 69, 92, 115, 138\\}", "\\{46, 69, 115, 138, 161\\}", "\\{69, 92, 115, 138, 161\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find multiples of 23</strong><br>List multiples: $23, 46, 69, 92, 115, 138, 161, 184, \\dots$</p><p><strong>Step 2: Find matches in the set</strong><br>The matching numbers are $\\{46, 69, 92, 115, 138, 161\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q4: Which numbers have X as a multiple? (y7-2a)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which of the following numbers have $220$ as a multiple?<br>$$\\{2, 4, 5, 8, 10, 11, 20, 22, 44, 50, 110\\}$$`,
    options: ["\\{2, 4, 5, 10, 11, 20, 22, 44, 110\\}", "\\{2, 4, 5, 8, 10, 11, 20, 22, 44, 110\\}", "\\{2, 4, 5, 10, 20, 22, 44, 50, 110\\}", "\\{4, 5, 10, 11, 20, 22, 44, 110\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the phrasing</strong><br>"Have $220$ as a multiple" means the number is a <strong>factor</strong> of $220$ (i.e. divides $220$ exactly).</p><p><strong>Step 2: Test the numbers</strong><br>Divide $220$ by each number:</p><ul><li>$220 \\div 2 = 110$ (Yes)</li><li>$220 \\div 4 = 55$ (Yes)</li><li>$220 \\div 5 = 44$ (Yes)</li><li>$220 \\div 8 = 27.5$ (No)</li><li>$220 \\div 10 = 22$ (Yes)</li><li>$220 \\div 11 = 20$ (Yes)</li><li>$220 \\div 20 = 11$ (Yes)</li><li>$220 \\div 22 = 10$ (Yes)</li><li>$220 \\div 44 = 5$ (Yes)</li><li>$220 \\div 50 = 4.4$ (No)</li><li>$220 \\div 110 = 2$ (Yes)</li></ul><p><strong>Step 3: Conclusion</strong><br>The factors of $220$ from the list are: $\\{2, 4, 5, 10, 11, 20, 22, 44, 110\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which of the following numbers have $315$ as a multiple?<br>$$\\{3, 5, 7, 9, 15, 21, 35, 45, 63, 105\\}$$`,
    options: ["All of them are correct", "\\{3, 5, 7, 9, 15, 21, 35\\}", "\\{3, 5, 9, 15, 45, 105\\}", "\\{3, 5, 7, 9, 15, 21, 35, 45, 105\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Check if all numbers divide 315</strong><br>Let's divide $315$ by each number:</p><ul><li>$315 \\div 3 = 105$, $315 \\div 5 = 63$, $315 \\div 7 = 45$</li><li>$315 \\div 9 = 35$, $315 \\div 15 = 21$, $315 \\div 21 = 15$</li><li>$315 \\div 35 = 9$, $315 \\div 45 = 7$, $315 \\div 63 = 5$, $315 \\div 105 = 3$</li></ul><p><strong>Step 2: Conclusion</strong><br>Every single number in the given list is a factor of $315$, which means they all have $315$ as a multiple!</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q5: List prime numbers in a range (y7-2c)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2c',
    topicCode: '2C',
    topicTitle: 'Prime and composite numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which of the following lists all the prime numbers between $50$ and $100$?`,
    options: ["\\{53, 59, 61, 67, 71, 73, 79, 83, 89, 97\\}", "\\{51, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97\\}", "\\{53, 59, 61, 67, 71, 73, 79, 83, 87, 89, 97\\}", "\\{53, 59, 61, 63, 67, 71, 73, 79, 83, 89, 97\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand prime numbers</strong><br>A prime number has exactly two factors: $1$ and itself.</p><p><strong>Step 2: Test numbers between 50 and 100</strong><br>Eliminate even numbers, multiples of $3$ ($51, 57, 63, 69, 75, 81, 87, 93, 99$), multiples of $5$ ($55, 65, 75, 85, 95$), and multiples of $7$ ($77, 91$).<br>The remaining prime numbers are: $\\{53, 59, 61, 67, 71, 73, 79, 83, 89, 97\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2c',
    topicCode: '2C',
    topicTitle: 'Prime and composite numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Identify all the prime numbers between $100$ and $130$.`,
    options: ["\\{101, 103, 107, 109, 113, 127\\}", "\\{101, 103, 107, 109, 113, 121, 127\\}", "\\{101, 103, 107, 109, 113, 117, 127\\}", "\\{103, 107, 109, 113, 127\\}"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Test numbers in range for divisibility</strong><br>Eliminate composite numbers:</p><ul><li>$111$ (divisible by $3$: $1+1+1=3$)</li><li>$117$ (divisible by $9$: $1+1+7=9$)</li><li>$119 = 7 \\times 17$</li><li>$121 = 11 \\times 11$</li><li>$123$ (divisible by $3$: $1+2+3=6$)</li><li>$129$ (divisible by $3$: $1+2+9=12$)</li></ul><p><strong>Step 2: Compile prime list</strong><br>The primes are: $\\{101, 103, 107, 109, 113, 127\\}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q6: Find two prime numbers that sum to X (y7-2c)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2c',
    topicCode: '2C',
    topicTitle: 'Prime and composite numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Identify a pair of prime numbers that add up to exactly $50$.`,
    options: ["\\{3, 47\\}", "\\{7, 43\\}", "\\{13, 37\\}", "All of the options are correct pairs of primes"],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Check each pair for sum</strong><br>All pairs add up to $50$:</p><ul><li>$3 + 47 = 50$</li><li>$7 + 43 = 50$</li><li>$13 + 37 = 50$</li></ul><p><strong>Step 2: Verify both numbers are prime</strong><br>All numbers ($3, 7, 13, 37, 43, 47$) are indeed prime numbers. Therefore, all options represent correct pairs.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2c',
    topicCode: '2C',
    topicTitle: 'Prime and composite numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find two prime numbers that sum to $90$. Which of the following is a valid pair?`,
    options: ["\\{7, 83\\}", "\\{9, 81\\}", "\\{17, 73\\}", "Both \\{7, 83\\} and \\{17, 73\\} are correct"],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Test each pair</strong><br>1. $9$ and $81$ are composite, so they do not count.<br>2. $7$ and $83$ are both prime: $7+83=90$. (Valid!)<br>3. $17$ and $73$ are both prime: $17+73=90$. (Valid!)</p><p><strong>Step 2: Conclusion</strong><br>Both $\\{7, 83\\}$ and $\\{17, 73\\}$ are correct answers.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2c',
    topicCode: '2C',
    topicTitle: 'Prime and composite numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which of the following pairs of prime numbers sum to $100$?`,
    options: ["\\{3, 97\\}", "\\{11, 89\\}", "\\{29, 71\\}", "All of these are correct"],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Check sums</strong><br>$3+97=100$, $11+89=100$, $29+71=100$.</p><p><strong>Step 2: Check primes</strong><br>All listed numbers ($3, 11, 29, 71, 89, 97$) are prime. Therefore, all options are correct.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2c',
    topicCode: '2C',
    topicTitle: 'Prime and composite numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which of the following prime pairs sum to $120$?`,
    options: ["\\{13, 107\\}", "\\{17, 103\\}", "\\{23, 97\\}", "All of these are correct"],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Check sums</strong><br>$13+107=120$, $17+103=120$, $23+97=120$.</p><p><strong>Step 2: Check primes</strong><br>Each number in these pairs is prime. Thus, all pairs are correct.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2c',
    topicCode: '2C',
    topicTitle: 'Prime and composite numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which of the following prime pairs sum to $200$?`,
    options: ["\\{3, 197\\}", "\\{7, 193\\}", "\\{37, 163\\}", "All of these are correct"],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Check sums</strong><br>$3+197=200$, $7+193=200$, $37+163=200$.</p><p><strong>Step 2: Check primes</strong><br>All elements are prime, so all are correct.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2c',
    topicCode: '2C',
    topicTitle: 'Prime and composite numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Identify a pair of prime numbers that sum to $250$.`,
    options: ["\\{17, 233\\}", "\\{19, 231\\}", "\\{23, 227\\}", "Both \\{17, 233\\} and \\{23, 227\\} are correct"],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Verify the numbers</strong><br>1. $\\{17, 233\\}$: both are prime, and $17+233=250$. (Yes!)<br>2. $\\{19, 231\\}$: $231$ is divisible by $3$ ($2+3+1=6$), so it is composite. (No!)<br>3. $\\{23, 227\\}$: both are prime, and $23+227=250$. (Yes!)</p><p><strong>Step 2: Conclusion</strong><br>Both $\\{17, 233\\}$ and $\\{23, 227\\}$ are correct.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q7: Powers evaluation (y7-2d)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2d',
    topicCode: '2D',
    topicTitle: 'Powers of numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which of the following correctly evaluates the powers of $3$ from $3^1$ up to $3^5$?`,
    options: ["3, 9, 27, 81, 243", "3, 6, 9, 12, 15", "3, 9, 18, 27, 81", "3, 9, 27, 54, 162"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Calculate each power sequentially</strong></p><ul><li>$3^1 = 3$</li><li>$3^2 = 3 \\times 3 = 9$</li><li>$3^3 = 9 \\times 3 = 27$</li><li>$3^4 = 27 \\times 3 = 81$</li><li>$3^5 = 81 \\times 3 = 243$</li></ul><p><strong>Step 2: List the result</strong><br>The powers are: $3, 9, 27, 81, 243$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2d',
    topicCode: '2D',
    topicTitle: 'Powers of numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate the powers of $10$ from $10^1$ up to $10^6$. Which list is correct?`,
    options: ["10, 100, 1000, 10000, 100000, 1000000", "10, 20, 30, 40, 50, 60", "1, 10, 100, 1000, 10000, 100000", "10, 100, 1000, 100000, 1000000, 10000000"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand powers of 10</strong><br>$10^n$ is represented by a $1$ followed by $n$ zeros.</p><ul><li>$10^1 = 10$</li><li>$10^2 = 100$</li><li>$10^3 = 1000$</li><li>$10^4 = 10000$</li><li>$10^5 = 100000$</li><li>$10^6 = 1000000$</li></ul></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q8: Express as prime factorization (y7-2f)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2f',
    topicCode: '2F',
    topicTitle: 'Using powers in factorisation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Express $72$ as a product of its prime factors in index notation.`,
    options: ["$2^3 \\times 3^2$", "$2^2 \\times 3^3$", "$2^4 \\times 3^1$", "$2^3 \\times 9^1$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find factors using division</strong></p><ul><li>$72 \\div 2 = 36$</li><li>$36 \\div 2 = 18$</li><li>$18 \\div 2 = 9$</li><li>$9 \\div 3 = 3$</li><li>$3 \\div 3 = 1$</li></ul><p><strong>Step 2: Write in index notation</strong><br>We used three $2$s and two $3$s:<br>$72 = 2 \\times 2 \\times 2 \\times 3 \\times 3 = 2^3 \\times 3^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2f',
    topicCode: '2F',
    topicTitle: 'Using powers in factorisation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Express $120$ as a product of its prime factors in index notation.`,
    options: ["$2^3 \\times 3 \\times 5$", "$2^2 \\times 3^2 \\times 5$", "$2^4 \\times 5$", "$2^3 \\times 15$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Factor tree/division method</strong><br>$120 = 12 \\times 10 = (2^2 \\times 3) \\times (2 \\times 5)$.</p><p><strong>Step 2: Collect terms</strong><br>$120 = 2^3 \\times 3 \\times 5$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2f',
    topicCode: '2F',
    topicTitle: 'Using powers in factorisation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Express $180$ as a product of its prime factors in index notation.`,
    options: ["$2^2 \\times 3^2 \\times 5$", "$2^3 \\times 3 \\times 5$", "$2^2 \\times 3 \\times 5^2$", "$2^2 \\times 9 \\times 5$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Factorize 180</strong><br>$180 = 18 \\times 10 = (2 \\times 3^2) \\times (2 \\times 5)$.</p><p><strong>Step 2: Combine base exponents</strong><br>$180 = 2^2 \\times 3^2 \\times 5$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2f',
    topicCode: '2F',
    topicTitle: 'Using powers in factorisation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Express $250$ as a product of its prime factors in index notation.`,
    options: ["$2 \\times 5^3$", "$2^2 \\times 5^2$", "$2 \\times 5^2$", "$2^3 \\times 5^2$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Factorize 250</strong><br>$250 = 25 \\times 10 = 5^2 \\times (2 \\times 5)$.</p><p><strong>Step 2: Combine terms</strong><br>$250 = 2 \\times 5^3$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2f',
    topicCode: '2F',
    topicTitle: 'Using powers in factorisation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Express $400$ as a product of its prime factors in index notation.`,
    options: ["$2^4 \\times 5^2$", "$2^3 \\times 5^3$", "$2^5 \\times 5^1$", "$4^2 \\times 5^2$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Factorize 400</strong><br>$400 = 16 \\times 25$.</p><p><strong>Step 2: Convert to prime bases</strong><br>$16 = 2^4$ and $25 = 5^2$. Thus, $400 = 2^4 \\times 5^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2f',
    topicCode: '2F',
    topicTitle: 'Using powers in factorisation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Express $500$ as a product of its prime factors in index notation.`,
    options: ["$2^2 \\times 5^3$", "$2^3 \\times 5^2$", "$2^2 \\times 5^2$", "$2^1 \\times 5^4$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Factorize 500</strong><br>$500 = 5 \\times 100 = 5 \\times (4 \\times 25) = 5 \\times (2^2 \\times 5^2)$.</p><p><strong>Step 2: Combine exponents</strong><br>$500 = 2^2 \\times 5^3$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q9: Evaluate squares (y7-2g)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate $6^2$.`,
    options: ["36", "12", "18", "64"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply 6 by itself</strong><br>$6^2 = 6 \\times 6 = 36$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate $12^2$.`,
    options: ["144", "24", "121", "169"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply 12 by itself</strong><br>$12^2 = 12 \\times 12 = 144$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate $15^2$.`,
    options: ["225", "30", "200", "250"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply 15 by itself</strong><br>$15^2 = 15 \\times 15 = 225$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate $30^2$.`,
    options: ["900", "60", "300", "90"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply 30 by itself</strong><br>$30^2 = 30 \\times 30 = 900$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate $60^2$.`,
    options: ["3600", "120", "360", "600"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply 60 by itself</strong><br>$60^2 = 60 \\times 60 = 3600$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate $200^2$.`,
    options: ["40000", "400", "4000", "20000"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply 200 by itself</strong><br>$200^2 = 200 \\times 200 = 40000$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q10: Square roots (y7-2g)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the square root of $49$ (i.e. $\\sqrt{49}$).`,
    options: ["7", "14", "9", "4.9"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Determine the square root</strong><br>We look for a positive number that, when multiplied by itself, yields $49$. Since $7 \\times 7 = 49$, we have $\\sqrt{49} = 7$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the square root of $225$ (i.e. $\\sqrt{225}$).`,
    options: ["15", "25", "12", "13"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Test base squares</strong><br>Since $15 \\times 15 = 225$, the square root is $15$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the square root of $256$ (i.e. $\\sqrt{256}$).`,
    options: ["16", "14", "18", "26"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Test squares</strong><br>Since $16 \\times 16 = 256$, the square root is $16$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the square root of $576$ (i.e. $\\sqrt{576}$).`,
    options: ["24", "26", "22", "28"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Determine by bounds</strong><br>We know $20^2 = 400$ and $30^2 = 900$. The number ends in $6$, so the square root must end in $4$ or $6$. Testing $24$:<br>$24 \\times 24 = 576$. Thus, the square root is $24$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the square root of $900$ (i.e. $\\sqrt{900}$).`,
    options: ["30", "3", "90", "300"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Test squares</strong><br>Since $30 \\times 30 = 900$, the square root is $30$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the square root of $4000000$ (i.e. $\\sqrt{4000000}$).`,
    options: ["2000", "200", "20000", "4000"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Split into factors</strong><br>We can write $4000000 = 4 \\times 1000000$.</p><p><strong>Step 2: Find the square root of each part</strong><br>$\\sqrt{4} = 2$<br>$\\sqrt{1000000} = 1000$<br>Combined: $2 \\times 1000 = 2000$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q11: Sum of 3 or 4 squares (y7-2g)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Express $33$ as the sum of three perfect squares.`,
    options: ["$4^2 + 4^2 + 1^2$", "$5^2 + 2^2 + 2^2$", "$3^2 + 3^2 + 3^2$", "$5^2 + 3^2 + 1^2$"],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: List perfect squares smaller than 33</strong><br>Squares: $1, 4, 9, 16, 25$.</p><p><strong>Step 2: Test combinations of three squares</strong><br>Let's try using $25$ ($5^2$):<br>$33 - 25 = 8$.<br>Can $8$ be written as the sum of two squares?<br>Yes, $4 + 4 = 2^2 + 2^2$.<br>So, $33 = 5^2 + 2^2 + 2^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Express $54$ as the sum of three perfect squares.`,
    options: ["$5^2 + 5^2 + 2^2$", "$7^2 + 2^2 + 1^2$", "$6^2 + 3^2 + 3^2$", "Both $5^2 + 5^2 + 2^2$ and $7^2 + 2^2 + 1^2$ are correct"],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Verify the options</strong></p><ul><li>Option 1: $5^2 + 5^2 + 2^2 = 25 + 25 + 4 = 54$. (Correct!)</li><li>Option 2: $7^2 + 2^2 + 1^2 = 49 + 4 + 1 = 54$. (Correct!)</li></ul><p><strong>Step 2: Conclusion</strong><br>Both options represent valid sums of three squares.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Express $83$ as the sum of three or four perfect squares. Which of the following is correct?`,
    options: ["$9^2 + 1^2 + 1^2$ (Sum of three squares)", "$8^2 + 3^2 + 3^2 + 1^2$ (Sum of four squares)", "$7^2 + 5^2 + 3^2$ (Sum of three squares)", "Both $9^2 + 1^2 + 1^2$ and $8^2 + 3^2 + 3^2 + 1^2$ are correct"],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Verify both combinations</strong></p><ul><li>Combination 1: $9^2 + 1^2 + 1^2 = 81 + 1 + 1 = 83$ (3 squares).</li><li>Combination 2: $8^2 + 3^2 + 3^2 + 1^2 = 64 + 9 + 9 + 1 = 83$ (4 squares).</li></ul><p><strong>Step 2: Conclusion</strong><br>Both are mathematically correct representations.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Express $115$ as the sum of four perfect squares.`,
    options: ["$8^2 + 5^2 + 5^2 + 1^2$", "$9^2 + 4^2 + 4^2 + 2^2$", "$10^2 + 3^2 + 2^2 + 1^2$", "$7^2 + 7^2 + 4^2 + 1^2$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Sum the squares in the first option</strong><br>$8^2 + 5^2 + 5^2 + 1^2 = 64 + 25 + 25 + 1 = 115$.</p><p><strong>Step 2: Verify all numbers are squares</strong><br>All numbers in the sum ($64, 25, 25, 1$) are perfect squares ($8^2, 5^2, 5^2, 1^2$). Thus, $115 = 8^2 + 5^2 + 5^2 + 1^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q12: Digit analysis of square and cube (y7-2g)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2g',
    topicCode: '2G',
    topicTitle: 'Squares and square roots',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Besides $9$ (where $9^2 = 81$ and $9^3 = 729$ share no digits), which other positive integer less than $20$ has a square that shares **none** of the same digits as its cube?`,
    options: ["$14$", "$10$", "$12$", "$15$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the condition</strong><br>We need to find a number $n$ such that the set of digits in $n^2$ and the set of digits in $n^3$ have an empty intersection.</p><p><strong>Step 2: Test the number 14</strong><br>$14^2 = 196$ (digits: $\\{1, 6, 9\\}$)<br>$14^3 = 2744$ (digits: $\\{2, 4, 7\\}$)<br>These two sets of digits share absolutely no digits in common! Therefore, $14$ is a correct answer.</p><p><strong>Step 3: Show why others are incorrect</strong><br>For $10$: $10^2 = 100$, $10^3 = 1000$ (both share $0$ and $1$).<br>For $12$: $12^2 = 144$, $12^3 = 1728$ (both share $1$).<br>For $15$: $15^2 = 225$, $15^3 = 3375$ (both share $5$).</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q13: Find highest common factor (y7-2h)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the highest common factor (HCF) of $18$ and $30$.`,
    options: ["6", "3", "9", "12"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: List all factors</strong></p><ul><li>Factors of $18$: $\\{1, 2, 3, 6, 9, 18\\}$</li><li>Factors of $30$: $\\{1, 2, 3, 5, 6, 10, 15, 30\\}$</li></ul><p><strong>Step 2: Find common factors and choose the largest</strong><br>Common factors: $\\{1, 2, 3, 6\\}$. The highest common factor is $6$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the highest common factor (HCF) of $28$ and $42$.`,
    options: ["14", "7", "28", "4"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: List factors</strong><br>Factors of $28$: $\\{1, 2, 4, 7, 14, 28\\}$. Factors of $42$: $\\{1, 2, 3, 6, 7, 14, 21, 42\\}$.</p><p><strong>Step 2: Identify HCF</strong><br>Common factors: $\\{1, 2, 7, 14\\}$. The highest is $14$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the highest common factor (HCF) of $60$ and $72$.`,
    options: ["12", "6", "18", "24"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find prime factorizations</strong><br>$60 = 2^2 \\times 3 \\times 5$<br>$72 = 2^3 \\times 3^2$</p><p><strong>Step 2: Calculate HCF</strong><br>Take the lowest power of common prime bases:<br>HCF $= 2^2 \\times 3 = 4 \\times 3 = 12$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the highest common factor (HCF) of $75$ and $105$.`,
    options: ["15", "5", "25", "35"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Express as prime factors</strong><br>$75 = 3 \\times 5^2$<br>$105 = 3 \\times 5 \\times 7$</p><p><strong>Step 2: Collect common bases</strong><br>The common prime factors are $3$ and $5$.<br>HCF $= 3^1 \\times 5^1 = 15$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the highest common factor (HCF) of $144$ and $96$.`,
    options: ["48", "24", "16", "12"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Factorize prime components</strong><br>$144 = 2^4 \\times 3^2$<br>$96 = 2^5 \\times 3^1$</p><p><strong>Step 2: Find HCF</strong><br>HCF $= 2^4 \\times 3^1 = 16 \\times 3 = 48$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the highest common factor (HCF) of $250$ and $150$.`,
    options: ["50", "25", "10", "100"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Factorize numbers</strong><br>$250 = 50 \\times 5$<br>$150 = 50 \\times 3$</p><p><strong>Step 2: Identify HCF</strong><br>The largest integer dividing both is $50$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q14: Find lowest common multiple (y7-2h)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the lowest common multiple (LCM) of $9$ and $6$.`,
    options: ["18", "36", "54", "3"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: List multiples</strong></p><ul><li>Multiples of $9$: $9, 18, 27, 36, \\dots$</li><li>Multiples of $6$: $6, 12, 18, 24, \\dots$</li></ul><p><strong>Step 2: Find the smallest shared multiple</strong><br>The first multiple in both lists is $18$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the lowest common multiple (LCM) of $8$ and $12$.`,
    options: ["24", "48", "96", "4"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: List multiples</strong><br>Multiples of $8$: $8, 16, 24, 32 \\dots$<br>Multiples of $12$: $12, 24, 36 \\dots$</p><p><strong>Step 2: Identify LCM</strong><br>The smallest common multiple is $24$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the lowest common multiple (LCM) of $10$ and $15$.`,
    options: ["30", "60", "150", "5"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Compare multiples</strong><br>Multiples of $10$ are $10, 20, 30, \\dots$<br>Multiples of $15$ are $15, 30, \\dots$<br>Smallest common multiple is $30$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the lowest common multiple (LCM) of $14$ and $21$.`,
    options: ["42", "84", "7", "63"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Prime factorizations</strong><br>$14 = 2 \\times 7$<br>$21 = 3 \\times 7$</p><p><strong>Step 2: Calculate LCM</strong><br>Multiply highest powers of all prime factors:<br>LCM $= 2^1 \\times 3^1 \\times 7^1 = 42$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the lowest common multiple (LCM) of $16$ and $24$.`,
    options: ["48", "96", "72", "8"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Prime factorizations</strong><br>$16 = 2^4$<br>$24 = 2^3 \\times 3^1$</p><p><strong>Step 2: Calculate LCM</strong><br>LCM $= 2^4 \\times 3^1 = 16 \\times 3 = 48$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2h',
    topicCode: '2H',
    topicTitle: 'Lowest common multiple and highest common factor',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the lowest common multiple (LCM) of $30$ and $45$.`,
    options: ["90", "180", "135", "15"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Prime factorizations</strong><br>$30 = 2^1 \\times 3^1 \\times 5^1$<br>$45 = 3^2 \\times 5^1$</p><p><strong>Step 2: Calculate LCM</strong><br>LCM $= 2^1 \\times 3^2 \\times 5^1 = 2 \\times 9 \\times 5 = 90$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q15: Divisibility gaps (y7-2i)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2i',
    topicCode: '2I',
    topicTitle: 'Divisibility tests',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `In the 6-digit number $3\\_5\\_2\\_$, what digit must be in the units place to guarantee it is divisible by $2$?`,
    options: ["Any even digit: $0, 2, 4, 6, 8$", "Only $2$ or $4$", "Only $0$", "Any odd digit"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Recall the divisibility rule for 2</strong><br>A number is divisible by $2$ if and only if its units digit is even ($0, 2, 4, 6, or 8$). The other blanks can be filled with any digits.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2i',
    topicCode: '2I',
    topicTitle: 'Divisibility tests',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `To make the 6-digit number $3\\_5\\_2\\_$ divisible by $10$, what must the units digit be?`,
    options: ["$0$", "$5$", "Either $0$ or $5$", "$2$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divisibility by 10 rule</strong><br>A whole number is divisible by $10$ if and only if its last digit is $0$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2i',
    topicCode: '2I',
    topicTitle: 'Divisibility tests',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `For the 6-digit number $3\\_5\\_2\\_$, let the blanks be $a, b,$ and $c$ such that the number is $3a5b2c$. If $a=1, b=4,$ and the units digit is $c$, which digit $c$ makes the number divisible by $3$?`,
    options: ["$0, 3, 6,$ or $9$", "$1, 4,$ or $7$", "$2, 5,$ or $8$", "Only $3$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Use divisibility rule for 3</strong><br>A number is divisible by $3$ if the sum of its digits is divisible by $3$.</p><p><strong>Step 2: Calculate the sum of the digits</strong><br>Sum $= 3 + 1 + 5 + 4 + 2 + c = 15 + c$.</p><p><strong>Step 3: Test values for c</strong><br>For $15+c$ to be a multiple of $3$, $c$ can be $0$ ($15$), $3$ ($18$), $6$ ($21$), or $9$ ($24$).</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2i',
    topicCode: '2I',
    topicTitle: 'Divisibility tests',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `To make the 6-digit number $3\\_5\\_2\\_$ divisible by both $2$ and $5$, what must the units digit be?`,
    options: ["$0$", "$5$", "Any even digit", "Either $0$ or $5$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Check conditions</strong><br>A number is divisible by both $2$ and $5$ if it is divisible by $10$. Therefore, the units digit must be $0$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2i',
    topicCode: '2I',
    topicTitle: 'Divisibility tests',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `For the number $3\\_5\\_2\\_$ (written as $3a5b2c$), what is a combination of digits $b$ and $c$ that makes the number divisible by $8$? (Divisibility by $8$ depends only on the last 3 digits, i.e., $b2c$).`,
    options: ["$b=1, c=8$", "$b=1, c=2$", "$b=2, c=4$", "$b=3, c=6$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divisibility by 8 rule</strong><br>A number is divisible by $8$ if the last three digits ($b2c$) form a multiple of $8$.</p><p><strong>Step 2: Test the options</strong><br>Let's check $b=1, c=8$: the last three digits form $128$.<br>$128 \\div 8 = 16$ (with no remainder!). So $b=1, c=8$ is correct.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2i',
    topicCode: '2I',
    topicTitle: 'Divisibility tests',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Which of the following conditions on the units digit $c$ of the 6-digit number $3a5b2c$ ensures that the number is divisible by both $4$ and $6$, if the sum of all digits is already a multiple of $3$?`,
    options: ["The units digit $c$ must be either $0, 4,$ or $8$", "The units digit $c$ must be $2, 6,$ or $8$", "The units digit $c$ must be $0, 2, 4, 6,$ or $8$", "The units digit $c$ must be $4$ or $8$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Analyze divisibility by 4</strong><br>A number is divisible by $4$ if the last two digits ($2c$) are a multiple of $4$. The multiples of $4$ in the $20$s are $20, 24,$ and $28$. Thus, $c$ must be $0, 4,$ or $8$.</p><p><strong>Step 2: Analyze divisibility by 6</strong><br>A number is divisible by $6$ if it is divisible by both $2$ and $3$. Since the sum of the digits is already a multiple of $3$, and $c \\in \\{0, 4, 8\\}$ are all even (making the number divisible by $2$), the number will automatically be divisible by both, hence by $6$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2i',
    topicCode: '2I',
    topicTitle: 'Divisibility tests',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `For the 6-digit number $3\\_5\\_2\\_$ (written as $3a5b2c$), what condition must digit $a$ and $b$ satisfy to make the number divisible by both $3$ and $10$?`,
    options: ["$c = 0$, and the sum $a + b$ must be such that $(10 + a + b)$ is a multiple of $3$.", "$c = 5$, and $a+b$ is any value.", "$c = 0$, and $a+b$ must equal $9$.", "$c = 0$, and $a+b$ must be an even number."],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divisibility by 10 condition</strong><br>To be divisible by $10$, the units digit must be $c = 0$.</p><p><strong>Step 2: Divisibility by 3 condition</strong><br>The sum of the digits must be a multiple of $3$.<br>Sum $= 3 + a + 5 + b + 2 + 0 = 10 + a + b$.<br>So $(10 + a + b)$ must be a multiple of $3$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2i',
    topicCode: '2I',
    topicTitle: 'Divisibility tests',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `To make the 6-digit number $3\\_5\\_2\\_$ divisible by $5$ but NOT by $10$, what must the units digit be?`,
    options: ["$5$", "$0$", "Either $0$ or $5$", "Any odd digit"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Apply rules for 5 and 10</strong><br>A number is divisible by $5$ if its units digit is $0$ or $5$. If it cannot be divisible by $10$, it cannot end in $0$. Thus, the units digit must be exactly $5$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2i',
    topicCode: '2I',
    topicTitle: 'Divisibility tests',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `To make the 6-digit number $3a5b2c$ divisible by $2$ but NOT by $4$, what are the possible values for the units digit $c$?`,
    options: ["$2$ or $6$", "$0, 4,$ or $8$", "$2, 4,$ or $6$", "Only $2$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Condition for divisibility by 2</strong><br>The units digit $c$ must be even ($0, 2, 4, 6, 8$).</p><p><strong>Step 2: Condition for non-divisibility by 4</strong><br>The last two digits ($2c$) must NOT be a multiple of $4$. The multiples of $4$ in the $20$s are $20, 24, 28$.<br>So $c$ cannot be $0, 4,$ or $8$.<br>Therefore, the only possible values for $c$ are $2$ or $6$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q16: Digit reversal property (y7-2a)
  // ==========================================
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Two factors of $252$, namely $12$ and $21$, can each be written by reversing the digits of the other. Which of the following is another number that has a pair of factors with this same digit-reversal property?`,
    options: ["$504$ (with factor pair $12$ and $21$)", "$480$ (with factor pair $13$ and $31$)", "$380$ (with factor pair $14$ and $41$)", "$620$ (with factor pair $15$ and $51$)"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Check the factor pair 12 and 21 for the number 504</strong><br>$504 \\div 12 = 42$ (No remainder)<br>$504 \\div 21 = 24$ (No remainder)<br>So both $12$ and $21$ are factors of $504$. Since $12$ is the digit reversal of $21$, this satisfies the property.</p><p><strong>Step 2: Verify incorrect options</strong><br>For $480$, $13$ and $31$ do not divide it exactly ($480 \\div 13 = 36.92$). Therefore, $504$ is the correct answer.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Find a number other than $403$ that is a multiple of both $13$ and $31$, so that $13$ and $31$ (which are digit reversals of each other) are both factors of this number.`,
    options: ["$806$", "$700$", "$500$", "$600$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find multiples of 13 and 31</strong><br>Any multiple of $13 \\times 31 = 403$ will have both $13$ and $31$ as factors. $806$ is $403 \\times 2$, so it is divisible by both $13$ and $31$.</p></div>`,
    createdAt: new Date().toISOString()
  }
];

export const importYear7Ch2 = async (forceReset = false) => {
  console.log('[Ch2 Year 7 Import] Starting physical migration via writeBatch...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('[Ch2 Year 7 Import] forceReset is TRUE. Deleting existing questions for chapter y7-2...');
      const oldSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-2')));
      
      if (!oldSnap.empty) {
        const deleteBatch = writeBatch(db);
        oldSnap.docs.forEach((d) => {
          deleteBatch.delete(d.ref);
        });
        await deleteBatch.commit();
        console.log(`[Ch2 Year 7 Import] Deleted ${oldSnap.docs.length} old questions successfully.`);
      }
    }

    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-2')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    const insertBatch = writeBatch(db);
    let needCommit = false;
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        const newDocRef = doc(collection(db, 'questions'));
        insertBatch.set(newDocRef, q);
        importedCount++;
        needCommit = true;
      }
    }
    
    if (needCommit) {
      await insertBatch.commit();
      console.log(`[Ch2 Year 7 Import] Batch write successful. Inserted ${importedCount} questions.`);
    } else {
      console.log('[Ch2 Year 7 Import] All questions are already up to date.');
    }
  } catch (error) {
    console.error('[Ch2 Year 7 Import] ERROR DURING BATCH SYNC:', error);
    throw error;
  }
  
  return importedCount;
};
