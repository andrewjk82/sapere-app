import fs from 'fs';

console.log('Generating 44 easy trigonometry questions...');

const easyQuestions = [];

// ========================================================
// Q1: Triangle Ratios (6 questions)
// ========================================================
const q1BaseSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 60 160 L 180 160 L 180 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 168 160 L 168 148 L 180 148" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="85" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">13</text>
  <text x="120" y="185" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">5</text>
  <text x="195" y="100" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">12</text>
  <path d="M 90 160 A 30 30 0 0 0 84 141" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="96" y="152" fill="#fbbf24" font-size="16" font-family="Outfit, sans-serif" font-weight="600">α</text>
  <path d="M 180 70 A 30 30 0 0 1 156 59" fill="none" stroke="#34d399" stroke-width="2" />
  <text x="162" y="85" fill="#34d399" font-size="16" font-family="Outfit, sans-serif" font-weight="600">β</text>
</svg>`;

easyQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, write down the exact value of $\\cos \\alpha$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify the trigonometric ratio definition**
$$\\cos \\alpha = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$

**Step 2: Read the sides from the triangle relative to angle $\\alpha$**
- **Adjacent side** $= 5$
- **Hypotenuse** $= 13$

**Step 3: Substitute the values**
$$\\cos \\alpha = \\frac{5}{13}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, write down the exact value of $\\tan \\beta$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{5}{12}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }, { text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify the trigonometric ratio definition**
$$\\tan \\beta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

**Step 2: Identify the sides relative to the top angle $\\beta$**
- **Opposite side** (bottom side) $= 5$
- **Adjacent side** (vertical side) $= 12$

**Step 3: Substitute the values**
$$\\tan \\beta = \\frac{5}{12}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, write down the exact value of $\\sin \\alpha$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the sine ratio**
$$\\sin \\alpha = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$

**Step 2: Read the sides from the triangle relative to $\\alpha$**
- **Opposite side** $= 12$
- **Hypotenuse** $= 13$

**Step 3: Substitute the values**
$$\\sin \\alpha = \\frac{12}{13}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, write down the exact value of $\\cos \\beta$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the cosine ratio**
$$\\cos \\beta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$

**Step 2: Read the sides relative to the top angle $\\beta$**
- **Adjacent side** $= 12$
- **Hypotenuse** $= 13$

**Step 3: Substitute the values**
$$\\cos \\beta = \\frac{12}{13}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, write down the exact value of $\\sin \\beta$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the sine ratio**
$$\\sin \\beta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$

**Step 2: Identify the sides relative to the top angle $\\beta$**
- **Opposite side** $= 5$
- **Hypotenuse** $= 13$

**Step 3: Substitute the values**
$$\\sin \\beta = \\frac{5}{13}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, write down the exact value of $\\tan \\alpha$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{12}{5}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{13}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the tangent ratio**
$$\\tan \\alpha = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

**Step 2: Read the sides relative to $\\alpha$**
- **Opposite side** $= 12$
- **Adjacent side** $= 5$

**Step 3: Calculate the ratio**
$$\\tan \\alpha = \\frac{12}{5}$$`
});

// ========================================================
// Q2: Calculator - 4 Decimal Places (8 questions)
// ========================================================
const calcConfigs = [
  { val: 'sin 27^\\circ', ans: '0.4540', sol: '\\sin 27^\\circ \\approx 0.45399 \\implies 0.4540' },
  { val: 'cos 58^\\circ', ans: '0.5299', sol: '\\cos 58^\\circ \\approx 0.52991 \\implies 0.5299' },
  { val: 'tan 38^\\circ', ans: '0.7813', sol: '\\tan 38^\\circ \\approx 0.78128 \\implies 0.7813' },
  { val: 'sin 84^\\circ', ans: '0.9945', sol: '\\sin 84^\\circ \\approx 0.99452 \\implies 0.9945' },
  { val: 'tan 4^\\circ', ans: '0.0699', sol: '\\tan 4^\\circ \\approx 0.06992 \\implies 0.0699' },
  { val: 'cos 31^\\circ', ans: '0.8572', sol: '\\cos 31^\\circ \\approx 0.85716 \\implies 0.8572' },
  { val: 'sin 2^\\circ', ans: '0.0349', sol: '\\sin 2^\\circ \\approx 0.03489 \\implies 0.0349' },
  { val: 'cos 5^\\circ', ans: '0.9962', sol: '\\cos 5^\\circ \\approx 0.99619 \\implies 0.9962' }
];

calcConfigs.forEach((cfg, idx) => {
  easyQuestions.push({
    chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
    question: `Use your calculator to find, correct to four decimal places, the value of $${cfg.val}$.`,
    options: [{ text: `$${cfg.ans}$`, imageUrl: '' }, { text: `$${(parseFloat(cfg.ans) + 0.0125).toFixed(4)}$`, imageUrl: '' }, { text: `$${(parseFloat(cfg.ans) - 0.0084).toFixed(4)}$`, imageUrl: '' }, { text: `$${(parseFloat(cfg.ans) * 1.05).toFixed(4)}$`, imageUrl: '' }],
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: Ensure your calculator is in Degree mode (D)**

**Step 2: Enter the trigonometric function and press execute**
$$${cfg.sol}$$`
  });
});

// ========================================================
// Q3: Calculator DMS - 4 Decimal Places (8 questions)
// ========================================================
const dmsConfigs = [
  { val: 'tan 56^\\circ 15\'', deg: '56.25', ans: '1.4966', sol: '56^\\circ 15\' = 56 + \\frac{15}{60} = 56.25^\\circ' },
  { val: 'cos 34^\\circ 12\'', deg: '34.2', ans: '0.8271', sol: '34^\\circ 12\' = 34 + \\frac{12}{60} = 34.2^\\circ' },
  { val: 'tan 76^\\circ 30\'', deg: '76.5', ans: '4.1653', sol: '76^\\circ 30\' = 76 + \\frac{30}{60} = 76.5^\\circ' },
  { val: 'cos 18^\\circ 45\'', deg: '18.75', ans: '0.9469', sol: '18^\\circ 45\' = 18 + \\frac{45}{60} = 18.75^\\circ' },
  { val: 'sin 41^\\circ 18\'', deg: '41.3', ans: '0.6600', sol: '41^\\circ 18\' = 41 + \\frac{18}{60} = 41.3^\\circ' },
  { val: 'sin 6^\\circ 40\'', deg: '6.6667', ans: '0.1161', sol: '6^\\circ 40\' = 6 + \\frac{40}{60} \\approx 6.6667^\\circ' },
  { val: 'sin 12\'', deg: '0.2', ans: '0.0035', sol: '12\' = \\frac{12}{60} = 0.2^\\circ' },
  { val: 'tan 48\'', deg: '0.8', ans: '0.0140', sol: '48\' = \\frac{48}{60} = 0.8^\\circ' }
];

dmsConfigs.forEach((cfg) => {
  easyQuestions.push({
    chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
    question: `Use your calculator to find, correct to four decimal places, the value of $${cfg.val}$.`,
    options: [{ text: `$${cfg.ans}$`, imageUrl: '' }, { text: `$${(parseFloat(cfg.ans) + 0.0212).toFixed(4)}$`, imageUrl: '' }, { text: `$${(parseFloat(cfg.ans) - 0.0145).toFixed(4)}$`, imageUrl: '' }, { text: `$${(parseFloat(cfg.ans) * 1.12).toFixed(4)}$`, imageUrl: '' }],
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: Convert minutes to decimal degrees**
$$${cfg.sol}$$

**Step 2: Calculate the value on your calculator**
For $${cfg.val}$ (which is equal to $${cfg.deg}^\\circ$):
$$\\text{Value} \\approx ${cfg.ans}$$`
  });
});

// ========================================================
// Q4: Find Angle to Nearest Degree (8 questions)
// ========================================================
const angleDegConfigs = [
  { eq: '\\tan \\theta = 3.5', val: '3.5', ans: '74^\\circ', sol: '\\theta = \\tan^{-1}(3.5) \\approx 74.054^\\circ \\implies 74^\\circ' },
  { eq: '\\cos \\theta = 0.65', val: '0.65', ans: '49^\\circ', sol: '\\theta = \\cos^{-1}(0.65) \\approx 49.458^\\circ \\implies 49^\\circ' },
  { eq: '\\sin \\theta = \\frac{2}{7}', val: '2/7', ans: '17^\\circ', sol: '\\theta = \\sin^{-1}(2/7) \\approx 16.601^\\circ \\implies 17^\\circ' },
  { eq: '\\sin \\theta = 0.584', val: '0.584', ans: '36^\\circ', sol: '\\theta = \\sin^{-1}(0.584) \\approx 35.731^\\circ \\implies 36^\\circ' },
  { eq: '\\cos \\theta = 1.8', val: '1.8', ans: 'No real solution', sol: '\\text{Since the range of } \\cos\\theta \\text{ is } [-1, 1], \\cos\\theta = 1.8 \\text{ has no real solution.}' },
  { eq: '\\cos \\theta = \\frac{5}{8}', val: '5/8', ans: '51^\\circ', sol: '\\theta = \\cos^{-1}(0.625) \\approx 51.317^\\circ \\implies 51^\\circ' },
  { eq: '\\tan \\theta = 2\\frac{1}{4}', val: '2.25', ans: '66^\\circ', sol: '\\theta = \\tan^{-1}(2.25) \\approx 66.037^\\circ \\implies 66^\\circ' },
  { eq: '\\sin \\theta = 1.35', val: '1.35', ans: 'No real solution', sol: '\\text{Since } \\sin\\theta \\text{ cannot exceed } 1, \\sin\\theta = 1.35 \\text{ has no real solution.}' }
];

angleDegConfigs.forEach((cfg) => {
  easyQuestions.push({
    chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
    question: `Find the acute angle $\\theta$ to the nearest degree if $${cfg.eq}$.`,
    options: [
      { text: cfg.ans.includes('No') ? cfg.ans : `$${cfg.ans}$`, imageUrl: '' },
      { text: cfg.ans.includes('No') ? '$0^\\circ$' : `$${(parseInt(cfg.ans) + 4)}^\\circ$`, imageUrl: '' },
      { text: cfg.ans.includes('No') ? '$90^\\circ$' : `$${(parseInt(cfg.ans) - 5)}^\\circ$`, imageUrl: '' },
      { text: cfg.ans.includes('No') ? '$45^\\circ$' : `$${(90 - parseInt(cfg.ans))}^\\circ$`, imageUrl: '' }
    ],
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: Isolate the angle using inverse trigonometric functions**
If $${cfg.eq}$, then:
$$${cfg.sol}$$`
  });
});

// ========================================================
// Q5: Find Angle to Nearest Minute (6 questions)
// ========================================================
const angleMinConfigs = [
  { eq: '\\cos \\alpha = \\frac{4}{5}', ans: '36^\\circ 52\'', sol: '\\alpha = \\cos^{-1}(0.8) \\approx 36.8699^\\circ. \\\\ 0.8699 \\times 60 = 52.19\' \\implies 36^\\circ 52\'' },
  { eq: '\\tan \\alpha = 1.5', ans: '56^\\circ 19\'', sol: '\\alpha = \\tan^{-1}(1.5) \\approx 56.3099^\\circ. \\\\ 0.3099 \\times 60 = 18.59\' \\implies 56^\\circ 19\'' },
  { eq: '\\sin \\alpha = 0.25', ans: '14^\\circ 29\'', sol: '\\alpha = \\sin^{-1}(0.25) \\approx 14.4775^\\circ. \\\\ 0.4775 \\times 60 = 28.65\' \\implies 14^\\circ 29\'' },
  { eq: '\\tan \\alpha = 0.45', ans: '24^\\circ 14\'', sol: '\\alpha = \\tan^{-1}(0.45) \\approx 24.2277^\\circ. \\\\ 0.2277 \\times 60 = 13.66\' \\implies 24^\\circ 14\'' },
  { eq: '\\sin \\alpha = 0.6842', ans: '43^\\circ 11\'', sol: '\\alpha = \\sin^{-1}(0.6842) \\approx 43.1751^\\circ. \\\\ 0.1751 \\times 60 = 10.50\' \\implies 43^\\circ 11\'' },
  { eq: '\\cos \\alpha = \\frac{5}{12}', ans: '65^\\circ 23\'', sol: '\\alpha = \\cos^{-1}(5/12) \\approx 65.3757^\\circ. \\\\ 0.3757 \\times 60 = 22.54\' \\implies 65^\\circ 23\'' }
];

angleMinConfigs.forEach((cfg) => {
  easyQuestions.push({
    chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
    question: `Use your calculator to find the acute angle $\\alpha$, correct to the nearest minute, if $${cfg.eq}$.`,
    options: [
      { text: `$${cfg.ans}$`, imageUrl: '' },
      { text: `$${cfg.ans.split(' ')[0]} 12'$`, imageUrl: '' },
      { text: `$${cfg.ans.split(' ')[0]} 42'$`, imageUrl: '' },
      { text: `$${(90 - parseInt(cfg.ans))}^\\circ 30'$`, imageUrl: '' }
    ],
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: Compute inverse trigonometric function in decimal degrees**
$$${cfg.sol.split('. \\\\ ')[0]}$$

**Step 2: Convert the decimal part to minutes by multiplying by 60**
$$${cfg.sol.split('. \\\\ ')[1] || cfg.sol}$$`
  });
});

// ========================================================
// Q6: Find side length to nearest whole number (4 questions)
// ========================================================
const q6aSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 190 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 130 L 178 118 L 190 118" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="70" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">25</text>
  <text x="205" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">a</text>
  <path d="M 80 130 A 30 30 0 0 0 74 111" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="90" y="122" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">35°</text>
</svg>`;

easyQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `Find, correct to the nearest whole number, the value of the side marked with $a$ in the triangle below.<br/>${q6aSvg}`,
  options: [{ text: '$14$', imageUrl: '' }, { text: '$20$', imageUrl: '' }, { text: '$12$', imageUrl: '' }, { text: '$16$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify sides and angle**
- **Angle** $= 35^\\circ$
- **Opposite side** $= a$
- **Hypotenuse** $= 25$

**Step 2: Write down the trigonometric equation**
$$\\sin 35^\\circ = \\frac{a}{25}$$

**Step 3: Solve for $a$**
$$a = 25 \\times \\sin 35^\\circ$$
$$a \\approx 25 \\times 0.573576 = 14.339$$

**Step 4: Round to the nearest whole number**
$$a \\approx 14$$`
});

const q6bSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 50 30 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 50 118 L 62 118 L 62 130" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="130" y="65" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">30</text>
  <text x="120" y="150" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">b</text>
  <path d="M 160 130 A 30 30 0 0 0 170 108" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="135" y="120" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">42°</text>
</svg>`;

easyQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `Find, correct to the nearest whole number, the value of the side marked with $b$ in the triangle below.<br/>${q6bSvg}`,
  options: [{ text: '$22$', imageUrl: '' }, { text: '$20$', imageUrl: '' }, { text: '$24$', imageUrl: '' }, { text: '$18$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify sides and angle**
- **Angle** $= 42^\\circ$
- **Adjacent side** $= b$
- **Hypotenuse** $= 30$

**Step 2: Select the cosine ratio**
$$\\cos 42^\\circ = \\frac{b}{30}$$

**Step 3: Solve for $b$**
$$b = 30 \\times \\cos 42^\\circ$$
$$b \\approx 30 \\times 0.7431448 = 22.294$$

**Step 4: Round to the nearest whole number**
$$b \\approx 22$$`
});

const q6cSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 30 L 190 30 L 50 130 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 50 42 L 62 42 L 62 30" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="120" y="20" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">50</text>
  <text x="32" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">c</text>
  <path d="M 160 30 A 30 30 0 0 1 170 42" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="135" y="48" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">25°</text>
</svg>`;

easyQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `Find, correct to the nearest whole number, the value of the side marked with $c$ in the triangle below.<br/>${q6cSvg}`,
  options: [{ text: '$23$', imageUrl: '' }, { text: '$21$', imageUrl: '' }, { text: '$25$', imageUrl: '' }, { text: '$45$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify the given dimensions relative to $25^\\circ$**
- **Adjacent side** $= 50$
- **Opposite side** $= c$

**Step 2: Choose the tangent ratio**
$$\\tan 25^\\circ = \\frac{c}{50}$$

**Step 3: Solve for $c$**
$$c = 50 \\times \\tan 25^\\circ$$
$$c \\approx 50 \\times 0.4663076 = 23.315$$

**Step 4: Round to the nearest whole number**
$$c \\approx 23$$`
});

const q6dSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 140 L 190 140 L 50 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 50 52 L 62 52 L 62 40" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="120" y="80" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">d</text>
  <text x="120" y="160" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">120</text>
  <path d="M 70 140 A 20 20 0 0 1 61 123" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="75" y="125" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">58°</text>
</svg>`;

easyQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `Find, correct to the nearest whole number, the value of the side marked with $d$ in the triangle below.<br/>${q6dSvg}`,
  options: [{ text: '$64$', imageUrl: '' }, { text: '$102$', imageUrl: '' }, { text: '$58$', imageUrl: '' }, { text: '$68$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Analyze the sides relative to the $58^\\circ$ angle**
- **Hypotenuse** $= 120$
- **Adjacent side** $= d$

**Step 2: Apply the cosine ratio**
$$\\cos 58^\\circ = \\frac{d}{120}$$

**Step 3: Solve for $d$**
$$d = 120 \\times \\cos 58^\\circ$$
$$d \\approx 120 \\times 0.529919 = 63.590$$

**Step 4: Round to the nearest integer**
$$d \\approx 64$$`
});

// ========================================================
// Q7: Find angle size to nearest degree (4 questions)
// ========================================================
const q7aSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 60 140 L 180 140 L 60 30 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 60 128 L 72 128 L 72 140" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="40" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">12</text>
  <text x="130" y="75" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">15</text>
  <path d="M 150 140 A 30 30 0 0 0 162 121" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="135" y="132" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">α</text>
</svg>`;

easyQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `Find the angle $\\alpha$, correct to the nearest degree, in the right triangle below.<br/>${q7aSvg}`,
  options: [{ text: '$37°$', imageUrl: '' }, { text: '$53°$', imageUrl: '' }, { text: '$36°$', imageUrl: '' }, { text: '$35°$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify given sides relative to angle $\\alpha$**
- **Adjacent side** $= 12$
- **Hypotenuse** $= 15$

**Step 2: Choose the cosine ratio**
$$\\cos \\alpha = \\frac{12}{15} = 0.8$$

**Step 3: Solve for $\\alpha$**
$$\\alpha = \\cos^{-1}(0.8) \\approx 36.869897^\\circ$$

**Step 4: Round to the nearest degree**
$$\\alpha \\approx 37^\\circ$$`
});

const q7bSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 60 140 L 180 140 L 120 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 120 40 L 129 55 L 114 64" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="80" y="80" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600">7</text>
  <text x="160" y="80" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600">9</text>
  <path d="M 80 140 A 25 25 0 0 0 98 124" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="94" y="132" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">β</text>
</svg>`;

easyQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `Find the angle $\\beta$, correct to the nearest degree, in the right-angled triangle below.<br/>${q7bSvg}`,
  options: [{ text: '$51°$', imageUrl: '' }, { text: '$39°$', imageUrl: '' }, { text: '$50°$', imageUrl: '' }, { text: '$52°$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify given sides relative to angle $\\beta$**
- **Opposite side** $= 7$
- **Hypotenuse** $= 9$

**Step 2: Choose the sine ratio**
$$\\sin \\beta = \\frac{7}{9}$$

**Step 3: Solve for $\\beta$**
$$\\beta = \\sin^{-1}\\left(\\frac{7}{9}\\right) \\approx 51.057^\\circ$$

**Step 4: Round to the nearest degree**
$$\\beta \\approx 51^\\circ$$`
});

const q7cSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 140 L 190 140 L 190 60 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 140 L 178 128 L 190 128" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="120" y="160" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">13</text>
  <text x="205" y="100" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">5</text>
  <path d="M 80 140 A 30 30 0 0 0 74 121" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="92" y="132" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">γ</text>
</svg>`;

easyQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `Find the angle $\\gamma$, correct to the nearest degree, in the right triangle below.<br/>${q7cSvg}`,
  options: [{ text: '$21°$', imageUrl: '' }, { text: '$23°$', imageUrl: '' }, { text: '$69°$', imageUrl: '' }, { text: '$20°$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify given sides relative to angle $\\gamma$**
- **Opposite side** $= 5$
- **Adjacent side** $= 13$

**Step 2: Choose the tangent ratio**
$$\\tan \\gamma = \\frac{5}{13}$$

**Step 3: Solve for $\\gamma$**
$$\\gamma = \\tan^{-1}\\left(\\frac{5}{13}\\right) \\approx 21.037^\\circ$$

**Step 4: Round to the nearest degree**
$$\\gamma \\approx 21^\\circ$$`
});

const q7dSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 140 L 190 140 L 190 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 140 L 178 128 L 190 128" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="120" y="160" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">18</text>
  <text x="205" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">11</text>
  <path d="M 190 70 A 30 30 0 0 1 168 59" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="175" y="80" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">δ</text>
</svg>`;

easyQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'easy', type: 'multiple_choice',
  question: `Find the angle $\\delta$, correct to the nearest degree, in the right triangle below.<br/>${q7dSvg}`,
  options: [{ text: '$59°$', imageUrl: '' }, { text: '$31°$', imageUrl: '' }, { text: '$60°$', imageUrl: '' }, { text: '$58°$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify given sides relative to the top angle $\\delta$**
- **Opposite side** $= 18$
- **Adjacent side** $= 11$

**Step 2: Choose the tangent ratio**
$$\\tan \\delta = \\frac{18}{11}$$

**Step 3: Solve for $\\delta$**
$$\\delta = \\tan^{-1}\\left(\\frac{18}{11}\\right) \\approx 58.57^\\circ$$

**Step 4: Round up to the nearest degree**
$$\\delta \\approx 59^\\circ$$`
});

// ========================================================
// COMBINE WITH EXISTING 35 MEDIUM TRIGONOMETRY QUESTIONS
// ========================================================
const mediumQuestions = JSON.parse(fs.readFileSync('scratch/questions6A.json', 'utf8'));
const allQuestions6A = [...easyQuestions, ...mediumQuestions];

console.log(`Successfully generated ${easyQuestions.length} easy questions.`);
console.log(`Loaded ${mediumQuestions.length} existing medium questions.`);
console.log(`Combined total: ${allQuestions6A.length} questions.`);

// Write pure JSON backup
fs.writeFileSync('scratch/questions6A_all.json', JSON.stringify(allQuestions6A, null, 2));

// Generate the fully unified import script content for Chapter 6
const outputCh6All = `import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-6',
  chapterTitle: 'Chapter 6: Trigonometry',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

export const questions6A = ${JSON.stringify(allQuestions6A, null, 2)};

export const importYear11AdvCh6 = async (forceReset = false) => {
  console.log(\`Starting unified sync of Y11 Adv Ch6A (Total \${questions6A.length})...\` + '\\n' + \`Chapter: Trigonometry\`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), 
      where('chapterId', '==', 'y11a-6'),
      where('topicCode', '==', '6A')
    ));
    
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(\`Cleared \${qSnap.size} old questions under chapter y11a-6, topicCode 6A.\`);

    let count = 0;
    for (const q of questions6A) {
        await addDoc(collection(db, 'questions'), { 
          ...q, 
          createdAt: serverTimestamp(), 
          updatedAt: serverTimestamp(), 
          isActive: true 
        });
        count++;
    }
    console.log(\`Successfully imported \${count} questions.\`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
`;

fs.writeFileSync('src/scripts/importYear11AdvCh6.js', outputCh6All);
console.log('Successfully wrote combined easy + medium questions to src/scripts/importYear11AdvCh6.js!');
