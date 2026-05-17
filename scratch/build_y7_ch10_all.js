const fs = require('fs');

const questions = [];

// ========================================================
// SVG Generators
// ========================================================

// 1. Beautiful Number Line SVG with dots plotted
function getNumberLineSVG(highlightPoints = []) {
  let ticks = '';
  let dots = '';
  // x ranges from 30 (-10) to 310 (+10) -> width = 280.
  // Each unit is 14px. Midpoint (0) is at x = 170.
  for (let val = -10; val <= 10; val++) {
    const x = 170 + val * 14;
    ticks += `<line x1="${x}" y1="40" x2="${x}" y2="50" stroke="#64748b" stroke-width="1.5"/>`;
    // Label every 2 units to prevent clutter
    if (val % 2 === 0) {
      ticks += `<text x="${x}" y="${65}" text-anchor="middle" fill="#475569" font-size="10" font-weight="600" font-family="'Outfit'">${val}</text>`;
    }
    // Draw dots for highlighted points
    if (highlightPoints.includes(val)) {
      dots += `<circle cx="${x}" cy="45" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>`;
    }
  }
  return `<svg width="340" height="90" viewBox="0 0 340 90" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Main line -->
    <line x1="20" y1="45" x2="320" y2="45" stroke="#1e293b" stroke-width="2"/>
    <!-- Left Arrow -->
    <path d="M 20 45 L 28 41 L 28 49 Z" fill="#1e293b"/>
    <!-- Right Arrow -->
    <path d="M 320 45 L 312 41 L 312 49 Z" fill="#1e293b"/>
    ${ticks}
    ${dots}
  </svg>`;
}

// 2. Liquid-in-glass Thermometer SVG
function getThermometerSVG(temp) {
  let marks = '';
  // y ranges from 25 (100 C) to 125 (-40 C) -> 100px for 140 degrees -> 0.714 px per degree
  // Level points to temp -> y = 125 - (temp - (-40)) * 0.714
  const fillY = 125 - (temp + 40) * 0.714;
  for (let val = -40; val <= 100; val += 20) {
    const y = 125 - (val + 40) * 0.714;
    marks += `<line x1="158" y1="${y}" x2="168" y2="${y}" stroke="#475569" stroke-width="1.5"/>`;
    marks += `<text x="175" y="${y + 3.5}" fill="#475569" font-size="9" font-weight="bold" font-family="'Outfit'">${val}</text>`;
  }
  return `<svg width="220" height="160" viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Outer glass body -->
    <rect x="135" y="15" width="20" height="115" rx="10" fill="none" stroke="#64748b" stroke-width="2"/>
    <circle cx="145" cy="138" r="14" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
    <!-- Red Liquid column and bulb -->
    <circle cx="145" cy="138" r="11" fill="#ef4444"/>
    <rect x="142" y="${fillY}" width="6" height="${138 - fillY}" fill="#ef4444"/>
    ${marks}
    <text x="145" y="10" text-anchor="middle" fill="#64748b" font-size="9" font-weight="bold" font-family="'Outfit'">°C</text>
  </svg>`;
}


// ========================================================
// Q1: Integers in Ranges (4 questions)
// ========================================================
questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'List the integers that are less than $4$ and greater than $-4$.',
  options: [
    '$-3, -2, -1, 0, 1, 2, 3$',
    '$-4, -3, -2, -1, 0, 1, 2, 3, 4$',
    '$-3, -2, -1, 1, 2, 3$',
    '$-3, -2, -1, 0, 1, 2$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Understand the inequality range. We are looking for integers $x$ such that:<br>
      $-4 < x < 4$
    </p>
    <p><strong>Step 2:</strong> List all whole numbers strictly between $-4$ and $4$:</p>
    <ul>
      <li>Integers greater than $-4$: $-3, -2, -1, 0, 1, 2, 3...$</li>
      <li>Integers less than $4$: $...0, 1, 2, 3$</li>
    </ul>
    <p><strong>Step 3:</strong> Combine these lists to get: $-3, -2, -1, 0, 1, 2, 3$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'List the integers that are greater than $-7$ and less than $-2$.',
  options: [
    '$-6, -5, -4, -3$',
    '$-7, -6, -5, -4, -3, -2$',
    '$-6, -5, -4$',
    '$-5, -4, -3$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Write the condition as an inequality:<br>
      $-7 < x < -2$
    </p>
    <p><strong>Step 2:</strong> List the whole numbers strictly between $-7$ and $-2$ on the number line:</p>
    <ul>
      <li>Integers greater than $-7$ are: $-6, -5, -4, -3...$</li>
      <li>Integers less than $-2$ are: $... -5, -4, -3$</li>
    </ul>
    <p><strong>Step 3:</strong> The matching integers are: $-6, -5, -4, -3$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'List the integers that are less than $-2$ and greater than $-8$.',
  options: [
    '$-7, -6, -5, -4, -3$',
    '$-8, -7, -6, -5, -4, -3, -2$',
    '$-7, -6, -5, -4$',
    '$-6, -5, -4, -3$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Write the condition as a compound inequality:<br>
      $-8 < x < -2$
    </p>
    <p><strong>Step 2:</strong> Identify the whole numbers strictly between $-8$ and $-2$:</p>
    <ul>
      <li>Moving right from $-8$: $-7, -6, -5, -4, -3$</li>
      <li>We stop before reaching $-2$.</li>
    </ul>
    <p><strong>Step 3:</strong> The integers are $-7, -6, -5, -4, -3$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'List the integers that are greater than $-156$ and less than $-149$.',
  options: [
    '$-155, -154, -155, -152, -151, -150$', // typo options are standard
    '$-155, -154, -153, -152, -151, -150$',
    '$-156, -155, -154, -153, -152, -151, -150, -149$',
    '$-154, -153, -152, -151, -150$'
  ],
  answer: 1,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> The inequality is:<br>
      $-156 < x < -149$
    </p>
    <p><strong>Step 2:</strong> List all integers starting from $-155$ and going up to $-150$:<br>
      $-155, -154, -153, -152, -151, -150$.
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q2: Ordering Integers (2 questions)
// ========================================================
questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Arrange the following integers in increasing order (from smallest to largest):<br>$-15, 15, 0, 150, -150, -8, -1500, 7$.',
  options: [
    '$-1500, -150, -15, -8, 0, 7, 15, 150$',
    '$-1500, -150, -8, -15, 0, 7, 15, 150$',
    '$-15, -150, -1500, -8, 0, 7, 15, 150$',
    '$-1500, -150, -15, -8, 0, 15, 7, 150$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Separate the negative integers, zero, and positive integers:</p>
    <ul>
      <li>Negative integers: $-15, -150, -8, -1500$</li>
      <li>Zero: $0$</li>
      <li>Positive integers: $15, 150, 7$</li>
    </ul>
    <p><strong>Step 2:</strong> Sort the negative numbers. The further to the left on a number line, the smaller the number:<br>
      $-1500 < -150 < -15 < -8$
    </p>
    <p><strong>Step 3:</strong> Sort the positive numbers:<br>
      $7 < 15 < 150$
    </p>
    <p><strong>Step 4:</strong> Combine all parts in order: <br>
      $-1500, -150, -15, -8, 0, 7, 15, 150$.
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Arrange the following integers in decreasing order (from largest to smallest):<br>$-40, 50, -50, -600, -41, 35, -35, 60$.',
  options: [
    '$60, 50, 35, -35, -40, -41, -50, -600$',
    '$60, 50, 35, -35, -41, -40, -50, -600$',
    '$60, 50, 35, -600, -50, -41, -40, -35$',
    '$-600, -50, -41, -40, -35, 35, 50, 60$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Group into positive and negative integers:</p>
    <ul>
      <li>Positive integers: $60, 50, 35$</li>
      <li>Negative integers: $-40, -50, -600, -41, -35$</li>
    </ul>
    <p><strong>Step 2:</strong> Sort the positive integers from largest to smallest:<br>
      $60, 50, 35$
    </p>
    <p><strong>Step 3:</strong> Sort the negative integers from largest (closest to 0) to smallest:<br>
      $-35, -40, -41, -50, -600$
    </p>
    <p><strong>Step 4:</strong> Combine the sorted lists:<br>
      $60, 50, 35, -35, -40, -41, -50, -600$.
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q3: Visual Number Line plotting (4 questions)
// ========================================================
questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Identify which number line correctly plots the numbers $-3$, $-5$, $-7$ and $-9$.`,
  options: [
    `Option A:<br>${getNumberLineSVG([-3, -5, -7, -9])}`,
    `Option B:<br>${getNumberLineSVG([-3, -5, -6, -8])}`,
    `Option C:<br>${getNumberLineSVG([-2, -4, -6, -8])}`,
    `Option D:<br>${getNumberLineSVG([3, 5, 7, 9])}`
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Locate the position of each number on the number line starting from $0$ and moving left:</p>
    <ul>
      <li>$-3$ is $3$ units to the left of $0$.</li>
      <li>$-5$ is $5$ units to the left of $0$.</li>
      <li>$-7$ is $7$ units to the left of $0$.</li>
      <li>$-9$ is $9$ units to the left of $0$.</li>
    </ul>
    <p><strong>Step 2:</strong> Option A has red markers plotted exactly at $-3, -5, -7, -9$, which is correct.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Identify which number line correctly plots the numbers $-2$, $-4$, $-6$ and $-8$.`,
  options: [
    `Option A:<br>${getNumberLineSVG([-2, -4, -6, -8])}`,
    `Option B:<br>${getNumberLineSVG([-1, -3, -5, -7])}`,
    `Option C:<br>${getNumberLineSVG([-2, -5, -6, -9])}`,
    `Option D:<br>${getNumberLineSVG([2, 4, 6, 8])}`
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Check each number's position to the left of $0$:</p>
    <ul>
      <li>$-2$: $2$ units left</li>
      <li>$-4$: $4$ units left</li>
      <li>$-6$: $6$ units left</li>
      <li>$-8$: $8$ units left</li>
    </ul>
    <p><strong>Step 2:</strong> Option A correctly highlights these even negative integers.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Which number line shows all integers that are less than $0$ and greater than $-6$?`,
  options: [
    `Option A:<br>${getNumberLineSVG([-5, -4, -3, -2, -1])}`,
    `Option B:<br>${getNumberLineSVG([-6, -5, -4, -3, -2, -1, 0])}`,
    `Option C:<br>${getNumberLineSVG([-5, -4, -3, -2])}`,
    `Option D:<br>${getNumberLineSVG([1, 2, 3, 4, 5])}`
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> The range is: $-6 < x < 0$.</p>
    <p><strong>Step 2:</strong> The integers strictly between $-6$ and $0$ are: $-5, -4, -3, -2, -1$.</p>
    <p><strong>Step 3:</strong> Look for the number line that has markers at $-5, -4, -3, -2, -1$. This is Option A.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Which number line shows all integers that are less than $4$ and greater than $-4$?`,
  options: [
    `Option A:<br>${getNumberLineSVG([-3, -2, -1, 0, 1, 2, 3])}`,
    `Option B:<br>${getNumberLineSVG([-4, -3, -2, -1, 0, 1, 2, 3, 4])}`,
    `Option C:<br>${getNumberLineSVG([-3, -2, -1, 1, 2, 3])}`,
    `Option D:<br>${getNumberLineSVG([-2, -1, 0, 1, 2])}`
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> We are looking for integers satisfying: $-4 < x < 4$.</p>
    <p><strong>Step 2:</strong> This includes: $-3, -2, -1, 0, 1, 2, 3$.</p>
    <p><strong>Step 3:</strong> Option A has dots on all these integers, including zero. Option C is incorrect because it misses zero.</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q4-Q6: Sequences (3 questions)
// ========================================================
questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: "The sequence $-18, -16, -14, \\dots$ is 'going up by twos'. Find the next three terms.",
  options: [
    '$-12, -10, -8$',
    '$-15, -16, -17$',
    '$-12, -10, -9$',
    '$-13, -11, -9$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Identify the pattern. Each term is found by adding $2$ to the previous term:<br>
      $-18 + 2 = -16$<br>
      $-16 + 2 = -14$
    </p>
    <p><strong>Step 2:</strong> Add $2$ to the last known term ($-14$) to get the next term:<br>
      $-14 + 2 = -12$
    </p>
    <p><strong>Step 3:</strong> Repeat for the next two terms:<br>
      $-12 + 2 = -10$<br>
      $-10 + 2 = -8$
    </p>
    <p>The next three terms are: $-12, -10, -8$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: "The sequence $5, 2, -1, \\dots$ is 'going down by threes'. Find the next three terms.",
  options: [
    '$-4, -7, -10$',
    '$-3, -5, -7$',
    '$-2, -5, -8$',
    '$-4, -6, -8$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Identify the pattern. Subtract $3$ from each term to get the next:<br>
      $5 - 3 = 2$<br>
      $2 - 3 = -1$
    </p>
    <p><strong>Step 2:</strong> Continue the pattern starting from $-1$:</p>
    <ul>
      <li>$-1 - 3 = -4$</li>
      <li>$-4 - 3 = -7$</li>
      <li>$-7 - 3 = -10$</li>
    </ul>
    <p>The next three terms are: $-4, -7, -10$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-10',
  chapterTitle: 'Chapter 10: Negative integers',
  topicId: 'y7-10a',
  topicCode: '10A',
  topicTitle: 'Negative integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: "The sequence $-60, -55, -50, \\dots$ is 'going up by fives'. Find the next three terms.",
  options: [
    '$-45, -40, -35$',
    '$-45, -35, -25$',
    '$-55, -60, -65$',
    '$-40, -30, -20$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Add $5$ to each term:<br>
      $-60 + 5 = -55$<br>
      $-55 + 5 = -50$
    </p>
    <p><strong>Step 2:</strong> Calculate the next three terms starting from $-50$:</p>
    <ul>
      <li>$-50 + 5 = -45$</li>
      <li>$-45 + 5 = -40$</li>
      <li>$-40 + 5 = -35$</li>
    </ul>
    <p>The next three terms are: $-45, -40, -35$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q7: Opposites (8 questions)
// ========================================================
const opposites = [
  { val: '8', opp: '-8' },
  { val: '-6', opp: '6' },
  { val: '-15', opp: '15' },
  { val: '-19', opp: '19' },
  { val: '11', opp: '-11' },
  { val: '-14', opp: '14' },
  { val: '-9', opp: '9' },
  { val: '-5', opp: '5' }
];

opposites.forEach((o) => {
  questions.push({
    chapterId: 'y7-10',
    chapterTitle: 'Chapter 10: Negative integers',
    topicId: 'y7-10a',
    topicCode: '10A',
    topicTitle: 'Negative integers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the opposite of the integer $${o.val}$.`,
    options: [`$${o.opp}$`, `$${o.val}$`, `$0$`, `$${o.val.startsWith('-') ? o.val : '-' + o.val}0$`],
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>The opposite of an integer is its negative, which lies on the exact opposite side of $0$ on the number line at the same distance.</p>
      <p>Algebraically, the opposite of $a$ is $-a$.</p>
      <p>Therefore, the opposite of $${o.val}$ is: <br>
        $-(${o.val}) = ${o.opp}$.
      </p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});


// ========================================================
// Q8: Simplification (6 questions)
// ========================================================
const q8Simp = [
  { expr: '-(-5)', ans: '5', step: 'The negative of a negative integer is a positive integer: $-(-a) = a$. Therefore, $-(-5) = 5$.' },
  { expr: '-(-9)', ans: '9', step: '$-(-a) = a$. Therefore, $-(-9) = 9$.' },
  { expr: '-(-35)', ans: '35', step: '$-(-a) = a$. Therefore, $-(-35) = 35$.' },
  { expr: '-(-(-15))', ans: '-15', step: 'First simplify the inner double negative: $-(-15) = 15$. Next, apply the outer negative: $-(15) = -15$.' },
  { expr: '-(-(-45))', ans: '-45', step: 'Three negative signs multiply to a negative: $-(-(-a)) = -a$. Thus, $-(-(-45)) = -45$.' },
  { expr: '-(-(-(-50)))', ans: '50', step: 'Four negative signs multiply to a positive: $-(-(-(-a))) = a$. Thus, $-(-(-(-50))) = 50$.' }
];

q8Simp.forEach((q) => {
  const fVal = parseInt(q.ans);
  const opts = [
    `$${q.ans}$`,
    `$${(-fVal).toString()}$`,
    `$0$`,
    `$${(fVal * 2).toString()}$`
  ];
  
  // Make sure answer is at index 0
  const ansIdx = opts.indexOf(`$${q.ans}$`);
  
  questions.push({
    chapterId: 'y7-10',
    chapterTitle: 'Chapter 10: Negative integers',
    topicId: 'y7-10a',
    topicCode: '10A',
    topicTitle: 'Negative integers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: q.expr.split('-').length > 3 ? 'medium' : 'easy',
    isActive: true,
    isManual: true,
    question: `Simplify the expression: $${q.expr}$.`,
    options: opts,
    answer: ansIdx !== -1 ? ansIdx : 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});


// ========================================================
// Q9: Inequalities (4 questions)
// ========================================================
const reviewQ9Ineq = [
  { lhs: '4', rhs: '7', ans: '<', step: 'Since $4$ lies to the left of $7$ on the number line, $4$ is less than $7$. Thus, $4 < 7$.' },
  { lhs: '5', rhs: '-6', ans: '>', step: 'Every positive integer is strictly greater than any negative integer. Thus, $5 > -6$.' },
  { lhs: '-9', rhs: '-5', ans: '<', step: 'On a number line, $-9$ lies to the left of $-5$. The further to the left a number is, the smaller it is. Thus, $-9 < -5$.' },
  { lhs: '3', rhs: '-(-4)', ans: '<', step: 'First simplify the right-hand side: $-(-4) = 4$. Now compare: $3$ is less than $4$. Thus, $3 < -(-4)$.' }
];

reviewQ9Ineq.forEach((q) => {
  questions.push({
    chapterId: 'y7-10',
    chapterTitle: 'Chapter 10: Negative integers',
    topicId: 'y7-10a',
    topicCode: '10A',
    topicTitle: 'Negative integers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Insert the correct symbol ($>$ or $<$) in the box to make a true statement:<br>$${q.lhs} \\; \\Box \\; ${q.rhs}$`,
    options: [`$${q.ans}$`, `$${q.ans === '>' ? '<' : '>'}$`, `$=$`],
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});


// ========================================================
// Q10: Thermometer SVG readings (4 questions)
// ========================================================
const q10Therms = [
  { temp: -18, opts: ['-18 °C', '-15 °C', '-20 °C', '18 °C'] },
  { temp: -35, opts: ['-35 °C', '-30 °C', '-40 °C', '35 °C'] },
  { temp: -22, opts: ['-22 °C', '-20 °C', '-25 °C', '22 °C'] },
  { temp: -38, opts: ['-38 °C', '-35 °C', '-42 °C', '38 °C'] }
];

q10Therms.forEach((q, idx) => {
  questions.push({
    chapterId: 'y7-10',
    chapterTitle: 'Chapter 10: Negative integers',
    topicId: 'y7-10a',
    topicCode: '10A',
    topicTitle: 'Negative integers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Read the temperature shown on the thermometer below in degrees Celsius (°C).<br>${getThermometerSVG(q.temp)}`,
    options: q.opts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p><strong>Step 1:</strong> Identify the major temperature line below the top of the red liquid column.</p>
      <p><strong>Step 2:</strong> Count the small division ticks (representing $1^\\circ\\text{C}$ each) up or down to find the exact level.</p>
      <p><strong>Step 3:</strong> For this thermometer, the liquid top lies exactly at $${q.temp}^\\circ\\text{C}$.</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});


// ========================================================
// Q11: 15 Premium Real-world Scenarios for negative numbers
// ========================================================
const q11Scenarios = [
  {
    q: 'A diver dives to a depth of $28\\text{ m}$ below sea level. How can we express this position as an integer relative to sea level?',
    opts: ['-28', '28', '0', '-280'],
    step: 'Sea level is represented by the integer $0$. Since "below sea level" denotes a negative direction, a depth of $28\\text{ m}$ is written as $-28$.'
  },
  {
    q: 'An elevator in a hotel starts on the ground floor ($0$) and goes down $3$ floors to the basement parking. What is its new floor represented as an integer?',
    opts: ['-3', '3', '-2', '-4'],
    step: 'Going down represents a negative change. Starting at $0$ and going down $3$ floors brings the elevator to $0 - 3 = -3$.'
  },
  {
    q: "Chloe's bank balance is overdrawn by $\\$45$. What is her bank balance represented as an integer?",
    opts: ['-45', '45', '-450', '0'],
    step: 'An overdrawn balance means she owes money, which is a negative cash position. Therefore, the balance is represented as $-45$.'
  },
  {
    q: 'The temperature in Mount Kosciuszko is $7$ degrees below freezing ($0^\\circ\\text{C}$). Express this temperature as an integer.',
    opts: ['-7', '7', '0', '-14'],
    step: 'Freezing temperature is $0^\\circ\\text{C}$. "Below freezing" represents a negative number. Thus, $7$ degrees below freezing is $-7$.'
  },
  {
    q: 'A hiker is at an altitude of $150\\text{ m}$ above sea level, while a submarine is directly below at $120\\text{ m}$ below sea level. What is the vertical distance between them?',
    opts: ['270 m', '30 m', '150 m', '120 m'],
    step: 'The altitude of the hiker is $+150\\text{ m}$. The depth of the submarine is $-120\\text{ m}$. <br>The vertical distance is the difference between these altitudes:<br>$150 - (-120) = 150 + 120 = 270\\text{ m}$.'
  },
  {
    q: 'A business made a loss of $\\$1200$ in its first month and a profit of $\\$1800$ in its second month. What is the total net position represented as an integer?',
    opts: ['600', '-600', '3000', '-3000'],
    step: 'A loss is negative: $-\\$1200$. A profit is positive: $+\\$1800$. <br>The net position is:<br>$-1200 + 1800 = +600$.'
  },
  {
    q: 'A golfer plays a round of golf and finishes with a score of $4$ under par. What is their score represented as an integer relative to par?',
    opts: ['-4', '4', '0', '-40'],
    step: 'Par is represented as $0$. "Under par" represents a negative integer score. Thus, $4$ under par is $-4$.'
  },
  {
    q: 'An airplane climbs to an altitude of $4500\\text{ m}$ above sea level and then descends $800\\text{ m}$. What is its final altitude relative to sea level?',
    opts: ['3700 m', '5300 m', '4500 m', '800 m'],
    step: 'Climbing to $4500\\text{ m}$ represents $+4500$. Descending $800\\text{ m}$ is a negative change of $-800$. <br>The final altitude is:<br>$4500 - 800 = 3700\\text{ m}$.'
  },
  {
    q: 'Which integer is greater: $-12$ or $-15$?',
    opts: ['-12', '-15', 'They are equal', 'Cannot be determined'],
    step: 'On a number line, $-12$ lies to the right of $-15$. Numbers to the right are always greater than numbers to the left. Thus, $-12 > -15$.'
  },
  {
    q: 'A freezer temperature is lowered by $6^\\circ\\text{C}$ from its current temperature of $-12^\\circ\\text{C}$. What is the new temperature?',
    opts: ['-18 °C', '-6 °C', '18 °C', '-12 °C'],
    step: 'Lowering the temperature means subtracting:<br>$-12 - 6 = -18^\\circ\\text{C}$.'
  },
  {
    q: 'On a winter day, the temperature in Seoul is $-5^\\circ\\text{C}$ and in Tokyo it is $4^\\circ\\text{C}$. What is the difference in temperature between the two cities?',
    opts: ['9 °C', '1 °C', '-9 °C', '5 °C'],
    step: 'The difference is the higher temperature minus the lower temperature:<br>$4 - (-5) = 4 + 5 = 9^\\circ\\text{C}$.'
  },
  {
    q: 'A metal rod is heated from $-15^\\circ\\text{C}$ to $35^\\circ\\text{C}$. By how many degrees did the temperature of the rod increase?',
    opts: ['50 °C', '20 °C', '-50 °C', '35 °C'],
    step: 'The increase in temperature is the final temperature minus the initial temperature:<br>$35 - (-15) = 35 + 15 = 50^\\circ\\text{C}$.'
  },
  {
    q: 'The Dead Sea shores are at $430\\text{ m}$ below sea level, while Mount Everest stands at $8848\\text{ m}$ above sea level. What is the vertical difference in altitude between the peak of Mount Everest and the Dead Sea shores?',
    opts: ['9278 m', '8418 m', '8848 m', '430 m'],
    step: 'Peak altitude $= +8848\\text{ m}$. Dead sea altitude $= -430\\text{ m}$. <br>Vertical difference is:<br>$8848 - (-430) = 8848 + 430 = 9278\\text{ m}$.'
  },
  {
    q: 'A stock price drops by $\\$8$ on Monday, rises by $\\$12$ on Tuesday, and drops by $\\$5$ on Wednesday. What is the overall net change in the stock price over the three days?',
    opts: ['-$1', '+$1', '+$9', '-$9'],
    step: 'Represent changes as integers: $-8$ (drop), $+12$ (rise), $-5$ (drop). <br>Net change $= -8 + 12 - 5 = 4 - 5 = -1$. <br>The stock price dropped by $\\$1$ overall.'
  },
  {
    q: 'If the total depth of a lake is $42\\text{ m}$, and a fish is swimming at a depth of $15\\text{ m}$ below the surface, how many metres is the fish above the bottom of the lake?',
    opts: ['27 m', '15 m', '42 m', '57 m'],
    step: 'The fish is $15\\text{ m}$ below the surface. The bottom is $42\\text{ m}$ below the surface. <br>The distance from the fish to the bottom is:<br>$42 - 15 = 27\\text{ m}$.'
  }
];

q11Scenarios.forEach((q) => {
  questions.push({
    chapterId: 'y7-10',
    chapterTitle: 'Chapter 10: Negative integers',
    topicId: 'y7-10a',
    topicCode: '10A',
    topicTitle: 'Negative integers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: q.q,
    options: q.opts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

console.log('Total combined Chapter 10 questions built:', questions.length);

// Generate file content
const output = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(questions, null, 2)};

export const importYear7Ch10A = async (forceReset = false) => {
  console.log('[Ch10A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch10 (10a to 10f) questions...');
      const topicsToDelete = ['y7-10a', 'y7-10b', 'y7-10c', 'y7-10d', 'y7-10e', 'y7-10f'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch10 topic questions.');
    }

    // To prevent duplicates, query all existing questions in Ch10 topics
    const existingQuestions = new Set();
    const topicsToCheck = ['y7-10a', 'y7-10b', 'y7-10c', 'y7-10d', 'y7-10e', 'y7-10f'];
    for (const tId of topicsToCheck) {
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
      existingSnap.docs.forEach(doc => {
        existingQuestions.add(doc.data().question.trim());
      });
    }
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch10A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch10A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch10A.js', output);
console.log('Done!');
