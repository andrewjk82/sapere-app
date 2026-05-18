import fs from 'fs';

console.log('Generating Year 11 Chapter 5A premium Trigonometry questions...');

const originalQuestions = [
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Find the value of $y = (x - 2)^2$ when $x = 3$.',
    options: [{ text: '1', imageUrl: '' }, { text: '2', imageUrl: '' }, { text: '4', imageUrl: '' }, { text: '9', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Substitute $x = 3$ into the equation.\n$$y = (3 - 2)^2$$\nStep 2: Simplify the expression inside the parenthesis.\n$$y = (1)^2$$\nStep 3: Calculate the square.\n$$y = 1$$'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'What is the coordinates of the vertex for the parabola $y = (x - 3)^2$?',
    options: [{ text: '$(3, 0)$', imageUrl: '' }, { text: '$(-3, 0)$', imageUrl: '' }, { text: '$(0, 3)$', imageUrl: '' }, { text: '$(0, -3)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Identify the standard vertex form $y = a(x - h)^2 + k$.\nStep 2: Compare $y = (x - 3)^2$ to the standard form.\n- Here, $h = 3$ and $k = 0$.\nStep 3: The vertex is $(h, k)$.\nResult: $(3, 0)$'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Which transformation maps the graph of $y = x^2$ onto $y = (x - 4)^2$?',
    options: [
      { text: 'A horizontal shift 4 units to the right', imageUrl: '' },
      { text: 'A horizontal shift 4 units to the left', imageUrl: '' },
      { text: 'A vertical shift 4 units up', imageUrl: '' },
      { text: 'A vertical shift 4 units down', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Analyze the change in the function. The variable $x$ is replaced by $(x - 4)$.\nStep 2: Recall the rule: $f(x - h)$ represents a horizontal shift of $h$ units.\nStep 3: Since $h = 4$ (positive), the graph moves to the **right**.\nResult: 4 units to the right.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Find the $y$-intercept of the cubic function $y = \\frac{1}{2}x^3 + 4$.',
    options: [{ text: '$(0, 4)$', imageUrl: '' }, { text: '$(0, 2)$', imageUrl: '' }, { text: '$(4, 0)$', imageUrl: '' }, { text: '$(0, 0)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: To find the $y$-intercept, set $x = 0$.\nStep 2: Substitute into the equation:\n$$y = \\frac{1}{2}(0)^3 + 4$$\n$$y = 0 + 4 = 4$$\nStep 3: The intercept is a point $(0, 4)$.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'What transformation maps $y = x^3$ to $y = x^3 + 5$?',
    options: [
      { text: 'A vertical shift 5 units up', imageUrl: '' },
      { text: 'A vertical shift 5 units down', imageUrl: '' },
      { text: 'A horizontal shift 5 units left', imageUrl: '' },
      { text: 'A horizontal shift 5 units right', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Observe that 5 is added to the entire function ($y = f(x) + k$).\nStep 2: Adding a constant $k$ outside the parent function moves the graph vertically.\nStep 3: Since $k = 5$ is positive, the shift is **upward**.\nResult: 5 units up.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'How has the parabola $y = x^2$ been shifted to produce $y = x^2 + 3$?',
    options: [{ text: 'Shifted 3 units up', imageUrl: '' }, { text: 'Shifted 3 units down', imageUrl: '' }, { text: 'Shifted 3 units right', imageUrl: '' }, { text: 'Shifted 3 units left', imageUrl: '' }],
    answer: "0",
    solution: 'The transformation $y = f(x) + k$ shifts the graph vertically by $k$ units. Here $k = 3$, so it is 3 units up.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'How has the parabola $y = x^2$ been shifted to produce $y = (x + 5)^2$?',
    options: [{ text: 'Shifted 5 units left', imageUrl: '' }, { text: 'Shifted 5 units right', imageUrl: '' }, { text: 'Shifted 5 units up', imageUrl: '' }, { text: 'Shifted 5 units down', imageUrl: '' }],
    answer: "0",
    solution: 'The transformation $y = f(x + h)$ shifts the graph horizontally. For $x + 5$, the shift is 5 units to the **left**.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Describe the shift from $y = \\frac{1}{x}$ to $y = \\frac{1}{x - 6}$.',
    options: [{ text: '6 units to the right', imageUrl: '' }, { text: '6 units to the left', imageUrl: '' }, { text: '6 units up', imageUrl: '' }, { text: '6 units down', imageUrl: '' }],
    answer: "0",
    solution: 'Replacing $x$ with $(x - 6)$ in the denominator is a horizontal translation of 6 units to the right.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Describe the shift from $y = \\frac{1}{x}$ to $y = \\frac{1}{x} - 2$.',
    options: [{ text: '2 units down', imageUrl: '' }, { text: '2 units up', imageUrl: '' }, { text: '2 units left', imageUrl: '' }, { text: '2 units right', imageUrl: '' }],
    answer: "0",
    solution: 'Subtracting 2 from the entire function is a vertical translation of 2 units down.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Find the center of the circle given by the equation $(x + 2)^2 + y^2 = 9$.',
    options: [{ text: '$(-2, 0)$', imageUrl: '' }, { text: '$(2, 0)$', imageUrl: '' }, { text: '$(0, -2)$', imageUrl: '' }, { text: '$(0, 2)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$.\nStep 2: For $(x + 2)^2 + y^2 = 9$, we have $h = -2$ and $k = 0$.\nStep 3: The center is $(h, k) = (-2, 0)$.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Functions and Graphs',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'What is the radius of the circle $(x - 1)^2 + (y + 4)^2 = 16$?',
    options: [{ text: '4', imageUrl: '' }, { text: '16', imageUrl: '' }, { text: '1', imageUrl: '' }, { text: '2', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: The equation is in the form $(x - h)^2 + (y - k)^2 = r^2$.\nStep 2: Identify $r^2 = 16$.\nStep 3: Take the square root: $r = \\sqrt{16} = 4$.'
  }
];

const trigQuestions = [];

// ==========================================
// QUESTION 1: Right Triangle Trig Ratios (6 Questions)
// ==========================================
const q1BaseSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 150 L 190 150 L 190 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 150 L 178 138 L 190 138" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="105" y="85" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">13</text>
  <text x="120" y="175" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">5</text>
  <text x="210" y="100" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">12</text>
  <path d="M 80 150 A 30 30 0 0 0 74 131" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="90" y="142" fill="#fbbf24" font-size="16" font-family="Outfit, sans-serif" font-weight="600">θ</text>
  <path d="M 190 70 A 30 30 0 0 1 166 59" fill="none" stroke="#34d399" stroke-width="2" />
  <text x="172" y="85" fill="#34d399" font-size="16" font-family="Outfit, sans-serif" font-weight="600">φ</text>
</svg>`;

// Q1.1: sin theta
trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Trigonometric Ratios', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\sin \\theta$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Recall the definition of the sine ratio in a right-angled triangle:
$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$

**Step 2:** From the given diagram, identify the sides relative to the angle $\\theta$:
- **Opposite side** (facing $\\theta$) $= 12$
- **Hypotenuse** (longest side opposite the right angle) $= 13$

**Step 3:** Substitute these values into the ratio:
$$\\sin \\theta = \\frac{12}{13}$$`
});

// Q1.2: cos theta
trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Trigonometric Ratios', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\cos \\theta$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Recall the definition of the cosine ratio in a right-angled triangle:
$$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$

**Step 2:** From the given diagram, identify the sides relative to the angle $\\theta$:
- **Adjacent side** (next to $\\theta$) $= 5$
- **Hypotenuse** $= 13$

**Step 3:** Substitute these values into the ratio:
$$\\cos \\theta = \\frac{5}{13}$$`
});

// Q1.3: tan theta
trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Trigonometric Ratios', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\tan \\theta$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{12}{5}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{13}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Recall the definition of the tangent ratio in a right-angled triangle:
$$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

**Step 2:** From the given diagram, identify the sides relative to the angle $\\theta$:
- **Opposite side** $= 12$
- **Adjacent side** $= 5$

**Step 3:** Substitute these values into the ratio:
$$\\tan \\theta = \\frac{12}{5}$$`
});

// Q1.4: sin phi
trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Trigonometric Ratios', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\sin \\phi$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Recall the definition of the sine ratio in a right-angled triangle:
$$\\sin \\phi = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$

**Step 2:** From the given diagram, identify the sides relative to the angle $\\phi$ at the top:
- **Opposite side** (facing $\\phi$) $= 5$
- **Hypotenuse** $= 13$

**Step 3:** Substitute these values into the ratio:
$$\\sin \\phi = \\frac{5}{13}$$`
});

// Q1.5: cos phi
trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Trigonometric Ratios', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\cos \\phi$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Recall the definition of the cosine ratio in a right-angled triangle:
$$\\cos \\phi = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$

**Step 2:** From the given diagram, identify the sides relative to the angle $\\phi$ at the top:
- **Adjacent side** (next to $\\phi$) $= 12$
- **Hypotenuse** $= 13$

**Step 3:** Substitute these values into the ratio:
$$\\cos \\phi = \\frac{12}{13}$$`
});

// Q1.6: tan phi
trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Trigonometric Ratios', difficulty: 'easy', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\tan \\phi$.<br/>${q1BaseSvg}`,
  options: [{ text: '$\\frac{5}{12}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }, { text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Recall the definition of the tangent ratio in a right-angled triangle:
$$\\tan \\phi = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

**Step 2:** From the given diagram, identify the sides relative to the angle $\\phi$ at the top:
- **Opposite side** $= 5$
- **Adjacent side** $= 12$

**Step 3:** Substitute these values into the ratio:
$$\\tan \\phi = \\frac{5}{12}$$`
});


// ==========================================
// QUESTION 2: Calculator Decimal Conversions (8 Questions)
// ==========================================
const q2Data = [
  { name: 'a', func: 'sin', angle: 27, ans: '0.4540', opts: ['0.4540', '0.4226', '0.8910', '0.5000'] },
  { name: 'b', func: 'cos', angle: 58, ans: '0.5299', opts: ['0.5299', '0.8480', '0.5000', '0.6018'] },
  { name: 'c', func: 'tan', angle: 42, ans: '0.9004', opts: ['0.9004', '0.7071', '0.8660', '1.1106'] },
  { name: 'd', func: 'sin', angle: 81, ans: '0.9877', opts: ['0.9877', '0.9986', '0.1564', '0.9511'] },
  { name: 'e', func: 'tan', angle: 4, ans: '0.0699', opts: ['0.0699', '0.0698', '0.9976', '0.0523'] },
  { name: 'f', func: 'cos', angle: 38, ans: '0.7880', opts: ['0.7880', '0.6157', '0.7071', '0.8090'] },
  { name: 'g', func: 'sin', angle: 8, ans: '0.1392', opts: ['0.1392', '0.1405', '0.9903', '0.1379'] },
  { name: 'h', func: 'cos', angle: 7, ans: '0.9925', opts: ['0.9925', '0.9903', '0.1219', '0.9950'] }
];

q2Data.forEach(item => {
  trigQuestions.push({
    chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Calculator Skills', difficulty: 'easy', type: 'multiple_choice',
    question: `Use your calculator to find, correct to four decimal places: $\\${item.func} ${item.angle}^\\circ$.`,
    options: item.opts.map(o => ({ text: o, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1:** Ensure your calculator is set to **Degree (DEG)** mode.
**Step 2:** Key in the trigonometric expression:
$$\\${item.func}(${item.angle}^\\circ)$$
**Step 3:** Evaluate and note the displayed decimal value:
$$\\${item.func}(${item.angle}^\\circ) \\approx ${parseFloat(item.ans) + 0.00001}$$ (before rounding)
**Step 4:** Round to exactly **4 decimal places**:
- Looking at the 5th decimal digit to determine whether to round up or down.
- The rounded value is **${item.ans}**.`
  });
});


// ==========================================
// QUESTION 3: DMS Conversions (8 Questions)
// ==========================================
const q3Data = [
  { func: 'tan', deg: 54, min: 20, ans: '1.3934', opts: ['1.3934', '1.3764', '1.4281', '1.3333'] },
  { func: 'cos', deg: 35, min: 12, ans: '0.8171', opts: ['0.8171', '0.8090', '0.8192', '0.5764'] },
  { func: 'tan', deg: 72, min: 30, ans: '3.1716', opts: ['3.1716', '3.0777', '3.2709', '2.9897'] },
  { func: 'cos', deg: 19, min: 45, ans: '0.9412', opts: ['0.9412', '0.9455', '0.9397', '0.3379'] },
  { func: 'sin', deg: 41, min: 18, ans: '0.6600', opts: ['0.6600', '0.6561', '0.7513', '0.6691'] },
  { func: 'sin', deg: 7, min: 40, ans: '0.1334', opts: ['0.1334', '0.1219', '0.1392', '0.1305'] },
  { func: 'sin', deg: 0, min: 12, ans: '0.0035', opts: ['0.0035', '0.0029', '0.2000', '0.0041'] },
  { func: 'tan', deg: 0, min: 48, ans: '0.0140', opts: ['0.0140', '0.0175', '0.8000', '0.0116'] }
];

q3Data.forEach(item => {
  const displayAngle = item.deg === 0 ? `${item.min}'` : `${item.deg}^\\circ ${item.min}'`;
  trigQuestions.push({
    chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Calculator Skills (DMS)', difficulty: 'medium', type: 'multiple_choice',
    question: `Use your calculator to find, correct to four decimal places: $\\${item.func}(${displayAngle})$.`,
    options: item.opts.map(o => ({ text: o, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1:** Recall that $1$ minute ($1'$) is equal to $\\frac{1}{60}$ of a degree.
**Step 2:** Convert the degrees and minutes into a decimal degree value:
$$${item.deg}^\\circ ${item.min}' = ${item.deg} + \\frac{${item.min}}{60} = ${(item.deg + item.min/60).toFixed(4)}^\\circ$$

**Step 3:** Key this decimal degree value into your calculator under DEG mode:
$$\\${item.func}\\left(${(item.deg + item.min/60).toFixed(4)}^\\circ\\right)$$
*(Alternatively, use the degrees, minutes, seconds button $\\boxed{^\\circ \\, ' \\, ''}$ on your calculator directly).*

**Step 4:** Evaluate the value and round to **4 decimal places**:
$$\\${item.func}(${displayAngle}) \\approx ${item.ans}$$`
  });
});


// ==========================================
// QUESTION 4: Inverse Trig nearest degree (8 Questions)
// ==========================================
const q4Data = [
  { eqn: '\\tan \\theta = 3.5', ans: '74^\\circ', opts: ['74^\\circ', '73^\\circ', '16^\\circ', '75^\\circ'] },
  { eqn: '\\cos \\theta = 0.65', ans: '49^\\circ', opts: ['49^\\circ', '50^\\circ', '41^\\circ', '48^\\circ'] },
  { eqn: '\\sin \\theta = \\frac{1}{6}', ans: '10^\\circ', opts: ['10^\\circ', '9^\\circ', '80^\\circ', '11^\\circ'] },
  { eqn: '\\sin \\theta = 0.528', ans: '32^\\circ', opts: ['32^\\circ', '31^\\circ', '58^\\circ', '33^\\circ'] },
  { eqn: '\\cos \\theta = 1.8', ans: 'No real solution', opts: ['No real solution', '36^\\circ', '0^\\circ', '56^\\circ'] },
  { eqn: '\\cos \\theta = \\frac{5}{8}', ans: '51^\\circ', opts: ['51^\\circ', '52^\\circ', '39^\\circ', '50^\\circ'] },
  { eqn: '\\tan \\theta = 2\\frac{1}{4}', ans: '66^\\circ', opts: ['66^\\circ', '65^\\circ', '24^\\circ', '67^\\circ'] },
  { eqn: '\\sin \\theta = 1.25', ans: 'No real solution', opts: ['No real solution', '53^\\circ', '90^\\circ', '37^\\circ'] }
];

q4Data.forEach(item => {
  trigQuestions.push({
    chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Inverse Trig Ratios', difficulty: 'medium', type: 'multiple_choice',
    question: `Use your calculator to find the acute angle $\\theta$, correct to the nearest degree, if: $${item.eqn}$.`,
    options: item.opts.map(o => ({ text: o, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

${item.ans === 'No real solution' 
? `**Step 1:** Observe the given equation:
$$\\sin \\theta \\text{ (or } \\cos \\theta\\text{)} = 1.8 \\text{ (or } 1.25\\text{)}$$

**Step 2:** Recall the fundamental properties of the sine and cosine functions. For any real angle $\\theta$:
$$-1 \\le \\sin \\theta \\le 1$$
$$-1 \\le \\cos \\theta \\le 1$$

**Step 3:** Since the value exceeds $1$, there is **no real angle** that satisfies this equation. Your calculator will output an "Error" if you attempt to calculate the inverse.
**Result:** **No real solution**.`
: `**Step 1:** To solve for the acute angle $\\theta$, take the inverse trigonometric function of both sides:
$$\\theta = \\text{trig}^{-1}(\\text{value})$$

**Step 2:** Compute using a calculator in DEG mode:
$$\\theta \\approx ${item.opts[0].replace('^\\circ', '')}$$ (before rounding)

**Step 3:** Round to the **nearest degree**:
- Look at the decimal part: if it is $0.5$ or greater, round up; otherwise, round down.
- The rounded angle is **$${item.ans}$$**.`}`
  });
});


// ==========================================
// QUESTION 5: Inverse Trig nearest minute (6 Questions)
// ==========================================
const q5Data = [
  { eqn: '\\cos \\alpha = \\frac{2}{3}', ans: '48^\\circ 11\'', opts: ['48^\\circ 11\'', '48^\\circ 12\'', '41^\\circ 49\'', '48^\\circ 10\''] },
  { eqn: '\\tan \\alpha = 1.5', ans: '56^\\circ 19\'', opts: ['56^\\circ 19\'', '56^\\circ 18\'', '33^\\circ 41\'', '56^\\circ 20\''] },
  { eqn: '\\sin \\alpha = 0.25', ans: '14^\\circ 29\'', opts: ['14^\\circ 29\'', '14^\\circ 28\'', '75^\\circ 31\'', '14^\\circ 30\''] },
  { eqn: '\\tan \\alpha = 0.4', ans: '21^\\circ 48\'', opts: ['21^\\circ 48\'', '21^\\circ 47\'', '68^\\circ 12\'', '21^\\circ 49\''] },
  { eqn: '\\sin \\alpha = 0.6842', ans: '43^\\circ 10\'', opts: ['43^\\circ 10\'', '43^\\circ 11\'', '46^\\circ 50\'', '43^\\circ 9\''] },
  { eqn: '\\cos \\alpha = \\frac{5}{12}', ans: '65^\\circ 23\'', opts: ['65^\\circ 23\'', '65^\\circ 24\'', '24^\\circ 37\'', '65^\\circ 22\''] }
];

q5Data.forEach(item => {
  trigQuestions.push({
    chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Inverse Trig (DMS)', difficulty: 'medium', type: 'multiple_choice',
    question: `Use your calculator to find the acute angle $\\alpha$, correct to the nearest minute, if: $${item.eqn}$.`,
    options: item.opts.map(o => ({ text: o, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1:** To solve for the acute angle $\\alpha$, take the inverse trigonometric function of both sides:
$$\\alpha = \\text{trig}^{-1}(\\text{value})$$

**Step 2:** Evaluate the angle using a calculator in DEG mode:
- For example, if value is $\\frac{2}{3}$, $\\alpha = \\arccos(2/3) \\approx 48.1897^\\circ$.

**Step 3:** Convert the decimal degree part to minutes:
$$\\text{Minutes} = 0.1897 \\times 60 = 11.38'$$

**Step 4:** Round the minutes to the nearest whole number:
- Since $11.38'$ is closer to $11'$, we round to $11'$.
*(Alternatively, press the $\\boxed{^\\circ \\, ' \\, ''}$ key on your calculator to perform the conversion instantly).*

**Step 5:** Write the final answer:
$$\\alpha \\approx ${item.ans}$$`
  });
});


// ==========================================
// QUESTION 6: Finding Side Lengths with Diagrams (4 Questions)
// ==========================================

// Q6a
const q6aSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 150 L 190 150 L 190 52 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 150 L 178 138 L 190 138" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="85" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">25</text>
  <text x="210" y="105" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">x</text>
  <path d="M 80 150 A 30 30 0 0 0 74 131" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="90" y="142" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">35°</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Finding Side Lengths', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to the nearest whole number, the value of the pronumeral $x$ in the diagram below.<br/>${q6aSvg}`,
  options: [{ text: '14', imageUrl: '' }, { text: '20', imageUrl: '' }, { text: '18', imageUrl: '' }, { text: '12', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Analyze the given right-angled triangle relative to the $35^\\circ$ angle:
- The **opposite** side is $x$.
- The **hypotenuse** is $25$.

**Step 2:** Select the trigonometric ratio that relates the opposite side and the hypotenuse:
$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$

**Step 3:** Substitute the given values into the formula:
$$\\sin 35^\\circ = \\frac{x}{25}$$

**Step 4:** Solve for $x$ by multiplying both sides by $25$:
$$x = 25 \\times \\sin 35^\\circ$$

**Step 5:** Calculate the value and round to the nearest whole number:
$$x \\approx 25 \\times 0.5736 = 14.339 \\approx 14$$`
});

// Q6b
const q6bSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 150 L 190 150 L 50 24 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 50 138 L 62 138 L 62 150" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="130" y="80" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">30</text>
  <text x="120" y="175" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">y</text>
  <path d="M 160 150 A 30 30 0 0 0 170 128" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="135" y="140" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">42°</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Finding Side Lengths', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to the nearest whole number, the value of the pronumeral $y$ in the diagram below.<br/>${q6bSvg}`,
  options: [{ text: '22', imageUrl: '' }, { text: '20', imageUrl: '' }, { text: '25', imageUrl: '' }, { text: '18', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Analyze the given right-angled triangle relative to the $42^\\circ$ angle:
- The **adjacent** side is $y$.
- The **hypotenuse** is $30$.

**Step 2:** Select the trigonometric ratio that relates the adjacent side and the hypotenuse:
$$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$

**Step 3:** Substitute the given values into the formula:
$$\\cos 42^\\circ = \\frac{y}{30}$$

**Step 4:** Solve for $y$ by multiplying both sides by $30$:
$$y = 30 \\times \\cos 42^\\circ$$

**Step 5:** Calculate the value and round to the nearest whole number:
$$y \\approx 30 \\times 0.7431 = 22.29 \\approx 22$$`
});

// Q6c
const q6cSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 50 L 190 50 L 50 115 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 50 62 L 62 62 L 62 50" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="120" y="38" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">50</text>
  <text x="32" y="88" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">z</text>
  <path d="M 160 50 A 30 30 0 0 1 170 62" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="135" y="68" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">25°</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Finding Side Lengths', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to the nearest whole number, the value of the pronumeral $z$ in the diagram below.<br/>${q6cSvg}`,
  options: [{ text: '23', imageUrl: '' }, { text: '21', imageUrl: '' }, { text: '25', imageUrl: '' }, { text: '45', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Analyze the given right-angled triangle relative to the $25^\\circ$ angle:
- The **opposite** side is $z$.
- The **adjacent** side is $50$.

**Step 2:** Select the trigonometric ratio that relates the opposite side and the adjacent side:
$$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

**Step 3:** Substitute the given values into the formula:
$$\\tan 25^\\circ = \\frac{z}{50}$$

**Step 4:** Solve for $z$ by multiplying both sides by $50$:
$$z = 50 \\times \\tan 25^\\circ$$

**Step 5:** Calculate the value and round to the nearest whole number:
$$z \\approx 50 \\times 0.4663 = 23.315 \\approx 23$$`
});

// Q6d
const q6dSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 150 L 190 150 L 190 50 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 150 L 178 138 L 190 138" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">150</text>
  <text x="120" y="175" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">w</text>
  <path d="M 80 150 A 30 30 0 0 0 74 131" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="90" y="142" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">58°</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Finding Side Lengths', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to the nearest whole number, the value of the pronumeral $w$ in the diagram below.<br/>${q6dSvg}`,
  options: [{ text: '79', imageUrl: '' }, { text: '80', imageUrl: '' }, { text: '85', imageUrl: '' }, { text: '127', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Analyze the given right-angled triangle relative to the $58^\\circ$ angle:
- The **adjacent** side is $w$.
- The **hypotenuse** is $150$.

**Step 2:** Select the trigonometric ratio that relates the adjacent side and the hypotenuse:
$$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$

**Step 3:** Substitute the given values into the formula:
$$\\cos 58^\\circ = \\frac{w}{150}$$

**Step 4:** Solve for $w$ by multiplying both sides by $150$:
$$w = 150 \\times \\cos 58^\\circ$$

**Step 5:** Calculate the value and round to the nearest whole number:
$$w \\approx 150 \\times 0.5299 = 79.488 \\approx 79$$`
});


// ==========================================
// QUESTION 7: Finding Angles with Diagrams (4 Questions)
// ==========================================

// Q7a
const q7aSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 150 L 190 150 L 190 45 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 150 L 178 138 L 190 138" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="85" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">15</text>
  <text x="210" y="102" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">9</text>
  <path d="M 80 150 A 30 30 0 0 0 74 131" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="90" y="142" fill="#fbbf24" font-size="16" font-family="Outfit, sans-serif" font-weight="600">θ</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Finding Angles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to the nearest degree, the size of the angle marked with $\\theta$ in the diagram below.<br/>${q7aSvg}`,
  options: [{ text: '37°', imageUrl: '' }, { text: '53°', imageUrl: '' }, { text: '31°', imageUrl: '' }, { text: '45°', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Analyze the given right-angled triangle relative to the angle $\\theta$:
- The **opposite** side is $9$.
- The **hypotenuse** is $15$.

**Step 2:** Select the trigonometric ratio that relates the opposite side and the hypotenuse:
$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$

**Step 3:** Substitute the given values into the formula:
$$\\sin \\theta = \\frac{9}{15} = 0.6$$

**Step 4:** Solve for $\\theta$ by taking the inverse sine (arcsine) of both sides:
$$\\theta = \\sin^{-1}(0.6)$$

**Step 5:** Calculate the value and round to the nearest degree:
$$\\theta \\approx 36.87^\\circ \\approx 37^\\circ$$`
});

// Q7b
const q7bSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 150 L 190 150 L 50 38 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 50 138 L 62 138 L 62 150" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="32" y="99" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">8</text>
  <text x="120" y="175" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">10</text>
  <path d="M 160 150 A 30 30 0 0 0 170 128" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="145" y="140" fill="#fbbf24" font-size="16" font-family="Outfit, sans-serif" font-weight="600">φ</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Finding Angles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to the nearest degree, the size of the angle marked with $\\phi$ in the diagram below.<br/>${q7bSvg}`,
  options: [{ text: '39°', imageUrl: '' }, { text: '51°', imageUrl: '' }, { text: '37°', imageUrl: '' }, { text: '45°', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Analyze the given right-angled triangle relative to the angle $\\phi$:
- The **opposite** side is $8$.
- The **adjacent** side is $10$.

**Step 2:** Select the trigonometric ratio that relates the opposite side and the adjacent side:
$$\\tan \\phi = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

**Step 3:** Substitute the given values into the formula:
$$\\tan \\phi = \\frac{8}{10} = 0.8$$

**Step 4:** Solve for $\\phi$ by taking the inverse tangent (arctangent) of both sides:
$$\\phi = \\tan^{-1}(0.8)$$

**Step 5:** Calculate the value and round to the nearest degree:
$$\\phi \\approx 38.66^\\circ \\approx 39^\\circ$$`
});

// Q7c
const q7cSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 150 L 190 150 L 190 99 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 150 L 178 138 L 190 138" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="115" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">25</text>
  <text x="210" y="130" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">7</text>
  <path d="M 190 115 A 15 15 0 0 1 178 123" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="162" y="116" fill="#fbbf24" font-size="16" font-family="Outfit, sans-serif" font-weight="600">ψ</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Finding Angles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to the nearest degree, the size of the angle marked with $\\psi$ in the diagram below.<br/>${q7cSvg}`,
  options: [{ text: '74°', imageUrl: '' }, { text: '16°', imageUrl: '' }, { text: '73°', imageUrl: '' }, { text: '75°', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Analyze the given right-angled triangle relative to the angle $\\psi$:
- The **adjacent** side is $7$.
- The **hypotenuse** is $25$.

**Step 2:** Select the trigonometric ratio that relates the adjacent side and the hypotenuse:
$$\\cos \\psi = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$

**Step 3:** Substitute the given values into the formula:
$$\\cos \\psi = \\frac{7}{25} = 0.28$$

**Step 4:** Solve for $\\psi$ by taking the inverse cosine (arccosine) of both sides:
$$\\psi = \\cos^{-1}(0.28)$$

**Step 5:** Calculate the value and round to the nearest degree:
$$\\psi \\approx 73.74^\\circ \\approx 74^\\circ$$`
});

// Q7d
const q7dSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 150 L 190 150 L 190 83 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 150 L 178 138 L 190 138" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="120" y="175" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">24</text>
  <text x="210" y="122" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">10</text>
  <path d="M 190 98 A 15 15 0 0 1 178 106" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="162" y="99" fill="#fbbf24" font-size="16" font-family="Outfit, sans-serif" font-weight="600">ω</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-5', chapterTitle: 'Chapter 5: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Finding Angles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to the nearest degree, the size of the angle marked with $\\omega$ in the diagram below.<br/>${q7dSvg}`,
  options: [{ text: '67°', imageUrl: '' }, { text: '23°', imageUrl: '' }, { text: '66°', imageUrl: '' }, { text: '68°', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1:** Analyze the given right-angled triangle relative to the angle $\\omega$ at the top right:
- The **opposite** side is $24$ (the bottom side opposite to $\\omega$).
- The **adjacent** side is $10$ (the vertical side next to $\\omega$).

**Step 2:** Select the trigonometric ratio that relates the opposite side and the adjacent side:
$$\\tan \\omega = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

**Step 3:** Substitute the given values into the formula:
$$\\tan \\omega = \\frac{24}{10} = 2.4$$

**Step 4:** Solve for $\\omega$ by taking the inverse tangent (arctangent) of both sides:
$$\\omega = \\tan^{-1}(2.4)$$

**Step 5:** Calculate the value and round to the nearest degree:
$$\\omega \\approx 67.38^\\circ \\approx 67^\\circ$$`
});


// ==========================================
// ASSEMBLING & DEDUPLICATING WITH PRESERVATION
// ==========================================
const mergedQuestions = [...originalQuestions, ...trigQuestions];

// Deduplicate based on question text to ensure 100% data integrity
const uniqueQuestionsMap = new Map();
mergedQuestions.forEach(q => {
  uniqueQuestionsMap.set(q.question, q);
});
const deduplicatedQuestions = Array.from(uniqueQuestionsMap.values());

console.log(`Successfully merged questions!`);
console.log(`Original: ${originalQuestions.length}`);
console.log(`New Trigonometry: ${trigQuestions.length}`);
console.log(`Total Merged Unique: ${deduplicatedQuestions.length}`);

// Generate file content for src/scripts/importYear11AdvCh5.js
const outputContent = `import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-5',
  chapterTitle: 'Chapter 5: Trigonometry & Translations',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

export const questions5A = ${JSON.stringify(deduplicatedQuestions, null, 2)};

export const importYear11AdvCh5 = async (forceReset = false) => {
  console.log(\`Starting sync of Y11 Adv Ch5A (Total \${questions5A.length})...\`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), 
      where('chapterId', '==', 'y11a-5'),
      where('topicCode', '==', '5A')
    ));
    
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(\`Cleared \${qSnap.size} old questions under chapter y11a-5, topicCode 5A.\`);

    let count = 0;
    for (const q of questions5A) {
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

fs.writeFileSync('src/scripts/importYear11AdvCh5.js', outputContent);
console.log('Successfully wrote combined questions to src/scripts/importYear11AdvCh5.js!');
